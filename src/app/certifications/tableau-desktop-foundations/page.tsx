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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
