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

const slug = 'marketing-cloud-engagement-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Marketing Cloud scripting language is used for server-side logic in emails and landing pages?",
    options: ["Apex", "AMPscript", "Visualforce", "LWC"],
    correctAnswer: 1,
    explanation: "AMPscript is Marketing Cloud's scripting language for personalization and dynamic content in emails and landing pages.",
  },
  {
    question: "What is Server-Side JavaScript (SSJS) used for in Marketing Cloud?",
    options: ["Client-side only", "Script Activities in Automation Studio and advanced scripting", "CPQ configuration", "Slack apps"],
    correctAnswer: 1,
    explanation: "SSJS is used in Script Activities and for advanced server-side logic in Marketing Cloud.",
  },
  {
    question: "Which function retrieves a value from a Data Extension row in AMPscript?",
    options: ["LOOKUP", "VLOOKUP", "GET", "RETRIEVE"],
    correctAnswer: 0,
    explanation: "The LOOKUP function retrieves a single value from a Data Extension based on matching criteria.",
  },
  {
    question: "What is the purpose of personalization strings in Marketing Cloud emails?",
    options: ["To encrypt data", "To insert dynamic content from subscriber attributes", "To schedule sends", "To delete contacts"],
    correctAnswer: 1,
    explanation: "Personalization strings (e.g., %%First_Name%%) insert subscriber or data extension values into content.",
  },
  {
    question: "Which Marketing Cloud product is used to build and host landing pages with dynamic content?",
    options: ["Sales Cloud", "Cloud Pages", "Slack", "Heroku"],
    correctAnswer: 1,
    explanation: "Cloud Pages (formerly Landing Pages) host web pages with AMPscript and dynamic content.",
  },
  {
    question: "Which AMPscript block retrieves multiple rows from a Data Extension?",
    options: [
      "LOOKUP only",
      "LOOKUPROWS or LOOKUPORDEREDROWS",
      "GET only",
      "RETRIEVE only"
    ],
    correctAnswer: 1,
    explanation: "LOOKUPROWS and LOOKUPORDEREDROWS retrieve multiple rows."
  },
  {
    question: "What is the purpose of a Script Activity in Automation Studio?",
    options: [
      "To send emails only",
      "To run SSJS for data manipulation, imports, or custom logic",
      "To create journeys only",
      "To design templates only"
    ],
    correctAnswer: 1,
    explanation: "Script Activities run SSJS for data and custom logic."
  },
  {
    question: "Which API is used for programmatic access to Marketing Cloud?",
    options: [
      "Apex",
      "REST API and SOAP API",
      "Visualforce only",
      "LWC only"
    ],
    correctAnswer: 1,
    explanation: "Marketing Cloud exposes REST and SOAP APIs."
  },
  {
    question: "What does the Treat As Content option do in AMPscript?",
    options: [
      "Nothing",
      "Prevents AMPscript from being executed (treats as literal)",
      "To encrypt",
      "To delete"
    ],
    correctAnswer: 1,
    explanation: "Treat As Content displays AMPscript as literal text."
  },
  {
    question: "Which Data Extension type supports sendable sends?",
    options: [
      "Standard only",
      "Sendable Data Extension (subscriber-key based)",
      "Random only",
      "No extension"
    ],
    correctAnswer: 1,
    explanation: "Sendable Data Extensions link to subscriber key for sends."
  },
  {
    question: "What is the purpose of Microsites in Marketing Cloud?",
    options: [
      "To replace Cloud Pages",
      "To host landing pages with tracking and forms",
      "To send emails only",
      "To create journeys only"
    ],
    correctAnswer: 1,
    explanation: "Microsites host landing pages with tracking and forms."
  },
  {
    question: "Which SSJS object provides access to platform features?",
    options: [
      "Platform only",
      "Platform.Function and Platform.Variable",
      "No object",
      "Only Variable"
    ],
    correctAnswer: 1,
    explanation: "Platform.Function and Platform.Variable provide platform access."
  },
  {
    question: "What does Personalization String syntax use?",
    options: [
      "Only AMPscript",
      "%%Attribute_Name%% or similar",
      "Only SSJS",
      "Only HTML"
    ],
    correctAnswer: 1,
    explanation: "Personalization strings use %%Attribute_Name%% syntax."
  },
  {
    question: "Which testing approach applies to Marketing Cloud development?",
    options: [
      "No testing",
      "Preview and test sends with sample data",
      "Production only",
      "Manual only"
    ],
    correctAnswer: 1,
    explanation: "Preview and test sends validate development."
  },
  {
    question: "What is the purpose of Journey Builder Entry Sources?",
    options: [
      "To replace Data Extensions",
      "To define how contacts enter a journey (e.g., API, data extension, form)",
      "To send only",
      "To track only"
    ],
    correctAnswer: 1,
    explanation: "Entry sources define how contacts enter journeys."
  },
]

