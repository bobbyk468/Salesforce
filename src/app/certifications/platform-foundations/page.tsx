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

const slug = 'platform-foundations'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "Who is the Salesforce Associate certification designed for?",
    options: ["Developers only", "Individuals with up to 6 months of user experience on Salesforce", "Architects only", "Marketers only"],
    correctAnswer: 1,
    explanation: "The Associate certification is designed for individuals who may have up to 6 months of user experience.",
  },
  {
    question: "What does the Customer 360 Platform refer to?",
    options: ["Only Sales Cloud", "The integrated set of Salesforce products that connect customer data across the organization", "Only Marketing Cloud", "Only Service Cloud"],
    correctAnswer: 1,
    explanation: "Customer 360 is Salesforce's integrated platform connecting customer data across products.",
  },
  {
    question: "Which object is central to the Salesforce CRM data model?",
    options: ["Report", "Account", "Dashboard", "Email Template"],
    correctAnswer: 1,
    explanation: "Account is a core object representing companies or people you do business with.",
  },
  {
    question: "What is a Record in Salesforce?",
    options: ["A report type", "A single row of data in an object (e.g., one Account)", "A dashboard", "A permission set"],
    correctAnswer: 1,
    explanation: "A record is a single row of data in an object.",
  },
  {
    question: "Which feature allows users to see their tasks and calendar?",
    options: ["Reports only", "Home page and Activity components", "Only dashboards", "Only list views"],
    correctAnswer: 1,
    explanation: "The Home page and Activity components show tasks and calendar.",
  },
]

export default function PlatformFoundationsPage() {
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
            code="Associate"
            description="The Salesforce Associate Certification is designed for individuals who may have up to 6 months of user experience. It validates foundational knowledge and understanding of the Customer 360 Platform."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['Customer 360', 'Objects & Records', 'Navigation', 'Reports & Dashboards', 'Collaboration', 'Mobile', 'Security Basics', 'Data Model']}
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