import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'manufacturing-cloud-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Manufacturing Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: sales agreements, account-based forecasting, partner management.`

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
    question: 'How hard is the Manufacturing Cloud Accredited Professional exam?',
    answer: 'Manufacturing Cloud AP is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150). It tests Manufacturing Cloud&apos;s specialised capabilities: account-based forecasting, sales agreements, rebate management, and the Manufacturing Cloud data model for complex B2B relationships. Practitioners with hands-on Manufacturing Cloud experience typically pass in 3–4 weeks. Sales agreements — including agreement terms, actuals calculation, and renewal workflows — are the most tested and most commonly missed topic.',
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
  {
    question: 'What concepts do most Manufacturing Cloud candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Manufacturing Cloud exam are: (1) Sales Agreements vs Opportunities — Recurring Revenue vs One-Time Sales; (2) Account Forecasting vs Opportunity Forecasting — Two Different Forecast Models; (3) Run Rate vs Planned Volume — Baseline vs Committed. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('manufacturing-cloud-ap-exam-tips'),
]

export default function ManufacturingCloudApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/manufacturing-cloud-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
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

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Manufacturing Cloud Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Sales Agreements vs Opportunities — Recurring Revenue vs One-Time Sales</p>
            <p className="text-sm text-gray-700">Sales Agreements are long-term contracts between manufacturers and distributors/dealers with committed volumes and pricing over a period. Opportunities are one-time sales pipeline records. Candidates use Opportunities for tracking annual volume commitments — the exam expects Sales Agreements for recurring contract-based revenue with planned vs actual volume tracking.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Account Forecasting vs Opportunity Forecasting — Two Different Forecast Models</p>
            <p className="text-sm text-gray-700">Account Forecasting in Manufacturing Cloud generates period-based forecasts for accounts based on historical actuals and planned volumes from Sales Agreements. Standard Opportunity Forecasting rolls up pipeline-stage-weighted opportunities. These are separate systems. Candidates combine them — the exam expects Account Forecasting for manufacturing account-level volume predictions.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Run Rate vs Planned Volume — Baseline vs Committed</p>
            <p className="text-sm text-gray-700">Run Rate is the annualised volume based on recent actual sales (baseline projection). Planned Volume is the committed amount in a Sales Agreement. Candidates use Run Rate as the authoritative forecast — the exam expects Planned Volume from Sales Agreements as the primary committed forecast, with Run Rate as a comparison/validation signal.</p>
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
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/revenue-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Revenue Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
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
        <p className="text-xs text-gray-500 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}