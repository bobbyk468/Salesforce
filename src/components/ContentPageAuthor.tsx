import Link from 'next/link'
import Image from 'next/image'
import { RELEASE_CURRENT } from '@/lib/release-data'

const CERTS = [
  'ADM-201',
  'PD1',
  'PD2',
  'App Builder',
  'Sales Cloud Consultant',
]

export default function ContentPageAuthor() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white px-5 py-4 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src="/authors/krishna-mohan.jpg"
            alt="Krishna Mohan — 5x Salesforce certified author"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-salesforce-blue/20"
            priority
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">
            Written &amp; verified by{' '}
            <a
              href="https://trailblazer.me/id/krishnamohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salesforce-blue underline hover:no-underline"
            >
              Krishna Mohan
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            5&times; Salesforce Certified &middot; 12+ years in data engineering &amp; Salesforce &middot; Updated for {RELEASE_CURRENT}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {CERTS.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-2.5 py-0.5 text-xs font-medium text-salesforce-dark"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <a
              href="https://trailblazer.me/id/krishnamohan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salesforce-blue underline hover:no-underline"
            >
              Verify on Trailblazer.me
            </a>
            {' '}&middot;{' '}
            <Link href="/about" className="text-salesforce-blue underline hover:no-underline">
              Methodology
            </Link>
            {' '}&middot;{' '}
            <Link href="/contact" className="text-salesforce-blue underline hover:no-underline">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
