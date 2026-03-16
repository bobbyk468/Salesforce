import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Passing Score by Tier (${RELEASE_CURRENT})`
const pageDescription = `Salesforce certification passing scores by tier: Associate (70%), Specialist (~62–68%), Architect (~67%). How scores work and what to aim for.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-passing-score` },
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
  keywords: `salesforce certification passing score, salesforce exam passing percentage, salesforce exam score 2026, what score to pass salesforce exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Passing Score', url: '/salesforce-certification-passing-score' },
]

const faqItems = [
  {
    question: 'What is the passing score for Salesforce Administrator exam?',
    answer: 'Salesforce does not publish official passing scores, but industry consensus and candidate feedback indicate the Administrator (ADM-201) exam requires approximately 65–68% to pass. This varies slightly by exam version. Aim for 75%+ on practice exams before sitting the real exam to build a safety margin.',
  },
  {
    question: 'Do all Salesforce exams have the same passing score?',
    answer: 'No. Associate-level exams ($75) typically require around 70%. Specialist and Professional exams ($200) generally require 62–68% depending on the exam. Architect exams ($400) often require around 67%. Salesforce does not disclose exact thresholds — these figures come from candidate reports and study guide publishers.',
  },
  {
    question: 'How is the Salesforce exam score calculated?',
    answer: 'Salesforce uses a scaled scoring model. Your raw score (correct answers) is converted to a scaled score, typically reported as a percentage. Some questions may be weighted differently. You receive a pass/fail result; exact numerical scores are not shown for failed attempts. For passed exams, you may see a score on your certification transcript.',
  },
  {
    question: 'What score should I aim for on practice exams?',
    answer: 'Aim for 75%+ on multiple full-length timed practice exams before booking the real exam. This provides a safety margin — if the passing threshold is ~65%, scoring 75% on practice gives you buffer for exam-day variability, harder questions, or nerves. Consistently scoring below 70% on practice suggests more study is needed.',
  },
  {
    question: 'Does the Technical Architect (CTA) exam have a passing score?',
    answer: 'The CTA is not a multiple-choice exam. It is a live Board Review where you present a hypothetical architecture to a panel of CTAs. There is no numerical passing score — the board evaluates you on six criteria (architecture, design, security, scalability, etc.) and makes a pass/fail decision. Preparation focuses on presentation skills and architecture storytelling, not a percentage threshold.',
  },
]

const passingScores = [
  { tier: 'Associate', fee: '$75', typicalScore: '~70%', examples: 'AI Associate, Platform Foundations, MuleSoft Integration Foundations' },
  { tier: 'Specialist', fee: '$200', typicalScore: '~62–65%', examples: 'Email Specialist, Pardot Specialist, Platform Developer I' },
  { tier: 'Professional / Consultant', fee: '$200', typicalScore: '~63–68%', examples: 'Administrator, Sales Cloud Consultant, Service Cloud Consultant' },
  { tier: 'Architect', fee: '$400', typicalScore: '~67%', examples: 'Integration Architect, Data Architect, Sharing & Visibility Architect' },
  { tier: 'Technical Architect (CTA)', fee: 'Board Review', typicalScore: 'N/A — Board evaluation', examples: 'Live presentation, no multiple-choice score' },
]

export default function SalesforceCertificationPassingScorePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-passing-score" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Exam Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Passing Score by Tier ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce does not publish official passing scores. This page summarises the typical thresholds by certification tier, based on candidate reports and industry consensus — and what to aim for on practice exams.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-amber-800"><strong>Note:</strong> Salesforce uses scaled scoring and does not disclose exact passing percentages. The figures below are estimates. Always aim for 75%+ on practice exams to build a safety margin.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Passing Scores by Certification Tier</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Tier</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Exam Fee</th>
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Typical Passing Score</th>
                <th scope="col" className="text-left py-2 text-gray-500 font-medium">Examples</th>
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
          <li><strong>Target 75%+ on practice exams.</strong> This gives you a buffer above the typical ~65% threshold for most professional exams.</li>
          <li><strong>Do not rely on &quot;just passing.&quot;</strong> Exam difficulty varies by sitting; a 66% on one practice run may not translate to a pass on the real exam.</li>
          <li><strong>Take multiple full mock exams.</strong> Consistently hitting 75%+ across 2–3 full mocks is a strong readiness indicator.</li>
          <li><strong>Review every wrong answer.</strong> Understanding why you missed questions matters more than the raw percentage.</li>
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
        <p className="text-blue-100 mb-6">Free practice questions for every Salesforce certification — simulate the real exam and track your score.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
