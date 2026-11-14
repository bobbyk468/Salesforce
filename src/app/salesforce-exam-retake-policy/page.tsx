import type { Metadata } from 'next'
import { RETAKE_POLICY } from '@/lib/exam-policy-facts'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Exam Retake Policy: Cost & Wait Time (${RELEASE_CURRENT})`
const pageDescription = `Review Salesforce exam retake costs, wait times, attempt rules, and score reports, with guidance before booking another attempt.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-exam-retake-policy`,
    languages: { 'en-US': `${siteUrl}/salesforce-exam-retake-policy`, 'x-default': `${siteUrl}/salesforce-exam-retake-policy` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-exam-retake-policy`,
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
  { name: 'Salesforce Exam Retake Policy', url: '/salesforce-exam-retake-policy' },
]

const faqItems = [
  {
    question: 'What is the Salesforce exam retake policy?',
    answer: `Within each release cycle, Salesforce allows ${RETAKE_POLICY.attemptsPerCycle} attempts at the same exam. After a first failure, wait ${RETAKE_POLICY.waitAfterFirstFail}; after a second, wait ${RETAKE_POLICY.waitAfterSecondFail}; after a third, wait until ${RETAKE_POLICY.afterThirdFail}. Attempts reset at the next release cycle.`,
  },
  {
    question: 'How much does a Salesforce exam retake cost?',
    answer: 'Most retakes cost 50% of the original exam fee. Accredited Professional exams cost $150 to retake, the same as the first attempt; Foundations exams have no retake fee. Pearson VUE applies the retake price when you book through Trailhead Academy.',
  },
  {
    question: 'How many times can I retake a Salesforce certification exam?',
    answer: `You can attempt the same exam ${RETAKE_POLICY.attemptsPerCycle} times in one release cycle. After a third failure, wait until the next release cycle begins; your attempt count then resets. The Technical Architect Review Board has separate policies, so check its current programme guidance.`,
  },
  {
    question: 'What score report do I receive after failing?',
    answer: 'Salesforce provides a section-level score report after the exam. Use the breakdown to identify topics that need more study; the report is available in Trailhead Academy.',
  },
  {
    question: 'Does failing a Salesforce exam affect my record permanently?',
    answer: 'The public credential view is for earned certifications. For details about your exam history and score report, sign in to Trailhead Academy.',
  },
]

export default function SalesforceExamRetakePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-exam-retake-policy" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Exam Policy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Exam Retake Policy ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Find retake costs, waiting periods, attempt rules, and advice for preparing after a failed exam.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Waiting Period', value: '24h, then 14d' },
          { label: 'Retake Cost', value: '~50%' },
          { label: 'Attempts', value: '3 per cycle' },
          { label: 'Foundations Retake', value: 'Free' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-950">
        <h2 className="mb-1 font-bold">2026–2027 free-retake promotion</h2>
        <p>
          Salesforce and Pearson are offering one free retake for eligible $200 and $400 exams when candidates opted in and completed their paid first attempt by November 17, 2026. Eligible retakes can be taken January 4–April 7, 2027. Accredited Professional and Technical Architect exams are excluded.{' '}
          <a className="font-semibold underline" href="https://help.salesforce.com/s/articleView?id=005460244&language=en_US&type=1" target="_blank" rel="noopener noreferrer">See Salesforce’s promotion terms</a>.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-green-900 mb-2">The key facts</h2>
        <ul className="space-y-1 text-sm text-green-800">
          <li>✓ You can take the same exam {RETAKE_POLICY.attemptsPerCycle} times per release cycle. Attempts reset when the next cycle starts.</li>
          <li>✓ Wait {RETAKE_POLICY.waitAfterFirstFail} after your first failure and {RETAKE_POLICY.waitAfterSecondFail} after your second. After your third, wait {RETAKE_POLICY.afterThirdFail}.</li>
          <li>✓ Retakes cost {RETAKE_POLICY.retakeFeeShare}. Foundations exams have a retake fee of {RETAKE_POLICY.foundationsRetakeFee}.</li>
          <li>✓ Failed attempts do not appear on your public Trailhead profile</li>
          <li>✓ Use your section score report to find areas that need more study.</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Retake Costs by Exam Type</h2>
        <div className="space-y-3">
          {[
            { type: 'Foundations exams (Platform Foundations, MuleSoft Integration Foundations)', original: '$75', retake: 'Free' },
            { type: 'Standard professional and specialist exams', original: '$200', retake: '$100' },
            { type: 'Architect exams', original: '$400', retake: '$200' },
            { type: 'Accredited Professional exams', original: '$150', retake: '$150' },
            { type: 'Technical Architect evaluation / review board', original: '$1,500 / $4,500', retake: '$750 / $2,250' },
          ].map((row) => (
            <div key={row.type} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100 last:border-0 text-sm">
              <span className="text-gray-700 flex-1">{row.type}</span>
              <div className="flex gap-6 flex-shrink-0">
                <span className="text-gray-600">First attempt: <strong className="text-gray-900">{row.original}</strong></span>
                <span className="text-gray-600">Retake: <strong className="text-green-700">{row.retake}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What to Do After Failing</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Review your score report by section', desc: 'Open your score report in Trailhead Academy after the exam. Note the sections that need more study and focus your review there.' },
            { step: '2', title: 'Give yourself time to study', desc: 'Avoid booking another attempt right away. The page recommends waiting 2–4 weeks to address the gaps in your score report before retaking the exam.' },
            { step: '3', title: 'Vary your study approach', desc: 'If you mainly read Trailhead material, add hands-on sandbox practice. If you already did hands-on work, try scenario-based practice questions. Use more than one study method.' },
            { step: '4', title: 'Focus on weaker sections', desc: 'Spend about 70% of your study time on sections where you scored below the passing threshold. Review stronger sections as needed.' },
            { step: '5', title: 'Practice under exam conditions', desc: 'Take full-length timed practice exams to build stamina and manage your time. Practice answering 60 questions in 90–105 minutes.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-2">CTA Board Review: Different Policy</h2>
        <p className="text-sm text-amber-800">The Salesforce Certified Technical Architect Architect Evaluation and Review Board have separate pricing and scheduling rules. Confirm the current requirements with Salesforce before applying again.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
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

      <RelatedGuides links={getRelatedGuides('salesforce-exam-retake-policy')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Pass It First Time</h2>
        <p className="text-white mb-6">Build confidence with free practice questions before your exam.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
