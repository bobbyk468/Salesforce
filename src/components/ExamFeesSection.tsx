import Link from '@/components/AppLink'
import { DollarSign, RefreshCw, Calendar, ExternalLink } from 'lucide-react'
import { getExamCost, getRetakeCost, SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'
import { SLUG_TO_EXAM_GUIDE_URL } from '@/lib/cert-seo-data'
import { getCredentialStatus, hasUnverifiedClaudeExamDetails, isComponentOnlyCredential, isUnavailableCredentialExam } from '@/lib/credential-status'
import { slugToDisplayName } from '@/lib/cert-seo-data'

interface ExamFeesSectionProps {
  slug: string
}

/** Dedicated "Exam Fees & Registration" section for better cost query CTR and user clarity. */
export default function ExamFeesSection({ slug }: ExamFeesSectionProps) {
  if (isUnavailableCredentialExam(slug)) return null
  const credentialStatus = getCredentialStatus(slug)
  if (hasUnverifiedClaudeExamDetails(slug)) {
    return (
      <section className="mt-8 mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-xl font-bold text-gray-900">Credential details</h2>
        <p className="mt-2 text-sm text-gray-700">Fees, retake rules, format, and availability have not been verified from Anthropic. Check the issuer announcement for current program information.</p>
        <a className="mt-3 inline-flex items-center gap-2 text-salesforce-blue underline" href={credentialStatus?.sourceUrl} target="_blank" rel="nofollow noopener noreferrer">
          Anthropic Claude Partner Network announcement <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>
    )
  }
  if (isComponentOnlyCredential(slug)) {
    return (
      <section className="mt-8 mb-8 rounded-xl border border-violet-200 bg-violet-50 p-6">
        <h2 className="text-xl font-bold text-gray-900">How this credential is earned</h2>
        <p className="mt-2 text-sm text-gray-700">
          There is no exam to book for {slugToDisplayName(slug)}. You earn it by holding the component
          certifications listed above, so the cost is the sum of those exam fees. Each component exam page
          lists its own fee, format and retake policy.
        </p>
      </section>
    )
  }
  const examCost = getExamCost(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const certName = slugToDisplayName(slug)
  
  const retakeCost = getRetakeCost(slug)
  
  return (
    <section className="mt-8 sm:mt-10 mb-8 sm:mb-10 bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 [content-visibility:auto] [contain-intrinsic-size:auto_300px]">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
        <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-salesforce-blue" aria-hidden="true" />
        Exam Fees & Registration
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 sm:p-5 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-5 w-5 text-salesforce-blue" aria-hidden="true" />
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Exam Fee</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">{examCost}</p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">One-time registration fee</p>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-4 sm:p-5 border border-emerald-100">
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Retake Fee</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">{retakeCost}</p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">If you need to retake the exam</p>
        </div>
      </div>
      <p className="text-xs text-gray-600 mb-4">
        Comparing certs?{' '}
        <Link href="/salesforce-certification-cost" className="text-salesforce-blue underline">
          View all Salesforce exam fees in one place →
        </Link>
      </p>
      
      <div className="space-y-4 sm:space-y-5">
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Certification Validity</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Maintenance and renewal requirements vary. Check the issuer’s current credential page for requirements that apply to you.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <ExternalLink className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">How to Register</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3">
              Check current {examCode ? `${certName} (${examCode})` : certName} credential and registration details with the issuer.
            </p>
            <a
              href={SLUG_TO_EXAM_GUIDE_URL[slug] || 'https://trailhead.salesforce.com/credentials'}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 py-1 text-salesforce-blue hover:text-salesforce-dark font-medium text-sm sm:text-base transition-colors"
            >
              View official credential details
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
