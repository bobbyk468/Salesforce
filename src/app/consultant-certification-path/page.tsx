import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { ConsultantCertRoadmap } from '@/components/CertRoadmapSvg'
import RoadmapWithDownload from '@/components/RoadmapWithDownload'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Consultant Certification Path (${RELEASE_CURRENT}): Which Order?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce consultant certification path (${RELEASE_CURRENT}): right order for Sales Cloud, Service Cloud, Experience Cloud, Field Service. Start free practice now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/consultant-certification-path` },
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
  keywords:
    `Salesforce consultant certification path ${RELEASE_CURRENT}, how to become Salesforce consultant, Sales Cloud consultant path, Service Cloud consultant path, Salesforce consultant career`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Consultant Certification Path', url: '/consultant-certification-path' },
]

const faqItems = [
  {
    question: 'What is the Salesforce consultant certification path?',
    answer: 'The Salesforce consultant path starts with the Administrator (ADM-201) certification as the foundation. From there, you specialise in a cloud product: Sales Cloud Consultant, Service Cloud Consultant, Marketing Cloud Consultant, Experience Cloud Consultant, or Field Service Consultant depending on your area of practice.',
  },
  {
    question: 'What is the first certification for the Salesforce consultant track?',
    answer: 'Salesforce Administrator (ADM-201) is the required foundation for all consultant certifications. It is a recommended (and for some certifications, required) prerequisite. Most consultant exams assume ADM-201-level platform knowledge as a baseline.',
  },
  {
    question: 'What is the most popular Salesforce consultant certification?',
    answer: 'Sales Cloud Consultant and Service Cloud Consultant are the most widely held consultant certifications, as Sales Cloud and Service Cloud are Salesforce\'s two most commonly implemented products. Most implementations require at least one certified consultant for each cloud.',
  },
  {
    question: 'Can I take multiple consultant certifications?',
    answer: 'Yes — many Salesforce consultants hold multiple cloud certifications. Common pairings are Sales Cloud + Service Cloud (for full CRM consultants), or Sales Cloud + Experience Cloud (for customer portal implementations). Each certification adds a distinct specialisation and increases your value to clients.',
  },
]

export default function ConsultantCertificationPathPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/consultant-certification-path" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Roadmap · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Consultant Certification Path ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce consultant certifications validate your ability to implement specific Salesforce products for clients.
          Unlike administrator certifications (which are platform-wide), consultant certifications are product-specific.
          Here is how to choose your specialisation and the right order to earn them.
        </p>
      </header>

      <ContentPageAuthor />

      <RoadmapWithDownload downloadFilename="salesforce-consultant-cert-roadmap.png">
        <ConsultantCertRoadmap />
      </RoadmapWithDownload>

      {/* Foundation */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Step 1: Foundation — Salesforce Administrator (ADM-201)</h2>
        <p className="text-sm text-gray-700 mb-3">
          All consultant certifications assume ADM-201-level knowledge of the Salesforce platform. Before pursuing any
          consultant certification, ensure you are comfortable with objects, fields, automation, security model, and
          reports — the topics the consultant exams build on.
        </p>
        <Link href="/adm-201-exam-tips-2026" className="inline-flex items-center gap-2 text-sm text-salesforce-blue font-medium hover:underline">
          ADM-201 exam tips <ArrowRight className="h-3 w-3" />
        </Link>
      </section>

      {/* Core cloud consultants */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Step 2: Choose Your Cloud Specialisation</h2>
        <p className="text-sm text-gray-700 mb-4">
          Pick the Salesforce cloud that matches your current or target practice. Most consultants specialise in the
          clouds their employer implements most often.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Sales Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Opportunity management, forecasting, territory management, CPQ basics. Most common consultant cert.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/sales-cloud" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/sales-cloud-exam-tips" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Service Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Cases, entitlements, omnichannel routing, knowledge base, service contracts.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/service-cloud" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/service-cloud-consultant-exam-tips" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Experience Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Customer/partner portals, licence types, sharing model for external users, Experience Builder.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/nonprofit-cloud" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/experience-cloud-exam-tips" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Field Service Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Work orders, service territories, scheduling optimisation, mobile workforce management.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/field-service" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/field-service-exam-tips" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Marketing Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">Discovery and architecture, account configuration, business unit strategy, data design.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/marketing-cloud-engagement-admin" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/marketing-cloud-consultant-exam-tips" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="font-semibold text-gray-900 mb-1">Education Cloud Consultant</p>
            <p className="text-sm text-gray-600 mb-2">EDA data model, student lifecycle, higher education industry knowledge, FERPA.</p>
            <div className="flex gap-2 flex-wrap">
              <Link href="/certifications/education-cloud-consultant" className="text-xs text-salesforce-blue hover:underline">Practice questions</Link>
              <span className="text-gray-300">·</span>
              <Link href="/education-cloud-consultant-exam-tips" className="text-xs text-salesforce-blue hover:underline">Exam tips</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional consultant certs */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Additional Consultant Specialisations</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Pardot Specialist / Pardot Consultant</strong> — Marketing automation with Account Engagement. Specialist before Consultant. <Link href="/pardot-specialist-exam-tips" className="text-salesforce-blue underline">Pardot exam tips</Link></li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Revenue Cloud Consultant</strong> — CPQ, billing, revenue recognition. Requires CPQ knowledge before attempting.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Business Analyst</strong> — Discovery, user stories, stakeholder management. 72% passing score — higher than standard certs. <Link href="/business-analyst-exam-tips" className="text-salesforce-blue underline">BA exam tips</Link></li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Nonprofit Cloud Consultant</strong> — NPSP data model, donor management, grant tracking for nonprofit organisations.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Health Cloud Consultant</strong> — Patient/member management, care coordination, healthcare compliance (HIPAA).</li>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/service-cloud-study-guide" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Service Cloud Study Guide <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/sales-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
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
