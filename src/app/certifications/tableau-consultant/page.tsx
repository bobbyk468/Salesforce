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

const slug = 'tableau-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary role of a Salesforce Certified Tableau Consultant?",
    options: [
      "Selling Tableau licenses only",
      "Implementing Tableau solutions and advising on analytics best practices",
      "Managing Salesforce CRM only",
      "Email marketing"
    ],
    correctAnswer: 1,
    explanation: "Tableau Consultants implement Tableau solutions and advise stakeholders on analytics design, governance, and best practices."
  },
  {
    question: "Which skill is essential for a Tableau Consultant?",
    options: [
      "Only dashboard design",
      "Requirements gathering, data modeling, visualization design, and stakeholder communication",
      "Server administration only",
      "Marketing automation"
    ],
    correctAnswer: 1,
    explanation: "Consultants need requirements gathering, data modeling, visualization design, and stakeholder communication skills."
  },
  {
    question: "What is the difference between dimensions and measures in Tableau?",
    options: ["There is no difference", "Dimensions are categorical (blue pills); measures are numeric aggregations (green pills)", "Measures are always dates", "Dimensions are always numbers"],
    correctAnswer: 1,
    explanation: "Dimensions create headers and categories; measures are aggregated. Understanding this is core to Tableau data modeling."
  },
  {
    question: "Which chart type is best for showing trends over time?",
    options: ["Pie chart", "Line chart", "Treemap", "Scatter plot"],
    correctAnswer: 1,
    explanation: "Line charts effectively show trends and patterns over continuous time."
  },
  {
    question: "What does LOD (Level of Detail) expression control in Tableau?",
    options: ["Colors only", "The granularity at which calculations are performed (FIXED, INCLUDE, EXCLUDE)", "Filters only", "Font size"],
    correctAnswer: 1,
    explanation: "LOD expressions let you compute at a different granularity than the view level."
  },
  {
    question: "When should you use a Tableau extract versus a live connection?",
    options: ["Always use live", "Use extracts when you need faster performance and can refresh periodically; live when real-time data is critical", "Always use extracts", "Only for small datasets"],
    correctAnswer: 1,
    explanation: "Extracts improve performance; live connections support real-time requirements. Consultants choose based on use case."
  },
  {
    question: "What is the purpose of Tableau's dual axis?",
    options: ["Combines two worksheets only", "Plots two measures with different scales on the same axis for comparison", "Removes axes", "Changes colors only"],
    correctAnswer: 1,
    explanation: "Dual axis lets you overlay two measures with different scales for comparison."
  },
  {
    question: "Which Tableau filter type applies before data is aggregated?",
    options: ["Context filter only", "Extract filter and data source filter apply earliest; dimension filters before aggregation", "All filters apply after", "There is no order"],
    correctAnswer: 1,
    explanation: "Data source and extract filters run first; dimension filters apply before aggregation. Measure filters apply after."
  },
  {
    question: "What is a Tableau parameter used for?",
    options: ["Only for colors", "Letting users dynamically change values (e.g., top N, thresholds) that drive calculations and filters", "Storing passwords", "Managing licenses"],
    correctAnswer: 1,
    explanation: "Parameters allow interactive control over calculations, filters, and reference lines."
  },
  {
    question: "Which visualization best shows part-to-whole relationships?",
    options: ["Line chart", "Bar chart", "Pie chart or treemap", "Scatter plot"],
    correctAnswer: 2,
    explanation: "Pie charts and treemaps show proportions of a whole. Consultants choose based on number of categories."
  },
  {
    question: "What does Tableau's 'Show Me' panel help with?",
    options: ["User login only", "Recommending chart types based on selected fields and data types", "Server settings", "Licensing"],
    correctAnswer: 1,
    explanation: "Show Me suggests appropriate chart types based on the fields you select."
  },
  {
    question: "When gathering requirements for a dashboard, what should a consultant prioritize?",
    options: ["Colors first", "Key metrics, user roles, refresh frequency, and data sources", "Number of sheets only", "Font choices"],
    correctAnswer: 1,
    explanation: "Requirements should cover metrics, users, refresh needs, and data sources to design effective solutions."
  },
  {
    question: "What is the benefit of calculated fields in Tableau?",
    options: ["They only change colors", "They create new metrics and dimensions from existing data without changing the source", "They delete data", "They manage extracts only"],
    correctAnswer: 1,
    explanation: "Calculated fields extend your data model for analysis without modifying source systems."
  },
  {
    question: "Which Tableau feature supports collaborative design and governance?",
    options: ["Local files only", "Tableau Server/Cloud with projects, permissions, and certified data sources", "Email only", "No collaboration"],
    correctAnswer: 1,
    explanation: "Tableau Server and Cloud enable projects, permissions, and certified content for team collaboration."
  },
  {
    question: "What is a Tableau story used for?",
    options: ["Single worksheet only", "Guiding viewers through a narrative using a sequence of dashboards and text", "Storing data", "Managing licenses"],
    correctAnswer: 1,
    explanation: "Stories combine worksheets and text to present a narrative and guide analysis."
  },
]

