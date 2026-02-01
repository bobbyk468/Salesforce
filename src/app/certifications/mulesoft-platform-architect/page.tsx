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

const slug = 'mulesoft-platform-architect'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does a MuleSoft Platform Architect do?", options: ["Only coding", "Define and be responsible for an organization's Anypoint Platform strategy", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified MuleSoft Platform Architect architects have proven knowledge and skills to define and be responsible for an organization's Anypoint Platform strategy." },
  { question: "What is Anypoint Platform?", options: ["A CRM", "MuleSoft's unified platform for designing, building, and managing APIs and integrations", "An email tool", "A database only"], correctAnswer: 1, explanation: "Anypoint Platform is MuleSoft's unified platform for APIs and integrations." },
  { question: "What is a key activity for a MuleSoft Platform Architect?", options: ["Only coding", "Defining and owning Anypoint Platform strategy", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They define and own Anypoint Platform strategy." },
  { question: "Which role typically pursues MuleSoft Platform Architect?", options: ["Marketers", "Architects and senior consultants defining integration strategy", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants defining integration strategy pursue this credential." },
  { question: "What does 'platform strategy' mean in MuleSoft context?", options: ["Only APIs", "API-led connectivity, governance, and integration architecture", "Only Mule runtime", "Only CloudHub"], correctAnswer: 1, explanation: "Platform strategy includes API-led connectivity, governance, and integration architecture." },
]

export default function MuleSoftPlatformArchitectPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard title={slugToDisplayName(slug)} code="MuleSoft Architect" description="Certified MuleSoft Platform Architect architects have proven knowledge and skills to define and be responsible for an organization's Anypoint Platform strategy." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['Anypoint Platform', 'API-led', 'Strategy', 'Governance', 'Integration', 'Best Practices']}
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
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
          </div>
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank.</p>
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