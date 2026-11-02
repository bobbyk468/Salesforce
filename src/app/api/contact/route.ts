import { NextResponse } from 'next/server'
import { CONTACT_EMAIL } from '@/lib/constants'
import { readBoundedJson } from '@/lib/read-bounded-json'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request) {
  const cloudflareIp = request.headers.get('cf-connecting-ip')
  if (cloudflareIp) return cloudflareIp.trim()
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  for (const [key, value] of rateLimitMap) {
    if (value.resetAt <= now) rateLimitMap.delete(key)
  }
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count += 1
  return false
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!)
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

    const parsed = await readBoundedJson(request)
    if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: parsed.status })
    const body = parsed.body
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid contact submission.' }, { status: 400 })
    }
    const fields = body as Record<string, unknown>
    if (['username', 'email', 'content'].some(key => typeof fields[key] !== 'string') ||
        (fields.examName !== undefined && typeof fields.examName !== 'string')) {
      return NextResponse.json({ error: 'Contact fields must be text.' }, { status: 400 })
    }
    const username = (fields.username as string).trim()
    const email = (fields.email as string).trim()
    const content = (fields.content as string).trim()
    const examName = ((fields.examName as string | undefined) || '').trim()

    if (!username || !email || !content) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    if (username.length > 100 || email.length > 254 || examName.length > 200 || content.length > 5000 ||
        !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || /[\r\n]/.test(username + examName)) {
      return NextResponse.json({ error: 'Please enter a valid email and keep your message under 5,000 characters.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Log for debugging (won't expose the key, just confirms it's missing)
      console.error('[Contact API] Email service is not configured.')
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
        from: 'Trailblaze Prep <noreply@trailblazeprep.com>',
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Contact Form: ${examName ? `[${examName}] ` : ''}${username} <${email}>`,
        text: `Name: ${username}\nEmail: ${email}\nExam/Certification: ${examName || '(not specified)'}\n\nMessage:\n${content}\n\n---\nReply directly to: ${email}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(username)}</p><p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p><p><strong>Exam/Certification:</strong> ${escapeHtml(examName || '(not specified)')}</p><hr><p><strong>Message:</strong></p><p>${escapeHtml(content).replace(/\n/g, '<br>')}</p><hr><p style="color:#888;font-size:13px;">Reply directly to: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || 'Failed to send email')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API: message delivery failed.')
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
