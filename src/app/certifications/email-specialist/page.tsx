import FullQuestionBankCta from '@/components/FullQuestionBankCta'
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
]

export default function EmailSpecialistPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
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