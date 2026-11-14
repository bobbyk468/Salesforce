import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { ConsultantCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Consultant Cert Path (${RELEASE_CURRENT}): Which Order?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Plan a Salesforce consultant certification path across Sales Cloud, Service Cloud, Experience Cloud, and Field Service.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/consultant-certification-path`,
    languages: { 'en-US': `${siteUrl}/consultant-certification-path`, 'x-default': `${siteUrl}/consultant-certification-path` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/consultant-certification-path`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Consultant Certification Path', url: '/consultant-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce consultant certification path?',
    answer: 'Start with Administrator (ADM-201) to build a foundation in Salesforce. Then choose a product area, such as Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, or Field Service, based on your work.',
  },
  {
    question: 'What is the first certification for the Salesforce consultant track?',
    answer: 'Administrator (ADM-201) is a recommended foundation for consultant certifications and is a required prerequisite for some of them. Most consultant exams assume you understand the platform at this level.',
  },
  {
    question: 'What is the most popular Salesforce consultant certification?',
    answer: 'Sales Cloud Consultant and Service Cloud Consultant are among the most widely held consultant credentials. These clouds are commonly implemented, and many projects need at least one certified consultant for each.',
  },
  {
    question: 'Can I take multiple consultant certifications?',
    answer: 'Yes. Many Salesforce consultants earn certifications in more than one cloud. Common combinations include Sales Cloud and Service Cloud for CRM work, or Sales Cloud and Experience Cloud for customer portal projects. Each credential adds a different area of expertise.',
  },
]

export default function ConsultantCertificationPathPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/consultant-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Roadmap · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Consultant Certification Path ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Salesforce consultant certifications show that you can implement specific Salesforce products for clients. Administrator certifications cover platform-wide skills, while consultant certifications focus on particular products. Use this guide to choose a specialization and plan the order of your exams.
        </p>
      </header>

      <ContentPageAuthor />

      <RoadmapWithDownload downloadFilename="salesforce-consultant-cert-roadmap.png">
        <ConsultantCertRoadmap />
      </RoadmapWithDownload>

      {/* Foundation */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Step 1: Build a Foundation with Administrator (ADM-201)</h2>
        <p className="text-sm text-gray-700 mb-3">
          Consultant exams assume that you understand the Salesforce platform at the ADM-201 level. Before you pursue one, make sure you know objects, fields, automation, security, and reports. Consultant exams build on these topics.
        </p>
        <Link href="/certifications/administrator" className="inline-flex items-center gap-2 text-sm text-salesforce-blue font-medium hover:underline">
          ADM-201 exam tips <ArrowRight className="h-3 w-3" />
        </Link>
      </section>

      {/* Core cloud consultants */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Step 2: Choose a Cloud Specialization</h2>
        <p className="text-sm text-gray-700 mb-4">
          Choose a Salesforce cloud that matches your current work or the area you want to enter. Many consultants focus on the products their employer implements most often.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Sales Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Covers opportunities, forecasting, territories, and CPQ basics. It is a common consultant certification.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/sales-cloud#practice-questions" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/certifications/sales-cloud" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Service Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Covers cases, entitlements, omnichannel routing, Knowledge, and service contracts.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/service-cloud#practice-questions" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/certifications/service-cloud" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Experience Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Covers customer and partner portals, license types, external-user sharing, and Experience Builder.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/nonprofit-cloud#practice-questions" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/certifications/experience-cloud" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Field Service Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Covers work orders, service territories, scheduling, and mobile workforce management.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/field-service#practice-questions" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/certifications/field-service" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Marketing Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Covers discovery, solution design, account setup, business unit strategy, and data design.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/marketing-cloud-engagement-admin#practice-questions" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/certifications/marketing-cloud-consultant" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Education Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Covers the EDA data model, student lifecycle, higher education, and FERPA.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/education-cloud-consultant#practice-questions" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/certifications/education-cloud-consultant" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional consultant certs */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Additional Consultant Specialisations</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Pardot Specialist / Pardot Consultant</strong>: These certifications cover Account Engagement marketing automation. Take Specialist before Consultant. <Link href="/certifications/pardot-specialist" className="text-salesforce-blue underline">Pardot exam tips</Link></li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Revenue Cloud Consultant</strong>: Covers CPQ, billing, and revenue recognition. CPQ knowledge helps before you take the exam.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Business Analyst</strong>: Covers discovery, user stories, and stakeholder management. Its 72% passing score is higher than standard certifications. <Link href="/certifications/business-analyst" className="text-salesforce-blue underline">BA exam tips</Link></li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Nonprofit Cloud Consultant</strong>: Covers the NPSP data model, donor management, and grant tracking for nonprofits.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Health Cloud Consultant</strong>: Covers patient and member management, care coordination, and healthcare compliance such as HIPAA.</li>
        </ul>
      </section>

      {/* Recommended pairings */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Common Consultant Certification Pairings</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-3">
            <p className="font-semibold text-salesforce-dark mb-1">Full CRM Consultant</p>
            <p className="text-gray-700">ADM-201 + Sales Cloud + Service Cloud</p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3">
            <p className="font-semibold text-emerald-700 mb-1">Marketing Specialist</p>
            <p className="text-gray-700">Email Specialist + Marketing Cloud Consultant + Pardot Specialist</p>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-3">
            <p className="font-semibold text-purple-700 mb-1">Portal Specialist</p>
            <p className="text-gray-700">ADM-201 + Sales/Service Cloud + Experience Cloud</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Prepare for a Consultant Certification</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/service-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Service Cloud Study Guide <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Exam Tips
          </Link>
          <Link href="/certifications/role/consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Consultant Certifications
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
