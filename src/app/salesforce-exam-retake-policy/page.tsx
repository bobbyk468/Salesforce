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
    answer: 'Salesforce does not require a waiting period between exam attempts. You can schedule a retake when you are ready, though Trailhead Academy and Pearson VUE scheduling usually leave at least 24 hours between attempts. Salesforce has not published an attempt limit for most certifications. The retake fee is about 50% of the original exam fee.',
  },
  {
    question: 'How much does a Salesforce exam retake cost?',
    answer: 'Retakes cost about 50% of the original exam fee: a $75 exam costs about $38 to retake, a $200 exam about $100, and a $400 architect exam about $200. After a failed attempt, a discounted retake voucher appears in your Trailhead Academy account. You pay the reduced price when you schedule again.',
  },
  {
    question: 'How many times can I retake a Salesforce certification exam?',
    answer: 'Salesforce has not published a retake limit for most standard certification exams. You can try again as needed, but you will pay the retake fee after each failed attempt. If you fail more than once, use the score report to plan more focused study before booking again. The CTA Board Review has separate rules; candidates who fail typically wait 6 months before reapplying.',
  },
  {
    question: 'What score report do I receive after failing?',
    answer: 'Salesforce provides a score report with your overall score and results for each exam section. For example, it may show 60% in Data Management and 80% in Sharing Model Design. Use this breakdown to identify topics that need more study. The report is available in Trailhead Academy after the exam.',
  },
  {
    question: 'Does failing a Salesforce exam affect my record permanently?',
    answer: 'No. Failed attempts do not appear on your public Trailhead profile or certification verification page. Your Trailhead credentials show certifications you have passed. Employers and clients who use Salesforce verification can see your current credentials, not your exam history or number of attempts.',
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
          { label: 'Waiting Period', value: 'None' },
          { label: 'Retake Cost', value: '~50%' },
          { label: 'Attempt Limit', value: 'None' },
          { label: 'Fail on Record', value: 'No' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
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
            { type: 'Associate exams (Platform Foundations, MuleSoft Integration Foundations; AI Associate retired Feb 2026)', original: '$75', retake: '~$38' },
            { type: 'Standard professional/specialist exams (ADM-201, PD1, Sales Cloud, Service Cloud, etc.)', original: '$200', retake: '~$100' },
            { type: 'Architect exams (Integration Architect, Data Architect, IAM Architect, etc.)', original: '$400', retake: '~$200' },
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
            { step: '1', title: 'Review your score report by section', desc: 'Open your score report in Trailhead Academy after the exam. It shows your result for each section. Note the two or three sections where you scored below the passing threshold and focus your review there.' },
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
        <p className="text-sm text-amber-800">The Salesforce Certified Technical Architect (CTA) Board Review has separate retake rules. Candidates who do not pass the live presentation typically wait 6 months before reapplying and must submit their application materials again. Check Salesforce\'s CTA programme page for current rules.</p>
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
