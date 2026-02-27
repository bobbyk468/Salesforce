import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'heroku-developer-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Heroku Developer AP validate?", options: ["Only basics", "Skills and knowledge in designing, configuring, building, and implementing on Salesforce Heroku", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Heroku Developer Professionals can demonstrate their skills and knowledge in designing, configuring, building, and implementing on Salesforce Heroku." },
  { question: "What is Heroku?", options: ["A CRM", "A cloud platform for building, running, and managing apps (PaaS)", "An email tool", "A database only"], correctAnswer: 1, explanation: "Heroku is a cloud platform (PaaS) for building and running apps." },
  { question: "Which language/runtime does Heroku commonly support?", options: ["Only Apex", "Node.js, Ruby, Python, Java, and more", "Only Visualforce", "Only LWC"], correctAnswer: 1, explanation: "Heroku supports Node.js, Ruby, Python, Java, and more." },
  { question: "Which role typically pursues Heroku Developer AP?", options: ["Marketers", "Partners and developers working with Heroku", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and developers working with Heroku pursue this credential." },
  { question: "What is a Dyno in Heroku?", options: ["A report", "A lightweight container that runs a single user-specified command", "A dashboard", "An email"], correctAnswer: 1, explanation: "A Dyno is a container that runs a single command on Heroku." },
  { question: "What does Heroku Config Vars store?", options: ["Code only", "Environment-specific configuration (e.g., API keys)", "Reports only", "Emails only"], correctAnswer: 1, explanation: "Config Vars store environment configuration." },
  { question: "Which Heroku add-on provides managed databases?", options: ["No add-on", "Heroku Postgres, Redis, etc.", "Email only", "Slack only"], correctAnswer: 1, explanation: "Heroku Postgres and Redis are managed add-ons." },
  { question: "What is a Procfile used for?", options: ["To replace code", "To declare process types (web, worker) and commands", "To send emails", "To create reports"], correctAnswer: 1, explanation: "Procfile declares process types and commands." },
  { question: "Which Heroku feature supports Git-based deployment?", options: ["Manual only", "Git push to deploy", "FTP only", "No deployment"], correctAnswer: 1, explanation: "Git push deploys to Heroku." },
  { question: "What does Heroku Buildpack do?", options: ["To run app only", "Compiles and prepares app for execution", "To store data", "To send emails"], correctAnswer: 1, explanation: "Buildpacks compile and prepare apps." },
  { question: "Which Heroku plan supports scaling?", options: ["Single dyno only", "Dyno scaling (web and worker)", "No scaling", "Manual only"], correctAnswer: 1, explanation: "Dyno scaling supports web and worker scaling." },
  { question: "What is the purpose of Heroku Logs?", options: ["To replace monitoring", "To view application and system logs", "To deploy only", "To configure only"], correctAnswer: 1, explanation: "Heroku Logs provide application and system logs." },
  { question: "Which best practice applies to Heroku development?", options: ["Ignore config", "Use Config Vars, stateless processes, and 12-factor", "Hardcode keys", "Stateful only"], correctAnswer: 1, explanation: "Config Vars and 12-factor support Heroku best practices." },
  { question: "What does Heroku Pipelines support?", options: ["Single env only", "Multi-stage deployment (dev, staging, prod)", "No staging", "Manual only"], correctAnswer: 1, explanation: "Pipelines support multi-stage deployment." },
  { question: "What is a Heroku release?", options: ["A deployment only", "A versioned deployment combining slug and config; each deploy creates a new release", "A report only", "An add-on only"], correctAnswer: 1, explanation: "A release is an immutable combination of slug and config; rollbacks revert to prior releases." },
]

export default function HerokuDeveloperAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Heroku Developer Professionals can demonstrate their skills and knowledge in designing, configuring, building, and implementing on Salesforce Heroku." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Heroku', 'PaaS', 'Dynos', 'Buildpacks', 'Add-ons', 'APIs', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
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
