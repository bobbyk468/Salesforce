'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const URL = 'https://www.trailblazeprep.com/salesforce-certification-report-2026'
const TITLE = '2026 Salesforce Certification Benchmark Report'

/**
 * Attribution snippets for the benchmark report.
 *
 * The dataset is CC BY 4.0, which requires attribution — handing people the
 * exact line to paste is the difference between a credited link and an
 * uncredited copy.
 */
export default function CiteReport({ generated }: { generated: string }) {
  const [copied, setCopied] = useState<string | null>(null)

  const snippets = [
    { key: 'md', label: 'Markdown', value: `[${TITLE}](${URL}) — Trailblaze Prep, ${generated}. CC BY 4.0.` },
    { key: 'html', label: 'HTML', value: `<a href="${URL}">${TITLE}</a> — Trailblaze Prep, ${generated}. <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.` },
    { key: 'apa', label: 'APA', value: `Trailblaze Prep. (2026). ${TITLE}. Retrieved from ${URL}` },
  ]

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      setCopied('failed')
      setTimeout(() => setCopied(null), 2500)
    }
  }

  return (
    <section className="mt-12 rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-5 sm:p-6" aria-labelledby="cite-report-heading">
      <h2 id="cite-report-heading" className="text-xl font-bold text-gray-900">
        Cite this report
      </h2>
      <p className="mt-1.5 text-sm text-gray-700">
        The figures and the dataset are free to reuse under{' '}
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="nofollow noopener noreferrer" className="font-medium text-salesforce-blue hover:underline">
          CC BY 4.0
        </a>
        , which asks only for attribution. Copy a ready-made line:
      </p>
      <div className="mt-4 space-y-3">
        {snippets.map((s) => (
          <div key={s.key}>
            <label htmlFor={`cite-${s.key}`} className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
              {s.label}
            </label>
            <div className="mt-1 flex gap-2">
              <input
                id={`cite-${s.key}`}
                readOnly
                value={s.value}
                onFocus={(e) => e.currentTarget.select()}
                className="h-11 min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 font-mono text-xs text-gray-800"
              />
              <button
                type="button"
                onClick={() => copy(s.value, s.key)}
                className="inline-flex h-11 flex-shrink-0 items-center gap-1.5 rounded-lg bg-salesforce-blue px-3 text-sm font-semibold text-white hover:bg-salesforce-dark"
              >
                {copied === s.key ? <><Check className="h-4 w-4" aria-hidden="true" /> Copied</> : <><Copy className="h-4 w-4" aria-hidden="true" /> Copy</>}
              </button>
            </div>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="sr-only">
        {copied === 'failed' ? 'Copy failed, select the text and copy manually.' : copied ? 'Copied.' : ''}
      </p>
    </section>
  )
}
