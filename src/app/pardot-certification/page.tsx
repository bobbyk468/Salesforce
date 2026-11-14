import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Pardot Certification Guide and Exams (${RELEASE_CURRENT})`
const pageDescription = `Compare Pardot Specialist and Consultant exam formats, difficulty, and study paths, with free practice for both credentials.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/pardot-certification`,
    languages: { 'en-US': `${siteUrl}/pardot-certification`, 'x-default': `${siteUrl}/pardot-certification` },
  },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: `${siteUrl}/pardot-certification`, images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }] },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Certifications', url: '/certifications/role/marketing' },
  { name: 'Pardot Certification', url: '/pardot-certification' },
]

const faqItems = [
  { question: 'Which Pardot certification should I take first?', answer: 'Start with Pardot Specialist if you are new to Account Engagement. It covers lead management, automation, scoring, grading, forms, landing pages, and reports.' },
  { question: 'Is Pardot now called Marketing Cloud Account Engagement?', answer: 'Yes. Salesforce renamed Pardot to Marketing Cloud Account Engagement. Many candidates and employers still use the name Pardot when searching for certifications.' },
  { question: 'Is Pardot Specialist or Pardot Consultant harder?', answer: 'Pardot Consultant is harder. It tests how you plan implementations, gather business requirements, connect systems, and design marketing automation across platforms.' },
]

const comparisonRows = [
  {
    label: 'Best first exam',
    specialist: 'Pardot Specialist is a good first exam for marketers, admins, and marketing operations staff who use the tools.',
    consultant: 'Pardot Consultant suits people with implementation experience who can turn business requirements into an Account Engagement design.',
  },
  {
    label: 'Core focus',
    specialist: 'Covers prospects, lists, forms, automation rules, Engagement Studio, scoring, grading, and email reporting.',
    consultant: 'Covers solution design, lead lifecycle, connector strategy, campaign influence, governance, migration choices, and stakeholder needs.',
  },
  {
    label: 'Difficulty',
    specialist: 'Moderate difficulty. The 72% passing score leaves little room for guessing.',
    consultant: 'More difficult. Questions cover broader scenarios and tradeoffs across Salesforce, sales processes, and marketing automation.',
  },
]

const studyMilestones = [
  'Build a test form, form handler, landing page, and completion action. Learn when each one runs.',
  'Create automation rules, dynamic lists, segmentation lists, and suppression lists. Be able to explain how they differ.',
  'Set up scoring and grading examples. Know which measures engagement and which measures fit.',
  'Review how the Salesforce connector syncs data, chooses field values, assigns prospects, and matches leads and contacts.',
]

export default function PardotCertificationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-certification" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">Account Engagement / Pardot</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pardot Certification Guide</h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">Pardot is now called Marketing Cloud Account Engagement. This guide explains which Pardot certification to take and how to prepare for it.</p>
      </header>
      <ContentPageAuthor />
      <section className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/certifications/pardot-specialist" className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-salesforce-blue/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-salesforce-blue mb-2">Start here</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pardot Specialist</h2>
          <p className="text-sm text-gray-700">For marketers and admins who manage campaigns, forms, automation rules, scoring, grading, and segmentation.</p>
        </Link>
        <Link href="/certifications/pardot-consultant" className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-salesforce-blue/50">
          <p className="text-xs font-semibold uppercase tracking-wide text-salesforce-blue mb-2">Next step</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pardot Consultant</h2>
          <p className="text-sm text-gray-700">For consultants who design Account Engagement solutions for clients and complex B2B marketing processes.</p>
        </Link>
      </section>
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Pardot Certification Path</h2>
        <p className="text-sm text-gray-700">A common path is Pardot Specialist, then Pardot Consultant, followed by Marketing Cloud Consultant or Business Analyst. Choose the next step based on whether you want to focus on marketing operations or implementation consulting.</p>
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
          If you mainly run campaigns, start with Specialist. If you gather requirements, design lead processes, and advise clients on how Account Engagement connects to Salesforce, consider Consultant.
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
          Avoid exam dumps. Questions often test how features work, so memorized answers may fail when a scenario changes.
        </p>
      </section>
      <RelatedGuides links={getRelatedGuides('pardot-certification')} />
    </div>
  )
}
