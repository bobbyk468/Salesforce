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
        <CertIntroParagraph slug={slug} />
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


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Heroku Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Platform Architecture & Dynos</p>
                <p>Heroku runs applications in lightweight Linux containers called Dynos. Dyno types: Web (handles HTTP traffic), Worker (background jobs, no HTTP), One-Off (manual or scheduled tasks). Dyno sizes range from Eco (shared, sleeps after 30 min) to Performance-XL (dedicated, high memory). The Dyno Manager restarts crashed dynos automatically. Horizontal scaling adds more dynos of the same type; vertical scaling changes the dyno size. The Procfile defines process types and start commands. The Router load-balances requests across web dynos (round-robin with session stickiness disabled by default). The architect exam tests how to size and scale a Heroku deployment for a given traffic and processing profile.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Services: Heroku Postgres & Redis</p>
                <p>Heroku Postgres is the primary managed database — available in Essential (row limits), Standard, Premium, and Private tiers. Connection pooling via PgBouncer reduces database connection overhead. Follow databases provide read replicas for analytics queries. Continuous protection (WAL archiving) enables point-in-time recovery. Heroku Data for Redis handles caching, session storage, and pub/sub messaging. Redis plans: Mini (non-persistent) to Premium (persistent, HA). Heroku Key-Value Store (Redis) replaces legacy Heroku Redis. The exam tests data tier selection for a given durability, availability, and performance requirement, and how to configure read replicas for a high-read workload.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CI/CD, Review Apps & Release Management</p>
                <p>Heroku Pipelines define promotion stages: Development → Staging → Production. Review Apps automatically deploy pull requests to ephemeral apps for testing — each PR gets its own URL. Heroku CI runs automated tests on each push and blocks promotion on failure. The `heroku pipelines:promote` command promotes a slug (compiled app image) from one stage to the next without rebuilding. Release Phase runs migration scripts or data seeding commands before each new release goes live. Rollbacks revert to a previous release slug instantly. Config Vars (environment variables) are separate per stage, preventing accidental production config in staging. The exam tests how to design a pipeline for a team with multiple parallel feature branches.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security, Compliance & Private Spaces</p>
                <p>Heroku Private Spaces run Dynos and data services inside a dedicated, isolated network environment — required for compliance workloads (HIPAA, PCI, SOC 2). Private Spaces connect to Salesforce orgs via Salesforce Private Connect (AWS PrivateLink) for secure data exchange without traffic traversing the public internet. Internal Routing restricts apps in a Private Space to only receive traffic from within the space. Shield Private Spaces add encryption at rest and enhanced security controls. Log Drains export Heroku logs to external SIEM or logging systems. Heroku Enterprise provides SSO, audit logs, and team-based access controls. The exam tests Private Space configuration for compliance scenarios and the networking model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Architecture Patterns for Salesforce + Heroku</p>
                <p>Heroku Connect syncs data bidirectionally between Heroku Postgres and Salesforce objects — enabling Heroku apps to read/write Salesforce data without direct API calls. Write acceleration pattern: high-volume writes go to Heroku Postgres first, then Heroku Connect syncs to Salesforce asynchronously, avoiding API rate limits. Event-driven pattern: Salesforce Platform Events trigger Heroku workers via Heroku Connect CDC. Compute-offload pattern: complex calculations (ML inference, image processing) run on Heroku and results are written back to Salesforce. The architect exam tests which pattern to apply for a given scalability, latency, and Salesforce API limit scenario — especially for IoT, mobile, or high-volume data scenarios.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Heroku Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Heroku Architect exam tests enterprise-scale Heroku deployment design. Focus on Heroku infrastructure components, Heroku Connect for Salesforce data sync, high-availability patterns, and security architecture.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Infrastructure Components</p>
                <p>Know dynos (web, worker, one-off), formations, add-ons, buildpacks, and config vars. Understand how these components combine to run a scalable application on Heroku.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Heroku Connect Architecture</p>
                <p>Know how Heroku Connect syncs data between Heroku Postgres and Salesforce using polled sync (Salesforce → Postgres) and a Salesforce trigger (Postgres → Salesforce). Understand conflict resolution and sync frequency.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">High Availability &amp; Scaling</p>
                <p>Understand horizontal scaling (multiple dynos), how the Heroku Router load-balances requests, database connection pooling (PgBouncer), and how to design for zero-downtime deployments.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture</p>
                <p>Know how to use Private Spaces for network isolation, Heroku Shield for HIPAA/PCI compliance, and how to secure data in transit (TLS) and at rest with encrypted Heroku Postgres.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance Optimization</p>
                <p>Know how to use Heroku caching (Redis add-on), async job processing (worker dynos with Sidekiq/Celery), and database query optimization to design performant Heroku applications.</p>
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
