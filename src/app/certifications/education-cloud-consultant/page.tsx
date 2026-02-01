import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'education-cloud-consultant'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is Education Cloud used for?",
    options: ["Retail only", "Managing student lifecycle, admissions, and advancement for educational institutions", "Manufacturing only", "CPQ only"],
    correctAnswer: 1,
    explanation: "Education Cloud supports student lifecycle, admissions, advancement, and engagement for schools and universities.",
  },
  {
    question: "Which role does an Education Cloud Consultant typically fulfill?",
    options: ["Email marketing only", "Implementing Salesforce Education Cloud solutions in a customer-facing role", "Slack configuration only", "UI design only"],
    correctAnswer: 1,
    explanation: "They implement Education Cloud solutions in a customer-facing consultant role.",
  },
  {
    question: "What type of organizations typically use Education Cloud?",
    options: ["Retail only", "K-12 schools, higher education, and educational nonprofits", "Manufacturing only", "Financial services only"],
    correctAnswer: 1,
    explanation: "Education Cloud is designed for K-12, higher education, and educational institutions.",
  },
  {
    question: "Which Salesforce product is often used with Education Cloud for learning management?",
    options: ["CPQ only", "Experience Cloud and industry-specific data models", "Commerce Cloud only", "Marketing Cloud only"],
    correctAnswer: 1,
    explanation: "Education Cloud uses Experience Cloud and industry data models for student and program management.",
  },
  {
    question: "What is a common use case for Education Cloud?",
    options: ["Quote generation", "Student recruitment, enrollment, and alumni engagement", "Order management", "Email campaigns only"],
    correctAnswer: 1,
    explanation: "Student recruitment, enrollment, and alumni engagement are core Education Cloud use cases.",
  },
]

export default function EducationCloudConsultantPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard
            title={slugToDisplayName(slug)}
            code="Education Cloud"
            description="Certified Education Cloud Consultants have experience implementing Salesforce Education Cloud solutions in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Education Cloud', 'Student Lifecycle', 'Admissions', 'Advancement', 'Experience Cloud', 'Data Model', 'Reporting', 'Integration', 'Best Practices', 'Industry']}
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