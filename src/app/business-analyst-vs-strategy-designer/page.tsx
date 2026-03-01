import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = 'Business Analyst vs Strategy Designer: Which Cert?'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Compare Salesforce Business Analyst and Strategy Designer certifications: what each tests, the types of roles they target, difficulty, and which to prioritise for your career.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/business-analyst-vs-strategy-designer` },
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
  keywords:
    'Salesforce Business Analyst vs Strategy Designer, which certification business analyst, strategy designer cert comparison, Salesforce BA cert',
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Business Analyst vs Strategy Designer', url: '/business-analyst-vs-strategy-designer' },
]

const faqItems = [
  {
    question: 'What is the difference between Salesforce Business Analyst and Strategy Designer?',
    answer: 'The Salesforce Business Analyst certification focuses on requirements gathering, process mapping, user story writing, Agile collaboration, and translating business needs into Salesforce solutions. The Strategy Designer certification focuses on human-centred design thinking: stakeholder research, journey mapping, ideation, prototyping, and designing experiences that create business value. BA is about capturing and communicating requirements; Strategy Designer is about designing the user experience and strategic direction of a Salesforce implementation.',
  },
  {
    question: 'Which should I take first: Business Analyst or Strategy Designer?',
    answer: 'Both are standalone certifications with no prerequisites, but Business Analyst is more widely requested by employers for typical consultant and BA roles. Strategy Designer is a more specialised credential — it is highly valued at design-led consultancies and for roles that blend product design with Salesforce delivery. If you work primarily on requirement gathering and Agile delivery, take Business Analyst first. If your role involves CX strategy, design thinking workshops, and experience design, Strategy Designer is the right credential.',
  },
  {
    question: 'Is the Strategy Designer exam harder than Business Analyst?',
    answer: 'Strategy Designer is generally considered harder due to its focus on design methodology — a topic area that is more abstract and less familiar to typical Salesforce professionals. Business Analyst tests more familiar territory (requirements gathering, user stories, process flows) and aligns closely with what most consultants already do in practice. Strategy Designer requires understanding of design research methods, facilitation techniques, and design sprint frameworks that many candidates need to study from scratch.',
  },
  {
    question: 'Can you take both Business Analyst and Strategy Designer?',
    answer: 'Yes — both certifications are complementary and often pursued together. A professional who holds both credentials demonstrates a full spectrum of skills: from stakeholder engagement and requirements analysis (BA) through to experience design and CX strategy (Strategy Designer). This combination is increasingly valued on large transformation programmes where user experience is as important as technical delivery.',
  },
]

export default function BusinessAnalystVsStrategyDesignerPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/business-analyst-vs-strategy-designer', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/business-analyst-vs-strategy-designer' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Business Analyst vs Strategy Designer: Which Cert Fits Your Role?
        </h1>
        <p className="text-lg text-gray-600">
          Both certifications sit between business and technology, but they test fundamentally different skills.
          Business Analyst is about requirements and delivery; Strategy Designer is about human-centred design and experience strategy.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th className="py-2.5 pr-4 font-semibold text-salesforce-blue">Business Analyst</th>
                <th className="py-2.5 font-semibold text-purple-700">Strategy Designer</th>
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
                <td className="py-2.5 pr-4">High — standard on most large Salesforce programmes</td>
                <td className="py-2.5">Growing — especially at design-led consultancies and product teams</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Business analysts, functional consultants, Agile practitioners</td>
                <td className="py-2.5">UX/CX strategists, design leads, transformation consultants</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Certification Should You Take?</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take <strong>Business Analyst</strong> if you spend most of your time gathering requirements, writing user stories, facilitating workshops to elicit business needs, or managing UAT on Salesforce projects.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take <strong>Strategy Designer</strong> if your work involves defining the experience strategy, running design thinking workshops, creating journey maps, or shaping what a Salesforce solution should achieve for end users.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Note: Business Analyst has a <strong>higher passing score (72%)</strong> than most Salesforce certs — budget extra study time for scenario-based questions on requirements management and stakeholder communication.</li>
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

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Preparing</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/business-analyst" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Business Analyst Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/strategy-designer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Strategy Designer Practice Questions
          </Link>
          <Link href="/ux-designer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            UX Designer Exam Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
    </div>
  )
}
