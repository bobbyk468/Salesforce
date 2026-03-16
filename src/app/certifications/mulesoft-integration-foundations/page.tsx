import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { Metadata } from 'next'
import Link from 'next/link'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'mulesoft-integration-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the MuleSoft Integration Foundations certification designed for?",
    options: ["Senior architects only", "Individuals who know core integration and API-led connectivity terminology and can work as informed members of a MuleSoft project team", "Developers only", "Marketers only"],
    correctAnswer: 1,
    explanation: "It is designed for individuals who know core integration and API-led connectivity and can work as informed team members.",
  },
  {
    question: "What is API-led connectivity?",
    options: ["Only REST", "An approach that organizes APIs in layers (System, Process, Experience) for reusable integration", "Only SOAP", "Only file transfer"],
    correctAnswer: 1,
    explanation: "API-led connectivity organizes APIs in System, Process, and Experience layers.",
  },
  {
    question: "Which layer in API-led connectivity exposes data from systems of record?",
    options: ["Experience API only", "System API", "Process API only", "No layers"],
    correctAnswer: 1,
    explanation: "System APIs expose data from systems of record.",
  },
  {
    question: "What is Anypoint Platform?",
    options: ["A CRM", "MuleSoft's platform for designing, building, and managing APIs and integrations", "An email tool", "A database"],
    correctAnswer: 1,
    explanation: "Anypoint Platform is MuleSoft's unified platform for APIs and integrations.",
  },
  {
    question: "Which term describes a reusable, composable integration asset?",
    options: ["Monolith", "API or connector", "Legacy system", "Silo"],
    correctAnswer: 1,
    explanation: "APIs and connectors are reusable, composable integration assets.",
  },
  {
    question: "Which API-led connectivity layer orchestrates calls to multiple System APIs and prepares data for Experience APIs?",
    options: ["System API", "Experience API", "Process API", "Gateway API"],
    correctAnswer: 2,
    explanation: "Process APIs combine and transform data from multiple System APIs before passing it to Experience APIs for consumption.",
  },
  {
    question: "What does the Experience API layer provide?",
    options: ["Direct connection to backend databases", "Data tailored to the needs of a specific consumer channel such as mobile, web, or partner portal", "Caching for System APIs", "API usage monitoring"],
    correctAnswer: 1,
    explanation: "Experience APIs expose data in a format optimised for a specific consumer — mobile app, web portal, or third-party partner.",
  },
  {
    question: "What is DataWeave used for in MuleSoft?",
    options: ["Database schema design", "Transforming and mapping data between formats such as JSON, XML, and CSV within Mule flows", "API security policy enforcement", "Runtime performance monitoring"],
    correctAnswer: 1,
    explanation: "DataWeave is MuleSoft's functional data transformation language used to convert and map data formats within integration flows.",
  },
  {
    question: "Which Anypoint Platform component applies security policies and manages client application access to APIs?",
    options: ["Runtime Manager", "API Manager", "Anypoint Exchange", "Design Center"],
    correctAnswer: 1,
    explanation: "API Manager allows teams to apply SLA tiers, rate limiting, OAuth policies, and client application management to deployed APIs.",
  },
  {
    question: "What is Anypoint Exchange?",
    options: ["An email marketing tool", "A marketplace for publishing and discovering reusable APIs, connectors, templates, and integration examples", "A Mule runtime environment", "A log monitoring dashboard"],
    correctAnswer: 1,
    explanation: "Anypoint Exchange is MuleSoft's asset marketplace where teams share and consume APIs, connectors, and pre-built integration templates.",
  },
  {
    question: "What is a Mule Event in the context of a Mule application?",
    options: ["An error alert sent to the operations team", "A unit of data flowing through a Mule flow, consisting of a message (payload and attributes) and variables", "A scheduled deployment trigger", "An API audit log entry"],
    correctAnswer: 1,
    explanation: "A Mule Event carries the message payload, message attributes (metadata), and flow variables through the integration flow.",
  },
  {
    question: "Which Anypoint Platform tool allows teams to design APIs using RAML or OpenAPI Specification before building them?",
    options: ["Runtime Manager", "Design Center", "Anypoint Studio", "API Manager"],
    correctAnswer: 1,
    explanation: "Design Center's API Designer provides a visual and code editor for creating API specifications in RAML or OAS (OpenAPI).",
  },
  {
    question: "What is the primary purpose of MuleSoft Connectors?",
    options: ["Writing custom integration code from scratch for every system", "Providing pre-built, reusable components that connect Mule applications to external systems, databases, and SaaS apps", "Monitoring API performance dashboards", "Executing DataWeave transformations"],
    correctAnswer: 1,
    explanation: "Connectors provide out-of-the-box connectivity to systems like Salesforce, SAP, databases, and message queues — eliminating repetitive custom integration code.",
  },
  {
    question: "Which Anypoint Platform tool monitors deployed Mule application health, performance, and logs in real time?",
    options: ["Design Center", "Anypoint Studio", "Runtime Manager", "Exchange"],
    correctAnswer: 2,
    explanation: "Runtime Manager provides visibility into deployed Mule apps including deployment status, CPU/memory metrics, and log streaming.",
  },
  {
    question: "What is the core business value of adopting API-led connectivity over point-to-point integration?",
    options: ["Reduced licensing costs alone", "Reusable, composable APIs that reduce integration complexity, accelerate delivery, and enable cross-team self-service", "Faster initial implementation of the first integration", "Fewer API management tools required"],
    correctAnswer: 1,
    explanation: "API-led connectivity enables teams to self-serve reusable APIs, reduces duplicated effort, and reduces integration sprawl across the enterprise.",
  },
]

export default function MuleSoftIntegrationFoundationsPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          Looking for exam strategy before you start practising? Read our{' '}
          <Link href="/mulesoft-integration-foundations-exam-tips" className="text-salesforce-blue font-medium hover:underline">MuleSoft Integration Foundations exam tips and 3-week study plan</Link>.
        </p>
        <ExamLogisticsSection
          slug={slug}
          examCodeNote={
            <>
              Book via the official{' '}
              <a href="https://trailhead.salesforce.com/credentials/verification" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline hover:no-underline">Salesforce credential verification</a>
              {' '}and Webassessor. No separate alpha-numeric exam code; the exam is listed as MuleSoft Integration Foundations.
            </>
          }
        />
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
            code="MuleSoft Associate"
            description="The Certified MuleSoft Integrations Foundations certification is designed for individuals who have knowledge of core integration and API-led connectivity terminology and can work as an informed member of a MuleSoft project team."
            examDetails={{ questions: 40, passingScore: '70%', duration: '70 min', cost: '$75' }}
            topics={['API-led Connectivity', 'Anypoint Platform', 'APIs', 'Integration Basics', 'System/Process/Experience APIs', 'Terminology', 'Best Practices', 'Team Role']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Integration Foundations: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">API-Led Connectivity & Anypoint Platform</p>
                <p>MuleSoft&apos;s API-led connectivity organizes integrations into three reusable layers: System APIs (connect directly to backend systems — SAP, Salesforce, databases), Process APIs (orchestrate business logic across multiple systems — order processing, customer onboarding), and Experience APIs (tailored for consuming clients — mobile app, web portal, partner). This layered approach promotes reusability — change a System API once and all Process APIs that use it automatically benefit. Anypoint Platform is the unified development and management environment: Anypoint Studio (IDE), Design Center (API design), Exchange (reuse hub), Runtime Manager (deployment), API Manager (governance). The exam tests which API layer handles a given integration scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mule 4 Flows & Core Concepts</p>
                <p>A Mule 4 application consists of Flows triggered by a Source (HTTP listener, Salesforce trigger, scheduler) and processed by a sequence of Components (transformers, connectors, routers, error handlers). The Mule Event contains a Message (payload + attributes) and Variables. DataWeave 2.0 is the transformation language — `%dw 2.0` scripts transform data between formats (JSON, XML, CSV, Java). Connectors provide pre-built integration with systems: Salesforce Connector, HTTP Connector, Database Connector, Anypoint MQ. Error Handling: Try scope, On Error Continue, On Error Propagate define how errors are caught and handled. The exam tests basic flow design, DataWeave syntax, and error handling patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">DataWeave Transformations</p>
                <p>DataWeave is MuleSoft&apos;s functional transformation language. Key syntax: `payload` accesses the incoming message body; `.` navigates object fields; `map` transforms arrays; `filter` selects elements; `pluck` converts objects to arrays; `reduce` aggregates; `if/else` handles conditionals. Type coercion converts between data types. Output directives specify the target format: `output application/json`, `output application/xml`. DataWeave modules provide utility functions (strings, dates, crypto). Mapping JSON to XML or flattening nested structures are common exam tasks. The Integration Foundations exam tests reading and writing basic DataWeave scripts for field mapping, conditional logic, and array transformation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Connectors & Integration Patterns</p>
                <p>Common MuleSoft connectors tested in Foundations: HTTP (REST API calls), Salesforce (CRUD, bulk, streaming), Database (SQL queries, stored procs), Anypoint MQ (async messaging), Scheduler (time-based triggers), File (read/write), SMTP (email). Integration patterns: Request-Reply (synchronous REST), Publish-Subscribe (Platform Events, Anypoint MQ topics), Batch Processing (large volume data loads), Polling (scheduled data sync). API-led connectivity promotes the Pub/Sub pattern for decoupling producers and consumers. The exam tests which connector and pattern to apply for a given scenario — synchronous vs. asynchronous, real-time vs. batch, point-to-point vs. hub-and-spoke.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Deployment & API Management Basics</p>
                <p>MuleSoft applications deploy to Anypoint Runtime: CloudHub (Salesforce-managed cloud), Runtime Fabric (customer-managed Kubernetes), or On-Premises. CloudHub workers are the compute units — size by memory and vCores. Anypoint API Manager applies policies to APIs: rate limiting, OAuth 2.0 authentication, IP allowlisting, SLA tiers. API Autodiscovery links a deployed Mule app to an API Manager policy. Exchange hosts reusable assets: API specifications (RAML/OAS), connectors, templates, and examples. The Foundations exam tests the deployment options, how to apply an OAuth policy via API Manager, and how to publish a reusable asset to Anypoint Exchange.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the MuleSoft Integration Foundations Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The MuleSoft Integration Foundations exam is an entry-level certification testing basic integration concepts and Anypoint Platform familiarity. Focus on understanding what integration is, why it matters, and what MuleSoft does.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Styles &amp; Patterns</p>
                <p>Know the four integration styles: Point-to-Point, Hub-and-Spoke, ESB, and API-Led Connectivity. Understand the trade-offs of each and why API-led connectivity is MuleSoft&apos;s recommended approach.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Anypoint Platform Overview</p>
                <p>Know the key platform components at a high level: Anypoint Studio, Exchange, Runtime Manager, API Manager, CloudHub, and MQ. Understand the role each plays in the integration lifecycle.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Concepts</p>
                <p>Understand what an API is, the difference between REST and SOAP APIs, how API contracts (RAML/OAS) define interface expectations, and how API versioning works.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">DataWeave Basics</p>
                <p>Know basic DataWeave syntax for simple JSON-to-JSON and JSON-to-XML transformations. Understand the %dw 2.0 header, output directive, and simple map/filter operations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Connector Ecosystem</p>
                <p>Know the Anypoint Exchange connector library concept: core connectors (HTTP, Database, File), premium connectors (Salesforce, SAP, Oracle), and how to search and install connectors in Studio.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

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
              { id: 'difficulty-heatmap', title: 'Difficulty Heatmap' },
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
