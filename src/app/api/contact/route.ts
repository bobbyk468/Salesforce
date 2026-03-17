import { NextResponse } from 'next/server'
import { CONTACT_EMAIL } from '@/lib/constants'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const CONTACT_FALLBACK_MESSAGE = 'Contact form is temporarily unavailable. Please email us directly.'
const AUTH_RETRY_MESSAGE = 'If you are logged in, try logging out and back in.'

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count += 1
  return false
}

async function getUpstreamErrorMessage(response: Response) {
  try {
    const json = await response.json()
    if (typeof json?.message === 'string' && json.message.trim()) return json.message
    if (typeof json?.error === 'string' && json.error.trim()) return json.error
    return `HTTP ${response.status}`
  } catch {
    return `HTTP ${response.status}`
  }
}

function isAuthProviderError(status: number, message: string) {
  return status === 401 || status === 403 || /\bunauthenticated\b|\bunauthorized\b/i.test(message)
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request)
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { username, email, examName, content } = body

    if (!username?.trim() || !email?.trim() || !content?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Log for debugging (won't expose the key, just confirms it's missing)
      console.error('[Contact API] RESEND_API_KEY is missing. Available env vars:', Object.keys(process.env).filter(k => k.includes('RESEND')))
      return NextResponse.json(
        { error: CONTACT_FALLBACK_MESSAGE },
        { status: 503 }
      )
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Trailblaze Prep <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        replyTo: `${username} <${email}>`,
        subject: `Contact Form: ${examName ? `[${examName}] ` : ''}${username}`,
        text: `Name: ${username}\nEmail: ${email}\nExam/Certification: ${examName || '(not specified)'}\n\nMessage:\n${content}`,
      }),
    })

    if (!res.ok) {
      const upstreamMessage = await getUpstreamErrorMessage(res)
      const authProviderError = isAuthProviderError(res.status, upstreamMessage)

      console.error('[Contact API] Resend request failed', {
        status: res.status,
        message: upstreamMessage,
      })

      return NextResponse.json(
        {
          error: authProviderError
            ? `${AUTH_RETRY_MESSAGE} If the issue continues, please email us directly.`
            : 'Failed to send message. Please try again or email us directly.',
        },
        { status: authProviderError ? 503 : 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
