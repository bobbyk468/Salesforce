import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Industries CPQ Developer Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Industries CPQ Developer exam tips for ${RELEASE_CURRENT}: product catalogue, pricing, guided selling Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/industries-cpq-developer-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/industries-cpq-developer-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Industries CPQ Developer exam tips ${RELEASE_CURRENT}, how to pass Industries CPQ Developer, Salesforce Industries CPQ certification, Vlocity CPQ exam tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Industries CPQ Developer Exam Tips', url: '/industries-cpq-developer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Industries CPQ Developer exam format?',
    answer: 'The Salesforce Industries CPQ Developer exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests configuration and development of Industries CPQ (formerly Vlocity CPQ) for telecommunications, media, and energy industries.',
  },
  {
    question: 'What are the highest-weight Industries CPQ Developer exam sections?',
    answer: 'Product Catalogue Management (30%) and Pricing and Promotions (25%) together account for 55% of the exam. Understanding product hierarchies, offering types, price lists, promotions, and how Industries CPQ differs from standard Salesforce CPQ is the core of this certification.',
  },
  {
    question: 'How is Industries CPQ different from standard Salesforce CPQ?',
    answer: 'Industries CPQ (formerly Vlocity CPQ) is built specifically for telecommunications, media, utilities, and other industries with complex product hierarchies and subscription-based offerings. It uses its own data model (Product Catalogue, Price List, Promotions) and integrates with OmniStudio for guided selling. Standard Salesforce CPQ (Steelbrick) is a more general-purpose configure-price-quote tool.',
  },
  {
    question: 'What prerequisites help with the Industries CPQ Developer exam?',
    answer: 'OmniStudio Developer certification or experience is strongly recommended as Industries CPQ uses OmniStudio for its guided selling interfaces. Industries CPQ experience in a communications, media, or energy implementation context is essential. The exam is niche — most candidates work for system integrators specialising in Vlocity/Industries implementations.',
  },
]

export default function IndustriesCPQDeveloperExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/industries-cpq-developer-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Industries CPQ Developer Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Industries CPQ Developer exam tests your ability to build and configure Industries CPQ (formerly
          Vlocity CPQ) for complex telecommunications, media, and energy product offerings. These tips
          focus on the product catalogue, pricing model, and guided selling patterns the exam tests.
        </p>
      </header>

      <ContentPageAuthor />

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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Industries CPQ Developer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Product catalogue management</strong> — Industries CPQ product hierarchy (Offerings, Products, Product Components), attribute-based configuration, product specifications, and how the catalogue differs from standard Salesforce CPQ&apos;s bundle model.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Pricing and promotions</strong> — Price lists, price list entries, promotion types, eligibility rules, and how promotions override standard pricing. Understanding the Industries CPQ pricing engine sequence is critical.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Guided selling and OmniStudio integration</strong> — How Industries CPQ uses OmniScripts and FlexCards for the guided selling experience, Integration Procedures for catalogue data retrieval, and DataRaptors for order submission.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Product Catalogue Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Pricing and Promotions</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Guided Selling and OmniStudio</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Order Management and Fulfilment</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Product Catalogue + Pricing + Guided Selling = 77%. These three areas define your preparation focus.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Industries CPQ Developer Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a telecommunications or media product scenario and ask which Industries CPQ
          configuration achieves it. Answers involving standard Salesforce CPQ features are distractors —
          always prefer the Industries CPQ native approach.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For product hierarchy questions: Industries CPQ uses Offerings (top-level products like &apos;Broadband 100Mbps&apos;), Products (components of offerings), and Product Specifications (attribute definitions). An Offering can contain multiple Products with variable quantities and attribute values.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For promotion questions: promotions have Eligibility Rules that define who qualifies (existing customer, new customer, account type). Promotion Offers define what the customer gets (discount, free add-on). Promotions override Price List Entries — know the sequence.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For OmniStudio integration questions: the guided selling flow is built in OmniScript. Product catalogue data is fetched via Integration Procedures calling Industries CPQ APIs. When a requirement involves displaying product options dynamically based on customer eligibility, the answer involves an Integration Procedure with eligibility filtering — not a direct SOQL DataRaptor.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Industries CPQ Developer is a specialist certification primarily taken by consultants working on
          telecommunications, media, or energy implementations. Without real Industries CPQ project experience,
          this exam is significantly more challenging. Complete the Trailhead Industries CPQ trails
          and work through a full product catalogue configuration before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Industries CPQ Developer Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Product Configuration vs Pricing Engine — Two Separate Subsystems</p>
            <p className="text-sm text-gray-700">Industries CPQ (Vlocity CPQ) has a Product Configurator that drives eligibility, compatibility, and bundle selection, and a separate Pricing Engine that calculates prices using Price Lists, Price Adjustments, and custom pricing methods. Candidates design pricing logic inside product configuration rules — the exam expects pricing logic in the Pricing Engine (Custom Price Methods) and product logic in the Configurator.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. OmniScript vs DataRaptor vs Integration Procedure — Three Tools, One Platform</p>
            <p className="text-sm text-gray-700">OmniScript orchestrates the user-facing interaction flow (wizard UI). DataRaptors extract, transform, and load data between Salesforce objects and OmniScript. Integration Procedures call external APIs and apply data transformations server-side without a UI. Candidates use DataRaptors for external API calls — the exam expects Integration Procedures for external callouts and DataRaptors for Salesforce data operations.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Cart-Based vs Non-Cart-Based Flows — When Each Is Used</p>
            <p className="text-sm text-gray-700">Cart-based CPQ flows show a cart UI where users add products, configure them, and proceed to checkout. Non-cart-based (API-driven) flows are used when pricing and configuration are computed programmatically without user interaction (order management, bulk repricing). Candidates design cart UI for all CPQ scenarios — the exam expects non-cart API flows for system-driven pricing and automated order processing.</p>
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
          <Link href="/cpq-administrator-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Administrator Exam Tips</span>
          </Link>
          <Link href="/omnistudio-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">OmniStudio Developer Exam Tips</span>
          </Link>
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Industries CPQ Developer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/industries-cpq-developer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Industries CPQ Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/omnistudio-developer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OmniStudio Developer Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
