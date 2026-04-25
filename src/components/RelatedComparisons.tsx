import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ComparisonLink {
  slug: string
  label: string
}

interface Props {
  links: ComparisonLink[]
}

export default function RelatedComparisons({ links }: Props) {
  if (!links.length) return null
  return (
    <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
        Related Comparisons
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ slug, label }) => (
          <Link
            key={slug}
            href={`/${slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-salesforce-blue hover:text-salesforce-blue transition-colors"
          >
            {label}
            <ArrowRight className="h-3 w-3" />
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400">
        See all comparisons at{' '}
        <Link href="/certification-comparison" className="underline hover:text-gray-600">
          Certification Comparison Hub →
        </Link>
      </p>
    </div>
  )
}
