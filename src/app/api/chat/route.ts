import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

// ---------------------------------------------------------------------------
// BM25 — retrieval at query time with no external deps or API calls
// ---------------------------------------------------------------------------

const K1 = 1.5
const B = 0.75

const STOPWORDS = new Set([
  'the','a','an','and','or','but','in','on','at','to','for','of','with',
  'by','from','is','are','was','were','be','been','have','has','had','do',
  'does','did','will','would','could','should','may','might','this','that',
  'these','those','it','its','not','no','as','if','then','than','so','up',
  'out','about','into','through','each','here','there','when','where',
  'which','who','how','what','all','both','more','most','other','some',
  'such','just','also','can','i','you','we','they','he','she','my','your',
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2 && !STOPWORDS.has(t))
}

interface Chunk {
  id: number
  title: string
  url: string
  source: string
  content: string
}

interface BM25State {
  chunks: Chunk[]
  tokenized: string[][]
  df: Record<string, number>
  avgdl: number
  N: number
}

let _index: BM25State | null = null

function getIndex(): BM25State | null {
  if (_index) return _index

  const filePath = join(process.cwd(), 'bot-data', 'knowledge-base.json')
  if (!existsSync(filePath)) return null

  try {
    const raw = readFileSync(filePath, 'utf-8')
    const kb = JSON.parse(raw) as { chunks: Chunk[] }
    if (!kb.chunks?.length) return null

    const tokenized = kb.chunks.map(c => tokenize(c.title + ' ' + c.content))
    const df: Record<string, number> = {}
    tokenized.forEach(tokens => {
      new Set(tokens).forEach(t => { df[t] = (df[t] || 0) + 1 })
    })
    const avgdl = tokenized.reduce((s, t) => s + t.length, 0) / tokenized.length

    _index = { chunks: kb.chunks, tokenized, df, avgdl, N: kb.chunks.length }
    console.log(`[Chat] BM25 index built: ${kb.chunks.length} chunks`)
    return _index
  } catch (err) {
    console.error('[Chat] Failed to load knowledge base:', err)
    return null
  }
}

function bm25Search(query: string, k = 5): Chunk[] {
  const state = getIndex()
  if (!state) return []

  const queryTokens = tokenize(query)
  if (!queryTokens.length) return []

  const { chunks, tokenized, df, avgdl, N } = state

  const scores = chunks.map((chunk, i) => {
    const tokens = tokenized[i]
    const dl = tokens.length
    const score = queryTokens.reduce((sum, qt) => {
      const freq = tokens.filter(t => t === qt).length
      if (!freq) return sum
      const idf = Math.log((N - (df[qt] || 0) + 0.5) / ((df[qt] || 0) + 0.5) + 1)
      const tf = (freq * (K1 + 1)) / (freq + K1 * (1 - B + B * dl / avgdl))
      return sum + idf * tf
    }, 0)
    return { chunk, score }
  })

  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .filter(s => s.score > 0)
    .map(s => s.chunk)
}

// ---------------------------------------------------------------------------
// Rate limiting
// ---------------------------------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 20
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count++
  return false
}

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are a helpful Salesforce certification assistant for Trailblaze Prep (trailblazeprep.com).
You help students prepare for Salesforce certification exams — study strategies, exam formats, which cert to pursue, topic breakdowns, and career paths.
Answer questions using the provided context. Be concise and accurate.
If context does not fully cover the question, use your general Salesforce knowledge but say so.
Keep answers under 180 words unless the user asks for detail.
Do not use markdown headers or bullet symbols. Write in plain, clear sentences.
Never invent exam questions, passing percentages, or fees — only cite figures found in the context.

After every answer, on a new line write exactly this (no deviations):
FOLLOW_UP: <question 1> | <question 2> | <question 3> | <question 4>
The follow-up questions must be complete, specific questions (12–18 words each) ending with a "?" that a real student would naturally ask next. They should add depth, explore adjacent topics, or clarify a detail from the answer. Always include exactly 3 to 4 questions separated by " | ". Every question must end with a question mark.`

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { message, history } = body as {
      message: string
      history?: Array<{ role: string; content: string }>
    }

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    const apiKey = process.env.STRIPE_SECRET_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Bot is temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    // BM25 retrieval — no external API call
    const chunks = bm25Search(message, 5)
    const context = chunks.length
      ? chunks.map(c => `[Source: ${c.title} — ${c.url}]\n${c.content}`).join('\n\n---\n\n')
      : 'No specific context found — answering from general Salesforce knowledge.'

    const conversationHistory = (history || [])
      .slice(-6)
      .map(m => ({ role: m.role as 'user' | 'assistant', content: m.content }))

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        stream: true,
        max_tokens: 350,
        temperature: 0.2,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...conversationHistory,
          {
            role: 'user',
            content: `Context:\n\n${context}\n\n---\n\nQuestion: ${message}`,
          },
        ],
      }),
    })

    if (!groqRes.ok) {
      const errText = await groqRes.text()
      console.error('[Chat] Groq error:', groqRes.status, errText)
      return NextResponse.json(
        { error: 'Assistant is temporarily unavailable. Please try again.' },
        { status: 503 }
      )
    }

    // Pipe Groq SSE stream directly to client
    return new Response(groqRes.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error('[Chat] Unexpected error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
