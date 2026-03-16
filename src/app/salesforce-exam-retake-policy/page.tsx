import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Exam Retake Policy (${RELEASE_CURRENT})`
const pageDescription = `Salesforce certification retake policy 2026: waiting periods, retake costs, how many attempts allowed, and what to do differently after failing.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-exam-retake-policy` },
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
  keywords: `salesforce exam retake policy, salesforce certification fail retake 2026, how many times can you retake salesforce exam, salesforce exam waiting period`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Exam Retake Policy', url: '/salesforce-exam-retake-policy' },
]

const faqItems = [
  {
    question: 'What is the Salesforce exam retake policy?',
    answer: 'Salesforce does not impose a mandatory waiting period between exam attempts. You can reschedule your retake as soon as you are ready — practically speaking, scheduling logistics through Webassessor/Kryterion mean you will have at least 24 hours between attempts. There is no published limit on the number of attempts for most certifications. The retake fee is approximately 50% of the original exam fee.',
  },
  {
    question: 'How much does a Salesforce exam retake cost?',
    answer: 'Retake fees are approximately 50% of the original exam fee: $75 exam → ~$38 retake. $200 exam → ~$100 retake. $400 architect exam → ~$200 retake. After a failed attempt, a discounted retake voucher appears automatically in your Webassessor account. You pay the discounted price when scheduling your next attempt.',
  },
  {
    question: 'How many times can I retake a Salesforce certification exam?',
    answer: 'Salesforce does not publish a hard limit on retake attempts for most standard certification exams. You can attempt as many times as needed — though you will pay the retake fee for each attempt after the first. Practically speaking, if you are failing repeatedly, it signals a need for more structured study rather than simply rescheduling. Note: the CTA Board Review has specific policies — failed candidates typically must wait 6 months before reapplying.',
  },
  {
    question: 'What score report do I receive after failing?',
    answer: 'Salesforce provides a score report that shows your overall score and your performance in each exam section (e.g., you scored 60% in Data Management but 80% in Sharing Model Design). This breakdown is extremely valuable for retake preparation — it tells you exactly which sections need more study. The score report is available in your Webassessor account immediately after the exam.',
  },
  {
    question: 'Does failing a Salesforce exam affect my record permanently?',
    answer: 'No — failed attempts do not appear on your public Trailhead profile or certification verification. Your Trailhead credential page only shows active certifications you have passed. Employers and clients using the Salesforce certification verification tool will only see certifications you currently hold — not your exam history or number of attempts.',
  },
]

export default function SalesforceExamRetakePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-exam-retake-policy" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Exam Policy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Exam Retake Policy ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to know if you did not pass your Salesforce certification — retake costs, waiting periods, score reports, and how to prepare for your next attempt.
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
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-green-900 mb-2">The key facts</h2>
        <ul className="space-y-1 text-sm text-green-800">
          <li>✓ No mandatory waiting period between attempts</li>
          <li>✓ Retake voucher (~50% off) automatically appears in Webassessor after a failed attempt</li>
          <li>✓ No published limit on number of attempts for standard certs</li>
          <li>✓ Failed attempts do not appear on your public Trailhead profile</li>
          <li>✓ Score report by section helps you target your weak areas</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Retake Costs by Exam Type</h2>
        <div className="space-y-3">
          {[
            { type: 'Associate exams (AI Associate, Platform Foundations, MuleSoft Integration Foundations)', original: '$75', retake: '~$38' },
            { type: 'Standard professional/specialist exams (ADM-201, PD1, Sales Cloud, Service Cloud, etc.)', original: '$200', retake: '~$100' },
            { type: 'Architect exams (Integration Architect, Data Architect, IAM Architect, etc.)', original: '$400', retake: '~$200' },
          ].map((row) => (
            <div key={row.type} className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100 last:border-0 text-sm">
              <span className="text-gray-700 flex-1">{row.type}</span>
              <div className="flex gap-6 flex-shrink-0">
                <span className="text-gray-500">First attempt: <strong className="text-gray-900">{row.original}</strong></span>
                <span className="text-gray-500">Retake: <strong className="text-green-700">{row.retake}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What to Do After Failing</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Review your score report by section', desc: 'Log into Webassessor immediately after the exam. Your score report shows performance per section (e.g., 52% in Data Modelling, 78% in Security). Identify the two or three sections where you scored below the passing threshold — those are your retake focus areas.' },
            { step: '2', title: 'Do not reschedule immediately', desc: 'Resist the urge to rebook within 48 hours. Most candidates who fail and immediately retake without additional study fail again. Give yourself 2–4 weeks to close the specific gaps identified in your score report.' },
            { step: '3', title: 'Change your study approach', desc: 'If you relied primarily on Trailhead reading, add hands-on practice in a sandbox. If you did hands-on work, add scenario-based practice questions that simulate exam conditions. Most failures result from one weak study method — diversify your approach.' },
            { step: '4', title: 'Target your weak sections specifically', desc: 'Focus 70% of retake study time on sections where you scored below passing. Do not waste time re-studying areas where you already scored above passing.' },
            { step: '5', title: 'Practice exam conditions', desc: 'Complete full timed mock exams (same question count and time limit as the real exam) to build stamina and time management. Many candidates know the material but run out of time. Practise managing 60 questions in 90–105 minutes.' },
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
        <h2 className="text-base font-bold text-amber-900 mb-2">CTA Board Review — Different Policy</h2>
        <p className="text-sm text-amber-800">The Salesforce Certified Technical Architect (CTA) Board Review has different retake rules than standard exams. Candidates who do not pass the live board presentation typically wait 6 months before reapplying and must resubmit application materials. Check the official Salesforce CTA programme page for current Board Review retake policies.</p>
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
        <p className="text-blue-100 mb-6">Use free practice questions to build exam confidence before you book.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
