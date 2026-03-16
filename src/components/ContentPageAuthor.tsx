import Link from 'next/link'
import { RELEASE_CURRENT } from '@/lib/release-data'

/**
 * Compact author byline for content pages (exam tips, study guides, comparisons).
 * Provides E-E-A-T signals: named author, credentials, last-reviewed date, and
 * links to team, about, and contact pages.
 *
 * A11y: bg-white keeps text-salesforce-blue contrast at 4.56:1 (WCAG AA ✓).
 * Links are always underlined so they are not colour-only distinguishable.
 */
export default function ContentPageAuthor() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 mb-8 text-sm text-gray-700">
      <div className="flex-shrink-0 mt-0.5">
        <div className="h-8 w-8 rounded-full bg-salesforce-blue flex items-center justify-center">
          <span className="text-xs font-bold text-white">KM</span>
        </div>
      </div>
      <div>
        <p>
          Written and reviewed by{' '}
          <Link href="/team" className="font-medium text-salesforce-blue underline hover:no-underline">
            Krishna Mohan
          </Link>
          {' '}— ADM-201, PD1, PD2, App Builder &amp; Consultant certified. Updated for {RELEASE_CURRENT}.{' '}
          <Link href="/about" className="text-salesforce-blue underline hover:no-underline">
            Methodology
          </Link>
          {' '}·{' '}
          <Link href="/contact" className="text-salesforce-blue underline hover:no-underline">
            Contact
          </Link>
        </p>
      </div>
    </div>
  )
}
