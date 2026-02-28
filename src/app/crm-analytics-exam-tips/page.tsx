import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `CRM Analytics Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce CRM Analytics Consultant exam tips for ${RELEASE_CURRENT}: dashboards, SAQL, dataflows, Einstein Discovery, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/crm-analytics-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/crm-analytics-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `CRM Analytics Consultant exam tips ${RELEASE_CURRENT}, how to pass CRM Analytics Consultant, Salesforce Einstein Analytics certification, Tableau CRM exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CRM Analytics Consultant Exam Tips', url: '/crm-analytics-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce CRM Analytics Consultant exam format?',
    answer: 'The CRM Analytics and Einstein Discovery Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests implementation of CRM Analytics (formerly Tableau CRM / Einstein Analytics): dashboards, lenses, dataflows, recipes, SAQL queries, and Einstein Discovery predictive analytics.',
  },
  {
    question: 'What are the highest-weight CRM Analytics Consultant exam sections?',
    answer: 'Building and Customising Dashboards (28%) and Data Integration (22%) together account for 50% of the exam. Creating dashboards with steps and widgets, writing SAQL queries for custom calculations, configuring dataflows and recipes to prepare data, and setting up row-level security are the most heavily tested areas.',
  },
  {
    question: 'What is SAQL and how important is it for this exam?',
    answer: 'SAQL (Salesforce Analytics Query Language) is CRM Analytics&apos; proprietary query language for dashboard steps. It is similar to SQL but has unique CRM Analytics syntax for groupby, order, limit, and custom calculations. The exam includes questions where you must read SAQL and identify what it returns, or identify the correct SAQL for a given data requirement.',
  },
  {
    question: 'What is Einstein Discovery and what does the exam test about it?',
    answer: 'Einstein Discovery is CRM Analytics&apos; automated machine learning feature that finds patterns in data and generates predictions and recommendations. The exam tests how to set up a story (now called a model), interpret key influencers, understand prediction scores, and embed Einstein Discovery predictions back into Salesforce records using writeback.',
  },
]

export default function CRMAnalyticsExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/crm-analytics-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/crm-analytics-exam-tips' })
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
          Salesforce CRM Analytics Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The CRM Analytics Consultant exam tests your ability to build analytics solutions using CRM Analytics
          and Einstein Discovery. These tips focus on dashboard design, SAQL, dataflow configuration, and
          predictive analytics that define the highest-weight sections.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What CRM Analytics Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Dashboard design</strong> — Building lenses and dashboards with steps (query), widgets (charts, tables, numbers), filters, and bindings. Understanding the CRM Analytics dashboard designer, how steps connect to widgets, and how to use faceting for cross-filter interactions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data integration and preparation</strong> — Dataflows for connecting Salesforce data to analytics datasets, Recipes for more visual data preparation, and the augment/append/join transformation types. Row-level security (predicates) for controlling which data users can see in dashboards.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>SAQL and Einstein Discovery</strong> — Reading and writing SAQL queries for calculated fields and custom step logic. Setting up Einstein Discovery models, understanding prediction scores and key influencer output, and writing back predictions to Salesforce records.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Building and Customising Dashboards</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Integration and Dataflows</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Access</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Einstein Discovery</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Dashboards + Data Integration + Security = 68%. Row-level security and dataflow design are the most technically complex areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CRM Analytics Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an analytics requirement and ask which dashboard component, dataflow transformation,
          security approach, or SAQL expression addresses it. Trace the question from the data requirement
          back to the CRM Analytics component that delivers it.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For security questions: row-level security in CRM Analytics uses security predicates — SAQL conditions applied to every dataset query that restrict which rows a user can see. Predicates reference user attributes (user ID, role, profile). For dynamic security based on user hierarchy, use the row-level security dataset with a join in the predicate.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For dataflow vs. recipe questions: Dataflows are JSON-configured ETL processes (more flexible, code-like configuration). Recipes are visually configured in a UI (more accessible for non-developers). For complex multi-dataset joins, Dataflows may be required; for standard preparation tasks, Recipes are preferred as best practice.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For SAQL questions: read the question&apos;s output requirement first. SAQL group by determines the grain; foreach determines which measures to compute; order by and limit control the result set. When a step needs a calculated field (e.g., win rate = closed won / total), it requires a custom SAQL step — not a standard step type.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Build at least 3 complete CRM Analytics dashboards with dataflows, row-level security, and custom
          SAQL steps before booking. The SAQL and security predicate questions are very difficult to answer
          correctly without hands-on experience — theoretical study alone is insufficient.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CRM Analytics Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/crm-analytics-einstein-discovery-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CRM Analytics Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tableau-data-analyst-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Tableau Data Analyst Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
