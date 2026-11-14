import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Marketing Cloud Certification Path (${RELEASE_CURRENT})`
const pageDescription = 'Plan a Marketing Cloud certification path across Email Specialist, Consultant, Pardot, Administrator, and Developer credentials.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/marketing-cloud-certification-path`,
    languages: { 'en-US': `${siteUrl}/marketing-cloud-certification-path`, 'x-default': `${siteUrl}/marketing-cloud-certification-path` },
  },
  openGraph: { title: pageTitle, description: pageDescription, type: 'article', url: `${siteUrl}/marketing-cloud-certification-path`, images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }] },
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
  { name: 'Marketing Cloud Certification Path', url: '/marketing-cloud-certification-path' },
]

const faqItems = [
  { question: 'Which Salesforce Marketing Cloud certification should I take first?', answer: 'For Marketing Cloud Engagement, start with Email Specialist. For Account Engagement, start with Pardot Specialist. If you want to work in implementation consulting, consider Marketing Cloud Consultant after gaining hands-on experience.' },
  { question: 'Do I need coding for Marketing Cloud certification?', answer: 'Email Specialist does not require much coding, but AMPscript and data extension knowledge can help. Marketing Cloud Developer requires stronger technical skills, including APIs, scripting, and custom integrations.' },
  { question: 'Is Marketing Cloud Consultant harder than Email Specialist?', answer: 'Yes. Marketing Cloud Consultant uses more scenarios and tests solution design, implementation decisions, data architecture, and governance.' },
]

const paths = [
  { label: 'Email marketing operator', steps: ['Email Specialist', 'Marketing Cloud Engagement Admin', 'Marketing Cloud Consultant'], href: '/certifications/email-specialist' },
  { label: 'Pardot / Account Engagement', steps: ['Pardot Specialist', 'Pardot Consultant', 'Business Analyst'], href: '/pardot-certification' },
  { label: 'Technical SFMC developer', steps: ['Email Specialist', 'Marketing Cloud Developer', 'Marketing Cloud Consultant'], href: '/marketing-cloud-admin-vs-developer' },
]

const pathDetails = [
  {
    heading: 'If you work in Email Studio and Journey Builder',
    body: 'Start with Email Specialist to learn about subscriber data, send classifications, deliverability, content, AMPscript basics, and reports. Next, consider Marketing Cloud Engagement Admin if you manage setup, users, business units, data extensions, or platform configuration.',
    href: '/certifications/email-specialist',
    cta: 'Study Email Specialist',
  },
  {
    heading: 'If you work in Account Engagement / Pardot',
    body: 'Start with Pardot Specialist if you work with B2B marketing automation. It covers forms, automation rules, Engagement Studio programs, scoring, grading, and Salesforce connector workflows. Consider Pardot Consultant when you are ready to design full implementations.',
    href: '/pardot-certification',
    cta: 'Compare Pardot certs',
  },
  {
    heading: 'If you implement Marketing Cloud technically',
    body: 'A technical path can combine Email Specialist fundamentals with Marketing Cloud Developer topics such as APIs, data extensions, scripting, triggered sends, and integrations. This path is more advanced and may suit developers and technical consultants.',
    href: '/marketing-cloud-admin-vs-developer',
    cta: 'Compare admin vs developer',
  },
]

const decisionRules = [
  'Start with Email Specialist if your daily work involves campaigns, segmentation, deliverability, and Journey Builder.',
  'Start with Pardot Specialist if you use Account Engagement for B2B marketing instead of Marketing Cloud Engagement.',
  'Consider Marketing Cloud Consultant after you have hands-on implementation experience. The exam tests more than memorized facts.',
  'Choose Marketing Cloud Developer if you are comfortable with APIs, scripting, custom integrations, and technical troubleshooting.',
]

export default function MarketingCloudCertificationPathPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <header data-lcp-header className="mb-10">
        <p className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">Marketing Cloud Path</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Marketing Cloud Certification Path</h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">Choose a Marketing Cloud path based on whether you work in Email Studio or Journey Builder, Account Engagement, or technical Marketing Cloud implementation.</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Choose Your First Marketing Cloud Certification</h2>
        <p className="text-sm text-gray-700">If you use Marketing Cloud Engagement, start with <Link href="/certifications/email-specialist" className="text-salesforce-blue hover:underline">Email Specialist</Link>. If you use Account Engagement or Pardot, start with <Link href="/certifications/pardot-specialist" className="text-salesforce-blue hover:underline">Pardot Specialist</Link>.</p>
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
          Choose a certification based on the tools you use and the role you want next, not only on how senior its title sounds.
        </p>
      </section>
      <RelatedGuides links={getRelatedGuides('marketing-cloud-certification-path')} />
    </div>
  )
}
