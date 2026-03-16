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
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'data-cloud-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary purpose of Salesforce Data Cloud?",
    options: ["A data warehouse for Salesforce backups only", "Unifying customer data from multiple sources to create a real-time, actionable customer profile", "An email marketing platform for batch campaign sends", "A CPQ pricing engine for enterprise contracts"],
    correctAnswer: 1,
    explanation: "Data Cloud unifies data from multiple sources (Salesforce orgs, external systems, web, mobile) to create a single, actionable customer profile that drives segmentation, activation, and AI.",
  },
  {
    question: "What is a Data Stream in Salesforce Data Cloud?",
    options: [
      "A real-time analytics dashboard that streams live sales data",
      "A connection that ingests data from a source system into Data Cloud — such as a Salesforce org, cloud storage, or external API",
      "A scheduled Apex job that exports Data Cloud records to an external data warehouse",
      "A Marketing Cloud Journey that triggers based on Data Cloud segment membership"
    ],
    correctAnswer: 1,
    explanation: "Data Streams are the ingestion layer — each Data Stream connects to a data source and maps incoming data to Data Cloud Data Model Objects (DMOs).",
  },
  {
    question: "What are Data Model Objects (DMOs) in Data Cloud?",
    options: [
      "Custom fields on the Salesforce Lead object used to store data source metadata",
      "Standardised tables in the Data Cloud data model that organise ingested data by category — such as Individual (person), Engagement, or other object types",
      "Salesforce external objects that connect to a remote SOAP-based data source",
      "Report types created for cross-object reporting in CRM Analytics"
    ],
    correctAnswer: 1,
    explanation: "DMOs are the structured tables in Data Cloud's canonical data model. Key DMOs include Individual (unified person record), Contact Point Email, Contact Point Phone, and various Engagement types.",
  },
  {
    question: "What does Identity Resolution do in Salesforce Data Cloud?",
    options: [
      "Authenticates external system API connections using OAuth 2.0 tokens",
      "Links records from multiple data sources that belong to the same individual, creating a single unified profile by matching on email, phone, name, or custom rules",
      "Validates that all incoming data complies with GDPR consent requirements before ingestion",
      "Assigns unique Salesforce record IDs to Data Cloud profiles for CRM synchronisation"
    ],
    correctAnswer: 1,
    explanation: "Identity Resolution applies matching and reconciliation rules to stitch together records from different sources into a single Unified Profile — resolving duplicate customer identities across channels.",
  },
  {
    question: "What is a Unified Profile in Data Cloud?",
    options: [
      "A Salesforce Person Account record that merges duplicate contact records",
      "A single, consolidated view of an individual that combines linked records from multiple sources after Identity Resolution has run",
      "A custom report type that shows all interactions for a given Account",
      "A Marketing Cloud subscriber profile enriched with Salesforce CRM data"
    ],
    correctAnswer: 1,
    explanation: "After Identity Resolution links source records, a Unified Profile is created — providing a 360-degree view of the customer used for segmentation, activation, and AI grounding.",
  },
  {
    question: "What is a Segment in Data Cloud?",
    options: [
      "A named permission set group that controls user access to Data Cloud features",
      "A dynamic audience of Unified Profiles that meet defined criteria — used for targeted activation across channels",
      "A scheduled data export job that sends records to an external BI platform",
      "A Marketing Cloud List used to manage email subscription preferences"
    ],
    correctAnswer: 1,
    explanation: "Segments filter Unified Profiles by attribute criteria (e.g., purchase history, location, engagement) and are evaluated on a defined refresh schedule. Segments are the basis for activation.",
  },
  {
    question: "What is Activation in Salesforce Data Cloud?",
    options: [
      "Enabling Data Cloud in a Salesforce org for the first time through the Setup menu",
      "Publishing segment membership to a destination system — such as Marketing Cloud, Advertising Studio, or a custom external platform — to drive campaigns and personalisation",
      "Running Identity Resolution to create Unified Profiles from ingested data streams",
      "Granting users permission to view and edit Data Cloud segments"
    ],
    correctAnswer: 1,
    explanation: "Activation sends segment membership data and selected profile attributes to downstream systems so they can be used for campaigns, ad targeting, and personalisation.",
  },
  {
    question: "What is a Calculated Insight in Data Cloud?",
    options: [
      "A Salesforce report metric automatically updated by a scheduled Apex job",
      "A derived metric computed from Data Cloud data using SQL — such as total lifetime value, average order frequency, or days since last purchase — stored as an attribute on the Unified Profile",
      "An Einstein prediction score surfaced on a Salesforce record page via a formula field",
      "A CRM Analytics widget that displays aggregated Data Cloud segment counts"
    ],
    correctAnswer: 1,
    explanation: "Calculated Insights are SQL-based aggregations that enrich Unified Profiles with computed metrics — enabling segmentation and activation based on derived attributes like CLV or churn score.",
  },
  {
    question: "Which consent mechanism does Data Cloud support for GDPR and CCPA compliance?",
    options: [
      "Manual record deletion performed by a Salesforce administrator on request",
      "Consent API and Individual's Privacy Attributes — allowing Data Cloud to respect opt-out and data deletion requests at the profile level across all ingested data",
      "An Email Opt-Out field on the Marketing Cloud subscriber record that syncs to Data Cloud daily",
      "A Salesforce Shield encryption key that masks personal data for non-admin users"
    ],
    correctAnswer: 1,
    explanation: "Data Cloud honours consent through the Individual object's privacy attributes. Opt-outs and deletion requests propagate to prevent the use of suppressed profiles in segments and activations.",
  },
  {
    question: "What is the role of a Data Cloud Consultant on an implementation project?",
    options: [
      "Writing Apex triggers to ingest data directly into Data Cloud from Salesforce Platform Events",
      "Designing the data ingestion architecture, configuring Identity Resolution, building segments, setting up activations, and advising customers on data governance strategy",
      "Managing the Marketing Cloud account and creating email campaigns from Data Cloud segments",
      "Administering the Salesforce org's sharing model and permission sets for Data Cloud users"
    ],
    correctAnswer: 1,
    explanation: "Data Cloud Consultants lead the full data platform implementation — from source mapping and ingestion through to identity resolution, segmentation, activation, and governance advisory.",
  },
  {
    question: "What is a Data Action in Salesforce Data Cloud?",
    options: [
      "An automated Flow triggered when a new Data Stream ingestion job completes",
      "A trigger that fires when a profile's segment membership changes — used to initiate downstream processes such as updating a Salesforce record or triggering a Marketing Cloud journey",
      "A batch export job that sends Data Cloud records to an external data lake",
      "A custom validation rule that prevents incorrectly formatted records from being ingested"
    ],
    correctAnswer: 1,
    explanation: "Data Actions respond to segment entry or exit events, enabling real-time orchestration — for example, creating a Salesforce Task when a customer enters a high-churn-risk segment.",
  },
  {
    question: "What distinguishes Salesforce Data Cloud from a traditional data warehouse?",
    options: [
      "Data Cloud stores data in relational tables exactly like a standard SQL database with no additional capabilities",
      "Data Cloud is purpose-built for customer data unification, real-time segmentation, and AI grounding — with native Salesforce integration, Identity Resolution, and activation connectors that data warehouses do not provide out of the box",
      "Data Cloud cannot handle structured data — it is designed only for unstructured data such as call transcripts",
      "Data Cloud requires all data to be pre-processed in an ETL tool before ingestion, unlike data warehouses that accept raw data"
    ],
    correctAnswer: 1,
    explanation: "Data Cloud is a customer data platform (CDP) — built for real-time profile unification, segmentation, and activation. Traditional data warehouses store and query data but lack native identity resolution, activation, and Salesforce CRM integration.",
  },
  {
    question: "Which Data Cloud object represents a unified person record across all sources?",
    options: ["Account", "Individual", "Contact Point Email only", "Segment"],
    correctAnswer: 1,
    explanation: "The Individual DMO is the unified person record that Identity Resolution creates by stitching together data from multiple sources."
  },
  {
    question: "What is the purpose of a Data Cloud Data Stream?",
    options: ["To export segments", "To connect a data source and map incoming records to DMOs for ingestion", "To create activation destinations", "To run Calculated Insights"],
    correctAnswer: 1,
    explanation: "Data Streams define the connection to a source (e.g., Salesforce, external API) and the mapping to Data Cloud objects."
  },
  {
    question: "How does Data Cloud support Einstein and Agentforce?",
    options: ["It does not", "By providing unified profiles for grounding — enabling AI to access real customer data", "Only for batch exports", "Only for Marketing Cloud"],
    correctAnswer: 1,
    explanation: "Data Cloud grounding lets Einstein and Agentforce access unified customer profiles for accurate, data-backed AI responses."
  },
]

