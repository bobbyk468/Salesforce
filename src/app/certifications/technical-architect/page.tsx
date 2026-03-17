import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
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

const slug = 'technical-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Salesforce Certified Technical Architect?",
    options: ["Only coding", "Designing and implementing secure, high-performance, integrated technical solutions within a client's landscape", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Technical Architects design and implement secure, high-performance, integrated solutions in a client's landscape.",
  },
  {
    question: "Which certifications are typically required before attempting the CTA board?",
    options: ["None", "Application Architect and System Architect (or equivalent)", "Email Specialist only", "Slack only"],
    correctAnswer: 1,
    explanation: "CTA board typically requires Application Architect and System Architect (or equivalent) as prerequisites.",
  },
  {
    question: "What does the CTA board exam assess?",
    options: ["Only multiple choice", "Scenario-based architecture design and presentation", "Only coding", "Only documentation"],
    correctAnswer: 1,
    explanation: "The CTA board is a scenario-based design and presentation exam.",
  },
  {
    question: "Which aspect is critical in Technical Architecture?",
    options: ["Only UI", "Security, performance, scalability, and integration", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Security, performance, scalability, and integration are core to technical architecture.",
  },
  {
    question: "What is meant by 'integrated' in the context of CTA?",
    options: ["Only Salesforce", "Salesforce working with other systems (APIs, middleware, data flow)", "Only Apex", "Only LWC"],
    correctAnswer: 1,
    explanation: "Integrated means Salesforce and other systems working together via APIs and middleware.",
  },
  {
    question: "What does the CTA architecture scenario typically require?",
    options: [
      "Only coding",
      "End-to-end solution design covering data, integration, security, and scalability",
      "Only documentation",
      "Only testing"
    ],
    correctAnswer: 1,
    explanation: "CTA scenarios require comprehensive end-to-end solution design."
  },
  {
    question: "Which architectural concern is critical for high-volume orgs?",
    options: [
      "Only UI",
      "Governor limits, data volume, and query optimization",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "High volume requires attention to limits, data, and queries."
  },
  {
    question: "What does 'secure' mean in CTA context?",
    options: [
      "Only encryption",
      "Sharing, authentication, encryption, and compliance",
      "Only sharing",
      "Only OWD"
    ],
    correctAnswer: 1,
    explanation: "Secure covers sharing, auth, encryption, and compliance."
  },
  {
    question: "Which presentation skill is important for the CTA board?",
    options: [
      "Only slides",
      "Clear communication of trade-offs, risks, and rationale",
      "Only coding",
      "Only documentation"
    ],
    correctAnswer: 1,
    explanation: "CTAs must clearly communicate trade-offs and rationale."
  },
  {
    question: "What is the purpose of an architecture decision record?",
    options: [
      "To replace design",
      "To document decisions, context, and consequences",
      "Only for code",
      "Only for testing"
    ],
    correctAnswer: 1,
    explanation: "ADRs document decisions and their context."
  },
  {
    question: "Which integration pattern supports scalability?",
    options: [
      "Point-to-point only",
      "Event-driven and loosely coupled architectures",
      "Synchronous only",
      "Tight coupling"
    ],
    correctAnswer: 1,
    explanation: "Event-driven and loosely coupled support scalability."
  },
  {
    question: "What does the CTA board evaluate?",
    options: [
      "Only technical knowledge",
      "Design quality, trade-offs, communication, and completeness",
      "Only coding",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Board evaluates design, trade-offs, and communication."
  },
  {
    question: "Which consideration applies when designing for multiple business units?",
    options: [
      "Single org only",
      "Sharing, licensing, and data isolation strategies",
      "No isolation",
      "Ignore licensing"
    ],
    correctAnswer: 1,
    explanation: "Multi-BU requires sharing, licensing, and isolation strategy."
  },
  {
    question: "What is the benefit of a phased implementation approach?",
    options: [
      "No benefit",
      "Reduced risk, incremental value, and easier rollback",
      "Faster only",
      "Lower cost only"
    ],
    correctAnswer: 1,
    explanation: "Phased approach reduces risk and enables incremental value."
  },
  {
    question: "Which governance area does a CTA address?",
    options: [
      "Only coding standards",
      "Release management, change control, and technical debt",
      "Only documentation",
      "Only testing"
    ],
    correctAnswer: 1,
    explanation: "Governance covers release, change control, and technical debt."
  },
]

export default function TechnicalArchitectPage() {
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
            code="CTA"
            description="Salesforce Certified Technical Architects have experience in designing and implementing secure, high-performance, integrated technical solutions using the Force.com platform within the context of a client's architectural landscape."
            examDetails={{ questions: 'Board exam', passingScore: 'Board review', duration: 'Board', cost: '$6000' }}
            topics={['Solution Design', 'Security', 'Integration', 'Data', 'Sharing', 'Performance', 'Governance', 'Presentation', 'Scenario Analysis', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Technical Architect (CTA): Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Principles & Design Governance</p>
                <p>The Salesforce Certified Technical Architect (CTA) credential is the highest-level Salesforce certification. CTAs demonstrate mastery of designing end-to-end enterprise solutions across the full Salesforce platform and beyond. Core architecture principles: loose coupling, high cohesion, separation of concerns, idempotency, and graceful degradation. The Salesforce Well-Architected framework (Trusted, Easy, Adaptable) guides all design decisions. Architects document designs with ADRs (Architecture Decision Records), data flow diagrams, and integration sequence diagrams. The CTA exam — a Review Board scenario — tests the ability to justify every architectural decision under challenge, explain trade-offs, and adapt the design when the scenario changes mid-presentation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Architecture at Scale</p>
                <p>Enterprise integration patterns for CTA: Request-Reply (synchronous REST/SOAP), Publish-Subscribe (Platform Events, Change Data Capture, Kafka), Batch (Bulk API, ETL jobs), and Event Streaming (CDC + MuleSoft). MuleSoft API-led connectivity is the standard recommendation for complex multi-system integrations. API Management (throttling, OAuth, versioning) is part of the design. Data consistency patterns: eventual consistency for async, distributed transaction patterns (Saga, Two-Phase Commit) for scenarios requiring atomicity. Governor limits (API daily limits, callout limits, event delivery limits) must be explicitly addressed in the architecture. The Review Board will challenge whether the proposed integration can handle peak load and failure scenarios.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Architecture & Large Data Volumes</p>
                <p>Large Data Volume (LDV) design is a major CTA topic. Strategies: selective SOQL (always use indexed fields), skinny tables (pre-joined table maintained by Salesforce for performance), custom indexes on external IDs and frequently filtered fields, and Batch Apex for processing large data sets. Data archival moves aged records out of the main org to reduce query times. Data model normalization vs. denormalization trade-offs must be explicitly justified. Master Data Management prevents duplicates and maintains data quality at scale. External Objects (Salesforce Connect) keep high-volume external data out of Salesforce storage limits. The CTA must articulate specific LDV mitigations in the Review Board scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture</p>
                <p>CTA-level security design covers: field-level encryption (Shield Platform Encryption) with trade-offs (deterministic vs. probabilistic encryption, search limitations), Customer-Managed Keys (BYOK), Event Monitoring for user behavior analytics, Field Audit Trail for long-term history, and Health Check/Security Center for org posture. Single Sign-On (SAML 2.0, OAuth 2.0 with JWT) integrates with enterprise identity providers (Okta, Azure AD). Connected App security: IP restrictions, OAuth scopes, certificate-based auth. Multi-Org security: data isolation between orgs in a multi-org strategy. The Review Board tests whether the security design meets compliance requirements (HIPAA, PCI, GDPR) without creating implementation or performance problems.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Solution Architecture: Trade-offs & Justification</p>
                <p>The CTA Review Board is not a test of knowledge — it is a test of judgment. Every design decision must be justified with business context, technical constraints, and explicit trade-offs. Common scenarios: single org vs. multi-org strategy (data isolation vs. complexity), declarative vs. code (maintainability vs. flexibility), synchronous vs. asynchronous integration (consistency vs. availability), custom solution vs. AppExchange (speed to value vs. lock-in). Architects must anticipate failure modes: what happens when the integration endpoint is down? When the batch job fails at record 50,000? When a key customization hits a governor limit at scale? The Review Board rewards architects who proactively surface risks and design for resilience.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Certified Technical Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The CTA credential is the most prestigious Salesforce certification. The written exam and Review Board test your ability to architect enterprise solutions, justify technical decisions, and communicate trade-offs at an executive level.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Decision Justification</p>
                <p>Every technical decision must be backed by clear reasoning tied to the client&apos;s requirements, constraints, and principles. Practice articulating why you chose one approach over alternatives — this is what the Review Board evaluates.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Trade-off Analysis</p>
                <p>CTAs must identify trade-offs: performance vs. simplicity, customization vs. upgradability, cost vs. scalability. Practice presenting these trade-offs clearly and recommending the best option with justification.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Risk Identification &amp; Mitigation</p>
                <p>CTA scenarios include risks (data migration risks, integration failure points, security gaps). Know how to identify risks proactively and propose mitigation strategies for each.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Stakeholder Communication</p>
                <p>The Review Board assesses how well you communicate complex technical concepts to diverse audiences: executives, project managers, developers. Practice explaining architecture decisions in plain language.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration &amp; Data Architecture Depth</p>
                <p>CTAs must have deep knowledge of integration patterns, data modeling, large data volumes, and security. Review all architect-level topics (Integration Architect, Data Architect, IAM Architect) as they are all in scope.</p>
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

                    <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Architect Certifications</h2>
            <p className="text-sm text-gray-700 mb-2">After this architect certification, progress toward CTA or other architect domains:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link></li>
              <li><Link href="/certifications/system-architect" className="text-salesforce-blue font-medium hover:underline">System Architect</Link></li>
              <li><Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link></li>
              <li><Link href="/architect-certification-path" className="text-salesforce-blue font-medium hover:underline">Architect certification path</Link></li>
            </ul>
          </section>

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
