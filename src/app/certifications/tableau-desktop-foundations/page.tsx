import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'tableau-desktop-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does the Tableau Desktop Foundations certification validate?",
    options: [
      "Server administration only",
      "Core Tableau Desktop skills: connecting to data, building views, and creating dashboards",
      "Marketing automation",
      "Salesforce CRM configuration"
    ],
    correctAnswer: 1,
    explanation: "Tableau Desktop Foundations validates core skills in connecting to data, building views, and creating dashboards in Tableau Desktop."
  },
  {
    question: "Which is a fundamental Tableau Desktop concept?",
    options: [
      "Only colors",
      "Dimensions, measures, and the shelf (Rows, Columns, Marks)",
      "Apex programming",
      "Email templates"
    ],
    correctAnswer: 1,
    explanation: "Dimensions, measures, and the shelf (Rows, Columns, Marks) are fundamental to building views in Tableau Desktop."
  },
  {
    question: "What do the Rows and Columns shelves do in Tableau?",
    options: ["Store data only", "Define the structure of the view; fields placed here create headers and axes", "Apply filters only", "Change colors"],
    correctAnswer: 1,
    explanation: "Rows and Columns define the layout of the visualization. Fields create headers, axes, and panes."
  },
  {
    question: "Which data type appears as a dimension (blue pill) by default in Tableau?",
    options: ["Only numbers", "Text, dates, and booleans are typically dimensions", "Only dates", "Only booleans"],
    correctAnswer: 1,
    explanation: "Text, dates, and booleans default to dimensions. Numeric fields often default to measures."
  },
  {
    question: "What does the Marks card control in Tableau?",
    options: ["Data connection only", "Color, size, text, detail, and tooltip of marks in the view", "Filters only", "Calculations only"],
    correctAnswer: 1,
    explanation: "The Marks card controls how data points are encoded: color, size, label, tooltip, and more."
  },
  {
    question: "Which Tableau feature lets you connect to Excel or CSV files?",
    options: ["Only databases", "Connect to a File supports Excel, CSV, PDF, and other file types", "Only PDF", "Only JSON"],
    correctAnswer: 1,
    explanation: "Connect to a File lets you use Excel, CSV, and other file-based data sources."
  },
  {
    question: "What is a filter in Tableau used for?",
    options: ["Changing colors only", "Limiting which data appears in the view based on criteria", "Deleting data", "Connecting to servers"],
    correctAnswer: 1,
    explanation: "Filters restrict the data displayed in a view based on field values or conditions."
  },
  {
    question: "Which chart type uses bars to compare categories?",
    options: ["Line chart", "Bar chart", "Pie chart", "Map"],
    correctAnswer: 1,
    explanation: "Bar charts compare values across categories using horizontal or vertical bars."
  },
  {
    question: "What does 'aggregate' mean in Tableau?",
    options: ["Combine colors", "Summarize measure values (e.g., SUM, AVG) at the level of the view", "Delete data", "Connect tables"],
    correctAnswer: 1,
    explanation: "Aggregation summarizes measures (SUM, AVG, etc.) at the granularity defined by dimensions in the view."
  },
  {
    question: "How do you create a dashboard in Tableau Desktop?",
    options: ["Only in Server", "Use the Dashboard tab to add worksheets and objects to a single layout", "Dashboards are automatic", "Only from CSV"],
    correctAnswer: 1,
    explanation: "The Dashboard tab lets you add worksheets, images, text, and objects to create a unified view."
  },
  {
    question: "What is the difference between discrete and continuous in Tableau?",
    options: ["No difference", "Discrete creates headers; continuous creates axes. Blue = discrete, green = continuous", "Only for colors", "Only for dates"],
    correctAnswer: 1,
    explanation: "Discrete fields create headers and categories; continuous fields create axes. Pill color indicates type."
  },
  {
    question: "Which Tableau feature shows a summary when you hover over a mark?",
    options: ["Filters", "Tooltips", "Legends only", "Parameters"],
    correctAnswer: 1,
    explanation: "Tooltips display contextual information when users hover over marks in the view."
  },
  {
    question: "What does the Show Me panel in Tableau do?",
    options: ["Manages licenses", "Recommends chart types based on selected fields", "Connects to data only", "Applies filters only"],
    correctAnswer: 1,
    explanation: "Show Me suggests visualization types based on the fields you have selected."
  },
  {
    question: "How do you sort a bar chart in Tableau?",
    options: ["Cannot sort", "Click the sort icon on the axis or use the sort option in the field menu", "Only in dashboards", "Only for dimensions"],
    correctAnswer: 1,
    explanation: "Use the sort icon on the axis or the field's sort option to order bars by value or manually."
  },
  {
    question: "What is a Tableau worksheet?",
    options: ["A data source", "A single visualization (chart, map, or table) built from data", "A dashboard only", "A filter only"],
    correctAnswer: 1,
    explanation: "A worksheet is a single view—one chart, map, or table. Dashboards combine multiple worksheets."
  },
]

export default function TableauDesktopFoundationsPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
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
            code="Tableau Desktop Foundations"
            description="Tableau Desktop Foundations validates core skills in connecting to data, building views, and creating dashboards using Tableau Desktop. It is an entry-level credential for analytics and visualization."
            examDetails={{
              questions: 40,
              passingScore: "~65%",
              duration: "60 min",
              cost: "$100",
            }}
            topics={[
              "Connecting to Data",
              "Dimensions & Measures",
              "Building Views",
              "Marks & Encoding",
              "Dashboards",
              "Filters & Sorting",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tableau Desktop Foundations: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Connecting to Data and Data Source Basics</p>
                <p>Tableau Desktop connects to hundreds of data sources: files (Excel, CSV, JSON), databases (SQL Server, PostgreSQL, BigQuery), and cloud services. Data Source page: connect, join or union tables, preview data, rename fields, hide unused fields, change data types. Live connection queries the database each time; Extract (.hyper) snapshots the data for performance. Field types: Dimensions (qualitative, blue), Measures (quantitative, green). Discrete fields create headers; Continuous fields create axes. Understanding pills (fields), shelves (rows, columns, marks card) and how they map to the view is the foundation of the Foundations exam.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Building Basic Visualisations</p>
                <p>Tableau&apos;s Show Me panel suggests chart types based on selected fields. Common charts: Bar (compare categories), Line (trend over time), Scatter (correlation between two measures), Map (geographic data), Pie (part-to-whole — use sparingly). Shelves: Columns shelf = X axis, Rows shelf = Y axis, Marks card controls colour, size, shape, label, detail, tooltip. Sorting: by field value (ascending/descending), by manual drag, or by nested sort. The Foundations exam tests how to build each chart type and which is most appropriate for a given question.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Filtering, Sorting, and Groups</p>
                <p>Filter types: Dimension filters (categorical), Measure filters (range/conditional), Date filters (relative, range, discrete). Filter order of operations: Extract &rarr; Data Source &rarr; Context &rarr; Dimension &rarr; Measure. Context filters improve performance by reducing the data set before other filters apply. Sets are named subsets of dimension members — In/Out members can be used in calculations. Groups combine dimension members into named categories directly on the field (e.g., combining East and West into &apos;Combined&apos;). Quick filters show filter controls in the view for user interactivity.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Calculated Fields: Basic Formulas</p>
                <p>Calculated fields create new data from existing fields. Basic functions: String (LEFT, RIGHT, MID, CONTAINS, LEN), Date (DATEPART, DATEDIFF, DATEADD, TODAY), Logical (IF/ELSEIF/END, IIF, CASE), Aggregate (SUM, AVG, MAX, MIN, COUNTD). Table calculations reference values relative to other rows in the view (RUNNING_SUM, WINDOW_SUM, RANK, PREVIOUS_VALUE). The Foundations exam tests writing basic calculated fields to answer common business questions — e.g., profit margin (SUM([Profit])/SUM([Sales])), year-over-year growth, conditional categorisation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dashboards and Stories</p>
                <p>Dashboards combine multiple sheets into a single view. Layout: Tiled vs Floating objects. Containers (Horizontal, Vertical) control how objects resize together. Device preview shows how the dashboard looks on desktop, tablet, and phone. Dashboard Actions enable interactivity — Filter Action (click to filter), Highlight Action (click to highlight), URL Action (open a link). Stories are a presentation format — a sequence of Story Points, each showing a sheet or dashboard with a caption, for guided data narration. The Foundations exam tests how to create a dashboard, add interactivity, and build a basic story.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Tableau Desktop Specialist Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Tableau Desktop Specialist exam tests foundational Tableau Desktop skills. Focus on connecting to data, building basic visualizations, and using core features. This is a practical knowledge exam — understand the UI and feature capabilities.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Connecting to Data</p>
                <p>Know how to connect to file-based sources (Excel, CSV, JSON), database sources, and how to configure joins and unions in the Data Source pane. Understand the difference between live and extract connections.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Building Basic Visualizations</p>
                <p>Know the Show Me panel chart types and when Tableau recommends each. Understand how to use Rows/Columns shelf, Marks card (color, size, label, detail, tooltip), and filters pane.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sorting &amp; Grouping</p>
                <p>Know how to sort data (field sort, manual sort, nested sort) and how to create groups (custom groups from dimension members) and sets (dynamic or fixed subsets of dimension members).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Basic Calculations</p>
                <p>Know how to create simple calculated fields: string functions (LEFT, MID, CONTAINS), date functions (DATEDIFF, DATEPART), and aggregate functions (SUM, AVG, COUNT, COUNTD) applied to measures.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sharing &amp; Publishing</p>
                <p>Know how to publish workbooks and data sources to Tableau Server or Cloud, export views to images/PDFs/PowerPoint, and use Tableau Reader for offline sharing.</p>
              </div>
            </div>
          </div>

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />


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
              { id: 'scenario-tips', title: 'How to Pass' },
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
