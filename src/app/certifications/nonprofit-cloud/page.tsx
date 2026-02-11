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

const slug = 'nonprofit-cloud'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "Which data model is recommended for tracking donations in Nonprofit Cloud?",
    options: [
      "Standard Opportunity object only",
      "NPSP (Nonprofit Success Pack) data model",
      "Custom objects",
      "Standard Account object"
    ],
    correctAnswer: 1,
    explanation: "NPSP provides a specialized data model for tracking donations, with features like recurring donations, soft credits, and gift entry."
  },
  {
    question: "What is the purpose of Household Accounts in NPSP?",
    options: [
      "To track corporate donors",
      "To group related individual contacts into family units",
      "To manage foundation grants",
      "To track volunteer activities"
    ],
    correctAnswer: 1,
    explanation: "Household Accounts group related individual contacts (family members) together, allowing you to track household giving and communications."
  },
  {
    question: "Which feature allows nonprofits to track in-kind donations?",
    options: [
      "Standard Opportunity",
      "Gift Entry",
      "In-Kind Gift fields on Opportunity",
      "Campaign"
    ],
    correctAnswer: 2,
    explanation: "NPSP includes In-Kind Gift fields on the Opportunity object to track non-monetary donations like goods and services."
  },
  {
    question: "What is the Engagement Plan feature used for?",
    options: [
      "Marketing automation",
      "Creating task templates for donor stewardship",
      "Email campaigns",
      "Event management"
    ],
    correctAnswer: 1,
    explanation: "Engagement Plans create templated task sequences for donor stewardship, ensuring consistent follow-up and cultivation activities."
  },
  {
    question: "How does NPSP handle recurring donations?",
    options: [
      "Through standard Salesforce scheduling",
      "Using Recurring Donation objects with installment Opportunities",
      "Manual entry each month",
      "External payment processor only"
    ],
    correctAnswer: 1,
    explanation: "NPSP uses Recurring Donation objects that automatically create installment Opportunities based on the donation schedule."
  },
]

export default function NonprofitCloudPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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
            code="NPC"
            description="The Nonprofit Cloud Consultant certification validates your expertise in implementing Salesforce solutions for nonprofit organizations."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Nonprofit Data Model",
              "NPSP Configuration",
              "Donation Management",
              "Recurring Giving",
              "Constituent Management",
              "Volunteer Management",
              "Program Management",
              "Grant Management",
              "Reporting & Dashboards",
              "Integration"
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
              Test your knowledge with these sample questions.
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