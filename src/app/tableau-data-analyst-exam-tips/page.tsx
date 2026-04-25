import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'tableau-data-analyst'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Tableau Data Analyst exam tips (${RELEASE_CURRENT}): 4-week study plan, LOD expressions, context filters, and exam strategies. Start free now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/tableau-data-analyst-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/tableau-data-analyst-exam-tips`,
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
  { name: 'Tableau Data Analyst', url: '/certifications/tableau-data-analyst' },
  { name: 'Tableau Data Analyst Exam Tips', url: '/tableau-data-analyst-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Tableau Data Analyst exam format?',
    answer: 'The Salesforce Certified Tableau Data Analyst exam has 45 questions, a 75-minute time limit, a 62% passing score, and a $250 fee.',
  },
  {
    question: 'What are the highest-weight Tableau Data Analyst exam topics?',
    answer: 'Connect to and transform data (27%) and Create calculated fields and LOD expressions (15%) are the top sections. Hands-on Tableau Desktop skills are tested throughout.',
  },
  {
    question: 'How hard is the Tableau Data Analyst exam?',
    answer: 'Moderately difficult. The exam tests practical Tableau Desktop skills, not just theory. Candidates who build dashboards with real datasets consistently outperform those who study only documentation.',
  },
  {
    question: 'What is the best way to prepare for the Tableau Data Analyst exam?',
    answer: "Practice with real datasets, master LOD expressions and context filters, and take timed practice tests. The free Tableau Public app and Tableau's sample superstore dataset are useful for hands-on prep.",
  },
  {
    question: 'What concepts do most Tableau Data Analyst candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Tableau Data Analyst exam are: (1) Dimensions vs Measures — Blue vs Green Pills Affect How Data Is Aggregated; (2) LOD Expressions — FIXED vs INCLUDE vs EXCLUDE; (3) Filters Order of Operations — Data Source Filters Run First, Table Calculations Last. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('tableau-data-analyst-exam-tips'),
]

export default function TableauDataAnalystExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/tableau-data-analyst-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certified Tableau Data Analyst Exam Tips ({RELEASE_CURRENT}): How to Pass First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          The Tableau Data Analyst exam tests data connection, LOD expressions, context filters, parameters, dashboard
          actions, and visualization best practices. These tips show you where to focus and how to handle the
          calculation-heavy scenario questions.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="tableau-data-analyst-study-guide" certName="Tableau Data Analyst" />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass Tableau Data Analyst</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The exam has 45 questions in 90 minutes. Passing score is approximately 70%. Aim for 80%+ on full mocks before booking.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />LOD expressions (FIXED, INCLUDE, EXCLUDE) and table calculations appear frequently — understand the difference between them clearly.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Build real dashboards in Tableau Desktop (free trial or Tableau Public). The exam rewards practical familiarity with the UI.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Context filters and filter order are a common trap — know when a Top N filter needs a context filter and why.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week Tableau Data Analyst Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Data Connection &amp; Preparation — live vs extract connections, data source filters, joins vs blending, unions, pivoting, and data types. Know when to use extract (.hyper) for performance vs live for real-time data.</p>
          <p><strong>Week 2:</strong> Calculations &amp; LOD Expressions — basic calculated fields, date functions, string functions, IF/IIF/CASE logic. Then LOD: FIXED (ignores view dimensions), INCLUDE (adds granularity), EXCLUDE (removes granularity). Table calculations (RUNNING_SUM, WINDOW_AVG, RANK, LAST) run on the result set, not the database.</p>
          <p><strong>Week 3:</strong> Visualization Design &amp; Dashboards — chart selection (bar, line, scatter, histogram, treemap, Gantt), dual-axis charts, parameters and parameter actions, filter actions, highlight actions, URL actions, dashboard layout and device targeting.</p>
          <p><strong>Week 4:</strong> Context filters, advanced analysis (reference lines, trend lines, forecasting), stories, and full mock exams targeting 80%+. Revise LOD and context filter scenarios specifically before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Tableau Data Analyst Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          The exam presents analysis scenarios and asks which Tableau feature, calculation type, or configuration
          is most appropriate. The most common traps are confusing LOD types and misunderstanding filter order.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>LOD questions:</strong> Use FIXED when you need an aggregate at a declared dimension regardless of the view (e.g., revenue per customer across any view). Use INCLUDE when you need finer granularity than the view (e.g., average order size per customer when the view shows totals). Use EXCLUDE when you need coarser granularity (e.g., national average on a regional view).</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Context filter questions:</strong> Without context, Top N runs across all data before other filters apply. Add a filter to context when you need Top N to run on an already-filtered subset. Filter order: extract &rarr; data source &rarr; context &rarr; dimension &rarr; measure.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Table calc vs LOD questions:</strong> Table calculations operate on data already in the view — they cannot change which rows are returned. LOD expressions run at query time and affect which rows come back. Use table calcs for running totals, percent of total, and period-over-period comparisons within existing results.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Parameter questions:</strong> Parameters are user-controlled variables (slider, dropdown, etc.) — they do not filter data by themselves. Always pair a parameter with a calculated field or reference line to make it dynamic. Parameter Actions (Tableau 2019.2+) allow clicking a mark to set a parameter value.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Live vs extract:</strong> Choose live when data must be current in real time. Choose extract when performance is priority and a scheduled refresh cadence is acceptable. Extracts can be filtered at creation time to reduce size.</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use this minimum benchmark before scheduling your Tableau Data Analyst exam:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks (45 questions / 90 minutes each)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The official passing score is approximately 70%. Targeting 80%+ on mocks gives you a 10-point buffer
          that accounts for unfamiliar LOD or table calculation scenarios on exam day.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Tableau Data Analyst Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Dimensions vs Measures — Blue vs Green Pills Affect How Data Is Aggregated</p>
            <p className="text-sm text-gray-700">Dimensions are categorical fields (name, region, date — shown as blue pills) that slice data. Measures are numerical fields (sales, count, profit — shown as green pills) that are aggregated. Dragging a dimension to the Rows shelf creates headers. Dragging a measure creates an axis. Candidates put Measures on Rows without understanding that Tableau will aggregate them — know that converting a measure to a Discrete dimension creates header rows, not an axis.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. LOD Expressions — FIXED vs INCLUDE vs EXCLUDE</p>
            <p className="text-sm text-gray-700">FIXED calculates a value at a specified dimension level regardless of what is in the view. INCLUDE adds dimensions to the calculation beyond what is in the view. EXCLUDE removes dimensions from the calculation. Candidates use FIXED for all LOD calculations — the exam tests which LOD expression to use: computing revenue per customer independent of view filters = FIXED; computing average per sub-category when only category is in the view = INCLUDE.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Filters Order of Operations — Data Source Filters Run First, Table Calculations Last</p>
            <p className="text-sm text-gray-700">Tableau applies filters in this order: Extract → Data Source → Context → Sets → Dimension Filters → Measure Filters → Table Calculations. A Measure Filter applied before aggregation behaves differently than one applied after. Candidates apply Measure Filters expecting them to remove rows before aggregation — Measure Filters run after aggregation by default and filter out aggregated results, not individual rows.</p>
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/tableau-data-analyst-study-guide" className="text-sm text-salesforce-dark hover:underline font-medium">→ Tableau Data Analyst full study guide</Link></li>
        </ul>
      </div>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real Tableau Data Analyst practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/tableau-data-analyst"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start Tableau Data Analyst Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/tableau-consultant" className="text-salesforce-blue underline">Tableau Consultant</Link> or <Link href="/certifications/tableau-data-analyst" className="text-salesforce-blue underline">Tableau Data Analyst</Link> next.
        </p>
      </section>
    </div>
  )
}