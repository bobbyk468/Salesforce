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

const slug = 'slack-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Slack API is used to build interactive components like buttons and menus?",
    options: ["REST API only", "Block Kit", "Web API", "Events API only"],
    correctAnswer: 1,
    explanation: "Block Kit is the UI framework for designing interactive message surfaces in Slack apps.",
  },
  {
    question: "What is the purpose of Slack App Manifests?",
    options: ["To deploy to Heroku", "To define app configuration in YAML", "To send emails", "To configure CPQ"],
    correctAnswer: 1,
    explanation: "App Manifests allow you to define Slack app configuration (scopes, events, shortcuts) in YAML.",
  },
  {
    question: "Which Slack event type is fired when a user joins a channel?",
    options: ["message", "member_joined_channel", "app_mention", "reaction_added"],
    correctAnswer: 1,
    explanation: "member_joined_channel is the event emitted when a user joins a public or private channel.",
  },
  {
    question: "What does the Slack Web API method chat.postMessage do?",
    options: ["Delete a message", "Post a message to a channel", "Create a channel", "List users"],
    correctAnswer: 1,
    explanation: "chat.postMessage sends a message to a channel, user DM, or other conversation.",
  },
  {
    question: "Which OAuth scope is required to post messages as your app?",
    options: ["users:read", "chat:write", "channels:history", "im:read"],
    correctAnswer: 1,
    explanation: "chat:write allows the app to post messages to channels and conversations.",
  },
]

export default function SlackDeveloperPage() {
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
            code="Slack Developer"
            description="Certified Slack Developers have deep knowledge of the Slack Platform and Slack's APIs and possess the knowledge, skills, and experience to design and build custom applications within Slack."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '105 min', cost: '$200' }}
            topics={['Slack APIs', 'Block Kit', 'Events', 'Interactivity', 'OAuth', 'Bolt Framework', 'App Manifests', 'Security', 'Testing', 'Deployment']}
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