import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'manufacturing-cloud-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Manufacturing Cloud AP validate?", options: ["Only basics", "Fundamental knowledge and skills to design, build, and deploy solutions across several Marketing Cloud products", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Manufacturing Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions across several Marketing Cloud products." },
  { question: "Which industry does Manufacturing Cloud serve?", options: ["Retail only", "Manufacturing (e.g., production, supply chain)", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Manufacturing Cloud serves manufacturing industries." },
  { question: "What is a key use case for Manufacturing Cloud?", options: ["Only email", "Production planning, supply chain, and shop floor", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Production planning, supply chain, and shop floor are key use cases." },
  { question: "Which role typically pursues Manufacturing Cloud AP?", options: ["Marketers", "Partners and implementers in manufacturing", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in manufacturing pursue this credential." },
  { question: "What does 'design, build, and deploy' mean in this context?", options: ["Only UI", "Implementing end-to-end manufacturing solutions", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing end-to-end manufacturing solutions." },
]

export default function ManufacturingCloudAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Manufacturing Cloud Professionals have demonstrated the fundamental knowledge and skills to design, build, and deploy solutions across several Marketing Cloud products." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Manufacturing Cloud', 'Production', 'Supply Chain', 'Shop Floor', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Practice Questions</h2>
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
              { id: 'faq', title: 'Frequently Asked Questions' }]}
          />
        </aside>
      </div>
    </div>
  )
}