import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `B2C Solution Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2C Solution Architect exam tips for ${RELEASE_CURRENT}: multi-cloud B2C architecture, Commerce Cloud, Marketing Cloud, Service Cloud, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2c-solution-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2c-solution-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `B2C Solution Architect exam tips ${RELEASE_CURRENT}, how to pass B2C Solution Architect, Salesforce multi-cloud B2C architecture, Commerce Cloud Marketing Cloud architect exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Solution Architect Exam Tips', url: '/b2c-solution-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2C Solution Architect exam format?',
    answer: 'The Salesforce B2C Solution Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee ($100 retake). It tests the ability to design multi-cloud B2C customer experience solutions spanning B2C Commerce, Marketing Cloud, Service Cloud, and Salesforce Platform.',
  },
  {
    question: 'What are the highest-weight B2C Solution Architect exam sections?',
    answer: 'Architect Multi-Cloud Solutions (35%) and Understand the Customer Lifecycle (20%) together account for 55% of the exam. Designing customer journeys that span Commerce and Marketing Cloud, integrating Service Cloud for post-purchase support, managing customer identity across channels, and data privacy architecture are the most heavily tested areas.',
  },
  {
    question: 'How is B2C Solution Architect different from B2B Solution Architect?',
    answer: 'B2B Solution Architect focuses on Sales Cloud, CPQ, Pardot, and Revenue Cloud — the B2B sales cycle. B2C Solution Architect focuses on B2C Commerce, Marketing Cloud Engagement, Service Cloud, and Loyalty Management — the B2C consumer experience lifecycle. B2C scenarios involve high-volume consumer data, personalisation at scale, and omnichannel customer journeys.',
  },
  {
    question: 'What is customer identity management and why is it important for B2C Solution Architect?',
    answer: 'In B2C, customers interact across multiple channels (web, mobile, email, social, in-store). Customer identity management unifies these interactions under a single customer profile. Salesforce Identity (OIDC, OAuth) for Commerce Cloud login, Customer Data Platform (CDP) for unified profiles, and Marketing Cloud subscriber management must all work together — the exam tests how to architect this identity layer.',
  },
]

export default function B2CSolutionArchitectExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/b2c-solution-architect-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/b2c-solution-architect-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce B2C Solution Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The B2C Solution Architect exam tests your ability to design multi-cloud consumer experiences
          spanning Commerce Cloud, Marketing Cloud, and Service Cloud. These tips focus on cross-cloud
          data architecture, customer identity, and omnichannel journey design.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What B2C Solution Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Multi-cloud B2C architecture</strong> — Designing solutions spanning B2C Commerce (storefront, order management), Marketing Cloud (email, SMS, push, Journey Builder), Service Cloud (case management, chat, knowledge), and Data Cloud (unified customer profiles).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Customer lifecycle and journeys</strong> — Mapping the B2C customer lifecycle (acquisition, purchase, retention, loyalty) to Salesforce clouds. How Marketing Cloud Journey Builder connects to B2C Commerce post-purchase flows, abandoned cart triggers, and loyalty programme integration.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Identity and data privacy</strong> — Customer identity management across channels, GDPR/CCPA compliance architecture, consent management, and how to handle right-to-erasure requests across multiple cloud data stores.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Architect Multi-Cloud Solutions</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Understand the Customer Lifecycle</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Recommend Solution and Governance</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Privacy and Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Multi-Cloud Architecture = 35%. Cross-cloud customer identity and data flow are the most critical architectural competencies.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach B2C Solution Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a B2C consumer scenario and ask which multi-cloud architecture or integration
          approach is most appropriate. Think about the customer journey holistically — from awareness
          through purchase through retention — and identify which cloud owns each stage.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For cross-cloud identity questions: B2C Commerce manages shopper identity (Shopper API, OIDC login). Marketing Cloud manages subscriber identity (subscriber key, contact key). Data Cloud creates unified profiles by matching identities. When a scenario requires recognising the same customer across Commerce and Marketing Cloud, Data Cloud identity resolution is the architectural answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For journey questions: Marketing Cloud Journey Builder is the orchestration engine for B2C lifecycle journeys. B2C Commerce triggers (purchase complete, cart abandon) fire events that Journey Builder picks up via API events or Marketing Cloud Connect. Service Cloud cases can also inject customers into journeys based on case resolution status.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data privacy questions: consent must be captured at the point of collection and stored centrally. When a customer requests erasure, data must be deleted from: B2C Commerce (customer account), Marketing Cloud (contact and data extensions), Service Cloud (case records with PII). Data Cloud should be the consent system of record — it propagates opt-out status to connected clouds.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          B2C Solution Architect requires hands-on experience with at least 2–3 of the B2C clouds:
          B2C Commerce, Marketing Cloud, and Service Cloud. Candidates who have only worked with
          one cloud will struggle with the cross-cloud integration and data architecture questions
          that make up the majority of this exam.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start B2C Solution Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/b2c-solution-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            B2C Solution Architect Practice Questions <ArrowRight className="h-4 w-4" />
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
