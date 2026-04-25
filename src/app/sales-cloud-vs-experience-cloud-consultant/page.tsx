import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Sales Cloud vs Experience Cloud Consultant (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Sales Cloud vs Experience Cloud Consultant: exam scope, difficulty, career paths. Which to take first. Side-by-side Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sales-cloud-vs-experience-cloud-consultant` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sales-cloud-vs-experience-cloud-consultant`,
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
  { name: 'Sales Cloud vs Experience Cloud Consultant', url: '/sales-cloud-vs-experience-cloud-consultant' },
]

const faqItems = [
  {
    question: 'Which is harder, Sales Cloud or Experience Cloud Consultant?',
    answer: 'Both have a 65% passing score and 60 questions in 105 minutes. Experience Cloud Consultant is considered harder by most candidates because digital experience design, community configuration, sharing model for external users, and Salesforce CMS are niche topics that require specific hands-on project experience. Sales Cloud Consultant has more overlap with ADM-201 content, making it more accessible to admins transitioning to consultant roles.',
  },
  {
    question: 'Who is the Experience Cloud Consultant exam designed for?',
    answer: 'Experience Cloud Consultant is designed for professionals who implement Salesforce Experience Cloud (formerly Community Cloud) portals — customer portals, partner portals, employee intranets, and digital experience sites. Typical candidates include Salesforce developers or senior admins who have built at least one Experience Cloud site with external user sharing, template configuration, and CMS content management.',
  },
  {
    question: 'Do I need ADM-201 before Sales Cloud or Experience Cloud Consultant?',
    answer: 'ADM-201 is strongly recommended but not a hard prerequisite for either exam. Both consultant exams test foundational platform knowledge (security model, data model, automation) that ADM-201 covers. Sales Cloud Consultant has more direct ADM-201 overlap. Experience Cloud Consultant additionally assumes knowledge of Salesforce sharing rules for external users, which is a more advanced topic covered briefly in ADM-201 but in depth in the Experience Cloud setup guide.',
  },
  {
    question: 'Can I hold both Sales Cloud and Experience Cloud Consultant certifications?',
    answer: 'Yes — many consultants hold both. They are complementary: Sales Cloud Consultant demonstrates expertise in CRM implementation for sales teams, while Experience Cloud Consultant demonstrates expertise in building digital engagement portals. Together they make you a highly versatile CRM consultant capable of delivering both internal and external-facing Salesforce solutions.',
  },
]

export default function SalesCloudVsExperienceCloudConsultantPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sales-cloud-vs-experience-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Sales Cloud vs Experience Cloud Consultant: Which to Take First?
        </h1>
        <p className="text-lg text-gray-600">
          Sales Cloud Consultant and Experience Cloud Consultant are both mid-level Salesforce specialist
          certifications. Sales Cloud focuses on sales process implementation and CRM optimisation.
          Experience Cloud focuses on building external-facing digital portals and communities.
          Here is how they compare and how to choose.
        </p>
      </header>

      <ContentPageAuthor />

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Sales Cloud Consultant</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Experience Cloud Consultant</th>
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
                <td className="py-2.5 pr-4">Opportunity management, forecasting, territory management, sales pipeline</td>
                <td className="py-2.5">Experience Cloud site templates, external user sharing, Salesforce CMS, branding</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Highest-Weight Sections</td>
                <td className="py-2.5 pr-4">Sales Practices (25%), Solution Design (22%)</td>
                <td className="py-2.5">Sharing, Visibility &amp; Licensing (20%), Community Setup &amp; Configuration (18%)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">ADM-201 Overlap</td>
                <td className="py-2.5 pr-4">High — direct extension of core admin knowledge</td>
                <td className="py-2.5">Moderate — sharing model for external users is the key differentiator</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Difficulty (Perceived)</td>
                <td className="py-2.5 pr-4">Moderate — territory management is the hardest section</td>
                <td className="py-2.5">Moderate-Hard — external user sharing and CMS concepts are niche</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Consultants implementing CRM for sales teams and revenue operations</td>
                <td className="py-2.5">Developers or admins building partner portals, customer communities, or intranets</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$85–120k (US)</td>
                <td className="py-2.5">$85–120k (US)</td>
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
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Enterprise Territory Management (hierarchies, assignment rules)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Forecasting types — collaborative, adjustable, predictive AI</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Lead conversion, duplicate management, and merge rules</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Pipeline management strategy and opportunity stage design</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />CPQ integration patterns and quote management concepts</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 mb-2">Experience Cloud — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Experience Cloud site templates (LWR, Aura, Microsites)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />External user profiles, licences (Customer Community, Partner Community)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Sharing model for external users — sharing sets, sharing rules, superuser access</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Salesforce CMS — content types, workspaces, and content publication</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Branding, navigation menus, and Experience Builder components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which to take first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which to Take First?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Choose based on the type of Salesforce projects you are implementing. Both are valuable,
          but they serve very different client needs.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">Take Sales Cloud Consultant First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Your clients are primarily in sales or revenue operations</li>
              <li>You implement Opportunities, Leads, and Forecasting</li>
              <li>You want an accessible first consultant cert after ADM-201</li>
              <li>Your goal is the consultant certification path</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Take Experience Cloud Consultant First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You have built at least one Experience Cloud portal</li>
              <li>Your projects involve partner portals or customer communities</li>
              <li>You work on digital experience or web portal projects</li>
              <li>External user sharing models are part of your implementations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Sales Cloud or Experience Cloud Consultant?</h2>
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
                <td className="py-2.5 pr-4">Implementing CRM for B2B sales teams — leads, opportunities, forecasting, territory management</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Sales Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Building partner portals, customer communities, or self-service sites</td>
                <td className="py-2.5 font-semibold text-purple-700">Experience Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">ADM-201 certified, targeting the Consultant track — which comes first?</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Sales Cloud — more standard entry point for Consultants</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Working on digital experience projects with branded portals and external users</td>
                <td className="py-2.5 font-semibold text-purple-700">Experience Cloud Consultant</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Both — which is more in demand?</td>
                <td className="py-2.5 font-semibold text-gray-700">Sales Cloud — higher volume of job listings; Experience Cloud is a specialist add-on</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Both</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sales Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/experience-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Experience Cloud Practice Questions
          </Link>
          <Link href="/sales-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Exam Tips
          </Link>
          <Link href="/experience-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Experience Cloud Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
