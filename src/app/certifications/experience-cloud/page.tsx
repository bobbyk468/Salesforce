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

const slug = 'experience-cloud'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Experience Cloud template is best suited for a self-service portal where customers can submit and track cases?",
    options: [
      "Partner Central",
      "Customer Service",
      "Build Your Own",
      "Help Center"
    ],
    correctAnswer: 1,
    explanation: "The Customer Service template is optimized for self-service portals where customers can submit cases, find knowledge articles, and track their cases."
  },
  {
    question: "What is the purpose of Audience Targeting in Experience Cloud?",
    options: [
      "To restrict site access",
      "To display different content to different user groups",
      "To track visitor analytics",
      "To manage user authentication"
    ],
    correctAnswer: 1,
    explanation: "Audience Targeting allows you to display different content, components, or page variations to different user groups based on criteria you define."
  },
  {
    question: "Which sharing model component allows external users to see records related to their Account?",
    options: [
      "Role Hierarchy",
      "External Account Hierarchy",
      "Sharing Sets",
      "Manual Sharing"
    ],
    correctAnswer: 2,
    explanation: "Sharing Sets allow you to grant external users access to records associated with their accounts or contacts based on their user profile."
  },
  {
    question: "What is required to enable case deflection in an Experience Cloud site?",
    options: [
      "Einstein Case Classification",
      "Knowledge Articles",
      "Web-to-Case",
      "Email-to-Case"
    ],
    correctAnswer: 1,
    explanation: "Case deflection requires Knowledge Articles to suggest relevant solutions to users before they create a case."
  },
  {
    question: "Which feature allows partners to register deals and track their pipeline in Experience Cloud?",
    options: [
      "Lead Conversion",
      "Partner Relationship Management",
      "Opportunity Management",
      "Deal Registration"
    ],
    correctAnswer: 3,
    explanation: "Deal Registration allows partners to register potential deals through the partner portal for tracking and credit."
  },
]

export default function ExperienceCloudPage() {
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
            code="Experience Cloud"
            description="The Experience Cloud Consultant certification validates your expertise in designing and implementing Experience Cloud sites for customers, partners, and employees."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Experience Cloud Basics",
              "Templates & Themes",
              "Sharing & Visibility",
              "Content Management",
              "Personalization",
              "Site Administration",
              "Community Engagement",
              "Partner Management",
              "Analytics",
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