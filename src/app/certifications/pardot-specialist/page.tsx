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

const slug = 'pardot-specialist'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is a Prospect in Pardot?",
    options: [
      "A qualified lead",
      "Any visitor who has been identified by email address",
      "A paying customer",
      "A sales opportunity"
    ],
    correctAnswer: 1,
    explanation: "In Pardot, a Prospect is any visitor who has been identified by their email address, either through form submission, email click, or manual creation."
  },
  {
    question: "Which feature allows you to automatically score prospects based on their engagement?",
    options: [
      "Grading",
      "Scoring",
      "Automation Rules",
      "Completion Actions"
    ],
    correctAnswer: 1,
    explanation: "Scoring tracks prospect engagement activities (like form submissions, email opens, page views) and automatically adds points to measure interest."
  },
  {
    question: "What is the difference between Scoring and Grading in Pardot?",
    options: [
      "Scoring measures fit, Grading measures interest",
      "Scoring measures interest, Grading measures fit",
      "They are the same thing",
      "Scoring is manual, Grading is automatic"
    ],
    correctAnswer: 1,
    explanation: "Scoring measures how interested a prospect is (based on activities), while Grading measures how well a prospect fits your ideal customer profile (based on attributes)."
  },
  {
    question: "Which type of form is hosted on Pardot's servers?",
    options: [
      "Form Handler",
      "Pardot Form",
      "Landing Page Form",
      "Embedded Form"
    ],
    correctAnswer: 1,
    explanation: "Pardot Forms are hosted on Pardot's servers and can be embedded on your website or used on Pardot landing pages."
  },
  {
    question: "What happens when a prospect reaches a certain score threshold in an Automation Rule?",
    options: [
      "The prospect is deleted",
      "The configured actions are executed",
      "The prospect is synced to Salesforce",
      "An email is automatically sent"
    ],
    correctAnswer: 1,
    explanation: "Automation Rules execute configured actions when prospects meet specified criteria, such as reaching a score threshold."
  },
]

export default function PardotSpecialistPage() {
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