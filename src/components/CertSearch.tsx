'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { searchCerts } from '@/lib/search-data'

export default function CertSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ name: string; href: string }[]>([])
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setOpen(false)
      return
    }
    const matches = searchCerts(query)
    setResults(matches)
    setOpen(matches.length > 0)
    setFocusedIndex(0)
  }, [query])

  useEffect(() => {
    if (!open || !listRef.current) return
    const el = listRef.current.children[focusedIndex] as HTMLElement
    el?.scrollIntoView({ block: 'nearest' })
  }, [focusedIndex, open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) {
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

  return (
    <div className="relative w-full max-w-xs">
      <label htmlFor="cert-search" className="sr-only">
        Search certifications by exam code or name
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
          onFocus={() => query.trim() && results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search (e.g. ADM-201, PD1)"
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-salesforce-blue/30 focus:border-salesforce-blue"
          aria-autocomplete="list"
          aria-controls="cert-search-results"
          aria-expanded={open}
          aria-activedescendant={open && results[focusedIndex] ? `result-${focusedIndex}` : undefined}
        />
      </div>
      {open && results.length > 0 && (
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
              className={`px-4 py-2 text-sm ${i === focusedIndex ? 'bg-salesforce-blue/10 text-salesforce-dark' : 'text-gray-700'}`}
            >
              <Link
                href={cert.href}
                className="block hover:text-salesforce-blue"
                onMouseEnter={() => setFocusedIndex(i)}
              >
                {cert.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
