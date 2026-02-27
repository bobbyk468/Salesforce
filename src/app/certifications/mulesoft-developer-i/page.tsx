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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Developer I: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Anypoint Platform and Development Lifecycle</p>
                <p>Anypoint Platform is MuleSoft&apos;s integration platform — Design, Develop, Deploy, Manage. Anypoint Studio is the Eclipse-based IDE for Mule application development. Anypoint Exchange is the asset repository for APIs, connectors, templates, and examples. CloudHub is the iPaaS (integration Platform as a Service) for deploying Mule apps. The developer lifecycle: design the API spec in API Designer → publish to Exchange → implement in Studio → deploy to CloudHub → manage in Runtime Manager.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mule Events, Flows, and Core Concepts</p>
                <p>A Mule Event carries the message through the flow: Payload (the message data), Attributes (metadata about the source, like HTTP headers), Variables (flow-level storage), Error (in error handling context). A Flow has a Source (event trigger — HTTP listener, file listener, scheduler), Processors (transform, route, call), and Target (destination system). Sub-flows are reusable flow fragments without a source. Private flows can be called but not directly triggered. The developer exam tests Mule event structure and when to use each flow type.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">DataWeave 2.0 Transformations</p>
                <p>DataWeave is MuleSoft&apos;s transformation language — used to transform, filter, and map data. Key operators: map (transform array elements), filter (select matching elements), reduce (aggregate), pluck (transform object entries), groupBy (group array by key). Type system: String, Number, Boolean, Array, Object, Null, Any. Header declarations define input/output MIME types. %dw 2.0 output application/json --- means DataWeave version 2, output format JSON. The exam tests reading and writing DataWeave scripts for common transformation scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Design with RAML and API-First</p>
                <p>RAML 1.0 (RESTful API Modeling Language) defines API contracts. Structure: baseUri, version, mediaType, types (data types), traits (reusable method fragments), resourceTypes (reusable resource patterns). API Fragment types in Exchange: data types, traits, resource types, security schemes, examples. API-first development: design and mock the API spec, share with consumers for feedback, then implement. Mocking Service in Exchange lets consumers test against the spec before implementation is complete. The exam tests RAML syntax and API-first methodology.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Error Handling: On Error Continue vs Propagate</p>
                <p>Error handling in Mule uses Try scope, On Error Continue, and On Error Propagate. On Error Continue: catches the error, executes the handler, and resumes the flow after the error scope — the client receives the handler&apos;s response. On Error Propagate: catches the error, executes the handler, and re-throws the error — the client receives an error response. Error types follow a hierarchy: ANY (catch all), CONNECTIVITY, EXPRESSION, ROUTING, SECURITY. The exam tests which handler type is appropriate and how error types are matched.</p>
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
