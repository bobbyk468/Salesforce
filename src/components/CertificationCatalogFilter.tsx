'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

export type CatalogFilterTrack = {
  slug: string
  name: string
  count: number
}

/**
 * Instant client-side filter over the certification catalogue.
 *
 * It does not render the cards. CertificationGrid renders all 95 of them on
 * the server, each tagged with `data-cert-card`, `data-cert-role` and a
 * lowercased `data-cert-search` string; this component hides and shows those
 * nodes in place. Two reasons for working that way rather than holding the
 * catalogue in client state:
 *
 *  - every card stays in the SSR HTML, so a crawler that does not run
 *    JavaScript still sees all 95 links and their exam data, and
 *  - the catalogue is not shipped twice, once as HTML and once as props.
 *
 * With JavaScript off the controls never render, and nothing is hidden.
 */
export default function CertificationCatalogFilter({
  tracks,
}: {
  tracks: CatalogFilterTrack[]
}) {
  const [query, setQuery] = useState('')
  const [role, setRole] = useState<string>('all')
  const [matchCount, setMatchCount] = useState<number | null>(null)
  const liveRef = useRef<HTMLParagraphElement | null>(null)

  const total = useMemo(() => tracks.reduce((sum, t) => sum + t.count, 0), [tracks])

  useEffect(() => {
    const needle = query.trim().toLowerCase()
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('[data-cert-card]')
    )
    let shown = 0
    for (const card of cards) {
      const haystack = card.dataset.certSearch ?? ''
      const cardRole = card.dataset.certRole ?? ''
      const matches =
        (role === 'all' || cardRole === role) && (!needle || haystack.includes(needle))
      card.hidden = !matches
      if (matches) shown += 1
    }
    // A track heading with nothing left under it reads as an empty section, so
    // the whole track goes with its cards.
    for (const section of Array.from(
      document.querySelectorAll<HTMLElement>('[data-cert-track]')
    )) {
      const visible = Array.from(
        section.querySelectorAll<HTMLElement>('[data-cert-card]')
      ).some((card) => !card.hidden)
      section.hidden = !visible
    }
    setMatchCount(needle || role !== 'all' ? shown : null)
  }, [query, role])

  // Clearing the filter on unmount matters for a client-side navigation away
  // and back: the cards are server HTML, and `hidden` would otherwise persist.
  useEffect(
    () => () => {
      for (const node of Array.from(
        document.querySelectorAll<HTMLElement>('[data-cert-card], [data-cert-track]')
      )) {
        node.hidden = false
      }
    },
    []
  )

  const filtering = query.trim() !== '' || role !== 'all'

  return (
    <div className="mb-10 rounded-xl border border-gray-200 bg-gray-50/70 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label
            htmlFor="cert-catalog-search"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Filter certifications
          </label>
          <input
            id="cert-catalog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
            placeholder="Name or exam code: Plat-Admn-201, ADM-201, DEV-402, PD1, AI-201"
            className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/30"
          />
        </div>
        <div className="sm:w-56">
          <label
            htmlFor="cert-catalog-role"
            className="mb-1.5 block text-sm font-semibold text-gray-900"
          >
            Role track
          </label>
          <select
            id="cert-catalog-role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/30"
          >
            <option value="all">All tracks ({total})</option>
            {tracks.map((track) => (
              <option key={track.slug} value={track.slug}>
                {track.name} ({track.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p ref={liveRef} aria-live="polite" className="text-sm text-gray-600">
          {matchCount === null
            ? `Showing all ${total} certifications.`
            : matchCount === 0
              ? 'No certification matches that name, code or track.'
              : `Showing ${matchCount} of ${total} certifications.`}
        </p>
        {filtering && (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setRole('all')
            }}
            className="min-h-11 text-sm font-semibold text-salesforce-blue hover:text-salesforce-dark"
          >
            Clear filter
          </button>
        )}
      </div>
    </div>
  )
}
