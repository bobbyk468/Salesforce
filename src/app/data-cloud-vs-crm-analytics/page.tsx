import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Data Cloud vs CRM Analytics Consultant: Which Cert to Take?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Data Cloud vs CRM Analytics Consultant: what each tests, career use cases. Which to prioritise. Free practice questions.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/data-cloud-vs-crm-analytics` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/data-cloud-vs-crm-analytics`,
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
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Data Cloud vs CRM Analytics', url: '/data-cloud-vs-crm-analytics' },
]

const faqItems = [
  {
    question: 'What is the difference between Data Cloud and CRM Analytics in Salesforce?',
    answer: 'Salesforce Data Cloud (formerly Customer Data Platform) is a real-time data platform that unifies customer data from multiple sources into a single customer profile — focusing on data ingestion, identity resolution, segmentation, and activation. CRM Analytics (formerly Einstein Analytics / Tableau CRM) is a business intelligence and analytics platform for building dashboards, reports, and AI predictions on Salesforce data. Data Cloud is about unified data; CRM Analytics is about analysing and visualising it.',
  },
  {
    question: 'Which is more valuable: Data Cloud Consultant or CRM Analytics Consultant?',
    answer: 'Data Cloud Consultant is higher demand in 2026 due to the strategic focus on AI and unified customer data. Data Cloud underpins Agentforce, Einstein AI, and Marketing Cloud Personalisation — making it central to enterprise Salesforce strategy. CRM Analytics Consultant is valuable for analytics-heavy roles and industries with strong BI requirements. If you work on enterprise data strategy or AI activation, prioritise Data Cloud.',
  },
  {
    question: 'Do Data Cloud and CRM Analytics overlap?',
    answer: 'There is some conceptual overlap — both involve data, and Data Cloud data can be used to fuel CRM Analytics dashboards. However, the exam content is very different. Data Cloud Consultant focuses on data streams, identity resolution, segmentation, calculated insights, and data model unification. CRM Analytics Consultant focuses on datasets, recipes, dashboards, lenses, SAQL queries, and Einstein Discovery predictions.',
  },
  {
    question: 'Is Data Cloud Consultant harder than CRM Analytics Consultant?',
    answer: 'Both exams are comparable in difficulty (60 questions, 105 min, 65%, $200). Data Cloud is often considered more conceptually challenging because the technology is newer and the data architecture concepts (identity resolution, streaming ingestion, calculated insights) are less familiar to most consultants. CRM Analytics is harder in terms of technical tooling depth — SAQL queries and recipe-level data transformations require hands-on platform experience.',
  },
]

export default function DataCloudVsCrmAnalyticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/data-cloud-vs-crm-analytics" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Data Cloud Consultant vs CRM Analytics Consultant: Which to Take?
        </h1>
        <p className="text-lg text-gray-600">
          Both certifications involve data — but they serve very different purposes. Data Cloud unifies customer data
          for AI and activation. CRM Analytics builds BI dashboards and predictions. Here&apos;s how to choose.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Data Cloud Consultant",
          certSlug: "data-cloud-consultant",
          examTipsSlug: "data-cloud-consultant-exam-tips",
          conditions: [
          "Your clients are unifying customer data across channels",
          "You work with Salesforce CDP, Data Cloud, or real-time data activation",
          "You want the fastest-growing and most in-demand cert of 2026",
          "You are comfortable with data pipelines and identity resolution concepts",
          ],
        }}
        certB={{
          name: "CRM Analytics Consultant",
          certSlug: "crm-analytics-einstein-discovery-consultant",
          examTipsSlug: "crm-analytics-exam-tips",
          conditions: [
          "You build dashboards, SAQL queries, and Einstein Discovery models",
          "Your work is analytics and reporting within Salesforce CRM",
          "You work with Tableau CRM or Einstein Analytics regularly",
          "You are in a BI or data analyst role inside a Salesforce org",
          ],
        }}
        recommendation={{
          certName: "Data Cloud Consultant",
          certSlug: "data-cloud-consultant",
          examTipsSlug: "data-cloud-consultant-exam-tips",
          reason: "Data Cloud Consultant is the higher-growth investment — demand is accelerating and certified talent is genuinely scarce. CRM Analytics is a strong credential for analytics-focused roles, but Data Cloud commands a higher salary premium and broader client demand in 2026.",
          
        }}
      />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Data Cloud Consultant</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">CRM Analytics Consultant</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Core Purpose</td>
                <td className="py-2.5 pr-4">Unified customer profile, data activation, AI input</td>
                <td className="py-2.5">BI dashboards, data recipes, Einstein predictions</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Key Tools</td>
                <td className="py-2.5 pr-4">Data streams, identity resolution, segmentation, calculated insights</td>
                <td className="py-2.5">Datasets, recipes, lenses, dashboards, SAQL, Einstein Discovery</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Format</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 65%, $200</td>
                <td className="py-2.5">60 questions, 105 min, 65%, $200</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Market Demand (2026)</td>
                <td className="py-2.5 pr-4">High — central to Agentforce and AI strategy</td>
                <td className="py-2.5">Moderate — established, BI-specific roles</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Data architects, Marketing Cloud strategists, AI implementation roles</td>
                <td className="py-2.5">BI consultants, analytics leads, reporting-heavy industries</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$95–130k (US)</td>
                <td className="py-2.5">$100–140k (US)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Should You Take?</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take <strong>Data Cloud Consultant</strong> if your work involves customer data unification, Marketing Cloud, AI/Agentforce implementations, or enterprise data strategy.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take <strong>CRM Analytics Consultant</strong> if your work involves building dashboards, operationalising BI for sales teams, or using Einstein Discovery for embedded predictions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />If you are unsure, <strong>Data Cloud</strong> has higher strategic value in 2026 as it underpins Agentforce, real-time personalisation, and enterprise AI — demand is growing faster than CRM Analytics roles.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Data Cloud or CRM Analytics?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4">Unifying customer data from multiple sources, identity resolution, and building segments</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Data Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Building dashboards, KPI metrics, and embedded analytics in Salesforce</td>
                <td className="py-2.5 font-semibold text-purple-700">CRM Analytics (Einstein Analytics) Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Working with real-time data activation and audience-based personalisation</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Data Cloud — CDP/real-time activation is its core strength</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Visualising Salesforce data for sales, service, or ops reporting</td>
                <td className="py-2.5 font-semibold text-purple-700">CRM Analytics</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">High demand project skill to develop in 2025+</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Data Cloud — fastest-growing Salesforce product area</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/data-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Data Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/crm-analytics-einstein-discovery-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CRM Analytics Practice Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Cert Paths {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
          { slug: "field-service-vs-service-cloud-consultant", label: "Field Service vs Service Cloud" },
          { slug: "agentforce-specialist-vs-ai-associate", label: "Agentforce Specialist vs AI Associate" },
        ]}
      />
    </div>
  )
}
