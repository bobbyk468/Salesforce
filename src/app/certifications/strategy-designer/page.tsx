import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
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
  {
    question: "What does design thinking emphasize?",
    options: [
      "Only coding",
      "Empathize, define, ideate, prototype, and test",
      "Only documentation",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Design thinking uses empathize, define, ideate, prototype, and test."
  },
  {
    question: "Which deliverable communicates experience strategy to stakeholders?",
    options: [
      "Code only",
      "Strategy document, journey maps, and vision artifacts",
      "Only wireframes",
      "Only prototypes"
    ],
    correctAnswer: 1,
    explanation: "Strategy documents and journey maps communicate experience direction."
  },
  {
    question: "What does stakeholder alignment achieve?",
    options: [
      "No alignment",
      "Shared understanding of goals, priorities, and success criteria",
      "Only technical alignment",
      "Only design alignment"
    ],
    correctAnswer: 1,
    explanation: "Stakeholder alignment ensures shared goals and success criteria."
  },
  {
    question: "Which research method helps Strategy Designers understand user needs?",
    options: [
      "Only surveys",
      "Interviews, observation, and empathy mapping",
      "Only analytics",
      "Only code review"
    ],
    correctAnswer: 1,
    explanation: "Interviews, observation, and empathy mapping reveal user needs."
  },
  {
    question: "What is the purpose of an experience vision?",
    options: [
      "To replace strategy",
      "To articulate the target future state for users and the business",
      "To write code",
      "To deploy"
    ],
    correctAnswer: 1,
    explanation: "Experience vision articulates the target future state."
  },
  {
    question: "Which platform capability should Strategy Designers understand?",
    options: [
      "Only Apex",
      "Experience Cloud, Sales, Service, and automation capabilities",
      "Only Heroku",
      "Only MuleSoft"
    ],
    correctAnswer: 1,
    explanation: "Strategy Designers align with platform capabilities."
  },
  {
    question: "What does opportunity framing support?",
    options: [
      "Only coding",
      "Defining the problem space and opportunity for design",
      "Only testing",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Opportunity framing defines the problem and opportunity."
  },
  {
    question: "Which outcome should an experience strategy prioritize?",
    options: [
      "Only technology",
      "User value and business outcomes",
      "Only cost",
      "Only speed"
    ],
    correctAnswer: 1,
    explanation: "Strategy should balance user value and business outcomes."
  },
  {
    question: "What is the benefit of involving users early in strategy?",
    options: [
      "No benefit",
      "Validation of assumptions and alignment with real needs",
      "Slower only",
      "Higher cost only"
    ],
    correctAnswer: 1,
    explanation: "Early user involvement validates assumptions and needs."
  },
  {
    question: "Which best practice applies to Strategy Designer deliverables?",
    options: [
      "Technical only",
      "Clear, actionable, and aligned with business and user goals",
      "Vague only",
      "No alignment"
    ],
    correctAnswer: 1,
    explanation: "Deliverables should be clear, actionable, and aligned."
  },
]

export default function StrategyDesignerPage() {
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
