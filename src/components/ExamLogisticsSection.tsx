'use client'

import { getExamLogistics } from '@/lib/cert-seo-data'

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
      {examCodeNote && (
        <p className="mt-3 text-sm text-gray-600">
          {examCodeNote}
        </p>
      )}
    </section>
  )
}
