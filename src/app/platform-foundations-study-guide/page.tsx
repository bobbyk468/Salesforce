import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Platform Foundations Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Platform Foundations study guide: exam sections, key topics, study plan. Pass this $75 associate cert in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/platform-foundations-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/platform-foundations-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce platform foundations study guide, platform foundations exam prep, salesforce platform foundations certification 2026, salesforce associate certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Platform Foundations Study Guide', url: '/platform-foundations-study-guide' },
]

const examSections = [
  { name: 'Salesforce Platform & Architecture', weight: 30, note: 'How the Salesforce platform works: multi-tenancy, metadata model, cloud products overview, and core platform concepts.' },
  { name: 'Process Automation & App Development', weight: 28, note: 'Flow Builder, approval processes, formula fields, Lightning App Builder, and low-code development concepts.' },
  { name: 'Data Modelling & Management', weight: 25, note: 'Standard and custom objects, fields, relationships (lookup vs master-detail), record types, and data quality.' },
  { name: 'Security & Access', weight: 17, note: 'Profiles, permission sets, roles, OWD, field-level security, and record-level access fundamentals.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Platform Foundations certification?',
    answer: 'The Salesforce Platform Foundations certification is an associate-level credential ($75) that validates foundational knowledge of the Salesforce platform — how it works, its data model, basic automation, security, and app development concepts. It is designed for professionals new to Salesforce who want a formal credential demonstrating platform fundamentals. It does not require prior Salesforce experience and serves as an entry point before pursuing the Administrator or Platform Developer I certification.',
  },
  {
    question: 'What is the Platform Foundations exam format?',
    answer: 'The exam consists of 40 multiple-choice questions with a 70-minute time limit. The passing score is 70%. The exam costs $75 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'How does Platform Foundations compare to AI Associate?',
    answer: 'Both are $75 associate-level certifications requiring no experience. AI Associate focuses specifically on AI and Salesforce Einstein AI features — AI concepts, responsible AI, and Salesforce AI products. Platform Foundations focuses on the broader Salesforce platform — data model, automation, security, and app development. Platform Foundations provides broader foundation for a Salesforce career; AI Associate is more specialised. Many candidates pursue both as entry-level credentials.',
  },
  {
    question: 'Who should take Platform Foundations?',
    answer: 'Platform Foundations is ideal for: professionals starting a Salesforce career who want a credential before committing to the full Administrator exam; business users and power users who work with Salesforce daily and want formal recognition; project managers, business analysts, and consultants who work alongside Salesforce teams; and students and career-changers building a Salesforce foundation. It requires no prior platform experience.',
  },
  {
    question: 'Should I take Platform Foundations or Administrator first?',
    answer: 'If you are fully committed to a Salesforce career and have time to study, many candidates skip Platform Foundations and go directly for the Administrator certification (which carries significantly more career value at $200). Platform Foundations is best as a confidence-builder and entry point if you are unsure whether Salesforce is the right path, or if you want a quick credential while studying for Administrator. The Administrator certification is much more recognised by employers.',
  },
]

export default function PlatformFoundationsStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/platform-foundations-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Associate Level · $75</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Platform Foundations Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Platform Foundations exam — the $75 entry-level certification covering platform architecture, data modelling, automation, and security fundamentals.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-green-800"><strong>Entry-level certification:</strong> No prior Salesforce experience required. 40 questions, 70-minute limit, 70% passing score. Most candidates pass with 3–4 weeks of focused Trailhead study.</p>
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
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">4-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1', focus: 'Platform architecture & products', tasks: 'Complete Trailhead "Salesforce Platform Basics" and "CRM for Lightning Experience" modules. Understand multi-tenancy and the cloud product landscape.' },
            { week: 'Week 2', focus: 'Data model & objects', tasks: 'Study standard vs custom objects, field types, and relationship types (lookup vs master-detail vs many-to-many). Build objects in a Trailhead Playground.' },
            { week: 'Week 3', focus: 'Automation & security', tasks: 'Study Flow Builder basics, approval processes, profiles, permission sets, OWD, and roles. Complete the Trailhead security module.' },
            { week: 'Week 4', focus: 'Mock exams & review', tasks: 'Take full timed practice exams. Target 80%+ before booking. Review any weak areas identified in practice results.' },
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/platform-foundations-vs-ai-associate" className="text-sm text-salesforce-dark hover:underline font-medium">→ Platform Foundations vs AI Associate — comparison guide</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Platform Foundations Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce Platform Foundations exam — start studying now.</p>
        <Link href="/certifications/app-builder" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
