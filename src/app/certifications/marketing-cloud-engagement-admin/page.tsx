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

const slug = 'marketing-cloud-engagement-admin'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Marketing Cloud Engagement Administrator?",
    options: [
      "Writing AMPscript",
      "Configuring Marketing Cloud products using industry and product best practices",
      "Designing Pardot campaigns",
      "Managing Salesforce CRM only"
    ],
    correctAnswer: 1,
    explanation: "Certified Marketing Cloud Engagement Administrators have hands-on experience configuring Marketing Cloud products utilizing industry and product best practices."
  },
  {
    question: "Which area must an Engagement Administrator thoroughly navigate?",
    options: [
      "Only Email Studio",
      "Setup and subscriber data management",
      "Slack workspace settings",
      "CPQ product configuration"
    ],
    correctAnswer: 1,
    explanation: "They understand data structure in subscriber data management and can thoroughly navigate Setup."
  },
  {
    question: "What is Subscriber Data Management in Marketing Cloud?",
    options: [
      "A reporting tool",
      "The structure and management of contact/subscriber data across data extensions and lists",
      "Email template storage",
      "Journey Builder only"
    ],
    correctAnswer: 1,
    explanation: "Subscriber data management refers to how contact and subscriber data is structured and managed in Data Extensions and lists."
  },
  {
    question: "Which Marketing Cloud product is typically configured by an Engagement Administrator?",
    options: [
      "Sales Cloud",
      "Email Studio, Journey Builder, Automation Studio",
      "Heroku",
      "Experience Cloud"
    ],
    correctAnswer: 1,
    explanation: "Engagement Administrators configure core Marketing Cloud engagement products including Email Studio, Journey Builder, and Automation Studio."
  },
  {
    question: "What best practice should an Engagement Administrator follow when configuring sends?",
    options: [
      "Send to all contacts without segmentation",
      "Use suppression lists, test sends, and follow deliverability best practices",
      "Disable tracking",
      "Use only one data extension"
    ],
    correctAnswer: 1,
    explanation: "Best practices include using suppression lists, conducting test sends, and following deliverability guidelines."
  },
  {
    question: "What is a Data Extension in Marketing Cloud?",
    options: [
      "A report only",
      "A table that stores subscriber/contact data for sends and journeys",
      "An email template",
      "A list only"
    ],
    correctAnswer: 1,
    explanation: "Data Extensions store subscriber data for sends and journeys."
  },
  {
    question: "Which Journey Builder activity sends an email?",
    options: [
      "Wait only",
      "Email send activity",
      "Decision split only",
      "Update contact only"
    ],
    correctAnswer: 1,
    explanation: "Email send activity sends messages in a journey."
  },
  {
    question: "What does Automation Studio support?",
    options: [
      "Only manual sends",
      "Scheduled automations, imports, and file drops",
      "Journey Builder only",
      "Email Studio only"
    ],
    correctAnswer: 1,
    explanation: "Automation Studio runs scheduled automations and imports."
  },
  {
    question: "Which best practice supports email deliverability?",
    options: [
      "Send to all",
      "Authenticate domains (SPF, DKIM), maintain list hygiene, avoid spam triggers",
      "No authentication",
      "No list hygiene"
    ],
    correctAnswer: 1,
    explanation: "Domain auth and list hygiene support deliverability."
  },
  {
    question: "What is a suppression list used for?",
    options: [
      "To add contacts",
      "To exclude contacts who unsubscribed or should not receive emails",
      "To send more",
      "To track opens"
    ],
    correctAnswer: 1,
    explanation: "Suppression lists exclude unsubscribed or blocked contacts."
  },
  {
    question: "Which Marketing Cloud role controls access?",
    options: [
      "Profile only",
      "Business unit roles and permissions",
      "No roles",
      "Only admin"
    ],
    correctAnswer: 1,
    explanation: "Business unit roles and permissions control access."
  },
  {
    question: "What does tracking in Email Studio measure?",
    options: [
      "Only sends",
      "Opens, clicks, bounces, and unsubscribes",
      "Only opens",
      "Only clicks"
    ],
    correctAnswer: 1,
    explanation: "Tracking measures opens, clicks, bounces, and unsubscribes."
  },
  {
    question: "Which feature allows personalized content in emails?",
    options: [
      "Plain text only",
      "AMPscript and personalization strings",
      "No personalization",
      "Only merge fields"
    ],
    correctAnswer: 1,
    explanation: "AMPscript and personalization strings enable dynamic content."
  },
  {
    question: "What is the purpose of a send classification?",
    options: [
      "To replace lists",
      "To define sender profile and deliverability settings for sends",
      "To create templates only",
      "To track only"
    ],
    correctAnswer: 1,
    explanation: "Send classification defines sender and deliverability settings."
  },
  {
    question: "Which integration connects Marketing Cloud to Salesforce?",
    options: [
      "Manual only",
      "Marketing Cloud Connect (or equivalent connector)",
      "No integration",
      "Email only"
    ],
    correctAnswer: 1,
    explanation: "Marketing Cloud Connect syncs data with Salesforce."
  },
]

