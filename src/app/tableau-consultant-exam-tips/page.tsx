import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'tableau-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Tableau Business Intelligence Analyst exam tips for ${RELEASE_CURRENT}: Tableau Desktop, data connections, calculations, dashboards.`

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
  {
    question: 'What concepts do most Tableau Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Tableau Consultant exam are: (1) Blending vs Joining — Same Tool, Different Data Architecture; (2) Calculated Fields vs Table Calculations — Where Computation Happens; (3) Context Filters vs Regular Filters — Execution Order Matters. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('tableau-consultant-exam-tips'),
]

export default function TableauConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/tableau-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
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

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">45</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">120 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">70%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$250</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


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


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Tableau Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Blending vs Joining — Same Tool, Different Data Architecture</p>
            <p className="text-sm text-gray-700">Joins combine data from multiple tables before querying (done at the data source level, creating a single combined row set). Data Blending queries each data source separately and combines results in the view using a linking field — used when data sources cannot be joined (different databases, granularity mismatch). Candidates use Joins for all multi-source scenarios — the exam expects Blending when joining is not possible or appropriate.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Calculated Fields vs Table Calculations — Where Computation Happens</p>
            <p className="text-sm text-gray-700">Calculated Fields are computed at the data source level (pre-aggregation) or during aggregation — they are persistent and can be reused across views. Table Calculations run after aggregation, on the data already displayed in the view (e.g., Running Total, Percent of Total, Rank). Candidates build Running Total using a Calculated Field — that is a Table Calculation, not a row-level formula.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Context Filters vs Regular Filters — Execution Order Matters</p>
            <p className="text-sm text-gray-700">Regular Filters each query the entire data source independently, which can be slow for complex views. Context Filters create a temporary table of filtered data that all other filters then apply to — they improve performance when multiple filters are applied to a large data source. Candidates add more Regular Filters to improve performance — the exam expects the highest-selectivity filter to be promoted to Context Filter.</p>
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
          <Link href="/tableau-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Architect Exam Tips</span>
          </Link>
          <Link href="/tableau-data-analyst-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Data Analyst Exam Tips</span>
          </Link>
          <Link href="/crm-analytics-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
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