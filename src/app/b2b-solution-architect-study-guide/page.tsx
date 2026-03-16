import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `B2B Solution Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `B2B Solution Architect study guide: cross-cloud B2B design, CPQ, Revenue Cloud, partner portals. $400, ~68% pass Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2b-solution-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2b-solution-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `B2B solution architect study guide, salesforce B2B architect certification 2026, cross-cloud B2B exam prep, CPQ revenue cloud architect`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2B Solution Architect Study Guide', url: '/b2b-solution-architect-study-guide' },
]

const examSections = [
  { name: 'Discovery & Architecture Vision', weight: 25, note: 'Conducting discovery workshops for B2B scenarios: identifying integration points across Sales Cloud, B2B Commerce, CPQ, Revenue Cloud, and Experience Cloud. Translating business requirements into architecture decisions. Defining the target state architecture and documenting trade-offs. Stakeholder communication and vision documentation.' },
  { name: 'B2B Commerce & CPQ Design', weight: 25, note: 'B2B Commerce Cloud (Aura and LWR storefronts): product catalogue, pricing, account hierarchy for self-service purchasing. Salesforce CPQ integration with B2B Commerce: quote creation from a commerce order. CPQ data model: product, bundle, pricebook, quote, quote line. Guided selling and product configuration in a B2B context.' },
  { name: 'Revenue & Contract Management', weight: 25, note: 'Revenue Cloud: billing schedules, invoicing, revenue recognition, evergreen vs fixed-term contracts. Quote-to-cash flow end to end: opportunity → quote → order → contract → invoice → revenue recognition. Amendment and renewal logic. Co-termination in multi-product contracts. Revenue reporting and compliance (ASC 606).' },
  { name: 'Partner & Experience Cloud', weight: 15, note: 'Partner Community design: partner roles and permissions, deal registration, lead distribution, MDF (market development funds). Experience Cloud (formerly Community Cloud) templates for B2B portals. Partner account hierarchy in Salesforce: channel account, partner user, partner account access. PRM (Partner Relationship Management) features and integrations.' },
  { name: 'Cross-Cloud Integration', weight: 10, note: 'Integration patterns connecting B2B Commerce, CPQ, Revenue Cloud, Service Cloud, and ERP systems. Data flow between clouds: order data to finance, fulfilment status to commerce. APIs: B2B Commerce APIs, CPQ REST API, Revenue Cloud APIs. Real-time vs batch integration decisions for B2B order processing volumes.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2B Solution Architect certification?',
    answer: 'The B2B Solution Architect certification validates ability to design multi-cloud solutions for B2B (business-to-business) scenarios — integrating B2B Commerce, Sales Cloud, CPQ, Revenue Cloud, and Experience Cloud for complex enterprise sales and channel partner environments. The exam has 60 questions, 120-minute time limit, ~68% passing score, and a $400 fee.',
  },
  {
    question: 'What certifications should I hold before B2B Solution Architect?',
    answer: 'No formal prerequisites are required, but Salesforce recommends: Sales Cloud Consultant, CPQ Administrator, Experience Cloud Consultant, and Revenue Cloud Consultant as foundational credentials. Most candidates attempting B2B Solution Architect have 4–6 years of Salesforce experience across multiple clouds. The exam is cross-cloud scenario-based — you need real project experience with B2B Commerce, CPQ, and Revenue Cloud.',
  },
  {
    question: 'What is the quote-to-cash process in Salesforce?',
    answer: 'Quote-to-cash is the end-to-end B2B sales process: Opportunity (qualify the deal) → Quote (CPQ configuration and pricing) → Order (convert quote to order) → Contract (generate and manage contract) → Billing (invoice the customer) → Revenue Recognition (recognise revenue per ASC 606). Salesforce&apos;s B2B Solution Architect exam tests how to design this process across CPQ, Revenue Cloud, and ERP integrations.',
  },
  {
    question: 'What is B2B Commerce Cloud?',
    answer: 'Salesforce B2B Commerce Cloud (part of Commerce Cloud) is a self-service purchasing portal for business buyers — enabling B2B customers to browse product catalogues, configure orders, get quotes, and complete purchases online without a sales rep. It integrates with CPQ for complex product configuration, Account hierarchy for multi-level buyer access, and Revenue Cloud for billing. Unlike B2C Commerce (storefront for consumers), B2B Commerce is optimised for account-based purchasing with complex pricing and approval flows.',
  },
  {
    question: 'How is B2B Solution Architect different from Sales Cloud Consultant?',
    answer: 'Sales Cloud Consultant is a single-cloud exam testing Salesforce CRM for sales teams. B2B Solution Architect is a multi-cloud exam requiring knowledge of how B2B Commerce, CPQ, Revenue Cloud, and Experience Cloud work together to support complex B2B sales processes. B2B Solution Architect is significantly harder, requires more experience, and costs $400 vs $200 for Sales Cloud Consultant.',
  },
]

