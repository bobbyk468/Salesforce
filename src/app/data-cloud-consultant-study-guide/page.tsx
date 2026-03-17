import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'data-cloud-consultant'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Data Cloud Consultant study guide: data ingestion, identity resolution, segmentation, activation. Pass first attempt Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/data-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/data-cloud-consultant-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Data Cloud Consultant study guide ${RELEASE_CURRENT}, how to pass Data Cloud Consultant exam, Salesforce CDP certification prep, identity resolution segmentation exam, Data Cloud exam sections`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data Cloud Consultant Study Guide', url: '/data-cloud-consultant-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Data Cloud Consultant exam format?',
    answer: 'The Data Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 62% passing score, and a $200 fee ($100 retake). Despite the lower passing score, the exam is considered harder than most Salesforce certifications because it tests a complex technical domain: data ingestion, data modelling, identity resolution, SQL-based calculated insights, and activation configuration.',
  },
  {
    question: 'What are the highest-weight Data Cloud Consultant exam sections?',
    answer: 'Data Ingestion and Modeling (28%) is the largest section — understanding data streams, data lake objects (DLOs), data model objects (DMOs), and how data maps from source to unified profile is the foundation of everything else. Identity Resolution, Segmentation, and Insights (25%) is second. Together they account for 53% of the exam.',
  },
  {
    question: 'What SQL knowledge is needed for Data Cloud Consultant?',
    answer: 'Calculated Insights in Data Cloud are created using SQL — specifically ANSI SQL with some Data Cloud-specific syntax. You need to write SELECT queries that aggregate data from Data Model Objects (DMOs). Common patterns tested: COUNT(), SUM(), AVG() with GROUP BY for building audience metrics, and DATE functions for recency calculations. The SQL is not as complex as a database developer role, but you must be comfortable writing and reading basic aggregation queries.',
  },
  {
    question: 'What is identity resolution in Data Cloud?',
    answer: 'Identity resolution is the process of linking records from multiple data sources that belong to the same real-world customer into a single unified profile. Data Cloud uses Rulesets — configured matching rules (by email, phone, name + address, or custom criteria) — to determine when two records represent the same person. The result is a Contact Point object (for each contact method like email, phone) and a unified Individual object (the merged profile). Understanding ruleset configuration and when to use fuzzy vs exact matching is heavily tested.',
  },
]

const examSections = [
  { name: 'Data Ingestion and Modeling', weight: 28, note: 'Data streams (batch, streaming), Data Lake Objects (DLOs), Data Model Objects (DMOs), field mapping, schema design' },
  { name: 'Identity Resolution, Segmentation & Insights', weight: 25, note: 'Rulesets, matching rules, unified profiles, segment criteria, calculated insights with SQL, activation audiences' },
  { name: 'Configure and Manage Data Cloud', weight: 20, note: 'Org configuration, permission sets, data spaces, consent management, data retention policies, error monitoring' },
  { name: 'Act on Data with Salesforce Ecosystem', weight: 17, note: 'Activating segments to Marketing Cloud, Advertising, Service Cloud; Data Cloud for Agentforce grounding' },
  { name: 'Administer Data Cloud', weight: 10, note: 'User administration, ingestion job monitoring, troubleshooting data gaps, managing data stream health' },
]

export default function DataCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/data-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Data Cloud Consultant Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Data Cloud Consultant certification validates your ability to implement Salesforce&apos;s customer data
          platform (CDP) — ingesting data from multiple sources, resolving customer identities, building
          audience segments, and activating unified profiles to marketing and service channels. This guide
          covers every exam section at the depth needed to pass one of Salesforce&apos;s most technically demanding certifications.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Data Cloud Consultant Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '62%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          62% passing score — lower than most Salesforce exams, reflecting the exam&apos;s technical depth. Retake fee: $100. SQL and data modelling experience strongly recommended.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Data Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Data Ingestion (28%) + Identity Resolution &amp; Segmentation (25%) = 53% of the exam. Mastering the data model and identity resolution is the foundation for everything else.
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
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data Ingestion and Modeling (28%)
            </p>
            <p>This section is the foundation of all Data Cloud work. Know the two ingestion object types: <strong>Data Lake Objects (DLOs)</strong> — the raw landing zone for ingested data (one DLO per data stream), and <strong>Data Model Objects (DMOs)</strong> — the normalised, unified schema objects that DLO data is mapped into (Individual, Contact Point Email, Contact Point Phone, Unified Individual, etc.). The Data Cloud canonical data model is based on a standard entity schema — understand the hierarchy: Individual → Contact Point → Unified Individual. Field mapping (from DLO fields to DMO fields) is the critical operational skill tested. Also know data stream types: batch (file-based via SFTP or cloud storage), streaming (real-time via API), and Salesforce CRM connector (syncing CRM objects directly).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Identity Resolution, Segmentation &amp; Insights (25%)
            </p>
            <p><strong>Identity Resolution:</strong> Rulesets define how records from different DLOs are matched and merged into a unified profile. Matching rule types: exact match (email address, phone number — high confidence), fuzzy match (name + address — lower confidence, higher recall). Know that when two records match, they link to the same Unified Individual. <strong>Calculated Insights:</strong> SQL-based metrics computed over DMO data (e.g., total spend per customer, days since last purchase). Written as SELECT queries with GROUP BY against DMO tables. <strong>Segmentation:</strong> Segment criteria filters Unified Individuals based on attributes or calculated insights. Segments can be time-based (related to when attributes change) or static.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Configure and Manage Data Cloud (20%)
            </p>
            <p>Data Cloud org setup: enabling Data Cloud in a Salesforce org, configuring permission sets (Data Cloud Admin, Data Cloud Marketing Admin, Data Cloud Marketing Viewer), and understanding data spaces (organisational containers for data isolation — e.g., separating business unit data). Consent management: how Data Cloud tracks consent (opt-in/opt-out) and how consent propagates to activation. Data retention: setting retention periods on DLOs and DMOs. Error monitoring: reviewing ingestion job logs, identifying field mapping errors, and correcting data stream configuration issues.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Act on Data with Salesforce Ecosystem (17%)
            </p>
            <p>Activating Data Cloud segments to downstream channels. <strong>Marketing Cloud activation:</strong> publishing a segment to Marketing Cloud creates a data extension in SFMC that updates on the activation schedule. Know that the data extension contains the Unified Individual attributes selected during activation setup. <strong>Advertising activation:</strong> pushing segments to Google, Facebook, LinkedIn for paid media targeting. <strong>Service Cloud activation:</strong> surfacing unified profile data in Service Cloud agent console for real-time context. <strong>Agentforce grounding:</strong> Data Cloud as the data layer for grounding AI agents with real-time customer context.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Data Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Data Cloud Architecture &amp; Setup (20%):</strong> Study the overall Data Cloud architecture, enable Data Cloud in a Developer Edition org, configure permission sets, and explore the Data Cloud setup wizard. Understand data spaces and how they isolate data. Complete Trailhead&apos;s &ldquo;Salesforce Data Cloud Basics&rdquo; trail.</p>
          <p><strong>Week 2 — Data Ingestion &amp; Modeling (28%):</strong> Create data streams (start with a Salesforce CRM connector stream, then add a batch file stream). Understand the DLO → DMO mapping workflow. Map DLO fields to standard DMO fields (especially to Individual and Contact Point DMOs). This week is the most important — data modelling is the foundation of everything else.</p>
          <p><strong>Week 3 — Identity Resolution (part of 25%):</strong> Configure a Ruleset with exact-match rules (email) and fuzzy-match rules (name + address). Run the identity resolution process and inspect the resulting Unified Individual records. Understand how to diagnose over-merging (too aggressive fuzzy matching) vs under-merging (too restrictive rules).</p>
          <p><strong>Week 4 — Calculated Insights &amp; Segmentation (part of 25%):</strong> Write Calculated Insight SQL queries — start with simple COUNT and SUM aggregations, then practice date-based calculations (DATEDIFF, DATEADD). Build segments using Calculated Insights as criteria. Practice publishing a segment and inspecting the activation output.</p>
          <p><strong>Week 5 — Activation &amp; Ecosystem Integration (17% + 10%):</strong> Configure an activation to Marketing Cloud (create the activation, select attributes, set refresh schedule). Study Advertising activations conceptually. Review administration tasks: job monitoring, error log interpretation, ingestion troubleshooting.</p>
          <p><strong>Week 6:</strong> Full timed mock exams. Target 70%+ before booking (above the 62% threshold to account for exam difficulty variance).</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Data Cloud Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>DLO vs DMO questions:</strong> DLOs are raw landing zones — one per data stream, named after the source. DMOs are the normalised output — they follow the Data Cloud canonical model. When a question asks &ldquo;where is data stored after ingestion?&rdquo;, the answer is the DLO. When it asks &ldquo;where do you query unified customer data?&rdquo;, the answer is the DMO (specifically the Unified Individual DMO for merged profiles).</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Identity resolution questions:</strong> If the scenario says records from two systems need to be merged into one profile, the answer is identity resolution with a Ruleset. If it asks which match type to use: email match is exact (very high confidence, low risk of false matches); name + address is fuzzy (higher recall, risk of merging different people with similar names). When in doubt, exact match on email is the safest default.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Activation questions:</strong> When data needs to flow from Data Cloud to Marketing Cloud for sending, the answer is an Activation publishing a segment to a Marketing Cloud data extension. The activation schedule (hourly, daily, real-time) depends on how fresh the audience needs to be. Real-time activation is only available for streaming data streams — batch data updates on the ingestion schedule.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          70%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Set the mock benchmark higher than the 62% passing score because the real exam&apos;s scenario
          questions are harder than most practice banks. Candidates who pass mocks at exactly 62%
          frequently fail the real exam. The most common failure point is data modelling — candidates
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
          <li>Contact Point objects: Contact Point Email, Contact Point Phone — link Individual to contact methods</li>
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
          Apply this study guide with free Data Cloud Consultant practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/data-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Data Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/data-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Data Cloud Exam Tips
          </Link>
          <Link href="/data-cloud-vs-marketing-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Data Cloud vs Marketing Cloud
          </Link>
        </div>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="data-cloud-consultant" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white/90 mb-6">Try the Data Cloud Consultant free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/data-cloud-consultant"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Data Cloud Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}