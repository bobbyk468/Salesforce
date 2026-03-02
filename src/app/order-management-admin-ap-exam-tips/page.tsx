import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Order Management Admin AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Order Management Administrator AP exam tips for ${RELEASE_CURRENT}: order lifecycle, fulfilment, returns, inventory management.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/order-management-admin-ap`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/order-management-admin-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Order Management Admin AP exam tips ${RELEASE_CURRENT}, how to pass Order Management Administrator AP, Salesforce OMS certification, order fulfilment exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Order Management Admin AP Exam Tips', url: '/order-management-admin-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Order Management Administrator AP exam format?',
    answer: 'The Order Management Administrator AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Order Management (OMS): configuring the order lifecycle, fulfilment workflows, return and exchange management, inventory tracking, and integration with commerce platforms and warehouse systems.',
  },
  {
    question: 'What are the highest-weight Order Management Admin AP exam sections?',
    answer: 'Order Lifecycle and Fulfilment Configuration (35%) and Return and Exchange Management (25%) together account for 60% of the exam. Configuring order statuses, fulfilment order routing, split shipment handling, and the returns management (RMA) process are the most heavily tested areas.',
  },
  {
    question: 'What is the Salesforce Order Management order lifecycle?',
    answer: 'The Salesforce Order Management order lifecycle flows through: Order Created (ingested from commerce platform) → Order Activated → Fulfilment Order Created (one or more per order based on routing) → Products Allocated to fulfilment location → Fulfilment Order Shipped → Order Delivered. Each stage has configurable status transitions and automation. The exam tests how to configure and troubleshoot this lifecycle.',
  },
  {
    question: 'How does Order Management handle returns and exchanges?',
    answer: 'Salesforce Order Management uses Change Orders to process returns. A Return Merchandise Authorization (RMA) is created and linked to the original order. Items are returned to a fulfilment location, inventory is updated, and a refund is issued. Exchanges create a new order for the replacement product. The exam tests the configuration of the return workflow, refund automation, and how to handle partial returns and damaged goods.',
  },
]

export default function OrderManagementAdminApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/order-management-admin-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/order-management-admin-ap-exam-tips' })
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
          Salesforce Order Management Admin AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Order Management Admin AP validates your ability to configure Salesforce OMS for
          e-commerce and retail order fulfilment. These tips focus on the order lifecycle,
          fulfilment routing, and return management that define this accreditation.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Order Management Admin AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Order lifecycle and fulfilment configuration</strong> — Order status configuration and state transitions, fulfilment order creation and routing (which fulfilment location handles which products), split order handling (different products fulfilled from different locations), shipment tracking integration, and order summary vs. fulfilment order data model distinctions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Return and exchange management</strong> — Configuring the RMA workflow (customer requests return → return authorised → item received → inventory updated → refund issued), handling partial returns, exchange order creation for size/colour swaps, damaged goods processing, and refund automation via payment gateway integration.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Inventory and commerce integration</strong> — Managing inventory availability by location, configuring fulfilment location priority rules, integrating with B2C Commerce or external commerce platforms for order ingestion, webhook configuration for order status updates to downstream systems, and the Salesforce OMS data model (Order Summary, Fulfilment Order, Order Delivery Group).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Order Lifecycle and Fulfilment Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Return and Exchange Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Inventory and Commerce Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Reporting and Customer Service</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. The OMS data model (Order Summary → Fulfilment Order → Order Delivery Group) is the foundation — know these objects and their relationships.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach OMS Admin AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an order management scenario and ask which OMS feature, object, or
          workflow configuration addresses it. The OMS data model is distinct from standard
          Salesforce order objects — use OMS-specific objects, not standard Order and OrderItem.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: Order Summary = the customer-facing record of what was ordered (the full order). Fulfilment Order = the subset of items being fulfilled from one location. Order Delivery Group = the shipment method and address for a set of items. One Order Summary can have multiple Fulfilment Orders (split shipments) and multiple Order Delivery Groups. When a scenario says &apos;a customer ordered 3 items and they ship from 2 different warehouses&apos;, the answer is one Order Summary with two Fulfilment Orders.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For fulfilment routing questions: Routing Rules determine which fulfilment location handles which product based on: inventory availability, location proximity to the customer, fulfilment priority (ship-from-store vs. warehouse), and product-location restrictions. When a scenario says &apos;always fulfil from the nearest store with available stock&apos;, configure a proximity-based routing rule with inventory availability as a prerequisite check.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For return questions: the return flow is: Customer requests return → Return Order created → RMA authorisation generated → Customer ships item back → Fulfilment Location receives return → Inventory updated → Refund Change Order created → Refund processed. When a scenario says &apos;process a refund for a customer who returned 2 of 5 items from their order&apos;, create a partial Return Order linked to the original Order Summary — not a new order or a credit note.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Order Management Admin AP is for OMS implementation teams and commerce platform administrators.
          The OMS data model is significantly different from standard Salesforce order objects —
          study the Salesforce Order Management documentation carefully. The OMS Trailmix and
          implementation guide are the primary study resources.
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
          <Link href="/order-management-developer-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Order Management Developer AP Exam Tips</span>
          </Link>
          <Link href="/revenue-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Revenue Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Order Management Admin AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/order-management-admin-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            OMS Admin AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/order-management-developer-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OMS Developer AP Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
