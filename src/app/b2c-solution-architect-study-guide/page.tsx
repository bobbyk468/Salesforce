import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `B2C Solution Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `B2C Solution Architect study guide: Commerce Cloud, Marketing Cloud, personalisation, omnichannel. $400, ~68% pass Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2c-solution-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2c-solution-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `B2C solution architect study guide, salesforce B2C architect certification 2026, commerce cloud marketing cloud exam prep, omnichannel salesforce architect`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Solution Architect Study Guide', url: '/b2c-solution-architect-study-guide' },
]

const examSections = [
  { name: 'Commerce Cloud Architecture', weight: 25, note: 'Salesforce B2C Commerce Cloud (SFCC): SFRA (Storefront Reference Architecture), cartridge model, Business Manager, product catalogue, promotions and pricing, order management, payment integrations. PDP (product detail page) and PLP (product listing page) customisation. OCAPI (Open Commerce API) for headless commerce. B2C Commerce cartridge development patterns.' },
  { name: 'Marketing Cloud Integration', weight: 25, note: 'Marketing Cloud Engagement: email journeys, Journey Builder, audience segmentation, transactional sending. Marketing Cloud Connect: syncing Salesforce CRM data to Marketing Cloud. Data Extensions and data relationships. Triggered sends from order events. Marketing Cloud Personalisation (formerly Interaction Studio) for real-time engagement. Email deliverability and consent management.' },
  { name: 'Service & Experience Cloud Integration', weight: 20, note: 'Service Cloud for B2C: case management triggered from commerce events (order issues, returns, WISMO). Live Agent and chat integration in commerce storefronts. Experience Cloud for authenticated consumer portals: self-service order tracking, returns, account management. Connected consumer identity: Salesforce Identity for B2C, single sign-on across Commerce and Service Cloud.' },
  { name: 'Personalisation & Loyalty', weight: 15, note: 'Marketing Cloud Personalisation: real-time behavioural data, Einstein-powered product recommendations, segment-based content personalisation. Loyalty Management: loyalty programme design, points and tiers, member benefits, partner redemption. Integrating loyalty with B2C Commerce: points display, redemption at checkout. Data Cloud as the unified customer profile for personalisation.' },
  { name: 'Cross-Cloud Design Patterns', weight: 15, note: 'Consumer data architecture: single customer identity across B2C Commerce, Marketing Cloud, and Service Cloud. Order event architecture: commerce → Marketing Cloud (order confirmation, shipping notification) → Service Cloud (case creation). Headless commerce patterns: SFCC OCAPI or SCAPI with a custom front-end. Multi-cloud data residency and consent management for GDPR.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2C Solution Architect certification?',
    answer: 'The B2C Solution Architect certification validates expertise in designing multi-cloud solutions for direct-to-consumer (B2C) scenarios — connecting B2C Commerce Cloud, Marketing Cloud, Service Cloud, Personalisation, and Loyalty Management into a seamless consumer experience. The exam has 60 questions, 120-minute time limit, ~68% passing score, and a $400 fee.',
  },
  {
    question: 'What is the difference between B2B and B2C Solution Architect exams?',
    answer: 'B2B Solution Architect focuses on enterprise sales: B2B Commerce, CPQ, Revenue Cloud, partner portals, and complex sales cycles. B2C Solution Architect focuses on consumer commerce: Salesforce B2C Commerce Cloud (SFCC), Marketing Cloud journeys, personalisation, loyalty, and omnichannel consumer engagement. Both exams are $400, 60 questions, and ~68% passing score — but they test completely different product ecosystems.',
  },
  {
    question: 'What is Salesforce B2C Commerce Cloud (SFCC)?',
    answer: 'Salesforce B2C Commerce Cloud (SFCC, formerly Demandware) is a SaaS e-commerce platform for consumer retail. It provides storefront hosting, product catalogue management, promotions engine, shopping cart, checkout, and order management. Developers customise it using cartridges (the SFRA architecture) built with JavaScript (Node.js-style) and ISML templates. SFCC is used by major retailers and consumer brands for online storefronts.',
  },
  {
    question: 'What is Marketing Cloud Personalisation?',
    answer: 'Marketing Cloud Personalisation (formerly Interaction Studio, formerly Evergage) is a real-time personalisation and customer data platform. It captures behavioural data as consumers browse websites and apps, builds real-time customer profiles, and delivers personalised content, product recommendations, and offers in the moment. It integrates with SFCC for on-site personalisation and Marketing Cloud Engagement for triggered email personalisation based on real-time behaviour.',
  },
  {
    question: 'What experience is needed for B2C Solution Architect?',
    answer: 'No formal prerequisites are required, but most candidates have 4–6 years of Salesforce experience with hands-on projects involving at least three of the B2C clouds tested. Recommended foundational certifications: B2C Commerce Developer, Marketing Cloud Email Specialist, Experience Cloud Consultant, and Service Cloud Consultant. The exam is entirely scenario-based and rewards candidates who have implemented real consumer commerce solutions.',
  },
]

