import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `B2C Commerce Developer Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2C Commerce Developer exam tips for ${RELEASE_CURRENT}: SFRA, cartridges, controllers, ISML templates, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2c-commerce-developer-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2c-commerce-developer-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `B2C Commerce Developer exam tips ${RELEASE_CURRENT}, how to pass B2C Commerce Developer, Salesforce Commerce Cloud certification, SFRA cartridge exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Commerce Developer Exam Tips', url: '/b2c-commerce-developer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2C Commerce Developer exam format?',
    answer: 'The Salesforce B2C Commerce Developer exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests development on Salesforce B2C Commerce (formerly Demandware) using SFRA (Storefront Reference Architecture), cartridges, controllers, ISML templates, and Business Manager configuration.',
  },
  {
    question: 'What are the highest-weight B2C Commerce Developer exam sections?',
    answer: 'Storefront Development (30%) and Business Logic (25%) together account for 55% of the exam. Understanding SFRA cartridge architecture, extending controllers, customising ISML templates, and implementing product, catalog, and checkout logic are the most heavily tested areas.',
  },
  {
    question: 'What is SFRA and why is it important for this exam?',
    answer: 'SFRA (Storefront Reference Architecture) is the current Salesforce B2C Commerce development framework, replacing the older SiteGenesis architecture. The exam primarily tests SFRA development: cartridge chaining, controller extension patterns, the require() module system, and how to extend base SFRA functionality without modifying core files.',
  },
  {
    question: 'What Business Manager knowledge is needed for the B2C Commerce Developer exam?',
    answer: 'Business Manager is the administration UI for B2C Commerce. You need to understand site configuration, catalog management, pricing rules, promotions, content slots, A/B testing setup, and how Business Manager configurations affect storefront behaviour. Configuration decisions in Business Manager often have direct development implications tested in the exam.',
  },
]

export default function B2CCommerceDeveloperExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/b2c-commerce-developer-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/b2c-commerce-developer-exam-tips' })
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
          Salesforce B2C Commerce Developer Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The B2C Commerce Developer exam tests your ability to build and extend Salesforce B2C Commerce
          storefronts using SFRA. These tips focus on cartridge architecture, controller extension,
          ISML templates, and Business Manager configuration that define this exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What B2C Commerce Developer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>SFRA cartridge development</strong> — Cartridge chaining and precedence, extending controllers using server.extend() and server.replace(), customising ISML templates, and the module system (require()). Knowing the SFRA cartridge structure (controllers, models, scripts, templates, static) is fundamental.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Commerce business logic</strong> — Product and catalogue management, promotions and pricing logic, checkout flow customisation, payment integration patterns, and how to work with B2C Commerce APIs (Product, Basket, Order, Customer).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Business Manager and platform</strong> — Site configuration, content management (Content Slots, Page Designer), A/B testing, job scheduling for automation, and integration with external systems via OCAPI (Open Commerce API).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Storefront Development (SFRA)</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Business Logic and Commerce APIs</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Business Manager Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Integration and OCAPI</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">SFRA + Business Logic + Business Manager = 75%. SFRA cartridge architecture is the foundation — master it first.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach B2C Commerce Developer Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a storefront customisation requirement and ask which SFRA pattern, controller
          method, or Business Manager configuration achieves it. Always prefer extending over replacing —
          the exam rewards the SFRA best practice of extending core functionality without modifying base files.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For cartridge questions: cartridge path order determines which cartridge version of a file is used. Custom cartridges should appear first in the cartridge path. Use server.extend() to add new middleware steps to an existing route; use server.replace() to completely override a route. Prefer extend over replace to maintain upgrade compatibility.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ISML template questions: templates use &lt;isinclude&gt; to include other templates, &lt;isloop&gt; for iteration, and &lt;isif&gt; for conditionals. ISML expressions use ${'{'}expression{'}'} syntax. Custom templates in your cartridge override base SFRA templates with the same path — know which file path takes precedence.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For promotion questions: B2C Commerce promotions are configured in Business Manager with promotion types (product, order, shipping), qualifiers (basket amount, product quantity), and discounts (percent off, fixed price, free shipping). Promotion ordering and exclusivity settings determine which promotions stack — know the exclusivity rules.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          B2C Commerce Developer is a specialist certification for developers working on Commerce Cloud
          implementations. Without real SFRA development experience in a B2C Commerce sandbox,
          the cartridge architecture and controller extension questions are very difficult.
          Set up a B2C Commerce sandbox and build a custom cartridge before booking.
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
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/b2c-commerce-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2C Commerce Architect Exam Tips</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start B2C Commerce Developer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/b2c-commerce-developer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            B2C Commerce Developer Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/b2c-commerce-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            B2C Commerce Architect Questions
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
