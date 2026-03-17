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

const slug = 'technical-architect-review-board'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does the CTA Architect Review Board exam primarily consist of?",
    options: [
      "Only multiple-choice questions",
      "A scenario-based design that you present and defend before a board of CTAs",
      "Only a written document",
      "Only a coding challenge"
    ],
    correctAnswer: 1,
    explanation: "The Review Board is a live scenario where you present and defend your architecture before a board of Certified Technical Architects.",
  },
  {
    question: "What is typically required before attempting the Architect Review Board?",
    options: [
      "Only Application Architect",
      "Passing the Architect Evaluation (and meeting other CTA program requirements)",
      "Only System Architect",
      "No prerequisites"
    ],
    correctAnswer: 1,
    explanation: "You must pass the Architect Evaluation and meet the CTA program requirements before scheduling the Review Board.",
  },
  {
    question: "Which skills are most critical for the Review Board?",
    options: [
      "Only coding speed",
      "Clear communication, trade-off justification, and handling board questions under pressure",
      "Only slide design",
      "Only documentation"
    ],
    correctAnswer: 1,
    explanation: "The board evaluates how you communicate your design, justify trade-offs, and respond to challenging questions.",
  },
  {
    question: "How should you structure your solution presentation for the Review Board?",
    options: ["Read slides verbatim", "Lead with requirements, constraints, and design decisions; then walk through components and trade-offs", "Focus only on diagrams", "Skip the scenario"],
    correctAnswer: 1,
    explanation: "Structure: requirements → constraints → design → components → trade-offs. Be clear and concise."
  },
  {
    question: "When the board challenges a design choice, what is the best approach?",
    options: ["Defend aggressively", "Acknowledge the concern, explain your reasoning, and discuss alternatives if applicable", "Ignore the question", "Change your design immediately"],
    correctAnswer: 1,
    explanation: "Acknowledge, explain rationale, and discuss alternatives. Show you've considered trade-offs."
  },
  {
    question: "What should your architecture diagram include for the board?",
    options: ["Only Salesforce logo", "Systems, data flows, integration points, security boundaries, and key components", "Only screenshots", "Only text"],
    correctAnswer: 1,
    explanation: "Diagrams should show systems, flows, integrations, and security boundaries for clarity."
  },
  {
    question: "Why is it important to state assumptions explicitly in your design?",
    options: ["Not important", "It sets context, avoids misunderstandings, and shows you've identified unknowns", "Only for compliance", "Only for documentation"],
    correctAnswer: 1,
    explanation: "Explicit assumptions help the board understand your constraints and show thorough analysis."
  },
  {
    question: "Which non-functional requirement is often overlooked in CTA scenarios?",
    options: ["Colors", "Scalability, security, and maintainability", "Naming conventions", "Font sizes"],
    correctAnswer: 1,
    explanation: "Scalability, security, and maintainability are critical; candidates sometimes focus only on functionality."
  },
  {
    question: "How do you handle a question you don't know the answer to during the board?",
    options: ["Guess", "Acknowledge the gap, state what you would research, and connect to what you do know", "Change the subject", "Say nothing"],
    correctAnswer: 1,
    explanation: "Honesty and a structured response (gap + research plan + related knowledge) demonstrate professionalism."
  },
  {
    question: "What role do personas play in your solution design for the board?",
    options: ["No role", "They drive user experience, license choices, and security model", "Only for UI", "Only for reports"],
    correctAnswer: 1,
    explanation: "Personas inform UX, licensing, and security—all areas the board evaluates."
  },
  {
    question: "When presenting integration architecture, what should you emphasize?",
    options: ["Only APIs", "Data consistency, error handling, security, and scalability", "Only middleware", "Only endpoints"],
    correctAnswer: 1,
    explanation: "Integration design should address consistency, errors, security, and scale."
  },
  {
    question: "What is the purpose of the 'Ask Me Anything' (AMA) section in CTA prep?",
    options: ["No purpose", "Practicing answering broad architecture and Salesforce questions under pressure", "Only for timing", "Only for slides"],
    correctAnswer: 1,
    explanation: "AMA simulates board questioning and builds confidence for unpredictable follow-ups."
  },
  {
    question: "Which deliverable is typically required before the Review Board presentation?",
    options: ["None", "A written solution document or architecture artifact", "Only slides", "Only a video"],
    correctAnswer: 1,
    explanation: "A written artifact documents your design for the board to review before or during the session."
  },
  {
    question: "How should you justify choosing a declarative solution over code?",
    options: ["Always choose code", "Explain maintainability, speed to implement, and governance benefits when requirements fit", "Never justify", "Only for admins"],
    correctAnswer: 1,
    explanation: "Declarative solutions offer maintainability and governance; justify when they meet requirements."
  },
  {
    question: "What does 'defending your architecture' mean in the Review Board context?",
    options: ["Arguing", "Explaining design decisions, trade-offs, and how your solution meets requirements under board scrutiny", "Reading slides", "Agreeing with everything"],
    correctAnswer: 1,
    explanation: "Defending means clearly explaining your rationale and responding thoughtfully to challenges."
  },
  {
    question: "Which practice helps manage time during the Review Board presentation?",
    options: ["Rushing", "Rehearsing, timing each section, and leaving buffer for questions", "Skipping sections", "Going over time"],
    correctAnswer: 1,
    explanation: "Rehearsal and timeboxing help you stay on track and leave room for discussion."
  },
]

