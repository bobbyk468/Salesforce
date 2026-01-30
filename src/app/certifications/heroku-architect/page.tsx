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

const slug = 'heroku-architect'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does a Heroku Architect do?", options: ["Only coding", "Architect scalable solutions, deploy and manage apps, and manage teams and build-workflows on Heroku", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified Heroku Architects are skilled at architecting scalable solutions, deploying and managing apps, and managing teams and build-workflows on Heroku." },
  { question: "What is Heroku?", options: ["A CRM", "A cloud platform (PaaS) for building, running, and managing apps", "An email tool", "A database only"], correctAnswer: 1, explanation: "Heroku is a cloud platform (PaaS) for building and running apps." },
  { question: "What is a key activity for a Heroku Architect?", options: ["Only coding", "Architecting scalable solutions and managing deployment workflows", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They architect scalable solutions and manage deployment workflows." },
  { question: "Which role typically pursues Heroku Architect?", options: ["Marketers", "Architects and senior developers working with Heroku", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior developers working with Heroku pursue this credential." },
  { question: "What does 'build-workflows' mean in Heroku context?", options: ["Only CI", "CI/CD, pipelines, and release management on Heroku", "Only CD", "Only testing"], correctAnswer: 1, explanation: "Build-workflows include CI/CD, pipelines, and release management on Heroku." },
]

export default function HerokuArchitectPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard title={slugToDisplayName(slug)} code="Heroku Architect" description="Certified Heroku Architects are skilled at architecting scalable solutions, deploying and managing apps, and managing teams and build-workflows on Heroku." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['Heroku', 'Scalability', 'Deployment', 'Build Workflows', 'Teams', 'Best Practices']}
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