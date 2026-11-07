'use client'

import { usePathname } from 'next/navigation'
import pageDatesSource from '../../public/page-dates.json'

/**
 * Visible "Last updated" line, shown directly under the page heading.
 *
 * Google's byline-date guidance asks for a user-visible date that matches the
 * structured data: "Add a user-visible date to the page and feature it
 * prominently... ensure that the date matches between the equivalent
 * user-visible and structured values." Article JSON-LD carries dateModified
 * already, but with no visible counterpart Google gives it little weight, and
 * a page rewritten this week was still shown in search carrying an August date.
 *
 * Both this and the JSON-LD read the same generated map, so the visible and
 * structured dates cannot drift apart. Regenerate with `npm run sitemap:lastmod`.
 */
const pageDates = pageDatesSource as Record<string, { published: string; modified: string }>

export default function LastUpdated() {
  const pathname = usePathname()
  if (!pathname) return null

  const entry = pageDates[pathname] ?? pageDates[pathname.replace(/\/$/, '')]
  if (!entry) return null

  const date = new Date(entry.modified)
  if (Number.isNaN(date.getTime())) return null

  // en-GB so the rendered text matches the rest of the site's spelling, and
  // an explicit timeZone because without one this formats in the *viewer's*
  // zone while the server formats in its own. The stored dates carry a +05:30
  // offset, so "2026-11-04T04:07:00+05:30" renders as 4 November in India and
  // 3 November in UTC — a text mismatch that made React discard the hydrated
  // tree (minified error #418) and take unrelated markup down with it. Pinning
  // the zone makes the output identical everywhere.
  const label = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  })

  return (
    <p className="text-sm text-gray-500 mb-4">
      Last updated:{' '}
      <time dateTime={entry.modified.slice(0, 10)}>{label}</time>
    </p>
  )
}
