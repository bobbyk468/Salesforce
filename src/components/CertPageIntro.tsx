import Link from 'next/link'
import { slugToDisplayName, SLUG_TO_EXAM_CODE, SLUG_TO_EXAM_GUIDE_URL, getCertAboutExamHeading } from '@/lib/cert-seo-data'
import { getCertPrimaryName, getCertFormerName } from '@/lib/cert-name-aliases'
import { getRoleSlugForCert, getCategoryBySlug } from '@/lib/certifications-data'
import type { CertificationCategory } from '@/lib/certifications-data'

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
  const examGuideUrl = SLUG_TO_EXAM_GUIDE_URL[slug]
  const roleSlug = getRoleSlugForCert(slug)
  const category = roleSlug ? getCategoryBySlug(roleSlug) : undefined
  const audience = getAudienceLabel(category)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Krishna Mohan",
            "url": "https://www.trailblazeprep.com/team",
            "sameAs": [
              "https://www.salesforce.com/trailblazer/krishnamohan"
            ],
            "jobTitle": "Salesforce Certified Professional",
            "description": "14× Salesforce certified professional: ADM-201, PD1, PD2, Platform App Builder, Sales Cloud Consultant, and more.",
            "knowsAbout": ["Salesforce", "Salesforce Administrator", "Salesforce Platform Developer", "Salesforce Consultant", "Salesforce Architect"]
          })
        }}
      />
      <section className="cert-page-intro mb-8 sm:mb-10 rounded-xl sm:rounded-2xl border border-blue-100/50 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-5 sm:p-6 lg:p-8 shadow-md backdrop-blur-sm" aria-labelledby="cert-intro-heading">
      <h2 id="cert-intro-heading" className="sr-only">
        {getCertAboutExamHeading(slug)}
      </h2>

      <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
        This page is your <strong className="text-gray-900">{primaryName}</strong>
        {examCode ? <> (exam <strong className="text-gray-900">{examCode}</strong>)</> : null}
        {formerName ? <>, formerly <strong className="text-gray-900">{formerName}</strong>,</> : null}
        {' '}study guide. The exam tests skills that employers want. It is for {audience} who want a credential.
      </p>

      <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">What you get here</h3>
      <ul className="text-gray-700 text-sm sm:text-base space-y-1.5 mb-4 list-disc list-inside">
        <li><strong>Section weightage</strong>: See which topics have the most questions.</li>
        <li><strong>Exam tips and prerequisites</strong>: A clear study plan.</li>
        <li><strong>Sample practice questions</strong>: With clear explanations.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        Content is written for this certification only. Use it to match your study to the official outline and to see when you’re ready to book the exam.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
        Exam objectives and logistics can change. Treat this as supplemental study material and confirm current requirements with the certification issuer before booking.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        Need a bigger roadmap? See the{' '}
        <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
          certification path
        </Link>
        ,{' '}
        <Link href="/certifications" className="text-salesforce-blue font-medium hover:underline">
          all certifications
        </Link>
        , or{' '}
        <Link href="/" className="text-salesforce-blue font-medium hover:underline">
          home
        </Link>.
      </p>

      {/* Editorial and official-source guidance */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="h-8 w-8 rounded-full bg-salesforce-blue flex items-center justify-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-white">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-blue-900 mb-0.5">About this independent study resource</p>
            <p className="text-xs text-blue-800">
              Review the{' '}
              {examGuideUrl ? (
                <a href={examGuideUrl} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium">
                  official {primaryName}{examCode ? ` (${examCode})` : ''} exam guide
                </a>
              ) : (
                <span>official {primaryName}{examCode ? ` (${examCode})` : ''} exam guide</span>
              )}
              {' '}for current objectives and exam details.{' '}
              <Link href="/team" className="underline hover:no-underline font-medium">
                Meet the team
              </Link>
              {' '}&middot;{' '}
              <a href="https://www.salesforce.com/trailblazer/krishnamohan" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Trailblazer profile
              </a>
              {' '}&middot;{' '}
              <Link href="/about" className="underline hover:no-underline">
                About this resource
              </Link>
              {' '}&middot;{' '}
              <Link href="/editorial-policy" className="underline hover:no-underline">
                Editorial policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
