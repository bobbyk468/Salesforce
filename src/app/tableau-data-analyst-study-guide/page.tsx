import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'tableau-data-analyst'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Tableau Data Analyst study guide: 5 sections, LOD, dashboard tips, 8-week plan. 75% passing, $250. Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/tableau-data-analyst-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/tableau-data-analyst-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Tableau Data Analyst Study Guide', url: '/tableau-data-analyst-study-guide' },
]

const examSections = [
  { name: 'Explore & Analyze Data', weight: 28, note: 'Calculated fields (string, date, number, logical), Level of Detail (LOD) expressions (FIXED, INCLUDE, EXCLUDE), table calculations (running total, percent of total, moving average), reference lines, trend lines, and statistical summaries.' },
  { name: 'Create Charts & Dashboards', weight: 25, note: 'Chart type selection for different data relationships (bar, line, scatter, map, heat map, treemap, bullet chart). Dashboard layouts, actions (filter, highlight, URL), device designer, and storytelling with Story Points.' },
  { name: 'Connect to & Transform Data', weight: 20, note: 'Connecting to data sources (Excel, CSV, databases, Salesforce, Google Sheets). Data interpreter, pivoting data, splitting fields, data types, joins vs unions vs relationships. Tableau Prep Builder basics for data cleaning.' },
  { name: 'Publish & Share Content', weight: 20, note: 'Publishing workbooks and data sources to Tableau Cloud/Server. Permissions management, subscriptions, data-driven alerts, embedding dashboards, and maintaining published content.' },
  { name: 'Analytics Framework', weight: 7, note: 'Analytics workflow: define business question → identify data → build views → validate insights → share findings. Data literacy concepts, analytics best practices, and visualisation design principles.' },
]

const faqItems = [
  {
    question: 'What is the Tableau Certified Data Analyst certification?',
    answer: 'The Tableau Certified Data Analyst certification validates skills in connecting to data, building interactive visualisations and dashboards, applying calculated fields and LOD expressions, and publishing content to Tableau Cloud/Server. The exam has 55 questions, 120 minutes, a 75% passing score (higher than most Salesforce exams), and a $250 fee. A Tableau Desktop Foundations or Desktop Specialist certification is a recommended (not required) prerequisite.',
  },
  {
    question: 'What are LOD expressions in Tableau and why are they important?',
    answer: 'Level of Detail (LOD) expressions control the granularity at which calculations are computed, independent of the view level of detail. FIXED computes at a specified dimension regardless of what is in the view. INCLUDE adds dimensions to the view level. EXCLUDE removes dimensions from the view level. LOD expressions are one of the most commonly tested and most misunderstood areas in the exam — understanding when to use FIXED vs a regular aggregation is critical.',
  },
  {
    question: 'What is the passing score for the Tableau Data Analyst exam?',
    answer: 'The Tableau Certified Data Analyst requires a 75% passing score — significantly higher than the ~65% required for most Salesforce certifications. With 55 questions, this means you need to answer approximately 41+ questions correctly. Plan for a more demanding exam than typical Salesforce credentials and aim for 85%+ on practice exams before scheduling.',
  },
  {
    question: 'What is the difference between joins, unions, and relationships in Tableau?',
    answer: 'Joins combine columns from two tables into a single, flat table (LEFT, RIGHT, INNER, FULL OUTER). Unions combine rows from two tables with the same structure (stacking records). Relationships are the default data modelling approach in Tableau — they create flexible, context-aware connections between tables without pre-joining, preserving granularity for each table. Relationships are preferred for most use cases; joins are used when you need explicit column-level combination.',
  },
  {
    question: 'How long should I study for the Tableau Data Analyst exam?',
    answer: 'Plan for 8–10 weeks with 10–15 hours per week. Tableau Desktop hands-on practice is essential — the exam presents data scenarios and asks which visualisation or calculation approach to use. Download Tableau Public (free) or get a Tableau trial, and build 15–20 real dashboards across different chart types and data sources. LOD expressions require specific practice — they are logical but counterintuitive until you have worked through many examples.',
  },
]

