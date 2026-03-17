'use client'

import { useState, useRef, useEffect } from 'react'
import { Mail, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { CONTACT_EMAIL, WHATSAPP_LINK } from '@/lib/constants'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'

// Get all unique certification names for autocomplete
const getAllCertificationNames = (): string[] => {
  const names = new Set<string>()
  CERTIFICATION_CATEGORIES.forEach(category => {
    category.items.forEach(item => {
      names.add(item.name)
    })
  })
  return Array.from(names).sort()
}

const ALL_CERTIFICATION_NAMES = getAllCertificationNames()

interface ContactSidebarProps {
  defaultExamName?: string
}

const COMMON_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'icloud.com',
  'aol.com',
  'mail.com',
  'protonmail.com',
  'yandex.com',
]

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
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([])
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  
  // Exam name autocomplete state
  const [examSuggestions, setExamSuggestions] = useState<string[]>([])
  const [selectedExamIndex, setSelectedExamIndex] = useState(-1)
  const [showExamSuggestions, setShowExamSuggestions] = useState(false)
  const examInputRef = useRef<HTMLInputElement>(null)
  const examSuggestionsRef = useRef<HTMLDivElement>(null)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({ ...formData, email: value })
    setError('')
    
    // Check if email already contains "@" - if so, use domain filtering
    const atIndex = value.indexOf('@')
    if (atIndex >= 0) {
      const afterAt = value.substring(atIndex + 1)
      const beforeAt = value.substring(0, atIndex + 1)
      
      // If there's no space and user is typing after "@"
      if (!afterAt.includes(' ') && !afterAt.includes('@')) {
        // If user just typed "@" (afterAt is empty), show all domains
        // Otherwise, filter domains that match what they're typing
        const domainsToShow = afterAt.length === 0
          ? COMMON_EMAIL_DOMAINS
          : COMMON_EMAIL_DOMAINS.filter(domain => 
              domain.startsWith(afterAt.toLowerCase())
            )
        
        const suggestions = domainsToShow.map(domain => beforeAt + domain)
        setEmailSuggestions(suggestions)
        setShowSuggestions(suggestions.length > 0)
        setSelectedSuggestionIndex(-1)
      } else {
        setShowSuggestions(false)
      }
    } else {
      // Predictive: Show suggestions for what user has typed so far
      // Only show if user has typed at least 1 character and no "@" yet
      if (value.length > 0 && !value.includes('@') && !value.includes(' ')) {
        const prefix = value.toLowerCase()
        // Generate suggestions for all common domains
        const suggestions = COMMON_EMAIL_DOMAINS.map(domain => `${prefix}@${domain}`)
        setEmailSuggestions(suggestions)
        setShowSuggestions(true)
        setSelectedSuggestionIndex(-1)
      } else {
        setShowSuggestions(false)
      }
    }
  }

  const handleExamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({ ...formData, examName: value })
    setError('')
    
    // Show suggestions if user has typed at least 1 character
    if (value.length > 0) {
      const filtered = ALL_CERTIFICATION_NAMES.filter(name =>
        name.toLowerCase().includes(value.toLowerCase())
      )
      setExamSuggestions(filtered.slice(0, 10)) // Limit to 10 suggestions
      setShowExamSuggestions(filtered.length > 0)
      setSelectedExamIndex(-1)
    } else {
      setShowExamSuggestions(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'email') {
      handleEmailChange(e as React.ChangeEvent<HTMLInputElement>)
    } else if (e.target.name === 'examName') {
      handleExamNameChange(e as React.ChangeEvent<HTMLInputElement>)
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
      setError('')
    }
  }

  const selectExamSuggestion = (examName: string) => {
    setFormData({ ...formData, examName })
    setShowExamSuggestions(false)
    examInputRef.current?.focus()
  }

  const handleExamKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showExamSuggestions || examSuggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedExamIndex(prev => 
        prev < examSuggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedExamIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter' && selectedExamIndex >= 0) {
      e.preventDefault()
      selectExamSuggestion(examSuggestions[selectedExamIndex])
    } else if (e.key === 'Escape') {
      setShowExamSuggestions(false)
    }
  }

  const selectSuggestion = (fullEmail: string) => {
    setFormData({ ...formData, email: fullEmail })
    setShowSuggestions(false)
    emailInputRef.current?.focus()
  }

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || emailSuggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedSuggestionIndex(prev => 
        prev < emailSuggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedSuggestionIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
      e.preventDefault()
      selectSuggestion(emailSuggestions[selectedSuggestionIndex])
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close email suggestions
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        emailInputRef.current &&
        !emailInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
      
      // Close exam suggestions
      if (
        examSuggestionsRef.current &&
        !examSuggestionsRef.current.contains(event.target as Node) &&
        examInputRef.current &&
        !examInputRef.current.contains(event.target as Node)
      ) {
        setShowExamSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
              <div className="relative">
                <label htmlFor="sidebar-email" className="block text-xs font-medium text-gray-600 mb-1">
                  Email *
                </label>
                <input
                  ref={emailInputRef}
                  id="sidebar-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={handleEmailKeyDown}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
                  placeholder="you@example.com"
                />
                {showSuggestions && emailSuggestions.length > 0 && (
                  <div
                    ref={suggestionsRef}
                    className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-auto"
                  >
                    {emailSuggestions.map((fullEmail, index) => {
                      const atIndex = fullEmail.indexOf('@')
                      const prefix = atIndex > 0 ? fullEmail.substring(0, atIndex) : ''
                      const domain = atIndex >= 0 ? fullEmail.substring(atIndex + 1) : fullEmail
                      
                      return (
                        <button
                          key={`${fullEmail}-${index}`}
                          type="button"
                          onClick={() => selectSuggestion(fullEmail)}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-salesforce-blue/10 transition-colors ${
                            index === selectedSuggestionIndex ? 'bg-salesforce-blue/20' : ''
                          }`}
                        >
                          <span className="text-gray-900 font-medium">{fullEmail}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
              <div className="relative">
                <label htmlFor="sidebar-examName" className="block text-xs font-medium text-gray-600 mb-1">
                  Exam / Certification
                </label>
                <input
                  ref={examInputRef}
                  id="sidebar-examName"
                  name="examName"
                  type="text"
                  value={formData.examName}
                  onChange={handleChange}
                  onKeyDown={handleExamKeyDown}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
                  placeholder="e.g. Platform Administrator"
                />
                {showExamSuggestions && examSuggestions.length > 0 && (
                  <div
                    ref={examSuggestionsRef}
                    className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-auto"
                  >
                    {examSuggestions.map((examName, index) => (
                      <button
                        key={`${examName}-${index}`}
                        type="button"
                        onClick={() => selectExamSuggestion(examName)}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-salesforce-blue/10 transition-colors ${
                          index === selectedExamIndex ? 'bg-salesforce-blue/20' : ''
                        }`}
                      >
                        <span className="text-gray-900 font-medium">{examName}</span>
                      </button>
                    ))}
                  </div>
                )}
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
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0D7B4A] text-white rounded-lg font-semibold text-sm hover:bg-[#0A6940] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-gray-600 text-center">
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
