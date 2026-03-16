import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Revenue Cloud Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Revenue Cloud Consultant exam tips for ${RELEASE_CURRENT}: CPQ, billing, subscription management, revenue recognition.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/revenue-cloud-consultant`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/revenue-cloud-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Revenue Cloud Consultant exam tips ${RELEASE_CURRENT}, how to pass Revenue Cloud Consultant, Salesforce CPQ billing certification, Revenue Cloud exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Revenue Cloud Consultant Exam Tips', url: '/revenue-cloud-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Revenue Cloud Consultant exam format?',
    answer: 'The Salesforce Revenue Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests implementation of Salesforce Revenue Cloud: CPQ configuration, Salesforce Billing, subscription management, and the quote-to-cash process.',
  },
  {
    question: 'What are the highest-weight Revenue Cloud Consultant exam sections?',
    answer: 'CPQ Configuration (28%) and Billing and Invoicing (25%) together account for 53% of the exam. Understanding the full quote-to-cash lifecycle — from product catalogue and pricing through quoting, ordering, billing, and revenue recognition — is the core competency tested.',
  },
  {
    question: 'Do I need CPQ Specialist certification before Revenue Cloud Consultant?',
    answer: 'CPQ Specialist is not a formal prerequisite but is strongly recommended as a foundation. Revenue Cloud Consultant builds on CPQ knowledge (product rules, pricing, quote templates) and extends it with Salesforce Billing concepts (invoicing, payments, revenue recognition). Without CPQ experience, the Revenue Cloud exam is significantly harder.',
  },
  {
    question: 'What is the difference between Revenue Cloud Consultant and CPQ Specialist?',
    answer: 'CPQ Specialist focuses on the configure-price-quote functionality: product catalogue, pricing rules, discounting, and quote templates. Revenue Cloud Consultant covers the full quote-to-cash lifecycle including Salesforce Billing: invoice generation, payment processing, credit notes, amendment and renewal billing, and revenue recognition schedules.',
  },
]

export default function RevenueCloudConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/revenue-cloud-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Revenue Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Revenue Cloud Consultant exam tests the full quote-to-cash lifecycle: CPQ configuration,
          Salesforce Billing, subscription management, and revenue recognition. These tips focus on the
          billing and pricing topics that distinguish this exam from the CPQ Specialist certification.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Revenue Cloud Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>CPQ configuration</strong> — Product catalogue, bundles, pricing rules, discounting, and quote templates. Revenue Cloud builds on CPQ as the quoting foundation — strong CPQ knowledge is assumed and tested.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce Billing</strong> — Invoice generation triggers, payment processing, credit memos, billing rules, bill runs, and how billing integrates with the order management process. Understanding how quotes become orders and orders trigger invoices is critical.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Subscriptions and revenue recognition</strong> — Subscription products, amendment billing (mid-term changes), renewal billing, proration rules, and revenue recognition schedules for deferred revenue compliance (ASC 606).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">CPQ Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Billing and Invoicing</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Subscriptions and Amendments</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Revenue Recognition</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">CPQ + Billing + Subscriptions = 75%. The quote-to-cash lifecycle is the entire exam — know each stage deeply.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Revenue Cloud Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a billing or revenue scenario and ask which Revenue Cloud configuration, billing rule,
          or revenue recognition approach addresses it. Trace the question through the full quote-to-cash lifecycle
          to identify where the issue occurs.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For billing trigger questions: invoices are generated from Orders, not Quotes. A bill run triggers invoice creation based on billing rules set on the order products. The billing date type (order activation, specific date, or anniversary) determines when the invoice generates — know the three billing date types.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For amendment questions: mid-term changes to subscriptions generate prorated charges or credits. An amendment quote is created from the existing contract — it does not restart the subscription term. Credit notes offset existing invoices; they do not cancel the order. Know the amendment billing flow.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For revenue recognition questions: revenue recognition rules define when revenue is recognised (immediately, over time, or on delivery). Revenue schedules spread recognised revenue across accounting periods. Deferred revenue sits on the balance sheet until recognition conditions are met — understand this accounting concept at a conceptual level.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Revenue Cloud Consultant is one of the most complex Salesforce consultant certifications.
          Without both CPQ and Billing hands-on experience, the exam is very challenging. Earn
          the CPQ Specialist certification first, then gain Salesforce Billing configuration
          experience before attempting Revenue Cloud Consultant.
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
          <Link href="/cpq-billing-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Billing AP Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Revenue Cloud Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/revenue-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Revenue Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/cpq-administrator-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CPQ Specialist Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
