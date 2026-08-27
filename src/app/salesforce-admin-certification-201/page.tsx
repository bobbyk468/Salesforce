import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Admin Certification 201 Guide (${RELEASE_CURRENT})`
const pageDescription = 'Salesforce Admin Certification 201 guide: ADM-201 exam format, cost, passing score, study path, and free practice exam links.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-admin-certification-201` },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: `${siteUrl}/salesforce-admin-certification-201`, images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }] },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Administrator Certification', url: '/certifications/administrator' },
  { name: 'Salesforce Admin Certification 201', url: '/salesforce-admin-certification-201' },
]

const faqItems = [
  { question: 'Is Salesforce Admin Certification 201 the same as ADM-201?', answer: 'Yes. Searchers often call it Salesforce Admin Certification 201, but the common exam code is ADM-201 for the Salesforce Certified Platform Administrator credential.' },
  { question: 'How much does ADM-201 cost?', answer: 'The Salesforce Administrator exam is a standard certification exam, commonly priced at $200 with a discounted retake around $100. Confirm the final price in the official registration flow before booking.' },
  { question: 'What should I study first for ADM-201?', answer: 'Start with security model, object model, user management, data management, reports, dashboards, and Flow. Then take timed practice exams and review weak sections.' },
]

const sections = [
  ['Questions', '60'], ['Time limit', '105 minutes'], ['Passing score', '68%'], ['Exam fee', '$200']
]

const priorityTopics = [
  {
    topic: 'Security and access',
    guidance: 'Know profiles, permission sets, roles, org-wide defaults, sharing rules, teams, queues, and field-level security. Most missed ADM-201 questions come from mixing up what controls record visibility versus what controls object or field permissions.',
  },
  {
    topic: 'Object model and app configuration',
    guidance: 'Practice standard objects, custom objects, lookup versus master-detail relationships, record types, page layouts, Lightning record pages, business processes, and compact layouts in a dev org.',
  },
  {
    topic: 'Automation and Flow',
    guidance: 'Use Flow as the default automation answer unless the scenario clearly asks for approval routing, assignment rules, escalation rules, or another feature-specific tool.',
  },
  {
    topic: 'Reports, dashboards, and data quality',
    guidance: 'Understand report formats, dashboard running users, dynamic dashboards, import tools, duplicate management, validation rules, and when to use Data Loader instead of Data Import Wizard.',
  },
]

const readinessChecks = [
  'You can explain the difference between profile, permission set, role, sharing rule, and field-level security without checking notes.',
  'You can build a record-triggered Flow, a validation rule, a report, and a dashboard in a Salesforce dev org.',
  'You score at least 75% on three timed practice sets and can explain every wrong answer.',
  'You can finish a 60-question practice exam in under 95 minutes, leaving time to review flagged questions.',
]

export default function SalesforceAdminCertification201Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-admin-certification-201" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">ADM-201 Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Admin Certification 201 (ADM-201)</h1>
        <p className="text-lg text-gray-600">Use this page when you are searching for Salesforce Admin Certification 201 and need the exact ADM-201 exam format, cost, study path, and free practice exam.</p>
      </header>
      <ContentPageAuthor />
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {sections.map(([label, value]) => <div key={label} className="rounded-xl border border-gray-100 bg-white p-4 text-center"><p className="text-2xl font-bold text-salesforce-blue">{value}</p><p className="text-sm text-gray-600">{label}</p></div>)}
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Best ADM-201 Study Path</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
          <li>Read the official exam guide and map each objective to a study block.</li>
          <li>Study security, object relationships, data management, automation, and analytics first.</li>
          <li>Use <Link href="/adm-201-study-guide" className="text-salesforce-blue hover:underline">the ADM-201 study guide</Link> for section-level preparation.</li>
          <li>Take the <Link href="/certifications/administrator" className="text-salesforce-blue hover:underline">free ADM-201 practice exam</Link> until you score 75% or higher consistently.</li>
        </ol>
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Salesforce Admin Certification 201 Actually Tests</h2>
        <p className="text-sm text-gray-700 mb-4">
          Searchers often use &ldquo;Salesforce Admin Certification 201&rdquo; when they mean the Salesforce Certified Platform Administrator exam. The exam is not a memory test of menu names. It checks whether you can choose the right Salesforce admin feature for a business requirement, especially when two answers sound close.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          {priorityTopics.map((item) => (
            <div key={item.topic}>
              <h3 className="font-semibold text-gray-900 mb-1">{item.topic}</h3>
              <p>{item.guidance}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-amber-100 bg-amber-50/40 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">When Are You Ready to Book ADM-201?</h2>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          {readinessChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-700 mt-4 pt-4 border-t border-amber-100">
          If you are still guessing on security or Flow scenarios, keep practicing before paying the exam fee. If your weak area is only low-weight productivity/collaboration topics, you may be closer than you think.
        </p>
      </section>
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Free ADM-201 Practice Exam</h2>
        <p className="text-sm text-gray-700 mb-4">If you already know the basics, benchmark yourself with exam-style questions before booking.</p>
        <Link href="/certifications/administrator" className="inline-flex rounded-lg bg-salesforce-blue px-5 py-3 text-white font-semibold hover:bg-salesforce-dark">Start Free ADM-201 Practice Exam</Link>
      </section>
      <RelatedGuides links={getRelatedGuides('salesforce-admin-certification-201')} />
    </div>
  )
}
