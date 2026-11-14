import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Admin Certification 201 Guide (${RELEASE_CURRENT})`
const pageDescription = 'Salesforce Admin Certification 201 guide: ADM-201 exam format, cost, passing score, study path, and free practice exam links.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-admin-certification-201`,
    languages: { 'en-US': `${siteUrl}/salesforce-admin-certification-201`, 'x-default': `${siteUrl}/salesforce-admin-certification-201` },
  },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: `${siteUrl}/salesforce-admin-certification-201`, images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }] },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Administrator Certification', url: '/certifications/administrator' },
  { name: 'Salesforce Admin Certification 201', url: '/salesforce-admin-certification-201' },
]

const faqItems = [
  { question: 'Is Salesforce Admin Certification 201 the same as ADM-201?', answer: 'Yes. Salesforce Admin Certification 201 is a common search term for the Salesforce Certified Platform Administrator exam, whose exam code is ADM-201.' },
  { question: 'How much does ADM-201 cost?', answer: 'The Administrator exam usually costs $200, with a discounted retake of about $100. Confirm the current price in the official registration flow before booking.' },
  { question: 'What should I study first for ADM-201?', answer: 'Begin with security, objects, user management, data management, reports, dashboards, and Flow. Then take timed practice exams and review the sections you find difficult.' },
]

const sections = [
  ['Questions', '60'], ['Time limit', '105 minutes'], ['Passing score', '68%'], ['Exam fee', '$200']
]

const priorityTopics = [
  {
    topic: 'Security and access',
    guidance: 'Learn how profiles, permission sets, roles, org-wide defaults, sharing rules, teams, queues, and field-level security work. Be clear on which settings control record access and which control object or field permissions.',
  },
  {
    topic: 'Object model and app configuration',
    guidance: 'Practice working with standard and custom objects, lookup and master-detail relationships, record types, page layouts, Lightning record pages, business processes, and compact layouts in a dev org.',
  },
  {
    topic: 'Automation and Flow',
    guidance: 'Flow is a common automation tool. Check whether a scenario specifically calls for an approval process, assignment rule, escalation rule, or another feature before choosing a solution.',
  },
  {
    topic: 'Reports, dashboards, and data quality',
    guidance: 'Review report formats, dashboard running users, dynamic dashboards, import tools, duplicate management, and validation rules. Know when to use Data Loader and when to use Data Import Wizard.',
  },
]

const readinessChecks = [
  'You can explain the difference between a profile, permission set, role, sharing rule, and field-level security without notes.',
  'You can build a record-triggered Flow, validation rule, report, and dashboard in a Salesforce dev org.',
  'You score at least 75% on three timed practice sets and understand each answer you missed.',
  'You can complete a 60-question practice exam in under 95 minutes and still have time to review flagged questions.',
]

export default function SalesforceAdminCertification201Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-admin-certification-201" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">ADM-201 Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Admin Certification 201 (ADM-201)</h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">Find the ADM-201 exam format, cost, and study advice here. When you are ready to test your knowledge, try the <Link href="/certifications/administrator" className="text-salesforce-blue hover:underline">free ADM-201 Platform Administrator practice exam</Link>.</p>
      </header>
      <ContentPageAuthor />
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {sections.map(([label, value]) => <div key={label} className="rounded-xl border border-gray-100 bg-white p-4 text-center"><p className="text-2xl font-bold text-salesforce-blue">{value}</p><p className="text-sm text-gray-600">{label}</p></div>)}
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Best ADM-201 Study Path</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
          <li>Read the official exam guide and plan study time for each objective.</li>
          <li>Start with security, object relationships, data management, automation, and analytics.</li>
          <li>Use <Link href="/certifications/administrator" className="text-salesforce-blue hover:underline">the ADM-201 study guide</Link> to review each exam section.</li>
          <li>Take the <Link href="/certifications/administrator" className="text-salesforce-blue hover:underline">free ADM-201 practice exam</Link> until you consistently score 75% or higher.</li>
        </ol>
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Salesforce Admin Certification 201 Actually Tests</h2>
        <p className="text-sm text-gray-700 mb-4">
          &ldquo;Salesforce Admin Certification 201&rdquo; usually refers to the Salesforce Certified Platform Administrator exam. The exam tests whether you can choose the right Salesforce feature for a business need, including when several options seem similar.
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
          If you are still unsure about security or Flow scenarios, continue practicing before you pay the exam fee. If your remaining gaps are in lower-weight productivity or collaboration topics, you may be close to ready.
        </p>
      </section>
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Free ADM-201 Practice Exam</h2>
        <p className="text-sm text-gray-700 mb-4">Check your readiness with exam-style questions before booking.</p>
        <Link href="/certifications/administrator" className="inline-flex rounded-lg bg-salesforce-blue px-5 py-3 text-white font-semibold hover:bg-salesforce-dark">Start Free ADM-201 Practice Exam</Link>
      </section>
      <RelatedGuides links={getRelatedGuides('salesforce-admin-certification-201')} />
    </div>
  )
}
