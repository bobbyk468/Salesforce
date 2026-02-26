import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import type { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import Link from 'next/link'

const slug = 'app-builder'

const descriptionText =
  'Free DEV-402 practice questions and Winter \'26 guide: $200 fee, 60 questions, declarative app building, and section-wise practice. Start now.'

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getCertMetadata(slug)

  return {
    ...baseMetadata,
    description: descriptionText,
    openGraph: {
      ...baseMetadata.openGraph,
      description: descriptionText,
    },
    twitter: {
      ...baseMetadata.twitter,
      description: descriptionText,
    },
  }
}

const sampleQuestions = [
  {
    question: "Which relationship type should be used when the child record should be deleted if the parent record is deleted?",
    options: [
      "Lookup Relationship",
      "Master-Detail Relationship",
      "External Lookup",
      "Hierarchical Relationship"
    ],
    correctAnswer: 1,
    explanation: "Master-Detail relationships create a cascade delete behavior where child records are automatically deleted when the parent is deleted."
  },
  {
    question: "What is the maximum number of roll-up summary fields that can be created on a master object?",
    options: [
      "10",
      "25",
      "40",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "Each object can have a maximum of 25 roll-up summary fields."
  },
  {
    question: "A user wants to display different page layouts based on the record type. What should be configured?",
    options: [
      "Profile Assignment",
      "Page Layout Assignment",
      "Record Type Assignment",
      "Permission Set"
    ],
    correctAnswer: 1,
    explanation: "Page Layout Assignment allows you to assign different page layouts to different record types and profiles."
  },
  {
    question: "Which automation tool should be used to update a field based on criteria when a record is created or edited?",
    options: [
      "Workflow Rule",
      "Flow",
      "Approval Process",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "Flow (Record-Triggered Flow) is the recommended tool for automating field updates when records are created or edited."
  },
  {
    question: "What is the purpose of a Junction Object?",
    options: [
      "To create a one-to-many relationship",
      "To create a many-to-many relationship",
      "To store historical data",
      "To link external systems"
    ],
    correctAnswer: 1,
    explanation: "A Junction Object is a custom object with two master-detail relationships used to create a many-to-many relationship between two objects."
  },
  {
    question: "What is the maximum number of master-detail relationships allowed on a custom object?",
    options: [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "A custom object can have a maximum of 2 master-detail relationships. This limit ensures data integrity and prevents overly complex data models."
  },
  {
    question: "Which component in Lightning App Builder allows users to see related records on a record page?",
    options: [
      "Related List",
      "Related Record",
      "Record Detail",
      "List View"
    ],
    correctAnswer: 0,
    explanation: "The Related List component displays related records (child records) on a record page, such as Contacts on an Account page or Opportunities on an Account page."
  },
  {
    question: "A developer wants to create a custom field that automatically calculates a value when a record is saved. Which field type should be used?",
    options: [
      "Formula",
      "Auto Number",
      "Text",
      "Number"
    ],
    correctAnswer: 0,
    explanation: "Formula fields automatically calculate values based on other fields, expressions, or functions. They are read-only and recalculate whenever referenced fields change."
  },
  {
    question: "What is the purpose of a Record Type?",
    options: [
      "To assign different page layouts to different users",
      "To create different business processes and picklist values for the same object",
      "To control field-level security",
      "To automate record creation"
    ],
    correctAnswer: 1,
    explanation: "Record Types allow you to offer different business processes, picklist values, and page layouts to different users for the same object."
  },
  {
    question: "Which automation tool can be used to create records in related objects automatically?",
    options: [
      "Workflow Rule",
      "Process Builder",
      "Flow",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "Flow (Record-Triggered Flow) is the recommended tool for creating records in related objects. Process Builder can also do this but is being deprecated."
  },
  {
    question: "A user wants to restrict access to specific fields based on user profiles. Which feature should be used?",
    options: [
      "Field-Level Security",
      "Sharing Rules",
      "Record Types",
      "Page Layouts"
    ],
    correctAnswer: 0,
    explanation: "Field-Level Security (FLS) controls whether users can view or edit specific fields, regardless of record-level access."
  },
  {
    question: "What is the difference between a Lookup and Master-Detail relationship?",
    options: [
      "Lookup allows cascade delete, Master-Detail does not",
      "Master-Detail allows cascade delete and roll-up summary fields, Lookup does not",
      "There is no difference",
      "Lookup is only for standard objects"
    ],
    correctAnswer: 1,
    explanation: "Master-Detail relationships support cascade delete (deleting parent deletes children) and roll-up summary fields. Lookup relationships are more flexible but don't support these features."
  },
  {
    question: "Which Lightning App Builder component allows users to navigate between related records?",
    options: [
      "Related List",
      "Related Record",
      "Record Detail",
      "Navigation Menu"
    ],
    correctAnswer: 1,
    explanation: "The Related Record component displays a single related record and allows navigation to that record's detail page."
  },
  {
    question: "A company wants to ensure data quality by preventing duplicate records. Which feature should be implemented?",
    options: [
      "Validation Rules",
      "Duplicate Rules",
      "Matching Rules",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "Duplicate Rules work with Matching Rules to prevent or alert users about duplicate records. Matching Rules define what constitutes a duplicate, and Duplicate Rules define what action to take."
  },
]

export default function AppBuilderPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          New to Salesforce admin? Our <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Salesforce Administrator (ADM-201) exam prep</Link> is the usual first step.
          {' '}See our{' '}
          <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">ADM-201 vs App Builder comparison</Link>{' '}
          to choose the right certification order.
          {' '}Ready to book? Read our{' '}
          <Link href="/app-builder-exam-tips" className="text-salesforce-blue font-medium hover:underline">DEV-402 exam tips and study plan</Link>.
        </p>
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} examCode="DEV-402" />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="DEV-402"
            description="The Platform App Builder certification validates your skills in designing, building, and deploying custom applications on the Salesforce platform."
            examDetails={{
              questions: 60,
              passingScore: "66%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Data Modeling",
              "Security",
              "Business Logic",
              "Process Automation",
              "User Interface",
              "Reporting",
              "Mobile",
              "App Development",
              "Social",
              "Deployment"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Platform App Builder Exam (DEV-402)</h2>
            <p className="text-sm text-gray-600 mb-5">
              The DEV-402 exam is scenario-based — most questions describe a business requirement and ask which declarative tool or configuration best meets it. Understanding <em>when</em> to use each Salesforce feature matters more than memorising field limits.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Modelling Scenarios</p>
                <p>When a question asks about relationships: use Master-Detail when child records only make sense in the context of the parent (cascade delete, roll-up summaries). Use Lookup when the child can exist independently. Junction objects solve many-to-many — always two Master-Detail relationships, not two Lookups. Roll-up summary fields only work on Master-Detail relationships.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Decision Tree</p>
                <p>For most automation questions, the answer is Flow. Record-Triggered Flows handle field updates, record creation, and cross-object automation. Approval Processes handle multi-step human approvals with rejection paths. Workflow Rules and Process Builder are legacy — do not choose them unless the question specifies a constraint preventing Flow use.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security and Visibility Layering</p>
                <p>The DEV-402 tests the Salesforce security model in sequence: OWD (baseline record access) &rarr; Role Hierarchy (opens up) &rarr; Sharing Rules (grants access to groups) &rarr; Manual Sharing &rarr; Field-Level Security &rarr; Page Layouts. Permission Sets grant additional permissions beyond profiles. Record Types control picklist values and page layout assignment — not field visibility.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">App Design and Lightning App Builder</p>
                <p>Know the difference between App Page, Record Page, and Home Page in Lightning App Builder. Dynamic Forms move fields out of page layouts onto the Lightning Record Page directly, enabling visibility rules per field. Custom tabs, apps, and navigation items are all configured declaratively — no code required for standard app design.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Exam Strategy</p>
                <p>Read every scenario for the constraint: &ldquo;without code&rdquo; means declarative only; &ldquo;most efficient&rdquo; usually means the native feature over a custom-built solution. Watch for &ldquo;administrators only&rdquo; (profile-based) vs &ldquo;certain users&rdquo; (permission sets or sharing rules). Passing score is 66% (40/60 questions) — aim for 76%+ on full mocks before booking.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct.
            </p>
            
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

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Get the Full DEV-402 Question Bank</h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
              Most candidates book the exam after scoring <strong>75%+</strong> on full mocks.
            </p>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
              If you&apos;re planning to test this quarter, aim to complete full mocks at least <strong>10–14 days</strong> before your exam date.
            </p>
            <p className="text-gray-500 text-xs max-w-md mx-auto mb-6">
              Candidates who complete full mock exams report strong first-time pass rates. For pricing and access, use the contact form below or kindly reach out to{' '}
              <a href="mailto:km.krishnamohan25@gmail.com" className="text-salesforce-blue font-medium hover:underline">km.krishnamohan25@gmail.com</a>—mention DEV-402.
            </p>
            <a
              href="/contact#exam=DEV-402"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
            >
              Get Full Question Bank
            </a>
          </div>

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
              { id: 'scenario-tips', title: 'How to Pass DEV-402' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' },
            ]}
          />
        </aside>
      </div>
    </div>
  )
}
