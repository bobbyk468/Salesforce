'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import type { SearchEntry } from '@/lib/search-index'

/**
 * Header search over a static index of every certification, study guide,
 * exam-tips page, comparison and tool on the site.
 *
 * The index is fetched on the first keystroke rather than on page load, so a
 * visitor who never searches downloads nothing extra. It is cached on the
 * module so it survives navigation between pages.
 */
let cachedIndex: SearchEntry[] | null = null
let inFlight: Promise<SearchEntry[]> | null = null

function loadIndex(): Promise<SearchEntry[]> {
  if (cachedIndex) return Promise.resolve(cachedIndex)
  if (!inFlight) {
    inFlight = fetch('/search-index.json')
      .then((response) => (response.ok ? response.json() : []))
      .then((data: SearchEntry[]) => {
        cachedIndex = data
        return data
      })
      .catch(() => [])
  }
  return inFlight
}

/**
 * Every term must appear somewhere in the haystack, so "admin tips" matches
 * "Salesforce Certified Administrator exam tips" while "admin xyz" matches
 * nothing. Ranking favours a title that starts with the query, then one that
 * contains it, then scattered term matches.
 */
function rank(entry: SearchEntry, query: string, terms: string[]): number {
  const title = entry.t.toLowerCase()
  if (title === query) return 0
  if (title.startsWith(query)) return 1
  if (title.includes(query)) return 2
  if (entry.k.includes(query)) return 3
  return terms.every((term) => entry.k.includes(term)) ? 4 : Number.POSITIVE_INFINITY
}

const MAX_RESULTS = 8

export default function SiteSearch({ className = '' }: { className?: string }) {
  const router = useRouter()
  const listId = useId()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchEntry[]>([])
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const runSearch = useCallback(async (raw: string) => {
    const trimmed = raw.trim().toLowerCase()
    if (trimmed.length < 2) {
      setResults([])
      return
    }
    const index = await loadIndex()
    const terms = trimmed.split(/\s+/)
    const scored: { entry: SearchEntry; score: number }[] = []
    for (const entry of index) {
      const score = rank(entry, trimmed, terms)
      if (score !== Number.POSITIVE_INFINITY) scored.push({ entry, score })
    }
    scored.sort((a, b) => a.score - b.score || a.entry.t.length - b.entry.t.length)
    setResults(scored.slice(0, MAX_RESULTS).map((item) => item.entry))
    setActive(0)
  }, [])

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  // "/" focuses search, the way most documentation sites behave.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return
      if (target?.isContentEditable) return
      event.preventDefault()
      inputRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const go = (entry: SearchEntry | undefined) => {
    if (!entry) return
    setOpen(false)
    setQuery('')
    setResults([])
    inputRef.current?.blur()
    router.push(entry.u)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => Math.min(index + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => Math.max(index - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      go(results[active])
    } else if (event.key === 'Escape') {
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  const showPanel = open && query.trim().length >= 2

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-label="Search certifications, study guides and exam tips"
          placeholder="Search certifications, guides, exam tips…"
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
            void runSearch(event.target.value)
          }}
          onKeyDown={onKeyDown}
          className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-9 text-sm text-gray-900 placeholder:text-gray-500 focus:border-salesforce-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-salesforce-blue/20 [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(''); setResults([]); inputRef.current?.focus() }}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {showPanel && (
        <div className="absolute left-0 right-0 top-full z-[70] mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-gray-500">No matches for &ldquo;{query.trim()}&rdquo;.</p>
          ) : (
            <ul id={listId} role="listbox" className="max-h-[60vh] overflow-y-auto py-1">
              {results.map((entry, index) => (
                <li key={entry.u} role="option" aria-selected={index === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onClick={() => go(entry)}
                    className={`flex w-full items-start justify-between gap-3 px-4 py-2.5 text-left ${index === active ? 'bg-salesforce-blue/10' : ''}`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-gray-900">{entry.t}</span>
                      {entry.d && <span className="block truncate text-xs text-gray-500">{entry.d}</span>}
                    </span>
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
                      {entry.g}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
