import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import ApOccupationSchema from '@/components/ApOccupationSchema'
import CredentialSchema from '@/components/CredentialSchema'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'consumer-goods-cloud-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Consumer Goods Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: retail execution, visit management, KPI tracking.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/consumer-goods-cloud-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/consumer-goods-cloud-ap-exam-tips`,
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
  { name: 'Consumer Goods Cloud AP Exam Tips', url: '/consumer-goods-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Consumer Goods Cloud Accredited Professional exam format?',
    answer: 'The Consumer Goods Cloud AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Consumer Goods Cloud: retail execution, store visit management, KPI assessment, planogram compliance, and trade promotion management for CPG (Consumer Packaged Goods) companies.',
  },
  {
    question: 'What are the highest-weight Consumer Goods Cloud AP exam sections?',
    answer: 'Retail Execution and Visit Management (35%) and KPI and Assessment Management (25%) together account for 60% of the exam. Configuring store visit templates, activity types, KPIs for measuring retail performance (share of shelf, out-of-stock rates, promotion compliance), and the mobile-first field rep experience are the most tested areas.',
  },
  {
    question: 'What is retail execution in Consumer Goods Cloud?',
    answer: 'Retail execution is the process of ensuring that products are correctly placed, stocked, and promoted in retail stores. Consumer Goods Cloud enables field sales representatives to plan and conduct store visits, assess in-store conditions (shelf availability, planogram compliance, competitive activity), capture orders, and report on execution quality. The exam tests how to configure this process end-to-end.',
  },
  {
    question: 'What is the Consumer Goods Cloud mobile experience and how is it tested?',
    answer: 'Consumer Goods Cloud has a mobile-first design for field reps who work in stores. The mobile app enables reps to view their visit schedule, see account history, execute in-store assessments (photos, counts, compliance checks), place orders, and report KPIs from their phone. The exam tests how to configure the mobile app components, activity types, and data sync settings for field rep productivity.',
  },
  {
    question: 'What concepts do most Consumer Goods Cloud candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Consumer Goods Cloud exam are: (1) Retail Execution Visits vs Service Appointments — Different Objects in CGC; (2) Assessments vs Surveys — Purpose-Built Retail Audit Tool; (3) My Route Planning — Optimisation Is Not Automatic. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('consumer-goods-cloud-ap-exam-tips'),
]

export default function ConsumerGoodsCloudApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/consumer-goods-cloud-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="consumer-goods-cloud-ap"
        certName="Consumer Goods Cloud AP"
        description={pageDescription}
        pageUrl="/consumer-goods-cloud-ap-exam-tips"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Consumer Goods Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Consumer Goods Cloud AP exam validates your ability to implement Salesforce CGC for
          CPG companies. These tips focus on retail execution, visit management, KPI assessment,
          and the mobile field rep experience that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">At a Glance: What Consumer Goods Cloud AP Covers</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Retail execution and visit management</strong> — Configuring visit plans and recurring visit schedules for field reps, setting up activity types (shelf audit, planogram check, order capture, competitive pricing survey), territory management for field rep coverage, and the visit execution workflow in the CGC mobile app.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>KPI and assessment management</strong> — Configuring KPIs for measuring retail execution quality (share of shelf, out-of-stock percentage, promotion display compliance, facings count), Assessment Tasks with pass/fail or numeric scoring, photo capture tasks for visual evidence, and how KPI results roll up for manager visibility and trend analysis.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Account and order management</strong> — Account hierarchies (national account → regional → store level), trade promotion planning and execution tracking, order capture in the mobile app, and integrating CGC with backend ERP systems for order fulfilment and inventory data.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where the Exam Weight Falls</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Retail Execution and Visit Management</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">KPI and Assessment Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Account and Order Management</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Mobile and Platform Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Retail Execution + KPI = 60% — understanding the field rep’s in-store workflow is essential.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CGC AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a CPG field sales scenario and ask which Consumer Goods Cloud feature
          or configuration achieves it. Think from the field rep and sales manager perspective —
          what do they need to see and do during a store visit?
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For visit planning questions: visit plans define which stores a rep visits and how frequently. Activity types define what the rep does during each visit (shelf check, order capture, competitor pricing). When a scenario says ’the rep must photograph the shelf and count the number of facings for each SKU’, configure a Photo Capture activity type and a Numeric KPI assessment task — not a custom note or attachment field.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For KPI questions: KPIs are measured outcomes from visit assessments. An out-of-stock KPI measures whether a product is available on the shelf (Pass/Fail). A share of shelf KPI measures the percentage of shelf space (numeric). When a manager asks ’which of my reps’ stores have the most out-of-stocks’, the answer is a KPI dashboard summarising the out-of-stock assessment results across all visits.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For account hierarchy questions: national accounts (Walmart HQ) have regional offices and individual stores below them. Trade promotions are managed at the national account level but measured at the store level. When a scenario says ’apply a promotional price to all 500 Walmart stores nationwide’, configure the promotion at the national account level — not store by store.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Readiness Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Consumer Goods Cloud AP is for implementation teams working with CPG companies. Domain
          knowledge of the CPG industry (retail execution, trade promotion management, field force
          effectiveness) significantly helps with scenario interpretation. The Salesforce Consumer
          Goods Cloud Trailmix is the primary study resource.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Consumer Goods Cloud Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Retail Execution Visits vs Service Appointments — Different Objects in CGC</p>
            <p className="text-sm text-gray-700">Consumer Goods Cloud uses the Visit object (not Service Appointments) for retail execution. Visits are linked to Accounts (retail stores), have planned and actual dates, and are assigned to field representatives. Service Appointments are a Field Service Lightning concept. Candidates conflate these because both involve scheduling field staff — the exam expects Visit-based logic for retail execution scenarios.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Assessments vs Surveys — Purpose-Built Retail Audit Tool</p>
            <p className="text-sm text-gray-700">Consumer Goods Cloud includes purpose-built Assessment Tasks for retail audits (shelf compliance, planogram adherence, product availability). These are not the same as Salesforce Surveys (customer feedback tool). Exam scenarios about store audits and compliance checks expect Assessment Task configuration — not Surveys or custom LWC components.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. My Route Planning — Optimisation Is Not Automatic</p>
            <p className="text-sm text-gray-700">My Route feature in Consumer Goods Cloud helps field reps plan their store visits for the day. Route optimisation (shortest path, priority-based sequencing) requires configuration of visit priority rules and territory setup. Candidates assume optimisation is on by default — the exam tests configuration of the underlying Visit Plan and Priority Score fields that drive the route.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">More Exam-Prep Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/consumer-goods-tpm-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consumer Goods TPM AP Exam Tips</span>
          </Link>
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Consumer Goods Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/consumer-goods-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CGC AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/manufacturing-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Manufacturing Cloud AP Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}