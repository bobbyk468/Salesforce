import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Financial Services Cloud AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Financial Services Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: FSC data model, financial accounts, client management, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/financial-services-cloud-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/financial-services-cloud-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Financial Services Cloud AP exam tips ${RELEASE_CURRENT}, how to pass FSC Accredited Professional, Salesforce FSC certification, financial services Salesforce exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Financial Services Cloud AP Exam Tips', url: '/financial-services-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Financial Services Cloud Accredited Professional exam format?',
    answer: 'The Financial Services Cloud AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Financial Services Cloud (FSC): the FSC data model, client and household management, financial account configuration, and wealth management or insurance use cases.',
  },
  {
    question: 'What are the highest-weight FSC AP exam sections?',
    answer: 'FSC Data Model and Client Management (30%) and Financial Account Management (25%) together account for 55% of the exam. Understanding FSC&apos;s person account model, household accounts, financial accounts (bank accounts, investment portfolios, insurance policies), and the relationship between clients and their financial holdings are the most tested areas.',
  },
  {
    question: 'What is the FSC household model and why is it important for the exam?',
    answer: 'FSC uses a household account model where multiple clients (person accounts) are grouped into a household (account). Financial advisors can view all household members&apos; financial accounts, life events, and relationship maps from a single household view. This is fundamental to FSC — the exam tests how to configure household relationships, manage primary household contacts, and use the household rollup summaries.',
  },
  {
    question: 'What financial industry knowledge helps with the FSC AP exam?',
    answer: 'Understanding financial services business processes — wealth management, retail banking, insurance, or mortgage lending — helps map scenarios to FSC features. Knowledge of financial concepts like AUM (assets under management), financial goals, life events (marriage, retirement, college funding), and how financial advisors manage client relationships is as important as knowing the FSC configuration.',
  },
]

export default function FinancialServicesCloudApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/financial-services-cloud-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/financial-services-cloud-ap-exam-tips' })
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
          Salesforce Financial Services Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Financial Services Cloud AP exam validates your ability to implement Salesforce FSC for
          wealth management, banking, and insurance organisations. These tips focus on the FSC data model,
          client management, and financial account configuration that define this accreditation.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What FSC AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>FSC data model and client management</strong> — Person accounts for individual clients, household accounts grouping family members, the FSC relationship map (showing connections between clients, accounts, and advisors), and life events (marriage, retirement, inheritance) that trigger advisor outreach and financial plan reviews.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Financial account management</strong> — FSC financial account types (bank accounts, investment accounts, insurance policies, loans), financial holdings (individual securities within an investment account), financial account roles (owner, joint owner, beneficiary), and how financial data rolls up to household-level views for the advisor.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advisor productivity and goals</strong> — Action plans for standardising client outreach workflows, financial goals (retirement, education, home purchase) with target values and timelines, referral management for cross-selling between advisors, and the FSC Action Launcher for quick access to common advisor tasks.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">FSC Data Model and Client Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Financial Account Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Advisor Productivity Features</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Compliance and Security</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. The FSC data model (person accounts, households, financial accounts) is the foundation — understand it deeply.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach FSC AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a financial services scenario and ask which FSC feature, object, or
          configuration addresses it. Always use native FSC objects — not generic Salesforce
          custom objects or opportunities for financial accounts.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For household questions: when a married couple are both clients, create them as two person accounts linked to one household account. The household account shows the combined financial picture for the advisor. The primary household contact is the main point of contact. When a scenario says &apos;show the advisor a combined view of both spouses&apos; investments&apos;, the answer is the household rollup view.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For life event questions: life events trigger action plans for advisor follow-up. When a client has a baby, gets married, or retires, FSC can automatically create tasks for the advisor to schedule a financial review. Life events are linked to the client (person account) and can trigger reminders based on the event date.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For financial account questions: a Financial Account in FSC is a top-level account (like a brokerage account). Financial Holdings are the individual assets within that account (individual stocks, bonds, funds). Financial Account Roles define who has ownership or beneficiary rights. When a scenario asks about &apos;tracking individual securities within a portfolio&apos;, the answer is Financial Holdings — not Financial Accounts.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          FSC AP is designed for implementation partners and Salesforce employees delivering Financial
          Services Cloud projects. The official Trailhead Financial Services Cloud Basics trail and the
          FSC implementation guide are the primary study resources. Hands-on experience configuring
          FSC in a sandbox org is strongly recommended.
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

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start FSC AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/financial-services-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            FSC AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/health-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Health Cloud AP Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
