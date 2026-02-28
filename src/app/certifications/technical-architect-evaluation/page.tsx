import FullQuestionBankCta from '@/components/FullQuestionBankCta'
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
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'technical-architect-evaluation'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does the CTA Architect Evaluation primarily assess?",
    options: [
      "Only coding skills",
      "Scenario-based architecture design and multiple-choice technical knowledge",
      "Only presentation skills",
      "Only documentation"
    ],
    correctAnswer: 1,
    explanation: "The Architect Evaluation is a scenario-based exam that tests your ability to design solutions and answer technical architecture questions.",
  },
  {
    question: "Which certifications are typically required before taking the Architect Evaluation?",
    options: [
      "None",
      "Application Architect and System Architect (or equivalent)",
      "Platform Developer II only",
      "Sales Cloud Consultant only"
    ],
    correctAnswer: 1,
    explanation: "Application Architect and System Architect (or equivalent) are typical prerequisites for the CTA path.",
  },
  {
    question: "What is a key deliverable of the Architect Evaluation?",
    options: [
      "A written essay only",
      "A solution design addressing the scenario requirements, constraints, and trade-offs",
      "A live coding session",
      "A multiple-choice exam only"
    ],
    correctAnswer: 1,
    explanation: "The evaluation requires designing a solution that addresses the scenario's requirements, constraints, and trade-offs.",
  },
  {
    question: "When designing a multi-org integration, which pattern supports data consistency?",
    options: ["Point-to-point only", "Event-driven architecture with a centralized event bus", "Synchronous REST only", "Batch file transfer only"],
    correctAnswer: 1,
    explanation: "Event-driven architecture with a central bus (e.g., Platform Events, MuleSoft) supports loose coupling and consistency."
  },
  {
    question: "What is the primary benefit of using a canonical data model in integration?",
    options: ["Faster coding", "Reducing point-to-point mappings and simplifying maintenance across systems", "Lower cost only", "Fewer APIs"],
    correctAnswer: 1,
    explanation: "Canonical models reduce coupling and simplify transformations between multiple source and target systems."
  },
  {
    question: "Which security consideration is critical when designing a customer-facing Community?",
    options: ["Colors only", "Guest user access, sharing rules, and data visibility per experience", "License count only", "Theme selection only"],
    correctAnswer: 1,
    explanation: "Guest access, sharing, and profile-based visibility must be designed to protect data while enabling the right access."
  },
  {
    question: "When should you recommend Heroku vs Salesforce Platform for an application?",
    options: ["Always Heroku", "Heroku for polyglot, high-throughput, or non-Salesforce-centric workloads; Platform for CRM-centric, declarative-first", "Always Platform", "No difference"],
    correctAnswer: 1,
    explanation: "Heroku suits polyglot and high-scale; Platform suits CRM-centric, declarative, and Salesforce-native apps."
  },
  {
    question: "What role does the Role Hierarchy play in record-level security?",
    options: ["No role", "Users can inherit access to records owned by users below them in the hierarchy", "Only for reports", "Only for dashboards"],
    correctAnswer: 1,
    explanation: "Role hierarchy grants upward visibility: users see records owned by roles below them."
  },
  {
    question: "Which pattern supports high-volume, asynchronous integration with external systems?",
    options: ["Synchronous callouts only", "Change Data Capture, Platform Events, or message queues", "Workflow rules only", "Process Builder only"],
    correctAnswer: 1,
    explanation: "CDC, Platform Events, and queues support asynchronous, scalable integration without blocking transactions."
  },
  {
    question: "What is a key trade-off when using a large data volume (LDV) strategy with Big Objects?",
    options: ["No trade-offs", "Query flexibility vs. storage and retention; Big Objects are append-only, optimized for analytics", "Cost only", "Performance only"],
    correctAnswer: 1,
    explanation: "Big Objects are append-only and optimized for analytics; they trade flexible querying for scale and retention."
  },
  {
    question: "When designing for multi-currency, what must an architect consider?",
    options: ["Only display", "Advanced Currency Management, conversion dates, and reporting currency", "Only manual entry", "Only one currency"],
    correctAnswer: 1,
    explanation: "ACM, conversion dates, and reporting currency affect accuracy and compliance in multi-currency orgs."
  },
  {
    question: "Which governance practice reduces technical debt in a Salesforce org?",
    options: ["No governance", "Release management, code review, and org-level standards (naming, limits)", "Only documentation", "Only training"],
    correctAnswer: 1,
    explanation: "Release management, code review, and org standards help maintain quality and reduce debt over time."
  },
  {
    question: "What does the Sharing Calculator help an architect with?",
    options: ["License costs", "Estimating share row counts and identifying sharing rule complexity", "User count only", "Storage only"],
    correctAnswer: 1,
    explanation: "The Sharing Calculator estimates row-level security load and helps optimize sharing design."
  },
  {
    question: "When should an architect recommend a custom LWC over a Flow screen?",
    options: ["Never", "When complex UI, heavy logic, or reusable components are required", "Always LWC", "Always Flow"],
    correctAnswer: 1,
    explanation: "LWC suits complex, reusable UI; Flow suits simpler, declarative screens and guided processes."
  },
  {
    question: "Which integration pattern supports real-time, transactional sync between Salesforce and an ERP?",
    options: ["Batch only", "Synchronous API (REST/SOAP) or event-driven with immediate processing", "File-based only", "No real-time option"],
    correctAnswer: 1,
    explanation: "Synchronous APIs or event-driven flows with immediate handlers support real-time transactional sync."
  },
  {
    question: "What is the purpose of a Solution Architecture Document (SAD)?",
    options: ["Marketing only", "Documenting requirements, design decisions, trade-offs, and implementation approach for stakeholders", "Only for developers", "Only for admins"],
    correctAnswer: 1,
    explanation: "A SAD captures architecture decisions, rationale, and implementation approach for alignment and handoff."
  },
]

