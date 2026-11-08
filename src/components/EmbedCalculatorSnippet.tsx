'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const SNIPPET = `<iframe src="https://www.trailblazeprep.com/tools/score-calculator/embed"
  title="Salesforce Exam Score Calculator by Trailblaze Prep"
  width="100%" height="900" loading="lazy"
  style="border:1px solid #e5e7eb;border-radius:12px;max-width:760px"></iframe>
<p><a href="https://www.trailblazeprep.com/tools/score-calculator">Salesforce Exam Score Calculator</a> by <a href="https://www.trailblazeprep.com">Trailblaze Prep</a></p>`

/**
 * The embed snippet, with the credit line included in what gets copied.
 *
 * Links inside an iframe are not attributed to the host page, so the credit
 * paragraph outside the iframe is the part that actually carries attribution.
 * It is in the snippet rather than suggested separately for that reason.
 */
export default function EmbedCalculatorSnippet() {
  const [copied, setCopied] = useState<'ok' | 'failed' | null>(null)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPET)
      setCopied('ok')
    } catch {
      setCopied('failed')
    }
    setTimeout(() => setCopied(null), 2500)
  }

  return (
    <section className="mx-auto mt-16 max-w-3xl rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6" aria-labelledby="embed-calculator-heading">
      <h2 id="embed-calculator-heading" className="text-2xl font-bold text-gray-900">
        Embed this calculator
      </h2>
      <p className="mt-2 text-gray-700">
        Free to put on your own site, blog or community post — no sign-up, no
        tracking script, nothing to attribute beyond the credit line included below.
        It resizes to its container and works on mobile.
      </p>
      <div className="mt-4">
        <label htmlFor="embed-snippet" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
          Copy and paste this
        </label>
        <textarea
          id="embed-snippet"
          readOnly
          rows={7}
          value={SNIPPET}
          onFocus={(e) => e.currentTarget.select()}
          className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white p-3 font-mono text-xs text-gray-800"
        />
      </div>
      <button
        type="button"
        onClick={copy}
        className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-lg bg-salesforce-blue px-4 text-sm font-semibold text-white hover:bg-salesforce-dark"
      >
        {copied === 'ok' ? <><Check className="h-4 w-4" aria-hidden="true" /> Copied</> : <><Copy className="h-4 w-4" aria-hidden="true" /> Copy embed code</>}
      </button>
      <p aria-live="polite" className="mt-2 text-xs text-gray-600">
        {copied === 'failed' ? 'Copy failed — select the code above and copy it manually.' : ''}
      </p>
    </section>
  )
}