export default function DataCloudConsultantPage() {
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
            code="Data Cloud"
            description="Certified Data Cloud Consultants have experience implementing and consulting on enterprise data platforms in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Data Cloud Basics', 'Identity Resolution', 'Data Model', 'Segments', 'Activation', 'Connectors', 'Transformations', 'Governance', 'Reporting', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Cloud Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">The Data Cloud Data Flow: Ingest → Model → Resolve → Segment → Activate</p>
                <p>Data Cloud follows a structured flow: <strong>Data Streams</strong> ingest source data, mapping it to <strong>Data Model Objects (DMOs)</strong>. <strong>Identity Resolution</strong> links records across sources into a <strong>Unified Profile</strong>. <strong>Segments</strong> filter profiles by criteria. <strong>Activation</strong> publishes segments to destination systems. Exam questions often describe a step and ask which feature or object is responsible.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identity Resolution</p>
                <p>Identity Resolution uses matching rules (email, phone, name, custom) and reconciliation rules (which source wins for a given attribute) to stitch records together into a Unified Profile. A Unified Individual represents the single person after resolution. Understand the difference between matching rules (what makes records the same person) and reconciliation rules (which data is authoritative).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Segments and Activation</p>
                <p>Segments are dynamic audiences defined by filters on Unified Profile attributes and Calculated Insights. They refresh on a defined schedule. Activations publish segment membership to destinations — Marketing Cloud, Advertising Studio, or custom targets. Data Actions trigger on segment entry or exit to orchestrate downstream processes in real time.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Calculated Insights</p>
                <p>Calculated Insights are SQL-based derived metrics stored as attributes on the Unified Profile — examples include customer lifetime value, average order frequency, days since last purchase, or churn score. They can be used in segment filters and activations. Know that they require SQL and run on a scheduled basis.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Consent and Data Governance</p>
                <p>Data Cloud honours consent via the Individual object&apos;s privacy attributes. Opt-outs and deletion requests propagate to suppress profiles from being included in segments and activations. GDPR and CCPA compliance requires correct consent capture and propagation across all ingested data sources. The exam tests both the technical mechanism and the business reason for consent management.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Data Cloud Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Data Cloud Consultant exam tests your ability to design and implement a unified customer data platform. Focus on data ingestion architecture, identity resolution, segmentation, and activation — the full data lifecycle in Data Cloud.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Ingestion &amp; Data Streams</p>
                <p>Know the difference between ingestion-based (real-time) and query-based data sources. Understand how Data Streams map source data to Data Cloud objects using the data model (Individual, Engagement, etc.).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Identity Resolution</p>
                <p>Identity resolution matches and merges records from multiple sources into a single Unified Individual profile. Know how to configure matching rules, reconciliation rules, and how to handle merge conflicts.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Segmentation &amp; Activation</p>
                <p>Understand how to build segments using AND/OR logic across related data objects. Know activation targets (Marketing Cloud, Advertising Studio, CRM) and how segment membership flows to each target.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Calculated Insights &amp; Einstein</p>
                <p>Know how to create Calculated Insights for metric computation (e.g., LTV, engagement score) using SOQL-like query language. Understand how Einstein features in Data Cloud use unified profiles for predictions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Cloud Permissions &amp; Governance</p>
                <p>Understand Data Cloud permission sets, data spaces for data segregation, consent management, and the Data Cloud governance framework for handling PII and regulatory compliance.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

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
