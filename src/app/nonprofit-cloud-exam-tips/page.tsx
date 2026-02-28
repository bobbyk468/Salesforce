import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Nonprofit Cloud Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Nonprofit Cloud Consultant exam tips for ${RELEASE_CURRENT}: NPC data model, fundraising, programme management, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/nonprofit-cloud-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/nonprofit-cloud-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Nonprofit Cloud Consultant exam tips ${RELEASE_CURRENT}, how to pass Nonprofit Cloud Consultant, Salesforce NPC certification, Nonprofit Cloud exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Nonprofit Cloud Consultant Exam Tips', url: '/nonprofit-cloud-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Nonprofit Cloud Consultant exam format?',
    answer: 'The Salesforce Nonprofit Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests implementation of Salesforce Nonprofit Cloud (NPC) — the next-generation nonprofit platform replacing NPSP — including fundraising, programme management, and outcome tracking.',
  },
  {
    question: 'What is the difference between Nonprofit Cloud (NPC) and NPSP?',
    answer: 'NPSP (Nonprofit Success Pack) is the legacy managed package for nonprofits. Nonprofit Cloud (NPC) is Salesforce&apos;s next-generation nonprofit platform built natively on Salesforce — it replaces NPSP with a more modern data model and deeper integration with Salesforce core features. The Nonprofit Cloud Consultant exam focuses on NPC; the NPSP Consultant exam focuses on the legacy NPSP package.',
  },
  {
    question: 'What are the highest-weight Nonprofit Cloud Consultant exam sections?',
    answer: 'Fundraising (30%) and Programme Management (25%) together account for 55% of the exam. Understanding gift transactions, donation processing, recurring giving, campaign management, programme delivery, and outcome measurement are the most heavily tested areas.',
  },
  {
    question: 'What nonprofit industry knowledge helps with this exam?',
    answer: 'Understanding how nonprofits operate — donation processing, grant management, volunteer coordination, beneficiary tracking, and impact measurement — is as important as knowing Salesforce configuration. Candidates with nonprofit sector experience perform better because the exam tests whether you can map nonprofit business processes to the NPC data model correctly.',
  },
]

export default function NonprofitCloudExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/nonprofit-cloud-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/nonprofit-cloud-exam-tips' })
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
          Salesforce Nonprofit Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Nonprofit Cloud Consultant exam tests your ability to implement Salesforce Nonprofit Cloud (NPC)
          for charitable organisations. These tips focus on the NPC data model, fundraising configuration,
          and programme management that define this exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Nonprofit Cloud Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Fundraising and gift management</strong> — Gift transactions, gift commitments (recurring giving), payment schedules, soft credits, campaign management, and how NPC&apos;s fundraising data model relates to contacts, accounts, and opportunities.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Programme management</strong> — Programme delivery tracking, service delivery records, beneficiary management, and outcome measurement. Understanding how programme data supports impact reporting for grant reporting and donor communications.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>NPC data model and configuration</strong> — NPC&apos;s household model, relationship management between constituents, how NPC differs from NPSP, Salesforce Flows for nonprofit automation, and the Nonprofit Cloud setup and configuration process.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Fundraising</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Programme Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">NPC Data Model and Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Reporting and Impact Measurement</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Fundraising + Programme + NPC Model = 77%. Understand the NPC data model deeply before attempting mock tests.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Nonprofit Cloud Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a nonprofit operational requirement and ask which NPC feature, data model object,
          or configuration approach addresses it. The correct answer always uses native NPC functionality —
          not NPSP patterns or custom Salesforce objects.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For gift management questions: in NPC, a Gift Transaction records a single gift event. A Gift Commitment tracks recurring giving pledges with a payment schedule. Soft Credits attribute a gift to multiple people (e.g., a couple). Know which object handles each scenario — they are different from NPSP&apos;s opportunity-based approach.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For programme questions: Service Deliveries record when a beneficiary received a service. Programme Engagements link a Contact to a Programme with a stage and start/end date. Outcome data flows from Service Delivery records to impact dashboards. Map the nonprofit&apos;s workflow to these objects.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For NPC vs. NPSP questions: NPC uses a different data model — Gift Transaction (not Opportunity for donations), Programme Engagement (not custom objects). When a question describes a scenario that could be solved by either, the NPC approach is always the correct answer for this exam.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Nonprofit Cloud (NPC) is Salesforce&apos;s newest nonprofit platform and exam content reflects the
          current NPC release. Candidates familiar with NPSP should study the NPC data model differences
          carefully — NPC uses different objects and terminology for many familiar nonprofit functions.
          Focus on the official Trailhead Nonprofit Cloud trail for current content.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Nonprofit Cloud Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/nonprofit-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Nonprofit Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/nonprofit-success-pack-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            NPSP Consultant Questions
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
