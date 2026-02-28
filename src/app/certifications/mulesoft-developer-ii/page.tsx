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

const slug = 'mulesoft-developer-ii'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the focus of MuleSoft Developer II certification?",
    options: ["Basic APIs only", "Independently working on production-ready Mule applications in a DevOps environment", "Email development", "UI design"],
    correctAnswer: 1,
    explanation: "MuleSoft Developer II validates ability to work on production-ready Mule applications and DevOps practices.",
  },
  {
    question: "Which MuleSoft capability is used for complex data transformations?",
    options: ["Apex", "DataWeave", "AMPscript", "Visualforce"],
    correctAnswer: 1,
    explanation: "DataWeave is MuleSoft's transformation language for mapping and transforming data.",
  },
  {
    question: "What is a best practice for error handling in Mule flows?",
    options: ["Ignore errors", "Use error handling scope and global error handler with appropriate strategies", "Delete the flow", "Use only try/catch in Apex"],
    correctAnswer: 1,
    explanation: "Error handling scope and global error handlers provide consistent error handling and recovery.",
  },
  {
    question: "Which deployment target is commonly used for Mule applications in production?",
    options: ["Email Studio", "CloudHub or Runtime Manager", "Slack", "CPQ"],
    correctAnswer: 1,
    explanation: "CloudHub and Runtime Manager (on-prem / hybrid) are used to deploy and manage Mule applications.",
  },
  {
    question: "What does reusable asset mean in API-led connectivity?",
    options: ["One-time use", "APIs designed to be reused across multiple projects and consumers", "Physical hardware", "Single consumer only"],
    correctAnswer: 1,
    explanation: "Reusable assets are APIs and integrations designed for reuse across the organization.",
  },
  {
    question: "Which on-error strategy continues flow execution after an error?",
    options: [
      "on-error-propagate only",
      "on-error-continue",
      "No strategy",
      "on-error-delete"
    ],
    correctAnswer: 1,
    explanation: "on-error-continue allows flow to continue after handling the error."
  },
  {
    question: "What is the purpose of batch processing in Mule?",
    options: [
      "To replace flows",
      "To process large datasets in chunks",
      "To send emails only",
      "To create APIs only"
    ],
    correctAnswer: 1,
    explanation: "Batch processing handles large datasets in manageable chunks."
  },
  {
    question: "Which DataWeave function transforms an array?",
    options: [
      "map only",
      "map, filter, pluck, and reduce",
      "get only",
      "set only"
    ],
    correctAnswer: 1,
    explanation: "map, filter, pluck, and reduce transform arrays in DataWeave."
  },
  {
    question: "What does API versioning support in MuleSoft?",
    options: [
      "No support",
      "Backward compatibility and gradual client migration",
      "Breaking changes only",
      "Deprecation only"
    ],
    correctAnswer: 1,
    explanation: "Versioning supports backward compatibility and migration."
  },
  {
    question: "Which Mule component supports scheduled execution?",
    options: [
      "HTTP Listener only",
      "Scheduler",
      "On Error only",
      "Logger only"
    ],
    correctAnswer: 1,
    explanation: "Scheduler triggers flows on a schedule."
  },
  {
    question: "What is the purpose of a custom policy in API Manager?",
    options: [
      "To replace APIs",
      "To enforce custom logic (e.g., rate limiting, validation)",
      "To delete only",
      "To create only"
    ],
    correctAnswer: 1,
    explanation: "Custom policies enforce custom logic on API requests."
  },
  {
    question: "Which Mule scope supports transactions?",
    options: [
      "Try only",
      "Transactional scope",
      "Flow only",
      "No scope"
    ],
    correctAnswer: 1,
    explanation: "Transactional scope ensures atomic processing."
  },
  {
    question: "What does idempotency support in integration?",
    options: [
      "No support",
      "Preventing duplicate processing from retries",
      "Faster only",
      "Slower only"
    ],
    correctAnswer: 1,
    explanation: "Idempotency prevents duplicate processing on retries."
  },
  {
    question: "Which deployment strategy supports zero-downtime on CloudHub?",
    options: [
      "No strategy",
      "Blue-green or rolling deployment",
      "Full restart only",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Blue-green and rolling deployments support zero-downtime."
  },
  {
    question: "What is the purpose of MUnit?",
    options: [
      "To replace Mule",
      "To unit test Mule flows and applications",
      "To deploy only",
      "To monitor only"
    ],
    correctAnswer: 1,
    explanation: "MUnit is the testing framework for Mule applications."
  },
]

