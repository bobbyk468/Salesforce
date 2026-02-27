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

const slug = 'tableau-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Salesforce Certified Tableau Architect?",
    options: [
      "Creating individual dashboards only",
      "Designing and governing enterprise Tableau analytics solutions at scale",
      "Managing Salesforce CRM data",
      "Marketing automation"
    ],
    correctAnswer: 1,
    explanation: "Tableau Architects design and govern enterprise Tableau analytics solutions, including architecture, governance, and scalability."
  },
  {
    question: "Which Tableau deployment consideration is critical for an architect?",
    options: [
      "Color schemes only",
      "Server topology, scalability, high availability, and security",
      "Dashboard count only",
      "User count only"
    ],
    correctAnswer: 1,
    explanation: "Architects must consider server topology, scalability, high availability, and security for enterprise Tableau deployments."
  },
  {
    question: "What role does Tableau's VizQL engine play in architecture decisions?",
    options: ["Renders only static images", "Translates drag-and-drop actions into database queries and optimizes performance", "Handles user authentication only", "Manages licensing"],
    correctAnswer: 1,
    explanation: "VizQL translates visual design into database queries. Architects must understand its impact on data source design and query performance."
  },
  {
    question: "Which authentication method supports single sign-on (SSO) for Tableau Server?",
    options: ["Local authentication only", "SAML 2.0, Kerberos, OpenID Connect, and trusted ticketing", "LDAP only", "OAuth 1.0 only"],
    correctAnswer: 1,
    explanation: "Tableau Server supports SAML 2.0, Kerberos, OpenID Connect, and trusted ticketing for SSO and enterprise identity integration."
  },
  {
    question: "What is the purpose of Tableau's repository database?",
    options: ["Stores user data", "Stores metadata, user info, permissions, and extract info for Tableau Server", "Stores only workbooks", "Manages extracts only"],
    correctAnswer: 1,
    explanation: "The repository stores metadata, permissions, schedules, and extract information. Architects plan for its backup and scalability."
  },
  {
    question: "Which factor affects Tableau Server scalability the most?",
    options: ["Dashboard color themes", "Concurrent user load, background job load, and data source performance", "Number of workbooks only", "Font sizes"],
    correctAnswer: 1,
    explanation: "Scalability depends on concurrent users, background jobs (extracts, subscriptions), and underlying data source performance."
  },
  {
    question: "What is a Tableau data server used for?",
    options: ["Serving web content only", "Centralizing published data sources for reuse and governance across workbooks", "Hosting Tableau Server only", "Managing licenses"],
    correctAnswer: 1,
    explanation: "Data servers let you publish and reuse data sources across workbooks, improving consistency and governance."
  },
  {
    question: "Which governance practice helps control Tableau content proliferation?",
    options: ["Disabling all sharing", "Promoting certified data sources, using projects for organization, and setting ownership policies", "Removing all extracts", "Limiting users to one workbook"],
    correctAnswer: 1,
    explanation: "Certified data sources, project structure, and ownership policies help govern content at scale."
  },
  {
    question: "What does Tableau's backgrounder process handle?",
    options: ["User sessions only", "Extract refreshes, subscriptions, and other scheduled jobs", "VizQL rendering only", "License validation only"],
    correctAnswer: 1,
    explanation: "The backgrounder process runs extract refreshes, subscriptions, and other scheduled tasks. Architects size it for job load."
  },
  {
    question: "Which high-availability configuration uses multiple Tableau Server nodes?",
    options: ["Single-node deployment only", "Distributed deployment with multiple application servers and a gateway", "Development server only", "Cloud-only deployment"],
    correctAnswer: 1,
    explanation: "Distributed deployment spreads services across nodes for high availability and load distribution."
  },
  {
    question: "What is the benefit of Tableau extracts (.tde/.hyper) for performance?",
    options: ["They reduce colors", "They pre-aggregate and compress data, reducing load on source systems and improving query speed", "They only store images", "They manage licensing"],
    correctAnswer: 1,
    explanation: "Extracts pre-aggregate and compress data, offloading work from source systems and speeding up queries."
  },
  {
    question: "Which security layer controls who can view or edit Tableau content?",
    options: ["Data source only", "Project permissions, workbook permissions, and row-level security", "VizQL only", "Repository only"],
    correctAnswer: 1,
    explanation: "Project and workbook permissions plus row-level security control access to Tableau content."
  },
  {
    question: "What is a best practice for Tableau Server disaster recovery?",
    options: ["No backups needed", "Regular repository backups, documented restore procedures, and testing recovery", "Backing up only workbooks", "Single-node only"],
    correctAnswer: 1,
    explanation: "Regular repository backups and tested restore procedures are essential for disaster recovery."
  },
  {
    question: "Which Tableau Cloud consideration differs from on-premises Server?",
    options: ["No difference", "Managed infrastructure, built-in high availability, and connectivity to cloud data sources", "No authentication", "No governance"],
    correctAnswer: 1,
    explanation: "Tableau Cloud is fully managed with built-in HA; architects focus on connectivity and data source design."
  },
  {
    question: "What does incremental refresh do for Tableau extracts?",
    options: ["Refreshes all data every time", "Refreshes only new or changed rows based on a key, reducing refresh time", "Deletes old data only", "Changes colors only"],
    correctAnswer: 1,
    explanation: "Incremental refresh updates only new or changed rows, improving refresh performance for large datasets."
  },
]

