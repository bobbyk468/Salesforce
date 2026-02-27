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

const slug = 'identity-access-management-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of an Identity and Access Management Architect?",
    options: ["Only reports", "Designing solutions that meet Single Sign-On (SSO) and identity requirements on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "They design solutions that meet SSO and identity requirements on the platform.",
  },
  {
    question: "Which protocol is commonly used for SSO with Salesforce?",
    options: ["Only HTTP", "SAML 2.0 and OAuth 2.0", "Only FTP", "Only SOAP"],
    correctAnswer: 1,
    explanation: "SAML 2.0 and OAuth 2.0 are used for SSO and identity with Salesforce.",
  },
  {
    question: "What does My Domain provide in Salesforce?",
    options: ["Only branding", "Custom login URL and foundation for SSO and identity", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "My Domain provides custom login URL and is required for SSO and identity features.",
  },
  {
    question: "Which feature allows users to log in once and access multiple connected apps?",
    options: ["Only profiles", "Single Sign-On (SSO)", "Only permission sets", "Only roles"],
    correctAnswer: 1,
    explanation: "SSO allows one login to access multiple connected applications.",
  },
  {
    question: "What is the purpose of Connected Apps in identity?",
    options: ["Only external apps", "OAuth-based access for external and internal apps with configurable policies", "Only internal apps", "Only email"],
    correctAnswer: 1,
    explanation: "Connected Apps provide OAuth-based access with configurable policies.",
  },
  {
    question: "What is an Identity Provider (IdP) in SSO?",
    options: [
      "Salesforce only",
      "The system that authenticates users and asserts identity to Salesforce",
      "A permission set",
      "A profile"
    ],
    correctAnswer: 1,
    explanation: "IdP authenticates users and asserts identity to Salesforce."
  },
  {
    question: "Which OAuth flow is used for server-to-server integration?",
    options: [
      "Authorization code only",
      "Client credentials or JWT bearer",
      "Implicit only",
      "Device only"
    ],
    correctAnswer: 1,
    explanation: "Client credentials and JWT bearer are for server-to-server."
  },
  {
    question: "What does Session Security Level control?",
    options: [
      "Only timeout",
      "Session requirements (e.g., high assurance, require re-auth)",
      "Only IP",
      "Only OWD"
    ],
    correctAnswer: 1,
    explanation: "Session Security Level enforces session assurance requirements."
  },
  {
    question: "Which SAML attribute is used for user provisioning?",
    options: [
      "Only name",
      "Federation ID and other attributes for matching/provisioning",
      "Only email",
      "Only role"
    ],
    correctAnswer: 1,
    explanation: "Federation ID and attributes support user matching and provisioning."
  },
  {
    question: "What is the purpose of Auth. Provider?",
    options: [
      "To replace SSO",
      "To configure external IdP connection (e.g., SAML, OAuth)",
      "To create users only",
      "To assign permission sets"
    ],
    correctAnswer: 1,
    explanation: "Auth. Provider configures external IdP (SAML/OAuth) connection."
  },
  {
    question: "Which feature supports multi-factor authentication?",
    options: [
      "SSO only",
      "Two-Factor Authentication (2FA) and verified modes",
      "OAuth only",
      "SAML only"
    ],
    correctAnswer: 1,
    explanation: "2FA and verified modes support multi-factor authentication."
  },
  {
    question: "What does Federation ID enable?",
    options: [
      "Only SSO",
      "Linking Salesforce user to external identity for SSO and provisioning",
      "Only OAuth",
      "Only permission sets"
    ],
    correctAnswer: 1,
    explanation: "Federation ID links Salesforce user to external identity."
  },
  {
    question: "Which consideration applies when designing for multiple IdPs?",
    options: [
      "Single IdP only",
      "Domain-based routing and IdP selection logic",
      "No routing",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Domain-based routing supports multiple IdPs."
  },
  {
    question: "What is the purpose of Certificate and Key Management?",
    options: [
      "To create users",
      "To manage SAML certificates and signing keys for trust",
      "To assign profiles",
      "To create permission sets"
    ],
    correctAnswer: 1,
    explanation: "Certificate management ensures SAML and signing key trust."
  },
  {
    question: "Which best practice supports identity governance?",
    options: [
      "No review",
      "Regular access reviews, least privilege, and audit logging",
      "All access",
      "No logging"
    ],
    correctAnswer: 1,
    explanation: "Access reviews, least privilege, and audit support governance."
  },
]

export default function IdentityAccessManagementArchitectPage() {
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
            code="Identity & Access Mgmt"
            description="Certified Platform Identity and Access Management Architects are experts at assessing architecture environments and requirements in order to design sound, high-performing solutions on the Salesforce Platform that meet Single Sign-On (SSO) requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['SSO', 'SAML', 'OAuth', 'My Domain', 'Connected Apps', 'Identity Provider', 'Federation', 'Security', 'Best Practices', 'Governance']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Identity and Access Management Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identity Fundamentals: Authentication vs Authorisation</p>
                <p>Authentication verifies who you are (login). Authorisation determines what you can access (permissions). An Identity Provider (IdP) authenticates users and issues assertions. A Service Provider (SP) relies on the IdP&apos;s assertion to grant access. Salesforce can act as both &mdash; as an IdP for connected apps and external systems, and as an SP when receiving SSO from corporate identity systems like Okta or Azure AD. Understanding this distinction is the foundation for all IAM exam questions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">SAML 2.0 SSO: SP-Initiated vs IdP-Initiated</p>
                <p>SAML 2.0 is the standard for web SSO. SP-Initiated SSO: the user accesses Salesforce, gets redirected to the IdP for login, the IdP sends a SAML assertion back to Salesforce. IdP-Initiated SSO: the user logs in at the IdP portal first, then accesses Salesforce from there &mdash; no redirect needed. My Domain is required for SSO &mdash; it provides the Salesforce login URL that the IdP redirects to. The exam tests the SSO flow direction, how to configure the SAML settings, and certificate management.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">OAuth 2.0 Flows: Server, JWT, and Client Credentials</p>
                <p>Web Server Flow (Authorization Code): user-facing, browser redirect, best for interactive login. JWT Bearer Flow: server-to-server, no user interaction &mdash; client signs a JWT with a private key registered as a certificate on the Connected App. Client Credentials Flow: machine-to-machine authentication using client ID &amp; secret. Device Flow: for devices without browsers (smart TV, IoT). PKCE (Proof Key for Code Exchange): protects mobile apps against authorization code interception. The exam presents an integration scenario and asks which OAuth flow is appropriate.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Connected Apps: Scopes, Policies, and Sessions</p>
                <p>Connected Apps define the OAuth configuration &mdash; scopes (which Salesforce data the app can access), IP ranges, session duration, and refresh token policy. OAuth scopes include api, full, refresh_token, web, chatter_api, and others. The Manage Connected Apps permission is required to modify policies. IP allowlists on Connected Apps can restrict which IPs can obtain tokens. Certificate-based authentication (mutual TLS) eliminates shared secrets by using client certificates for authentication.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">MFA, My Domain, and Identity Connect</p>
                <p>Multi-Factor Authentication (MFA) is now required for all Salesforce users &mdash; admins cannot disable it org-wide. MFA methods: Salesforce Authenticator (push notification), TOTP apps (Google Authenticator), security keys (WebAuthn). My Domain customises the Salesforce login URL and is required for SSO, custom components, and some lightning features. Identity Connect (Salesforce Identity for AD) syncs Active Directory users to Salesforce &mdash; supports LDAP directory integration for provisioning and deprovisioning.</p>
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
