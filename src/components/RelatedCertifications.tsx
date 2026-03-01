import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getRelatedCerts, getStrategicInternalLinks } from '@/lib/certifications-data'

interface RelatedCertificationsProps {
  currentSlug: string
}

/**
 * Contextual internal links: related certifications from the same role with descriptive anchor text.
 */
export default function RelatedCertifications({ currentSlug }: RelatedCertificationsProps) {
  const strategicLinks = getStrategicInternalLinks(currentSlug)
  const related = getRelatedCerts(currentSlug).filter(
    (item) => !strategicLinks.some((strategic) => strategic.href === item.href)
  )
  const linksToRender = [...strategicLinks, ...related]
  if (linksToRender.length === 0) return null

  return (
    <section className="mt-12 sm:mt-16 rounded-xl sm:rounded-2xl border border-purple-100/50 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/30 p-5 sm:p-6 lg:p-8 shadow-md backdrop-blur-sm [content-visibility:auto] [contain-intrinsic-size:auto_200px]" aria-labelledby="related-certs-heading">
      <h2 id="related-certs-heading" className="text-xl font-bold text-gray-900 mb-4">
        People also studied
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Follow this recommended next-step path to stay in the same role track:
      </p>
      <ul className="space-y-2">
        {linksToRender.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 text-salesforce-blue font-medium hover:text-salesforce-dark hover:underline"
            >
              {item.anchorText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