export default function TableauArchitectPage() {
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
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="Tableau Architect"
            description="Tableau Architects design and govern enterprise Tableau analytics solutions. They define architecture, governance, scalability, and best practices for Tableau Server and Tableau Cloud."
            examDetails={{
              questions: 45,
              passingScore: "~70%",
              duration: "90 min",
              cost: "$250",
            }}
            topics={[
              "Tableau Architecture & Deployment",
              "Governance & Security",
              "Scalability & Performance",
              "Tableau Server & Cloud",
              "Data Source Design",
              "Best Practices",
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tableau Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tableau Platform Architecture and Deployment</p>
                <p>Tableau Server is the on-premise or customer-managed cloud deployment. Tableau Cloud is the fully managed SaaS offering. Server architecture: primary node runs all processes; worker nodes scale individual processes (VizQL Server, Data Server, Backgrounder, Application Server). Process distribution: VizQL renders visualisations; Backgrounder runs extract refreshes and subscriptions; Data Server manages data connections and caching. The architect selects the deployment model (Server vs Cloud) based on data residency, security, and operational capability requirements.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Architecture: Published Data Sources and Extracts</p>
                <p>Published Data Sources are centrally managed connections shared across workbooks — changes to the data source propagate to all workbooks using it. Embedded data sources are local to the workbook — simpler but harder to govern. Live connections query the database in real time; Extracts (.hyper files) snapshot data for fast performance. Tableau Prep Builder creates ETL pipelines that output clean, reshaped data. The architect designs the data source strategy — which sources to publish, what extract schedules to run, and when live connections are appropriate.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture: Users, Groups, and Row-Level Security</p>
                <p>Tableau Server security layers: Site Roles define what a user can do on the server. Content permissions control who can view, edit, or publish each workbook or data source. Row-Level Security (RLS) filters data based on the logged-in user — implemented via user filters in the data source, calculated fields using USERNAME() and ISMEMBEROF(), or entitlement tables joined to the data. The architect designs the RLS implementation based on the complexity of the access model (single-attribute vs multi-attribute vs role-based entitlement table).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance Optimisation and Scalability</p>
                <p>Workbook performance factors: number of marks in the view, query complexity, extract size, and use of context filters. Performance Recorder in Tableau Desktop identifies slow queries and rendering. Extract optimisation: aggregating extracts, filtering to only needed rows, hiding unused fields. Server-level: worker node sizing for Backgrounder (concurrent extract refreshes) and VizQL (concurrent view renders). Tableau Workbook Advisor (Tableau Cloud) flags performance anti-patterns. The architect balances user experience performance with infrastructure cost.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Governance and Content Management at Scale</p>
                <p>Projects organise content with inherited permissions — nested projects allow hierarchical governance. Content certification marks high-quality, approved data sources and workbooks. Data Catalog (Tableau Catalog — part of Data Management Add-on) provides data lineage, field-level metadata, quality warnings, and impact analysis. Usage analytics in the Admin area show which workbooks are accessed and which are stale (candidates for archival). The architect designs the governance framework — project hierarchy, certification process, naming conventions, and content lifecycle management.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
              { id: 'key-concepts', title: 'Key Concepts' },
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
