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

const slug = 'crm-analytics-einstein-discovery-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is CRM Analytics (formerly Tableau CRM) used for?",
    options: ["Only reports", "Embedded analytics, dashboards, and data exploration on Salesforce data", "Email only", "CPQ only"],
    correctAnswer: 1,
    explanation: "CRM Analytics provides embedded analytics, dashboards, and data exploration on Salesforce and connected data.",
  },
  {
    question: "What does Einstein Discovery provide?",
    options: ["Only charts", "Predictive insights and recommendations powered by AI", "Slack only", "Static reports only"],
    correctAnswer: 1,
    explanation: "Einstein Discovery delivers AI-powered predictive insights and recommendations.",
  },
  {
    question: "Which role does a CRM Analytics and Einstein Discovery Consultant typically fulfill?",
    options: ["Email marketing", "Designing and implementing on CRM Analytics and Einstein Discovery in a customer-facing or internal architect role", "Slack configuration", "UI design only"],
    correctAnswer: 1,
    explanation: "They design and implement CRM Analytics and Einstein Discovery in customer-facing or architect roles.",
  },
  {
    question: "What is a Lens in CRM Analytics?",
    options: ["A report type", "A reusable dataset or query that powers dashboards", "An email", "A campaign"],
    correctAnswer: 1,
    explanation: "A Lens defines a dataset or query that can be reused across dashboards and apps.",
  },
  {
    question: "Which capability allows users to ask questions in natural language in CRM Analytics?",
    options: ["Only SAQL", "Einstein Ask (natural language to query)", "Dataflow only", "Dashboard only"],
    correctAnswer: 1,
    explanation: "Einstein Ask allows users to query data using natural language.",
  },
  {
    question: "What is a Dataflow in CRM Analytics?",
    options: [
      "A report type",
      "The ETL pipeline that ingests, transforms, and loads data into datasets",
      "An email",
      "A dashboard"
    ],
    correctAnswer: 1,
    explanation: "Dataflows define the ETL process for building datasets in CRM Analytics."
  },
  {
    question: "Which language is used to query data in CRM Analytics?",
    options: [
      "SOQL only",
      "SAQL (Salesforce Analytics Query Language)",
      "Apex",
      "AMPscript"
    ],
    correctAnswer: 1,
    explanation: "SAQL is used for querying and transforming data in CRM Analytics."
  },
  {
    question: "What does Einstein Discovery Story provide?",
    options: [
      "Static reports only",
      "Narrative insights and recommended actions based on predictive analysis",
      "Dataflows only",
      "Lenses only"
    ],
    correctAnswer: 1,
    explanation: "Stories deliver narrative insights and recommended actions from predictions."
  },
  {
    question: "Which CRM Analytics component displays data in rows and columns?",
    options: [
      "Chart only",
      "Table or grouped table",
      "Lens only",
      "Dataflow only"
    ],
    correctAnswer: 1,
    explanation: "Tables and grouped tables display tabular data on dashboards."
  },
  {
    question: "What is the purpose of bindings in CRM Analytics dashboards?",
    options: [
      "To send emails",
      "To pass filter values between widgets and control interactions",
      "To run dataflows",
      "To create lenses"
    ],
    correctAnswer: 1,
    explanation: "Bindings link widgets so filters and selections flow between components."
  },
  {
    question: "Which CRM Analytics object stores data for dashboard consumption?",
    options: [
      "Lens only",
      "Dataset",
      "Report",
      "Dataflow only"
    ],
    correctAnswer: 1,
    explanation: "Datasets store the data that lenses and dashboards query."
  },
  {
    question: "What does Einstein Discovery predict?",
    options: [
      "Only charts",
      "Outcomes (e.g., churn, conversion) and recommends actions",
      "Only data structure",
      "Only SAQL"
    ],
    correctAnswer: 1,
    explanation: "Einstein Discovery predicts outcomes and recommends actions to improve them."
  },
  {
    question: "Which governance consideration applies to CRM Analytics?",
    options: [
      "None",
      "Row-level security, dataset permissions, and data refresh policies",
      "Only email",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "Governance includes RLS, permissions, and refresh policies."
  },
  {
    question: "What is a CRM Analytics App?",
    options: [
      "A mobile app only",
      "A container that organizes dashboards, lenses, and datasets for a use case",
      "A dataflow only",
      "A lens only"
    ],
    correctAnswer: 1,
    explanation: "Apps organize dashboards, lenses, and datasets for specific use cases."
  },
  {
    question: "Which integration allows CRM Analytics to use Salesforce data?",
    options: [
      "Manual export only",
      "Salesforce connector and Data Sync",
      "Email only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "The Salesforce connector and Data Sync enable CRM Analytics to consume Salesforce data."
  },
]

export default function CRMAnalyticsEinsteinDiscoveryConsultantPage() {
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
            code="Analytics & Discovery"
            description="Certified CRM Analytics and Einstein Discovery Consultants have experience designing and implementing on the CRM Analytics and Einstein Discovery platforms in a customer-facing or internal architect role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['CRM Analytics', 'Einstein Discovery', 'Dashboards', 'Dataflows', 'Lenses', 'SAQL', 'Predictions', 'Best Practices', 'Governance', 'Integration']}
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
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
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
