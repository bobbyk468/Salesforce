import Link from '@/components/AppLink'
import { getMockExamTargetLabel, SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'

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
  // Derived per exam so this shared CTA cannot contradict the readiness target
  // stated elsewhere on the same page.
  const mockTarget = getMockExamTargetLabel(slug)
  const contactExamParam = examCode || certTitle
  const heading = examCode ? `Get the Full ${examCode} Question Bank` : 'Get the Full Question Bank'

  return (
    <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-6 sm:p-8 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{heading}</h3>
      <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
        {mockTarget ? (
          <>Most candidates book the exam after scoring <strong>{mockTarget}</strong> on full mocks.</>
        ) : (
          <>Most candidates book once they can explain every wrong answer on a full mock.</>
        )}
      </p>
      <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
        If you’re planning to test this quarter, aim to complete full mocks at least <strong>10–14 days</strong> before your exam date.
      </p>
      <p className="text-gray-600 text-xs max-w-md mx-auto mb-6">
        Contact us for more information on our full 60-question mock exams and a personalized study plan. Use the{' '}
        <Link href="/contact#contact-form" className="text-salesforce-dark font-medium underline underline-offset-2 hover:text-salesforce-blue">
          contact form
        </Link>
        .
      </p>
      <Link
        href={`/contact#exam=${encodeURIComponent(contactExamParam)}`}
        className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
      >
        Request Mock Exams &amp; Study Plan
      </Link>
    </div>
  )
}

