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

const slug = 'slack-administrator'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
  {
    question: "What is the purpose of Slack Enterprise Grid?",
    options: [
      "A single workspace only",
      "Connect multiple workspaces under one organization with centralized admin controls",
      "Email integration only",
      "A reporting tool"
    ],
    correctAnswer: 1,
    explanation: "Enterprise Grid allows large organizations to connect multiple workspaces under centralized governance."
  },
  {
    question: "Which Slack feature allows users to create automated workflows without code?",
    options: [
      "Slack Connect only",
      "Workflow Builder",
      "Channel management only",
      "Search"
    ],
    correctAnswer: 1,
    explanation: "Workflow Builder enables users to create automated workflows for common tasks without coding."
  },
  {
    question: "What does channel retention control?",
    options: [
      "Who can join a channel",
      "How long messages are kept before automatic deletion",
      "Channel names only",
      "Integrations"
    ],
    correctAnswer: 1,
    explanation: "Retention policies determine how long messages and files are retained in channels for compliance."
  },
  {
    question: "Which Slack setting helps prevent data loss when members leave?",
    options: [
      "Emoji settings",
      "Data retention and eDiscovery export policies",
      "Theme settings only",
      "Notification preferences"
    ],
    correctAnswer: 1,
    explanation: "Retention and eDiscovery policies ensure organizational data is preserved and recoverable."
  },
  {
    question: "What is a Slack shared channel?",
    options: [
      "A channel with many members",
      "A channel shared between two or more Slack workspaces for cross-org collaboration",
      "A public channel only",
      "A channel with integrations"
    ],
    correctAnswer: 1,
    explanation: "Shared channels enable secure collaboration between different organizations' Slack workspaces."
  },
  {
    question: "Which Slack admin capability helps control app installations?",
    options: [
      "Channel creation only",
      "App management policies and approved app directories",
      "User invitations only",
      "Message search"
    ],
    correctAnswer: 1,
    explanation: "App management policies let admins control which apps can be installed and used."
  },
  {
    question: "What does Slack Analytics provide to administrators?",
    options: [
      "Only message count",
      "Usage metrics, adoption trends, and engagement data",
      "Email statistics only",
      "Sales data"
    ],
    correctAnswer: 1,
    explanation: "Slack Analytics helps admins understand adoption, usage patterns, and engagement."
  },
  {
    question: "Which feature allows Slack admins to manage users at scale?",
    options: [
      "Manual addition only",
      "SCIM provisioning and directory sync",
      "Email invitations only",
      "Channel invites"
    ],
    correctAnswer: 1,
    explanation: "SCIM and directory sync enable bulk user provisioning and lifecycle management."
  },
  {
    question: "What is the purpose of Slack compliance exports?",
    options: [
      "To backup files only",
      "To export message and file data for legal, regulatory, or compliance requirements",
      "To create reports",
      "To share channels"
    ],
    correctAnswer: 1,
    explanation: "Compliance exports support eDiscovery and regulatory compliance requirements."
  },
  {
    question: "Which Slack Connect feature requires approval from both orgs?",
    options: [
      "Joining a channel",
      "Creating a shared channel between workspaces",
      "Sending a message",
      "Adding an emoji"
    ],
    correctAnswer: 1,
    explanation: "Shared channel creation requires approval from admins of both connected organizations."
  },
]

export default function SlackAdministratorPage() {
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
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            
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
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
