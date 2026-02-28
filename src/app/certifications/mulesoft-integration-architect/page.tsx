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
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'mulesoft-integration-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a MuleSoft Platform Integration Architect do?", options: ["Only coding", "Work with technical and non-technical stakeholders to translate functional and non-functional requirements into integration interfaces and implementations", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified MuleSoft Platform Integration Architects have proven knowledge and skills to work with technical and non-technical stakeholders to translate functional and non-functional requirements into integration interfaces and implementations." },
  { question: "What is a key activity for a MuleSoft Integration Architect?", options: ["Only coding", "Translating requirements into integration interfaces and implementations", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They translate requirements into integration interfaces and implementations." },
  { question: "Which stakeholders do MuleSoft Integration Architects work with?", options: ["Only technical", "Technical and non-technical stakeholders", "Only non-technical", "Only developers"], correctAnswer: 1, explanation: "They work with technical and non-technical stakeholders." },
  { question: "Which role typically pursues MuleSoft Integration Architect?", options: ["Marketers", "Architects and senior consultants designing integration solutions", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants designing integration solutions pursue this credential." },
  { question: "What does 'integration interfaces' mean?", options: ["Only UI", "APIs, contracts, and data flows between systems", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Integration interfaces are APIs, contracts, and data flows between systems." },
  { question: "Which design approach supports integration architecture?", options: ["Ad-hoc only", "Contract-first and API-led design", "Code-first only", "No design"], correctAnswer: 1, explanation: "Contract-first and API-led support sound architecture." },
  { question: "What does non-functional requirements include?", options: ["Only features", "Performance, security, scalability, and reliability", "Only UI", "Only data"], correctAnswer: 1, explanation: "Non-functional requirements cover performance, security, etc." },
  { question: "Which MuleSoft tool supports API design?", options: ["Mule runtime only", "Design Center and RAML/OAS", "CloudHub only", "No design"], correctAnswer: 1, explanation: "Design Center and RAML/OAS support API design." },
  { question: "What is the purpose of integration patterns?", options: ["To replace APIs", "To address common integration scenarios (sync, async, batch)", "To delete only", "To create only"], correctAnswer: 1, explanation: "Patterns address common integration scenarios." },
  { question: "Which stakeholder provides functional requirements?", options: ["Developers only", "Business analysts and domain experts", "Only architects", "Only operations"], correctAnswer: 1, explanation: "Business and domain experts provide functional requirements." },
  { question: "What does implementation encompass?", options: ["Only design", "Mule flows, connectors, and deployment", "Only documentation", "Only testing"], correctAnswer: 1, explanation: "Implementation includes flows, connectors, and deployment." },
  { question: "Which consideration applies to integration security?", options: ["Ignore security", "Authentication, encryption, and authorization", "Only HTTPS", "No auth"], correctAnswer: 1, explanation: "Integration security covers auth, encryption, and authorization." },
  { question: "What is the benefit of translating requirements to interfaces?", options: ["No benefit", "Clear contracts and reduced integration errors", "More errors", "Slower delivery"], correctAnswer: 1, explanation: "Clear interfaces reduce integration errors." },
  { question: "What does RAML define in MuleSoft?", options: ["Only runtime config", "API contract: resources, methods, data types, and examples", "Only deployment", "Only security"], correctAnswer: 1, explanation: "RAML (RESTful API Modeling Language) defines the API contract and structure." },
  { question: "What does an Integration Architect ensure?", options: ["Only code", "Requirements are translated into sound, maintainable interfaces", "Only deployment", "Only testing"], correctAnswer: 1, explanation: "Architects ensure requirements become maintainable interfaces." },
]

export default function MuleSoftIntegrationArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="MuleSoft Integration Architect" description="Certified MuleSoft Platform Integration Architects have proven knowledge and skills to work with technical and non-technical stakeholders to translate functional and non-functional requirements into integration interfaces and implementations." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['Integration', 'APIs', 'Requirements', 'Interfaces', 'Implementations', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Integration Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Architecture Patterns</p>
                <p>Integration patterns: Point-to-point (direct connection between two systems — brittle at scale), Hub-and-spoke (central integration hub mediates all connections — reduces n*(n-1) connections to n connections), API-led (layered API approach — flexible and composable), Event-driven (publish/subscribe decoupling — scalable but eventual consistency). The Integration Architect selects patterns based on: number of systems, latency requirements, scalability needs, and team capability. Know when API-led supersedes traditional hub-and-spoke.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API-Led Connectivity: Three-Layer Architecture</p>
                <p>System APIs wrap individual backend systems — they insulate the network from system-specific protocols and expose stable REST interfaces regardless of what the backend system uses. Process APIs orchestrate business logic by calling multiple System APIs — they implement the business process without knowing which systems back each System API. Experience APIs tailor the data for specific consumers — mobile app, partner portal, web app — formatting and filtering for the channel. Each layer can be independently scaled and versioned. The exam tests how to assign capabilities to the correct API layer.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture for Integrations</p>
                <p>OAuth 2.0 client credentials flow for M2M API authentication. Mutual TLS (mTLS) for certificate-based authentication — both client and server present certificates. API Manager policy stacking — apply multiple policies in sequence (auth → rate limit → header injection). Secrets Manager for credential storage — never hardcode credentials in Mule apps. Anypoint Security (separate licence) provides tokenisation, secrets management, and crypto operations. The exam tests how to design a multi-layer security architecture for APIs and integrations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">High Availability, Resilience, and SLAs</p>
                <p>CloudHub workers can be scaled horizontally (multiple workers) or vertically (larger worker size). Multiple workers in the same region provide active-active high availability — each worker processes a portion of the load. Persistent queues (VM connector with JMS) ensure message delivery even if a worker restarts. Reconnection strategies handle transient network failures. Circuit Breaker pattern prevents cascade failures. The architect designs resilience to meet SLA requirements (e.g., 99.9% uptime, maximum 5-second response time).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Anypoint Governance and Centre for Enablement</p>
                <p>Centre for Enablement (C4E) is MuleSoft&apos;s operating model for scaling API-led connectivity. The C4E team creates reusable assets (API templates, connector extensions, shared fragments) published to Exchange. Governance: API rating and certification in Exchange, API contract testing, dependency tracking via API Catalog. The Integration Architect designs governance policies — when new versions require review, how breaking changes are managed, and how teams discover and reuse existing assets. The exam tests C4E principles and governance framework design.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the MuleSoft Integration Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The MuleSoft Integration Architect exam tests expertise in designing integration solutions using API-led connectivity and the Anypoint Platform. Focus on architecture patterns, Center for Enablement (C4E), and governance frameworks.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">API-Led Connectivity Layers</p>
                <p>Master the three-layer model: Experience APIs (channel-specific), Process APIs (orchestration), and System APIs (backend connectivity). Know how to identify which layer each integration belongs to and why.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Center for Enablement (C4E)</p>
                <p>The C4E promotes reuse by publishing discoverable assets (connectors, APIs, templates) to Anypoint Exchange. Know how to establish a C4E, measure reuse metrics, and govern API lifecycle through the C4E.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Governance Framework</p>
                <p>Know how to use API Manager for API governance: applying policies, defining SLAs, monitoring API usage, and how API Autodiscovery links deployed applications to API Manager.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Decision Trade-offs</p>
                <p>Architect questions test trade-off reasoning: synchronous vs. asynchronous, REST vs. SOAP, on-premise vs. cloud deployment. Always justify recommendations based on requirements (latency, volume, security).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Anypoint Platform Architecture</p>
                <p>Know the major platform components: Anypoint Studio (IDE), Anypoint Exchange (asset library), Runtime Manager (deployment), API Manager (governance), and MQ (async messaging). Understand how they integrate.</p>
              </div>
            </div>
          </div>

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
