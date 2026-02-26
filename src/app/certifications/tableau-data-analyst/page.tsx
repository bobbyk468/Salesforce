import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import Link from 'next/link'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'tableau-data-analyst'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Salesforce Certified Tableau Data Analyst?",
    options: [
      "Only creating charts",
      "Analyzing data and building actionable insights using Tableau",
      "Managing Salesforce CRM",
      "Marketing campaigns"
    ],
    correctAnswer: 1,
    explanation: "Tableau Data Analysts analyze data and build actionable insights using Tableau for visualization and exploration."
  },
  {
    question: "Which Tableau capability is central to the Data Analyst role?",
    options: [
      "Only formatting",
      "Data connection, preparation, calculation, and visualization for analysis",
      "Server administration only",
      "License management"
    ],
    correctAnswer: 1,
    explanation: "Data Analysts use data connection, preparation, calculations, and visualization to deliver analysis."
  },
  {
    question: "What does a FIXED LOD expression compute in Tableau?",
    options: [
      "A value filtered to the dimensions currently in the view",
      "An aggregate at a specified dimension level, independent of the dimensions placed in the view",
      "A running total across all rows in the dataset",
      "A cross-database join between two sources"
    ],
    correctAnswer: 1,
    explanation: "FIXED LOD expressions compute a value at the declared dimension granularity regardless of what dimensions are on the Rows/Columns shelves."
  },
  {
    question: "When should you add a Context Filter in Tableau?",
    options: [
      "To change chart colour formatting",
      "When a Top N or condition filter needs to run on a pre-filtered data subset rather than the full dataset",
      "To connect to a live database source",
      "To create a dual-axis chart"
    ],
    correctAnswer: 1,
    explanation: "Without a context filter, Tableau computes Top N across all data first, then applies other filters. Context filters reverse that order."
  },
  {
    question: "What is the main difference between a Live connection and an Extract in Tableau?",
    options: [
      "Live connections are less accurate than Extracts",
      "Live connections query the data source in real time; Extracts are cached .hyper snapshots that are faster but need scheduled refresh",
      "Extracts only work with Excel files",
      "Live connections cannot be used on dashboards"
    ],
    correctAnswer: 1,
    explanation: "Live connections deliver fresh data on every view load; Extracts trade real-time currency for faster query performance."
  },
  {
    question: "What is a Tableau Parameter?",
    options: [
      "A filter that automatically removes rows from the view",
      "A dynamic, user-controlled input value that can replace a constant in a calculation, filter, or reference line",
      "A data source connection setting",
      "A dashboard layout configuration option"
    ],
    correctAnswer: 1,
    explanation: "Parameters accept user input at runtime — combine them with calculated fields or filters to create interactive, dynamic views."
  },
  {
    question: "How is data blending different from a join in Tableau?",
    options: [
      "Blending is always faster than joining at the database level",
      "Blending links two separate data sources at the view level on a common dimension; joining combines tables within the same data source at query time",
      "Blending creates a permanent new combined data source",
      "There is no practical difference between the two"
    ],
    correctAnswer: 1,
    explanation: "Blending is useful when data lives in two different source systems and a database-level join is not possible — Tableau aggregates each source separately and combines results."
  },
  {
    question: "Which chart type best shows the distribution of a continuous measure across bins?",
    options: [
      "Pie chart",
      "Histogram",
      "Treemap",
      "Gantt chart"
    ],
    correctAnswer: 1,
    explanation: "A histogram groups continuous data into defined intervals (bins) and shows frequency — the standard chart for distribution analysis."
  },
  {
    question: "What does an INCLUDE LOD expression do that FIXED does not?",
    options: [
      "INCLUDE ignores all active filters in the view",
      "INCLUDE adds specified dimensions to the view's level of detail before aggregating, computing at a finer granularity than the view alone",
      "INCLUDE is only used with date dimensions",
      "INCLUDE creates a table calculation on the result set"
    ],
    correctAnswer: 1,
    explanation: "INCLUDE takes the view's dimensions and adds more — useful for computing per-member averages while the view aggregates at a higher level."
  },
  {
    question: "What is a Filter Action in a Tableau dashboard?",
    options: [
      "A server-side filter applied automatically to all worksheets on load",
      "An interactive action that passes selected marks as a filter to one or more target worksheets or dashboards",
      "A data source filter that excludes null values globally",
      "A context filter applied to a single worksheet"
    ],
    correctAnswer: 1,
    explanation: "Filter actions allow users to click a mark and drill into filtered views — a core interactivity pattern in Tableau dashboards."
  },
  {
    question: "How is a table calculation different from a regular aggregated measure in Tableau?",
    options: [
      "Table calculations run on the database before data is returned to Tableau",
      "Table calculations run on the aggregated data already returned to the view, not on the underlying database rows",
      "Table calculations are always computed faster than database aggregations",
      "Table calculations cannot be used with date or time fields"
    ],
    correctAnswer: 1,
    explanation: "Table calculations (RUNNING_SUM, WINDOW_AVG, RANK, etc.) operate on the result set in the view — not on source rows."
  },
  {
    question: "A user needs to compare year-over-year sales in a single view. Which Tableau approach is most appropriate?",
    options: [
      "Create separate worksheets for each year and place them side by side",
      "Use a table calculation with percent difference from LOOKUP, or a FIXED LOD expression with a year dimension",
      "Export the data to Excel and calculate manually",
      "Add a separate context filter for each year"
    ],
    correctAnswer: 1,
    explanation: "Percent difference table calculations or FIXED LOD expressions with year dimensions are the standard Tableau patterns for period-over-period comparison."
  },
  {
    question: "How do you create a dual-axis chart in Tableau?",
    options: [
      "Drag two dimensions onto the Rows shelf",
      "Right-click the second measure pill on the Rows or Columns shelf and select Dual Axis, then synchronize axes if needed",
      "Use the Marks card to manually overlay two chart types",
      "Add a second data source as a blend and overlay the sheets"
    ],
    correctAnswer: 1,
    explanation: "Dual Axis overlays two measures on independent axes in the same chart — right-click the second measure pill to enable it."
  },
  {
    question: "Which role in a Tableau deployment is responsible for certifying published data sources?",
    options: [
      "Tableau Desktop Specialist",
      "Data Steward or content-certifying admin",
      "Viewer licence user",
      "Server hardware administrator"
    ],
    correctAnswer: 1,
    explanation: "Certification is applied by Data Stewards or admins to published data sources, signalling to consumers that the data is authoritative and maintained."
  },
]

