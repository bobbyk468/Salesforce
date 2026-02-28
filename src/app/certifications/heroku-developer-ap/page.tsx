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
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Heroku Developer AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Buildpacks, Runtime & Procfile</p>
                <p>Heroku detects the language/framework of an app using Buildpacks — Node.js, Python, Ruby, Java, Go, and more are officially supported. Custom Buildpacks extend the detection and build process. The build process: push code → detect buildpack → compile → create slug → deploy to dynos. The Procfile defines process types: `web: node server.js` (HTTP), `worker: node worker.js` (background). Multiple process types can run simultaneously. Eco and Basic dynos sleep after inactivity. The `heroku local` command runs the Procfile locally using `.env` for config vars. The AP exam tests how to configure a Procfile for a multi-process app and how to debug a build failure using build logs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Config Vars, Add-ons & Environment Management</p>
                <p>Config Vars are environment variables set per Heroku app — accessible in code as `process.env.VAR_NAME`. Never hardcode secrets; always use Config Vars. Add-ons extend Heroku apps with third-party services (databases, email, monitoring, logging) — provisioned via `heroku addons:create`. Each add-on sets Config Vars automatically (e.g., DATABASE_URL for Postgres). Add-on plans scale independently from app dynos. The Heroku CLI (`heroku config:set`, `heroku addons`) manages Config Vars and Add-ons. The AP exam tests how to pass secrets to a Heroku app securely, how to provision and configure an add-on, and how to rotate credentials without downtime.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Connect & Salesforce Integration</p>
                <p>Heroku Connect maps Salesforce object records to Heroku Postgres tables, syncing data bidirectionally on a configurable schedule. Setup: provision Heroku Connect add-on → authenticate with Salesforce → create mappings (object, fields, direction). Read mappings pull Salesforce data to Postgres. Write mappings push Postgres changes back to Salesforce. Conflict detection handles records modified in both systems simultaneously. The `_hc_lastop`, `_hc_err`, and `isdeleted` system columns track sync status. Connection limits on Salesforce API calls govern sync frequency. The AP exam tests how to configure a Heroku Connect mapping, troubleshoot sync errors, and design for high-volume bidirectional sync within Salesforce API limits.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Async Jobs, Workers & Message Queues</p>
                <p>Background processing on Heroku uses Worker dynos. Job queues (Redis-backed: Bull, Bee-Queue for Node.js; Celery for Python; Sidekiq for Ruby) decouple work submission from processing. Pattern: web dyno enqueues a job → worker dyno processes it asynchronously. This prevents long-running tasks from blocking HTTP responses and allows independent scaling of web vs. worker processes. Scheduled tasks use Heroku Scheduler add-on (cron-like) or clock processes in the Procfile. Dead Letter Queues capture failed jobs for retry or investigation. The exam tests how to architect a job queue for a given throughput requirement and how to handle job failures gracefully.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Monitoring, Logging & Performance</p>
                <p>Heroku Logplex aggregates logs from all Dynos, Router, and add-ons into a unified stream — `heroku logs --tail` for real-time viewing. Log Drains forward logs to external services (Papertrail, Datadog, Splunk). Application metrics (response time, throughput, error rate) are visible in the Heroku Dashboard. Dyno metrics show CPU and memory usage — memory leaks cause R14 (memory quota exceeded) errors. R10 (Boot timeout), H10 (App crashed), H12 (Request timeout at 30s) are common Heroku error codes. New Relic, Scout APM, and Datadog add-ons provide application performance monitoring. The exam tests how to diagnose a performance problem using logs and metrics, and how to configure alerting for dyno errors.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Heroku Developer Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Heroku Developer AP exam tests hands-on Heroku development: deploying applications, configuring dynos, working with add-ons, and integrating with Salesforce via Heroku Connect.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Deployment Workflow</p>
                <p>Know the Heroku deployment flow: git push heroku main, Procfile configuration (web/worker dyno types), buildpack selection (auto-detected or explicit), and how release commands run post-deploy tasks.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dyno Configuration &amp; Scaling</p>
                <p>Know dyno types (eco, basic, standard, performance), how to scale horizontally (heroku ps:scale web=3) and vertically (dyno size), and how the Heroku Router distributes requests across web dynos.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Postgres</p>
                <p>Know Heroku Postgres tiers, how to provision a database (heroku addons:create heroku-postgresql), run psql console sessions, create and restore backups, and promote a follower database during failover.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Connect Setup</p>
                <p>Know how to configure Heroku Connect: creating the connection, mapping Salesforce objects to Postgres tables, configuring sync direction (bidirectional, Salesforce to Heroku, Heroku to Salesforce), and troubleshooting sync errors.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Config Vars &amp; Add-ons</p>
                <p>Know how to manage Heroku config vars (environment variables) for storing credentials, how to provision common add-ons (Redis, SendGrid, Papertrail), and how to use the Heroku CLI to manage your application.</p>
              </div>
            </div>
          </div>

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />

          
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
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'scenario-tips', title: 'How to Pass' },
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
