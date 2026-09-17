import { NextResponse } from 'next/server'
import knowledgeBase from '../../../../bot-data/knowledge-base.json'
import { getRuntimeSecret } from '@/lib/runtime-secrets'

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

  try {
    // JSON is bundled at build time so this works in both Vercel and Workers.
    const kb = knowledgeBase as { chunks: Chunk[] }
    // The assistant is intentionally limited to Trailblaze Prep content.
    const websiteChunks = (kb.chunks || []).filter(chunk => chunk.source === 'trailblazeprep')
    if (!websiteChunks.length) return null

    const tokenized = websiteChunks.map(c => tokenize(c.title + ' ' + c.content))
    const df: Record<string, number> = {}
    tokenized.forEach(tokens => {
      new Set(tokens).forEach(t => { df[t] = (df[t] || 0) + 1 })
    })
    const avgdl = tokenized.reduce((s, t) => s + t.length, 0) / tokenized.length

    _index = { chunks: websiteChunks, tokenized, df, avgdl, N: websiteChunks.length }
    console.log(`[Chat] BM25 index built: ${websiteChunks.length} Trailblaze Prep chunks`)
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
    const matchedTerms = [...new Set(queryTokens.filter(qt => tokens.includes(qt)))]
    const titleTerms = tokenize(chunk.title)
    const hasTitleMatch = queryTokens.some(qt => titleTerms.includes(qt))
    const score = queryTokens.reduce((sum, qt) => {
      const freq = tokens.filter(t => t === qt).length
      if (!freq) return sum
      const idf = Math.log((N - (df[qt] || 0) + 0.5) / ((df[qt] || 0) + 0.5) + 1)
      const tf = (freq * (K1 + 1)) / (freq + K1 * (1 - B + B * dl / avgdl))
      return sum + idf * tf
    }, 0)
    return { chunk, score, matchedTerms, hasTitleMatch }
  })

  return scores
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    // A generic verb such as "explain" is not enough evidence to send a
    // question to the model. Require multiple terms or a title-level match.
    .filter(s => s.score > 0 && (s.matchedTerms.length >= 2 || s.hasTitleMatch))
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

const SYSTEM_PROMPT = `You are the Trailblaze Prep certification assistant.
Answer only with facts, recommendations, and figures explicitly supported by the Trailblaze Prep context provided with the question.
Do not use general Salesforce knowledge, external sources, prior conversation details, or unsupported inference.
If the context is incomplete, say that Trailblaze Prep does not yet cover that detail, then answer only the portion that the context supports.
Keep answers under 180 words unless the user asks for detail.
Do not use markdown headers or bullet symbols. Write in plain, clear sentences.
Never invent exam questions, passing percentages, or fees — only cite figures found in the context.

After every answer, on a new line write exactly this (no deviations):
FOLLOW_UP: <question 1> | <question 2> | <question 3> | <question 4>
The follow-up questions must be complete, specific questions (12–18 words each) ending with a "?" that a real student would naturally ask next. They should add depth, explore adjacent topics, or clarify a detail from the answer. Always include exactly 3 to 4 questions separated by " | ". Every question must end with a question mark.`

function createSseResponse(content: string): Response {
  const encoder = new TextEncoder()
  const payload = JSON.stringify({ choices: [{ delta: { content } }] })
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${payload}\n\n`))
      controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
      Connection: 'keep-alive',
    },
  })
}

const NOT_COVERED_RESPONSE = `I can answer only from Trailblaze Prep content, and this topic is not covered in the current study guides. Try asking about a certification, exam format, study guide, or certification path on Trailblaze Prep.
FOLLOW_UP: Which Salesforce certification should I start with based on Trailblaze Prep guidance? | What exam format does the Salesforce Administrator study guide describe? | Which Trailblaze Prep study guide covers Platform Developer I preparation? | What certification path does Trailblaze Prep recommend for aspiring architects?`

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
    const { message } = body as {
      message: string
    }

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    // BM25 retrieval against the bundled Trailblaze Prep corpus only.
    const chunks = bm25Search(message, 5)
    if (!chunks.length) return createSseResponse(NOT_COVERED_RESPONSE)

    const apiKey = await getRuntimeSecret('GROQ_API_KEY')
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Bot is temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    const context = chunks
      .map(c => `[Trailblaze Prep page: ${c.title}]\n${c.content}`)
      .join('\n\n---\n\n')

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
