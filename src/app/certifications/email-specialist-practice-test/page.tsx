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

const slug = 'email-specialist-practice-test'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
// Canonical → main Email Specialist guide to avoid CTR dilution; this page is sub-intent (practice test only).
export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getCertMetadata(slug)
  const canonical = `${baseUrl}/certifications/email-specialist`
  return {
    ...baseMetadata,
    alternates: { canonical },
    openGraph: {
      ...baseMetadata.openGraph,
      url: canonical,
    },
  }
}

const sampleQuestions = [
  {
    question: "Which content type allows for dynamic, personalized content based on subscriber data?",
    options: ["Static Content", "AMPscript", "HTML Block", "Text Block"],
    correctAnswer: 1,
    explanation: "AMPscript is Marketing Cloud's scripting language for dynamic, personalized email content based on subscriber data.",
  },
  {
    question: "What is a Data Extension used for in Marketing Cloud?",
    options: ["To create email templates", "To store subscriber and relational data", "To schedule sends", "To track email opens"],
    correctAnswer: 1,
    explanation: "Data Extensions store subscriber data, custom data, and relational data used for segmentation and personalization.",
  },
  {
    question: "Which feature sends emails at the optimal time for each subscriber?",
    options: ["Triggered Send", "Send Time Optimization", "Journey Builder", "Automation Studio"],
    correctAnswer: 1,
    explanation: "Send Time Optimization uses Einstein to send at the best time per subscriber.",
  },
  {
    question: "What is the difference between an All Subscribers list and a Data Extension?",
    options: ["No difference", "All Subscribers is managed by SFMC; Data Extensions allow custom schema and relational data", "Data Extensions only for SMS", "All Subscribers is optional"],
    correctAnswer: 1,
    explanation: "All Subscribers is the system list; Data Extensions provide flexible schema for custom and relational data."
  },
  {
    question: "Which metric indicates how many recipients opened an email?",
    options: ["Bounce rate", "Open rate", "Send count", "Unsubscribe rate"],
    correctAnswer: 1,
    explanation: "Open rate measures the percentage of delivered emails that were opened."
  },
  {
    question: "What is a triggered send used for?",
    options: ["Batch campaigns only", "Sending emails in real-time based on an event (e.g., welcome, password reset)", "Only for testing", "Only for unsubscribes"],
    correctAnswer: 1,
    explanation: "Triggered sends fire based on events, enabling transactional and event-driven messaging."
  },
  {
    question: "Which tool schedules recurring email sends in Marketing Cloud?",
    options: ["Journey Builder only", "Automation Studio with Email Send activities", "Content Builder only", "Data Extensions only"],
    correctAnswer: 1,
    explanation: "Automation Studio can schedule recurring sends; Journey Builder handles journey-based sends."
  },
  {
    question: "What does CAN-SPAM require for commercial email?",
    options: ["No requirements", "Opt-out mechanism, physical address, and accurate subject/from", "Only subject line", "Only from address"],
    correctAnswer: 1,
    explanation: "CAN-SPAM requires opt-out, physical address, and accurate from/subject information."
  },
  {
    question: "Which feature prevents duplicate sends to the same subscriber?",
    options: ["No such feature", "Send Throttling and Suppression lists", "Only Send Throttling", "Only Data Extensions"],
    correctAnswer: 1,
    explanation: "Suppression lists and send throttling help prevent over-sending and duplicates."
  },
  {
    question: "What is a send classification used for?",
    options: ["Colors only", "Defining email type (e.g., commercial, transactional) for deliverability and compliance", "Tracking only", "Templates only"],
    correctAnswer: 1,
    explanation: "Send classifications define email type and affect deliverability and compliance rules."
  },
  {
    question: "Which block in an email can be personalized with subscriber attributes?",
    options: ["Only images", "Any content block can use personalization strings or AMPscript", "Only subject line", "Only preheader"],
    correctAnswer: 1,
    explanation: "Content blocks support personalization strings and AMPscript for dynamic content."
  },
  {
    question: "What does the Tracking Extract provide?",
    options: ["Email content", "Send, open, click, bounce, and unsubscribe data for reporting", "Subscriber data only", "Template data only"],
    correctAnswer: 1,
    explanation: "Tracking Extract delivers send and engagement data for analytics and reporting."
  },
  {
    question: "Which email authentication method helps improve deliverability?",
    options: ["No authentication needed", "SPF, DKIM, and DMARC", "Only SPF", "Only DKIM"],
    correctAnswer: 1,
    explanation: "SPF, DKIM, and DMARC authenticate your domain and improve inbox placement."
  },
  {
    question: "What is a dynamic content block used for?",
    options: ["Static text only", "Showing different content to different segments based on rules", "Images only", "Tracking only"],
    correctAnswer: 1,
    explanation: "Dynamic content displays different content based on rules and audience attributes."
  },
  {
    question: "Which report shows link-level click performance?",
    options: ["Send report only", "Click report with link-level detail", "Open report only", "Bounce report only"],
    correctAnswer: 1,
    explanation: "Click reports show which links were clicked and by whom for optimization."
  },
]

