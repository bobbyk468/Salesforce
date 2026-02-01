import { slugToDisplayName, SLUG_TO_EXAM_CODE, getCertAboutExamHeading } from '@/lib/cert-seo-data'
import { getCertPrimaryName, getCertFormerName } from '@/lib/cert-name-aliases'
import { getRoleSlugForCert, getCategoryBySlug } from '@/lib/certifications-data'
import type { CertificationCategory } from '@/lib/certifications-data'
import { CONTENT_LAST_UPDATED } from '@/lib/constants'
import { RELEASE_CURRENT, RELEASE_PREVIOUS, WHATS_NEW_CURRENT_RELEASE } from '@/lib/release-data'

function getAudienceLabel(category: CertificationCategory | undefined): string {
  if (!category) return 'administrators and implementers'
  const labels: Record<string, string> = {
    Marketing: 'marketers and marketing professionals',
    Associate: 'beginners and those new to Salesforce',
    Architect: 'architects and solution designers',
    Consultant: 'consultants and implementers',
    Developer: 'developers and technical implementers',
    Administrator: 'administrators and related roles',
    Designer: 'designers and UX professionals',
    Tableau: 'Tableau practitioners and analysts',
    'Accredited Professional': 'partners and accredited professionals',
    'Sales Professional': 'sales professionals',
  }
  return labels[category.name] ?? `${category.name} professionals and related roles`
}

interface CertPageIntroProps {
  slug: string
}

/**
 * Comprehensive intro (150–250 words) for each certification page: what the cert is,
 * who should take it, career outcomes, and what's on the page. Includes last-reviewed for E-E-A-T.
 */
export default function CertPageIntro({ slug }: CertPageIntroProps) {
  const certTitle = slugToDisplayName(slug)
  const primaryName = getCertPrimaryName(slug, certTitle)
  const formerName = getCertFormerName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const roleSlug = getRoleSlugForCert(slug)
  const category = roleSlug ? getCategoryBySlug(roleSlug) : undefined
  const audience = getAudienceLabel(category)

  return (
    <section className="mb-8 sm:mb-10 rounded-xl sm:rounded-2xl border border-blue-100/50 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-5 sm:p-6 lg:p-8 shadow-md backdrop-blur-sm" aria-labelledby="cert-intro-heading">
      <h2 id="cert-intro-heading" className="sr-only">
        {getCertAboutExamHeading(slug)}
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        This page is your <strong className="text-gray-900">{primaryName}</strong>
        {examCode ? <> (exam code <strong className="text-gray-900">{examCode}</strong>)</> : null}
        {formerName ? <>—formerly <strong className="text-gray-900">{formerName}</strong></> : null}
        {' '}study guide. The certification validates skills that employers look for in Salesforce roles—whether you&apos;re an administrator, consultant, developer, or architect. It is designed for {audience} who want to prove their knowledge with an industry-recognized credential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        Here you&apos;ll find <strong className="text-gray-900">section-wise exam weightage</strong> so you know exactly which topics carry the most questions, exam tips and prerequisites, a focused study plan, and <strong className="text-gray-900">sample practice questions with detailed explanations</strong>. All content on this page is original and unique—written specifically for this certification to help with your preparation. Use this page to align your study with the official outline and to gauge when you&apos;re ready to sit the exam. Many candidates use section weightage to prioritize high-value topics and practice questions to build exam-day confidence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        Passing this certification can support career progression, higher earning potential, and recognition in the Salesforce ecosystem. Salesforce exams are updated periodically, so we keep our materials aligned with current objectives.
      </p>
      <p className="text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-3 mt-3">
        <strong>Last reviewed:</strong> {CONTENT_LAST_UPDATED}. Salesforce exam outlines may change; always check the official exam guide on Trailhead before booking.
      </p>

      <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
        <p className="text-xs sm:text-sm text-gray-700">
          <strong>Release compatible:</strong>{' '}
          <span className="inline-flex items-center rounded-full bg-salesforce-blue/15 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-salesforce-blue border border-salesforce-blue/20">
            {RELEASE_CURRENT}
          </span>
          {' '}— Study materials and objectives are aligned with the {RELEASE_CURRENT} release (compared to {RELEASE_PREVIOUS}).
        </p>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">What&apos;s new in {RELEASE_CURRENT}:</p>
          <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5 list-disc list-inside pl-2">
            {WHATS_NEW_CURRENT_RELEASE.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
