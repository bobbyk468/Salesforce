import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `CPQ &amp; Billing AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce CPQ &amp; Billing Accredited Professional exam tips for ${RELEASE_CURRENT}: product configuration, pricing, contracts, invoicing.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/cpq-billing-ap`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/cpq-billing-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `CPQ Billing AP exam tips ${RELEASE_CURRENT}, how to pass CPQ Billing Accredited Professional, Salesforce CPQ certification, Revenue Cloud billing exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CPQ & Billing AP Exam Tips', url: '/cpq-billing-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce CPQ & Billing Accredited Professional exam format?',
    answer: 'The CPQ &amp; Billing AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce CPQ (Configure, Price, Quote) and Billing: product configuration, pricing waterfall, quote templates, contracts, amendments, renewals, invoicing, and payment processing.',
  },
  {
    question: 'What are the highest-weight CPQ & Billing AP exam sections?',
    answer: 'Product and Pricing Configuration (30%) and Quoting and Contracting (25%) together account for 55% of the exam. Understanding product rules, option constraints, discount schedules, the CPQ pricing waterfall, and how quotes convert to contracts and then to invoices are the most heavily tested areas.',
  },
  {
    question: 'What is the CPQ pricing waterfall and why does the exam test it?',
    answer: 'The CPQ pricing waterfall is the sequence of price calculations that determines the final net price on a quote line: List Price → Customer Price (after customer-specific pricing) → Partner Price (if applicable) → Regular Price (after discount schedules) → Special Price (manual override) → Net Price (after additional discounts). The exam tests which price field is affected by which type of discount and in what order.',
  },
  {
    question: 'How does CPQ Billing work and what does the exam test?',
    answer: 'Salesforce Billing generates invoices from contracted orders. After a CPQ quote becomes a contract and orders are activated, Billing creates invoice lines based on the billing frequency (monthly, annual, one-time), generates invoices on the billing date, tracks payments against invoices, and handles amendments to subscription billing. The exam tests the invoice generation process and how billing interacts with CPQ contracts.',
  },
]

export default function CpqBillingApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/cpq-billing-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/cpq-billing-ap-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce CPQ &amp; Billing AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The CPQ &amp; Billing AP exam validates your ability to configure Salesforce CPQ and Billing
          for complex quoting and revenue management. These tips focus on the pricing waterfall,
          product rules, contracting, and invoicing that define this accreditation.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What CPQ &amp; Billing AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Product and pricing configuration</strong> — Product features, options, and bundles in CPQ; option constraints (Required, Optional, Exclusive); product rules (validation, selection, filter, alert); discount schedules (slab vs. range, volume discounts); the CPQ pricing waterfall (List → Customer → Partner → Regular → Special → Net price); and price rules for custom pricing logic.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Quoting and contracting</strong> — Creating and sending CPQ quotes, quote templates for branded PDF output, DocuSign integration for e-signatures, contracting (converting approved quotes to contracts), subscription products and contracted prices, and amendment and renewal flows for changing or extending existing contracts.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Billing and invoicing</strong> — Salesforce Billing invoice generation from activated orders, billing frequency (one-time, monthly, annual), invoice scheduling, payment processing and payment methods, credit notes and refunds, and how billing amendments sync with subscription contract changes from CPQ.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Product and Pricing Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Quoting and Contracting</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Billing and Invoicing</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Amendments and Renewals</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. The pricing waterfall is the most consistently tested concept — know every price field and what affects it.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CPQ &amp; Billing AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a quoting or billing scenario and ask which CPQ feature, object,
          or configuration achieves it. Know the pricing waterfall cold — most pricing questions
          test which field is set by which action.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For pricing questions: List Price is the base price from the price book. Discount Schedules reduce List Price to Regular Price (volume-based). Special Price is a manual override by the sales rep. Additional Discount is a further % off the Special Price. Net Price is the final price the customer pays. When a scenario says &apos;apply a 10% volume discount automatically at 10 units&apos;, configure a Discount Schedule — not a product rule or manual discount.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For product bundle questions: bundles have a parent product (the bundle) and optional/required features with options. Option constraints control which options can or cannot be selected together (Required: one option must be chosen; Exclusive: selecting one deselects others). When a scenario says &apos;the customer must choose exactly one of these three support tiers&apos;, configure a Required option constraint with Min/Max of 1.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For contract/amendment questions: when a customer wants to add seats mid-term, create an Amendment Quote from the existing contract. The amendment calculates prorated charges for the remaining contract period. When a customer&apos;s subscription expires, create a Renewal Quote. Amendments change an active contract; renewals extend it. When a question asks &apos;how to add 5 users to a customer&apos;s existing annual contract&apos;, the answer is an Amendment.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          CPQ &amp; Billing AP is for implementation partners and in-house admins running Salesforce CPQ
          and Billing. Hands-on CPQ configuration experience (product bundles, discount schedules,
          quote templates) is essential. Set up a CPQ scratch org or trial org and configure a complete
          quote-to-cash workflow before booking.
        </p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/cpq-administrator-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Administrator Exam Tips</span>
          </Link>
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/cpq-admin-vs-cpq-billing-ap" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Admin vs CPQ Billing AP</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CPQ &amp; Billing AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/cpq-billing-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CPQ &amp; Billing AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/cpq-administrator-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CPQ Administrator Tips
          </Link>
          <Link href="/revenue-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Revenue Cloud Consultant Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
