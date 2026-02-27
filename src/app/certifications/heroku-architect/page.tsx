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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'heroku-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a Heroku Architect do?", options: ["Only coding", "Architect scalable solutions, deploy and manage apps, and manage teams and build-workflows on Heroku", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified Heroku Architects are skilled at architecting scalable solutions, deploying and managing apps, and managing teams and build-workflows on Heroku." },
  { question: "What is Heroku?", options: ["A CRM", "A cloud platform (PaaS) for building, running, and managing apps", "An email tool", "A database only"], correctAnswer: 1, explanation: "Heroku is a cloud platform (PaaS) for building and running apps." },
  { question: "What is a key activity for a Heroku Architect?", options: ["Only coding", "Architecting scalable solutions and managing deployment workflows", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They architect scalable solutions and manage deployment workflows." },
  { question: "Which role typically pursues Heroku Architect?", options: ["Marketers", "Architects and senior developers working with Heroku", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior developers working with Heroku pursue this credential." },
  { question: "What does 'build-workflows' mean in Heroku context?", options: ["Only CI", "CI/CD, pipelines, and release management on Heroku", "Only CD", "Only testing"], correctAnswer: 1, explanation: "Build-workflows include CI/CD, pipelines, and release management on Heroku." },
  { question: "What is a Heroku Dyno?", options: ["A database only", "A lightweight container that runs application code", "An email service", "A storage bucket"], correctAnswer: 1, explanation: "Dynos are containers that run app processes on Heroku." },
  { question: "Which Heroku feature supports horizontal scaling?", options: ["Single dyno only", "Dyno scaling (web and worker dynos)", "No scaling", "Vertical only"], correctAnswer: 1, explanation: "Heroku supports scaling web and worker dynos horizontally." },
  { question: "What does Heroku Postgres provide?", options: ["Only backups", "Managed relational database with add-ons", "No database", "External only"], correctAnswer: 1, explanation: "Heroku Postgres is a managed database add-on." },
  { question: "Which Heroku feature manages environment-specific configuration?", options: ["Hardcoded values", "Config Vars", "Only buildpacks", "Only releases"], correctAnswer: 1, explanation: "Config Vars store environment-specific configuration." },
  { question: "What is a Heroku buildpack?", options: ["A database", "Scripts that compile and prepare an app for execution", "An add-on only", "A dyno type"], correctAnswer: 1, explanation: "Buildpacks compile and prepare apps for the dyno environment." },
  { question: "Which Heroku feature supports zero-downtime deployments?", options: ["No support", "Preboot and release phase", "Manual only", "Single dyno only"], correctAnswer: 1, explanation: "Preboot and release phase enable zero-downtime deployments." },
  { question: "What does Heroku Pipelines support?", options: ["Only staging", "Multi-stage (dev, staging, production) deployment workflow", "Production only", "No staging"], correctAnswer: 1, explanation: "Pipelines support multi-stage deployment workflows." },
  { question: "Which Heroku add-on category supports background jobs?", options: ["Database only", "Worker dynos and queue add-ons (e.g., Redis)", "Email only", "Storage only"], correctAnswer: 1, explanation: "Worker dynos and queues support background job processing." },
  { question: "What is the purpose of Heroku Review Apps?", options: ["Production only", "Automatic ephemeral apps for pull request review", "Staging only", "No automation"], correctAnswer: 1, explanation: "Review Apps create ephemeral apps for PR review." },
  { question: "Which best practice applies to Heroku architecture?", options: ["Ignore scaling", "Design for stateless processes, use 12-factor app methodology", "Single dyno only", "No logging"], correctAnswer: 1, explanation: "Stateless processes and 12-factor methodology support scalability." },
]

export default function HerokuArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="Heroku Architect" description="Certified Heroku Architects are skilled at architecting scalable solutions, deploying and managing apps, and managing teams and build-workflows on Heroku." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['Heroku', 'Scalability', 'Deployment', 'Build Workflows', 'Teams', 'Best Practices']}
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
