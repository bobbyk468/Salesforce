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

const slug = 'data-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Platform Data Architect?",
    options: ["Only UI", "Designing sound, scalable, high-performing solutions for enterprise data management on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Platform Data Architects design scalable, high-performing data solutions on the Salesforce Platform.",
  },
  {
    question: "Which consideration is critical when designing for large data volumes?",
    options: ["Only field count", "Governor limits, indexing, and query optimization", "Only page layout", "Only reports"],
    correctAnswer: 1,
    explanation: "Large data volumes require attention to governor limits, indexing, and query optimization.",
  },
  {
    question: "What is the purpose of skinny tables in Salesforce?",
    options: ["To store images", "To optimize reporting by reducing joins for large datasets", "To send emails", "To configure CPQ"],
    correctAnswer: 1,
    explanation: "Skinny tables are denormalized tables that can improve report performance.",
  },
  {
    question: "Which relationship type should be used when the child must always belong to a parent?",
    options: ["Lookup", "Master-Detail", "External Lookup", "Indirect Lookup"],
    correctAnswer: 1,
    explanation: "Master-Detail enforces ownership and cascade delete; child cannot exist without parent.",
  },
  {
    question: "What does data archiving strategy involve?",
    options: ["Only backup", "Moving historical data off-platform or to Big Objects while keeping access patterns in mind", "Only delete", "Only export"],
    correctAnswer: 1,
    explanation: "Archiving involves moving historical data while preserving access and compliance.",
  },
  {
    question: "What is a Big Object in Salesforce?",
    options: [
      "A standard object",
      "A custom object optimized for high-volume, append-only historical data",
      "A report type",
      "A dashboard"
    ],
    correctAnswer: 1,
    explanation: "Big Objects store high-volume historical data with optimized query patterns."
  },
  {
    question: "Which indexing strategy improves SOQL performance?",
    options: [
      "No indexing",
      "Custom indexes on frequently filtered fields and standard indexed fields",
      "Index all fields",
      "Only on formula fields"
    ],
    correctAnswer: 1,
    explanation: "Custom indexes on filtered fields improve query performance."
  },
  {
    question: "What does data migration planning include?",
    options: [
      "Only export",
      "Extract, transform, load (ETL), validation, and rollback strategy",
      "Only import",
      "Only backup"
    ],
    correctAnswer: 1,
    explanation: "Migration includes ETL, validation, and rollback planning."
  },
  {
    question: "Which relationship type allows a child to exist without a parent?",
    options: [
      "Master-Detail",
      "Lookup",
      "Junction (many-to-many)",
      "External Lookup"
    ],
    correctAnswer: 1,
    explanation: "Lookup allows optional parent; child can exist independently."
  },
  {
    question: "What is the purpose of a soft delete strategy?",
    options: [
      "To permanently remove data",
      "To mark records as deleted while retaining for compliance or recovery",
      "To export data only",
      "To archive only"
    ],
    correctAnswer: 1,
    explanation: "Soft delete preserves data with a deleted flag for compliance."
  },
  {
    question: "Which governor limit affects bulk SOQL in triggers?",
    options: [
      "No limit",
      "100 SOQL queries per transaction (sync)",
      "Unlimited",
      "50 queries"
    ],
    correctAnswer: 1,
    explanation: "Synchronous limit is 100 SOQL queries per transaction."
  },
  {
    question: "What does master data management (MDM) address?",
    options: [
      "Only reporting",
      "Single source of truth, deduplication, and data quality",
      "Only archiving",
      "Only migration"
    ],
    correctAnswer: 1,
    explanation: "MDM ensures consistent, clean master data across systems."
  },
  {
    question: "Which data type supports high-volume, append-only use cases?",
    options: [
      "Standard object only",
      "Big Object",
      "Custom object with triggers",
      "External object"
    ],
    correctAnswer: 1,
    explanation: "Big Objects are designed for append-only, high-volume data."
  },
  {
    question: "What is the benefit of using External Objects?",
    options: [
      "To replace custom objects",
      "To query external data without replicating it into Salesforce",
      "To archive data",
      "To create reports only"
    ],
    correctAnswer: 1,
    explanation: "External Objects enable querying external systems in real time."
  },
  {
    question: "Which consideration applies when designing for data volume growth?",
    options: [
      "Ignore limits",
      "Archiving strategy, indexing, and query selectivity",
      "Only backup",
      "Only export"
    ],
    correctAnswer: 1,
    explanation: "Data growth requires archiving, indexing, and selective queries."
  },
]

export default function DataArchitectPage() {
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
            code="Data Architect"
            description="Certified Platform Data Architects are experts at designing sound, scalable, high-performing solutions on the Salesforce Platform that are tailored for enterprise data management."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Data Modeling', 'Large Data Volumes', 'Governor Limits', 'Big Objects', 'Indexing', 'Archiving', 'Migration', 'Integration', 'Performance', 'Governance']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Modeling: Objects, Relationships, and Big Objects</p>
                <p>Beyond standard objects, Data Architects design custom objects with appropriate relationship types. External Objects connect to data stored outside Salesforce via OData connectors. Big Objects store billions of records but have limited SOQL support (no GROUP BY, aggregate queries) &mdash; used for archival. Platform Events are schema-defined and support publish/subscribe. The exam tests when to use each object type and the implications for querying, sharing, and storage.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Master Data Management and Deduplication</p>
                <p>MDM strategies define the golden record &mdash; the authoritative version of a data entity. Salesforce Matching Rules define how duplicates are identified (fuzzy vs exact matching on fields). Duplicate Rules control what happens when a match is found &mdash; alert, block, allow with warning, or report. External IDs support upsert operations &mdash; the system matches on external ID to update existing records or insert new ones. The exam tests MDM patterns and duplicate prevention configuration for large-scale data integrations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Migration: Bulk API and Integration Patterns</p>
                <p>Bulk API 2.0 processes up to 100 million records per batch job &mdash; preferred for large-scale data loads. Data Loader uses Bulk API for loads over 200 records. For complex migrations, ETL (Extract, Transform, Load) tools (MuleSoft, Informatica) prepare data before loading. Heroku Connect provides bi-directional sync between Heroku Postgres and Salesforce. The exam tests which migration tool matches the data volume, transformation complexity, and latency requirements of each scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Quality and Governance</p>
                <p>Validation Rules enforce data quality at the point of entry &mdash; they run on all DML paths (UI, API, Data Loader). Field History Tracking captures changes to up to 20 fields per object and retains data for 18 months. Setup Audit Trail tracks admin configuration changes for 180 days. Data Quality dashboards using CRM Analytics can surface completeness, accuracy, and consistency metrics. The exam tests which governance mechanism addresses a specific data quality requirement.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Large Data Volumes: Performance and Archiving</p>
                <p>Large Data Volume (LDV) considerations: indexed fields in WHERE clauses improve SOQL performance (standard fields are indexed; custom fields can be requested). Avoid non-selective queries. Skinny Tables pre-join frequently queried field combinations for reporting performance. Async SOQL runs long-running queries asynchronously. Data archiving to Big Objects or external systems reduces active data volume. The exam tests LDV performance patterns and when to recommend archiving, skinny tables, or query optimisation.</p>
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
