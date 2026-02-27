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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