export default function EmailSpecialistPracticeTestPage() {
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
            code="Practice Test"
            description="Official-style practice test for the Marketing Cloud Email Specialist certification. Use this to gauge readiness and practice under exam-like conditions before taking the real exam."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "90 min",
              cost: "Practice only",
            }}
            topics={[
              "Email Studio & Content",
              "Data Extensions & Subscribers",
              "Send Management",
              "Tracking & Analytics",
              "Best Practices",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Specialist Practice Test: Key Concepts to Review</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email Delivery, Compliance & Subscriber Management</p>
                <p>CAN-SPAM requires a physical mailing address, an unsubscribe mechanism honored within 10 days, and honest subject lines. GDPR requires explicit opt-in consent for EU subscribers and the right to erasure. CASL applies to Canadian recipients. Suppression Lists (global unsubscribes, bounces, complaints) prevent sending to opted-out addresses. Data Extensions store subscriber data with custom attributes for segmentation. Subscriber keys uniquely identify a contact across channels. Double opt-in sends a confirmation email before adding a subscriber to a sendable list. The practice exam frequently tests which compliance rule applies to a given scenario and how suppression lists interact with send classification.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Journey Builder & Triggered Sends</p>
                <p>Journey Builder orchestrates multi-step, multi-channel customer journeys. Entry Sources include Data Extensions (scheduled batch entry), API Events (real-time triggered entry), Salesforce Data (CRM object record changes), and CloudPages forms. Activities include Email Send, SMS, Push, Wait, Decision Split (conditions), Engagement Split (opens/clicks), Einstein STO (Send Time Optimization), and Update Contact. Journey goals and exit criteria control when a contact completes or leaves the journey. Triggered Sends are simpler, single-email automation — good for transactional emails (order confirmations, password resets). The exam tests which journey activity to use for a given scenario and how entry source options differ.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Content Builder & Personalization</p>
                <p>Content Builder is the centralized asset library for emails, templates, images, and documents. Email templates use drag-and-drop blocks or HTML with AMPscript or SSJS for dynamic content. AMPscript is the scripting language for personalization — `%%[VAR %%]` syntax, `Lookup()` retrieves data extension values, `IF/THEN/ENDIF` for conditional content. Dynamic Content blocks show different content to different subscribers based on rules. Personalization Strings insert subscriber attributes inline. Content Syndication shares blocks across business units. The exam tests how to write an AMPscript snippet that retrieves a value from a data extension and conditionally displays content.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Send Classifications & Deliverability</p>
                <p>Send Classifications define the unsubscribe behavior for a send: Commercial (subscriber can unsubscribe), Transactional (not subject to commercial opt-out rules). Sender Profiles, Delivery Profiles, and Send Classifications combine to control From address, reply-to, and unsubscribe handling. IP Warming is required when using a new dedicated IP — gradually increase send volume to build sender reputation. SPF, DKIM, and DMARC records authenticate sending domains and improve deliverability. Bounce handling: Soft Bounces (temporary, retry) vs. Hard Bounces (permanent, suppress). Spam complaints trigger suppression and affect sender reputation. The exam tests how to configure send classifications for a mixed transactional/commercial sender.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Analytics & Reporting</p>
                <p>Marketing Cloud Email reporting tracks: Sent, Delivered, Opens (unique + total), Clicks (unique + total), Bounces (hard + soft), Unsubscribes, and Spam Complaints. Click Rate = Clicks / Delivered. Open Rate = Opens / Delivered. The Tracking workspace in Email Studio shows send-level metrics. Data Views (hidden data extensions: _Sent, _Open, _Click, _Bounce, _Unsubscribe) allow SQL queries in Automation Studio for custom reporting. Einstein Engagement Scoring predicts which subscribers are likely to engage. Send Throttling limits the number of emails sent per hour to protect deliverability. The exam tests how to calculate email KPIs from raw numbers and which reporting tool to use for a given analysis need.</p>
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
