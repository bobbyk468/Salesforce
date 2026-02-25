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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'education-cloud-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