export default function TechnicalArchitectReviewBoardPage() {
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
            code="CTA Step 2"
            description="The Architect Review Board is the final step to become a CTA. You receive a scenario, design a solution, and present and defend it before a board of Certified Technical Architects. Success here earns the Certified Technical Architect credential."
            examDetails={{
              questions: "Board scenario",
              passingScore: "Board decision",
              duration: "Board session",
              cost: "$6000",
            }}
            topics={[
              "Scenario Analysis",
              "Solution Design",
              "Presentation & Communication",
              "Trade-off Justification",
              "Security & Compliance",
              "Integration & Data",
              "Handling Board Questions",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CTA Review Board: Key Concepts for Preparation</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Review Board Format & Logistics</p>
                <p>The Salesforce CTA Review Board is a 2-hour oral examination conducted virtually (via Zoom) before a panel of 3–4 currently active Salesforce CTAs who serve as evaluators. Candidates receive the scenario document 30 minutes before the session starts — use this time to read carefully, identify all requirements (functional and non-functional), spot constraints, and outline a response structure. The session consists of a ~30-minute presentation (with shared screen for diagrams) followed by ~60–90 minutes of Q&A and probing challenges. A whiteboard tool (or pre-prepared diagrams) is expected. Candidates are scored Pass or Fail with detailed feedback provided regardless of outcome.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Preparing Architecture Diagrams</p>
                <p>Effective CTA presentations use clear, well-labeled diagrams: Context Diagram (systems involved and their relationships), Integration Architecture Diagram (data flows, protocols, sync/async), Data Model Diagram (key objects, relationships, volumes), Security Architecture Diagram (identity, encryption, sharing), and Deployment Diagram (orgs, sandboxes, CI/CD). Diagrams must be legible when screen-shared — use color coding by system type (Salesforce = blue, external = gray, integration layer = orange). Each diagram should have a legend. Practice presenting each diagram in under 90 seconds with a clear narrative: "This shows... The key decision here is... The trade-off is...". Avoid cluttered diagrams that require extensive explanation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Common Failure Areas & How to Avoid Them</p>
                <p>Statistical analysis of failed Review Board attempts reveals recurring gaps: (1) Incomplete solution — not addressing all scenario requirements; use a checklist before presenting. (2) Lack of specificity — saying "we will use Salesforce&apos;s security model" without specifying OWD, role hierarchy, sharing rules, or Shield. (3) Ignoring non-functional requirements — scalability, performance, availability, compliance. (4) No integration error handling — every integration must address what happens when it fails. (5) Defensive responses to challenges — treat every challenge as a "help me understand" question, not an attack. (6) Time management — running over on presentation leaves no time for Q&A, which is where most probing happens. Practice with a timer religiously.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Responding to Board Challenges</p>
                <p>When a Board member challenges your design, use the STAR-A framework: Situation (restate the challenge to show you understood), Think (pause visibly — evaluators want to see you think, not react), Answer (address the specific challenge with a specific answer), Rationale (explain the reasoning), Adapt (if the challenge reveals a genuine gap, update your design on the spot and explain the revision). Never say "I don&apos;t know" — say "My initial design assumed X; given your challenge, I would revise it to Y because..." The Board is not trying to trick you — they are stress-testing your design for production-level robustness. Candidates who engage thoughtfully with challenges often score higher than those whose initial designs were unchallenged.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Success Strategies & Preparation Plan</p>
                <p>Successful CTA candidates typically follow a 3–6 month structured preparation plan: (1) CTA Bootcamp or coaching program with active CTAs. (2) Weekly mock Review Board sessions — at minimum 8–10 full mock sessions before attempting the real board. (3) Deep-dive study in weak areas: large data volumes, integration architecture, security, and multi-org strategy are the most commonly cited gaps. (4) Build a library of 5–10 practice scenarios (Salesforce provides some; community resources provide more) and practice presenting each. (5) Get comfortable diagramming under time pressure — set a timer for 20 minutes and draw a complete architecture diagram from a scenario. (6) Join the CTA Study Group in the Trailblazer Community for peer feedback and shared resources.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Technical Architect Review Board Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The CTA Review Board is a live, oral examination where candidates present architecture solutions to a panel of senior Salesforce architects. Preparation requires practicing under realistic conditions — not just studying content.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">The Review Board Format</p>
                <p>The Review Board presents a complex business scenario. You have time to review it, then present your architecture to the panel and answer questions. Know the format deeply so logistics don&apos;t distract you on the day.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Presentation Structure</p>
                <p>Open with a brief summary of your understanding of the requirements, present your high-level architecture diagram, walk through each component and key decisions, address risks, and close with a recommendation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Handling Panel Questions</p>
                <p>Panel questions probe your assumptions and test alternative approaches. If challenged, consider the question carefully, acknowledge valid points, and either defend your position with evidence or update your recommendation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Deep Dive Readiness</p>
                <p>Be prepared to go deep on any component of your solution: data model, integration pattern, security configuration, deployment approach. If you propose something, know the details.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mock Board Practice Is Essential</p>
                <p>The only way to prepare for the Review Board is to do it. Practice with mock panels, record yourself, and review your performance. Focus on confidence, clarity, and structured thinking under pressure.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length, "— practice thinking like a CTA and defending architecture decisions for the Review Board.")}
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
              { id: 'more-questions', title: 'Previous Step' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
