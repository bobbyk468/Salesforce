import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import PrintChecklistButton from '@/components/PrintChecklistButton'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Exam Day Tips (${RELEASE_CURRENT})`
const pageDescription = `Salesforce exam day tips: what to bring, online vs centre checklist, time management, what to do if something goes wrong.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-exam-day-tips`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-exam-day-tips`, 'x-default': `${siteUrl}/salesforce-certification-exam-day-tips` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certifications', url: '/certifications' },
  { name: 'Exam Day Tips', url: '/salesforce-certification-exam-day-tips' },
]

const faqItems = [
  {
    question: 'What ID do I need for the Salesforce certification exam?',
    answer: 'Bring a valid, government-issued photo ID with a name that exactly matches your Trailhead Academy exam account. Accepted IDs include a passport, national ID card, or driving licence. Even a difference in your middle name can cause a problem. For an online proctored exam, you will show your ID to the webcam during identity checks.',
  },
  {
    question: 'How early should I arrive for a testing centre exam?',
    answer: 'Arrive at least 15 minutes before your testing centre appointment. This gives you time to check in, verify your ID, store personal items, and get settled. If you arrive late, your exam may be cancelled without a refund. If you have not visited the centre before, allow extra travel time and check the address and parking in advance.',
  },
  {
    question: 'Can I take notes during the Salesforce exam?',
    answer: 'At a testing centre, you will receive a whiteboard or scratch paper and a pen or marker. You cannot bring your own notes or paper into the exam room. For an online proctored exam, you may use one blank sheet of paper and a pen, which you must show the proctor before the exam. Prepared notes are not allowed in either format.',
  },
  {
    question: 'What happens if my internet disconnects during an online proctored exam?',
    answer: 'If your internet disconnects during an online proctored exam, try to reconnect right away. Contact Pearson VUE OnVUE support if you cannot reconnect. A brief interruption that is quickly resolved may not cancel the exam. A longer technical failure may lead to a rescheduled exam at no extra cost, depending on the circumstances. Test your system and internet connection 24 hours before the exam.',
  },
  {
    question: 'Should I answer all questions or skip and return to hard ones?',
    answer: 'Yes. Use the "flag and return" strategy. If a question is difficult, flag it and move on. Answer the questions you know first, then return to flagged questions with the time left. This helps you secure points on questions you can answer. Do not leave questions blank; there is no penalty for guessing.',
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
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Prepare for exam day with checklists for online and testing centre exams, time management advice, ID requirements, and steps to take if a problem comes up.
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
              { done: true, text: '24 hours before: Run the Pearson VUE OnVUE system check' },
              { done: true, text: '24 hours before: Test your webcam, microphone, and internet connection' },
              { done: true, text: 'On exam day: Clear your desk of papers, phones, and extra monitors' },
              { done: true, text: 'On exam day: Have your government-issued photo ID ready' },
              { done: true, text: 'On exam day: Use a quiet, private room' },
              { done: true, text: 'On exam day: Close other apps and browser tabs' },
              { done: true, text: 'Keep one blank sheet of paper and a pen ready to show the proctor' },
              { done: true, text: 'Sign in 15 minutes early for identity verification' },
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
              { text: 'Bring a government-issued photo ID that exactly matches your Trailhead Academy account name' },
              { text: 'Bring a second form of ID, such as a credit card or health card' },
              { text: 'Arrive 15 minutes before your appointment' },
              { text: 'Leave bags, phones, and notes at home or in your car' },
              { text: 'Check the centre address and parking before you leave' },
              { text: 'Wear layers in case the testing room is cool or warm' },
              { text: 'Eat before the exam' },
              { text: 'Have your Trailhead Academy / Pearson VUE booking confirmation available' },
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
            <p>You have about <strong>1 minute 45 seconds per question</strong>. Spend less than two minutes on a question before flagging it and moving on. Use the final 15 minutes to review flagged questions.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-2">The Flag-and-Return Strategy</p>
            <ol className="space-y-1 list-decimal list-inside text-gray-600">
              <li>Read every question fully before looking at answers.</li>
              <li>If you know the answer, select it and continue.</li>
              <li>If unsure, make your best choice, flag the question, and move on.</li>
              <li>Answer every question. There is no penalty for guessing.</li>
              <li>Return to flagged questions if you have time.</li>
            </ol>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-2">Multiple-Select Questions</p>
            <p>For questions that ask you to "select TWO" or "select THREE," every selected answer must be correct to earn the point. There is no partial credit. If unsure, rule out answers that are clearly wrong and choose from the rest.</p>
          </div>
        </div>
      </div>

      <div className="no-print bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-3">What to Do If Something Goes Wrong</h2>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>⚠ <strong>Internet disconnects during an online exam:</strong> Try to reconnect right away. Contact Pearson VUE OnVUE support if the problem continues.</li>
          <li>⚠ <strong>The proctor identifies a room issue:</strong> Follow their instructions. Remove the flagged item or move to another room if needed.</li>
          <li>⚠ <strong>The testing centre computer stops working:</strong> Raise your hand and tell a staff member.</li>
          <li>⚠ <strong>Your ID does not match at the testing centre:</strong> You may not be allowed to take the exam. Contact Salesforce certification support and Pearson VUE about next steps.</li>
          <li>⚠ <strong>An emergency comes up:</strong> Contact Pearson VUE before your exam appointment to ask about rescheduling.</li>
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
