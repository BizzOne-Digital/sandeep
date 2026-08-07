import { Embeddings } from '@langchain/core/embeddings';

const EMBEDDING_DIM = 384;

function fnv1a(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function normalize(vector: number[]): number[] {
  const norm = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0));
  if (norm === 0) return vector;
  return vector.map((v) => v / norm);
}

/** Deterministic hash embedding — no extra API key needed for RAG retrieval. */
export function embedText(text: string): number[] {
  const vector = new Array<number>(EMBEDDING_DIM).fill(0);
  const normalized = text.toLowerCase().replace(/[^\w\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter(Boolean);

  for (const token of tokens) {
    const hash = fnv1a(token);
    const index = hash % EMBEDDING_DIM;
    const sign = hash % 2 === 0 ? 1 : -1;
    vector[index] += sign * (1 + token.length * 0.1);

    if (token.length > 3) {
      for (let i = 0; i < token.length - 2; i++) {
        const triHash = fnv1a(token.slice(i, i + 3));
        vector[triHash % EMBEDDING_DIM] += sign * 0.5;
      }
    }
  }

  return normalize(vector);
}

export function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

export class SiteEmbeddings extends Embeddings {
  constructor() {
    super({});
  }

  async embedDocuments(documents: string[]): Promise<number[][]> {
    return documents.map(embedText);
  }

  async embedQuery(document: string): Promise<number[]> {
    return embedText(document);
  }
}

export const EMBEDDING_DIMENSION = EMBEDDING_DIM;
