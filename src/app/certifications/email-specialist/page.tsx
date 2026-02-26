import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import Link from 'next/link'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'email-specialist'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which content type allows for dynamic, personalized content based on subscriber data?",
    options: [
      "Static Content",
      "AMPscript",
      "HTML Block",
      "Text Block"
    ],
    correctAnswer: 1,
    explanation: "AMPscript is Marketing Cloud's scripting language that allows you to create dynamic, personalized email content based on subscriber attributes and data."
  },
  {
    question: "What is a Data Extension used for in Marketing Cloud?",
    options: [
      "To create email templates",
      "To store subscriber and relational data",
      "To schedule sends",
      "To track email opens"
    ],
    correctAnswer: 1,
    explanation: "Data Extensions are tables that store subscriber data, custom data, and relational data used for segmentation and personalization."
  },
  {
    question: "Which feature should be used to send emails at the optimal time for each subscriber?",
    options: [
      "Triggered Send",
      "Send Time Optimization",
      "Journey Builder",
      "Automation Studio"
    ],
    correctAnswer: 1,
    explanation: "Send Time Optimization uses Einstein AI to determine and send emails at the best time for each individual subscriber."
  },
  {
    question: "What metric measures the percentage of emails that were successfully delivered?",
    options: [
      "Open Rate",
      "Click Rate",
      "Delivery Rate",
      "Bounce Rate"
    ],
    correctAnswer: 2,
    explanation: "Delivery Rate measures the percentage of emails that were successfully delivered to subscribers' inboxes."
  },
  {
    question: "Which list type in Marketing Cloud automatically removes unsubscribed and bounced subscribers?",
    options: [
      "Publication List",
      "Suppression List",
      "All Subscribers List",
      "Auto-Suppression List"
    ],
    correctAnswer: 2,
    explanation: "The All Subscribers list automatically manages subscriber status, removing unsubscribed and bounced subscribers from sends."
  },
  {
    question: "What is a Triggered Send in Marketing Cloud Email Studio?",
    options: [
      "A batch email sent to all subscribers at the same time",
      "An automated, real-time email sent based on a specific subscriber action or external API call",
      "A scheduled one-time email send",
      "An A/B split test send"
    ],
    correctAnswer: 1,
    explanation: "Triggered Sends fire individually in real time when a defined event occurs, such as a form submission or purchase — common for transactional and confirmation emails.",
  },
  {
    question: "What does the Sender Policy Framework (SPF) DNS record do for email deliverability?",
    options: [
      "Encrypts the email body content before sending",
      "Authorises which IP addresses and mail servers are permitted to send email on behalf of your domain",
      "Adds an unsubscribe header to all outgoing messages",
      "Defines the maximum send volume per hour"
    ],
    correctAnswer: 1,
    explanation: "SPF publishes authorised sending IPs in DNS. Receiving servers check SPF to verify the sender — failing SPF increases spam folder placement risk.",
  },
  {
    question: "What is the Sender Authentication Package (SAP) in Marketing Cloud?",
    options: [
      "A spam-filtering rule set for inbound email",
      "A bundle that provides a private IP, custom sending domain, branded link wrapping, and reply mail management for improved deliverability",
      "A subscriber segmentation tool",
      "An analytics dashboard for email performance"
    ],
    correctAnswer: 1,
    explanation: "SAP establishes your brand's sending identity in Marketing Cloud with a dedicated IP, authenticated custom domain, and reply mail management to protect sender reputation.",
  },
  {
    question: "In Marketing Cloud, what is the primary purpose of a Suppression List?",
    options: [
      "To add new subscribers to a send",
      "To exclude specific email addresses from a send, even if they appear in the target audience",
      "To track bounced subscribers across all sends",
      "To schedule automated re-engagement campaigns"
    ],
    correctAnswer: 1,
    explanation: "Suppression Lists prevent specific addresses from receiving emails regardless of their presence in the send audience — used for opt-outs, complaints, and domain blocks.",
  },
  {
    question: "Which Marketing Cloud feature lets you test two email versions on a subset of subscribers before sending the winner to the rest?",
    options: [
      "Journey Builder split activity",
      "A/B Testing in Email Studio",
      "Triggered Send definition",
      "Automation Studio schedule"
    ],
    correctAnswer: 1,
    explanation: "A/B Testing sends version A to one portion and version B to another, then automatically sends the winning version (by open rate, click rate, or manual choice) to the remainder.",
  },
  {
    question: "What is the main use case for Journey Builder in Marketing Cloud?",
    options: [
      "Creating HTML email templates",
      "Designing and automating multi-step, event-driven customer journeys across email, SMS, push, and ads",
      "Managing subscriber import jobs",
      "Running batch data extracts"
    ],
    correctAnswer: 1,
    explanation: "Journey Builder orchestrates personalised, cross-channel experiences triggered by subscriber events — going beyond single-send campaigns to full lifecycle automation.",
  },
  {
    question: "What happens in Marketing Cloud when an email receives a hard bounce?",
    options: [
      "The email is retried up to 3 times before the address is flagged",
      "The subscriber's status is automatically set to Bounced and they are excluded from future sends to protect sender reputation",
      "The subscriber receives a follow-up SMS notification",
      "The send is paused until the bounce is manually reviewed"
    ],
    correctAnswer: 1,
    explanation: "Hard bounces indicate a permanent delivery failure (invalid address). Marketing Cloud automatically marks the subscriber as Bounced and prevents further sends to protect IP reputation.",
  },
  {
    question: "What does DKIM (DomainKeys Identified Mail) add to outgoing emails?",
    options: [
      "A visible disclaimer in the email footer",
      "A cryptographic signature in the email header that receiving servers use to verify the message was sent from the claimed domain and was not altered in transit",
      "An encrypted payload for the email body content",
      "A link to the sender's unsubscribe preference centre"
    ],
    correctAnswer: 1,
    explanation: "DKIM signs outgoing emails with a private key — receiving servers verify the signature using the domain's public key published in DNS, confirming authenticity.",
  },
  {
    question: "Which AMPscript function retrieves a single field value from a Data Extension based on matching criteria?",
    options: [
      "LookupRows()",
      "Lookup()",
      "RetrieveSalesforceObjects()",
      "AttributeValue()"
    ],
    correctAnswer: 1,
    explanation: "Lookup() returns a single column value from a Data Extension row that matches the specified key-value pair — the most common AMPscript function for personalisation.",
  },
  {
    question: "What is the purpose of a Data Filter in Marketing Cloud?",
    options: [
      "To import subscribers from a CSV file",
      "To define criteria-based subscriber segments from a Data Extension or list for targeted sends",
      "To schedule automated email sends",
      "To encrypt subscriber data at rest"
    ],
    correctAnswer: 1,
    explanation: "Data Filters apply rule-based criteria to a Data Extension or list to create a filtered subset of subscribers — used for targeted segmentation without writing SQL.",
  },
]

