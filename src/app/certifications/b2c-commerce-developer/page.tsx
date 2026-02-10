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

const slug = 'b2c-commerce-developer'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What does SFRA stand for in B2C Commerce?",
    options: ["Salesforce Retail Application", "Storefront Reference Architecture", "Secure File Resource Access", "Script Framework Runtime API"],
    correctAnswer: 1,
    explanation: "Storefront Reference Architecture (SFRA) is the standard reference implementation for B2C Commerce storefronts.",
  },
  {
    question: "Which API is used for headless or custom front-end integrations with B2C Commerce?",
    options: ["REST only", "OCAPI (Open Commerce API) / SCAPI", "SOAP only", "Apex"],
    correctAnswer: 1,
    explanation: "OCAPI/SCAPI (Shop API) is used for headless and custom integrations with B2C Commerce.",
  },
  {
    question: "What is a cartridge in B2C Commerce?",
    options: ["A physical product", "A modular unit of code that extends storefront functionality", "A payment method", "A shipping box"],
    correctAnswer: 1,
    explanation: "Cartridges contain scripts, templates, and assets that extend or customize the storefront.",
  },
  {
    question: "Which scripting language is primarily used in B2C Commerce storefront development?",
    options: ["Apex", "JavaScript (Node.js and ISML)", "Python", "Ruby"],
    correctAnswer: 1,
    explanation: "B2C Commerce uses JavaScript (Node.js) and ISML (template language) for storefront logic and rendering.",
  },
  {
    question: "What is the purpose of the Business Manager in B2C Commerce?",
    options: ["To write code", "To manage catalogs, campaigns, and storefront settings", "To deploy to Heroku", "To configure Sales Cloud"],
    correctAnswer: 1,
    explanation: "Business Manager is the admin console for managing B2C Commerce sites, catalogs, and operations.",
  },
]

export default function B2CCommerceDeveloperPage() {
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
            code="B2C Commerce Developer"
            description="Certified B2C Commerce Cloud Developers have experience as full-stack developers for Salesforce B2C Commerce Digital."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['SFRA', 'Cartridges', 'OCAPI/SCAPI', 'Business Manager', 'Scripting', 'Pipelines', 'Data Model', 'Performance', 'Security', 'Deployment']}
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