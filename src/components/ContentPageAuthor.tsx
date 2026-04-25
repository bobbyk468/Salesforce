import Link from 'next/link'
import Image from 'next/image'
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
        <Image
          src="/authors/krishna-mohan.jpg"
          alt="Krishna Mohan — Salesforce certified author"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
          priority
        />
      </div>
      <div>
        <p>
          Written and reviewed by{' '}
          <a href="https://trailblazer.me/id/krishnamohan" target="_blank" rel="noopener noreferrer" className="font-medium text-salesforce-blue underline hover:no-underline">
            Krishna Mohan
          </a>
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
