import Link from '@/components/AppLink'
import { getRelatedCerts, getStrategicInternalLinks } from '@/lib/certifications-data'
import { SLUG_TO_EXAM_TIPS, SLUG_TO_STUDY_GUIDE, slugToDisplayName } from '@/lib/cert-seo-data'
import { getRecommendedPrerequisite, getRequiredPrerequisites } from '@/lib/cert-prerequisites'

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
  const sameTrackLinks = getRelatedCerts(currentSlug).slice(0, 5)
  const sameTrackHrefs = new Set(sameTrackLinks.map((item) => item.href))
  const nextStepLinks = getStrategicInternalLinks(currentSlug)
    .filter((item) => !sameTrackHrefs.has(item.href) && item.href !== `/certifications/${currentSlug}`)
    .slice(0, 3)

  const certName = slugToDisplayName(currentSlug)
  const requiredPrerequisiteSlugs = getRequiredPrerequisites(currentSlug)
  const recommendedPrerequisiteSlug = getRecommendedPrerequisite(currentSlug)
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

  return (
    <section className="mt-12 rounded-xl border border-purple-100 bg-white p-6" aria-label="Related certifications and study resources">
      {(requiredPrerequisiteSlugs.length > 0 || recommendedPrerequisiteSlug) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Prerequisite and recommended certification resources</h2>
          <ul className="space-y-2">
            {requiredPrerequisiteSlugs.filter((slug) => slug !== currentSlug && slug !== recommendedPrerequisiteSlug).map((slug) => (
              <li key={slug}>
                <Link href={`/certifications/${slug}`} className="text-salesforce-blue font-medium hover:underline">
                  Required prerequisite: {slugToDisplayName(slug)} practice questions and study guide
                </Link>
              </li>
            ))}
            {recommendedPrerequisiteSlug && recommendedPrerequisiteSlug !== currentSlug && (
              <li>
                <Link href={`/certifications/${recommendedPrerequisiteSlug}`} className="text-salesforce-blue font-medium hover:underline">
                  Recommended preparation: {slugToDisplayName(recommendedPrerequisiteSlug)} practice questions and study guide
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
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
      {sameTrackLinks.length > 0 && (
        <div className="mb-6">
          <h2 id="related-certs-heading" className="text-xl font-bold text-gray-900 mb-4">
            Same-track certifications
          </h2>
          <ul className="space-y-2">
            {sameTrackLinks.map((item) => (
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
      {nextStepLinks.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended next-step resources</h2>
          <ul className="space-y-2">
            {nextStepLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-salesforce-blue font-medium hover:underline">
                  {item.anchorText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Plan your next certification step</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
              Explore the Salesforce certification path
            </Link>
          </li>
          <li>
            <Link href="/salesforce-certification-validity" className="text-salesforce-blue font-medium hover:underline">
              Check Salesforce certification validity and maintenance
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
