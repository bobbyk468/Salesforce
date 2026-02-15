import Link from 'next/link'
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

      <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
        This page is your <strong className="text-gray-900">{primaryName}</strong>
        {examCode ? <> (exam code <strong className="text-gray-900">{examCode}</strong>)</> : null}
        {formerName ? <>—formerly <strong className="text-gray-900">{formerName}</strong></> : null}
        {' '}study guide. The exam tests skills that employers look for in Salesforce roles. It is for {audience} who want a recognized credential.
      </p>

      <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">What you get here</h3>
      <ul className="text-gray-700 text-sm sm:text-base space-y-1.5 mb-4 list-disc list-inside">
        <li><strong>Section weightage</strong> — See which topics have the most questions.</li>
        <li><strong>Exam tips and prerequisites</strong> — A clear study plan.</li>
        <li><strong>Sample practice questions</strong> — With clear explanations.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        Content is written for this certification only. Use it to match your study to the official outline and to see when you&apos;re ready to book the exam.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        Passing can help your career and pay. We keep materials in line with current exam objectives.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        Need a bigger roadmap? See the{' '}
        <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
          certification path
        </Link>{' '}
        or{' '}
        <Link href="/certifications" className="text-salesforce-blue font-medium hover:underline">
          all certifications
        </Link>.
      </p>

      <p className="text-xs sm:text-sm text-gray-600 border-t border-gray-200 pt-3 mt-3">
        <strong>Last reviewed:</strong> {CONTENT_LAST_UPDATED}. Check the official exam guide on Trailhead before booking.
      </p>
      <p className="text-xs sm:text-sm text-gray-600 mt-2">
        Reviewed against the official {primaryName}{examCode ? ` (${examCode})` : ''} exam guide. Not affiliated with Salesforce.
      </p>

      <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
        <p className="text-xs sm:text-sm text-gray-700">
          <strong>Release:</strong>{' '}
          <span className="inline-flex items-center rounded-full bg-salesforce-blue/15 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-salesforce-blue border border-salesforce-blue/20">
            {RELEASE_CURRENT}
          </span>
          {' '}— Aligned with {RELEASE_CURRENT} (vs {RELEASE_PREVIOUS}).
        </p>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">What&apos;s new in {RELEASE_CURRENT}</p>
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
