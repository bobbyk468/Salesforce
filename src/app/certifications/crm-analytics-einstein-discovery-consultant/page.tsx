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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CRM Analytics & Einstein Discovery: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Architecture: Datasets & Dataflows</p>
                <p>CRM Analytics (formerly Tableau CRM / Einstein Analytics) stores data in Datasets — optimized columnar data stores separate from the Salesforce database. Dataflows define how data is extracted from Salesforce objects, joined, aggregated, and loaded into datasets — using a JSON-based recipe. Recipes (Data Prep) provide a visual ETL interface for data transformation. External data can be loaded via CSV upload or connected datasets. Incremental sync keeps datasets fresh with only changed records. The consultant exam tests how to design a dataflow for a multi-object scenario (e.g., joining Accounts, Opportunities, and Cases), how to configure incremental sync, and how to troubleshoot failed dataflow jobs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Lenses, Dashboards & Stories</p>
                <p>Lenses are explorations of a single dataset — ad-hoc visual analysis. Dashboards assemble multiple charts, tables, and filters into a unified analytical experience. Dashboard JSON defines the full layout and query logic — consultants must be able to read and modify dashboard JSON for advanced customization. SAQL (Salesforce Analytics Query Language) powers advanced queries that the UI cannot express. Binding formulas connect filters and widgets — selection in one widget filters another. Stories are AI-generated narratives that explain key drivers in a dataset. The exam tests how to build a dashboard, use bindings for interactive filtering, and write basic SAQL for a custom query.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Discovery Insights & Models</p>
                <p>Einstein Discovery uses statistical machine learning to find patterns in historical data and generate predictive insights. Stories analyze a dataset and identify the top factors that influence a chosen outcome metric. Predictions deploy a Story as a scoring model — each Salesforce record gets a predicted score. Writeback deploys predictions back to Salesforce fields (e.g., Opportunity Win Probability). Improvement Suggestions recommend actions that increase the probability of a positive outcome. Model refresh keeps predictions current as new data accumulates. The consultant exam tests how to create a Story for a business scenario, interpret the top predictors, and configure writeback to update opportunity or case fields.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security: Row-Level & Field-Level Access</p>
                <p>CRM Analytics uses a separate security model from Salesforce record sharing. Dataset Security Predicates filter rows based on the logged-in user — referencing user fields like role, profile, or a custom attribute. Inheritance mode automatically applies Salesforce sharing rules to the dataset. User Attributes defined in CRM Analytics can be used in predicates and SAQL. Field-level security hides specific columns from certain users or groups. App sharing (Viewer, Editor, Manager) controls who can access and modify dashboards. The exam tests how to design a security predicate for a hierarchical visibility scenario (managers see their team&apos;s data, reps see only their own).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Deployment, Administration & Integration</p>
                <p>CRM Analytics apps are deployed using packages (change sets or CLI). Template Apps provide pre-built analytics solutions for Sales, Service, and specific industries. Custom apps extend or replace template apps. Connected objects define the Salesforce data sources for a template app — configuring which objects and fields feed each dataset. Scheduled dataflow runs keep datasets refreshed (up to 24 scheduled runs per day). Admin setup includes enabling CRM Analytics, assigning permission sets, and configuring connected objects. Integration with Einstein Discovery requires a CRM Analytics Plus license. The exam tests deployment sequences, template app configuration, and troubleshooting scheduling and data refresh issues.</p>
              </div>
            </div>
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