export default function TechnicalArchitectEvaluationPage() {
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
            code="CTA Step 1"
            description="The Architect Evaluation is the first step toward CTA. It assesses your ability to design secure, scalable, integrated solutions through scenario-based and multiple-choice questions. Passing this qualifies you for the Architect Review Board."
            examDetails={{
              questions: "Scenario + MC",
              passingScore: "Per exam",
              duration: "Timed",
              cost: "Part of CTA",
            }}
            topics={[
              "Solution Design",
              "Security & Identity",
              "Integration Architecture",
              "Data & Sharing",
              "Performance & Scalability",
              "Governance & Best Practices",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CTA Evaluation: Key Concepts for Success</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Scenario-Based Assessment Format</p>
                <p>The Salesforce CTA (Certified Technical Architect) Review Board is a scenario-based oral examination — not a multiple-choice test. Candidates receive a multi-page business scenario 30 minutes before their 2-hour board session. The scenario describes a fictional company with a complex Salesforce + external system landscape, business requirements, and technical constraints. The candidate must design a complete solution architecture, present it to a panel of 3–4 CTA evaluators, and defend it under challenge. The evaluation tests architectural thinking, communication of trade-offs, adaptability when the scenario changes, and mastery of all Salesforce platform areas.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Decision Justification</p>
                <p>Every architecture decision must be justified with three elements: the business requirement it satisfies, the technical reasoning (why this approach over alternatives), and the explicit trade-offs (cost, complexity, maintainability, risk). Evaluators specifically probe whether candidates can articulate why they chose X over Y — not just what they chose. Common decision areas: single org vs. multi-org, declarative vs. code, synchronous vs. async, AppExchange vs. custom build, Salesforce-native data store vs. external database. Preparation tip: for each major decision in practice scenarios, explicitly say "I chose X over Y because..." and name the specific trade-offs. Vague answers are probed until the candidate either justifies or concedes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Risk & Trade-off Analysis</p>
                <p>CTAs are expected to proactively identify risks in their own designs — evaluators expect candidates to say "One risk with this approach is..." before being asked. Risk categories: technical risks (governor limits, data volume, API capacity), business risks (adoption, change management, vendor lock-in), operational risks (monitoring, support, upgrades), and security/compliance risks. Mitigation strategies must be specific — not "we will monitor it" but "we will implement a dead letter queue with alerting and a manual reprocessing workflow for failed events." Risk scoring (probability × impact) demonstrates mature architectural thinking. The evaluation rewards candidates who are intellectually honest about their design&apos;s weaknesses.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Defense of Design Choices</p>
                <p>The Review Board will challenge design choices with "What if..." and "Why not..." questions to test whether the candidate truly understands the solution or memorized a template. Common challenges: "What if the integration endpoint goes down for 4 hours during business hours?", "What if your MuleSoft solution is over budget — what is the fallback?", "Why didn&apos;t you use a Platform Event here instead of a REST callout?" Candidates should respond with: acknowledge the challenge, explain the impact on the current design, and either defend it (with new justification) or adapt it (with a revised approach). Changing a design under challenge is not failure — it demonstrates that the architect can think dynamically.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Evaluator Rubric & Common Failure Areas</p>
                <p>The CTA Review Board evaluates candidates on: Breadth (covering all required architecture areas), Depth (detailed, specific answers in each area), Communication (clear diagrams, structured verbal explanations), and Adaptability (handling scenario changes and challenges gracefully). Common failure areas: (1) Focusing only on Salesforce and ignoring external systems. (2) Providing generic answers without specific Salesforce feature references. (3) Failing to address security, data architecture, or integration explicitly. (4) Reacting defensively to challenges instead of engaging constructively. (5) Running out of time before covering all scenario requirements. Preparation: complete 10+ full mock Review Board sessions with peer CTAs or coaches, record and review yourself, and practice under time pressure.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Technical Architect Evaluation Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The CTA Evaluation program assesses your readiness for the Review Board through a structured evaluation process. Focus on demonstrating architectural breadth, clear communication, and the ability to handle ambiguous requirements.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Demonstrating Architecture Breadth</p>
                <p>Evaluators look for evidence of experience across all CTA domains: data architecture, integration, security, UX, environment management, and data migration. Build a portfolio of real-world architectural decisions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Handling Ambiguity</p>
                <p>CTA evaluations present deliberately ambiguous scenarios. Practice asking clarifying questions, stating your assumptions clearly, and designing solutions that are flexible enough to accommodate multiple interpretations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Whiteboard Communication</p>
                <p>Practice whiteboarding architecture diagrams quickly and clearly. Your diagram should show system boundaries, integration points, data flows, and key design decisions — without being cluttered.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Justification Framework</p>
                <p>Use a consistent framework: state the requirement, present options, identify trade-offs for each, and recommend with clear rationale. This structured approach demonstrates CTA-level thinking.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Prepare with Mock Sessions</p>
                <p>The CTA community regularly runs mock Review Board sessions. Participating in these is the single most effective preparation strategy — treat each mock as the real thing and seek detailed feedback.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length, "— practice scenario-style thinking and technical architecture concepts for the Architect Evaluation.")}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
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
              { id: 'more-questions', title: 'Next Steps' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
