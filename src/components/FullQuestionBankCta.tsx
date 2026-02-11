import Link from 'next/link'
import { SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'

interface FullQuestionBankCtaProps {
  slug: string
  certTitle: string
}

/**
 * Shared "Get the full question bank" CTA block, aligned to ADM-201 style.
 * Used across certification pages to keep format consistent.
 */
export default function FullQuestionBankCta({ slug, certTitle }: FullQuestionBankCtaProps) {
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const contactExamParam = examCode || certTitle
  const heading = examCode ? `Get the Full ${examCode} Question Bank` : 'Get the Full Question Bank'

  return (
    <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-6 sm:p-8 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{heading}</h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base max-w-xl mx-auto">
        Go beyond the free sample: full bank aligned to the official exam outline.
      </p>
      <ul className="text-left text-sm text-gray-700 max-w-md mx-auto mb-4 space-y-2 list-disc list-inside">
        <li>
          <strong>500+ questions</strong> — cover every section and weight band
        </li>
        <li>
          <strong>Detailed explanations</strong> — understand why each answer is correct (and why others are wrong)
        </li>
        <li>
          <strong>Exam-style format</strong> — similar length and difficulty to the real exam
        </li>
        <li>
          <strong>By section</strong> — practice weak areas or do full mock exams
        </li>
      </ul>
      <div className="text-left text-sm text-gray-700 max-w-md mx-auto mb-4 p-4 bg-white/60 rounded-lg border border-salesforce-blue/10">
        <p className="font-semibold text-gray-900 mb-2">What you get:</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>
            <strong>Access:</strong> Web-based; use from any device
          </li>
          <li>
            <strong>Includes:</strong> Timed full-length mocks + section-wise practice tests
          </li>
          <li>
            <strong>Validity:</strong> 30, 60, or 90 days (contact for options)
          </li>
        </ul>
      </div>
      <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
        Most candidates book the exam after scoring <strong>75%+</strong> on full mocks.
      </p>
      <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
        If you&apos;re planning to test this quarter, aim to complete full mocks at least <strong>10–14 days</strong> before your exam date.
      </p>
      <p className="text-gray-500 text-xs max-w-md mx-auto mb-6">
        Candidates who complete full mock exams report strong first-time pass rates. For pricing and access, use the contact form below or kindly reach out to{' '}
        <a href="mailto:km.krishnamohan25@gmail.com" className="text-salesforce-blue font-medium hover:underline">km.krishnamohan25@gmail.com</a>.
      </p>
      <Link
        href={`/contact?exam=${encodeURIComponent(contactExamParam)}`}
        className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
      >
        Get Full Question Bank
      </Link>
    </div>
  )
}

