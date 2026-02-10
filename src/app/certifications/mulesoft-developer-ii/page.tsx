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

const slug = 'mulesoft-developer-ii'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the focus of MuleSoft Developer II certification?",
    options: ["Basic APIs only", "Independently working on production-ready Mule applications in a DevOps environment", "Email development", "UI design"],
    correctAnswer: 1,
    explanation: "MuleSoft Developer II validates ability to work on production-ready Mule applications and DevOps practices.",
  },
  {
    question: "Which MuleSoft capability is used for complex data transformations?",
    options: ["Apex", "DataWeave", "AMPscript", "Visualforce"],
    correctAnswer: 1,
    explanation: "DataWeave is MuleSoft's transformation language for mapping and transforming data.",
  },
  {
    question: "What is a best practice for error handling in Mule flows?",
    options: ["Ignore errors", "Use error handling scope and global error handler with appropriate strategies", "Delete the flow", "Use only try/catch in Apex"],
    correctAnswer: 1,
    explanation: "Error handling scope and global error handlers provide consistent error handling and recovery.",
  },
  {
    question: "Which deployment target is commonly used for Mule applications in production?",
    options: ["Email Studio", "CloudHub or Runtime Manager", "Slack", "CPQ"],
    correctAnswer: 1,
    explanation: "CloudHub and Runtime Manager (on-prem / hybrid) are used to deploy and manage Mule applications.",
  },
  {
    question: "What does reusable asset mean in API-led connectivity?",
    options: ["One-time use", "APIs designed to be reused across multiple projects and consumers", "Physical hardware", "Single consumer only"],
    correctAnswer: 1,
    explanation: "Reusable assets are APIs and integrations designed for reuse across the organization.",
  },
]

export default function MuleSoftDeveloperIIPage() {
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
            code="MuleSoft Developer II"
            description="Certified MuleSoft Developers II are seasoned developers who have proven knowledge and skills to independently work on production-ready Mule applications in a DevOps environment."
            examDetails={{ questions: 60, passingScore: '~70%', duration: '120 min', cost: '$200' }}
            topics={['Advanced Mule', 'DataWeave', 'Error Handling', 'CloudHub', 'DevOps', 'Security', 'Performance', 'Testing', 'Reusability', 'Production Patterns']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
            ))}
          </div>
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank with detailed explanations.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">Contact Us for Full Access</a>
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