import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'revenue-cloud-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Revenue Cloud Consultant study guide: 5 sections, billing schedules, pricing waterfall, 8-week plan. $200. Free practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/revenue-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/revenue-cloud-consultant-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce revenue cloud consultant study guide, revenue cloud certification 2026, revenue cloud exam prep, salesforce billing certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Revenue Cloud Consultant Study Guide', url: '/revenue-cloud-consultant-study-guide' },
]

const examSections = [
  { name: 'Product Catalog & CPQ', weight: 28, note: 'Revenue Cloud product hierarchy, pricing waterfall, CPQ product bundles, configuration rules, and the relationship between CPQ and Revenue Cloud. Product and pricebook setup for subscription and usage-based products.' },
  { name: 'Orders & Contracts', weight: 24, note: 'Quote-to-order conversion, order activation, contract creation from orders, amendment and renewal flows, order management, and reduction orders. Understanding how orders feed into billing.' },
  { name: 'Billing & Invoicing', weight: 22, note: 'Billing schedules (invoice and payment schedules), billing period, billing treatment, evergreen vs fixed-term subscriptions, usage-based billing, invoice generation, and invoice line creation logic.' },
  { name: 'Revenue Recognition', weight: 14, note: 'Revenue recognition events, revenue schedules, revenue distribution methods, and VSOE (Vendor-Specific Objective Evidence) allocation. Compliance with ASC 606 / IFRS 15 revenue recognition standards.' },
  { name: 'Implementation & Integration', weight: 12, note: 'Configuring Revenue Cloud from scratch: enabling features, setting up billing accounts, payment methods, and integration with payment gateways. Data migration considerations and go-live validation.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Revenue Cloud Consultant certification?',
    answer: 'The Salesforce Revenue Cloud Consultant certification validates skills in implementing Salesforce Revenue Cloud — the end-to-end quote-to-cash solution covering CPQ, contracting, billing, and revenue recognition. The exam has 60 questions, 105 minutes, ~65% passing score, and a $200 fee. Sales Cloud Consultant and CPQ Administrator experience are strongly recommended before sitting this exam.',
  },
  {
    question: 'What is the difference between Revenue Cloud and CPQ?',
    answer: 'Salesforce CPQ (Configure, Price, Quote) handles the configure-to-quote portion of the sales process — product configuration, pricing, quoting, and approval workflows. Revenue Cloud extends CPQ into post-sale processes: order management, contracting, billing (invoice generation, payment collection), and revenue recognition. Revenue Cloud includes CPQ functionality and adds billing and revenue lifecycle management.',
  },
  {
    question: 'What is a billing schedule in Revenue Cloud?',
    answer: 'A billing schedule defines when and how often a customer is invoiced for a subscription product. It consists of an invoice schedule (when invoices are generated — monthly, quarterly, annually) and a payment schedule (when payments are due relative to invoices). Revenue Cloud generates billing schedule records automatically from order product data and the billing treatment configured on the product.',
  },
  {
    question: 'What prerequisites are recommended for Revenue Cloud Consultant?',
    answer: 'Sales Cloud Consultant and CPQ Administrator are strongly recommended before Revenue Cloud Consultant. Revenue Cloud builds directly on CPQ — you need deep CPQ knowledge (product bundles, pricing cascade, subscription management, order activation, contract generation) before layering in billing and revenue recognition. Many candidates also have Sales Cloud Consultant from prior Salesforce experience.',
  },
  {
    question: 'How long should I study for the Revenue Cloud Consultant exam?',
    answer: 'Plan for 8–10 weeks with 10–15 hours per week, assuming CPQ Administrator knowledge. If you do not have CPQ Admin background, add 4–6 more weeks to cover CPQ fundamentals first. Revenue Cloud is a complex, interconnected product — hands-on sandbox experience configuring billing schedules, order activation, and invoice generation is essential for the scenario-based exam questions.',
  },
]

