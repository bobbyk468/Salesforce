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

const slug = 'slack-administrator'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary responsibility of a Certified Slack Administrator?",
    options: [
      "Developing Slack apps only",
      "Implementing, configuring, and managing Slack and recommending policies, settings, and features",
      "Designing marketing campaigns in Slack",
      "Managing Salesforce CRM"
    ],
    correctAnswer: 1,
    explanation: "Certified Slack Administrators have the skills to implement, configure, and manage Slack and can recommend policies, settings, and features to enhance team productivity."
  },
  {
    question: "Where are org-wide Slack settings typically managed?",
    options: [
      "In each channel",
      "Slack Admin settings / Org settings",
      "Only in Salesforce",
      "In Email Studio"
    ],
    correctAnswer: 1,
    explanation: "Slack org-wide and workspace settings are managed in Slack Admin / Org settings."
  },
  {
    question: "Which Slack feature helps control who can create channels or invite guests?",
    options: [
      "Channel bookmarks",
      "Administration policies and permissions",
      "Emoji reactions only",
      "Search filters"
    ],
    correctAnswer: 1,
    explanation: "Administration policies and permissions control channel creation, guest invites, and other workspace behavior."
  },
  {
    question: "What does Slack Connect allow administrators to manage?",
    options: [
      "Only internal channels",
      "Secure collaboration with external organizations via shared channels",
      "Email integration only",
      "CPQ quotes"
    ],
    correctAnswer: 1,
    explanation: "Slack Connect enables secure collaboration with external organizations through shared channels."
  },
  {
    question: "Which capability is important for a Slack Administrator to recommend for team productivity?",
    options: [
      "Disabling all integrations",
      "Workflow automation, channel structure, and appropriate settings",
      "Removing search",
      "Limiting channels to one per team"
    ],
    correctAnswer: 1,
    explanation: "Admins recommend workflow automation, logical channel structure, and settings that enhance team productivity."
  },
]

export default function SlackAdministratorPage() {
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
            code="Slack Admin"
            description="Certified Slack Administrators have the skills to implement, configure, and manage Slack and can recommend policies, settings, and features to enhance team productivity."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Slack Setup & Configuration",
              "Channels & Workspace Structure",
              "Policies & Permissions",
              "Slack Connect",
              "Integrations",
              "Security & Compliance",
              "User Management",
              "Analytics",
              "Workflow Builder",
              "Best Practices"
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
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions.
            </p>
            
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

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete question bank with detailed explanations.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Contact Us for Full Access
            </a>
          </div>

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