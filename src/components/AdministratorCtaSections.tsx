'use client'

import Link from '@/components/AppLink'

/**
 * Client-only CTA and trust sections to keep administrator page HTML under 200 KB.
 */
export default function AdministratorCtaSections() {
  return (
    <>
      <div id="more-questions" className="mt-12 sm:mt-16 bg-gradient-to-br from-salesforce-blue/10 via-salesforce-light/5 to-salesforce-blue/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center border border-salesforce-blue/20 shadow-lg">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Get the Full ADM-201 Question Bank</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
          Most candidates book the exam after scoring <strong>80%+</strong> on full mocks.
        </p>
        <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
          If you’re planning to test this quarter, aim to complete full mocks at least <strong>10–14 days</strong> before your exam date.
        </p>
        <p className="text-gray-600 text-xs max-w-md mx-auto mb-4">
          Contact us for more information on our full 60-question mock exams and a personalized study plan. Use the{' '}
          <Link href="/contact#contact-form" className="text-salesforce-blue font-medium hover:underline">contact form</Link> and mention ADM-201.
        </p>
        <Link
          href="/contact#exam=Salesforce%20Certified%20Platform%20Administrator%20(ADM-201)"
          className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
        >
          Request Mock Exams &amp; Study Plan
        </Link>
      </div>

      <section id="platform-admin-vs-other" className="mt-12 sm:mt-16 rounded-xl border border-gray-100 bg-gray-50/50 p-6" aria-labelledby="comparison-heading">
        <h2 id="comparison-heading" className="text-xl font-bold text-gray-900 mb-4">
          Platform Administrator vs Other Salesforce Certifications
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Choosing the right certification depends on your experience and goals. Here’s how the Platform Administrator (ADM-201) compares to common next steps:
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            <strong className="text-gray-900">Platform Administrator vs Advanced Administrator (ADM-211):</strong>{' '}
            ADM-201 is the entry-level admin cert; Advanced Administrator builds on it with deeper configuration, integration, and solution design. Take ADM-201 first, then consider the{' '}
            <Link href="/certifications/advanced-administrator#practice-questions" className="text-salesforce-blue font-medium hover:underline">
              ADM-211 Advanced Administrator study guide &amp; practice questions
            </Link>.
          </li>
          <li>
            <strong className="text-gray-900">Platform Administrator vs Platform App Builder (DEV-402):</strong>{' '}
            Both are declarative and don’t require coding. App Builder focuses on building custom apps, objects, and Lightning components. If you enjoy customizing the platform after ADM-201, see our{' '}
            <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">
              DEV-402 Platform App Builder study guide &amp; free practice test
            </Link>.
          </li>
        </ul>
      </section>
    </>
  )
}
