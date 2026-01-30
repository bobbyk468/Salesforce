'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { CONTACT_EMAIL, WHATSAPP_LINK } from '@/lib/constants'

interface ContactSidebarProps {
  defaultExamName?: string
}

export default function ContactSidebar({ defaultExamName = '' }: ContactSidebarProps) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    examName: defaultExamName,
    content: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setIsSubmitted(true)
      setFormData({ username: '', email: '', examName: defaultExamName, content: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-br from-salesforce-dark via-salesforce-blue to-salesforce-light p-4 text-white">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6" />
            <h3 className="font-bold text-lg">Contact Us</h3>
          </div>
          <p className="text-white/90 text-sm mt-1">
            Questions? We&apos;ll reply to <span className="font-medium">{CONTACT_EMAIL}</span>
          </p>
        </div>
        <div className="p-4">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900">Message sent!</p>
              <p className="text-sm text-gray-600 mt-1">We&apos;ll get back to you soon.</p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-sm text-salesforce-blue font-medium hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="sidebar-username" className="block text-xs font-medium text-gray-600 mb-1">
                  Name *
                </label>
                <input
                  id="sidebar-username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="sidebar-email" className="block text-xs font-medium text-gray-600 mb-1">
                  Email *
                </label>
                <input
                  id="sidebar-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="sidebar-examName" className="block text-xs font-medium text-gray-600 mb-1">
                  Exam / Certification
                </label>
                <input
                  id="sidebar-examName"
                  name="examName"
                  type="text"
                  value={formData.examName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
                  placeholder="e.g. Platform Administrator"
                />
              </div>
              <div>
                <label htmlFor="sidebar-content" className="block text-xs font-medium text-gray-600 mb-1">
                  Message *
                </label>
                <textarea
                  id="sidebar-content"
                  name="content"
                  required
                  rows={4}
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-salesforce-blue focus:border-transparent resize-none"
                  placeholder="Your question or request..."
                />
              </div>
              {error && <p className="text-xs text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-salesforce-blue text-white rounded-lg font-semibold text-sm hover:bg-salesforce-dark transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send
                  </>
                )}
              </button>
            </form>
          )}
          <div className="mt-4 space-y-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white rounded-lg font-semibold text-sm hover:bg-[#20BA5A] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-gray-500 text-center">
              Or email directly:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-salesforce-blue font-medium hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
