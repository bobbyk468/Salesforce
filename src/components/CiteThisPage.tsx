'use client'

import { useState } from 'react'
import { Check, Copy, Quote } from 'lucide-react'

/**
 * One-click Markdown citation for a certification page.
 *
 * People link to pages like these from Reddit threads, GitHub study repos
 * and blog posts, and the friction is usually assembling the link and a
 * sensible title. Handing over ready-made Markdown removes that step, and
 * the anchor text comes out descriptive rather than a bare URL.
 *
 * The snippet is rendered in a readonly input as well as copied, so it works
 * without the clipboard API and can be selected by hand.
 */
export default function CiteThisPage({
  certName,
  slug,
  year,
}: {
  certName: string
  slug: string
  year: number | string
}) {
  const [copied, setCopied] = useState<string | null>(null)
  const url = `https://www.trailblazeprep.com/certifications/${slug}`
  // Cert names arrive in two shapes — "Administrator" from some callers and
  // "Salesforce Certified Platform Administrator" from others — so only add
  // the prefix when it is not already there, or the title reads "Salesforce
  // Salesforce Certified ...".
  const title = /^salesforce\b/i.test(certName) ? certName : `Salesforce ${certName}`
  const label = `${title} Free Practice Questions (${year})`
  const markdown = `[${label}](${url})`
  const html = `<a href="${url}">${label}</a>`

  const copy = async (text: string, which: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(which)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      setCopied('failed')
      setTimeout(() => setCopied(null), 2500)
    }
  }

  return (
    <section className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6" aria-labelledby="cite-heading">
      <h2 id="cite-heading" className="flex items-center gap-2 text-lg font-bold text-gray-900">
        <Quote className="h-4 w-4 flex-shrink-0 text-salesforce-blue" aria-hidden="true" />
        Share or cite this study guide
      </h2>
      <p className="mt-1.5 text-sm text-gray-700">
        Free to link from a forum post, study repo or article. Copy the Markdown and
        paste it anywhere.
      </p>

      <div className="mt-4 space-y-3">
        {[
          { label: 'Markdown', value: markdown, key: 'md' },
          { label: 'HTML', value: html, key: 'html' },
        ].map((row) => (
          <div key={row.key}>
            <label htmlFor={`cite-${row.key}`} className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
              {row.label}
            </label>
            <div className="mt-1 flex gap-2">
              <input
                id={`cite-${row.key}`}
                readOnly
                value={row.value}
                onFocus={(e) => e.currentTarget.select()}
                className="h-11 min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 font-mono text-xs text-gray-800"
              />
              <button
                type="button"
                onClick={() => copy(row.value, row.key)}
                className="inline-flex h-11 flex-shrink-0 items-center gap-1.5 rounded-lg bg-salesforce-blue px-3 text-sm font-semibold text-white hover:bg-salesforce-dark"
              >
                {copied === row.key
                  ? <><Check className="h-4 w-4" aria-hidden="true" /> Copied</>
                  : <><Copy className="h-4 w-4" aria-hidden="true" /> Copy</>}
              </button>
            </div>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="sr-only">
        {copied === 'failed' ? 'Copy failed, select the text and copy manually.' : copied ? 'Copied to clipboard.' : ''}
      </p>
    </section>
  )
}
