'use client'

import { useMemo, useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

/**
 * FAQ list as native `<details>` elements.
 *
 * Every answer is rendered on the server whether or not it is open, so the
 * full text is in the SSR DOM and is indexable. `defaultOpenCount` opens the
 * first few so the section does not read as an empty list of headings, and
 * `searchable` adds a client-side filter for the long homepage list -- the
 * filter narrows what is displayed after hydration and never removes anything
 * from the server-rendered HTML.
 */
export default function FaqAccordion({
  items,
  questionHeadingLevel = 'div',
  defaultOpenCount = 2,
  searchable = false,
  searchLabel = 'Search these questions',
}: {
  items: FaqItem[]
  questionHeadingLevel?: 'h3' | 'div'
  defaultOpenCount?: number
  searchable?: boolean
  searchLabel?: string
}) {
  const QuestionHeading = questionHeadingLevel
  const [query, setQuery] = useState('')

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return null
    return new Set(
      items
        .filter(
          (item) =>
            item.question.toLowerCase().includes(needle) ||
            item.answer.toLowerCase().includes(needle),
        )
        .map((item) => item.question),
    )
  }, [items, query])

  const matchCount = matches ? matches.size : items.length

  return (
    <div>
      {searchable && (
        <div className="mb-4">
          <label htmlFor="faq-search" className="sr-only">
            {searchLabel}
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchLabel}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/20"
          />
          <p className="mt-2 text-xs text-gray-600" aria-live="polite">
            {query.trim()
              ? `${matchCount} of ${items.length} question${items.length === 1 ? '' : 's'} match`
              : `${items.length} question${items.length === 1 ? '' : 's'}`}
          </p>
        </div>
      )}
      <div className="space-y-3">
        {items.map((item, index) => {
          const hidden = matches ? !matches.has(item.question) : false
          return (
            <details
              key={index}
              hidden={hidden}
              open={index < defaultOpenCount}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <summary
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50/80 transition-colors cursor-pointer list-none"
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <QuestionHeading className="m-0 text-base font-semibold text-gray-900">{item.question}</QuestionHeading>
                <span
                  className="h-5 w-5 flex-shrink-0 text-gray-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>
              <div id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`} className="border-t border-gray-100">
                <div className="px-6 py-4 text-gray-700 leading-relaxed">{item.answer}</div>
              </div>
            </details>
          )
        })}
      </div>
      {matches && matchCount === 0 && (
        <p className="rounded-xl border border-gray-100 bg-white px-6 py-4 text-sm text-gray-700">
          No question matches &ldquo;{query.trim()}&rdquo;. Try a credential name or an exam code.
        </p>
      )}
    </div>
  )
}
