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

const pathDetails = [
  {
    heading: 'If you work in Email Studio and Journey Builder',
    body: 'Start with Email Specialist because it validates the day-to-day mechanics of subscriber data, send classifications, deliverability, content, AMPscript basics, and reporting. After that, Marketing Cloud Engagement Admin makes sense if you manage setup, users, business units, data extensions, and platform configuration.',
    href: '/certifications/email-specialist',
    cta: 'Study Email Specialist',
  },
  {
    heading: 'If you work in Account Engagement / Pardot',
    body: 'Start with Pardot Specialist. It is the clearest entry credential for B2B marketing automation users who build forms, automation rules, Engagement Studio programs, scoring, grading, and Salesforce connector workflows. Move to Pardot Consultant when you design full implementations.',
    href: '/pardot-certification',
    cta: 'Compare Pardot certs',
  },
  {
    heading: 'If you implement Marketing Cloud technically',
    body: 'A technical path usually combines Email Specialist fundamentals with Marketing Cloud Developer topics such as APIs, data extensions, scripting, triggered sends, and integration patterns. This path is harder but more differentiated for developers and technical consultants.',
    href: '/marketing-cloud-admin-vs-developer',
    cta: 'Compare admin vs developer',
  },
]

const decisionRules = [
  'Choose Email Specialist first if your daily work is campaign execution, segmentation, deliverability, and Journey Builder.',
  'Choose Pardot Specialist first if your stack is B2B Account Engagement rather than Marketing Cloud Engagement.',
  'Choose Marketing Cloud Consultant only after hands-on implementation experience; it is not just an entry-level memorization exam.',
  'Choose Marketing Cloud Developer if you are comfortable with APIs, scripting, custom integrations, and technical troubleshooting.',
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
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Choose the Right Marketing Cloud Path</h2>
        <div className="space-y-5 text-sm text-gray-700">
          {pathDetails.map((detail) => (
            <div key={detail.heading} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <h3 className="font-semibold text-gray-900 mb-1">{detail.heading}</h3>
              <p className="mb-2">{detail.body}</p>
              <Link href={detail.href} className="text-salesforce-blue font-medium hover:underline">
                {detail.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-amber-100 bg-amber-50/40 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Fast Decision Rules</h2>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          {decisionRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-700 mt-4">
          The biggest mistake is choosing a certification because the name sounds senior. Pick the exam that matches your current toolset and the next role you want employers to recognize.
        </p>
      </section>
      <RelatedGuides links={getRelatedGuides('marketing-cloud-certification-path')} />
    </div>
  )
}
