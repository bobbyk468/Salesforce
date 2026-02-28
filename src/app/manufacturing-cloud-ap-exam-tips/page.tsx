import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Manufacturing Cloud AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Manufacturing Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: sales agreements, account-based forecasting, partner management, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/manufacturing-cloud-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/manufacturing-cloud-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Manufacturing Cloud AP exam tips ${RELEASE_CURRENT}, how to pass Manufacturing Cloud Accredited Professional, Salesforce manufacturing certification, sales agreements exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Manufacturing Cloud AP Exam Tips', url: '/manufacturing-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Manufacturing Cloud Accredited Professional exam format?',
    answer: 'The Manufacturing Cloud AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Manufacturing Cloud: sales agreements, account-based forecasting, rebate management, and partner ecosystem management for discrete and process manufacturing companies.',
  },
  {
    question: 'What are the highest-weight Manufacturing Cloud AP exam sections?',
    answer: 'Sales Agreements (30%) and Account-Based Forecasting (25%) together account for 55% of the exam. Sales agreements replace traditional opportunities for long-term manufacturing contracts with volume commitments and planned revenue schedules. Account-based forecasting provides bottom-up visibility into demand across the customer base.',
  },
  {
    question: 'What is a Sales Agreement in Manufacturing Cloud?',
    answer: 'A Sales Agreement is Manufacturing Cloud&apos;s core object for managing long-term customer contracts — replacing the standard opportunity for annualised revenue tracking. Sales agreements track planned vs. actual quantities and revenue over the agreement period (typically monthly or quarterly). They allow manufacturers to see which customers are over or under their agreed purchase volumes and trigger account manager actions.',
  },
  {
    question: 'How does Manufacturing Cloud differ from standard Sales Cloud for the exam?',
    answer: 'Manufacturing Cloud adds industry-specific capabilities on top of Sales Cloud: Sales Agreements for contract revenue tracking, Account-Based Forecasting for bottom-up demand planning, Rebate Management for tracking customer incentive programmes, and Partner Visit Management for field rep activities. The exam tests these manufacturing-specific features rather than standard Sales Cloud configuration.',
  },
]

export default function ManufacturingCloudApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/manufacturing-cloud-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/manufacturing-cloud-ap-exam-tips' })
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
          Salesforce Manufacturing Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Manufacturing Cloud AP exam validates your ability to implement Salesforce Manufacturing
          Cloud for discrete and process manufacturers. These tips focus on sales agreements,
          account-based forecasting, and rebate management that define this accreditation.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Manufacturing Cloud AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Sales agreements</strong> — Manufacturing Cloud&apos;s Sales Agreement object for managing long-term customer contracts: planned quantities and revenue by period, actual vs. planned variance tracking, agreement actuals sync from orders or invoices, and how sales agreements replace opportunities for contract-based revenue management.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Account-based forecasting</strong> — Bottom-up demand forecasting using account-level data: configuring forecast periods, forecast metrics (quantity, revenue), rolling up forecasts from agreements and opportunities, and how account managers use ABF to review and adjust their account-level demand predictions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Rebate management and partner network</strong> — Configuring rebate programmes (volume-based, revenue-based rebate thresholds), tracking customer eligibility and accruals, managing the partner ecosystem through Experience Cloud, and Partner Visit Management for field sales rep activities at customer sites.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Sales Agreements</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Account-Based Forecasting</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Rebate Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Partner Network Management</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Sales Agreements + ABF = 55% — these two topics are the core of Manufacturing Cloud.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Manufacturing Cloud AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a manufacturing sales or planning scenario and ask which Manufacturing
          Cloud feature addresses it. Distinguish between what goes in Sales Agreements (contracted
          volumes) vs. Opportunities (new deals) vs. Account-Based Forecasting (demand planning).
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Sales Agreement questions: use Sales Agreements for existing customers with annual purchase commitments — not for new business opportunities. A Sales Agreement has planned periods (monthly/quarterly buckets) with planned revenue and quantity. Actuals sync from completed orders. When a scenario says &apos;track whether a key customer is buying their contracted volume&apos;, the answer is Sales Agreements with actuals.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ABF questions: Account-Based Forecasting rolls up data from Sales Agreements (contracted revenue) and Opportunities (new pipeline) to give a complete account-level demand picture. Account managers can adjust forecasts based on their account knowledge. When a question says &apos;give the account manager a single view of total expected revenue from this account&apos;, the answer is Account-Based Forecasting.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For rebate questions: rebate programmes have eligibility criteria (customer must be in a specific tier or region), accrual rules (earn X% rebate for every $1,000 in purchases), and payout schedules (paid quarterly or annually). When a question describes &apos;automatically calculate how much rebate each customer has earned&apos;, Rebate Management is the answer — not a custom Flow or Apex.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Manufacturing Cloud AP is for implementation partners and Salesforce employees delivering
          Manufacturing Cloud projects. Candidates with manufacturing industry experience (understanding
          of contract manufacturing, B2B distribution, or OEM relationships) perform better because
          the exam tests business process understanding alongside product configuration.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Manufacturing Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/manufacturing-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Manufacturing Cloud AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/consumer-goods-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consumer Goods Cloud AP
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
