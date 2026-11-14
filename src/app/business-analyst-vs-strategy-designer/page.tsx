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

const pageTitle = 'Business Analyst vs Strategy Designer: Which Cert?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Business Analyst vs Strategy Designer: what each tests, roles they target, difficulty. Which to prioritise for your career.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/business-analyst-vs-strategy-designer`,
    languages: { 'en-US': `${siteUrl}/business-analyst-vs-strategy-designer`, 'x-default': `${siteUrl}/business-analyst-vs-strategy-designer` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/business-analyst-vs-strategy-designer`,
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
  { name: 'Business Analyst vs Strategy Designer', url: '/business-analyst-vs-strategy-designer' },
]

const faqItems = [
  {
    question: 'What is the difference between Salesforce Business Analyst and Strategy Designer?',
    answer: 'The Business Analyst certification covers requirements gathering, process mapping, user stories, Agile collaboration, and turning business needs into Salesforce solutions. Strategy Designer focuses on human-centred design, including stakeholder research, journey mapping, ideation, prototyping, and experience design. Business Analysts capture and communicate requirements; Strategy Designers shape the user experience and direction of an implementation.',
  },
  {
    question: 'Which should I take first: Business Analyst or Strategy Designer?',
    answer: 'Neither certification has prerequisites. Employers more often request Business Analyst for analyst and consultant roles. Strategy Designer is more specialized and may suit design-led consultancies and roles that combine product design with Salesforce delivery. Choose Business Analyst if you focus on requirements and Agile delivery. Choose Strategy Designer if you work on customer experience strategy, design workshops, or experience design.',
  },
  {
    question: 'Is the Strategy Designer exam harder than Business Analyst?',
    answer: 'Strategy Designer may feel harder because design methods can be abstract and unfamiliar to Salesforce professionals. Business Analyst covers requirements, user stories, and process flows, which may be closer to a consultant\'s daily work. Strategy Designer also requires knowledge of design research, facilitation, and design sprints.',
  },
  {
    question: 'Can you take both Business Analyst and Strategy Designer?',
    answer: 'Yes. The certifications complement each other. Together, they show skills in stakeholder engagement and requirements analysis as well as experience design and customer experience strategy. This combination may be useful on large transformation programmes where user experience matters alongside technical delivery.',
  },
]

export default function BusinessAnalystVsStrategyDesignerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/business-analyst-vs-strategy-designer" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/business-analyst', '/certifications/strategy-designer']} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Business Analyst vs Strategy Designer: Which Cert Fits Your Role?
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both certifications connect business and technology, but cover different skills. Business Analyst focuses on requirements and delivery; Strategy Designer focuses on human-centred design and experience strategy.
        </p>
      </header>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Business Analyst",
          certSlug: "business-analyst",
          examTipsSlug: "certifications/business-analyst",
          conditions: [
          "You gather requirements, write user stories, or manage stakeholders",
          "You work in a non-technical Salesforce role and want a credential to match",
          "You are transitioning from a BA or project management background",
          "You want a cert that pairs well with a functional consultant credential",
          ],
        }}
        certB={{
          name: "Strategy Designer",
          certSlug: "strategy-designer",
          examTipsSlug: "certifications/strategy-designer",
          conditions: [
          "You lead design thinking workshops or UX research sessions",
          "You translate business needs into Salesforce solutions visually",
          "You work closely with UX teams or run journey mapping exercises",
          "You want to differentiate as a consultant who can lead human-centred design",
          ],
        }}
        recommendation={{
          certName: "Business Analyst",
          certSlug: "business-analyst",
          examTipsSlug: "certifications/business-analyst",
          reason: "Business Analyst has broader employer recognition and pairs naturally with any functional consultant cert. Strategy Designer is a strong differentiator but is best taken after BA, it extends the skillset rather than replacing it.",
          
        }}
      />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">Business Analyst</th>
                <th scope="col" className="py-2.5 font-semibold text-purple-700">Strategy Designer</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Core Discipline</td>
                <td className="py-2.5 pr-4">Business analysis, requirements, Agile delivery</td>
                <td className="py-2.5">Human-centred design, CX strategy, design thinking</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Key Skills Tested</td>
                <td className="py-2.5 pr-4">User stories, process mapping, stakeholder management, UAT</td>
                <td className="py-2.5">Journey mapping, ideation, prototyping, research synthesis</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Format</td>
                <td className="py-2.5 pr-4">60 questions, 105 min, 72%, $200</td>
                <td className="py-2.5">60 questions, 105 min, 65%, $200</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Demand Level</td>
                <td className="py-2.5 pr-4">High, standard on most large Salesforce programmes</td>
                <td className="py-2.5">Growing, especially at design-led consultancies and product teams</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Business analysts, functional consultants, Agile practitioners</td>
                <td className="py-2.5">UX/CX strategists, design leads, transformation consultants</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
                <td className="py-2.5 pr-4">$75–110k (US)</td>
                <td className="py-2.5">$80–115k (US)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Certification Should You Take?</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Choose <strong>Business Analyst</strong> if you gather requirements, write user stories, run workshops, or manage UAT on Salesforce projects.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Choose <strong>Strategy Designer</strong> if you set experience strategy, run design workshops, map customer journeys, or define what a Salesforce solution should do for users.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Business Analyst has a <strong>higher passing score (72%)</strong> than most Salesforce certifications. Allow extra study time for scenario questions about requirements and stakeholder communication.</li>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Business Analyst or Strategy Designer?</h2>
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
                <td className="py-2.5 pr-4">You gather requirements, write user stories, and help plan sprints</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Business Analyst</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You design customer experiences, service blueprints, or journey maps</td>
                <td className="py-2.5 font-semibold text-purple-700">Strategy Designer</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">You work as a Salesforce BA or functional analyst on implementation projects</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">Business Analyst, directly maps to your role</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Consultant focused on transformational CX or service design outcomes</td>
                <td className="py-2.5 font-semibold text-purple-700">Strategy Designer</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Want to move from BA into UX or design thinking roles</td>
                <td className="py-2.5 font-semibold text-purple-700">Strategy Designer, bridges BA skills into design thinking</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Both; which is more in demand?</td>
                <td className="py-2.5 font-semibold text-gray-700">Business Analyst, more role-to-cert alignment in current job market</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/business-analyst#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Business Analyst Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/business-analyst" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Business Analyst Study Guide
          </Link>
          <Link href="/certifications/strategy-designer#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Strategy Designer Practice Questions
          </Link>
          <Link href="/certifications/ux-designer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            UX Designer Exam Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
      <RelatedComparisons
        links={[
          { slug: "ux-designer-vs-strategy-designer", label: "UX Designer vs Strategy Designer" },
          { slug: "salesforce-admin-vs-developer-career", label: "Admin vs Developer Career" },
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
        ]}
      />
    </div>
  )
}
