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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Slack Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce-Slack Integration Architecture</p>
                <p>The Salesforce for Slack integration (native Salesforce app) enables bidirectional workflow between Slack and Salesforce. Key capabilities: Record alerts (configured in Salesforce Flow — send Salesforce record updates to Slack channels), Record creation from Slack (create Leads, Cases, Opportunities directly from a Slack message), Record search (/salesforce search command). The consultant designs which Salesforce objects and records trigger Slack alerts and how to configure the integration for specific sales or service workflows.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Slack-First Customer Service Design</p>
                <p>Service Cloud + Slack enables agent collaboration. Case notifications route new or escalated cases to Slack channels. Swarming workflows bring subject-matter experts into a Slack channel to resolve complex cases together. Einstein Case Classification surfaces AI-suggested fields to agents before case routing. The consultant designs the service workflow — when to alert in Slack vs email, how to escalate from Slack back to Service Cloud, and how to measure the impact on CSAT and resolution time.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automations: Flow + Workflow Builder</p>
                <p>Salesforce Flow can send Slack messages using the Send Slack Message flow action — available in Record-Triggered Flows, Screen Flows, and Scheduled Flows. Slack Workflow Builder steps can call external webhooks (including Salesforce APIs). Combined patterns: Salesforce record triggers a Flow → Flow sends a Slack message → Team responds in Slack → Webhook updates the Salesforce record. The consultant designs the end-to-end automation, identifying which tool handles which step.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Governance and Compliance</p>
                <p>Data residency: sensitive Salesforce data shared in Slack must comply with data governance policies. DLP (Data Loss Prevention) integrations scan messages for sensitive data (credit card numbers, SSNs) and can block, alert, or redact. eDiscovery integration with Slack Enterprise Grid allows legal holds and exports for compliance. The consultant advises on which Salesforce record types can be shared in Slack, what retention policies apply to Slack channels containing Salesforce data, and how to configure compliance controls.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Adoption Strategy and Change Management</p>
                <p>Slack adoption requires change management. Success metrics: daily active users, channels created, external channel usage, Workflow Builder adoption rate. Executive sponsorship: visible executive use of Slack signals cultural approval. Use case library: document and share success stories of effective Slack-Salesforce workflows. Training: role-based Slack training (sales reps vs service agents vs managers). The consultant designs the adoption roadmap — phased rollout, pilot team selection, feedback collection, and measurement against adoption KPIs.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Slack Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Slack Consultant exam tests solution design and implementation planning for Slack deployments. Focus on use case design, workflow automation, Salesforce integration, and driving organizational adoption.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Use Case Design</p>
                <p>Know how to map business processes to Slack use cases: executive communication, project collaboration, customer support channels, incident response, and approval workflows. Match each use case to the right Slack features.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Workflow Builder</p>
                <p>Know how to build Workflow Builder automations: trigger types (message shortcut, schedule, emoji reaction, channel join), step types (send message, form, add to channel, webhook), and use cases for each.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce for Slack Integration</p>
                <p>Know how Salesforce for Slack features work: Salesforce record previews, deal rooms, Salesforce Flows triggered from Slack, and Slack alerts from Salesforce record changes. Understand configuration requirements.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Adoption Strategy</p>
                <p>Know how to drive Slack adoption: executive sponsorship, champions program, use case-driven rollout (start with high-value use cases), and how to measure adoption with Slack analytics.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Governance Framework</p>
                <p>Know how to design a Slack governance framework: channel naming conventions, workspace vs. channel structure, acceptable use policies, and how to handle the transition from email to Slack.</p>
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
