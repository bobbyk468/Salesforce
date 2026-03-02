import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `B2B Commerce Developer AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2B Commerce Developer AP exam tips for ${RELEASE_CURRENT}: LWC customisation, headless commerce, cart and checkout APIs.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/b2b-commerce-developer-ap`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2b-commerce-developer-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `B2B Commerce Developer AP exam tips ${RELEASE_CURRENT}, how to pass B2B Commerce Developer AP, Salesforce B2B Commerce LWC, headless commerce Salesforce`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2B Commerce Developer AP Exam Tips', url: '/b2b-commerce-developer-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the B2B Commerce Developer AP exam format?',
    answer: 'The B2B Commerce Developer AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates developer-level knowledge of Salesforce B2B Commerce: customising the storefront using Lightning Web Components (LWC), extending cart and checkout behaviour, working with B2B Commerce APIs, and headless commerce integration patterns.',
  },
  {
    question: 'What are the highest-weight B2B Commerce Developer AP exam sections?',
    answer: 'LWC Storefront Customisation (35%) and Cart and Checkout Extension (25%) together account for 60% of the exam. Overriding default B2B Commerce LWC components, extending checkout flows with custom Apex and LWC, and using the ConnectApi namespace for cart and order operations are the most tested areas.',
  },
  {
    question: 'How does LWC customisation work in Salesforce B2B Commerce?',
    answer: 'B2B Commerce storefront pages are built from standard LWC components provided by Salesforce. Developers customise the storefront by overriding these standard components with custom LWC implementations. Custom components use the same component name and folder structure to override the default. The exam tests how to correctly override standard components, use the B2B Commerce LWC component library, and handle data communication between components.',
  },
  {
    question: 'What B2B Commerce APIs does the Developer AP exam test?',
    answer: 'The exam tests the ConnectApi namespace for B2B Commerce operations: ConnectApi.CommerceCartApi for cart operations (add/update/remove items), ConnectApi.CommerceOrderApi for order placement and management, and the REST Connect API for headless commerce scenarios. The exam also tests how to extend the checkout flow using custom Apex classes that implement the CheckoutExtension interface.',
  },
]

export default function B2bCommerceDeveloperApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2b-commerce-developer-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce B2B Commerce Developer AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The B2B Commerce Developer AP validates developer expertise in customising Salesforce B2B
          Commerce storefronts. These tips focus on LWC component overrides, checkout extension,
          and ConnectApi commerce operations that define this accreditation.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What B2B Commerce Developer AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>LWC storefront customisation</strong> — Overriding standard B2B Commerce LWC components (product detail page, cart, search results), using the B2B Commerce LWC component library and communication patterns, implementing custom product tiles and detail page extensions, and extending Experience Builder pages with custom B2B Commerce components.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Cart and checkout extension</strong> — Using ConnectApi.CommerceCartApi for programmatic cart operations (Apex), implementing custom checkout integrations using the CheckoutExtension interface (for custom tax calculation, custom shipping providers, custom payment gateways), and handling checkout flow stages with custom Apex that plugs into the B2B checkout orchestration.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Headless commerce and APIs</strong> — Using the Salesforce B2B Commerce REST API for headless storefront implementations, API authentication for external storefront clients, webhook and event integration patterns, and how headless B2B Commerce differs from the standard Experience Cloud storefront approach.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">LWC Storefront Customisation</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Cart and Checkout Extension</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Headless Commerce and APIs</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Testing and Deployment</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. LWC component override patterns are the most distinctive developer skill for B2B Commerce — know them deeply.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach B2B Commerce Developer AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a B2B Commerce customisation requirement and ask which developer
          approach achieves it. Prefer standard B2B Commerce extension points over custom code
          — the exam rewards using the platform&apos;s designed extension mechanisms.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For component customisation questions: to customise the product detail page, override the standard c/productDetailPage component with a custom component of the same name. Custom components should be placed in the correct namespace to take precedence. When a scenario says &apos;add custom content to the product detail page without modifying Salesforce code&apos;, override the standard PDP component — never modify the managed package code directly.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For checkout extension questions: custom checkout integrations implement the CheckoutExtension interface. Each checkout stage (shipping, tax, payment) can have a custom Apex handler. The custom handler receives the CartId and must update the cart with the calculated result (shipping cost, tax amount). When a scenario says &apos;calculate custom shipping rates from our internal shipping API during checkout&apos;, implement a custom Shipping CheckoutExtension — not a Flow or Process Builder action.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ConnectApi questions: use ConnectApi.CommerceCartApi in Apex to programmatically interact with carts. Key methods: addItemToCart, deleteCartItem, getCartItems, createCart. These require a WebStore ID and an effective account ID. When a scenario describes adding products to a customer&apos;s cart programmatically from an external system, use ConnectApi.CommerceCartApi — not direct DML on CartItem objects.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          B2B Commerce Developer AP requires hands-on LWC development experience. Set up a B2B Commerce
          scratch org using SFDX and build a custom component override before the exam — the override
          pattern is only intuitive after doing it hands-on. The Salesforce B2B Commerce Developer
          Trailmix is the primary study resource.
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
          <Link href="/b2b-commerce-admin-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2B Commerce Admin AP Exam Tips</span>
          </Link>
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/omnistudio-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">OmniStudio Developer Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start B2B Commerce Developer AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/b2b-commerce-developer-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            B2B Commerce Developer AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/b2b-commerce-admin-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            B2B Commerce Admin AP
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
