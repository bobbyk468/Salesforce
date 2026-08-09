import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'marketing-cloud-engagement-foundations'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Marketing Cloud Engagement Foundations study guide: exam sections, email, data, automation. Pass this $75 cert in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-engagement-foundations-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-engagement-foundations-study-guide`,
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
  { name: 'Marketing Cloud Engagement Foundations', url: '/certifications/marketing-cloud-engagement-foundations' },
  { name: 'MC Engagement Foundations Study Guide', url: '/marketing-cloud-engagement-foundations-study-guide' },
]

const examSections = [
  { name: 'Email Marketing Fundamentals', weight: 32, note: 'Email best practices, deliverability, CAN-SPAM/GDPR compliance, email testing, and list management fundamentals.' },
  { name: 'Data Management & Subscribers', weight: 25, note: 'Subscriber model, data extensions vs lists, contact management, suppression lists, and data hygiene.' },
  { name: 'Marketing Cloud Platform Navigation', weight: 23, note: 'Marketing Cloud studio navigation, Content Builder basics, Journey Builder overview, and platform setup.' },
  { name: 'Automation & Reporting', weight: 20, note: 'Automation Studio basics, Journey Builder entry sources, standard email performance metrics, and engagement reporting.' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Engagement Foundations certification?',
    answer: 'The Marketing Cloud Engagement Foundations (also called MC Engagement Foundations) is an associate-level Salesforce certification ($75) that validates foundational knowledge of Marketing Cloud Engagement — email marketing concepts, platform navigation, subscriber management, and basic automation. It is an entry-level credential designed for professionals new to Marketing Cloud who want to demonstrate foundational email marketing and platform knowledge.',
  },
  {
    question: 'What is the MC Engagement Foundations exam format?',
    answer: 'The exam consists of 40 multiple-choice questions with a 70-minute time limit. The passing score is 70%. The exam costs $75 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'What is the difference between MC Engagement Foundations and MC Engagement Admin?',
    answer: 'MC Engagement Foundations is the associate-level entry credential ($75, 40Q, 70% passing) covering email marketing concepts and basic platform navigation. MC Engagement Admin is the professional-level certification ($200, 60Q, 67% passing) covering deep platform administration, configuration, account management, deliverability settings, and operational management. Foundations is a stepping stone; Admin is for professionals managing MC Engagement operationally.',
  },
  {
    question: 'What email marketing knowledge does this exam test?',
    answer: 'The exam tests email marketing best practices including: the difference between hard and soft bounces; deliverability factors (SPF, DKIM, IP reputation); CAN-SPAM and GDPR compliance requirements; email testing best practices (A/B testing, rendering tests); and subscriber engagement metrics (open rate, click rate, unsubscribe rate). Candidates should understand email marketing fundamentals independently of the Salesforce platform.',
  },
  {
    question: 'Should I start with MC Engagement Foundations or go directly to MC Engagement Admin?',
    answer: 'If you are new to both email marketing and Marketing Cloud, start with Foundations as a knowledge confirmation checkpoint. If you have prior email marketing or Marketing Cloud experience, skip Foundations and pursue MC Engagement Admin directly — it is a more valuable credential for career positioning. The Foundations cert is best as an entry point or confidence-builder, not a career-defining credential on its own.',
  },
]

export default function MarketingCloudEngagementFoundationsStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-engagement-foundations-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="marketing-cloud-engagement-foundations"
        certName="Marketing Cloud Engagement Foundations"
        description={pageDescription}
        pageUrl="/marketing-cloud-engagement-foundations-study-guide"
      />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Associate Level · $75</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Marketing Cloud Engagement Foundations Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Marketing Cloud Engagement Foundations exam — the $75 entry-level certification covering email marketing concepts, subscriber management, and Marketing Cloud platform basics.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="marketing-cloud-engagement-foundations-exam-tips" certName="Marketing Cloud Engagement Foundations" />
      <CertInsightBlock certSlug="marketing-cloud-engagement-foundations" />
      <ExamPricingCard
        certSlug="marketing-cloud-engagement-foundations"
        certName="Marketing Cloud Engagement Foundations"
        certPageSlug="marketing-cloud-engagement-foundations"
      />

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-green-800"><strong>Entry-level certification:</strong> No prior Marketing Cloud experience required. 40 questions, 70-minute limit, 70% passing score. Most candidates pass with 3–4 weeks of study combining Trailhead modules and email marketing fundamentals reading.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '40' },
          { label: 'Time Limit', value: '70 min' },
          { label: 'Passing Score', value: '70%' },
          { label: 'Exam Fee', value: '$75' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Section Breakdown</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.1}%` }} />
              </div>
              <p className="text-xs text-gray-600">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">4-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1', focus: 'Email marketing fundamentals', tasks: 'Study email deliverability concepts, CAN-SPAM/GDPR basics, bounce types, and email testing best practices. Read the Litmus Email Analytics report for real-world context.' },
            { week: 'Week 2', focus: 'Subscriber & data management', tasks: 'Complete MC Engagement Trailhead modules on subscriber lists, data extensions, and contact management. Understand the all-subscribers list.' },
            { week: 'Week 3', focus: 'Platform navigation & automation', tasks: 'Explore Marketing Cloud Engagement in a trial org. Practice Content Builder, Journey Builder basics, and Automation Studio simple flows.' },
            { week: 'Week 4', focus: 'Mock exams & review', tasks: 'Take timed full practice exams. Target 80%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-xs font-bold text-salesforce-blue pt-0.5">{item.week}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.focus}</p>
                <p className="text-xs text-gray-600">{item.tasks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Go Next</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Platform Administrator (ADM-201)</Link>, <Link href="/certifications/developer-1" className="text-salesforce-blue font-medium hover:underline">Platform Developer I</Link>, or <Link href="/certifications/ai-associate" className="text-salesforce-blue font-medium hover:underline">AI Associate</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="marketing-cloud-engagement-foundations" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice MC Engagement Questions</h2>
        <p className="text-white mb-6">Free practice questions for Marketing Cloud Engagement certifications.</p>
        <Link href="/certifications/email-specialist" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}