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
      <RelatedGuides links={getRelatedGuides('pardot-certification')} />
    </div>
  )
}
