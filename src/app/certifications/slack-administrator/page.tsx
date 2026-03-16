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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Slack Administrator: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Workspace Setup and Channel Management</p>
                <p>Slack workspaces are the top-level container. Channels are the primary collaboration unit — public (discoverable and joinable by anyone), private (by invitation only), shared (connects multiple workspaces). Default channels are automatically joined when users are added. Channel naming conventions (e.g., #team-, #proj-, #ext-) aid discoverability. User groups are tagged groups of users for notifications and channel management. The administrator manages channel creation policies, retention settings, and default channel assignments.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Permissions, Security, and Compliance</p>
                <p>Slack admin roles: Primary Owner, Owner, Admin, Member, Guest (Single-channel or Multi-channel). Message retention policies define how long messages and files are kept — configurable per workspace or per channel. Data exports: standard exports include public channel messages; eDiscovery requires Enterprise Grid. IP allowlisting restricts workspace login to authorised networks. SSO (SAML 2.0) integration with corporate IdP centralises authentication. Two-factor authentication can be enforced at the workspace level. The exam tests security configuration options and their scope.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">App Integration and App Directory</p>
                <p>Slack App Directory provides vetted third-party integrations. Admins can restrict which apps users can install — allow all, custom approval workflow, or block all. Approved apps list manages pre-approved integrations. Slack-Salesforce integration (built by Salesforce) enables Salesforce record alerts, record creation from Slack, and search from Slack. Workflow Builder creates automated workflows triggered by Slack events — message posted, emoji reaction, channel created — without code. Admins govern which workflows members can create and share.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Enterprise Grid Administration</p>
                <p>Enterprise Grid is Slack&apos;s multi-workspace tier for large organisations. Org-level administrators manage all workspaces from a single console. Workspaces within the Grid can be siloed (members limited to one workspace) or connected via channels. Shared channels enable collaboration between different workspaces or external organisations. Data Residency options allow message storage in specific geographic regions. Centralised user provisioning via SCIM API or HRMS integration. The exam tests org-level vs workspace-level admin distinctions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Workflow Builder and Automation</p>
                <p>Workflow Builder creates automated workflows without code. Trigger types: Shortcut (user-initiated), New channel member (someone joins), Emoji reaction, Scheduled time, Webhook (from external systems). Steps: Send a message, Open a form (collect structured input), Add to spreadsheet, Create a channel. Workflow variables carry data between steps (form responses, trigger context). Workflows can be shared with other workspace members. The exam tests how to design and troubleshoot Workflow Builder automations for common team processes.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Slack Administrator Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Slack Administrator exam tests workspace administration skills: user management, channel governance, app management, and security configuration. Focus on enterprise-grade Slack management for large organizations.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Workspace &amp; Org Administration</p>
                <p>Know the difference between single-workspace organizations and Enterprise Grid (multi-workspace). Understand how to manage users, channels, and settings at both the workspace and org level.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Channel Governance</p>
                <p>Know how to configure channel naming conventions, default channels, required channels, and channel management policies. Understand how to use channel manager settings to control who can create channels.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">App Management &amp; Security</p>
                <p>Know how to manage the Slack App Directory: approving apps, restricting app installation, and configuring app permissions. Understand how to use App Approval workflows for enterprise compliance.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Compliance &amp; DLP</p>
                <p>Know Slack&apos;s Enterprise Mobility Management (EMM), message retention policies, eDiscovery/export capabilities, and how to configure Data Loss Prevention (DLP) integrations for regulated industries.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Provisioning &amp; SSO</p>
                <p>Know how to configure SAML SSO for Slack, SCIM provisioning for automated user lifecycle management, and how to use Slack&apos;s Directory to manage user profiles and deactivations.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />


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
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'scenario-tips', title: 'How to Pass' },
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
