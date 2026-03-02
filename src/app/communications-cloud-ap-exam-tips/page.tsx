import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Communications Cloud AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Communications Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: order management, product catalogue, contract management.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/communications-cloud-ap`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/communications-cloud-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Communications Cloud AP exam tips ${RELEASE_CURRENT}, how to pass Communications Cloud AP, Salesforce telco certification, TMF communications exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Communications Cloud AP Exam Tips', url: '/communications-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'How hard is the Communications Cloud ap exam?',
    answer: 'The Communications Cloud ap is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) designed for practitioners with hands-on implementation experience. It is considered moderately challenging for those who have configured Communications Cloud ap on real customer projects. Candidates without hands-on experience often find the specialised data model and feature configuration scenarios harder than expected. Most experienced practitioners pass with 3–4 weeks of focused review using the official Salesforce Trailmix for this accreditation.',
  },
  {
    question: 'What is the TMF data model and why does the exam test it?',
    answer: 'The TeleManagement Forum (TMF) data model is the industry-standard data structure for telecommunications companies. Salesforce Communications Cloud is built on this model: Products (services offered), Offers (bundles of products with pricing), Orders (customer requests to subscribe or change services), Subscriptions (active service agreements), and Assets (currently active services on a customer account). The exam tests how these objects relate and how to configure them.',
  },
  {
    question: 'What are the highest-weight Communications Cloud AP exam sections?',
    answer: 'Product Catalogue and Offer Management (30%) and Order Management (25%) together account for 55% of the exam. Configuring product specifications, offer bundles, pricing, order decomposition workflows, and order fulfilment integration are the most heavily tested areas.',
  },
  {
    question: 'How does OmniStudio power Communications Cloud?',
    answer: 'Like other Industry Clouds, Communications Cloud uses OmniStudio for its guided processes and UI components. OmniScripts power the guided selling experience (selecting services, configuring bundles). FlexCards display customer account and subscription summaries. DataRaptors read/write TMF data objects. Integration Procedures orchestrate complex order fulfilment workflows across BSS/OSS systems. OmniStudio knowledge is a prerequisite for this exam.',
  },
]

export default function CommunicationsCloudApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/communications-cloud-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Communications Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Communications Cloud AP exam validates your ability to implement Salesforce Communications
          Cloud for telecoms and media companies. These tips focus on the TMF data model, product
          catalogue, and order management that define this accreditation.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Communications Cloud AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Product catalogue and offer management</strong> — Product specifications (defining characteristics of a service: speed, data allowance, features), Offer bundles (packaging multiple products with a combined price), pricing models (recurring, one-time, usage-based), product rules for valid configurations, and how the catalogue drives the guided selling experience in OmniScripts.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Order management and fulfilment</strong> — Order decomposition (splitting a customer order into multiple fulfilment tasks), order orchestration workflows, integration with provisioning systems (OSS), order status tracking, and how order amendments and cancellations are handled in the TMF model.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Contract lifecycle and assets</strong> — Service contracts (the binding agreement between telecom and customer), installed assets (the active services on the customer&apos;s account), contract amendments (adding/changing/removing services mid-term), renewals, and how the Asset-Based Ordering (ABO) model tracks changes to a customer&apos;s service portfolio over time.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Product Catalogue and Offer Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Order Management and Fulfilment</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Contract Lifecycle and Assets</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">OmniStudio and Digital Commerce</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. The TMF data model (Products, Offers, Orders, Subscriptions, Assets) is the foundation — know it deeply.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Communications Cloud AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a telecoms business scenario and ask which Communications Cloud object,
          configuration, or workflow addresses it. Telecom industry knowledge (how mobile plans,
          broadband, and enterprise services are sold and managed) helps significantly.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For product vs. offer questions: a Product Specification defines a single service (e.g., &apos;100Mbps Broadband&apos;) with its characteristics. An Offer is a commercial bundle — combining products and their pricing into what the customer buys (e.g., &apos;Home Bundle: 100Mbps + TV + Phone for $89/month&apos;). When a scenario describes &apos;create a package customers can buy&apos;, the answer is an Offer — not a Product Specification alone.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For order decomposition questions: a customer order in telecoms often spans multiple fulfilment systems (billing, network provisioning, equipment dispatch). Order decomposition splits one customer order into multiple child orders routed to different systems. Each child order has its own status and completion criteria. When a scenario says &apos;the network team and billing team must each process their part of the order independently&apos;, configure order decomposition rules.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ABO questions: Asset-Based Ordering means changes to a customer&apos;s services start from what they currently have (their installed assets). An upgrade creates a new order that modifies the existing asset. A cancellation creates an order to terminate the asset. When a scenario says &apos;a customer wants to upgrade their mobile plan from 5GB to unlimited&apos;, create a Change Order from the existing mobile service asset — not a new Quote from scratch.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Communications Cloud AP is for implementation consultants on telecom and media projects.
          Complete the OmniStudio Consultant credential before pursuing this AP — OmniStudio is the
          core technology. Prior experience with BSS/OSS systems and telecom business processes
          helps significantly with scenario interpretation.
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
          <Link href="/energy-utilities-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Energy Utilities AP Exam Tips</span>
          </Link>
          <Link href="/omnistudio-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">OmniStudio Consultant Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Communications Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/communications-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Communications Cloud AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/omnistudio-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OmniStudio Consultant Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
