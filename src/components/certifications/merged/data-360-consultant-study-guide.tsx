/* Ported from /data-360-consultant-study-guide, merged into /certifications/data-360-consultant in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
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
const slug = 'data-360-consultant'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Study Data 360 Consultant topics covering ingestion, identity resolution, segmentation, and activation for Salesforce projects.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data 360 Consultant', url: '/certifications/data-360-consultant' },
  { name: 'Data 360 Consultant Study Guide', url: '/data-360-consultant-study-guide' },
]

export const faqItems = [
  {
    question: 'What is the Data 360 Consultant exam format?',
    answer: 'The Data 360 Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 70% passing score, and a $200 fee ($100 retake). Despite the lower passing score, the exam is considered harder than most Salesforce certifications because it tests a complex technical domain: data ingestion, data modelling, identity resolution, SQL-based calculated insights, and activation configuration.',
  },
  {
    question: 'What are the highest-weight Data 360 Consultant exam sections?',
    answer: 'Data Activations and Utilization (20%) is the largest section, followed by Data Source Connection and Ingestion (18%) and Data Enhancements, Sharing, and Analysis (18%). Together they account for 56% of the exam. Understanding data streams, Data Lake Objects (DLOs), Data Model Objects (DMOs), how data maps from source to unified profile, and how segments get activated downstream is the foundation of everything else.',
  },
  {
    question: 'What SQL knowledge is needed for Data 360 Consultant?',
    answer: 'Calculated Insights in Data 360 are created using SQL, specifically ANSI SQL with some Data 360-specific syntax. You need to write SELECT queries that aggregate data from Data Model Objects (DMOs). Common patterns tested: COUNT(), SUM(), AVG() with GROUP BY for building audience metrics, and DATE functions for recency calculations. The SQL is not as complex as a database developer role, but you must be comfortable writing and reading basic aggregation queries.',
  },
  {
    question: 'What is identity resolution in Data 360?',
    answer: 'Identity resolution is the process of linking records from multiple data sources that belong to the same real-world customer into a single unified profile. Data 360 uses Rulesets, configured matching rules (by email, phone, name + address, or custom criteria), to determine when two records represent the same person. The result is a Contact Point object (for each contact method like email, phone) and a unified Individual object (the merged profile). Understanding ruleset configuration and when to use fuzzy vs exact matching is heavily tested.',
  },
]

const examSections = [
  { name: 'Data Activations and Utilization', weight: 20, note: 'Activating segments to Marketing Cloud, Advertising, and Service Cloud; using Data 360 as the grounding layer for Agentforce.' },
  { name: 'Data Source Connection and Ingestion', weight: 18, note: 'Data streams (batch, streaming), connecting source systems, and landing data into Data Lake Objects (DLOs).' },
  { name: 'Data Enhancements, Sharing, and Analysis', weight: 18, note: 'Calculated Insights with SQL, consent management, data retention policies, and error monitoring for ingestion jobs.' },
  { name: 'Harmonization and Unification', weight: 17, note: 'Rulesets, matching rules, Data Model Objects (DMOs), field mapping, and building the unified Individual profile.' },
  { name: 'Solution Positioning', weight: 14, note: 'Scoping which Data 360 capabilities fit a business requirement, and positioning it within the wider Salesforce ecosystem.' },
  { name: 'Data 360 Setup and Administration', weight: 13, note: 'Org configuration, permission sets, data spaces, user administration, and troubleshooting data stream health.' },
]

export default function Data360ConsultantStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="data-360-consultant" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Data 360 Consultant Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '70%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          70% passing score, lower than most Salesforce exams, reflecting the exam’s technical depth. Retake fee: $100. SQL and data modelling experience strongly recommended.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Data 360 Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Data Activations and Utilization (20%) + Data Source Connection and Ingestion (18%) + Data Enhancements, Sharing, and Analysis (18%) = 56% of the exam. Mastering the data model, ingestion, and activation is the foundation for everything else.
        </p>
        <div className="space-y-3">
          {examSections.map(({ name, weight, note }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{name}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-600">{note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-700 mt-4">
          Already have section-level scores from a practice test? Run them through the{' '}
          <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Exam Score Calculator
          </Link>{' '}
          to see where you stand against the 70% pass mark.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data Activations and Utilization (20%)
            </p>
            <p>Activating Data 360 segments to downstream channels. <strong>Marketing Cloud activation:</strong> publishing a segment to Marketing Cloud creates a data extension in SFMC that updates on the activation schedule. Know that the data extension contains the Unified Individual attributes selected during activation setup. <strong>Advertising activation:</strong> pushing segments to Google, Facebook, LinkedIn for paid media targeting. <strong>Service Cloud activation:</strong> surfacing unified profile data in Service Cloud agent console for real-time context. <strong>Agentforce grounding:</strong> Data 360 as the data layer for grounding AI agents with real-time customer context.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data Source Connection and Ingestion (18%)
            </p>
            <p>This section is the foundation of all Data 360 work. Know the two ingestion object types: <strong>Data Lake Objects (DLOs)</strong>: the raw landing zone for ingested data (one DLO per data stream), and <strong>Data Model Objects (DMOs)</strong>: the normalised, unified schema objects that DLO data is mapped into (Individual, Contact Point Email, Contact Point Phone, Unified Individual, etc.). Know data stream types: batch (file-based via SFTP or cloud storage), streaming (real-time via API), and Salesforce CRM connector (syncing CRM objects directly).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data Enhancements, Sharing, and Analysis (18%)
            </p>
            <p><strong>Calculated Insights:</strong> SQL-based metrics computed over DMO data (e.g., total spend per customer, days since last purchase). Written as SELECT queries with GROUP BY against DMO tables. <strong>Consent management:</strong> how Data 360 tracks consent (opt-in/opt-out) and how consent propagates to activation. <strong>Data retention:</strong> setting retention periods on DLOs and DMOs. <strong>Error monitoring:</strong> reviewing ingestion job logs, identifying field mapping errors, and correcting data stream configuration issues.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Harmonization and Unification (17%)
            </p>
            <p><strong>Identity Resolution:</strong> Rulesets define how records from different DLOs are matched and merged into a unified profile. Matching rule types: exact match (email address, phone number, high confidence), fuzzy match (name + address, lower confidence, higher recall). Know that when two records match, they link to the same Unified Individual. The Data 360 canonical data model is based on a standard entity schema, understand the hierarchy: Individual → Contact Point → Unified Individual. Field mapping (from DLO fields to DMO fields) is the critical operational skill tested here. <strong>Segmentation:</strong> Segment criteria filters Unified Individuals based on attributes or calculated insights. Segments can be time-based (related to when attributes change) or static.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Solution Positioning (14%)
            </p>
            <p>Scoping which Data 360 capability actually fits a stated business requirement, rather than defaulting to the first plausible-sounding feature. Know when Data 360 is the right tool versus a narrower Salesforce feature, and how a Data 360 implementation fits alongside the rest of a customer's Salesforce footprint (CRM, Marketing Cloud, Service Cloud, Agentforce).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data 360 Setup and Administration (13%)
            </p>
            <p>Data 360 org setup: enabling Data 360 in a Salesforce org, configuring permission sets (Data 360 Admin, Data 360 Marketing Admin, Data 360 Marketing Viewer), and understanding data spaces (organisational containers for data isolation, e.g., separating business unit data). User administration, ingestion job monitoring, and troubleshooting data stream health.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Data 360 Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1: Data 360 Setup and Administration (13%) and Solution Positioning (14%):</strong> Study the overall Data 360 architecture, enable Data 360 in a Developer Edition org, configure permission sets, and explore the Data 360 setup wizard. Understand data spaces and how they isolate data. Complete Trailhead's "Salesforce Data 360 Basics" trail, and practice scoping which Data 360 capability fits a stated requirement.</p>
          <p><strong>Week 2: Data Source Connection and Ingestion (18%):</strong> Create data streams (start with a Salesforce CRM connector stream, then add a batch file stream). Understand the DLO → DMO mapping workflow. Map DLO fields to standard DMO fields (especially to Individual and Contact Point DMOs).</p>
          <p><strong>Week 3: Harmonization and Unification (17%):</strong> Configure a Ruleset with exact-match rules (email) and fuzzy-match rules (name + address). Run the identity resolution process and inspect the resulting Unified Individual records. Understand how to diagnose over-merging (too aggressive fuzzy matching) vs under-merging (too restrictive rules).</p>
          <p><strong>Week 4: Data Enhancements, Sharing, and Analysis (18%):</strong> Write Calculated Insight SQL queries. Start with simple COUNT and SUM aggregations, then practice date-based calculations (DATEDIFF, DATEADD). Review consent management, data retention settings, and how to read an ingestion error log.</p>
          <p><strong>Week 5: Data Activations and Utilization (20%, the largest section):</strong> Configure an activation to Marketing Cloud (create the activation, select attributes, set refresh schedule). Study Advertising and Service Cloud activations, and how Data 360 grounds Agentforce.</p>
          <p><strong>Week 6:</strong> Full timed mock exams. Target 80%+ before booking (above the 70% pass mark to account for exam difficulty variance).</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Data 360 Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>DLO vs DMO questions:</strong> DLOs are raw landing zones, one per data stream, named after the source. DMOs are the normalised output, they follow the Data 360 canonical model. When a question asks &ldquo;where is data stored after ingestion?&rdquo; the answer is the DLO. When it asks &ldquo;where do you query unified customer data?&rdquo; the answer is the DMO (specifically the Unified Individual DMO for merged profiles).</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Identity resolution questions:</strong> If the scenario says records from two systems need to be merged into one profile, the answer is identity resolution with a Ruleset. If it asks which match type to use: email match is exact (very high confidence, low risk of false matches); name + address is fuzzy (higher recall, risk of merging different people with similar names). When in doubt, exact match on email is the safest default.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Activation questions:</strong> When data needs to flow from Data 360 to Marketing Cloud for sending, the answer is an Activation publishing a segment to a Marketing Cloud data extension. The activation schedule (hourly, daily, real-time) depends on how fresh the audience needs to be. Real-time activation is only available for streaming data streams, batch data updates on the ingestion schedule.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Booking Readiness Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Set the mock benchmark higher than the 70% passing score because the real exam’s scenario
          questions are harder than most practice banks. Candidates who pass mocks at exactly 70%
          frequently fail the real exam. The most common failure point is data modelling, candidates
          who have not configured DLO-to-DMO mappings hands-on consistently misidentify the correct
          mapping approach under exam conditions.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>DLO vs DMO: DLO = raw ingested data; DMO = normalised unified schema</li>
          <li>Data stream types: batch (file), streaming (API), Salesforce CRM connector</li>
          <li>Identity resolution: Rulesets, exact vs fuzzy match, Unified Individual output</li>
          <li>Contact Point objects: Contact Point Email, Contact Point Phone, link Individual to contact methods</li>
          <li>Calculated Insights: SQL aggregations over DMOs (SELECT, GROUP BY, COUNT, SUM)</li>
          <li>Segment criteria: filtering Unified Individuals by attributes or Calculated Insight values</li>
          <li>Activation to Marketing Cloud: publishes segment → creates/updates data extension in SFMC</li>
          <li>Data spaces: containers for data isolation per business unit or use case</li>
          <li>Consent management: how opt-in/opt-out is captured and respected in activations</li>
          <li>Ingestion error monitoring: where to find job logs and how to interpret mapping errors</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Data 360 Consultant practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Data 360 Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Data 360 Exam Tips
          </span>
          <Link href="/data-cloud-vs-marketing-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Data 360 vs Marketing Cloud
          </Link>
        </div>
      </section>

      

      <DifficultyHeatmap slug="data-360-consultant" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Data 360 Consultant free practice exam, scored with full explanations.</p>
        <Link href="#practice-questions"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Data 360 Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}