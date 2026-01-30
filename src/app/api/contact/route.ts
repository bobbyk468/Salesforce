import { NextResponse } from 'next/server'
import { CONTACT_EMAIL } from '@/lib/constants'

export async function POST(request: Request) {
  try {
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
      // Fallback: log and return success so form still works; user gets email via mailto or adds Resend later
      console.log('Contact form submission (RESEND_API_KEY not set):', {
        to: CONTACT_EMAIL,
        from: email,
        username,
        examName: examName || '(not specified)',
        content,
      })
      return NextResponse.json({ success: true })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Salesforce Certifications <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        replyTo: email,
        subject: `Contact: ${examName ? `[${examName}] ` : ''}${username}`,
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
