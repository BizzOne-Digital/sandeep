import { NextRequest, NextResponse } from 'next/server';
import { runChatGraph, type ChatHistoryMessage } from '@/lib/chatbot/langgraph';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history = [] } = body as {
      message?: string;
      history?: ChatHistoryMessage[];
    };

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const validHistory = (history || [])
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-10);

    const result = await runChatGraph(message.trim(), validHistory);

    return NextResponse.json({
      reply: result.answer,
      contextUsed: result.contextUsed,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    const msg = error instanceof Error ? error.message : 'Something went wrong';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
