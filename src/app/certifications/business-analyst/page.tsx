import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import Link from 'next/link'
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

const slug = 'business-analyst'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Certified Business Analyst in Salesforce projects?",
    options: ["Writing Apex code", "Understanding business needs, capturing requirements, and collaborating with stakeholders", "Designing email campaigns", "Managing server infrastructure"],
    correctAnswer: 1,
    explanation: "Certified Business Analysts understand business needs, capture requirements, and collaborate with stakeholders to develop Salesforce solutions that drive business improvements.",
  },
  {
    question: "Which technique is commonly used to discover and document business requirements?",
    options: ["Unit testing", "Stakeholder interviews and workshops", "Deployment scripts", "API development"],
    correctAnswer: 1,
    explanation: "Stakeholder interviews and workshops are standard techniques for discovering and documenting business requirements.",
  },
  {
    question: "What deliverable does a Business Analyst typically produce before development begins?",
    options: ["Deployed package", "Requirements document and user stories", "Test classes", "Integration code"],
    correctAnswer: 1,
    explanation: "Business Analysts produce requirements documents and user stories to guide solution development.",
  },
  {
    question: "How should a Business Analyst prioritize requirements when conflicts exist?",
    options: ["Always choose the technical option", "Align with business objectives and stakeholder agreement", "Defer all decisions to IT", "Choose the cheapest option"],
    correctAnswer: 1,
    explanation: "Prioritization should align with business objectives and involve stakeholder agreement.",
  },
  {
    question: "Which Salesforce artifact helps translate business requirements into implementable features?",
    options: ["Debug log", "Process Builder (legacy)", "User stories and acceptance criteria", "Deployment checklist"],
    correctAnswer: 2,
    explanation: "User stories and acceptance criteria translate business requirements into clear, implementable features for the team.",
  },
  {
    question: "What is the standard format for writing a user story in Agile projects?",
    options: [
      "\"The system shall [function] when [condition]\"",
      "\"As a [role], I want [goal] so that [benefit]\"",
      "\"Given [context] when [event] then [outcome]\"",
      "\"[Actor] performs [action] to achieve [result]\""
    ],
    correctAnswer: 1,
    explanation: "The standard user story format is \"As a [role], I want [goal] so that [benefit].\" This keeps focus on who needs the feature, what they need, and why — anchoring development decisions to real user outcomes.",
  },
  {
    question: "What is the purpose of Acceptance Criteria in a user story?",
    options: [
      "To describe the technical implementation approach for the development team",
      "To define the specific conditions that must be met for the story to be considered done by the product owner",
      "To document the performance benchmarks expected from the solution",
      "To list the dependencies and risks associated with the user story"
    ],
    correctAnswer: 1,
    explanation: "Acceptance Criteria are the pass/fail conditions for a user story — they define exactly what the product owner will test to confirm the story is complete. Without clear acceptance criteria, teams risk rework due to ambiguous definitions of done.",
  },
  {
    question: "A Business Analyst is documenting the current workflow of a business process before designing a new solution. What is this activity called?",
    options: ["Requirements traceability", "Stakeholder mapping", "As-Is process analysis (current state analysis)", "Solution validation"],
    correctAnswer: 2,
    explanation: "As-Is process analysis captures the current state of a business process to identify inefficiencies, pain points, and gaps before designing a To-Be (future state) solution — preventing the team from automating broken processes.",
  },
  {
    question: "Which technique helps a Business Analyst understand the relative importance of stakeholders and their influence on a project?",
    options: ["User Story Mapping", "Stakeholder Analysis using a Power/Interest Grid", "Process Decomposition", "Gap Analysis"],
    correctAnswer: 1,
    explanation: "The Power/Interest Grid plots stakeholders by their influence (power) and interest in the project — guiding the BA on how to engage each group: manage closely, keep satisfied, keep informed, or monitor.",
  },
  {
    question: "What is the purpose of a Requirements Traceability Matrix on a Salesforce project?",
    options: [
      "To map database tables to Salesforce objects",
      "To link each business requirement to specific user stories, features, and test cases — ensuring all requirements are addressed and tested",
      "To track the deployment history of changes across sandbox environments",
      "To document the hierarchy of roles and permissions in the org"
    ],
    correctAnswer: 1,
    explanation: "A Traceability Matrix ensures end-to-end coverage: every business requirement maps to at least one user story, and every user story maps to test cases. It prevents requirements from being missed during development or testing.",
  },
  {
    question: "A project team discovers the solution being built does not address several original business requirements. Which BA technique identifies this type of shortfall?",
    options: ["Risk Register review", "RACI Chart update", "Gap Analysis", "Process Flow Diagram"],
    correctAnswer: 2,
    explanation: "Gap Analysis compares the current state (or planned solution) against the desired future state — identifying gaps where requirements are not addressed. It is typically performed during discovery and at key review points.",
  },
  {
    question: "Which type of requirement describes system performance, security, usability, or scalability expectations rather than specific functionality?",
    options: ["Functional Requirements", "Non-Functional Requirements", "Business Requirements", "Technical Specifications"],
    correctAnswer: 1,
    explanation: "Non-Functional Requirements (NFRs) define quality attributes — how the system performs rather than what it does. Examples: page load times, concurrent user capacity, data security standards. They are often overlooked but critical for solution success.",
  },
  {
    question: "During a discovery workshop, stakeholders from two business units give conflicting requirements for the same field. What is the BA\'s best first action?",
    options: [
      "Implement the version requested by the most senior stakeholder",
      "Document both versions and facilitate a follow-up session to align stakeholders on a single agreed requirement",
      "Escalate the conflict to the project manager for resolution",
      "Choose the simpler option to reduce implementation complexity"
    ],
    correctAnswer: 1,
    explanation: "Conflicting requirements should be documented and resolved through structured stakeholder facilitation — not unilaterally decided by the BA. A dedicated alignment session surfaces the business rationale behind each request and builds consensus.",
  },
  {
    question: "What does the DACI framework define in Salesforce project governance?",
    options: [
      "The data architecture layers for custom objects, fields, and relationships",
      "Decision-making roles: Driver (owns the process), Approver (final decision), Contributor (provides input), and Informed (kept updated)",
      "Deployment steps across sandbox, staging, and production environments",
      "The automation logic sequence for approval processes and flows"
    ],
    correctAnswer: 1,
    explanation: "DACI (Driver, Approver, Contributor, Informed) clarifies who is responsible for driving a decision to closure, who has final approval authority, who contributes expertise, and who only needs to be informed of the outcome.",
  },
  {
    question: "What format do user stories typically follow in Salesforce projects?",
    options: ["As a [system], I want [data] so that [report]", "As a [role], I want [goal] so that [benefit]", "As a [admin], I need [field] for [object]", "As a [user], I need [permission] to [action]"],
    correctAnswer: 1,
    explanation: "User stories follow the format: As a [role], I want [goal] so that [benefit]. This connects the user, the capability, and the business value."
  },
]

