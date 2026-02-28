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
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'marketing-cloud-engagement-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the Marketing Cloud Engagement Foundations certification designed for?",
    options: ["Developers only", "Individuals with foundational understanding of the platform and up to 6 months of Marketing Cloud experience", "Architects only", "Sales only"],
    correctAnswer: 1,
    explanation: "It is designed for individuals with foundational understanding and up to 6 months of Marketing Cloud Engagement experience.",
  },
  {
    question: "Which Marketing Cloud product is used for email campaigns?",
    options: ["Slack", "Email Studio", "Heroku", "Commerce Cloud"],
    correctAnswer: 1,
    explanation: "Email Studio is used for building and sending email campaigns.",
  },
  {
    question: "What is a Subscriber in Marketing Cloud?",
    options: ["A report", "A contact or recipient who can receive marketing communications", "A dashboard", "An admin"],
    correctAnswer: 1,
    explanation: "A subscriber is a contact or recipient in Marketing Cloud.",
  },
  {
    question: "Which concept is central to Marketing Cloud data?",
    options: ["Only reports", "Data Extensions and subscriber management", "Only emails", "Only journeys"],
    correctAnswer: 1,
    explanation: "Data Extensions and subscriber management are central to Marketing Cloud data.",
  },
  {
    question: "What does Journey Builder allow marketers to do?",
    options: ["Only send one email", "Create multi-step, automated customer journeys", "Only run reports", "Only manage lists"],
    correctAnswer: 1,
    explanation: "Journey Builder creates multi-step, automated customer journeys.",
  },
  {
    question: "What is a Data Extension in Marketing Cloud?",
    options: [
      "A report only",
      "A table that stores contact and marketing data",
      "An email template",
      "A journey"
    ],
    correctAnswer: 1,
    explanation: "Data Extensions store contact and marketing data for sends and journeys."
  },
  {
    question: "Which Marketing Cloud product sends scheduled emails?",
    options: [
      "Journey Builder only",
      "Email Studio or Automation Studio",
      "Slack",
      "Heroku"
    ],
    correctAnswer: 1,
    explanation: "Email Studio and Automation Studio send scheduled emails."
  },
  {
    question: "What does a Send Definition define?",
    options: [
      "Only subject",
      "Audience, content, and send timing",
      "Only content",
      "Only audience"
    ],
    correctAnswer: 1,
    explanation: "Send Definition defines audience, content, and timing."
  },
  {
    question: "Which concept tracks email engagement?",
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
    question: "What is the purpose of a List in Marketing Cloud?",
    options: [
      "To replace Data Extensions",
      "To group subscribers for sends (legacy or simple use cases)",
      "To create journeys only",
      "To create reports only"
    ],
    correctAnswer: 1,
    explanation: "Lists group subscribers for sends in simple use cases."
  },
  {
    question: "Which entry source can start a Journey Builder journey?",
    options: [
      "Email only",
      "Data extension, API, form, or campaign",
      "SMS only",
      "Push only"
    ],
    correctAnswer: 1,
    explanation: "Entry sources include data extension, API, form, or campaign."
  },
  {
    question: "What does Marketing Cloud Engagement encompass?",
    options: [
      "Only email",
      "Email, mobile, and digital engagement capabilities",
      "Only SMS",
      "Only social"
    ],
    correctAnswer: 1,
    explanation: "Engagement encompasses email, mobile, and digital."
  },
  {
    question: "Which report type shows email performance?",
    options: [
      "Only sends",
      "Tracking (opens, clicks, etc.) and send summary",
      "Only opens",
      "Only bounces"
    ],
    correctAnswer: 1,
    explanation: "Tracking and send summary reports show email performance."
  },
  {
    question: "What is a Subscriber Key?",
    options: [
      "A password",
      "The unique identifier for a subscriber in Marketing Cloud",
      "An email address only",
      "A list name"
    ],
    correctAnswer: 1,
    explanation: "Subscriber Key uniquely identifies a subscriber."
  },
  {
    question: "Which best practice applies to Marketing Cloud Engagement?",
    options: [
      "Send to all",
      "List hygiene, segmentation, and deliverability practices",
      "No hygiene",
      "No segmentation"
    ],
    correctAnswer: 1,
    explanation: "List hygiene, segmentation, and deliverability support success."
  },
]

