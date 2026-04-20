import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Data Cloud vs Marketing Cloud (${RELEASE_CURRENT}) | Which Cert?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Data Cloud vs Marketing Cloud certs: what each does, how they compare, which path to choose for your role Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/data-cloud-vs-marketing-cloud` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/data-cloud-vs-marketing-cloud`,
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
  { name: 'Data Cloud vs Marketing Cloud', url: '/data-cloud-vs-marketing-cloud' },
]

const faqItems = [
  {
    question: 'What is the difference between Salesforce Data Cloud and Marketing Cloud?',
    answer: 'Data Cloud is Salesforce&apos;s customer data platform (CDP) — it unifies customer data from multiple sources (CRM, web, mobile, data warehouses) into a single customer profile with identity resolution and real-time data streaming. Marketing Cloud (Marketing Cloud Engagement / SFMC) is an email and digital marketing execution platform for sending campaigns, journeys, and automated messaging. Data Cloud feeds unified audience segments INTO Marketing Cloud for activation; Marketing Cloud is the channel for execution.',
  },
  {
    question: 'Are Data Cloud and Marketing Cloud certifications related?',
    answer: 'They are related but distinct. The Data Cloud Consultant certification covers data ingestion, identity resolution, calculated insights, data lake objects, and activation to channels like Marketing Cloud. Marketing Cloud certifications (Admin, Developer, Email Specialist, Marketing Consultant) cover campaign execution, email studio, automation studio, and AMPscript. A professional implementing a Data Cloud + Marketing Cloud stack ideally holds both certifications.',
  },
  {
    question: 'Is Data Cloud Consultant harder than Marketing Cloud certifications?',
    answer: 'Data Cloud Consultant is considered harder than most Marketing Cloud certifications because it tests a more complex technical domain — data modelling, identity resolution, data streams, calculated insights with SQL, and activation configuration. Marketing Cloud certifications range from moderate (Admin, Email Specialist) to hard (Developer, requiring AMPscript and SSJS proficiency). Data Cloud Consultant has a 62% passing score, which is lower than most exams, reflecting its difficulty.',
  },
  {
    question: 'Which should I pursue first: Data Cloud or Marketing Cloud?',
    answer: 'Take Marketing Cloud certifications first if you work in campaign execution, email marketing operations, or Marketing Cloud administration. Take Data Cloud Consultant first if you implement CDP solutions, data architecture, or work on customer data unification projects. Many organisations are now implementing Data Cloud as the data foundation for Marketing Cloud activation — in that context, Data Cloud expertise is the higher-value and more strategically important credential.',
  },
]

export default function DataCloudVsMarketingCloudPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/data-cloud-vs-marketing-cloud" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Data Cloud vs Marketing Cloud: Which Certification to Pursue?
        </h1>
        <p className="text-lg text-gray-600">
          Data Cloud and Marketing Cloud are frequently confused because they both deal with customer data
          and marketing. But they serve very different purposes — Data Cloud is the data unification layer;
          Marketing Cloud is the campaign execution layer. Here is how their certifications compare
          and how to choose the right path for your career.
        </p>
      </header>

      <ContentPageAuthor />

      {/* Platform difference first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Platform Difference: What Each Tool Does</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="font-semibold text-salesforce-dark mb-2">Salesforce Data Cloud</p>
            <p className="text-gray-700 mb-2">A customer data platform (CDP) that ingests data from multiple sources, resolves customer identities across touchpoints, and creates unified customer profiles for real-time activation.</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Data ingestion from CRM, web, mobile, data warehouses</li>
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Identity resolution and unified customer profiles</li>
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Calculated insights with SQL for audience intelligence</li>
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Activation to Marketing Cloud, Advertising, and other channels</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="font-semibold text-emerald-700 mb-2">Marketing Cloud (SFMC)</p>
            <p className="text-gray-700 mb-2">A multi-channel marketing automation platform for executing email campaigns, SMS, push notifications, journeys, and personalised digital experiences.</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Email Studio for campaign creation and sending</li>
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Journey Builder for multi-step lifecycle automation</li>
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Automation Studio for data processing workflows</li>
              <li className="flex gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />AMPscript and SSJS for dynamic content personalisation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Side-by-side cert table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Certification Comparison: Data Cloud vs Marketing Cloud</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Data Cloud Consultant</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Marketing Cloud (Admin / Developer)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">60 questions · 105 min</td>
                <td className="py-2.5">60 questions · 90-105 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">62%</td>
                <td className="py-2.5">65-67%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$200 (retake $100)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Technical Depth</td>
                <td className="py-2.5 pr-4">High — data modelling, SQL, identity resolution</td>
                <td className="py-2.5">Admin: Moderate · Developer: High (AMPscript, SSJS, API)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Core Skills</td>
                <td className="py-2.5 pr-4">Data ingestion, identity resolution, calculated insights, activation</td>
                <td className="py-2.5">Email sends, automation, data extensions, AMPscript/SSJS (Developer)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Data architects, CDP consultants, marketing ops engineers</td>
                <td className="py-2.5">Marketing ops teams, email marketers, campaign managers</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$95–130k (US)</td>
                <td className="py-2.5">$80–115k (US)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Market Demand 2026</td>
                <td className="py-2.5 pr-4">Very High — enterprise CDP adoption accelerating</td>
                <td className="py-2.5">High — SFMC remains the dominant marketing automation platform</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Which to take first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Certification Path to Choose?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Your choice should follow your current project work. The two platforms complement each other —
          Data Cloud feeds segments to Marketing Cloud for activation — but the certifications target
          different specialisations.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">Pursue Data Cloud Consultant If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You implement CDP or data unification solutions</li>
              <li>You work on data architecture or marketing data pipelines</li>
              <li>Your clients want unified customer profiles across systems</li>
              <li>You have SQL proficiency and data modelling experience</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Pursue Marketing Cloud Certifications If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You manage or configure Marketing Cloud campaigns</li>
              <li>Your role is in email marketing or marketing operations</li>
              <li>You write AMPscript or build automation workflows</li>
              <li>You administer SFMC accounts and data extensions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Data Cloud or Marketing Cloud?</h2>
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
                <td className="py-2.5 pr-4">Unifying first-party customer data, identity resolution, and real-time segmentation</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Data Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Running B2C email campaigns, Journey Builder automations, or push notifications</td>
                <td className="py-2.5 font-semibold text-purple-700">Marketing Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Client needs a CDP to centralise data from web, app, CRM, and offline sources</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Data Cloud — designed for cross-channel data unification</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Client needs to send personalised marketing communications at scale</td>
                <td className="py-2.5 font-semibold text-purple-700">Marketing Cloud — campaign execution is its primary function</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Fastest-growing Salesforce skill to develop in 2025+</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Data Cloud — enormous demand, limited supply of certified professionals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Your Path</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/data-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Data Cloud Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/marketing-cloud-engagement-admin" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Admin Practice Questions
          </Link>
          <Link href="/data-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Data Cloud Exam Tips
          </Link>
          <Link href="/marketing-cloud-engagement-admin-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Admin Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