export default function B2cSolutionArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2c-solution-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce B2C Solution Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the B2C Solution Architect exam — Commerce Cloud, Marketing Cloud, personalisation, loyalty, and omnichannel consumer experience design.
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
            { week: 'Week 1–2', focus: 'B2C Commerce Cloud fundamentals — SFRA architecture, cartridge model, Business Manager, PDP/PLP, checkout, order management. Complete the B2C Commerce Trailhead trails.' },
            { week: 'Week 3', focus: 'Marketing Cloud for B2C — Journey Builder, email sending, transactional messaging, triggered sends from order events. Marketing Cloud Connect integration with Salesforce CRM.' },
            { week: 'Week 4', focus: 'Consumer identity design — single sign-on across B2C Commerce and Service Cloud, customer registration, progressive profiling, social login patterns for consumer apps.' },
            { week: 'Week 5', focus: 'Service Cloud for B2C — case management from commerce events, order issue handling, WISMO (Where Is My Order) integration, chat and messaging in storefronts.' },
            { week: 'Week 6', focus: 'Marketing Cloud Personalisation — real-time behavioural data capture, Einstein recommendations, segment-based personalisation, integration with B2C Commerce and email.' },
            { week: 'Week 7', focus: 'Loyalty Management — loyalty programme design, points/tiers/benefits, loyalty API, integration with B2C Commerce checkout for points redemption.' },
            { week: 'Week 8', focus: 'Data Cloud for B2C — unified consumer profile, identity resolution, data streams from Commerce and Marketing Cloud, activation for personalisation.' },
            { week: 'Week 9', focus: 'Architecture scenarios — design a full B2C consumer journey across Commerce, Marketing Cloud, Service Cloud, and Personalisation for a given retail scenario.' },
            { week: 'Week 10', focus: 'Full mock exams. Commerce Cloud Architecture (25%) + Marketing Cloud Integration (25%) = 50% of the exam. Aim for 75%+ before booking.' },
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
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Map the consumer journey:</strong> Browse (SFCC) → Personalise (MC Personalisation) → Purchase (SFCC) → Confirm (Marketing Cloud email) → Support (Service Cloud) → Re-engage (Marketing Cloud journey). Every exam scenario will describe a stage in this journey.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Data Cloud for identity resolution:</strong> When a scenario involves unifying consumer data across touchpoints (web, mobile, in-store, email), the answer involves Data Cloud as the unified profile layer — not just Marketing Cloud or SFCC alone.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Personalisation vs Marketing Cloud:</strong> Marketing Cloud handles batch and journey-based email and messaging. Personalisation (Interaction Studio) handles real-time, in-session, on-site personalisation. When a scenario requires reacting to a consumer&apos;s current browse behaviour instantly, Personalisation is the answer.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>OCAPI for headless commerce:</strong> If the scenario describes a custom front-end (React, Vue, mobile app) powered by SFCC, the integration approach is OCAPI (or the newer SCAPI). The cartridge architecture applies to traditional SFRA storefronts, not headless.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. B2C Solution Architect is scenario-heavy and requires genuine multi-cloud consumer experience. Candidates who have only worked in one cloud (e.g., only Marketing Cloud) typically struggle. The more cross-cloud project experience you have, the better your exam performance.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>SFCC architecture: SFRA, cartridges, Business Manager, OCAPI vs SCAPI</li>
          <li>Marketing Cloud Journey Builder for post-purchase and re-engagement journeys</li>
          <li>Triggered sends: commerce events to Marketing Cloud transactional email</li>
          <li>Marketing Cloud Connect: Salesforce CRM to MC sync, data extensions</li>
          <li>MC Personalisation: real-time behavioural data, Einstein recommendations</li>
          <li>Loyalty Management: programme design, points, tiers, checkout integration</li>
          <li>Service Cloud for B2C: case creation from order events, chat in storefront</li>
          <li>Consumer identity: SSO across Commerce and Service Cloud, social login</li>
          <li>Data Cloud: unified consumer profile, identity resolution, activation</li>
          <li>GDPR for B2C: consent management, data residency, right to be forgotten</li>
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
          <li><Link href="/b2b-vs-b2c-solution-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ B2B vs B2C Solution Architect — which path fits your role?</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Free B2C Solution Architect practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/b2c-solution-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
