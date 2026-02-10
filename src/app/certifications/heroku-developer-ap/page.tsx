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

const slug = 'heroku-developer-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Heroku Developer AP validate?", options: ["Only basics", "Skills and knowledge in designing, configuring, building, and implementing on Salesforce Heroku", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Heroku Developer Professionals can demonstrate their skills and knowledge in designing, configuring, building, and implementing on Salesforce Heroku." },
  { question: "What is Heroku?", options: ["A CRM", "A cloud platform for building, running, and managing apps (PaaS)", "An email tool", "A database only"], correctAnswer: 1, explanation: "Heroku is a cloud platform (PaaS) for building and running apps." },
  { question: "Which language/runtime does Heroku commonly support?", options: ["Only Apex", "Node.js, Ruby, Python, Java, and more", "Only Visualforce", "Only LWC"], correctAnswer: 1, explanation: "Heroku supports Node.js, Ruby, Python, Java, and more." },
  { question: "Which role typically pursues Heroku Developer AP?", options: ["Marketers", "Partners and developers working with Heroku", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and developers working with Heroku pursue this credential." },
  { question: "What is a Dyno in Heroku?", options: ["A report", "A lightweight container that runs a single user-specified command", "A dashboard", "An email"], correctAnswer: 1, explanation: "A Dyno is a container that runs a single command on Heroku." },
]

export default function HerokuDeveloperAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Heroku Developer Professionals can demonstrate their skills and knowledge in designing, configuring, building, and implementing on Salesforce Heroku." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Heroku', 'PaaS', 'Dynos', 'Buildpacks', 'Add-ons', 'APIs', 'Best Practices']}
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