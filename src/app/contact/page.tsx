'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react'
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

/** Exam param indicates "full question bank" flow: show contextual heading, blurb, and "Request Access & Pricing" button. */
function isQuestionBankFlow(exam: string | null): boolean {
  return !!exam && exam.trim().length > 0
}

function getQuestionBankHeading(exam: string): string {
  const match = exam.match(/[A-Z]{2,5}-\d{3}/i)
  if (match) return `Get Full ${match[0].toUpperCase()} Question Bank Access`
  return 'Get Full Question Bank Access'
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

function ContactPageContent() {
  const searchParams = useSearchParams()
  const examParam = searchParams.get('exam') ? decodeURIComponent(searchParams.get('exam')!) : null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  useEffect(() => {
    if (examParam) setFormData(prev => ({ ...prev, subject: examParam }))
  }, [examParam])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({ ...formData, subject: value })
    
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
    } else if (e.target.name === 'subject') {
      handleSubjectChange(e as React.ChangeEvent<HTMLInputElement>)
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const selectExamSuggestion = (examName: string) => {
    setFormData({ ...formData, subject: examName })
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          examName: formData.subject,
          content: formData.message,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setIsSubmitting(false)
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions about our study materials? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions about our certification materials, pricing, or just want to say hello, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-salesforce-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-salesforce-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-salesforce-blue hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline font-medium"
                    >
                      Chat with us directly
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-salesforce-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-salesforce-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Available on request</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-salesforce-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-salesforce-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Remote - Worldwide</p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-6 bg-salesforce-blue/10 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Find answers to common questions about our certification materials and study guides.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• How do I access the study materials?</li>
                  <li>• Are the questions up to date?</li>
                  <li>• What certifications do you cover?</li>
                  <li>• Do you offer refunds?</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-salesforce-blue/10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-salesforce-blue text-white rounded-lg font-medium hover:bg-salesforce-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {examParam && isQuestionBankFlow(examParam) ? getQuestionBankHeading(examParam) : 'Send us a Message'}
                    </h2>
                    {examParam && (
                      <p className="text-sm text-gray-600 mb-6">
                        {isQuestionBankFlow(examParam) ? (
                          <>Exam: <strong>{examParam}</strong>. Access duration: 30, 60, or 90 days. Includes: Full mocks + section-wise practice. Add your message below and we&apos;ll respond with pricing and access details.</>
                        ) : (
                          <>Questions about <strong>{examParam}</strong>? The exam/certification field below is pre-filled—add your message and we&apos;ll get back to you.</>
                        )}
                      </p>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="relative">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            ref={emailInputRef}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onKeyDown={handleEmailKeyDown}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent transition-colors"
                            placeholder="john@example.com"
                          />
                          {showSuggestions && emailSuggestions.length > 0 && (
                            <div
                              ref={suggestionsRef}
                              className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-auto"
                            >
                              {emailSuggestions.map((fullEmail, index) => {
                                return (
                                  <button
                                    key={`${fullEmail}-${index}`}
                                    type="button"
                                    onClick={() => selectSuggestion(fullEmail)}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-salesforce-blue/10 transition-colors ${
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
                      </div>

                      <div className="relative">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Exam / Certification
                        </label>
                        <input
                          ref={examInputRef}
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onKeyDown={handleExamKeyDown}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent transition-colors"
                          placeholder="e.g. Platform Administrator, Developer I..."
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
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-salesforce-blue/10 transition-colors ${
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
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent transition-colors resize-none"
                          placeholder={examParam && isQuestionBankFlow(examParam) ? 'e.g. Looking for pricing / access details for the full question bank' : 'Tell us how we can help you...'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            {examParam && isQuestionBankFlow(examParam) ? 'Request Access & Pricing' : 'Send Message'}
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactPageFallback() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions about our study materials? We&apos;d love to hear from you.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center min-h-[40vh]">
          <p className="text-gray-500">Loading contact form...</p>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageFallback />}>
      <ContactPageContent />
    </Suspense>
  )
}
