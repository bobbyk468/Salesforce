import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'b2c-solution-architect'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2C Solution Architect exam tips for ${RELEASE_CURRENT}: multi-cloud B2C architecture, Commerce Cloud, Marketing Cloud, Service Cloud.`

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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2C Solution Architect Exam Tips', url: '/b2c-solution-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'How hard is the B2C Solution Architect exam?',
    answer: 'B2C Solution Architect requires 65% to pass and tests multi-cloud consumer experience architecture — typically combining B2C Commerce, Marketing Cloud, Service Cloud, and Experience Cloud. Like its B2B counterpart, it rewards candidates who can design across cloud boundaries and reason about identity (single customer view, Marketing Cloud Connect, Commerce Cloud/Service Cloud integration). Most candidates need 10–12 weeks of preparation with multi-cloud implementation experience. Identity resolution and cross-cloud data consistency are the hardest topics.',
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
  {
    question: 'What concepts do most B2C Solution Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the B2C Solution Architect exam are: (1) Single vs Multi-Cloud Order Management — When OMS Is Needed; (2) Identity Resolution — Matching Contacts Across Channels Without Duplication; (3) Headless Commerce Architecture — When to Recommend It. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('b2c-solution-architect-exam-tips'),
]

export default function B2CSolutionArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2c-solution-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
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

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


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
          <p className="text-xs text-gray-600 pt-1">Multi-Cloud Architecture = 35%. Cross-cloud customer identity and data flow are the most critical architectural competencies.</p>
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


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most B2C Solution Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Single vs Multi-Cloud Order Management — When OMS Is Needed</p>
            <p className="text-sm text-gray-700">Salesforce Order Management (OMS) handles post-purchase order lifecycle: fulfilment, inventory, returns, and shipping. It is a separate product from B2C Commerce. Candidates design order processing inside B2C Commerce — the exam expects OMS for complex multi-location fulfilment, returns, and order orchestration scenarios that exceed what the commerce platform handles natively.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Identity Resolution — Matching Contacts Across Channels Without Duplication</p>
            <p className="text-sm text-gray-700">B2C Solution Architecture often involves customers existing in both Commerce Cloud and Service Cloud. Without identity resolution (matching on email or loyalty ID), the same person creates duplicate records. Exam scenarios about unified customer view expect Data Cloud or a matching/merging strategy — not just standard duplicate rules, which only prevent creation, not cross-system matching.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Headless Commerce Architecture — When to Recommend It</p>
            <p className="text-sm text-gray-700">Headless commerce separates the front-end (custom React/Next.js PWA) from the back-end (B2C Commerce APIs). It is recommended when: brand requires full UI control, performance demands exceed Storefront Reference Architecture limits, or content is managed in an external CMS. Candidates recommend headless for all scenarios — the exam expects SFRA (Storefront Reference Architecture) first unless the scenario explicitly requires custom front-end control.</p>
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
          <Link href="/b2c-commerce-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2C Commerce Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
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
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/application-architect" className="text-salesforce-blue underline">Application Architect</Link> or <Link href="/certifications/system-architect" className="text-salesforce-blue underline">System Architect</Link> next.
        </p>
      </section>
    </div>
  )
}