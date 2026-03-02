import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Sales Cloud vs Service Cloud Consultant (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Sales Cloud vs Service Cloud Consultant (${RELEASE_CURRENT}): exam difficulty, career impact, and which to take first. Compare both certs side by side.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sales-cloud-vs-service-cloud` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sales-cloud-vs-service-cloud`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Sales Cloud vs Service Cloud, Salesforce Sales Cloud or Service Cloud consultant, which Salesforce consultant cert first, Sales Cloud Consultant vs Service Cloud Consultant`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Sales Cloud vs Service Cloud', url: '/sales-cloud-vs-service-cloud' },
]

const faqItems = [
  {
    question: 'Which is more valuable, Sales Cloud or Service Cloud Consultant?',
    answer: 'Both are highly valued and widely recognised. Sales Cloud Consultant is slightly more common in the market because Sales Cloud implementations are extremely widespread. Service Cloud Consultant is equally respected and can command premium rates for complex omnichannel service implementations. Choose based on what cloud you are implementing in your current role.',
  },
  {
    question: 'Can you take both Sales Cloud and Service Cloud Consultant certifications?',
    answer: 'Yes — many Salesforce consultants hold both certifications. They are not mutually exclusive, and many client implementations require both. Taking both makes you a more versatile CRM consultant and increases your billable rate potential.',
  },
  {
    question: 'Which is harder, Sales Cloud or Service Cloud Consultant?',
    answer: 'Both have a 65% passing score and 60 questions in 105 minutes. Service Cloud Consultant is considered slightly harder by most candidates because the omnichannel routing, entitlement management, and service contract topics are more complex and less familiar to candidates without service operations experience.',
  },
  {
    question: 'Do I need ADM-201 before Sales Cloud or Service Cloud Consultant?',
    answer: 'ADM-201 is not a hard prerequisite for either exam, but it is strongly recommended. Both consultant exams assume platform-level knowledge of Salesforce (objects, automation, security model) that is covered in ADM-201. Most candidates who skip ADM-201 struggle with the foundational configuration scenarios.',
  },
]

export default function SalesCloudVsServiceCloudPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sales-cloud-vs-service-cloud" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Sales Cloud vs Service Cloud Consultant: Which to Take First?
        </h1>
        <p className="text-lg text-gray-600">
          Sales Cloud and Service Cloud Consultant are the two most commonly held Salesforce consultant certifications.
          Both test implementation expertise, but for different business functions. Here is how they compare
          and how to choose the right one for your career.
        </p>
      </header>

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th className="py-2.5 pr-4 font-semibold text-salesforce-blue">Sales Cloud Consultant</th>
                <th className="py-2.5 font-semibold text-emerald-700">Service Cloud Consultant</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">60 questions · 105 min</td>
                <td className="py-2.5">60 questions · 105 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">65%</td>
                <td className="py-2.5">65%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$200 (retake $100)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Opportunity management, forecasting, territories, pipeline visibility, CPQ basics</td>
                <td className="py-2.5">Case management, omnichannel routing, entitlements, knowledge base, service contracts</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Highest-Weight Sections</td>
                <td className="py-2.5 pr-4">Sales Practices (25%), Solution Design (22%)</td>
                <td className="py-2.5">Service Cloud Solution Design (22%), Case Management (15%)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Difficulty (Perceived)</td>
                <td className="py-2.5 pr-4">Moderate — territory management is the hardest section</td>
                <td className="py-2.5">Moderate-Hard — omnichannel routing and entitlements trip up many candidates</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Prerequisite Recommended</td>
                <td className="py-2.5 pr-4">ADM-201 + 2 yrs Sales Cloud experience</td>
                <td className="py-2.5">ADM-201 + 2 yrs Service Cloud experience</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Consultants implementing CRM for sales teams, revenue operations</td>
                <td className="py-2.5">Consultants implementing support operations, contact centres</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's different */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Content Differences</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-salesforce-blue mb-2">Sales Cloud — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Enterprise Territory Management vs. classic territories</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Forecasting types (collaborative, adjustable, predictive)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Lead conversion process and duplicate management</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />CPQ integration patterns (at a conceptual level)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Opportunity stages and pipeline management strategy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 mb-2">Service Cloud — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Omnichannel routing (queue-based, skills-based, external routing)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Entitlement management and service contracts</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Knowledge base management and article lifecycle</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Contact centre design (IVR integration, digital channels)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Field Service integration points with Service Cloud</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which to take first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which to Take First?</h2>
        <p className="text-sm text-gray-700 mb-3">
          The answer depends entirely on your current project experience — take the exam for the cloud you are actively implementing.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-blue mb-2">Take Sales Cloud Consultant First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Your clients are primarily in sales/revenue operations</li>
              <li>You work in B2B SaaS, financial services, or manufacturing</li>
              <li>You have configured opportunity stages and forecasting</li>
              <li>Territory management is part of your implementations</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Take Service Cloud Consultant First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Your clients operate contact centres or support operations</li>
              <li>You work in retail, telecoms, utilities, or healthcare</li>
              <li>You have configured case management and knowledge bases</li>
              <li>Omnichannel and entitlement configuration are in your experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Both</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sales Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/service-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Practice Questions
          </Link>
          <Link href="/sales-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Exam Tips
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
