'use client'

import { useState, useRef, useEffect, useCallback, FormEvent } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string       // clean answer, FOLLOW_UP line stripped
  followUps?: string[]  // parsed follow-up questions
}

const SUGGESTED = [
  'Which cert should I start with?',
  'What is the Admin exam format?',
  'How hard is Platform Developer I?',
  'What path leads to CTA?',
]

const WELCOME: Message = {
  role: 'assistant',
  content:
    'Hi! I\'m your Salesforce certification guide. Ask me about any cert, study tips, exam format, or career path.',
}

function parseResponse(raw: string): { content: string; followUps: string[] } {
  const idx = raw.indexOf('FOLLOW_UP:')
  if (idx === -1) return { content: raw.trimEnd(), followUps: [] }

  const content = raw.slice(0, idx).trimEnd()
  const followUpLine = raw.slice(idx + 'FOLLOW_UP:'.length).trim()
  const followUps = followUpLine
    .split('|')
    .map(q => q.trim())
    .filter(q => q.length > 0)
    .map(q => q.endsWith('?') ? q : q + '?')

  return { content, followUps }
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (open && messages.length === 0) setMessages([WELCOME])
  }, [open, messages.length])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    } else {
      abortRef.current?.abort()
      abortRef.current = null
      setLoading(false)
    }
  }, [open])

  const send = useCallback(
    async (text: string) => {
      if (!text.trim() || loading) return

      const userMsg: Message = { role: 'user', content: text }
      setMessages(prev => [...prev, userMsg, { role: 'assistant', content: '' }])
      setInput('')
      setLoading(true)

      abortRef.current?.abort()
      abortRef.current = new AbortController()

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: text,
            // Send only clean content so FOLLOW_UP lines don't pollute history
            history: messages
              .filter(m => m.content)
              .slice(-6)
              .map(m => ({ role: m.role, content: m.content })),
          }),
          signal: abortRef.current.signal,
        })

        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: 'Error' }))
          setMessages(prev => {
            const updated = [...prev]
            updated[updated.length - 1] = { role: 'assistant', content: err.error || 'Something went wrong.' }
            return updated
          })
          return
        }

        const reader = res.body?.getReader()
        if (!reader) return

        const dec = new TextDecoder()
        let buf = ''
        let full = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buf += dec.decode(value, { stream: true })
          const lines = buf.split('\n')
          buf = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6).trim()
            if (data === '[DONE]') break
            try {
              const delta = JSON.parse(data).choices?.[0]?.delta?.content
              if (delta) {
                full += delta
                // Hide FOLLOW_UP line while it streams in
                const { content } = parseResponse(full)
                setMessages(prev => {
                  const updated = [...prev]
                  updated[updated.length - 1] = { role: 'assistant', content }
                  return updated
                })
              }
            } catch {
              // partial JSON — ignore
            }
          }
        }

        // Final parse: extract clean content + follow-ups
        const { content, followUps } = parseResponse(full)
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content, followUps }
          return updated
        })
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setMessages(prev => {
            const updated = [...prev]
            updated[updated.length - 1] = { role: 'assistant', content: 'Connection error. Please try again.' }
            return updated
          })
        }
      } finally {
        setLoading(false)
      }
    },
    [loading, messages]
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      {/* Floating toggle button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {!open && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative bg-gray-900 text-white text-xs font-medium rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Ask our AI cert assistant
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
            </div>
          </div>
        )}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#0176D3' }}
        aria-label={open ? 'Close chat' : 'Ask the certification assistant'}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {/* Robot/AI face */}
            <rect x="4" y="7" width="16" height="12" rx="3" fill="white" opacity="0.95"/>
            <circle cx="9" cy="13" r="1.5" fill="#0176D3"/>
            <circle cx="15" cy="13" r="1.5" fill="#0176D3"/>
            <path d="M9 17h6" stroke="#0176D3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 7V4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="3.5" r="1" fill="white"/>
            <path d="M4 11H2M22 11h-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl border border-gray-200 bg-white shadow-2xl"
          style={{ width: '380px', maxWidth: 'calc(100vw - 2rem)', height: '560px' }}
          role="dialog"
          aria-label="Salesforce certification assistant"
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 rounded-t-2xl px-4 py-3"
            style={{ backgroundColor: '#0176D3' }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
              T
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Cert Assistant</p>
              <p className="text-xs text-white/75">Trailblaze Prep &bull; Salesforce guide</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/70 hover:text-white"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user' ? 'text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: '#0176D3' } : undefined}
                >
                  {msg.content || (
                    loading && i === messages.length - 1 ? (
                      <span className="flex items-center gap-1">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </span>
                    ) : null
                  )}
                </div>

                {/* Follow-up chips — shown once streaming is done */}
                {msg.role === 'assistant' && msg.followUps && msg.followUps.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1.5 max-w-[90%]">
                    {msg.followUps.map(q => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        disabled={loading}
                        className="text-left text-xs px-3 py-1.5 rounded-lg border transition-colors hover:bg-blue-50 disabled:opacity-40"
                        style={{ borderColor: '#0176D3', color: '#0176D3' }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Suggested questions — visible only before first user message */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {SUGGESTED.map(q => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-blue-50"
                  style={{ borderColor: '#0176D3', color: '#0176D3' }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-100 px-4 pb-4 pt-2">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about any Salesforce cert..."
                disabled={loading}
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 disabled:opacity-50"
                style={{ '--tw-ring-color': '#0176D3' } as React.CSSProperties}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-lg px-3 py-2 text-white transition-colors disabled:opacity-40"
                style={{ backgroundColor: '#0176D3' }}
                aria-label="Send"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
