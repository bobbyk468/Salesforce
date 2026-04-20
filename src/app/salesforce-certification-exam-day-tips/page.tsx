import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import PrintChecklistButton from '@/components/PrintChecklistButton'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Exam Day Tips (${RELEASE_CURRENT})`
const pageDescription = `Salesforce exam day tips: what to bring, online vs centre checklist, time management, what to do if something goes wrong.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-exam-day-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-exam-day-tips`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce exam day tips, salesforce certification exam checklist, what to bring salesforce exam 2026, online proctored salesforce exam tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Exam Day Tips', url: '/salesforce-certification-exam-day-tips' },
]

const faqItems = [
  {
    question: 'What ID do I need for the Salesforce certification exam?',
    answer: 'You must present a valid, government-issued photo ID that exactly matches the name on your Webassessor account. Accepted IDs include: passport, national ID card, and driving licence. The name must match character-for-character — even a middle name difference can cause issues. For online proctored exams, you will hold your ID up to the webcam during the identity verification step.',
  },
  {
    question: 'How early should I arrive for a testing centre exam?',
    answer: 'Arrive at the testing centre at least 15 minutes before your scheduled exam time. This allows time for check-in, ID verification, locker assignment for personal items, and getting settled in the exam room. Arriving late can result in exam cancellation without a refund. If you have not visited the testing centre before, allow extra travel time and verify the address and parking in advance.',
  },
  {
    question: 'Can I take notes during the Salesforce exam?',
    answer: 'For testing centre exams: you are provided with a whiteboard or scratch paper and a pen/marker at the testing station — no personal notes or paper allowed in the exam room. For online proctored exams: you may use a single blank piece of paper and pen that must be shown to the proctor before the exam starts. You cannot use pre-prepared notes in either format.',
  },
  {
    question: 'What happens if my internet disconnects during an online proctored exam?',
    answer: 'If your internet disconnects during an online proctored exam, the exam pauses. You should attempt to reconnect immediately. If you cannot reconnect, contact Kryterion support. Minor disconnections that are resolved quickly typically do not result in exam cancellation. Persistent technical failure may result in the exam being rescheduled at no additional charge, depending on the circumstances. This is why testing your internet connection and system 24 hours before the exam is essential.',
  },
  {
    question: 'Should I answer all questions or skip and return to hard ones?',
    answer: 'Yes — use the "flag and return" strategy. When you encounter a difficult question, flag it and move on rather than spending too much time on it. Answer all questions you are confident about first, then return to flagged questions with your remaining time. This ensures you maximise points on questions you know and give yourself perspective on difficult questions after completing the rest of the exam. Never leave questions unanswered — there is no penalty for guessing.',
  },
]

export default function SalesforceCertificationExamDayTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-exam-day-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div className="mb-10 no-print">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Exam Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Exam Day Tips ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to know for exam day — online proctored and testing centre checklists, time management strategy, ID requirements, and what to do if something goes wrong.
        </p>
      </div>

      <ContentPageAuthor />

      <div id="exam-day-checklist" className="print-checklist-section grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="no-print flex items-center justify-between sm:col-span-2 mb-2">
          <h2 className="text-lg font-bold text-gray-900">Exam Day Checklists</h2>
          <PrintChecklistButton />
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Online Proctored Exam Checklist</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              { done: true, text: '24h before: Run Kryterion system check tool' },
              { done: true, text: '24h before: Test webcam, microphone, internet speed' },
              { done: true, text: 'Day of: Clear your desk — remove all papers, phones, and extra monitors' },
              { done: true, text: 'Day of: Have government-issued photo ID ready' },
              { done: true, text: 'Day of: Ensure the room is private and quiet' },
              { done: true, text: 'Day of: Close all apps and browser tabs except the exam' },
              { done: true, text: 'Have one blank piece of paper and a pen visible for the proctor' },
              { done: true, text: 'Log in 15 minutes early to complete identity verification' },
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Testing Centre Checklist</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              { text: 'Bring government-issued photo ID (matches Webassessor name exactly)' },
              { text: 'Bring a second form of ID (credit card, health card)' },
              { text: 'Arrive 15 minutes early — not exactly on time' },
              { text: 'Leave all personal items at home or in car (bags, phones, notes)' },
              { text: 'Verify centre address and parking in advance' },
              { text: 'Wear comfortable layers (testing centres vary in temperature)' },
              { text: 'Eat a meal before — do not arrive hungry' },
              { text: 'Confirm your Webassessor booking confirmation email' },
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="no-print bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Time Management During the Exam</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-2">Standard Professional Exam: 60 questions, 105 minutes</p>
            <p>That is approximately <strong>1 minute 45 seconds per question</strong>. For most questions, this is comfortable. Flag questions that require more than 2 minutes of thinking — move on and return. In the final 15 minutes, review all flagged questions.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-2">The Flag-and-Return Strategy</p>
            <ol className="space-y-1 list-decimal list-inside text-gray-600">
              <li>Read every question fully before looking at answers.</li>
              <li>If confident — answer and move on.</li>
              <li>If uncertain — make a best guess, flag it, and move on.</li>
              <li>Never leave a question blank — there is no penalty for guessing.</li>
              <li>Return to flagged questions with remaining time.</li>
            </ol>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-2">Multiple-Select Questions</p>
            <p>Questions asking you to &quot;select TWO&quot; or &quot;select THREE&quot; answers require all selected answers to be correct to earn the point. There is no partial credit. If you are unsure, eliminate obviously wrong answers and select from the remaining options.</p>
          </div>
        </div>
      </div>

      <div className="no-print bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-3">What to Do If Something Goes Wrong</h2>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>⚠ <strong>Internet disconnects (online):</strong> Reconnect immediately. Contact Kryterion support if it persists.</li>
          <li>⚠ <strong>Proctor flags a room issue:</strong> Address it immediately — remove the flagged item or enter a different room if needed.</li>
          <li>⚠ <strong>Computer crashes at testing centre:</strong> Raise your hand and alert centre staff — they will assist.</li>
          <li>⚠ <strong>ID mismatch at testing centre:</strong> You may be turned away. Contact Salesforce certification support and Kryterion to discuss next steps.</li>
          <li>⚠ <strong>Emergency on exam day:</strong> Contact Kryterion before missing the exam to discuss rescheduling options.</li>
        </ul>
      </div>

      <div className="no-print bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="no-print bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Get Exam-Ready with Practice Questions</h2>
        <p className="text-white mb-6">Build exam confidence with free practice questions before your exam day.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