export default function B2bSolutionArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2b-solution-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce B2B Solution Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the B2B Solution Architect exam — multi-cloud B2B design, CPQ, Revenue Cloud, partner portals, and quote-to-cash architecture.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '120 min' },
          { label: 'Passing Score', value: '~68%' },
          { label: 'Exam Fee', value: '$400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1–2', focus: 'B2B fundamentals — map the B2B buyer journey from awareness to purchase to renewal. Understand how each Salesforce cloud (Sales, CPQ, Revenue, B2B Commerce, Experience) fits into the process.' },
            { week: 'Week 3', focus: 'Sales Cloud for B2B — opportunity management, account hierarchy, partner account relationships, and Sales Cloud reporting for B2B scenarios.' },
            { week: 'Week 4', focus: 'CPQ deep dive — product bundles, pricing cascade, quote templates, and contract generation. Build a realistic CPQ scenario in a sandbox.' },
            { week: 'Week 5', focus: 'Revenue Cloud — billing schedules, invoice generation, revenue recognition, amendments, and evergreen vs fixed-term contracts.' },
            { week: 'Week 6', focus: 'B2B Commerce Cloud — storefront architecture, product catalogue, account-based pricing, order management, and CPQ integration for complex product configuration.' },
            { week: 'Week 7', focus: 'Experience Cloud for partners — PRM features: deal registration, lead distribution, MDF, partner roles, and account hierarchy for partner access.' },
            { week: 'Week 8', focus: 'Cross-cloud integration design — map data flows between B2B Commerce, CPQ, Revenue Cloud, and ERP. Design integration patterns for quote-to-cash.' },
            { week: 'Week 9', focus: 'Architecture scenarios — practice multi-cloud architecture diagramming. Given a B2B business requirement, design the complete Salesforce solution using the right clouds and integrations.' },
            { week: 'Week 10', focus: 'Full mock exams. The exam is entirely scenario-based. Focus on which cloud to use when and how clouds integrate. Aim for 75%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-20">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Map every requirement to a cloud:</strong> When you read a scenario, identify which cloud handles each component. Complex pricing → CPQ. Self-service purchasing → B2B Commerce. Channel partners → Experience Cloud (PRM). Billing and revenue recognition → Revenue Cloud.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Quote-to-cash flow is the backbone:</strong> Know every step: opportunity → quote (CPQ) → order → contract → invoice (Revenue Cloud) → revenue recognition. Most exam scenarios test where something falls in this flow and which cloud owns that step.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Account hierarchy drives B2B access:</strong> B2B buying involves parent accounts, subsidiaries, and individual buyers. Account hierarchy in Salesforce (parent/child Accounts) controls which contacts can access which purchasing portals and pricing tiers in B2B Commerce.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>B2B Commerce for self-service; CPQ for rep-assisted:</strong> If the scenario involves a sales rep building a complex quote with custom pricing, use CPQ. If the scenario involves a business buyer purchasing standard products online without a rep, use B2B Commerce. Both can coexist for the same company.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. B2B Solution Architect is entirely scenario-based and requires genuine multi-cloud project experience. Reading Trailhead alone is insufficient — you need to have architected and implemented solutions involving at least 3 of the B2B clouds tested.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Quote-to-cash flow: all stages, which cloud owns each stage</li>
          <li>CPQ data model: product, bundle, pricebook, quote, quote line</li>
          <li>CPQ pricing cascade: list → partner → customer → net price</li>
          <li>Revenue Cloud: billing schedules, invoice, revenue recognition, amendments</li>
          <li>B2B Commerce: product catalogue, account-based pricing, order management</li>
          <li>B2B Commerce and CPQ integration: when to use each, how they connect</li>
          <li>Experience Cloud for PRM: deal registration, lead distribution, MDF</li>
          <li>Partner account hierarchy: channel account, partner user types</li>
          <li>Account hierarchy in B2B Commerce: parent/subsidiary buyer access</li>
          <li>Cross-cloud integration patterns: ERP integration points, data sync design</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/b2b-vs-b2c-solution-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ B2B vs B2C Solution Architect — full certification comparison</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Free B2B Solution Architect practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/b2b-solution-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