export default function TableauDataAnalystStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/tableau-data-analyst-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Tableau Certified Data Analyst Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Tableau Data Analyst exam — LOD expressions, table calculations, dashboard design, data connections, and free practice questions.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="tableau-data-analyst-exam-tips" certName="Tableau Data Analyst" />
      <CertInsightBlock certSlug="tableau-data-analyst" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '55' },
          { label: 'Time Limit', value: '120 min' },
          { label: 'Passing Score', value: '75%' },
          { label: 'Exam Fee', value: '$250' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        <strong>Higher passing score:</strong> 75% required — more demanding than typical Salesforce certs (65%). Aim for 85%+ on practice exams before scheduling.
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.5}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Tableau fundamentals — connect to data (Excel, CSV, database), understand data types, rows vs columns, and Tableau&apos;s shelves (Rows, Columns, Marks, Filters).' },
            { week: 'Week 2', focus: 'Chart types — build bar charts, line charts, scatter plots, maps (geographic roles), heat maps, treemaps, and bullet charts. Know when to use each for specific data relationships.' },
            { week: 'Week 3', focus: 'Calculated fields — string, date, number, and logical calculations. Aggregate vs row-level calculations. IF/CASE/IIF/IFNULL functions. ZN() for null handling.' },
            { week: 'Week 4', focus: 'LOD expressions — FIXED, INCLUDE, EXCLUDE. Work through 10+ LOD examples. Practice business scenarios: "total sales per customer regardless of region filter" → FIXED LOD.' },
            { week: 'Week 5', focus: 'Table calculations — running total, percent of total, difference from, moving average. WINDOW_SUM vs RUNNING_SUM. Understanding compute using settings.' },
            { week: 'Week 6', focus: 'Dashboards — layout containers (horizontal vs vertical), dashboard actions (filter, highlight, URL, Set, Parameter), device designer, accessibility.' },
            { week: 'Week 7', focus: 'Data connections — joins vs unions vs relationships. Tableau Prep Builder basics. Publishing data sources and workbooks. Permissions, subscriptions, data-driven alerts.' },
            { week: 'Week 8', focus: 'Full mock exams under 120-minute time pressure. Focus on LOD scenario questions. Review any chart type or calculation area below 80%.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>LOD selection framework:</strong> Need a calculation independent of view filters? Use FIXED. Need to include an additional dimension in the calculation? Use INCLUDE. Need to exclude a dimension from the calculation? Use EXCLUDE. Work through the business scenario step by step — what level should the calculation run at vs what the view shows.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Chart type for the data:</strong> Comparison → bar chart. Trend over time → line chart. Correlation between two measures → scatter plot. Part-to-whole → pie chart (small categories only) or treemap. Geographic distribution → map. Distribution → histogram or box plot. Know which chart type makes sense for each data relationship.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Joins vs Relationships:</strong> Relationships are the default and preferred — they maintain granularity and support multiple fact tables. Use joins only when you need explicit column combinations or are connecting to published data sources. Unions stack rows (same structure, additional records). Most exam scenarios should lead you to Relationships.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Dashboard action types:</strong> Filter action narrows other sheets based on selection. Highlight action keeps all marks but highlights selected. URL action opens a web page. Set action adds marks to a set. Know which action achieves which interaction when a user clicks on a chart.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>85%+ on practice exams</strong> given the 75% passing score. Explore &amp; Analyze Data (28%) and Create Charts &amp; Dashboards (25%) together account for 53% of the exam. Master LOD expressions before test day — they appear in multiple questions and cannot be guessed confidently without genuine understanding.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>LOD expressions: FIXED, INCLUDE, EXCLUDE — when and why to use each</li>
          <li>Table calculations: running total, percent of total, difference from, moving average</li>
          <li>Calculated fields: aggregate vs row-level, null handling with ZN() and IFNULL()</li>
          <li>Chart type selection for each data relationship (comparison, trend, correlation, distribution)</li>
          <li>Joins vs unions vs relationships — data model design choices</li>
          <li>Dashboard actions: filter, highlight, URL, Set, Parameter actions</li>
          <li>Context filters — filter order of operations: extract → data source → context → dimension → measure</li>
          <li>Tableau Prep Builder — cleaning, shaping, and outputting data for analysis</li>
          <li>Publishing to Tableau Cloud: workbook vs data source publishing, permissions, subscriptions</li>
          <li>Sets: fixed sets vs computed sets, set actions for dynamic filtering</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      <RelatedGuides links={getRelatedGuides('tableau-data-analyst-study-guide')} />

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/tableau-consultant" className="text-salesforce-blue font-medium hover:underline">Tableau Consultant</Link>, <Link href="/certifications/tableau-data-analyst" className="text-salesforce-blue font-medium hover:underline">Tableau Data Analyst</Link>, or <Link href="/certifications/tableau-desktop-foundations" className="text-salesforce-blue font-medium hover:underline">Tableau Desktop Foundations</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="tableau-data-analyst" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free Tableau Data Analyst practice questions covering all 5 exam sections.</p>
        <Link href="/certifications/tableau-data-analyst" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}