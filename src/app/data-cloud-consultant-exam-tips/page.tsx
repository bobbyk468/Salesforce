import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Data Cloud Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Data Cloud Consultant exam tips for ${RELEASE_CURRENT}: data ingestion, identity resolution, segmentation, activation.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/data-cloud-consultant`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/data-cloud-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Data Cloud Consultant exam tips ${RELEASE_CURRENT}, how to pass Data Cloud Consultant, Salesforce CDP certification, Data Cloud exam study guide 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data Cloud Consultant Exam Tips', url: '/data-cloud-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Data Cloud Consultant exam format?',
    answer: 'The Salesforce Data Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests implementation of Salesforce Data Cloud (formerly Customer Data Platform / CDP): data ingestion, data model mapping, identity resolution, segmentation, and activation.',
  },
  {
    question: 'What are the highest-weight Data Cloud Consultant exam sections?',
    answer: 'Data Ingestion and Modelling (28%) and Segmentation and Activation (25%) together account for 53% of the exam. Understanding how to ingest data from multiple sources, map it to the Data Cloud data model, resolve customer identities across systems, and activate audiences to marketing channels are the core skills.',
  },
  {
    question: 'What is identity resolution in Data Cloud and why is it tested heavily?',
    answer: 'Identity resolution is Data Cloud&apos;s process of linking data from multiple sources to a single unified customer profile (Unified Individual). It uses match rules and reconciliation rules to merge duplicate records across data streams. Identity resolution quality directly affects segmentation accuracy — understanding how match rules work is one of the most tested topics.',
  },
  {
    question: 'What prerequisites help with the Data Cloud Consultant exam?',
    answer: 'Salesforce Administrator (ADM-201) is the recommended foundation. Marketing Cloud or Salesforce CRM experience is beneficial as Data Cloud connects to these systems. Understanding basic data concepts (data modelling, ETL, customer profiles) is important. The exam is evolving rapidly — focus on the latest Trailhead Data Cloud trails and the official exam guide.',
  },
]

export default function DataCloudConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/data-cloud-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Data Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Data Cloud Consultant exam tests your ability to implement Salesforce Data Cloud as a unified
          customer data platform. These tips focus on data ingestion, identity resolution, segmentation
          design, and activation patterns that define the highest-weight sections.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Data Cloud Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data ingestion and modelling</strong> — Connecting data sources (Marketing Cloud, CRM, web, mobile, third-party), configuring Data Stream ingestion, mapping source data to the Data Cloud data model (Subject Areas, Data Model Objects), and data category types (profile, engagement, other).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Identity resolution</strong> — Configuring match rules (exact, fuzzy), reconciliation rules (most recent, most frequent, source priority), understanding how Unified Individual profiles are built from multiple sources, and debugging identity resolution quality issues.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Segmentation and activation</strong> — Building segments using the Segment Builder (rules, filters, related objects), calculated insights for derived attributes, and activating segments to Marketing Cloud, Paid Media (Facebook, Google), and other activation targets. Refresh cadence and activation mapping.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Ingestion and Modelling</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Segmentation and Activation</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Identity Resolution</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Cloud Setup and Administration</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Ingestion + Segmentation + Identity = 75%. The end-to-end data flow from source to segment is the exam backbone.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Data Cloud Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a data integration or customer data challenge and ask which Data Cloud feature
          or configuration approach addresses it. Trace the scenario through the ingestion → modelling →
          identity resolution → segmentation → activation pipeline to identify the right stage.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: Data Cloud has three data categories — Profile (who the customer is), Engagement (what they did), and Other (supporting data). Profile data maps to DMOs in the Individual subject area. Engagement data maps to DMOs in the Engagement subject area. Mapping source fields to the correct DMO and category is a core exam skill.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For identity resolution questions: match rules define how records from different sources are linked (email match, phone match, loyalty ID match). Reconciliation rules define which value wins when two sources disagree on a field value. When match rates are low, the answer is to add more match rules — not change reconciliation rules.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For activation questions: segments activate to activation targets. Marketing Cloud activation requires a data extension target mapping — map each segment attribute to a data extension field. Paid media activation requires an identity attribute (email, phone) that the ad platform can match against. Know which identity types each activation target supports.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Data Cloud is one of Salesforce&apos;s fastest-evolving products. Focus on the current official exam
          guide and Trailhead Data Cloud Consultant trail — content from 2024 or earlier may be outdated.
          Hands-on experience configuring Data Cloud in a sandbox or free trial org is strongly recommended
          before booking.
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
          <Link href="/agentforce-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Agentforce Specialist Exam Tips</span>
          </Link>
          <Link href="/ai-associate-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">AI Associate Exam Tips</span>
          </Link>
          <Link href="/crm-analytics-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/data-cloud-vs-crm-analytics" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Cloud vs CRM Analytics</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Data Cloud Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/crm-analytics-einstein-discovery-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Analytics Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/marketing-cloud-engagement-admin" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Marketing Cloud Questions
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