export default function MarketingCloudEngagementFoundationsPage() {
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
            code="Marketing Associate"
            description="The Salesforce Marketing Associate certification is designed for individuals with a foundational understanding of the Salesforce platform and up to six months of experience with Salesforce Marketing Cloud Engagement."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['Marketing Cloud Basics', 'Email Studio', 'Subscribers', 'Data Extensions', 'Journey Builder', 'Reporting', 'Best Practices', 'Platform']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Cloud Engagement Foundations: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email Studio: Content Builder and Templates</p>
                <p>Content Builder is the unified content management interface for emails, templates, blocks, and images. Email Templates use drag-and-drop layout blocks or HTML/AMPscript. Saved content blocks are reusable components — update once, updated everywhere. Guided Send walks through sending options step by step. The Foundations exam focuses on navigating Marketing Cloud and understanding the core feature set — it is the entry-level certification. Know how to create, preview, and test-send an email from start to finish.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscriber and List Management Basics</p>
                <p>All Subscribers list is the global subscriber table. Publication Lists let subscribers opt in or out of specific content types. Suppression Lists prevent sends to specific addresses. The Foundations exam tests the difference between these list types and when to use each. Subscriber statuses: Active, Unsubscribed, Bounced, Held. Unsubscribes process globally and cannot be reversed without subscriber consent. Import Wizard loads subscribers from CSV files — field mapping and import type (Add/Update, Overwrite) are tested.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Studio Basics</p>
                <p>Automation Studio orchestrates multi-step marketing processes. Scheduled automations run on a time-based trigger. File Drop automations trigger when a file is uploaded to an FTP location. Automation activities: Import File (load data), SQL Query (segment data), Data Extract (export data), Send Email, Filter (create filtered DEs). Activities run sequentially within a step; multiple activities in the same step run in parallel. The Foundations exam tests basic automation workflow design and what each activity type does.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Journey Builder Basics</p>
                <p>Journey Builder creates event-triggered, multi-step customer journeys. Entry Sources: Data Extension entry (scheduled or real-time), Salesforce Entry (CRM record trigger), API Event, CloudPage Submit, Audience entry. Activities: Send Email, Send SMS, Wait (fixed time), Decision Split (audience split by criteria), Random Split (percentage-based A/B). Exit Criteria can remove contacts mid-journey. The Foundations exam tests how to design a simple linear journey — entry source, email activity, wait, exit.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tracking and Reporting Basics</p>
                <p>The Tracking workspace shows aggregated send performance across campaigns. Key metrics: Delivered (sent - bounced), Unique Opens (tracked via 1x1 pixel), Unique Clicks (tracked via link rewrite), Bounce Rate (hard = permanent, soft = temporary), Unsubscribe Rate. Reports in the Reports section provide date-range summaries across accounts and BUs. Email Send Reports show per-send performance. The Foundations exam tests which metric answers a given business question and how to locate reports in the Marketing Cloud UI.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Marketing Cloud Engagement Foundations Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Marketing Cloud Engagement Foundations exam tests foundational knowledge of the platform for new users. Focus on understanding the core studios, the subscriber data model, and basic email campaign execution.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Core Studios Overview</p>
                <p>Know what each studio does: Email Studio (email campaigns), Mobile Studio (SMS/push), Advertising Studio (digital ads), Social Studio (social media), and Journey Builder (cross-channel orchestration).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscriber Data Model</p>
                <p>Understand All Subscribers, Lists, and Data Extensions. Know when lists are appropriate (simple, volume-based segments) vs. data extensions (relational data, complex attributes).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Basic Email Send Process</p>
                <p>Know the steps to send an email: select an audience (list or data extension), choose a send classification, configure tracking, and initiate a send. Understand how to use guided sends vs. the send wizard.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Contact Builder Overview</p>
                <p>Understand Contact Builder&apos;s role in unifying subscriber data: Attribute Groups, Relationships, and how data extension data links to the Contact record via Contact Key.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting Fundamentals</p>
                <p>Know the core email metrics: Sent, Delivered, Bounced (hard/soft), Opened, Clicked, Unsubscribed, and Spam Complaints. Understand how to access Tracking reports and what each metric measures.</p>
              </div>
            </div>
          </div>

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
