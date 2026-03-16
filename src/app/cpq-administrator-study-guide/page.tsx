import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `CPQ Administrator Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Salesforce CPQ Administrator study guide (${RELEASE_CURRENT}): 5 exam sections, 8-week plan, pricing cascade tips, and free practice questions. $200 fee, 60 questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/cpq-administrator-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/cpq-administrator-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce CPQ administrator study guide, CPQ certification 2026, salesforce CPQ exam prep, configure price quote certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CPQ Administrator Study Guide', url: '/cpq-administrator-study-guide' },
]

const examSections = [
  { name: 'Products & Pricebooks', weight: 30, note: 'Product object, product options, product features, product rules (validation, selection, alert, filter). Understanding the CPQ product hierarchy: bundle → feature → option. Pricebook and pricebook entry configuration.' },
  { name: 'Bundles & Configuration', weight: 23, note: 'Configurable bundles, guided selling, configuration attributes, dynamic options. Product rules to control which options are selected or excluded together. Configuration summary and line editor.' },
  { name: 'Pricing & Discounting', weight: 20, note: 'Pricing cascade (list → partner → customer price). Block pricing, volume discounts, discount schedules, contracted pricing. Price rules and price actions. Subscription pricing, co-termed amendments, and renewal pricing.' },
  { name: 'Quote Templates & Output', weight: 13, note: 'Building quote templates in the template editor, dynamic content sections, conditional rendering. Line item grouping, sorting, and column configuration. Generating PDFs and email templates.' },
  { name: 'Orders & Contracting', weight: 14, note: 'Converting quotes to orders, contract creation, amendment, and renewal flows. Subscription management, co-termination logic, and product consumption schedules.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce CPQ Administrator certification?',
    answer: 'The Salesforce CPQ Administrator certification validates skills in configuring Salesforce CPQ (Configure, Price, Quote) — including product setup, bundle configuration, pricing rules, discount schedules, quote templates, and contract management. The exam has 60 questions, a 105-minute time limit, ~65% passing score, and a $200 fee. ADM-201 is a recommended prerequisite.',
  },
  {
    question: 'Is ADM-201 required before the CPQ Administrator exam?',
    answer: 'ADM-201 is not a formal prerequisite, but it is strongly recommended. CPQ Administrator tests Salesforce-specific configuration knowledge including custom objects, flows, and the quote-to-order process. Candidates without ADM-201 foundation often struggle with the contracting and pricing sections. Many candidates also hold Sales Cloud Consultant before CPQ Admin.',
  },
  {
    question: 'How long should I study for the CPQ Administrator exam?',
    answer: 'Plan for 8–10 weeks with 10–12 hours per week. Hands-on experience in a CPQ sandbox is essential — the exam tests practical configuration scenarios, not just theoretical knowledge. Setting up real product bundles, pricing rules, and discount schedules in a developer org is the most effective preparation.',
  },
  {
    question: 'What is the hardest part of the CPQ Administrator exam?',
    answer: 'Products & Pricebooks (30%) and Pricing & Discounting (20%) are the most heavily weighted and typically the hardest. The pricing cascade (list price → partner price → customer price → special price → net price) and the interaction between price rules, discount schedules, and contracted pricing trips up many candidates.',
  },
  {
    question: 'What is a CPQ product bundle?',
    answer: 'A CPQ product bundle is a parent product (the bundle) that contains child products (options) organised into groups called features. Features can be configured as required or optional, with minimum and maximum selection rules. Product rules control which options appear or are auto-selected based on other selections. Guided selling uses a wizard to prompt reps to choose options.',
  },
]

export default function CpqAdministratorStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/cpq-administrator-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce CPQ Administrator Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Salesforce CPQ Administrator exam — product hierarchies, pricing cascade, quote templates, and contract management.
        </p>
      </div>

      <ContentPageAuthor />

      {/* Exam At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Sections */}
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

      {/* What Each Section Tests */}
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

      {/* 8-Week Study Plan */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'CPQ foundations — install CPQ in a dev org, navigate the CPQ package, understand the quote-to-order process flow end to end.' },
            { week: 'Week 2', focus: 'Products & Pricebooks — create standard products, configure product options and features, set up product rules (validation, selection, alert, filter).' },
            { week: 'Week 3', focus: 'Bundles & Configuration — build a configurable bundle with guided selling, configure dynamic options, test configuration attribute interactions.' },
            { week: 'Week 4', focus: 'Pricing — implement block pricing, volume discount schedules, contracted pricing, and subscription pricing. Trace the full pricing cascade on a quote line.' },
            { week: 'Week 5', focus: 'Price Rules — configure price rules with conditions and price actions. Test price rule interactions with discount schedules and contracted pricing.' },
            { week: 'Week 6', focus: 'Quote Templates — build a quote template with dynamic sections, conditional content, and custom columns. Generate a PDF and configure an email template.' },
            { week: 'Week 7', focus: 'Orders, Contracts & Renewals — convert a quote to an order, activate it, generate a contract, process an amendment, and configure renewal settings.' },
            { week: 'Week 8', focus: 'Full mock exams. Focus on pricing cascade questions and product rule scenario questions — these are the most frequently tested and most commonly missed.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Tips */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Memorise the pricing cascade:</strong> List Price → Partner Discount → Partner Price → Additional Discount → Customer Price → Additional Discount → Net Price. Knowing each step&apos;s name and what affects it is tested directly.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Know the four product rule types:</strong> Validation (enforces rules on save), Selection (auto-selects/deselects options), Alert (warns the user), Filter (hides options). Exam scenarios describe a business requirement and ask which rule type to use.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Subscription pricing renewal logic:</strong> Understand co-termination (aligning subscription end dates), proration, and how renewal pricing is inherited from the contracted price vs list price.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Bundle hierarchy:</strong> Product (bundle) → Features (groups) → Options (child products). Features have Min/Max selection settings. Options have Required and Optional flags. Build one in your sandbox before the exam.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. CPQ has many interconnected concepts — if you can correctly configure a bundle with pricing rules and a contract renewal in your sandbox, you are ready for the exam. Products &amp; Pricebooks (30%) alone is nearly a third of the exam, so master it first.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>CPQ product hierarchy: bundle → feature → option and their relationships</li>
          <li>Four product rule types (Validation, Selection, Alert, Filter) and when to use each</li>
          <li>Pricing cascade: all steps from list price to net price</li>
          <li>Block pricing vs volume discount schedules vs contracted pricing</li>
          <li>Subscription pricing, co-termination, and renewal pricing logic</li>
          <li>Price rules: conditions, price actions, and scope (Quote, Quote Line)</li>
          <li>Guided selling wizard configuration and usage</li>
          <li>Quote template: sections, conditional content, dynamic columns</li>
          <li>Order activation and contract generation from a CPQ quote</li>
          <li>Amendment flow vs Renewal flow — when each is triggered and how they differ</li>
        </ol>
      </div>

      {/* FAQ */}
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

      {/* CTA */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/cpq-admin-vs-revenue-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ CPQ Admin vs Revenue Cloud Consultant — comparison</Link></li>
        </ul>
      </div>

      <DifficultyHeatmap slug="cpq-administrator" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free CPQ Administrator practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/cpq-administrator"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Compare paths: <Link href="/cpq-admin-vs-revenue-cloud-consultant" className="underline hover:text-white font-medium">CPQ Admin vs Revenue Cloud Consultant</Link>
        </p>
      </div>
    </div>
  )
}