export default function TableauConsultantPage() {
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
            code="Tableau Consultant"
            description="Tableau Consultants implement Tableau solutions and advise organizations on analytics strategy, dashboard design, and data visualization best practices."
            examDetails={{
              questions: 45,
              passingScore: "~70%",
              duration: "90 min",
              cost: "$250",
            }}
            topics={[
              "Requirements & Discovery",
              "Data Modeling & Prep",
              "Visualization Design",
              "Dashboard Best Practices",
              "Tableau Server & Cloud",
              "Stakeholder Communication",
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tableau Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Requirements and Solution Design</p>
                <p>Tableau Consultants gather requirements by understanding: what business questions need answering, what data sources exist and their quality, who the end users are (executives vs analysts vs frontline), and how the dashboards will be maintained. A good solution design specifies: data source strategy (published vs embedded, live vs extract), visualisation types (matching the analytical question), and the deployment plan (who publishes, who maintains). The consultant also assesses data readiness — is the data structured appropriately for Tableau, or does it need preparation in Prep Builder first?</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced Calculations: LOD Expressions</p>
                <p>Level of Detail (LOD) expressions are Tableau&apos;s most powerful calculation type. FIXED: computes a value at a specific dimension level regardless of the view&apos;s level of detail — e.g., {'{'}FIXED [Region]: SUM([Sales]){'}'} gives sales per region in every row. INCLUDE: adds dimensions to the view LOD for the calculation. EXCLUDE: removes dimensions from the view LOD. Common use cases: cohort analysis, year-over-year comparison at a fixed level, customer-level metrics in transaction-level views. The exam tests which LOD expression type applies to a given analysis scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Dashboard Design Principles</p>
                <p>Effective dashboard layout: use containers (horizontal and vertical) to control component resizing and alignment. Padding and spacing separate sections visually. Filter placement: global filters affect all sheets; local filters affect one. Dashboard actions (Filter Action, Highlight Action, URL Action, Set Action) create interactivity — clicking one chart filters another. Mobile layout optimization defines a separate layout for phone-size screens. The consultant also validates dashboard performance — too many filters, marks, or cross-database queries degrade user experience.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tableau Prep Builder: Data Preparation</p>
                <p>Tableau Prep Builder creates Flow pipelines for data cleaning and reshaping before loading to Tableau Desktop or Server. Steps: Input (connect to source), Clean (remove nulls, fix data types, rename fields), Aggregate (roll up), Join (combine tables), Union (stack rows), Pivot (reshape wide to tall or vice versa), Output (Hyper extract, CSV, or Published Data Source). Flows can be published to Tableau Server/Cloud and scheduled for automated refresh. The consultant assesses whether source data requires Prep preprocessing before it can be visualised effectively.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tableau Server Administration for Consultants</p>
                <p>Consultants configure Tableau Server for clients: create sites (for multi-tenancy — each site is isolated), configure projects and permissions, set up user authentication (Local, Active Directory, SAML SSO), and schedule extract refreshes. Subscriptions send emailed snapshots of views on a schedule. Webhooks trigger external systems when Tableau events occur (publish, refresh completion). The consultant advises on content governance — project structure, who can publish where, certification workflows, and data source governance to prevent fragmented analytics environments.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Tableau Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Tableau Consultant exam tests implementation and solution design skills for Tableau projects. Focus on discovery, solution architecture, performance best practices, and advising clients on Tableau deployment strategies.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Discovery &amp; Requirements</p>
                <p>Know how to run a Tableau discovery: understanding existing data sources, report inventory, user personas, and governance requirements. Map business requirements to Tableau features and identify migration complexity.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Solution Architecture Decisions</p>
                <p>Know when to use Tableau Server vs. Tableau Cloud, Desktop vs. Prep, live vs. extract connections, and published data sources vs. embedded data. Justify each decision based on security, performance, and governance needs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Preparation Strategy</p>
                <p>Know when to use Tableau Prep vs. database-side transformations vs. Tableau Desktop calculated fields. Understand the performance implications of each approach for large data volumes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Adoption Strategy</p>
                <p>Know how to drive Tableau adoption: training plans for different user personas, Tableau Champions programs, usage analytics, and how to measure ROI through Tableau&apos;s usage data.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Performance Best Practices</p>
                <p>Know how to advise clients on workbook performance: minimizing marks, using context filters effectively, optimizing data source queries, and using extracts to improve dashboard responsiveness.</p>
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
