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

const slug = 'pardot-specialist'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is a Prospect in Pardot (Marketing Cloud Account Engagement)?",
    options: ["A qualified lead that a sales rep has contacted", "Any visitor who has been identified by their email address — through a form submission, tracked email click, or manual creation", "A paying customer with an active subscription", "A sales opportunity linked to a Salesforce Account"],
    correctAnswer: 1,
    explanation: "In Pardot, a Prospect is any visitor identified by email address. Until identified, they are an anonymous Visitor. Prospects have a profile record in Pardot that tracks all engagement and can sync to Salesforce leads or contacts.",
  },
  {
    question: "Which Pardot feature automatically adjusts a prospect\'s score based on engagement activities?",
    options: ["Grading", "Scoring", "Automation Rules", "Completion Actions"],
    correctAnswer: 1,
    explanation: "Scoring tracks prospect engagement activities — form submissions, email opens, page views, file downloads — and automatically adds or subtracts points to measure how interested a prospect is in your offering.",
  },
  {
    question: "What is the key difference between Scoring and Grading in Pardot?",
    options: ["Scoring measures fit, Grading measures interest", "Scoring measures interest (engagement activity), Grading measures fit (profile attributes against your ideal customer)", "They are the same thing applied at different pipeline stages", "Scoring is manual, Grading is automatic"],
    correctAnswer: 1,
    explanation: "Scoring measures how interested a prospect is based on their engagement activities. Grading measures how well they fit your ideal customer profile based on attributes like job title, company size, and industry. Both are needed together for an effective lead qualification model.",
  },
  {
    question: "What is the difference between a Pardot Form and a Form Handler?",
    options: [
      "Pardot Forms are styled with CSS; Form Handlers use HTML only",
      "Pardot Forms are hosted on Pardot servers and can be embedded or used on landing pages; Form Handlers connect Pardot to existing third-party forms on external websites without replacing them",
      "Form Handlers require Salesforce integration; Pardot Forms do not",
      "There is no practical difference — both capture the same data in the same way"
    ],
    correctAnswer: 1,
    explanation: "Pardot Forms are fully Pardot-hosted and provide built-in progressive profiling and validation. Form Handlers allow Pardot to receive submissions from existing external forms that you cannot replace — useful when a company has custom-built forms they want to keep.",
  },
  {
    question: "What happens when a prospect meets the criteria of an Automation Rule in Pardot?",
    options: ["The prospect is deleted from the database", "The configured actions are executed — such as assigning to a user, adjusting score, or adding to a list", "The prospect is automatically synced to Salesforce CRM", "An email is automatically sent to the prospect's account manager"],
    correctAnswer: 1,
    explanation: "Automation Rules evaluate all prospects continuously (or on a schedule) against defined criteria and execute configured actions when matches are found — such as changing scores, assigning prospects, or triggering notifications.",
  },
  {
    question: "What is Engagement Studio in Pardot?",
    options: [
      "An Apex-based automation that sends bulk emails to all prospects in a list",
      "A visual lead nurturing tool that sends targeted emails and performs actions based on prospect behaviour over time — using wait steps, conditional branches, and action steps",
      "A reporting dashboard that tracks email open rates and click-through rates across campaigns",
      "A landing page builder that creates multi-step registration flows"
    ],
    correctAnswer: 1,
    explanation: "Engagement Studio is Pardot\'s visual nurture programme builder. It allows marketers to design branching paths based on prospect actions (e.g., opened email? Go to branch A; did not open? Go to branch B) — with wait steps between actions to control timing.",
  },
  {
    question: "What is the key difference between Completion Actions and Automation Rules in Pardot?",
    options: [
      "Completion Actions run on a schedule; Automation Rules run in real time",
      "Completion Actions fire once per prospect when a specific asset interaction occurs (e.g., form submitted); Automation Rules continuously evaluate all prospects against criteria",
      "Completion Actions require Salesforce admin access; Automation Rules are Pardot-only",
      "There is no difference — both are used for the same purpose"
    ],
    correctAnswer: 1,
    explanation: "Completion Actions are triggered by a specific asset event (e.g., a prospect submits a form, opens an email, or clicks a link) and fire only once per asset interaction. Automation Rules continuously evaluate all matching prospects and can fire multiple times.",
  },
  {
    question: "What is a Dynamic List in Pardot?",
    options: [
      "A manually maintained list that a marketer updates periodically",
      "A list that automatically adds or removes prospects based on rules you define — prospects join or leave as their attributes change",
      "A list of prospects exported from Salesforce CRM for one-time use in a campaign",
      "A list used exclusively for A/B testing email subject lines"
    ],
    correctAnswer: 1,
    explanation: "Dynamic Lists automatically update membership as prospect attributes change — if a prospect\'s job title changes to match the rule criteria, they are added; if they no longer match, they are removed. This makes them ideal for always-current audience segments.",
  },
  {
    question: "What controls which field value wins when there is a data conflict between Pardot and Salesforce during a sync?",
    options: [
      "The connector user\'s profile determines the winning field value",
      "Pardot always overwrites Salesforce field values to prevent data loss",
      "The field sync behaviour setting on each mapped field — configured as Pardot wins, Salesforce wins, or most recently updated",
      "The record with the higher prospect score wins the conflict"
    ],
    correctAnswer: 2,
    explanation: "Each field mapping in the Pardot-Salesforce connector has a sync behaviour setting: Pardot wins (Pardot value always overwrites Salesforce), Salesforce wins (Salesforce value always overwrites Pardot), or Use the most recently updated (the field with the newer timestamp wins).",
  },
  {
    question: "How does Pardot identify an anonymous website visitor as a known prospect?",
    options: [
      "By matching their IP address against the CRM account database",
      "When the visitor clicks a Pardot-tracked link in an email or submits a Pardot form — creating a browser cookie that identifies them on future site visits",
      "By requiring visitors to authenticate with their Salesforce login credentials",
      "By scanning the visitor\'s browser history for Pardot-associated domains"
    ],
    correctAnswer: 1,
    explanation: "Pardot uses first-party cookies. When a prospect clicks a tracked email link or submits a form, Pardot places a cookie in their browser. On future visits to tracked pages, Pardot recognises the cookie and links page views to the known prospect record.",
  },
  {
    question: "Which Pardot feature allows separate score tracking for prospects interested in different product lines or business units?",
    options: [
      "Automation Rules with product-specific score adjustments",
      "Scoring Categories — which maintain independent score totals per product or business unit alongside the overall prospect score",
      "Engagement Studio with conditional branching per product interest",
      "Dynamic Lists filtered by page view URL"
    ],
    correctAnswer: 1,
    explanation: "Scoring Categories let organisations maintain separate score totals for each product line or business unit. A prospect who visits the Enterprise product pages gets points in the Enterprise category without inflating scores in other categories — enabling more precise sales routing.",
  },
  {
    question: "A Pardot admin wants to send a follow-up email 3 days after a prospect downloads a whitepaper, and then a different email if they did not open the first one. Which feature handles this?",
    options: [
      "An Automation Rule with a time-based trigger",
      "A Completion Action on the form with a delayed send",
      "An Engagement Studio programme with wait steps and conditional branches",
      "A Dynamic List combined with a List Email send"
    ],
    correctAnswer: 2,
    explanation: "Engagement Studio is designed for exactly this — wait steps control timing (3 days), and conditional branches check actions (opened email? yes/no) and route prospects to different content based on behaviour.",
  },
  {
    question: "What is the relationship between a Pardot Campaign and a Salesforce Campaign?",
    options: [
      "Pardot Campaigns are completely separate from Salesforce Campaigns and never sync",
      "A Pardot Campaign tracks a prospect\'s first touch (original source) and can be connected to a Salesforce Campaign for multi-touch attribution reporting",
      "Pardot Campaigns replace Salesforce Campaigns when Pardot is installed in the org",
      "Pardot Campaigns sync automatically to Salesforce Campaigns without any configuration"
    ],
    correctAnswer: 1,
    explanation: "Pardot Campaigns track the first source that identified a prospect. They connect to Salesforce Campaigns to support reporting on prospect sourcing and multi-touch attribution. Exam questions frequently test the first-touch vs. multi-touch distinction between Pardot and Salesforce campaigns.",
  },
  {
    question: "Which Pardot report helps marketers understand which campaigns are generating the most pipeline and revenue?",
    options: [
      "Prospect Lifecycle Report — showing prospects at each stage of the funnel",
      "Pipeline Report / Lifecycle Report showing how opportunities relate to Pardot campaigns and prospect activities",
      "Email Performance Report showing open and click rates per list email",
      "Engagement History Report showing all activities per prospect"
    ],
    correctAnswer: 1,
    explanation: "The Pipeline Report (also known as the Lifecycle Report) connects Pardot prospect activity to Salesforce opportunity data — showing which campaigns and activities are driving pipeline creation and closed-won revenue. This bridges marketing and sales attribution.",
  },
  {
    question: "What is the difference between Pardot scoring and grading?",
    options: ["No difference", "Scoring is activity-based (interest); grading is attribute-based (fit)", "Grading is activity-based; scoring is attribute-based", "Only scoring exists"],
    correctAnswer: 1,
    explanation: "Scoring measures engagement (opens, clicks, form submits). Grading measures fit to ideal customer profile (title, company size, industry)."
  },
]

