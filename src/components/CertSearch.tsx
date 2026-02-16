'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, TrendingUp, Hash } from 'lucide-react'
import { searchCerts, POPULAR_SEARCHES, EXAM_CODE_SUGGESTIONS } from '@/lib/search-data'

export default function CertSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ name: string; href: string; examCode?: string }[]>([])
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const hasQuery = query.trim().length > 0
  const showResults = open && hasQuery && results.length > 0
  const showPopularAndCodes = open && !hasQuery

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setFocusedIndex(0)
      return
    }
    const matches = searchCerts(query)
    setResults(matches)
    setOpen(true)
    setFocusedIndex(0)
  }, [query])

  useEffect(() => {
    if (!showResults || !listRef.current) return
    const el = listRef.current.children[focusedIndex] as HTMLElement
    el?.scrollIntoView({ block: 'nearest' })
  }, [focusedIndex, showResults])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showPopularAndCodes) {
      if (e.key === 'Escape') {
        setOpen(false)
        inputRef.current?.blur()
      }
      return
    }
    if (!showResults || results.length === 0) {
      if (e.key === 'Escape') setQuery('')
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((i) => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      router.push(results[focusedIndex].href)
      setQuery('')
      setOpen(false)
    } else if (e.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  const handleFocus = () => setOpen(true)

  const handleBlur = () => {
    setTimeout(() => setOpen(false), 180)
  }

  return (
    <div className="relative w-full max-w-xs">
      <label htmlFor="cert-search" className="sr-only">
        Search certifications (e.g. ADM-201, Platform Developer I)
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
        <input
          id="cert-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Try: ADM-201, Platform Developer I…"
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-salesforce-blue/30 focus:border-salesforce-blue"
          role="combobox"
          aria-autocomplete="list"
          aria-controls="cert-search-results"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-activedescendant={showResults && results[focusedIndex] ? `result-${focusedIndex}` : undefined}
        />
      </div>

      {/* Autocomplete results (when user is typing) */}
      {showResults && (
        <ul
          id="cert-search-results"
          ref={listRef}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1 py-2 bg-white rounded-xl border border-gray-100 shadow-lg z-50 max-h-72 overflow-y-auto"
        >
          {results.map((cert, i) => (
            <li
              key={cert.href}
              id={`result-${i}`}
              role="option"
              aria-selected={i === focusedIndex}
              className={`px-4 py-2 text-sm flex items-center justify-between gap-2 ${i === focusedIndex ? 'bg-salesforce-blue/10 text-salesforce-dark' : 'text-gray-700'}`}
            >
              <Link
                href={cert.href}
                className="block hover:text-salesforce-blue flex-1 min-w-0"
                onMouseEnter={() => setFocusedIndex(i)}
              >
                <span className="truncate">{cert.name}</span>
              </Link>
              {cert.examCode && (
                <span className="flex-shrink-0 text-xs font-medium text-salesforce-blue bg-salesforce-blue/10 px-2 py-0.5 rounded">
                  {cert.examCode}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Popular searches + Exam code suggestions (when input focused and empty) */}
      {showPopularAndCodes && (
        <div
          className="absolute left-0 right-0 top-full mt-1 py-4 px-4 bg-white rounded-xl border border-gray-100 shadow-lg z-50 space-y-4 min-w-[280px]"
          role="region"
          aria-label="Search suggestions"
        >
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden />
              Popular searches
            </p>
            <ul className="space-y-0.5">
              {POPULAR_SEARCHES.map((cert) => (
                <li key={cert.href}>
                  <Link
                    href={cert.href}
                    className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-salesforce-blue/10 hover:text-salesforce-dark"
                  >
                    <span className="truncate">{cert.name}</span>
                    {cert.examCode && (
                      <span className="flex-shrink-0 text-xs font-medium text-salesforce-blue">
                        {cert.examCode}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              <Hash className="h-3.5 w-3.5" aria-hidden />
              Exam codes
            </p>
            <div className="flex flex-wrap gap-1.5">
              {EXAM_CODE_SUGGESTIONS.map(({ code, href, name }) => (
                <Link
                  key={code}
                  href={href}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-salesforce-blue/15 hover:text-salesforce-dark border border-transparent hover:border-salesforce-blue/30 transition-colors"
                  title={name}
                >
                  {code}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
