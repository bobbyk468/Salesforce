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
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length, "— practice thinking like a CTA and defending architecture decisions for the Review Board.")}</p>
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