export default function PardotSpecialistPage() {
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
            code="Pardot Specialist"
            description="The Pardot Specialist certification validates your skills in B2B marketing automation, lead nurturing, and marketing analytics."
            examDetails={{
              questions: 60,
              passingScore: "72%",
              duration: "90 min",
              cost: "$200",
            }}
            topics={[
              "Visitors & Prospects",
              "Scoring & Grading",
              "Lead Nurturing",
              "Forms & Landing Pages",
              "Email Marketing",
              "Automation Rules",
              "Engagement Studio",
              "Reports & Analytics",
              "Salesforce Integration",
              "Account-Based Marketing"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pardot Specialist: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Scoring vs Grading: Interest vs Fit</p>
                <p><strong>Scoring</strong> is activity-based — it measures how interested a prospect is by tracking form submissions, email opens, page views, and file downloads. <strong>Grading</strong> is attribute-based — it measures how well a prospect fits your ideal customer profile (job title, company size, industry). Sales teams should prioritise prospects with both a high score (interest) and a high grade (fit). The exam frequently asks you to distinguish which mechanism applies to a given scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Hierarchy: Completion Actions vs Automation Rules vs Engagement Studio</p>
                <p><strong>Completion Actions</strong> fire once when a prospect interacts with a specific asset (form submitted, email clicked). <strong>Automation Rules</strong> continuously evaluate all prospects against criteria and fire actions when criteria are met — they can run repeatedly. <strong>Engagement Studio</strong> is for time-based nurture with conditional branching — it combines wait steps and actions into a visual programme. Know when each is appropriate and when they overlap.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pardot-Salesforce Sync: Field Sync Behaviour</p>
                <p>When Pardot and Salesforce hold different values for the same field, the <strong>field sync behaviour</strong> setting controls the outcome: Pardot wins, Salesforce wins, or Most Recently Updated wins. Each field can be configured independently. Understanding sync conflicts and resolution is a high-frequency exam topic — especially in scenarios where CRM data should take precedence over marketing data (or vice versa).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Prospects and Visitors: Identification and Tracking</p>
                <p>An anonymous website visitor becomes a <strong>Prospect</strong> when identified by email — via a form submission or a tracked email click that places a browser cookie. Pardot tracks all subsequent page views under that prospect record. <strong>Dynamic Lists</strong> automatically update membership as prospect attributes change. <strong>Scoring Categories</strong> maintain separate scores per product line. Know how each mechanism connects to prospect lifecycle stages.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pardot Forms vs Form Handlers</p>
                <p>Pardot Forms are fully hosted by Pardot — they support progressive profiling (showing new fields on repeat visits), built-in validation, and native landing page embedding. Form Handlers connect Pardot to existing third-party forms on external websites — the visitor submits to the third-party form, which posts data to Pardot in the background. Use Form Handlers when you cannot replace an existing form; use Pardot Forms for new data capture assets.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Marketing Cloud Account Engagement Specialist Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Account Engagement Specialist exam tests hands-on configuration knowledge. Focus on the execution side — automation rules, dynamic lists, email sends, and form configuration — rather than high-level solution design.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Rules vs. Segmentation Rules</p>
                <p>Automation Rules run continuously and apply actions retroactively to matching prospects. Segmentation Rules run once. Dynamic Lists update membership continuously based on criteria. Know which to use for each requirement.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email Configuration &amp; Deliverability</p>
                <p>Know the difference between List Emails, Engagement Studio emails, and Operational emails (bypass opt-out). Understand SPF, DKIM, and how sender score affects deliverability.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dynamic Content</p>
                <p>Know how to configure dynamic content variations based on prospect fields (industry, score, etc.) for email personalization. Understand the default variation requirement and how dynamic content is inserted via HML or custom redirects.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Forms &amp; Progressive Profiling</p>
                <p>Configure forms with dependent fields, progressive profiling (showing new fields on repeat visits), and Kiosk mode for events. Know how completion actions trigger follow-up automations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pardot API &amp; Integrations</p>
                <p>Know the key Pardot API capabilities, how Pardot integrates with third-party tools via Zapier or direct API, and how the Salesforce-Pardot connector user&apos;s permission set controls data sync.</p>
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
