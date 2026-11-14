import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Passing Scores (${RELEASE_CURRENT})`
const pageDescription = `Review Salesforce passing scores from Associate and Specialist to Consultant and Architect, and choose a useful mock exam target.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-passing-score`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-passing-score`, 'x-default': `${siteUrl}/salesforce-certification-passing-score` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-passing-score`,
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
  { name: 'Salesforce Certification Passing Score', url: '/salesforce-certification-passing-score' },
]

const faqItems = [
  {
    question: 'What is the passing score for Salesforce Administrator exam?',
    answer: 'Platform Administrator (ADM-201) requires a score of 68%, or 41 of the 60 scored questions. This figure comes from the official Salesforce exam guide.',
  },
  {
    question: 'Do all Salesforce exams have the same passing score?',
    answer: 'No. Associate exams ($75) typically require about 70%. Specialist and Professional exams ($200) generally require 62–68%, depending on the exam. Architect exams ($400) often require about 67%. Salesforce does not disclose every exact threshold; some figures come from candidate reports and study guide publishers.',
  },
  {
    question: 'How is the Salesforce exam score calculated?',
    answer: 'Salesforce calculates your score as the percentage of scored questions you answered correctly and compares it with the passing score in the official exam guide. Unscored pilot questions do not count. You receive a pass or fail result and a breakdown by exam section.',
  },
  {
    question: 'What score should I aim for on practice exams?',
    answer: 'Aim for at least 75% on several full-length, timed practice exams before booking. This gives you a margin above the passing score, which ranges from about 60% to 78% depending on the exam. If you consistently score below 70%, spend more time studying before you book.',
  },
  {
    question: 'Does the Technical Architect (CTA) exam have a passing score?',
    answer: 'The CTA is not a multiple-choice exam. In the live Board Review, you present a hypothetical architecture to a panel of CTAs. There is no numerical passing score. The board evaluates six criteria, including architecture, design, security, and scalability, then decides pass or fail. Prepare to explain your architecture clearly, not to reach a percentage threshold.',
  },
]

const passingScores = [
  { tier: 'Associate', fee: '$75', typicalScore: '62-70%', examples: 'Platform Foundations, MuleSoft Integration Foundations, AI Associate (retired Feb 2026)' },
  { tier: 'Specialist', fee: '$200', typicalScore: '~62–65%', examples: 'Email Specialist, Pardot Specialist, Platform Developer I' },
  { tier: 'Professional / Consultant', fee: '$200', typicalScore: '~63–68%', examples: 'Administrator, Sales Cloud Consultant, Service Cloud Consultant' },
  { tier: 'Architect', fee: '$400', typicalScore: '58-70%', examples: 'Integration Architect, Data Architect, Sharing & Visibility Architect' },
  { tier: 'Technical Architect (CTA)', fee: 'Board Review', typicalScore: 'N/A: Board evaluation', examples: 'Live presentation, no multiple-choice score' },
]

export default function SalesforceCertificationPassingScorePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-passing-score" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Exam Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Passing Score by Tier ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Salesforce lists exact passing scores in official exam guides. This page shows verified scores where a guide is available. Scores range from 48% to 78%. Salesforce does not publish numerical cut scores for Accredited Professional and board-reviewed exams.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-amber-800"><strong>Note:</strong> figures below come from official Salesforce exam guides rather than estimates. Salesforce does not publish a numerical passing score for Accredited Professional and board-reviewed exams. On practice tests, aim about ten points above the score required for your exam.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Passing Scores by Certification Tier</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Tier</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Exam Fee</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Typical Passing Score</th>
                <th scope="col" className="text-left py-2 text-gray-600 font-medium">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {passingScores.map((row) => (
                <tr key={row.tier}>
                  <td className="py-2 pr-4 text-gray-900 font-medium">{row.tier}</td>
                  <td className="py-2 pr-4 text-salesforce-blue font-semibold">{row.fee}</td>
                  <td className="py-2 pr-4 text-gray-700">{row.typicalScore}</td>
                  <td className="py-2 text-gray-600">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Use This When Studying</h2>
        <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
          <li><strong>Aim for 75% or higher.</strong> This gives you a margin above the exam threshold, which ranges from about 60% to 78%.</li>
          <li><strong>Do not aim only to scrape a pass.</strong> A score of 66% on a practice test may not translate to a pass on exam day.</li>
          <li><strong>Take several full practice exams.</strong> Scoring 75% or higher on two or three full tests can help you judge if you are ready.</li>
          <li><strong>Review each wrong answer.</strong> Learn why an answer was wrong instead of focusing only on your score.</li>
        </ol>
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

      <RelatedGuides links={getRelatedGuides('salesforce-certification-passing-score')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Until You Hit 75%+</h2>
        <p className="text-white mb-6">Practice with questions for every Salesforce certification and track your score.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
