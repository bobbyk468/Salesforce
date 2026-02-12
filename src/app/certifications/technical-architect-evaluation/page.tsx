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
]

export default function TechnicalArchitectEvaluationPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Practice scenario-style thinking and technical architecture concepts for the Architect Evaluation.</p>
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
              { id: 'more-questions', title: 'Next Steps' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}