export default function TableauDataAnalystPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          Looking for exam strategy before you start practising? Read our{' '}
          <Link href="/tableau-data-analyst-exam-tips" className="text-salesforce-blue font-medium hover:underline">Tableau Data Analyst exam tips and 4-week study plan</Link>.
        </p>

        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="Tableau Data Analyst"
            description="Tableau Data Analysts analyze data and build actionable insights using Tableau. They connect to data, create calculations, and design visualizations that drive business decisions."
            examDetails={{
              questions: 45,
              passingScore: "~70%",
              duration: "90 min",
              cost: "$250",
            }}
            topics={[
              "Data Connection & Prep",
              "Calculations & LOD",
              "Visualization Design",
              "Dashboards & Stories",
              "Analysis & Insights",
              "Best Practices",
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tableau Data Analyst: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">LOD Expressions (Level of Detail)</p>
                <p>LOD expressions compute aggregates at a different granularity than the current view. <strong>FIXED</strong> computes at the specified dimension, ignoring view-level dimensions. <strong>INCLUDE</strong> adds dimensions to the view level (finer detail). <strong>EXCLUDE</strong> removes dimensions (coarser). LOD questions appear frequently — understand which to use for per-customer averages, cohort analysis, and ratio calculations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Context Filters</p>
                <p>By default, Tableau applies filters in this order: extract, data source, context, dimension, measure. Adding a filter to context makes it run first, creating a temporary sub-table. Use context filters when you need a Top N filter to count only within a filtered subset — without context, Top N runs on the full dataset before other filters apply.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Parameters and Dynamic Analysis</p>
                <p>Parameters are workbook variables that users control via an input widget (slider, dropdown, etc.). They do not filter data by themselves — pair them with calculated fields to create dynamic filters, custom bins, or switchable measures. Parameter Actions (Tableau 2019.2+) allow clicking a mark to set a parameter value.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Table Calculations vs LOD Expressions</p>
                <p>Table calculations (RUNNING_SUM, WINDOW_AVG, RANK, LAST) operate on the data already returned to the view — they cannot change which rows are in the view. LOD expressions run at query time and can affect which rows return. Use table calculations for running totals, percent of total, and period-over-period; use LOD for controlling granularity independently of the view.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Live vs Extract Performance</p>
                <p>Choose Live when data must be current to the minute (financial dashboards, operations). Choose Extract (.hyper) when query performance is critical and a scheduled refresh cadence is acceptable. Extracts can be filtered at creation time to reduce size. Embedded credentials are required for scheduled extract refreshes on Tableau Server or Cloud.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
          </div>

                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

          <div id="related-certs">
            <RelatedCertifications currentSlug={slug} />
          </div>

          {/* FAQ section - rendered after H1 for proper SEO structure */}
          <div id="faq">
            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents
            sections={[
              { id: 'exam-prep', title: 'Exam Prep Content' },
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
