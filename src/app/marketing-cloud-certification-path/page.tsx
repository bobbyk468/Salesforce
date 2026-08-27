import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Marketing Cloud Certification Path (${RELEASE_CURRENT})`
const pageDescription = 'Salesforce Marketing Cloud certification path: Email Specialist, Marketing Cloud Consultant, Pardot Specialist, admin, developer, and study order.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-certification-path` },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: `${siteUrl}/marketing-cloud-certification-path`, images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }] },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Certifications', url: '/certifications/role/marketing' },
  { name: 'Marketing Cloud Certification Path', url: '/marketing-cloud-certification-path' },
]

const faqItems = [
  { question: 'Which Salesforce Marketing Cloud certification should I take first?', answer: 'For Marketing Cloud Engagement, start with Email Specialist. For Account Engagement, start with Pardot Specialist. For implementation consulting, move to Marketing Cloud Consultant after hands-on experience.' },
  { question: 'Do I need coding for Marketing Cloud certification?', answer: 'Email Specialist does not require heavy coding, but AMPscript and data extension knowledge help. Marketing Cloud Developer requires stronger technical skills with APIs, scripting, and custom integrations.' },
  { question: 'Is Marketing Cloud Consultant harder than Email Specialist?', answer: 'Yes. Marketing Cloud Consultant is more scenario-based and tests solution design, implementation judgment, data architecture, and governance.' },
]

const paths = [
  { label: 'Email marketing operator', steps: ['Email Specialist', 'Marketing Cloud Engagement Admin', 'Marketing Cloud Consultant'], href: '/certifications/email-specialist' },
  { label: 'Pardot / Account Engagement', steps: ['Pardot Specialist', 'Pardot Consultant', 'Business Analyst'], href: '/pardot-certification' },
  { label: 'Technical SFMC developer', steps: ['Email Specialist', 'Marketing Cloud Developer', 'Marketing Cloud Consultant'], href: '/marketing-cloud-admin-vs-developer' },
]

export default function MarketingCloudCertificationPathPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">Marketing Cloud Path</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Marketing Cloud Certification Path</h1>
        <p className="text-lg text-gray-600">Marketing Cloud has multiple tracks. Pick your path based on whether you work in Email Studio/Journey Builder, Account Engagement, or technical SFMC implementation.</p>
      </header>
      <ContentPageAuthor />
      <section className="space-y-4 mb-8">
        {paths.map((path) => (
          <Link key={path.label} href={path.href} className="block rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-salesforce-blue/50">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{path.label}</h2>
            <p className="text-sm text-gray-700">{path.steps.join(' -> ')}</p>
          </Link>
        ))}
      </section>
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Best First Marketing Cloud Cert</h2>
        <p className="text-sm text-gray-700">If you use Marketing Cloud Engagement, start with <Link href="/certifications/email-specialist" className="text-salesforce-blue hover:underline">Email Specialist</Link>. If you use Account Engagement/Pardot, start with <Link href="/certifications/pardot-specialist" className="text-salesforce-blue hover:underline">Pardot Specialist</Link>.</p>
      </section>
      <RelatedGuides links={getRelatedGuides('marketing-cloud-certification-path')} />
    </div>
  )
}
