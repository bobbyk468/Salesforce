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

const slug = 'strategy-designer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Platform Strategy Designer?",
    options: ["Only coding", "Using design methods to create compelling experience strategies that drive business outcomes on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Strategy Designers use design methods to create experience strategies that drive business outcomes.",
  },
  {
    question: "Which design discipline do Strategy Designers typically use?",
    options: ["Only visual design", "Design thinking, research, and strategy to define experience direction", "Only development", "Only testing"],
    correctAnswer: 1,
    explanation: "They use design thinking, research, and strategy to define experience direction.",
  },
  {
    question: "What does 'experience strategy' mean in this context?",
    options: ["Only UI mockups", "A plan for how users will interact with products and achieve outcomes", "Only technical architecture", "Only data model"],
    correctAnswer: 1,
    explanation: "Experience strategy is the plan for user interactions and outcomes.",
  },
  {
    question: "Which Salesforce capability do Strategy Designers often align with?",
    options: ["Only Apex", "Experience Cloud, Sales, Service, and platform features", "Only Marketing Cloud", "Only Heroku"],
    correctAnswer: 1,
    explanation: "They align strategy with Experience Cloud and platform capabilities.",
  },
  {
    question: "What outcome should a Strategy Designer drive?",
    options: ["Only documentation", "Business outcomes through compelling, human-centered experience strategies", "Only code", "Only reports"],
    correctAnswer: 1,
    explanation: "They drive business outcomes through human-centered experience strategies.",
  },
]

export default function StrategyDesignerPage() {
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
            code="Strategy Designer"
            description="Certified Platform Strategy Designers have expertise using design methods to create compelling experience strategies that drive business outcomes using the Salesforce Platform."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Design Methods', 'Experience Strategy', 'Research', 'Stakeholder Alignment', 'Platform Capabilities', 'Business Outcomes', 'Human-Centered Design', 'Best Practices', 'Documentation', 'Presentation']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
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