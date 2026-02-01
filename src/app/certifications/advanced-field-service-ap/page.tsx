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

const slug = 'advanced-field-service-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Advanced Field Service AP validate?", options: ["Only basics", "Designing, configuring, building, and implementing Advanced Field Service", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Advanced Field Service Professionals have demonstrated skills in designing, configuring, building, and implementing Advanced Field Service." },
  { question: "Which product does Advanced Field Service extend?", options: ["Marketing Cloud", "Service Cloud and Field Service", "Commerce Cloud", "Slack"], correctAnswer: 1, explanation: "Advanced Field Service extends Service Cloud and Field Service capabilities." },
  { question: "What is a key capability of Advanced Field Service?", options: ["Email only", "Scheduling, optimization, and mobile workforce management", "CPQ only", "Reporting only"], correctAnswer: 1, explanation: "Scheduling, optimization, and mobile workforce management are key capabilities." },
  { question: "Which role typically pursues Advanced Field Service AP?", options: ["Marketers", "Partners and implementers working with Field Service", "Sales only", "Developers only"], correctAnswer: 1, explanation: "Partners and implementers working with Field Service pursue this credential." },
  { question: "What does AP stand for in Accredited Professional?", options: ["Application", "Accredited Professional", "Advanced Platform", "Automation Process"], correctAnswer: 1, explanation: "AP stands for Accredited Professional—product/industry credentials for partners." },
]

export default function AdvancedFieldServiceAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Advanced Field Service Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Advanced Field Service." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Advanced Field Service', 'Scheduling', 'Optimization', 'Mobile', 'Service Cloud', 'Best Practices']}
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