export default function MuleSoftDeveloperIIPage() {
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
            code="MuleSoft Developer II"
            description="Certified MuleSoft Developers II are seasoned developers who have proven knowledge and skills to independently work on production-ready Mule applications in a DevOps environment."
            examDetails={{ questions: 60, passingScore: '~70%', duration: '120 min', cost: '$200' }}
            topics={['Advanced Mule', 'DataWeave', 'Error Handling', 'CloudHub', 'DevOps', 'Security', 'Performance', 'Testing', 'Reusability', 'Production Patterns']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Developer II: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced DataWeave: Functions and Modules</p>
                <p>DataWeave II advanced features: pattern matching (match/case for type-based branching), named functions (fun myFunc(arg) = ...), lambda functions (vars), and custom modules (import from external .dwl files). Complex scenarios: transforming nested arrays, handling nulls with default and orElse, type coercion. The exam presents complex transformation requirements and tests whether the developer can write efficient, readable DataWeave code — understanding when to use map vs reduce vs mapObject is critical.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Batch Processing in Mule</p>
                <p>Batch Job scope processes large datasets in records. Phases: On Complete (runs after all records processed), On Input (optional pre-processing), Batch Steps (process each record). Batch Aggregator accumulates records before processing — commit size defines how many records are committed together. Failed records can be routed separately. Database.Stateful equivalent: use Batch Job Record Variables to carry state. The exam tests Batch Job configuration for high-volume data processing scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Security: Policies and OAuth</p>
                <p>Anypoint API Manager applies security policies to deployed APIs. Common policies: Client ID Enforcement (all clients must register and send client ID), OAuth 2.0 Token Enforcement (validate Bearer tokens), IP Allowlist, Rate Limiting (throttle by client or overall). Policies are applied through API Manager and injected into the runtime automatically — no code changes needed. The exam tests which policy combination to use for a given security requirement (authentication + authorisation + throttling).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance: Scatter-Gather and Cache Scope</p>
                <p>Scatter-Gather executes multiple routes in parallel and aggregates responses — ideal for fan-out calls where all responses are needed. Each route runs concurrently; Scatter-Gather waits for all routes to complete before aggregating. Cache Scope stores responses for a configurable TTL — reduces redundant external calls. Reconnection strategies handle transient connectivity failures. Async processing (VM connector, queues) decouples processing speed from response time. The exam tests when each performance pattern is appropriate.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CI/CD with Anypoint: Maven and CloudHub Deployment</p>
                <p>Anypoint Maven Plugin enables automated deployment in CI/CD pipelines. pom.xml configuration includes CloudHub credentials, region, and worker configuration. Anypoint CLI provides command-line deployment and management. API Autodiscovery links a deployed Mule app to an API definition in API Manager — enables policy enforcement. The deployment pipeline: unit tests (MUnit) → build JAR → deploy to CloudHub → run integration tests → promote to production. The exam tests CI/CD pipeline design and Maven plugin configuration.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the MuleSoft Developer II Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The MuleSoft Developer II exam tests advanced development skills: complex DataWeave transformations, async patterns, API security implementation, and advanced deployment strategies. Expect deep technical questions on Anypoint Platform internals.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced DataWeave</p>
                <p>Go beyond basic mappings: know how to use modules (Arrays, Strings, Math), pattern matching, recursive functions, and how to write reusable DataWeave modules. Know how to handle complex nested JSON and XML transformations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Async &amp; Batch Processing</p>
                <p>Know Batch Jobs in Mule 4: Batch Job scope, Batch Step, Batch Aggregator, and On Complete phases. Understand when to use batch processing vs. scatter-gather for parallel processing of large data sets.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Security Policies</p>
                <p>Know how to apply policies in API Manager: Rate Limiting, JWT Validation, OAuth 2.0 (client credentials, authorization code), CORS, and IP whitelist. Understand policy ordering and how custom policies are built.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced Deployment Strategies</p>
                <p>Know the difference between CloudHub 1.0, CloudHub 2.0, and Runtime Fabric deployment models. Understand zero-downtime deployments, persistent queues, and how to configure multiple workers for HA.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance Tuning</p>
                <p>Know how to tune thread pools (Grizzly, CPU intensive, CPU lite, I/O), configure watermark-based polling, and use caching (Object Store) to reduce redundant API calls in Mule applications.</p>
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
