import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce B2C Commerce Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Complete B2C Commerce Architect certification study guide: exam sections, solution architecture, integrations, performance, security, and tips to pass the Salesforce exam in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2c-commerce-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2c-commerce-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `b2c commerce architect study guide, salesforce b2c commerce architect exam, commerce cloud architect certification 2026, SFRA architect exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Commerce Architect Study Guide', url: '/b2c-commerce-architect-study-guide' },
]

const examSections = [
  { name: 'Solution Architecture & Design', weight: 30, note: 'Designing B2C Commerce solutions for enterprise retailers: multi-site architecture, instance topology, and site design patterns.' },
  { name: 'Technical Architecture & Integrations', weight: 25, note: 'OMS integration, payment gateway architecture, ERP integration patterns, headless commerce architecture, and API-first design.' },
  { name: 'Storefront Design & Experience', weight: 20, note: 'SFRA architecture decisions, storefront performance strategies, PWA Kit considerations, and mobile commerce design.' },
  { name: 'Performance & Scalability', weight: 15, note: 'CDN configuration, page caching strategies, pipeline performance, load testing, and high-traffic event architecture.' },
  { name: 'Security & Compliance', weight: 10, note: 'PCI DSS compliance architecture, shopper data protection, GDPR considerations, and B2C Commerce security settings.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2C Commerce Architect certification?',
    answer: 'The Salesforce Certified B2C Commerce Architect validates expertise in designing enterprise-scale B2C Commerce (Salesforce Commerce Cloud) solutions. It covers multi-site architecture, integration design, headless commerce patterns, performance optimisation, and security compliance. It is the architect-level credential in the B2C Commerce track, building on the B2C Commerce Developer certification.',
  },
  {
    question: 'What is the B2C Commerce Architect exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 120-minute time limit. The passing score is approximately 67%. The exam costs $400 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'What prerequisites are recommended for B2C Commerce Architect?',
    answer: 'Salesforce recommends holding the B2C Commerce Developer certification before attempting the Architect exam. The exam assumes deep hands-on experience implementing B2C Commerce solutions — typically 3–5+ years of development and architecture experience on the platform. Knowledge of SFRA, Commerce APIs, integration patterns, and headless commerce architecture is essential.',
  },
  {
    question: 'What is headless commerce and how does it relate to this exam?',
    answer: 'Headless commerce decouples the frontend (storefront UI) from the backend (commerce engine), communicating via APIs. Salesforce supports headless B2C Commerce via the Commerce APIs and PWA Kit (Progressive Web App Kit). The Architect exam tests when to recommend headless vs SFRA-based architectures, the tradeoffs of each approach, and how to design API-first commerce solutions for enterprise retailers.',
  },
  {
    question: 'What integration patterns are covered in the B2C Commerce Architect exam?',
    answer: 'The exam covers integration patterns for: OMS (Order Management System) — real-time vs asynchronous order sync; ERP — product, price, and inventory synchronisation; PIM (Product Information Management) — catalogue data feeds and product import; payment gateways — PCI compliant tokenisation and checkout flow design; and Customer Service Cloud — case creation from commerce events. Understanding which pattern is appropriate for each integration type is key.',
  },
]

export default function B2cCommerceArchitectStudyGuidePage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/b2c-commerce-architect-study-guide', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/b2c-commerce-architect-study-guide' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Commerce Cloud Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce B2C Commerce Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified B2C Commerce Architect exam — multi-site architecture, integration design, headless commerce, performance, and security compliance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '120 min' },
          { label: 'Passing Score', value: '~67%' },
          { label: 'Exam Fee', value: '$400' },
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
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice B2C Commerce Architect Questions</h2>
        <p className="text-blue-100 mb-6">Free practice questions for the Salesforce B2C Commerce Architect exam.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/b2c-commerce-architect" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            B2C Commerce Architect Practice
          </Link>
          <Link href="/b2c-commerce-developer-study-guide" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Developer Study Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
