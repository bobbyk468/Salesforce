'use client'

import { getExamLogistics } from '@/lib/cert-seo-data'
import { tierFromFeeString, getIndiaGstNote } from '@/lib/exam-pricing-data'

interface ExamLogisticsSectionProps {
  slug: string
  /** Optional note (e.g. exam code / Webassessor) for certs like MuleSoft Foundations. */
  examCodeNote?: React.ReactNode
}

/** Reusable exam logistics table (fee, retake, passing score, questions, duration) for GSC-targeted exam-code/fee queries. */
export default function ExamLogisticsSection({ slug, examCodeNote }: ExamLogisticsSectionProps) {
  const logistics = getExamLogistics(slug)
  if (!logistics) return null

  const questionsLabel = typeof logistics.questions === 'number'
    ? `${logistics.questions} multiple-choice`
    : logistics.questions

  const tier = tierFromFeeString(logistics.fee)
  const gstNote = getIndiaGstNote(tier.fee)

  return (
    <section className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:p-5" aria-label="Exam logistics">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Exam logistics</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <tbody>
            <tr><td className="py-1 font-medium pr-4">Fee</td><td className="py-1">{logistics.fee}</td></tr>
            <tr><td className="py-1 font-medium pr-4">Retake</td><td className="py-1">{logistics.retake}</td></tr>
            <tr><td className="py-1 font-medium pr-4">Passing score</td><td className="py-1">{logistics.passingScore}</td></tr>
            <tr><td className="py-1 font-medium pr-4">Questions</td><td className="py-1">{questionsLabel}</td></tr>
            <tr><td className="py-1 font-medium pr-4">Time</td><td className="py-1">{logistics.duration}</td></tr>
          </tbody>
        </table>
      </div>
      {tier.note && (
        <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded px-3 py-2">
          {tier.note}
        </p>
      )}
      {gstNote && (
        <p className="mt-2 text-xs text-gray-500 flex items-start gap-1.5">
          <span className="shrink-0 mt-0.5">🇮🇳</span>
          {gstNote}. Final amount confirmed at Webassessor checkout.
        </p>
      )}
      {examCodeNote && (
        <p className="mt-3 text-sm text-gray-600">
          {examCodeNote}
        </p>
      )}
    </section>
  )
}
