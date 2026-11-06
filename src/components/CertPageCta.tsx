import { PlayCircle } from 'lucide-react'
import Link from '@/components/AppLink'
import { SLUG_TO_EXAM_CODE, getExamLogistics } from '@/lib/cert-seo-data'
import { isUnavailableCredentialExam } from '@/lib/credential-status'

interface CertPageCtaProps {
  slug: string
  certTitle: string
  /** When set, show a single dominant CTA (e.g. "Start Free ADM-201 Practice Test") for better conversion. */
  examCode?: string
}

/** Prominent CTA above the fold (after intro, before certification card) for better CTR and engagement. */
export default function CertPageCta({ slug, certTitle, examCode }: CertPageCtaProps) {
  if (isUnavailableCredentialExam(slug)) return null
  const effectiveExamCode = examCode ?? SLUG_TO_EXAM_CODE[slug]
  const singleDominantCta = !!effectiveExamCode

  // Get exam details for benefit-driven copy
  const examDetails = getExamLogistics(slug)

  // Build benefit-driven button text
  let primaryLabel = singleDominantCta ? 'Start Free Practice Test' : 'View Free Sample Questions'
  if (singleDominantCta && examDetails) {
    // Format: "Start Free ADM-201 Practice (60Q, 105 min)"
    primaryLabel = `Start Free ${effectiveExamCode} Practice (${examDetails.questions}Q, ${examDetails.duration})`
  } else if (singleDominantCta) {
    primaryLabel = `Start Free ${effectiveExamCode} Practice`
  }

  const contactHref = `/contact#exam=${encodeURIComponent(effectiveExamCode ?? certTitle)}`

  return (
    <div data-lcp-hero className="my-8 sm:my-10 bg-gradient-to-r from-salesforce-blue via-salesforce-light to-salesforce-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-salesforce-blue/20">
      <div className="flex flex-col items-center justify-center">
        <Link
          href="#practice-questions"
          className="flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-4 bg-white text-salesforce-blue rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] text-base sm:text-lg w-full sm:w-auto justify-center border-2 border-white/90"
        >
          <PlayCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          <span>{primaryLabel}</span>
        </Link>
      </div>
      <p className="text-center text-white/80 text-xs sm:text-sm mt-4">
        Free practice • No sign-up required
      </p>
      {singleDominantCta && examDetails && (
        <p className="text-center text-white/80 text-xs sm:text-sm mt-1">
          {examDetails.fee} exam • {examDetails.passingScore} passing score • Free practice
        </p>
      )}
      {singleDominantCta && (
        <p className="text-center mt-3">
          <Link href={contactHref} className="text-white hover:text-white text-sm font-medium underline underline-offset-2">
            {effectiveExamCode ? `Request full ${effectiveExamCode} mock exam & study plan` : 'Request full mock exam & study plan'}
          </Link>
        </p>
      )}
    </div>
  )
}
