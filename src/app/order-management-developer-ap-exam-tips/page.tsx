import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'order-management-developer-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Order Management Developer AP exam tips for ${RELEASE_CURRENT}: OMS APIs, Flow customisation, headless integration Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/order-management-developer-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/order-management-developer-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Order Management Developer AP exam tips ${RELEASE_CURRENT}, how to pass Order Management Developer AP, Salesforce OMS developer certification, OMS API integration`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Order Management Developer AP Exam Tips', url: '/order-management-developer-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Order Management Developer AP exam format?',
    answer: 'The Order Management Developer AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates developer-level knowledge of Salesforce Order Management: customising OMS using Flow, Apex, and ConnectApi, integrating external systems via OMS APIs, and extending the order lifecycle with custom business logic.',
  },
  {
    question: 'What are the highest-weight Order Management Developer AP exam sections?',
    answer: 'OMS API Integration (35%) and Flow and Apex Customisation (25%) together account for 60% of the exam. Using the OMS Connect API for programmatic order operations, building custom Flow actions for order processing, and writing Apex to extend OMS behaviour are the most tested areas.',
  },
  {
    question: 'What OMS APIs does the Developer AP exam test?',
    answer: 'The exam tests the Salesforce Order Management Connect APIs: ConnectApi.OrderSummary for order retrieval and status updates, ConnectApi.FulfillmentOrder for fulfilment management, and REST APIs for headless commerce integration (submitting orders from external storefronts, updating order status from WMS systems). The exam tests when to use each API and how to handle authentication for external system integration.',
  },
  {
    question: 'How does OMS use Flow for customisation?',
    answer: 'Salesforce Order Management uses an invocable action pattern — OMS processes call Flows via Flow Actions at key points in the order lifecycle. Developers create custom Flows that are invoked by OMS during order processing (for custom routing logic, custom tax calculation, custom notification triggers). The exam tests how to build and register custom Flow actions in the OMS processing pipeline.',
  },
  {
    question: 'What concepts do most Order Management Developer candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Order Management Developer exam are: (1) Order Management APIs — REST vs Connect API vs APEX; (2) Inventory Availability Check — Not a Default Order Creation Step; (3) Payment Integration — Capture vs Authorisation vs Void. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('order-management-developer-ap-exam-tips'),
]

export default function OrderManagementDeveloperApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/order-management-developer-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Order Management Developer AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Order Management Developer AP validates developer expertise in customising and
          integrating Salesforce OMS. These tips focus on OMS APIs, Flow customisation,
          and headless commerce integration that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Order Management Developer AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OMS API integration</strong> — Using ConnectApi for programmatic order operations (create, update, cancel, return), REST API integration for headless commerce (submitting orders from external storefronts, WMS order fulfilment callbacks), authentication patterns for external system API access, and error handling for failed API operations.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Flow and Apex customisation</strong> — Building invocable Flows for custom OMS processing logic, registering Flow actions in OMS orchestration steps, writing Apex to extend order lifecycle events, implementing the OMS platform event model for asynchronous processing, and customising OMS-generated emails and notifications.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Headless commerce integration</strong> — Integrating OMS with external commerce platforms (Shopify, Magento, custom) via REST APIs, implementing the headless order submission pattern (external cart → OMS order via API), configuring webhook endpoints for order status updates, and handling order data transformation between commerce platform schemas and OMS data model.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">OMS API Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Flow and Apex Customisation</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Headless Commerce Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Testing and Deployment</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. OMS API knowledge + Flow customisation = 60% — the developer-specific skills that distinguish this from the Admin AP.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach OMS Developer AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an OMS customisation or integration requirement and ask which developer
          approach achieves it. Use OMS-designed extension points — never use trigger-based approaches
          for OMS order lifecycle events.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For API integration questions: external systems submit orders to OMS using the REST API (POST to the Order Summary endpoint). Order status updates flow back from OMS to the commerce platform via webhooks (Platform Events that external systems subscribe to). Authentication uses Connected App OAuth. When a scenario says &apos;orders from Shopify should appear in OMS in real time&apos;, configure a Shopify webhook to call the OMS REST API — not a nightly batch sync.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Flow customisation questions: OMS uses the Invocable Method pattern for Flow extensions. Custom logic is packaged as an Apex @InvocableMethod and exposed as a Flow Action. The custom Flow is then registered as a step in the OMS orchestration (e.g., &apos;after order is received, run Custom Tax Calculation flow action&apos;). When a scenario says &apos;calculate taxes using our external tax service during order processing&apos;, build an Invocable Apex method that calls the tax API and register it in the OMS routing flow.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ConnectApi questions: ConnectApi.OrderSummary.cancelOrderSummary() programmatically cancels an order. ConnectApi.FulfillmentOrder.submitFulfillmentOrderToFulfillmentLocation() routes a fulfilment order. Using ConnectApi in Apex tests requires Test.startTest()/Test.stopTest() blocks and mock responses for HTTP callouts. When a scenario says &apos;build an Apex class to cancel orders older than 30 days that haven&apos;t been fulfilled&apos;, use ConnectApi.OrderSummary.cancelOrderSummary() — not a direct DML update on Order Summary records.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          OMS Developer AP is for developers building OMS integrations and customisations. Understanding
          the OMS data model (from the Admin AP) is a prerequisite — the Developer AP tests how to
          interact with that model programmatically. Build a test integration using the OMS REST API
          before booking. The OMS Developer documentation on the Salesforce Developer site is the
          primary reference.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Order Management Developer Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Order Management APIs — REST vs Connect API vs APEX</p>
            <p className="text-sm text-gray-700">Salesforce OMS exposes Connect API endpoints for storefront integrations (cart-to-order, checkout). REST API is for general programmatic access. Apex classes (OrderManagement namespace) are available for server-side custom logic. Candidates use general REST endpoints for checkout integrations — the exam expects Connect API (specifically the OMS Connect endpoints) for storefront-to-order creation workflows.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Inventory Availability Check — Not a Default Order Creation Step</p>
            <p className="text-sm text-gray-700">Inventory availability checks are NOT automatically performed when an Order is created in Salesforce OMS unless explicitly configured. Developers must implement the check via the Inventory Integration or a custom callout. Candidates assume OMS validates inventory automatically — the exam expects explicit inventory availability check configuration as part of the order capture workflow.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Payment Integration — Capture vs Authorisation vs Void</p>
            <p className="text-sm text-gray-700">Authorisation reserves funds on a payment method without charging. Capture charges the authorised amount (typically after shipment). Void cancels an authorisation before capture. In OMS, these correspond to separate Payment Gateway API calls. Candidates design a single payment operation — the exam expects separate Auth and Capture calls in the correct fulfilment sequence.</p>
          </div>
        </div>
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
          <Link href="/order-management-admin-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Order Management Admin AP Exam Tips</span>
          </Link>
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/revenue-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Revenue Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Order Management Developer AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/order-management-developer-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            OMS Developer AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/order-management-admin-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OMS Admin AP Questions
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}