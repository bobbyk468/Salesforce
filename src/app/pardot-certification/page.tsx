import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Pardot Certification Guide (${RELEASE_CURRENT})`
const pageDescription = 'Pardot certification guide: choose Pardot Specialist or Consultant, compare exam difficulty, format, study path, and free practice questions.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-certification` },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: `${siteUrl}/pardot-certification`, images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }] },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Certifications', url: '/certifications/role/marketing' },
  { name: 'Pardot Certification', url: '/pardot-certification' },
]

const faqItems = [
  { question: 'Which Pardot certification should I take first?', answer: 'Most candidates should start with Pardot Specialist. It is the entry credential for Account Engagement users and covers lead management, automation, scoring, grading, forms, landing pages, and reporting.' },
  { question: 'Is Pardot now called Marketing Cloud Account Engagement?', answer: 'Yes. Salesforce renamed Pardot to Marketing Cloud Account Engagement, but many candidates and employers still search for Pardot certification.' },
  { question: 'Is Pardot Specialist or Pardot Consultant harder?', answer: 'Pardot Consultant is harder because it tests implementation judgment, business requirements, integrations, and multi-system marketing automation scenarios.' },
]

const comparisonRows = [
  {
    label: 'Best first exam',
    specialist: 'Pardot Specialist is the better first exam for hands-on marketers, admins, and marketing operations users.',
    consultant: 'Pardot Consultant is better after you have implementation experience and can translate business requirements into Account Engagement architecture.',
  },
  {
    label: 'Core focus',
    specialist: 'Feature behavior: prospects, lists, forms, automation rules, Engagement Studio, scoring, grading, and email reporting.',
    consultant: 'Solution design: lead lifecycle, connector strategy, campaign influence, governance, migration choices, and stakeholder requirements.',
  },
  {
    label: 'Difficulty',
    specialist: 'Moderate, but the 72% passing score leaves limited room for guessing.',
    consultant: 'Harder because scenarios are broader and often include tradeoffs across Salesforce, sales process, and marketing automation.',
  },
]

const studyMilestones = [
  'Build a test form, form handler, landing page, and completion action so you understand when each fires.',
  'Create automation rules, dynamic lists, segmentation lists, and suppression lists; then explain the difference without notes.',
  'Configure scoring and grading examples and know which one measures engagement versus fit.',
  'Review Salesforce connector sync behavior, field precedence, prospect assignment, and lead/contact matching.',
]

export default function PardotCertificationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-certification" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">Account Engagement / Pardot</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pardot Certification Guide</h1>
        <p className="text-lg text-gray-600">Pardot is now Marketing Cloud Account Engagement, but the search intent is still clear: candidates want to know which Pardot certification to take and how to prepare.</p>
      </header>
      <ContentPageAuthor />
      <section className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/certifications/pardot-specialist" className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-salesforce-blue/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-salesforce-blue mb-2">Start here</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pardot Specialist</h2>
          <p className="text-sm text-gray-700">Best for marketers and admins who operate campaigns, forms, automation rules, scoring, grading, and segmentation.</p>
        </Link>
        <Link href="/certifications/pardot-consultant" className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-salesforce-blue/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-salesforce-blue mb-2">Next step</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pardot Consultant</h2>
          <p className="text-sm text-gray-700">Best for implementation consultants designing Account Engagement solutions for clients and complex B2B funnels.</p>
        </Link>
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Pardot Certification Path</h2>
        <p className="text-sm text-gray-700">Pardot Specialist &rarr; Pardot Consultant &rarr; Marketing Cloud Consultant or Business Analyst, depending on whether you want a marketing operations path or implementation consulting path.</p>
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Pardot Specialist vs Pardot Consultant</h2>
        <div className="space-y-4 text-sm text-gray-700">
          {comparisonRows.map((row) => (
            <div key={row.label} className="grid gap-3 md:grid-cols-[150px_1fr_1fr] border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <p className="font-semibold text-gray-900">{row.label}</p>
              <p><strong className="text-gray-900">Specialist:</strong> {row.specialist}</p>
              <p><strong className="text-gray-900">Consultant:</strong> {row.consultant}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-700 mt-4 pt-4 border-t border-gray-100">
          If you mainly operate campaigns, choose Specialist first. If you gather requirements, design lead lifecycle architecture, and advise clients on how Account Engagement connects with Salesforce, move toward Consultant.
        </p>
      </section>
      <section className="rounded-xl border border-amber-100 bg-amber-50/40 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Hands-On Prep Checklist</h2>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          {studyMilestones.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-700 mt-4">
          Avoid dumps for this track. Pardot questions often hinge on exact feature behavior, so memorized answers break quickly when the scenario changes.
        </p>
      </section>
      <RelatedGuides links={getRelatedGuides('pardot-certification')} />
    </div>
  )
}
