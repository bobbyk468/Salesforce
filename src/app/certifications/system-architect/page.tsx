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

const slug = 'system-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a System Architect?",
    options: ["Only on-platform", "Off-platform systems, integration, and securing access between systems", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "System Architects focus on off-platform systems, integration, and securing access between systems.",
  },
  {
    question: "Which area does a System Architect typically manage?",
    options: ["Only UI", "Governance and testing capabilities for deployment and ongoing Salesforce modification", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "They manage governance and testing for deployment and ongoing modifications.",
  },
  {
    question: "What does 'off-platform' mean in this context?",
    options: ["Only Salesforce", "Systems outside Salesforce (e.g., ERP, middleware) that integrate with Salesforce", "Only Apex", "Only LWC"],
    correctAnswer: 1,
    explanation: "Off-platform refers to external systems that integrate with Salesforce.",
  },
  {
    question: "Which consideration is critical for integration security?",
    options: ["Only passwords", "Authentication, encryption, and secure access between systems", "Only HTTPS", "Only IP allowlist"],
    correctAnswer: 1,
    explanation: "Authentication, encryption, and secure access are critical for integration security.",
  },
  {
    question: "What role does governance play for a System Architect?",
    options: ["None", "Ensuring change control, testing, and release management for deployments", "Only documentation", "Only coding standards"],
    correctAnswer: 1,
    explanation: "Governance includes change control, testing, and release management.",
  },
  {
    question: "Which integration pattern is suitable for real-time, request-response sync?",
    options: [
      "Batch only",
      "Point-to-point API or REST callout",
      "Event-driven only",
      "ETL only"
    ],
    correctAnswer: 1,
    explanation: "REST/API callouts support real-time, synchronous request-response integration."
  },
  {
    question: "What is the purpose of middleware in integration architecture?",
    options: [
      "To replace Salesforce",
      "To orchestrate, transform, and route data between systems",
      "To send emails only",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Middleware orchestrates, transforms, and routes integration traffic."
  },
  {
    question: "Which security mechanism is used for server-to-server API authentication?",
    options: [
      "User password only",
      "OAuth 2.0 client credentials or JWT bearer flow",
      "Session ID only",
      "No authentication"
    ],
    correctAnswer: 1,
    explanation: "OAuth 2.0 client credentials and JWT bearer are used for server-to-server auth."
  },
  {
    question: "What does release management include for a System Architect?",
    options: [
      "Only coding",
      "Sandbox strategy, deployment pipelines, and change sets or CI/CD",
      "Only documentation",
      "Only testing"
    ],
    correctAnswer: 1,
    explanation: "Release management covers sandbox strategy, pipelines, and deployment tools."
  },
  {
    question: "Which testing type validates integration behavior?",
    options: [
      "Unit tests only",
      "Integration tests and end-to-end tests",
      "No testing",
      "Only UAT"
    ],
    correctAnswer: 1,
    explanation: "Integration and E2E tests validate system interaction and data flow."
  },
  {
    question: "What is the benefit of API-led connectivity?",
    options: [
      "No benefits",
      "Reusable, composable APIs that reduce point-to-point dependencies",
      "Only for internal use",
      "Only for external use"
    ],
    correctAnswer: 1,
    explanation: "API-led connectivity promotes reusable, composable integrations."
  },
  {
    question: "Which consideration applies when integrating with legacy systems?",
    options: [
      "Ignore security",
      "Protocol support, data format translation, and security",
      "No translation needed",
      "Only real-time"
    ],
    correctAnswer: 1,
    explanation: "Legacy integration requires protocol support, translation, and security."
  },
  {
    question: "What does encryption in transit protect?",
    options: [
      "Data at rest only",
      "Data moving between systems (e.g., TLS/HTTPS)",
      "Passwords only",
      "No protection"
    ],
    correctAnswer: 1,
    explanation: "Encryption in transit (TLS/HTTPS) protects data during transmission."
  },
  {
    question: "Which deployment capability supports zero-downtime releases?",
    options: [
      "No capability",
      "Blue-green deployments or canary releases",
      "Direct production deploy only",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Blue-green and canary enable low-risk, low-downtime deployments."
  },
  {
    question: "What role does an IP allowlist play in integration security?",
    options: [
      "No role",
      "Restricting which IPs can access APIs or systems",
      "Only for users",
      "Only for reports"
    ],
    correctAnswer: 1,
    explanation: "IP allowlists restrict API and system access to trusted IP ranges."
  },
]

export default function SystemArchitectPage() {
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
            code="System Architect"
            description="Certified System Architects focus on off-platform systems, integration, and securing access between systems. They're also skilled at managing governance and testing capabilities for deployment and ongoing Salesforce modification requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Off-Platform Systems', 'Integration', 'Security', 'Governance', 'Testing', 'Deployment', 'Release Management', 'Best Practices', 'Middleware', 'APIs']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">System Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Patterns: Choosing the Right Approach</p>
                <p>The exam presents an integration scenario and asks which pattern applies. <strong>Request-reply</strong> (REST/SOAP callout) — synchronous, caller waits for response; use for real-time data retrieval. <strong>Fire-and-forget</strong> (Platform Events, async queue) — caller publishes and moves on; use when immediate response is not needed. <strong>Batch ETL</strong> — high-volume data movement on a schedule. <strong>Change Data Capture</strong> — streams field-level record change events for near-real-time synchronisation. <strong>Point-to-point vs hub-and-spoke</strong>: as integration count grows, hub-and-spoke (middleware) reduces coupling.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Authentication Patterns: OAuth 2.0 Flows</p>
                <p><strong>Web Server Flow</strong> — user-facing; redirects to Salesforce login, returns authorisation code exchanged for token. <strong>JWT Bearer Flow</strong> — server-to-server; no user interaction; client signs a JWT assertion with a certificate. <strong>Client Credentials Flow</strong> — machine-to-machine; client ID + secret exchanged for access token without a user. <strong>Device Flow</strong> — for devices without browsers. <strong>Named Credentials</strong> store the endpoint and auth details in Salesforce, keeping credentials out of Apex code. <strong>Connected Apps</strong> define OAuth scopes, IP restrictions, and session policies.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API-Led Connectivity and Middleware (MuleSoft)</p>
                <p>API-led connectivity organises APIs in three layers: <strong>System APIs</strong> wrap individual backend systems (ERP, legacy), exposing a stable contract regardless of the system&apos;s protocol. <strong>Process APIs</strong> orchestrate business logic across multiple System APIs — composable, reusable. <strong>Experience APIs</strong> tailor data for specific consumers (mobile app, partner portal). MuleSoft Anypoint Platform implements this pattern. Understand when native Salesforce integration (REST, Platform Events) is sufficient vs when middleware is warranted (protocol mismatch, fan-out orchestration, message transformation).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sandbox Strategy and Release Management</p>
                <p>Sandbox types by size and use: <strong>Developer</strong> (5 MB data, metadata only, for development), <strong>Developer Pro</strong> (1 GB, for larger teams), <strong>Partial Copy</strong> (5 GB, subset of production data, for testing), <strong>Full Copy</strong> (full production replica, for load testing and final UAT). Deployment tools: <strong>Change Sets</strong> (org-to-org, no version control), <strong>Salesforce CLI + Metadata API</strong> (source-driven, supports Git), <strong>Unlocked Packages</strong> (modular, versioned, dependency-aware). The exam tests which combination of sandbox type and deployment tool fits a given governance requirement.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identity, SSO, and My Domain</p>
                <p><strong>SAML 2.0</strong> enables SSO: Salesforce can act as <strong>Identity Provider</strong> (issues assertions to external apps) or <strong>Service Provider</strong> (receives assertions from an external IdP like Okta or Azure AD). <strong>My Domain</strong> is required for SSO — it provides the custom login URL and enables domain-based login policies. <strong>Delegated Authentication</strong> sends the user&apos;s credentials to an external web service for validation (legacy approach). <strong>OAuth</strong> handles API access delegation, not web SSO. Know the trust chain: IdP issues SAML assertion → SP validates the assertion&apos;s signature using the IdP&apos;s certificate → session created.</p>
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