export default function RevenueCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/revenue-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Revenue Cloud Consultant Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Revenue Cloud Consultant exam — CPQ, billing schedules, revenue recognition, and implementation strategy.
        </p>
      </div>

      <ContentPageAuthor />

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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.5}%` }} />
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Revenue Cloud architecture — understand how CPQ, Orders, Contracts, Billing, and Revenue Recognition connect. Enable Revenue Cloud in a dev org.' },
            { week: 'Week 2', focus: 'Product catalog — subscription products, usage-based products, evergreen vs fixed-term settings, and billing treatment configuration.' },
            { week: 'Week 3', focus: 'CPQ review — product bundles, pricing cascade, amendment and renewal flows. Understand how CPQ quotes feed into Revenue Cloud orders.' },
            { week: 'Week 4', focus: 'Orders & Contracts — activate an order, generate a contract, process an amendment, create a renewal. Understand reduction orders for cancellations.' },
            { week: 'Week 5', focus: 'Billing — configure billing schedules (invoice + payment schedules), billing periods, billing treatments. Run the billing batch and review generated invoices.' },
            { week: 'Week 6', focus: 'Usage-based billing — configure usage summaries, rated usage, and aggregation methods. Understand the difference from subscription billing.' },
            { week: 'Week 7', focus: 'Revenue recognition — revenue schedules, distribution methods, ASC 606 compliance concepts. Configure a revenue recognition rule and review revenue schedules.' },
            { week: 'Week 8', focus: 'Full mock exams. Focus on billing schedule scenarios and the order-to-invoice flow. Revenue Cloud has many interconnected steps — trace each one end to end.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Trace the full quote-to-cash flow:</strong> Quote → Order → Contract → Billing Schedule → Invoice → Payment → Revenue Schedule. Knowing which object is created at each step, and what triggers each transition, is tested heavily.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Billing treatment determines billing schedule:</strong> Billing treatment on a product order item drives the invoice schedule (frequency) and payment schedule. Different products in the same order can have different billing treatments — invoiced monthly, annually, or at delivery.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Evergreen vs fixed-term:</strong> Evergreen subscriptions auto-renew indefinitely until cancelled. Fixed-term subscriptions have a defined end date. Revenue recognition and renewal flows differ significantly — know the key distinctions for each type.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Reduction orders for cancellations:</strong> When a customer cancels part of a subscription, a reduction order is created to reduce quantities or end-date specific order products. This triggers corresponding billing and revenue recognition adjustments. Understand when a reduction order is used vs a standard amendment.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Product Catalog &amp; CPQ (28%) and Orders &amp; Contracts (24%) together are 52% of the exam — strong CPQ Administrator knowledge is essential. Billing &amp; Invoicing (22%) is the most uniquely Revenue Cloud section and requires hands-on sandbox practice.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>End-to-end Revenue Cloud flow: Quote → Order → Contract → Billing → Invoice → Payment → Revenue</li>
          <li>Billing treatment: invoice schedule + payment schedule configuration on products</li>
          <li>Evergreen vs fixed-term subscription products and their renewal behaviour</li>
          <li>Billing schedule generation: when created, what triggers invoice line creation</li>
          <li>Reduction orders: when used, what they cancel, billing and revenue impact</li>
          <li>Usage-based billing: usage summaries, rated usage, aggregation methods</li>
          <li>Revenue recognition events and distribution methods</li>
          <li>ASC 606 / IFRS 15: performance obligations and revenue allocation concepts</li>
          <li>Amendment flow: what changes on the order, contract, and billing schedule</li>
          <li>Billing account and payment method setup for invoicing configuration</li>
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
          <li><Link href="/cpq-admin-vs-revenue-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ CPQ Admin vs Revenue Cloud Consultant — which cert is right?</Link></li>
        </ul>
      </div>


            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="revenue-cloud-consultant" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free Revenue Cloud Consultant practice questions covering all 5 exam sections.</p>
        <Link href="/certifications/revenue-cloud-consultant" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Compare paths: <Link href="/cpq-admin-vs-revenue-cloud-consultant" className="underline hover:text-white font-medium">CPQ Admin vs Revenue Cloud Consultant</Link>
        </p>
      </div>
    </div>
  )
}