export default function BusinessAnalystPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          New to Salesforce? Our{' '}
          <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Administrator
          </Link>{' '}
          exam prep is the recommended first step—it builds the platform knowledge BAs need. See our{' '}
          <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
            certification path
          </Link>{' '}
          to understand where Business Analyst fits in your career. Below you&apos;ll find exam weightage, key concepts, and practice questions.
        </p>
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
            code="Business Analyst"
            description="Certified Business Analysts understand business needs, capture requirements, and collaborate with stakeholders to develop Salesforce solutions that drive business improvements."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Requirements Discovery",
              "Stakeholder Collaboration",
              "Solution Design",
              "User Stories",
              "Process Modeling",
              "Data Modeling Basics",
              "Acceptance Criteria",
              "Documentation",
              "Change Management",
              "Quality Assurance"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Analyst: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Requirements Lifecycle: Discovery → Analysis → Documentation → Validation</p>
                <p>The BA follows a defined requirements lifecycle: <strong>Discover</strong> requirements through interviews, workshops, and observation. <strong>Analyse</strong> them for conflicts, gaps, and feasibility. <strong>Document</strong> them as user stories with acceptance criteria. <strong>Validate</strong> them with stakeholders through review sessions and UAT. The exam frequently tests which phase a given activity belongs to and what output is expected.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Stories and Acceptance Criteria</p>
                <p>A user story follows the format <strong>&quot;As a [role], I want [goal] so that [benefit].&quot;</strong> Acceptance Criteria define the pass/fail conditions that confirm the story is done. Together, they are the primary deliverable connecting business requirements to development. The exam tests how to write effective user stories and how acceptance criteria differ from test cases.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Stakeholder Management: Power/Interest Grid and DACI</p>
                <p>The Power/Interest Grid maps stakeholders by influence and interest — determining whether to manage closely, keep satisfied, keep informed, or monitor. The DACI framework clarifies decision-making: <strong>Driver</strong> (facilitates closure), <strong>Approver</strong> (final decision), <strong>Contributor</strong> (provides input), <strong>Informed</strong> (kept updated). The exam tests both — especially DACI as a governance tool for resolving conflicting requirements.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Process Modeling: As-Is vs To-Be and Gap Analysis</p>
                <p>As-Is analysis documents the current state of a business process — capturing pain points, workarounds, and inefficiencies. To-Be analysis defines the desired future state. Gap Analysis identifies the delta between them and informs the solution scope. Process maps use swimlanes to show which role performs which step. The exam tests when each technique is appropriate and what artefact is produced.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Functional vs Non-Functional Requirements</p>
                <p>Functional Requirements describe what the system does (e.g., &quot;Sales reps can create a quote from an opportunity&quot;). Non-Functional Requirements (NFRs) describe how the system performs — page load times, concurrent user capacity, security standards. NFRs are often missed during discovery but become critical during architecture decisions and testing. The exam tests the distinction and when each type surfaces in a project.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Business Analyst Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Business Analyst exam focuses on requirements elicitation, analysis, and translation into Salesforce solutions. Unlike technical exams, success depends on process methodology: user stories, stakeholder management, and UAT practices.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Stories &amp; Acceptance Criteria</p>
                <p>Know how to write user stories (As a [persona], I want [goal], so that [reason]) and define acceptance criteria that are testable, specific, and verifiable. Questions test whether criteria are complete and unambiguous.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Requirements Elicitation Techniques</p>
                <p>Know the trade-offs of interviews, workshops, surveys, observation, and prototyping. Questions ask which technique is most appropriate for a given scenario — workshops work well for cross-functional alignment, interviews for individual expertise.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Process Mapping &amp; UPN</p>
                <p>Understand Universal Process Notation (UPN) and how to map current-state vs. future-state processes. Know how swimlane diagrams document cross-functional workflows and identify handoffs and pain points.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">UAT Strategy</p>
                <p>User Acceptance Testing involves real end users, realistic data, and verification that business requirements (not just technical specs) are satisfied. Know how to plan, execute, and sign off on UAT.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Stakeholder Management</p>
                <p>Identify stakeholder types (decision-makers, influencers, end users), know when to escalate vs. resolve scope conflicts, and understand how to manage competing priorities and scope creep.</p>
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
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Consultant Certifications</h2>
            <p className="text-sm text-gray-700 mb-2">After this consultant certification, you can add adjacent clouds or deepen your specialisation:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link></li>
              <li><Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link></li>
              <li><Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link></li>
              <li><Link href="/certifications/role/consultant" className="text-salesforce-blue font-medium hover:underline">Consultant certification path</Link></li>
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
