import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Tableau Desktop Foundations Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Tableau Desktop Foundations exam tips for ${RELEASE_CURRENT}: data connections, basic charts, filters. Scenario tips to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/tableau-desktop-foundations`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/tableau-desktop-foundations-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Tableau Desktop Foundations exam tips ${RELEASE_CURRENT}, how to pass Tableau Desktop Foundations, entry-level Tableau certification, Tableau foundations study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Tableau Desktop Foundations Exam Tips', url: '/tableau-desktop-foundations-exam-tips' },
]

const faqItems = [
  {
    question: 'How hard is the Tableau Desktop Foundations exam?',
    answer: 'The Tableau Desktop Foundations requires a 70%+ passing score and tests hands-on Tableau platform skills that cannot be mastered through reading alone. Daily practice in Tableau Desktop or Tableau Cloud is essential — this is a skills-based exam. Most candidates need 6–8 weeks of consistent hands-on practice. Calculated fields, LOD expressions, and dashboard interactivity actions are the most commonly missed topics.',
  },
  {
    question: 'What are the highest-weight Tableau Desktop Foundations exam sections?',
    answer: 'Connect to and Transform Data (25%) and Build Basic Charts and Visualisations (30%) together account for 55% of the exam. Basic data connections, dimensions vs. measures, standard chart types (bar, line, scatter, map), filters, and simple calculations are the most heavily tested areas.',
  },
  {
    question: 'What is the difference between Tableau Desktop Foundations and the BI Analyst exam?',
    answer: 'Tableau Desktop Foundations is the entry-level Tableau certification — testing basic skills like connecting to data and building standard charts. The Business Intelligence Analyst exam is the intermediate-level certification testing more advanced skills like LOD expressions, table calculations, and complex dashboard actions. Foundations is the recommended starting point for Tableau beginners.',
  },
  {
    question: 'What are dimensions and measures in Tableau and why do they matter?',
    answer: 'Dimensions are categorical fields (text, dates) that define the granularity of a view — they go on Rows and Columns shelves. Measures are numeric fields that are aggregated — they appear as pills in the view. Understanding the dimension vs. measure distinction is fundamental to Tableau and is tested across multiple questions on every Tableau exam.',
  },
]

export default function TableauDesktopFoundationsExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/tableau-desktop-foundations-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tableau Desktop Foundations Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Tableau Desktop Foundations exam is Tableau&apos;s entry-level certification. It tests basic Tableau
          skills — connecting data, building charts, using filters. These tips focus on the fundamental
          concepts and chart-building skills that define this accessible certification.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">45</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Tableau Desktop Foundations Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data connection basics</strong> — Connecting to Excel, CSV, and simple database sources; understanding dimensions vs. measures; using data pane filters; and basic data types (string, number, date, boolean).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Standard chart types</strong> — Building bar charts, line charts, scatter plots, maps (with geographic dimensions), pie charts, and text tables. Understanding which chart type best suits which type of data comparison (comparison, trend, distribution, relationship).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Filters, groups, and sets</strong> — Applying dimension filters, measure filters, and context filters. Creating groups to combine dimension values. Using basic calculated fields for simple IF/THEN logic and string/date manipulations. Basic dashboard creation with layout containers.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Build Basic Charts and Visualisations</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Connect to and Transform Data</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Apply Filters and Groupings</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Share and Publish</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Charts + Data + Filters = 77%. Master the fundamentals: dimensions, measures, and choosing the right chart type.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Desktop Foundations Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a data visualisation requirement and ask which chart type, filter, or Tableau
          feature achieves it. Focus on matching the requirement to the simplest correct Tableau approach —
          this is a foundations exam, not an advanced one.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For chart type questions: bar chart = compare categories. Line chart = show trends over time. Scatter plot = show relationship between two measures. Map = show geographic data. Pie chart = show part-to-whole (use sparingly). When a question says &apos;compare sales across regions&apos;, bar chart is the standard answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For filter type questions: dimension filters filter by category value (show only USA). Measure filters filter by aggregated value (show only where SUM(Sales) &gt; $1,000). Context filters make a dimension filter a &apos;top filter&apos; for downstream filters — they run first. The order of filter application matters.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For calculation questions: IF/THEN calculated fields create category labels from numeric or text fields. String functions (LEFT, RIGHT, CONTAINS, MID) manipulate text. Date functions (DATETRUNC, DATEDIFF, DATEPART) work with date fields. When a question says &apos;classify sales as High/Medium/Low based on amount&apos;, the answer is an IF/THEN calculated field.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking (70% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Tableau Desktop Foundations is the most accessible Tableau certification. Most candidates with
          1–2 months of hands-on Tableau Desktop practice can pass. Download Tableau Public (free) and
          build 5–10 basic dashboards using Tableau&apos;s sample datasets. Hands-on practice is essential —
          Tableau skills cannot be learned purely from reading.
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
          <Link href="/tableau-data-analyst-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Data Analyst Exam Tips</span>
          </Link>
          <Link href="/tableau-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Tableau Desktop Foundations Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/tableau-desktop-foundations" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Tableau Foundations Practice Questions <ArrowRight className="h-4 w-4" />
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
