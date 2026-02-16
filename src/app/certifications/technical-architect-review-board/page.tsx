import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
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
]

export default function TechnicalArchitectReviewBoardPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
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
            <p className="text-gray-600 mb-8">Practice thinking like a CTA and defending architecture decisions for the Review Board.</p>
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