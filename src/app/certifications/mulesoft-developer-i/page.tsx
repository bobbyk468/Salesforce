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

const slug = 'mulesoft-developer-i'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary purpose of Anypoint Platform?",
    options: ["To run Apex", "To design, build, and manage APIs and integrations", "To send marketing emails", "To configure CPQ"],
    correctAnswer: 1,
    explanation: "Anypoint Platform is MuleSoft's unified platform for designing, building, and managing APIs and integrations.",
  },
  {
    question: "Which Mule runtime component processes messages in a flow?",
    options: ["Apex Class", "Flow", "Trigger", "Visualforce"],
    correctAnswer: 1,
    explanation: "In Mule, a Flow contains the sequence of components that process messages.",
  },
  {
    question: "What does API-led connectivity emphasize?",
    options: ["Only system APIs", "Reusable APIs organized in layers: System, Process, Experience", "No APIs", "Only Experience APIs"],
    correctAnswer: 1,
    explanation: "API-led connectivity uses System, Process, and Experience API layers for reusable, composable integrations.",
  },
  {
    question: "Which format is commonly used for API specifications in MuleSoft?",
    options: ["Apex", "RAML or OAS (OpenAPI)", "AMPscript", "Visualforce"],
    correctAnswer: 1,
    explanation: "RAML and OpenAPI (OAS) are used to design and document APIs in Anypoint.",
  },
  {
    question: "What is a Connector in Mule?",
    options: ["A database", "A pre-built module that connects to an external system or protocol", "A Slack channel", "An email template"],
    correctAnswer: 1,
    explanation: "Connectors are pre-built modules that provide connectivity to systems like Salesforce, SAP, HTTP, etc.",
  },
  {
    question: "What is DataWeave used for in Mule applications?",
    options: [
      "Database queries only",
      "Transforming and querying data in Mule flows",
      "Sending emails only",
      "CPQ configuration"
    ],
    correctAnswer: 1,
    explanation: "DataWeave is MuleSoft's transformation language for data mapping and querying."
  },
  {
    question: "Which Mule component handles errors in a flow?",
    options: [
      "Logger only",
      "Error Handler with try, on-error-continue, or on-error-propagate",
      "Transform Message only",
      "Set Variable"
    ],
    correctAnswer: 1,
    explanation: "Error Handlers manage exceptions using try, on-error-continue, or on-error-propagate."
  },
  {
    question: "What is the purpose of an API specification (RAML/OAS)?",
    options: [
      "To run Apex",
      "To design, document, and define the contract for an API before implementation",
      "To send emails",
      "To configure CPQ"
    ],
    correctAnswer: 1,
    explanation: "API specs define the contract and enable design-first development."
  },
  {
    question: "Which deployment target is used for cloud-hosted Mule applications?",
    options: [
      "On-premises only",
      "CloudHub",
      "Salesforce only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "CloudHub is MuleSoft's cloud runtime for deploying Mule applications."
  },
  {
    question: "What does the HTTP Listener connector do?",
    options: [
      "Sends outbound HTTP requests only",
      "Receives incoming HTTP requests and triggers a flow",
      "Transforms data only",
      "Queries databases"
    ],
    correctAnswer: 1,
    explanation: "The HTTP Listener receives incoming requests and triggers Mule flows."
  },
  {
    question: "Which layer in API-led connectivity exposes system-of-record data?",
    options: [
      "Experience API only",
      "System API",
      "Process API only",
      "No layers"
    ],
    correctAnswer: 1,
    explanation: "System APIs abstract and expose data from underlying systems."
  },
  {
    question: "What is the purpose of Mocking in Anypoint Platform?",
    options: [
      "To delete APIs",
      "To simulate API behavior for testing before implementation",
      "To send emails",
      "To configure CPQ"
    ],
    correctAnswer: 1,
    explanation: "Mocking allows frontend and consumer development before backend is ready."
  },
  {
    question: "Which Mule variable scope is available across the entire flow?",
    options: [
      "Target only",
      "Flow variables (flowVars)",
      "Session only",
      "No variables"
    ],
    correctAnswer: 1,
    explanation: "Flow variables persist for the lifetime of the flow execution."
  },
  {
    question: "What does client credentials grant provide in OAuth?",
    options: [
      "User password",
      "Application-level authentication without user context",
      "Slack token only",
      "Email credentials"
    ],
    correctAnswer: 1,
    explanation: "Client credentials grant is for machine-to-machine, app-level authentication."
  },
  {
    question: "Which Anypoint component manages API policies?",
    options: [
      "Studio only",
      "API Manager",
      "Design Center only",
      "Runtime Manager only"
    ],
    correctAnswer: 1,
    explanation: "API Manager handles policies, client management, and analytics."
  },
]

export default function MuleSoftDeveloperIPage() {
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
            code="MuleSoft Developer I"
            description="Certified MuleSoft Developers have proven knowledge and skills to design, build, test and debug, deploy and manage basic APIs and integrations."
            examDetails={{ questions: 60, passingScore: '~70%', duration: '120 min', cost: '$200' }}
            topics={['Anypoint Platform', 'Mule Runtime', 'Flows', 'Connectors', 'DataWeave', 'API Design', 'RAML/OAS', 'Testing', 'Deployment', 'Security']}
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
