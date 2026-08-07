/**
 * Ingest site knowledge base into Qdrant via LangChain.
 * Run: npm run ingest-kb
 *
 * Requires Qdrant at QDRANT_URL (default http://localhost:6333)
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { Document } from '@langchain/core/documents';
import { createVectorStoreFromDocuments, isQdrantAvailable } from '../lib/chatbot/qdrant-store';

async function ingest() {
  const available = await isQdrantAvailable();
  if (!available) {
    console.error('❌ Qdrant is not reachable. Start it first:');
    console.error('   docker run -p 6333:6333 qdrant/qdrant');
    process.exit(1);
  }

  const docPath = join(process.cwd(), 'docs', 'site-knowledge-base.md');
  console.log(`📄 Reading: ${docPath}`);

  const content = readFileSync(docPath, 'utf-8');
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 150,
  });

  const docs: Document[] = await splitter.createDocuments(
    [content],
    [{ source: 'site-knowledge-base.md' }]
  );
  console.log(`✂️  Created ${docs.length} chunks`);

  console.log('🔗 Upserting into Qdrant...');
  await createVectorStoreFromDocuments(docs);
  console.log(`✅ Ingested ${docs.length} chunks into Qdrant`);
  process.exit(0);
}

ingest().catch((err) => {
  console.error('❌ Ingest failed:', err);
  process.exit(1);
});
