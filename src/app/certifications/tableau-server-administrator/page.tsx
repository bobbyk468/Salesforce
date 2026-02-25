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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'tableau-server-administrator'
const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'}/certifications/tableau-server-administrator`

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...getCertMetadata(slug),
    alternates: { canonical: canonicalUrl },
  }
}

const sampleQuestions = [
  {
    question: "What is the primary responsibility of a Salesforce Certified Tableau Server Administrator?",
    options: [
      "Creating dashboards only",
      "Deploying, configuring, and managing Tableau Server and Tableau Cloud",
      "Managing Salesforce CRM",
      "Marketing automation"
    ],
    correctAnswer: 1,
    explanation: "Tableau Server Administrators deploy, configure, and manage Tableau Server and Tableau Cloud environments."
  },
  {
    question: "Which area is critical for a Tableau Server Administrator?",
    options: [
      "Only visualization design",
      "Installation, security, user management, and performance tuning",
      "Email campaigns",
      "CPQ configuration"
    ],
    correctAnswer: 1,
    explanation: "Administrators focus on installation, security, user/site management, and performance tuning of Tableau Server."
  },
  {
    question: "Which Tableau Server feature is used to control access at the project and workbook level?",
    options: [
      "Data Source Filters",
      "Permissions and Project Locking",
      "Subscriptions",
      "Ask Data"
    ],
    correctAnswer: 1,
    explanation: "Permissions and project-level locking help administrators enforce consistent access controls for workbooks, views, and data sources."
  },
  {
    question: "A Tableau Server environment shows slow dashboard loads during peak hours. What should an administrator review first?",
    options: [
      "Workbook color palette",
      "Backgrounder and VizQL process configuration plus resource usage",
      "Dashboard title naming convention",
      "Email subscription frequency only"
    ],
    correctAnswer: 1,
    explanation: "Performance tuning starts with server process configuration and host resource bottlenecks (CPU, memory, queue depth) before cosmetic dashboard changes."
  },
  {
    question: "What is the best practice when integrating Tableau Server authentication with enterprise identity systems?",
    options: [
      "Use local users for everyone",
      "Disable SSL for faster login",
      "Configure SAML/OpenID and validate certificate/clock settings",
      "Share one admin account across teams"
    ],
    correctAnswer: 2,
    explanation: "Enterprise deployments typically use SAML/OpenID with strict certificate validation and time synchronization to avoid authentication failures."
  },
  {
    question: "Which admin activity most directly supports long-term Tableau Server stability?",
    options: [
      "Changing dashboard fonts weekly",
      "Ignoring failed extract refreshes",
      "Monitoring background jobs, disk usage, and backup/restore health",
      "Publishing all workbooks to one project"
    ],
    correctAnswer: 2,
    explanation: "Proactive monitoring of jobs, storage, and backup/restore workflows helps prevent outages and data freshness issues."
  },
]

export default function TableauServerAdministratorPage() {
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
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="Tableau Server Admin"
            description="Tableau Server Administrators deploy, configure, and manage Tableau Server and Tableau Cloud. They handle installation, security, user management, sites, and performance."
            examDetails={{
              questions: 45,
              passingScore: "~70%",
              duration: "90 min",
              cost: "$250",
            }}
            topics={[
              "Installation & Deployment",
              "Security & Authentication",
              "User & Site Management",
              "Content & Permissions",
              "Performance & Tuning",
              "Monitoring & Maintenance",
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
            examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <section id="server-admin-scenarios" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tableau Server Administrator Scenarios You Should Master</h2>
            <p className="text-gray-700 text-sm mb-4">
              To avoid canonical clustering with broader Tableau pages, this section focuses on operational admin responsibilities specific to
              Tableau Server and Tableau Cloud governance.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li><strong>Site governance:</strong> isolate teams with project hierarchies, locked permissions, and role-based groups.</li>
              <li><strong>Authentication strategy:</strong> decide local auth vs SAML/OpenID and validate SSL/certificate trust chains.</li>
              <li><strong>Extract reliability:</strong> monitor refresh schedules, failed jobs, and backgrounder capacity before SLA impact.</li>
              <li><strong>Performance tuning:</strong> adjust VizQL/backgrounder processes and identify expensive workbooks with admin views.</li>
              <li><strong>Operational readiness:</strong> test backup/restore and disaster-recovery runbooks on a regular cadence.</li>
            </ul>
          </section>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
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
              { id: 'server-admin-scenarios', title: 'Admin Scenarios' },
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
