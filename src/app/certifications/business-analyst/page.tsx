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

const slug = 'business-analyst'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary focus of a Certified Business Analyst in Salesforce projects?",
    options: [
      "Writing Apex code",
      "Understanding business needs, capturing requirements, and collaborating with stakeholders",
      "Designing email campaigns",
      "Managing server infrastructure"
    ],
    correctAnswer: 1,
    explanation: "Certified Business Analysts understand business needs, capture requirements, and collaborate with stakeholders to develop Salesforce solutions that drive business improvements."
  },
  {
    question: "Which technique is commonly used to discover and document business requirements?",
    options: [
      "Unit testing",
      "Stakeholder interviews and workshops",
      "Deployment scripts",
      "API development"
    ],
    correctAnswer: 1,
    explanation: "Stakeholder interviews and workshops are standard techniques for discovering and documenting business requirements."
  },
  {
    question: "What deliverable does a Business Analyst typically produce before development begins?",
    options: [
      "Deployed package",
      "Requirements document and user stories",
      "Test classes",
      "Integration code"
    ],
    correctAnswer: 1,
    explanation: "Business Analysts produce requirements documents and user stories to guide solution development."
  },
  {
    question: "How should a Business Analyst prioritize requirements when conflicts exist?",
    options: [
      "Always choose the technical option",
      "Align with business objectives and stakeholder agreement",
      "Defer all decisions to IT",
      "Choose the cheapest option"
    ],
    correctAnswer: 1,
    explanation: "Prioritization should align with business objectives and involve stakeholder agreement."
  },
  {
    question: "Which Salesforce artifact helps translate business requirements into implementable features?",
    options: [
      "Debug log",
      "Process Builder (legacy)",
      "User stories and acceptance criteria",
      "Deployment checklist"
    ],
    correctAnswer: 2,
    explanation: "User stories and acceptance criteria translate business requirements into clear, implementable features for the team."
  },
]

export default function BusinessAnalystPage() {
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
            code="Business Analyst"
            description="Certified Business Analysts understand business needs, capture requirements, and collaborate with stakeholders to develop Salesforce solutions that drive business improvements."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Requirements Discovery",
              "Stakeholder Collaboration",
              "Solution Design",
              "User Stories",
              "Process Modeling",
              "Data Modeling Basics",
              "Acceptance Criteria",
              "Documentation",
              "Change Management",
              "Quality Assurance"
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

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete question bank with detailed explanations.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Contact Us for Full Access
            </a>
          </div>

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