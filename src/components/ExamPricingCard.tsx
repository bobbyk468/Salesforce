import Link from 'next/link'
import { tierFromFeeString, getIndiaGstNote } from '@/lib/exam-pricing-data'
import { getExamCost, getRetakeCost } from '@/lib/cert-seo-data'

interface Props {
  certSlug: string    // e.g. "administrator", "developer-1"
  certName: string    // e.g. "Salesforce Administrator"
  certPageSlug: string // e.g. "administrator-practice-test" for /certifications/
}

export default function ExamPricingCard({ certSlug, certName, certPageSlug }: Props) {
  const fee = getExamCost(certSlug)
  const retake = getRetakeCost(certSlug)
  const tier = tierFromFeeString(fee)
  const gstNote = getIndiaGstNote(tier.fee)

  return (
    <div className="my-8 rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Exam Fees</p>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
          {tier.label}
        </span>
      </div>

      <div className="px-5 py-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Exam fee</p>
          <p className="text-2xl font-bold text-gray-900">{fee}</p>
          <p className="text-xs text-gray-400">USD</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Retake fee</p>
          <p className="text-2xl font-bold text-gray-900">{retake}</p>
          <p className="text-xs text-gray-400">USD</p>
        </div>
      </div>

      {tier.note && (
        <div className="px-5 pb-3">
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded px-3 py-2">
            {tier.note}
          </p>
        </div>
      )}

      {gstNote && (
        <div className="px-5 pb-3">
          <p className="text-xs text-gray-500 flex items-start gap-1.5">
            <span className="shrink-0">🇮🇳</span>
            <span>
              {gstNote}. Confirmed at Webassessor checkout.
            </span>
          </p>
        </div>
      )}

      <div className="px-5 pb-4 pt-1 border-t border-gray-100">
        <Link
          href={`/certifications/${certPageSlug}#practice-questions`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white transition-colors"
          style={{ backgroundColor: '#0176D3' }}
        >
          Start {certName} Practice Questions
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
