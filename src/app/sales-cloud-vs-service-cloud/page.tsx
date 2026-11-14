import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Sales Cloud vs Service Cloud Consultant (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription = `Compare Sales Cloud and Service Cloud Consultant exams by difficulty and career impact to choose your next certification.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/sales-cloud-vs-service-cloud`,
    languages: { 'en-US': `${siteUrl}/sales-cloud-vs-service-cloud`, 'x-default': `${siteUrl}/sales-cloud-vs-service-cloud` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Sales Cloud vs Service Cloud', url: '/sales-cloud-vs-service-cloud' },
]

const faqItems = [
  {
    question: 'Which is more valuable, Sales Cloud or Service Cloud Consultant?',
    answer: 'Both certifications are valued. Sales Cloud Consultant appears in more roles because many Salesforce projects use Sales Cloud. Service Cloud Consultant is also respected, especially for complex customer service projects that use several channels. Choose the certification that matches the work you do now.',
  },
  {
    question: 'Can you take both Sales Cloud and Service Cloud Consultant certifications?',
    answer: 'Yes. Consultants can earn both certifications, and some projects use both clouds. Holding both can prepare you for a wider range of client work.',
  },
  {
    question: 'Which is harder, Sales Cloud or Service Cloud Consultant?',
    answer: 'Each exam has a 65% passing score, 60 questions, and 105 minutes. Some candidates find Service Cloud Consultant harder because it covers omnichannel routing, entitlements, and service contracts. These topics may be unfamiliar if you have not worked in service operations.',
  },
  {
    question: 'Do I need ADM-201 before Sales Cloud or Service Cloud Consultant?',
    answer: 'ADM-201 is not a formal prerequisite, but it is recommended. Both exams expect you to know Salesforce objects, automation, and the security model. ADM-201 covers these platform basics.',
  },
]

export default function SalesCloudVsServiceCloudPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sales-cloud-vs-service-cloud" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/sales-cloud', '/certifications/service-cloud']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Sales Cloud vs Service Cloud Consultant: Which to Take First?
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Sales Cloud and Service Cloud Consultant are two widely held Salesforce consultant certifications.
          Both test implementation skills, but they focus on different business needs. Compare their topics
          and choose the one that fits your current work and career plans.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Sales Cloud Consultant",
          certSlug: "sales-cloud",
          examTipsSlug: "certifications/sales-cloud",
          conditions: [
          "Your clients use Salesforce for pipeline, forecasting, or customer relationship management",
          "You have a background in sales operations or CRM administration",
          "You want a consultant credential used across many Salesforce projects",
          "You work with B2B or enterprise sales teams",
          ],
        }}
        certB={{
          name: "Service Cloud Consultant",
          certSlug: "service-cloud",
          examTipsSlug: "certifications/service-cloud",
          conditions: [
          "Your clients run contact centres, field service, or customer support teams",
          "You work with cases, entitlements, Omni-Channel, or Knowledge",
          "You work in customer service focused industries such as telecom, utilities, or retail",
          "You want to add a service specialty to your consulting skills",
          ],
        }}
        recommendation={{
          certName: "Sales Cloud Consultant",
          certSlug: "sales-cloud",
          examTipsSlug: "certifications/sales-cloud",
          reason: "Sales Cloud Consultant applies to many Salesforce projects. Consider taking it first, then add Service Cloud if your clients also need customer support solutions.",
          careerPathSlug: "certification-path",
          careerPathLabel: "Salesforce Certification Path",
        }}
      />

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Sales Cloud Consultant</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Service Cloud Consultant</th>
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
                <td className="py-2.5 pr-4">Moderate, territory management is the hardest section</td>
                <td className="py-2.5">Moderate-Hard, omnichannel routing and entitlements trip up many candidates</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$85–120k (US)</td>
                <td className="py-2.5">$85–120k (US)</td>
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
            <p className="font-semibold text-salesforce-blue mb-2">Sales Cloud: Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Enterprise Territory Management vs. classic territories</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Forecasting types (collaborative, adjustable, predictive)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Lead conversion process and duplicate management</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />CPQ integration patterns (at a conceptual level)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Opportunity stages and pipeline management strategy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 mb-2">Service Cloud: Unique Topics</p>
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
          Start with the cloud you use in your current projects. Your hands-on experience will help you connect exam topics to real implementation decisions.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">Take Sales Cloud Consultant First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Your clients focus on sales or revenue operations</li>
              <li>You work in B2B software, financial services, or manufacturing</li>
              <li>You have configured opportunity stages and forecasts</li>
              <li>Your projects include territory management</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Take Service Cloud Consultant First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Your clients run contact centres or support teams</li>
              <li>You work in retail, telecom, utilities, or healthcare</li>
              <li>You have configured case management and Knowledge</li>
              <li>You have worked with Omni-Channel and entitlements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Sales Cloud or Service Cloud?</h2>
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
                <td className="py-2.5 pr-4">Working on CRM implementations for sales teams (leads, opportunities, forecasting)</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Sales Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Implementing Cases, Knowledge, Entitlements, or Contact Centers</td>
                <td className="py-2.5 font-semibold text-purple-700">Service Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Client is primarily a B2B sales-driven company</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Sales Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Client runs a support desk or omni-channel customer service operation</td>
                <td className="py-2.5 font-semibold text-purple-700">Service Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Already have ADM-201, targeting Consultant track</td>
                <td className="py-2.5 font-semibold text-gray-700">Either, choose by your project experience; Service Cloud is more in demand</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Want both to maximise consulting marketability</td>
                <td className="py-2.5 font-semibold text-gray-700">Sales Cloud first (broader base), then Service Cloud</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Both</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sales-cloud#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sales Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/service-cloud#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Practice Questions
          </Link>
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Exam Tips
          </Link>
          <Link href="/certifications/service-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Exam Tips
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "field-service-vs-service-cloud-consultant", label: "Field Service vs Service Cloud" },
          { slug: "data-cloud-vs-crm-analytics", label: "Data Cloud vs CRM Analytics" },
          { slug: "pardot-specialist-vs-pardot-consultant", label: "Pardot Specialist vs Consultant" },
        ]}
      />
    </div>
  )
}