export default function MarketingCloudEngagementDeveloperPage() {
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
            code="MC Engagement Developer"
            description="Certified Marketing Cloud Developers have experience developing across the full platform. They create personalized, dynamic messages and landing pages, and are fluent in Marketing Cloud scripting languages."
            examDetails={{ questions: 60, passingScore: '~67%', duration: '105 min', cost: '$200' }}
            topics={['AMPscript', 'SSJS', 'Data Extensions', 'Cloud Pages', 'Email Development', 'APIs', 'Automation', 'Personalization', 'Testing', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Cloud Engagement Developer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">AMPscript Advanced Functions</p>
                <p>Key AMPscript functions: Lookup() retrieves a single DE value; LookupRows() returns a full rowset; Row() and Field() navigate rowsets. FOR/NEXT loops iterate over rowsets. IIF() is the inline conditional; IF/ELSEIF/ENDIF for multi-branch logic. TreatAsContentArea() renders a content area by name. HTTPGet() and HTTPPost() call external APIs from AMPscript. DateAdd() and DateParse() handle date manipulation. The developer exam tests selecting the right function for a given personalisation or data retrieval scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Server-Side JavaScript (SSJS) in Marketing Cloud</p>
                <p>SSJS runs on Marketing Cloud servers (not in the browser) using JavaScript 1.6 syntax. Platform functions (Marketing Cloud-specific) are available alongside standard JS. Common uses: HTTP POST to external systems, manipulating Data Extensions, complex data processing. SSJS runs in Email, Landing Pages, and Automation Studio Script activities. Key objects: Platform.Load(), HTTP.Post(), Retrieve(), DataExtension.Add(). The developer exam tests when to use SSJS vs AMPscript — SSJS for complex logic and API integration, AMPscript for personalisation within emails.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">CloudPages and Dynamic Content</p>
                <p>CloudPages host landing pages, microsites, and smart capture forms. AMPscript-powered CloudPages can capture form data to Data Extensions (SmartCapture). Personalised URLs (PURLs) embed subscriber tokens in CloudPage URLs for pre-filled forms. Dynamic content blocks in emails show different content to different audiences based on rules — configured in Content Builder. The developer builds reusable content blocks with AMPscript logic for personalisation across campaigns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Marketing Cloud REST and SOAP APIs</p>
                <p>REST API: subscriber management (POST /contacts/v1/contacts), Data Extension CRUD (/data/v1/async/dataextensions/), message send (/messaging/v1/messageDefinitionSends/). SOAP API: Subscriber, List, TriggeredSend objects — legacy but still tested. Authentication: obtain access token via OAuth 2.0 client credentials flow, include Bearer token in API headers. The developer exam tests which API endpoint handles a given task and how to construct the request body.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Studio Script Activities</p>
                <p>Script Activities run SSJS code within Automation Studio workflows. Common use cases: data manipulation between DE extracts, calling external APIs, complex data quality checks before sends. Script Activities run synchronously — keep them under 30 minutes to avoid timeout. Error handling: use try/catch in SSJS; log errors to a dedicated error DE. The developer designs automation sequences combining Script Activities, SQL Query Activities, Data Extract Activities, and File Transfer Activities for complex data processing pipelines.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Marketing Cloud Engagement Developer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Marketing Cloud Engagement Developer exam tests technical development skills: AMPscript, SSJS, REST/SOAP APIs, and custom activities. Questions require you to write or interpret code snippets and design custom solutions.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">AMPscript Proficiency</p>
                <p>Master AMPscript data functions: Lookup, LookupRows, LookupOrderedRows, UpdateData, InsertData. Know conditional logic (IIF, CASE), date/string functions, and how to use AMPscript in subject lines, preheaders, and email body.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Server-Side JavaScript (SSJS)</p>
                <p>Know SSJS for CloudPages and landing page logic: using Platform.Load to import functions, Core.JavaScript library for data extensions (Rows, Row objects), and how SSJS differs from client-side JavaScript.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">REST &amp; SOAP API Usage</p>
                <p>Know the key Marketing Cloud REST API endpoints: /contacts/v1/contacts, /messaging/v1/messageDefinitionSends, /data/v1/async, and how to authenticate using OAuth 2.0 client credentials.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Custom Activities in Journey Builder</p>
                <p>Know how to build custom Journey Builder activities using the Custom Activity API: the config.json structure, execute/save/publish/validate endpoints, and how activities interact with Journey Builder&apos;s UI.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Query Activities &amp; Data Extensions</p>
                <p>Know how to write SQL in Automation Studio Query Activities to transform and aggregate data extension data. Understand overwrite vs. append destination actions and how to join data extensions in queries.</p>
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
