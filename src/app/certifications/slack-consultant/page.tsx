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

const slug = 'slack-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Slack Consultant?",
    options: ["Email only", "Helping clients maximize Slack through solution design, change management, and user adoption", "CPQ only", "UI design only"],
    correctAnswer: 1,
    explanation: "Slack Consultants help clients maximize Slack through solution design, change management, and user adoption.",
  },
  {
    question: "Which area does a Slack Consultant typically address?",
    options: ["Only technical setup", "Transforming collaboration through solution design, change management, and adoption", "Only reporting", "Only integrations"],
    correctAnswer: 1,
    explanation: "They focus on transforming collaboration via design, change management, and adoption.",
  },
  {
    question: "What is change management in the context of Slack?",
    options: ["Code deployment only", "Helping organizations adopt new ways of working with Slack", "Email templates only", "CPQ configuration only"],
    correctAnswer: 1,
    explanation: "Change management helps organizations adopt new collaboration practices with Slack.",
  },
  {
    question: "Which Slack feature supports external collaboration?",
    options: ["Only internal channels", "Slack Connect for secure collaboration with external organizations", "Email only", "Slack Connect is not a feature"],
    correctAnswer: 1,
    explanation: "Slack Connect enables secure collaboration with external partners via shared channels.",
  },
  {
    question: "What should a Slack Consultant recommend for user adoption?",
    options: ["No training", "Training, champions, and governance that support adoption", "Only technical docs", "Only admin settings"],
    correctAnswer: 1,
    explanation: "Training, champions, and governance are key to driving Slack adoption.",
  },
  {
    question: "What is solution design in the context of Slack consulting?",
    options: [
      "Code development only",
      "Designing channel structure, workflows, and integrations to meet client needs",
      "Email setup only",
      "CPQ configuration"
    ],
    correctAnswer: 1,
    explanation: "Solution design includes channel structure, workflows, and integrations aligned to client goals."
  },
  {
    question: "Which Salesforce integration is relevant for Slack Consultants?",
    options: [
      "Slack for Salesforce only",
      "Slack for Salesforce, CRM integration, and contextual collaboration",
      "Marketing Cloud only",
      "Tableau only"
    ],
    correctAnswer: 1,
    explanation: "Slack for Salesforce and CRM integration enable contextual collaboration."
  },
  {
    question: "What does governance mean for Slack implementations?",
    options: [
      "No rules",
      "Policies for channels, retention, security, and app usage",
      "Only emoji policies",
      "Only notifications"
    ],
    correctAnswer: 1,
    explanation: "Governance covers policies for channels, retention, security, and apps."
  },
  {
    question: "Which metric helps measure Slack adoption success?",
    options: [
      "Only message count",
      "Active users, engagement, and channel participation",
      "Email opens only",
      "CPQ quote count"
    ],
    correctAnswer: 1,
    explanation: "Adoption metrics include active users, engagement, and participation."
  },
  {
    question: "What is a Slack champion program?",
    options: [
      "A paid tier",
      "Empowering power users to drive adoption and support peers",
      "A channel type",
      "An integration"
    ],
    correctAnswer: 1,
    explanation: "Champions are power users who promote adoption and help peers."
  },
  {
    question: "Which consideration is important when designing Slack channel structure?",
    options: [
      "Ignore team structure",
      "Team structure, projects, and communication patterns",
      "Only public channels",
      "Only private channels"
    ],
    correctAnswer: 1,
    explanation: "Channel structure should reflect teams, projects, and communication needs."
  },
  {
    question: "What does change management aim to achieve for Slack rollout?",
    options: [
      "No training",
      "Smooth transition and sustained adoption of new collaboration practices",
      "Only technical setup",
      "Only admin training"
    ],
    correctAnswer: 1,
    explanation: "Change management ensures smooth transition and sustained adoption."
  },
  {
    question: "Which Workflow Builder use case supports consultants?",
    options: [
      "Only code",
      "Automating approvals, onboarding, and repetitive tasks",
      "Only reports",
      "Only integrations"
    ],
    correctAnswer: 1,
    explanation: "Workflow Builder automates approvals, onboarding, and repetitive tasks."
  },
  {
    question: "What is the purpose of a Slack adoption roadmap?",
    options: [
      "To skip phases",
      "To phase rollout, training, and optimization over time",
      "To deploy everything at once",
      "To avoid governance"
    ],
    correctAnswer: 1,
    explanation: "An adoption roadmap phases rollout and optimization for success."
  },
  {
    question: "Which best practice applies to Slack consulting engagements?",
    options: [
      "Ignore stakeholder input",
      "Discover needs, design for users, and measure outcomes",
      "No training needed",
      "Only technical configuration"
    ],
    correctAnswer: 1,
    explanation: "Best practice: discover needs, design for users, and measure outcomes."
  },
]

export default function SlackConsultantPage() {
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
            code="Slack Consultant"
            description="Certified Slack Consultants help clients maximize the potential of Slack by transforming their organization's collaboration through solution design, change management, and user adoption."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Slack Solution Design', 'Change Management', 'User Adoption', 'Channels & Structure', 'Integrations', 'Governance', 'Slack Connect', 'Best Practices', 'Analytics', 'Security']}
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
