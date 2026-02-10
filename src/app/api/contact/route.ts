import { NextResponse } from 'next/server'
import { CONTACT_EMAIL } from '@/lib/constants'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

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
        { error: 'Contact form is temporarily unavailable. Please email us directly.' },
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
        replyTo: email,
        subject: `Contact Form: ${examName ? `[${examName}] ` : ''}${username}`,
        text: `Name: ${username}\nEmail: ${email}\nExam/Certification: ${examName || '(not specified)'}\n\nMessage:\n${content}`,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || 'Failed to send email')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to send message.' },
      { status: 500 }
    )
  }
}