export default function EmailSpecialistPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          Looking for exam strategy before you start practising? Read our{' '}
          <Link href="/email-specialist-exam-tips" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Email Specialist exam tips and 4-week study plan</Link>.
        </p>

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
            code="Email Specialist"
            description="The Marketing Cloud Email Specialist certification validates your skills in email marketing, including content creation, data management, and email deliverability."
            examDetails={{
              questions: 60,
              passingScore: "67%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Email Marketing Best Practices",
              "Content Creation",
              "AMPscript",
              "Data Management",
              "Subscriber Management",
              "Email Deliverability",
              "Tracking & Reporting",
              "Automation",
              "Testing",
              "Compliance"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Study Notes */}
          <div id="study-notes" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SFMC Email Specialist Study Notes</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email Deliverability: SPF, DKIM, and DMARC</p>
                <p><strong>SPF</strong> lists authorised sending IPs in DNS. <strong>DKIM</strong> adds a cryptographic signature to email headers — receiving servers verify authenticity using the domain&apos;s public key. <strong>DMARC</strong> defines policy (none, quarantine, reject) when SPF or DKIM fails. All three are included in Marketing Cloud&apos;s Sender Authentication Package (SAP). The exam tests what each does and which threat each addresses.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Subscriber Management and List Types</p>
                <p>All Subscribers list is the master subscriber list — it controls global unsubscribes. Publication Lists are opt-in lists for specific content types. Suppression Lists exclude addresses from specific sends. Auto-Suppression Lists apply across all sends. Data Extensions store relational data and support segmentation with SQL queries and Data Filters. Know the precedence: global unsubscribes override everything.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Send Classification and Commercial vs Transactional</p>
                <p>Commercial emails are marketing messages — require the CAN-SPAM unsubscribe footer. Transactional emails (order confirmations, receipts) can bypass commercial unsubscribe rules but must be genuinely transactional. In Marketing Cloud, Send Classifications define whether a send is commercial or transactional — misclassifying marketing emails as transactional violates CAN-SPAM.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">AMPscript Key Functions</p>
                <p><code className="bg-gray-100 px-1 rounded">Lookup()</code> retrieves a single value from a Data Extension. <code className="bg-gray-100 px-1 rounded">LookupRows()</code> returns a full row set. <code className="bg-gray-100 px-1 rounded">AttributeValue()</code> accesses subscriber attribute values. <code className="bg-gray-100 px-1 rounded">IIF()</code> is the inline conditional. These four functions cover most AMPscript personalisation scenarios tested in the exam.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tracking Metrics to Know</p>
                <p>Delivered Rate = (Sent &minus; Bounces) / Sent. Open Rate = Unique Opens / Delivered. Click-to-Open Rate (CTOR) = Clicks / Opens — measures content relevance. Hard bounces = permanent failures (invalid address). Soft bounces = temporary failures (mailbox full). Marketing Cloud auto-unsubscribes hard-bounced addresses. Match the metric to the business question asked in each scenario.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct.
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
              { id: 'study-notes', title: 'Study Notes' },
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
