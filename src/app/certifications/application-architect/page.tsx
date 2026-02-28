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

const slug = 'application-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the focus of an Application Architect?",
    options: ["Only Apex", "Deep understanding of native Salesforce features and modeling role hierarchy, data, and sharing", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Application Architects have deep understanding of native Salesforce features and model role hierarchy, data, and sharing.",
  },
  {
    question: "Which sharing mechanism is used to open access based on record ownership?",
    options: ["Only OWD", "Sharing rules", "Only profiles", "Only permission sets"],
    correctAnswer: 1,
    explanation: "Sharing rules extend access based on ownership or criteria.",
  },
  {
    question: "What is the role hierarchy used for?",
    options: ["Only reporting", "Inheriting record access and roll-up for forecasts and reports", "Email only", "CPQ only"],
    correctAnswer: 1,
    explanation: "Role hierarchy controls record access inheritance and roll-up for reporting and forecasts.",
  },
  {
    question: "Which certification is typically a prerequisite for Application Architect?",
    options: ["Email Specialist", "Platform Developer I and Sharing and Visibility Architect (or equivalent knowledge)", "Slack only", "Marketing Cloud only"],
    correctAnswer: 1,
    explanation: "Application Architect builds on platform and sharing/visibility knowledge.",
  },
  {
    question: "What does 'modeling data' mean for an Application Architect?",
    options: ["Only backups", "Designing object model, relationships, and data volume strategy", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Modeling data includes object design, relationships, and data volume strategy.",
  },
  {
    question: "What does Organization-Wide Defaults (OWD) control?",
    options: [
      "Only profiles",
      "The baseline record access for each object (Private, Public Read Only, etc.)",
      "Only permission sets",
      "Only roles"
    ],
    correctAnswer: 1,
    explanation: "OWD defines the default sharing model for each object."
  },
  {
    question: "Which mechanism extends access when OWD is Private?",
    options: [
      "OWD only",
      "Sharing rules, role hierarchy, and manual sharing",
      "Permission sets only",
      "Profiles only"
    ],
    correctAnswer: 1,
    explanation: "Sharing rules, role hierarchy, and manual sharing extend access beyond OWD."
  },
  {
    question: "What is the purpose of a criteria-based sharing rule?",
    options: [
      "To restrict access",
      "To grant access to records that match specified criteria",
      "To create reports",
      "To assign users"
    ],
    correctAnswer: 1,
    explanation: "Criteria-based sharing rules grant access based on field values."
  },
  {
    question: "Which Salesforce feature supports multi-tenant data isolation?",
    options: [
      "Only profiles",
      "Sharing model, org ID, and platform architecture",
      "Permission sets only",
      "Roles only"
    ],
    correctAnswer: 1,
    explanation: "Sharing model and org-level isolation provide multi-tenant security."
  },
  {
    question: "What does the development lifecycle for an Application Architect include?",
    options: [
      "Only coding",
      "Design, development, testing, deployment, and governance",
      "Only deployment",
      "Only documentation"
    ],
    correctAnswer: 1,
    explanation: "Lifecycle spans design through deployment with governance."
  },
  {
    question: "Which relationship affects record-level security and roll-up?",
    options: [
      "Lookup only",
      "Master-Detail (sharing inherits from parent)",
      "Junction object only",
      "External lookup only"
    ],
    correctAnswer: 1,
    explanation: "Master-Detail affects sharing; child inherits parent's access."
  },
  {
    question: "What is the purpose of a delegated admin group?",
    options: [
      "To replace sys admin",
      "To grant limited admin capabilities to specific users",
      "To create profiles",
      "To assign permission sets only"
    ],
    correctAnswer: 1,
    explanation: "Delegated admin groups provide scoped admin access."
  },
  {
    question: "Which integration consideration applies to Application Architects?",
    options: [
      "Ignore security",
      "Authentication, data ownership, and sharing for integrated data",
      "Only REST",
      "Only batch"
    ],
    correctAnswer: 1,
    explanation: "Integration must consider auth, ownership, and sharing."
  },
  {
    question: "What does visibility mean in the sharing context?",
    options: [
      "Only UI",
      "Which records a user can see based on sharing rules and permissions",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "Visibility determines which records are visible to users."
  },
  {
    question: "Which best practice supports scalable role hierarchy design?",
    options: [
      "Unlimited depth",
      "Keep hierarchy flat where possible; avoid deep nesting",
      "One role only",
      "No hierarchy"
    ],
    correctAnswer: 1,
    explanation: "Flatter hierarchies simplify sharing and maintenance."
  },
]

export default function ApplicationArchitectPage() {
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
            code="Application Architect"
            description="Certified Application Architects have a deep understanding of native Salesforce features and functionality. They're also experts at modeling a role hierarchy, data, and appropriate sharing mechanisms."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['Data Modeling', 'Role Hierarchy', 'Sharing', 'Visibility', 'Native Features', 'Governance', 'Best Practices', 'Integration', 'Security', 'Scalability']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Architecture: Object Design and Large Data Volumes</p>
                <p>Application Architects design the data model to support business processes, sharing requirements, and performance. Master-Detail vs Lookup choice impacts cascade delete, sharing inheritance, roll-up summaries, and required relationship. Junction objects for many-to-many. External Objects for data federation. Large Data Volume (LDV) considerations &mdash; indexed fields, selective queries, skinny tables &mdash; must be built into the design, not retrofitted. The architect evaluates trade-offs between normalised and denormalised structures based on query patterns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Business Logic: Flow vs Apex Decision Matrix</p>
                <p>Prefer declarative (Flow) over programmatic (Apex) when flows can handle the logic without governor limit concerns. Use Apex when: the logic is too complex for Flow, requires complex data manipulation, needs callouts, or has performance requirements that Flow cannot meet. Platform Events decouple systems &mdash; use for fire-and-forget async messaging. Change Data Capture streams record changes to external systems. The exam tests the trade-off decision at the architect level &mdash; maintainability, scalability, and test coverage requirements factor into the choice.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Architecture: Patterns and Tools</p>
                <p>REST callouts for synchronous data retrieval. Platform Events for async, decoupled messaging. Bulk API 2.0 for high-volume data exchange. MuleSoft for complex orchestration, protocol translation, or multi-system fan-out. Named Credentials secure endpoint and auth configuration. The integration pattern selection depends on: synchronous vs asynchronous requirements, volume (Bulk API threshold is typically 200+ records), direction (inbound vs outbound), and latency requirements. The exam tests pattern selection based on these criteria.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture: Layered Access Design</p>
                <p>Security design starts at the data model &mdash; OWD determines the record access baseline. Role Hierarchy grants manager visibility. Sharing Rules extend access. Permission Sets and Permission Set Groups manage object/field permissions. The architect must also consider Connected App policies, OAuth scopes, Named Credentials, Shield Platform Encryption for sensitive data, and Event Monitoring for audit. The exam tests holistic security design &mdash; identifying which layer to configure for a given access requirement.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Declarative vs Programmatic Trade-offs</p>
                <p>Architects make build-vs-configure decisions. Declarative tools (Flow, Validation Rules, Formula Fields, Approval Processes) are preferred for maintainability &mdash; no deployment complexity, admins can modify without code deployment. Programmatic code (Apex, LWC) is required for: complex conditional logic exceeding Flow capabilities, external system callouts requiring transformation, and UI patterns not achievable declaratively. The exam presents a business requirement and asks which combination of declarative and programmatic tools provides the best architecture, weighing complexity, maintainability, and scalability.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Application Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Application Architect credential validates expertise in designing robust Salesforce applications. Questions test your ability to apply the right pattern — declarative vs. programmatic, which relationship type, which security model — for complex multi-requirement scenarios.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Modeling for Scale</p>
                <p>Know when to use lookup vs. master-detail, external objects (Salesforce Connect), big objects, and custom metadata types. Understand the impact of each relationship type on reporting, rollups, and data access.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture Layers</p>
                <p>Understand how object-level, field-level, and record-level security interact. Know the order of evaluation and how to use the Access Checker to diagnose access issues in complex orgs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Apex Design Patterns</p>
                <p>Know common design patterns: Singleton, Strategy, and Decorator for Apex. Understand trigger frameworks (one trigger per object pattern), virtual/abstract classes, and interface-based design for testability.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration Patterns</p>
                <p>Know the canonical integration patterns: Remote Process Invocation (request/reply and fire-and-forget), Data Virtualization, Batch Data Sync, and UI Update via Remote Process. Match each to REST/SOAP/Platform Events.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Declarative vs. Programmatic Decision</p>
                <p>Always justify when code is needed vs. when declarative tools suffice. Exam questions reward candidates who choose the simplest, most maintainable solution and understand the trade-offs.</p>
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
