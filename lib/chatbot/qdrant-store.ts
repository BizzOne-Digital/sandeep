import { Document } from '@langchain/core/documents';
import { QdrantVectorStore } from '@langchain/qdrant';
import { SiteEmbeddings, EMBEDDING_DIMENSION } from './embeddings';

const COLLECTION = () => process.env.QDRANT_COLLECTION || 'btech-eco-clean';

export function getEmbeddings() {
  return new SiteEmbeddings();
}

export function getQdrantConfig() {
  return {
    url: process.env.QDRANT_URL || 'http://localhost:6333',
    apiKey: process.env.QDRANT_API_KEY || undefined,
    collectionName: COLLECTION(),
    collectionConfig: {
      vectors: {
        size: EMBEDDING_DIMENSION,
        distance: 'Cosine' as const,
      },
    },
  };
}

export async function getVectorStore(): Promise<QdrantVectorStore> {
  return QdrantVectorStore.fromExistingCollection(getEmbeddings(), getQdrantConfig());
}

export async function createVectorStoreFromDocuments(
  docs: Document[]
): Promise<QdrantVectorStore> {
  return QdrantVectorStore.fromDocuments(docs, getEmbeddings(), getQdrantConfig());
}

export async function isQdrantAvailable(): Promise<boolean> {
  try {
    const url = (process.env.QDRANT_URL || 'http://localhost:6333').replace(/\/$/, '');
    const headers: Record<string, string> = {};
    if (process.env.QDRANT_API_KEY) headers['api-key'] = process.env.QDRANT_API_KEY;

    const res = await fetch(`${url}/collections`, {
      headers,
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
}
