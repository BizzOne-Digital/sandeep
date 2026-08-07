import { ChatXAI } from '@langchain/xai';
import { ChatGroq } from '@langchain/groq';
import { HumanMessage, AIMessage, SystemMessage, type BaseMessage } from '@langchain/core/messages';
import { Annotation, StateGraph, START, END } from '@langchain/langgraph';
import { Document } from '@langchain/core/documents';
import { readFileSync } from 'fs';
import { join } from 'path';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { getVectorStore, isQdrantAvailable } from './qdrant-store';
import { embedText, cosineSimilarity } from './embeddings';
import type { BaseChatModel } from '@langchain/core/language_models/chat_models';

export interface ChatHistoryMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const GraphState = Annotation.Root({
  query: Annotation<string>,
  history: Annotation<ChatHistoryMessage[]>,
  context: Annotation<Document[]>,
  answer: Annotation<string>,
});

const SYSTEM_PROMPT = `You are the friendly AI assistant for B.Tech Eco Clean, a premium eco-friendly cleaning company serving Edmonton and surrounding areas.

Your role:
- Answer questions about B.Tech Eco Clean services, pricing, booking, contact info, and policies using the provided context.
- For general cleaning or eco-friendly tips, give helpful advice and mention relevant B.Tech services when appropriate.
- Be concise, warm, and professional. Use bullet points for lists.
- Always include contact info when users ask about booking: Phone +1 416-710-5808, Email btechecoclean@gmail.com, or visit /contact.
- If you don't know something specific, suggest contacting the team directly.
- Never make up prices — use only the context provided.`;

let fallbackDocs: Document[] | null = null;

async function loadFallbackDocs(): Promise<Document[]> {
  if (fallbackDocs) return fallbackDocs;

  try {
    const content = readFileSync(join(process.cwd(), 'docs', 'site-knowledge-base.md'), 'utf-8');
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 800,
      chunkOverlap: 150,
    });
    fallbackDocs = await splitter.createDocuments([content], [{ source: 'site-knowledge-base.md' }]);
  } catch {
    fallbackDocs = [];
  }

  return fallbackDocs;
}

async function searchFallback(query: string, k = 5): Promise<Document[]> {
  const docs = await loadFallbackDocs();
  const qv = embedText(query);

  return docs
    .map((doc) => ({
      doc,
      score: cosineSimilarity(qv, embedText(doc.pageContent)),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .filter((x) => x.score > 0.05)
    .map((x) => x.doc);
}

async function retrieveNode(
  state: typeof GraphState.State
): Promise<Partial<typeof GraphState.State>> {
  let context: Document[] = [];

  try {
    if (await isQdrantAvailable()) {
      const store = await getVectorStore();
      context = await store.similaritySearch(state.query, 5);
    } else {
      context = await searchFallback(state.query, 5);
    }
  } catch {
    context = await searchFallback(state.query, 5);
  }

  return { context };
}

function getChatModel(): BaseChatModel {
  const groqKey = process.env.GROQ_API_KEY;
  const xaiKey = process.env.XAI_API_KEY || process.env.GROK_API_KEY;

  // Groq keys start with gsk_ — preferred when GROQ_API_KEY is set
  if (groqKey) {
    return new ChatGroq({
      model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
      apiKey: groqKey,
      temperature: 0.4,
      maxTokens: 1024,
    });
  }

  if (xaiKey) {
    return new ChatXAI({
      model: process.env.GROK_MODEL || 'grok-3-mini',
      apiKey: xaiKey,
      temperature: 0.4,
      maxTokens: 1024,
    });
  }

  throw new Error(
    'No LLM API key configured. Add GROQ_API_KEY or XAI_API_KEY to .env.local'
  );
}

async function generateNode(
  state: typeof GraphState.State
): Promise<Partial<typeof GraphState.State>> {
  const contextText =
    state.context.length > 0
      ? state.context.map((d, i) => `[${i + 1}] ${d.pageContent}`).join('\n\n---\n\n')
      : 'No specific context retrieved. Answer using general knowledge about eco-friendly cleaning and direct users to B.Tech Eco Clean for specifics.';

  const messages: BaseMessage[] = [
    new SystemMessage(`${SYSTEM_PROMPT}\n\nRELEVANT SITE CONTEXT:\n${contextText}`),
    ...state.history
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .map((m) =>
        m.role === 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
      ),
    new HumanMessage(state.query),
  ];

  const model = getChatModel();
  const response = await model.invoke(messages);
  const answer =
    typeof response.content === 'string'
      ? response.content
      : JSON.stringify(response.content);

  return { answer };
}

function buildGraph() {
  return new StateGraph(GraphState)
    .addNode('retrieve', retrieveNode)
    .addNode('generate', generateNode)
    .addEdge(START, 'retrieve')
    .addEdge('retrieve', 'generate')
    .addEdge('generate', END)
    .compile();
}

let compiledGraph: ReturnType<typeof buildGraph> | null = null;

function getGraph() {
  if (!compiledGraph) compiledGraph = buildGraph();
  return compiledGraph;
}

/** LangGraph RAG pipeline: retrieve (Qdrant) → generate (Grok) */
export async function runChatGraph(
  query: string,
  history: ChatHistoryMessage[] = []
): Promise<{ answer: string; contextUsed: boolean }> {
  const result = await getGraph().invoke({
    query,
    history,
    context: [],
    answer: '',
  });

  return {
    answer: result.answer,
    contextUsed: result.context.length > 0,
  };
}
