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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'nonprofit-cloud'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
  {
    question: "What is a Soft Credit in NPSP?",
    options: [
      "A refund",
      "Attributing a gift to a contact who influenced the donation (e.g., peer-to-peer)",
      "A pledge only",
      "An in-kind gift"
    ],
    correctAnswer: 1,
    explanation: "Soft credits attribute influence to contacts who helped secure the gift."
  },
  {
    question: "Which NPSP feature supports tribute and memorial giving?",
    options: [
      "Standard Opportunity only",
      "Tribute and memorial fields and related processing",
      "Campaign only",
      "Household only"
    ],
    correctAnswer: 1,
    explanation: "NPSP supports tribute and memorial giving with dedicated fields."
  },
  {
    question: "What does the Affiliations object track?",
    options: [
      "Only donations",
      "Relationships between contacts and accounts (e.g., employment, education)",
      "Only households",
      "Only campaigns"
    ],
    correctAnswer: 1,
    explanation: "Affiliations track contact-to-account relationships."
  },
  {
    question: "Which NPSP feature helps manage volunteer hours?",
    options: [
      "Opportunity only",
      "Volunteer Jobs and Volunteer Hours",
      "Campaign only",
      "Household only"
    ],
    correctAnswer: 1,
    explanation: "Volunteer Jobs and Volunteer Hours track volunteer engagement."
  },
  {
    question: "What is the purpose of Payment records in NPSP?",
    options: [
      "To replace Opportunities",
      "To track individual payments against an Opportunity (e.g., pledge installments)",
      "To create campaigns",
      "To manage households"
    ],
    correctAnswer: 1,
    explanation: "Payment records track individual payments against Opportunities."
  },
  {
    question: "Which feature supports grant management in Nonprofit Cloud?",
    options: [
      "Standard Opportunity only",
      "Grant applications, requirements, and reporting",
      "Campaign only",
      "Household only"
    ],
    correctAnswer: 1,
    explanation: "Grant management features support applications and reporting."
  },
  {
    question: "What does the Forecast object support in NPSP?",
    options: [
      "Sales forecasting only",
      "Budget and revenue forecasting for fundraising",
      "Inventory only",
      "Campaign only"
    ],
    correctAnswer: 1,
    explanation: "Forecast supports budget and revenue planning for nonprofits."
  },
  {
    question: "Which reporting need is common for nonprofits?",
    options: [
      "Only sales pipeline",
      "Donor retention, campaign ROI, and gift summary",
      "Only product sales",
      "Only support cases"
    ],
    correctAnswer: 1,
    explanation: "Nonprofits need donor retention, campaign ROI, and gift reports."
  },
  {
    question: "What is the purpose of the Primary Affiliation in NPSP?",
    options: [
      "To replace Household",
      "To designate the primary account (e.g., employer) for a contact",
      "To track donations only",
      "To manage campaigns"
    ],
    correctAnswer: 1,
    explanation: "Primary Affiliation designates the main account for a contact."
  },
  {
    question: "Which integration is common for Nonprofit Cloud?",
    options: [
      "CPQ only",
      "Payment processors, fundraising platforms, and accounting",
      "Marketing Cloud only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "Nonprofits integrate with payment processors and fundraising tools."
  },
]

export default function NonprofitCloudPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
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
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            
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
