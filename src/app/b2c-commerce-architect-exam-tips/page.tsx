import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `B2C Commerce Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2C Commerce Architect exam tips for ${RELEASE_CURRENT}: SFRA architecture, performance, security, integrations Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2c-commerce-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2c-commerce-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `B2C Commerce Architect exam tips ${RELEASE_CURRENT}, how to pass B2C Commerce Architect, Salesforce Commerce Cloud architect, SFRA architecture exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Commerce Architect Exam Tips', url: '/b2c-commerce-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2C Commerce Architect exam format?',
    answer: 'The Salesforce B2C Commerce Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee ($100 retake). It tests expert-level B2C Commerce architecture: SFRA design patterns, performance architecture, security, scalability, and integration with external systems.',
  },
  {
    question: 'What are the highest-weight B2C Commerce Architect exam sections?',
    answer: 'Architecture and Design (35%) and Integration Patterns (22%) together account for 57% of the exam. Designing scalable SFRA cartridge architectures, integration with payment gateways and ERP systems, performance optimisation, and B2C Commerce security are the most heavily tested areas.',
  },
  {
    question: 'How does B2C Commerce Architect differ from B2C Commerce Developer?',
    answer: 'B2C Commerce Developer tests hands-on development skills: building cartridges, writing controllers, configuring Business Manager. B2C Commerce Architect tests systems design: how to architect the overall Commerce platform, select between Headless Commerce vs. SFRA, design integration patterns with external systems, optimise for performance at scale, and govern a multi-site implementation.',
  },
  {
    question: 'What is Headless Commerce and does the B2C Commerce Architect exam test it?',
    answer: 'Headless Commerce separates the front-end presentation layer from the B2C Commerce back-end — the storefront is built with a custom front-end (React, Vue) consuming Commerce APIs (OCAPI or SCAPI). Yes, the Architect exam tests when to choose Headless vs. SFRA: Headless for maximum front-end flexibility, SFRA for faster time-to-market with a managed front-end framework.',
  },
]

export default function B2CCommerceArchitectExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/b2c-commerce-architect-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/b2c-commerce-architect-exam-tips' })
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
          Salesforce B2C Commerce Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The B2C Commerce Architect exam tests expert-level Commerce Cloud architecture skills. These tips
          focus on SFRA vs. headless architecture decisions, integration patterns, and performance design
          that define the most heavily weighted sections.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What B2C Commerce Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Architecture and design</strong> — SFRA vs. Headless Commerce selection, multi-site architecture design, cartridge dependency management at scale, Business Manager configuration governance, and how to structure a large Commerce implementation across regions and brands.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration architecture</strong> — OC API (Open Commerce API) vs. SCAPI (Salesforce Commerce API) selection, integration with ERP (SAP, Oracle) for order fulfilment, payment gateway integration patterns, and Marketing Cloud integration for personalised commerce experiences.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Performance and security</strong> — CDN strategy for static assets, caching layers (page-level, partial-page, fragment), PCI DSS compliance for payment data, and how to design high-traffic peak performance (Black Friday scale).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Architecture and Design</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integration Patterns</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Performance Optimisation</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Security and Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Architecture + Integration + Performance = 77%. The SFRA vs. headless decision and integration patterns are the highest-value study areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach B2C Commerce Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions present a commerce architecture requirement and ask which design decision, API approach,
          or integration pattern is correct. Think about long-term maintainability and upgrade compatibility —
          architect decisions have multi-year implications.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For SFRA vs. headless questions: SFRA = managed front-end, faster implementation, less flexibility. Headless = custom front-end, maximum flexibility, more complex to build and maintain. Choose headless when: aggressive front-end customisation is required, PWA or native mobile is needed, or the team has strong React/Vue skills. Choose SFRA when: time-to-market is critical, front-end flexibility is not the priority.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For API questions: OCAPI is the legacy REST API for B2C Commerce — still used for many integrations. SCAPI (Salesforce Commerce API) is the newer API with better performance and easier authentication. For new integrations, prefer SCAPI. When a question says &apos;modern integration&apos; or &apos;headless storefront&apos;, SCAPI is the answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For performance questions: page-level caching (full page HTML cache) is the most impactful for anonymous users. Partial page caching for components that change per session. Avoid caching personalised content at the page level — use client-side rendering for personalised sections. CDN placement for static assets (images, CSS, JS) reduces origin server load.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          B2C Commerce Architect is the highest Commerce Cloud certification. Most candidates earn
          B2C Commerce Developer first and gain 3+ years of Commerce Cloud project experience before
          attempting Architect. Without real multi-site Commerce implementations and integration
          architecture experience, this exam is extremely difficult.
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
          <Link href="/b2c-commerce-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2C Commerce Developer Exam Tips</span>
          </Link>
          <Link href="/b2c-solution-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2C Solution Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start B2C Commerce Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/b2c-commerce-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            B2C Commerce Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/b2c-commerce-developer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            B2C Commerce Developer Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