export default function MarketingCloudEngagementAdminPage() {
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
            code="MC Engagement Admin"
            description="Certified Marketing Cloud Engagement Administrators have hands-on experience configuring Marketing Cloud products utilizing industry and product best practices. They understand data structure in subscriber data management and can thoroughly navigate Setup."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Marketing Cloud Setup",
              "Subscriber Data Management",
              "Email Studio",
              "Journey Builder",
              "Automation Studio",
              "Content Builder",
              "Contact Builder",
              "Deliverability",
              "Reporting",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Cloud Engagement Admin: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Account Architecture and Business Units</p>
                <p>Marketing Cloud Engagement supports multi-Business Unit (BU) architectures. Business Units enable separate sending domains, user management, subscriber data, and reporting per BU — useful for regional or brand separation. The parent BU manages shared assets and enforces enterprise-level settings. User roles hierarchy: Administrator, Marketing Cloud Administrator, Marketing, Content Editor/Publisher, Viewer. Sender Authentication Package (SAP) provides the private IP, custom FROM domain, and branded link tracking for each BU. The admin exam tests BU design decisions and how permissions cascade.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscriber Management at the Account Level</p>
                <p>The All Subscribers list is the master subscriber list — global unsubscribes are recorded here and override all other settings. Publication Lists enable opt-in preferences per content type. Suppression Lists exclude addresses from specific sends. Auto-Suppression Lists apply across all sends globally. Data Extensions store relational subscriber and event data. The Subscriber Key strategy (email address vs CRM ID) affects deduplication and cross-channel identity. The admin configures the subscriber data model and retention policies.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">IP Warming and Sender Reputation</p>
                <p>New dedicated IPs require IP warming — gradually increasing send volume over 4-8 weeks to establish sender reputation with ISPs. Send to the most engaged subscribers first. Monitor bounce rates, spam complaints, and inbox placement. SPF, DKIM, and DMARC configuration is required via the Sender Authentication Package. Reply Mail Management (RMM) handles inbound replies — route auto-replies, out-of-office, and unsubscribes automatically. The admin exam tests the warming schedule design and what metrics indicate reputation health.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Roles, Permissions, and Security</p>
                <p>Marketing Cloud enforces role-based access control at the Business Unit level. Roles are additive — a user can have roles in multiple BUs. Marketing Cloud SSO connects to corporate identity systems (SAML/OAuth). IP allowlisting restricts login to authorised IP ranges. Two-factor authentication can be enforced at the account level. Data access permissions control which data extensions users can view or modify. The admin configures and maintains the security model, monitors login activity, and manages Connected App integrations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce CRM Integration (MC Connect)</p>
                <p>Marketing Cloud Connect integrates Engagement with Sales/Service Cloud. Synchronized Data Extensions pull CRM object records (Leads, Contacts, Campaigns) into Marketing Cloud for targeting. Triggered Sends fire in response to Salesforce record changes (e.g., Opportunity Closed Won). Journey Builder entry sources can use CRM reports or data extensions synced from Salesforce. Email send results sync back to the Contact/Lead record as individual send activities. The admin configures the integration settings, sync schedules, and troubleshoots sync errors.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Marketing Cloud Engagement Administrator Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Marketing Cloud Engagement Administrator exam focuses on platform administration: user management, account setup, security, and data management. Questions test your ability to configure and maintain a Marketing Cloud instance.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Account Setup &amp; Business Units</p>
                <p>Know how to configure business units for multi-brand or multi-regional setups, how permissions are inherited, and how to manage shared content and data extensions across business units.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Roles &amp; Permissions</p>
                <p>Know the standard Marketing Cloud roles (Administrator, Analyst, Content Creator, etc.) and how to create custom roles. Understand how role-based permissions control access to each studio and feature.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Management &amp; Retention</p>
                <p>Know how to configure data retention policies on data extensions, manage All Subscribers list hygiene, and use Contact Deletion to comply with data privacy regulations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sender Authentication Package (SAP)</p>
                <p>Understand how SAP (Private Domain, SAP Subdomain, Reply Mail Management) improves email deliverability and brand reputation. Know the difference between a SAP and a standard shared IP configuration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Integration &amp; Security</p>
                <p>Know how to create and manage API integrations (installed packages with OAuth credentials), configure IP whitelisting for API access, and monitor API usage for security anomalies.</p>
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
