import Link from 'next/link'
import { getRelatedCerts, getStrategicInternalLinks } from '@/lib/certifications-data'
import { SLUG_TO_EXAM_TIPS, SLUG_TO_STUDY_GUIDE, slugToDisplayName } from '@/lib/cert-seo-data'

interface RelatedCertificationsProps {
  currentSlug: string
}

/**
 * Contextual internal links: related certifications from the same role with descriptive anchor text.
 * Also surfaces this cert's own exam-tips and study-guide pages so link equity flows from the cert
 * detail hub down to those child pages (they were previously orphaned from the hub, contributing to
 * "Crawled - currently not indexed" in Search Console).
 */
export default function RelatedCertifications({ currentSlug }: RelatedCertificationsProps) {
  const strategicLinks = getStrategicInternalLinks(currentSlug)
  const related = getRelatedCerts(currentSlug).filter(
    (item) => !strategicLinks.some((strategic) => strategic.href === item.href)
  )
  const linksToRender = [...strategicLinks, ...related].slice(0, 5)

  const certName = slugToDisplayName(currentSlug)
  const studyResources = [
    SLUG_TO_STUDY_GUIDE[currentSlug] && {
      href: SLUG_TO_STUDY_GUIDE[currentSlug],
      anchorText: `${certName} study guide`,
    },
    SLUG_TO_EXAM_TIPS[currentSlug] && {
      href: SLUG_TO_EXAM_TIPS[currentSlug],
      anchorText: `${certName} exam tips`,
    },
  ].filter((x): x is { href: string; anchorText: string } => Boolean(x))

  if (linksToRender.length === 0 && studyResources.length === 0) return null

  return (
    <section className="mt-12 rounded-xl border border-purple-100 bg-white p-6 [content-visibility:auto] [contain-intrinsic-size:auto_200px]" aria-labelledby="related-certs-heading">
      {studyResources.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Study resources for this certification
          </h2>
          <ul className="space-y-2">
            {studyResources.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-salesforce-blue font-medium hover:underline"
                >
                  {item.anchorText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {linksToRender.length > 0 && (
        <>
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
                  className="inline-flex items-center gap-1 text-salesforce-blue font-medium hover:underline"
                >
                  {item.anchorText}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
