'use client'

import Link from 'next/link'

/**
 * Client-only CTA and trust sections to keep administrator page HTML under 200 KB.
 */
export default function AdministratorCtaSections() {
  return (
    <>
      <div id="more-questions" className="mt-12 sm:mt-16 bg-gradient-to-br from-salesforce-blue/10 via-salesforce-light/5 to-salesforce-blue/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center border border-salesforce-blue/20 shadow-lg">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Get the Full ADM-201 Question Bank</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
          Most candidates book the exam after scoring <strong>75%+</strong> on full mocks.
        </p>
        <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
          If you&apos;re planning to test this quarter, aim to complete full mocks at least <strong>10–14 days</strong> before your exam date.
        </p>
        <p className="text-gray-500 text-xs max-w-md mx-auto mb-2">
          Candidates who complete full mock exams report strong first-time pass rates. For pricing and access, use the contact form below or kindly reach out to{' '}
          <a href="mailto:km.krishnamohan25@gmail.com" className="text-salesforce-blue font-medium hover:underline">km.krishnamohan25@gmail.com</a>—mention ADM-201.
        </p>
        <a
          href="/contact#exam=Salesforce%20Certified%20Platform%20Administrator%20(ADM-201)"
          className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
        >
          Get Full Question Bank
        </a>
      </div>

      <section id="practice-vs-dumps" className="mt-12 sm:mt-16 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" aria-labelledby="dumps-comparison-heading">
        <h2 id="dumps-comparison-heading" className="text-lg font-bold text-gray-900 mb-3">
          ADM-201 Practice Questions vs Exam Dumps — What&apos;s the Difference?
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Many candidates search for &ldquo;ADM-201 dumps&rdquo; hoping for a shortcut. Here&apos;s why original practice questions are a better investment:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th className="py-2.5 pr-4 font-semibold text-emerald-700">Practice Questions</th>
                <th className="py-2.5 font-semibold text-red-700">Exam Dumps</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Legality</td>
                <td className="py-2.5 pr-4 text-emerald-700">100% legitimate</td>
                <td className="py-2.5 text-red-600">Violates Salesforce NDA</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Learning Value</td>
                <td className="py-2.5 pr-4 text-emerald-700">Builds real understanding</td>
                <td className="py-2.5 text-red-600">Memorization without comprehension</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Accuracy</td>
                <td className="py-2.5 pr-4 text-emerald-700">Aligned with current exam outline</td>
                <td className="py-2.5 text-red-600">Often outdated or incorrect</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Explanations</td>
                <td className="py-2.5 pr-4 text-emerald-700">Detailed why-right / why-wrong</td>
                <td className="py-2.5 text-red-600">Rarely explained</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Certification Risk</td>
                <td className="py-2.5 pr-4 text-emerald-700">None</td>
                <td className="py-2.5 text-red-600">Salesforce can revoke certification</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">On-the-Job Skills</td>
                <td className="py-2.5 pr-4 text-emerald-700">Prepares for real admin tasks</td>
                <td className="py-2.5 text-red-600">No transferable knowledge</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Salesforce actively monitors for dump usage. Invest in legitimate practice materials that build lasting skills.
        </p>
      </section>

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
            <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">
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
