/* Ported from /omnistudio-consultant-study-guide, merged into /certifications/omnistudio-consultant in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'omnistudio-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `OmniStudio Consultant study guide: 6 sections covering FlexCards, OmniScripts, Integration Procedures, and Data Mappers. $200. Free practice questions.`

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'OmniStudio Consultant', url: '/certifications/omnistudio-consultant' },
  { name: 'OmniStudio Consultant Study Guide', url: '/omnistudio-consultant-study-guide' },
]

const examSections = [
  { name: 'Flexcards', weight: 18, note: 'FlexCard states (default, active, error), datasource types, layout design, and choosing a FlexCard for contextual record display.' },
  { name: 'Omniscripts', weight: 17, note: 'Guided multi-step user experiences, step groups, UX considerations, and OmniScript versioning and activation.' },
  { name: 'Integration Procedures', weight: 17, note: 'Server-side data orchestration, parallel vs sequential execution, callouts, and when to use an Integration Procedure over a DataRaptor or Flow.' },
  { name: 'Data Mappers', weight: 17, note: 'DataRaptor types (Extract, Load, Transform, Turbo Extract) and choosing the right one for a data operation.' },
  { name: 'Best Fit Solutions', weight: 15, note: 'Mapping business requirements to the right OmniStudio component, component reuse strategy, and justifying a design decision.' },
  { name: 'Omnistudio Fundamentals', weight: 16, note: 'Core platform concepts, DataPack deployment (export, version control, import, activate), and environment management (Dev, UAT, Prod).' },
]

export const faqItems = [
  {
    question: 'What is the difference between OmniStudio Consultant and OmniStudio Developer certifications?',
    answer: 'OmniStudio Developer focuses on the technical HOW, building and configuring OmniScripts, DataRaptors, FlexCards, and Integration Procedures. OmniStudio Consultant focuses on the strategic WHY and WHAT, gathering requirements, selecting the right OmniStudio component for each use case, designing solutions, and managing implementations end to end. Consultants need to understand capabilities without necessarily building everything themselves.',
  },
  {
    question: 'Who should take the OmniStudio Consultant exam?',
    answer: 'OmniStudio Consultant is designed for functional consultants and solution architects implementing Salesforce Industries solutions. It is ideal for project leads, business analysts, and lead consultants who design OmniStudio solutions and work with clients, rather than developers who build them. Many candidates hold both OmniStudio Developer and Consultant credentials.',
  },
  {
    question: 'What is the OmniStudio Consultant exam format?',
    answer: 'The exam has 60 questions, a 105-minute time limit, approximately 67% passing score, and a $200 fee. Questions are scenario-based, given a business requirement, choose the correct OmniStudio component or design decision. No formal prerequisites exist, but hands-on OmniStudio experience and completion of OmniStudio Developer (or equivalent knowledge) is strongly recommended.',
  },
  {
    question: 'What is the key difference between OmniScript and Integration Procedure in solution design?',
    answer: 'OmniScript is for user-facing guided experiences, it runs in the browser and presents a step-by-step UI to agents or customers. Integration Procedures run server-side and orchestrate data operations (reads, writes, transformations, external callouts). In solution design, when a requirement involves a multi-step guided process for a user → OmniScript. When it involves data orchestration without a UI → Integration Procedure. OmniScripts frequently call Integration Procedures to fetch and save data.',
  },
  {
    question: 'How is OmniStudio deployed across environments?',
    answer: 'OmniStudio components (OmniScripts, DataRaptors, FlexCards, Integration Procedures) are deployed using OmniStudio DataPacks: JSON export files that represent all component configuration. DataPacks are exported from source environment, version-controlled, and imported into target environments (UAT, Production). Components must be activated after import before they are available to users. Understanding the DataPack deployment process is tested on the consultant exam.',
  },
]

export default function OmnistudioConsultantStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="omnistudio-consultant" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '67%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Weightings by Section</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 5.5}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Domain Covers</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">6-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Omnistudio Fundamentals (16%): understand what each of the four core components does (OmniScript, DataRaptor, FlexCard, Integration Procedure), DataPack deployment, and environment management.' },
            { week: 'Week 2', focus: 'Flexcards (18%, the heaviest section) and Omniscripts (17%): FlexCard states and datasource types; OmniScript step groups, versioning, and activation.' },
            { week: 'Week 3', focus: 'Integration Procedures (17%): server-side data orchestration, parallel vs sequential execution, and callouts.' },
            { week: 'Week 4', focus: 'Data Mappers (17%): DataRaptor types (Extract, Load, Transform, Turbo Extract) and choosing the right one for a data operation.' },
            { week: 'Week 5', focus: 'Best Fit Solutions (15%): practice mapping business requirements to the right OmniStudio component and justifying the design decision, including reuse over rebuild.' },
            { week: 'Week 6', focus: 'Full mock exams. Focus on component selection scenarios, given a business requirement, choose the right OmniStudio component and justify the design decision.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Working Through Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Component selection decision tree:</strong> User needs to complete a guided multi-step process? → OmniScript. Agent needs to view contextual data on a record page? → FlexCard. Need server-side data orchestration (read, write, transform, callout)? → Integration Procedure. Need to read/write Salesforce data or transform JSON? → DataRaptor.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Reuse over rebuild:</strong> OmniStudio Consultant questions often test whether you choose a reusable component design (shared Integration Procedure called by multiple OmniScripts) vs duplicating logic. Always favour reuse; it is the correct design pattern.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>DataPack deployment:</strong> OmniStudio components are deployed via DataPacks, not change sets or SFDX packages. Export from source org, commit to version control, import to target org, activate. Know the sequence and why activation is required after import.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Versioning and activation:</strong> OmniStudio components have version numbers. Only one version can be active at a time. Deactivating the current version and activating a new version is the standard approach for updates, not overwriting the active version directly.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Practice-Test Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>80%+ on practice exams</strong>. Flexcards (18%) and Omniscripts (17%) together are 35% of the exam, but all six sections are weighted fairly evenly (15-18%), so don't skip any domain. If you can correctly map a business requirement to the right OmniStudio component and justify the design decision, you are ready.</p>
      </div>
      <p className="text-sm text-gray-700 mb-8">
        Already have section-level scores from a practice test? Run them through the{' '}
        <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
          Salesforce Exam Score Calculator
        </Link>{' '}
        to see where you stand against the 67% pass mark.
      </p>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10 Concepts Worth Reviewing</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Component selection: OmniScript vs FlexCard vs Integration Procedure vs DataRaptor, when to use each</li>
          <li>DataRaptor types: Extract, Load, Transform, Turbo Extract, correct type for each data operation</li>
          <li>Solution reuse: shared Integration Procedures and DataRaptors across multiple OmniScripts</li>
          <li>DataPack deployment: export, version control, import, activate sequence</li>
          <li>OmniScript component versioning and activation/deactivation process</li>
          <li>Integration Procedure parallel vs sequential execution and when to use each</li>
          <li>FlexCard states (default, active, error) and datasource types</li>
          <li>Requirements elicitation for OmniStudio: mapping business process steps to OmniScript steps</li>
          <li>UAT approach for OmniStudio: Preview mode, hyperlink testing, end-to-end flow validation</li>
          <li>Performance considerations: large DataRaptor result sets, Integration Procedure optimisation</li>
        </ol>
      </div>



      <DifficultyHeatmap slug="omnistudio-consultant" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Try It Yourself</h2>
        <p className="text-white mb-6">Test yourself with free OmniStudio Consultant practice questions.</p>
        <Link href="#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}