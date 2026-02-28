import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Tableau Business Intelligence Analyst Exam Tips (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Tableau Business Intelligence Analyst exam tips for ${RELEASE_CURRENT}: Tableau Desktop, data connections, calculations, dashboards, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/tableau-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/tableau-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Tableau Business Intelligence Analyst exam tips ${RELEASE_CURRENT}, how to pass Tableau BI Analyst, Tableau certification study guide, Tableau consultant exam tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Tableau Business Intelligence Analyst Exam Tips', url: '/tableau-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Tableau Business Intelligence Analyst exam format?',
    answer: 'The Tableau Business Intelligence Analyst exam has 45 multiple-choice questions, a 60-minute time limit, a 72% passing score, and a $250 fee. It tests Tableau Desktop skills: connecting to data, building visualisations, using calculations, and creating dashboards. It is Tableau&apos;s practitioner-level certification.',
  },
  {
    question: 'What are the highest-weight Tableau BI Analyst exam sections?',
    answer: 'Connect and Prepare Data (25%) and Explore and Analyse Data (30%) together account for 55% of the exam. Connecting to data sources, creating joins and blends, building calculated fields, using LOD expressions, and creating interactive dashboards are the most heavily tested skills.',
  },
  {
    question: 'What are LOD expressions and why are they important for this exam?',
    answer: 'LOD (Level of Detail) expressions are Tableau&apos;s most powerful calculation type — they let you compute values at a different granularity than the current view. FIXED computes at a specified dimension regardless of filters. INCLUDE adds dimensions to the current level. EXCLUDE removes dimensions from the current level. LOD questions appear on every Tableau exam and require hands-on practice to understand.',
  },
  {
    question: 'What is the difference between a join and a blend in Tableau?',
    answer: 'A join combines tables at the row level before any aggregation — like SQL joins. A blend combines data from different data sources at the aggregate level. Joins are preferred when possible because they are more reliable. Blends are used when joining at the row level is not possible (different databases, different connection types). The exam tests when each approach is appropriate.',
  },
]

export default function TableauConsultantExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/tableau-consultant-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/tableau-consultant-exam-tips' })
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
          Tableau Business Intelligence Analyst Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Tableau Business Intelligence Analyst exam tests your ability to connect data, build
          visualisations, and create interactive dashboards in Tableau Desktop. These tips focus
          on LOD expressions, calculated fields, and dashboard design that define this exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Tableau BI Analyst Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data connection and preparation</strong> — Connecting to Excel, databases, and cloud sources; joining and blending data; using data source filters; understanding extract vs. live connections; and basic data preparation in Tableau Prep or the data pane.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Calculations and analytics</strong> — Calculated fields (aggregations, string functions, date functions), table calculations (running total, percent of total, rank), LOD expressions (FIXED, INCLUDE, EXCLUDE), and sets and parameters for dynamic analysis.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Dashboard design</strong> — Building interactive dashboards with filters, actions (filter action, highlight action, URL action), layout and formatting, dashboard device designer for responsive design, and storytelling with Tableau Story Points.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Explore and Analyse Data</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Connect and Prepare Data</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Share and Publish Dashboards</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Understand Tableau Concepts</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Analyse + Connect + Share = 77%. LOD expressions and dashboard actions are tested on every Tableau exam.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Tableau BI Analyst Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an analytical requirement and ask which Tableau calculation, chart type, or
          feature achieves it. For calculation questions, identify the grain of the output — if the output
          needs to be at a different level than the view, an LOD expression is the answer.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For LOD questions: FIXED {'{'}dimension{'}'} : {'{'}measure{'}'} ignores the view&apos;s dimensions and computes at the specified level. If the question asks for &apos;average sales per customer regardless of the chart&apos;s date granularity&apos;, the answer is a FIXED LOD expression. INCLUDE adds a dimension; EXCLUDE removes one.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For table calculation questions: table calculations are applied after the aggregation — they compute on the result set, not the raw data. Running SUM, RANK, and PERCENT OF TOTAL are table calculations. They are scope-dependent (compute using the Table, Pane, or Cell) — the compute scope determines the result.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For dashboard action questions: Filter Actions pass values from one sheet to filter another. Highlight Actions highlight matching marks across sheets. URL Actions open a web page with dynamic values in the URL. When a requirement says &apos;clicking a bar should filter the other chart&apos;, the answer is a Filter Action.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          78%+ on 3 timed full mocks before booking (72% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The Tableau BI Analyst has a 72% passing score — higher than most Salesforce exams. Build 10+
          dashboards with calculated fields, LOD expressions, and dashboard actions before booking.
          LOD expressions are notoriously difficult to understand theoretically — hands-on practice
          in Tableau Desktop Public (free) is essential.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Tableau BI Analyst Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/tableau-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Tableau Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tableau-data-analyst-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Tableau Data Analyst Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
