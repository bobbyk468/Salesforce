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

const slug = 'industries-cpq-developer'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "Which industries does the Industries CPQ certification focus on?",
    options: ["Retail only", "Communications, Media, and Energy & Utilities", "Healthcare only", "Financial Services only"],
    correctAnswer: 1,
    explanation: "Industries CPQ covers Configure, Price, Quote solutions for Communications, Media, and Energy & Utilities clouds.",
  },
  {
    question: "What is a key difference between standard CPQ and Industries CPQ?",
    options: ["No difference", "Industry-specific product and pricing models (e.g., subscriptions, usage)", "Industries CPQ is for B2C only", "Industries CPQ does not support quotes"],
    correctAnswer: 1,
    explanation: "Industries CPQ extends CPQ with industry-specific models for subscriptions, usage-based pricing, and complex product structures.",
  },
  {
    question: "Which Salesforce product is often used with Industries CPQ for telecom?",
    options: ["Marketing Cloud only", "Communications Cloud", "Heroku only", "Commerce Cloud only"],
    correctAnswer: 1,
    explanation: "Communications Cloud (part of Industries) works with CPQ for telecom use cases.",
  },
  {
    question: "What role does a Industries CPQ Developer typically fulfill?",
    options: ["Email marketing", "Developing and customizing CPQ applications for industry verticals", "Slack configuration", "Data migration only"],
    correctAnswer: 1,
    explanation: "They develop Industries CPQ applications for Communications, Media, and Energy & Utilities.",
  },
  {
    question: "Which type of pricing is commonly modeled in Energy & Utilities CPQ?",
    options: ["One-time only", "Usage-based, tiered, and time-of-use pricing", "Fixed fee only", "No pricing"],
    correctAnswer: 1,
    explanation: "Energy & Utilities often require usage-based, tiered, and time-of-use pricing models.",
  },
]

export default function IndustriesCPQDeveloperPage() {
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
            code="Industries CPQ"
            description="Certified Industries CPQ Developers understand how to develop Industries CPQ (Configure, Price, Quote) applications for the Salesforce Communications, Media, and Energy & Utilities Clouds."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Industries CPQ', 'Communications Cloud', 'Media Cloud', 'Energy & Utilities', 'Product Modeling', 'Pricing', 'Quoting', 'Integrations', 'Customization', 'Best Practices']}
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