import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'advanced-administrator'
const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Advanced Administrator study guide: 7 exam sections, automation, security, data management, scenario strategies to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/advanced-administrator-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/advanced-administrator-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Advanced Administrator Study Guide', url: '/advanced-administrator-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Advanced Administrator exam format?',
    answer: 'The Salesforce Advanced Administrator exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It requires ADM-201 (Salesforce Administrator) certification as a prerequisite and assumes 2+ years of Salesforce administration experience. The exam tests advanced security, complex automation, and platform-level governance topics that are not covered in ADM-201.',
  },
  {
    question: 'How is Advanced Administrator different from ADM-201?',
    answer: 'ADM-201 tests core platform knowledge — basic security, standard automation, reports and dashboards. Advanced Administrator assumes that knowledge and tests deeper: complex flow logic (subflows, fault paths, invocable actions), advanced security configurations (custom permission sets, session-based permissions, Shield Platform Encryption), multi-step approval processes, Territory Management, and complex data management (data governance, org-level data quality). The Advanced Admin exam rewards candidates who have resolved real-world Salesforce configuration challenges.',
  },
  {
    question: 'What are the highest-weight Advanced Administrator exam sections?',
    answer: 'Security and Access (20%) is the largest section, testing advanced permission configurations and Salesforce Shield features. Extending Custom Objects and Applications (15%) and Auditing and Monitoring (15%) are tied for second. Together these three sections account for 50% of the exam.',
  },
  {
    question: 'Do I need to know Apex or code for the Advanced Administrator exam?',
    answer: 'No. The Advanced Administrator exam tests declarative (no-code) administration at an advanced level. You do not need to write Apex code. However, you need to understand when Apex is required (i.e., when declarative tools cannot meet a requirement) — this is a common question pattern. Advanced flow concepts (invocable Apex actions called from flows, subflows) are tested, but only at the level of how to call and configure them, not how to write the Apex.',
  },
]

const examSections = [
  { name: 'Security and Access', weight: 20, note: 'Permission sets, permission set groups, session-based permissions, Salesforce Shield, field audit trail, platform encryption' },
  { name: 'Extending Custom Objects and Applications', weight: 15, note: 'Advanced object relationships, external objects, big objects, custom metadata types, platform events' },
  { name: 'Auditing and Monitoring', weight: 15, note: 'Field history tracking, setup audit trail, event monitoring, login history, debug logs, Health Check' },
  { name: 'Sales Cloud', weight: 14, note: 'Enterprise Territory Management, Collaborative Forecasting, opportunity splits, advanced lead and account management' },
  { name: 'Service Cloud', weight: 14, note: 'Advanced case management, Omni-Channel, entitlement management, escalation rules, Salesforce Knowledge lifecycle' },
  { name: 'Data Management', weight: 12, note: 'Mass transfer, data governance, deduplication rules, Data Loader scheduling, import error management, archiving strategies' },
  { name: 'Analytics, Reports and Dashboards', weight: 10, note: 'Joined reports, bucket fields, cross-filters, historical trending reports, dynamic dashboards, report subscriptions' },
]

export default function AdvancedAdministratorStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/advanced-administrator-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Advanced Administrator Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Advanced Administrator certification validates deep platform expertise — complex
          security models, advanced automation, auditing, Territory Management, and data governance.
          It is the natural next certification after ADM-201 for experienced administrators seeking
          to demonstrate platform mastery. This guide covers every exam section at the depth needed to pass.
        </p>
      </header>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="advanced-administrator-exam-tips" certName="Advanced Administrator" />
      <CertInsightBlock certSlug="advanced-administrator" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Advanced Administrator Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          ADM-201 certification required. Retake fee: $100. 2+ years of hands-on Salesforce administration experience strongly recommended.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Advanced Administrator Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Security (20%) + Extending Objects (15%) + Auditing (15%) = 50% of the exam. Advanced security and governance topics are the core differentiator from ADM-201.
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
              Security and Access (20%)
            </p>
            <p>Goes well beyond ADM-201 security fundamentals. <strong>Session-based Permission Sets:</strong> permission sets that only activate during a specific authenticated session (e.g., step-up authentication for sensitive operations). <strong>Permission Set Groups:</strong> combine multiple permission sets into a single assignable group. <strong>Salesforce Shield:</strong> a suite of compliance and security tools — Field Audit Trail (retain field history for up to 10 years vs standard 18 months), Event Monitoring (track user activity at the API level — what fields were accessed, what data was exported), Platform Encryption (encrypt fields at rest using tenant secrets). Know when each Shield product applies — regulated industries (HIPAA, FINRA) with strict data retention requirements are the typical scenarios.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Extending Custom Objects and Applications (15%)
            </p>
            <p><strong>External Objects:</strong> represent data stored outside Salesforce (in an external system) but accessible in the org via Salesforce Connect and OData 2.0 adapters. External objects support lookups and relationships but not all Salesforce features (no triggers, limited SOQL). <strong>Big Objects:</strong> store massive volumes of historical data within Salesforce (billions of records) — used for compliance data archiving. Only support SOQL queries with specific index fields. <strong>Custom Metadata Types:</strong> configuration records that are deployable via changesets and metadata API (unlike Custom Settings which are data). Ideal for environment-specific configuration values. <strong>Platform Events:</strong> an event-driven messaging system — publish and subscribe to real-time events using flows, Apex, or external systems via CometD.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Auditing and Monitoring (15%)
            </p>
            <p><strong>Setup Audit Trail:</strong> tracks the last 180 days of setup changes — who changed what, when. Essential for compliance and troubleshooting. <strong>Field History Tracking:</strong> tracks changes to up to 20 fields per object, retained for 18 months (Field Audit Trail extends this). <strong>Event Monitoring (Shield):</strong> detailed logs of user activity — API calls, login events, report exports, field access. Know the difference between Setup Audit Trail (setup changes) and Event Monitoring (user activity). <strong>Health Check:</strong> Salesforce&apos;s built-in security review tool — scores your org against security best practices. Know what makes a high vs low Health Check score.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Sales Cloud (14%) and Service Cloud (14%)
            </p>
            <p><strong>Sales Cloud:</strong> Enterprise Territory Management (ETM) is the key topic — territory models, territory types, assignment rules, and how opportunities are associated to territories. Opportunity Splits: divide credit for an opportunity between multiple sales reps (different split percentages per rep). Collaborative Forecasting with multiple forecast types. <strong>Service Cloud:</strong> Omni-Channel routing (queue-based, skills-based, external routing) — routing incoming work items to agents based on capacity and skills. Entitlement Management: service contracts, entitlement processes, and milestones (SLA milestones that fire escalation actions when breached). Advanced Knowledge lifecycle: article review cycles, translation, archiving.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Analytics, Reports and Dashboards (10%)
            </p>
            <p><strong>Joined Reports:</strong> combine data from up to 5 report types in a single report — each block has its own filters and groupings. Useful for comparing data from different objects side by side. <strong>Cross-filters:</strong> filter a report to show records with or without related records (e.g., accounts with no open opportunities). <strong>Bucket fields:</strong> group report values into named categories without creating formula fields. <strong>Historical Trending:</strong> track record changes over time (up to 3 months) — useful for pipeline movement analysis. <strong>Dynamic Dashboards:</strong> display data based on the logged-in viewer&apos;s context (each user sees their own data) vs a fixed running user.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Advanced Administrator Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Advanced Security (20%):</strong> Study session-based permission sets, permission set groups, and Salesforce Shield (Field Audit Trail, Event Monitoring, Platform Encryption). Enable Health Check in a Developer Edition org and review your score. Understand each Shield product&apos;s use case and regulatory context.</p>
          <p><strong>Week 2 — Advanced Objects &amp; Platform Features (15%):</strong> Study External Objects (Salesforce Connect, OData), Big Objects (use cases, query limitations), Custom Metadata Types vs Custom Settings (what makes CMT deployable), and Platform Events (publish/subscribe event model). Practice: create a Custom Metadata Type and deploy it via changeset.</p>
          <p><strong>Week 3 — Auditing &amp; Monitoring (15%):</strong> Learn Setup Audit Trail, Field History Tracking limits, and Event Monitoring. Complete Trailhead&apos;s &ldquo;Audit Trail, Login History, and Setup&rdquo; module. Understand what each monitoring tool captures and for how long.</p>
          <p><strong>Week 4 — Sales Cloud (14%): </strong> Deep dive into ETM — create a territory model, configure assignment rules, and associate opportunities. Study Opportunity Splits and Collaborative Forecasting with overrides. Practice: set up ETM from scratch in a Developer Edition org with Agentforce and Sales Cloud enabled.</p>
          <p><strong>Week 5 — Service Cloud &amp; Data Management (14% + 12%):</strong> Study Omni-Channel routing configurations (queue-based vs skills-based), entitlement processes and milestone actions. Review advanced data management: deduplication rules for large orgs, mass transfer scenarios, Data Loader scheduling.</p>
          <p><strong>Week 6:</strong> Advanced analytics practice (joined reports, cross-filters, historical trending) + full timed mock exams. Score 75%+ consistently before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Advanced Administrator Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Salesforce Shield questions:</strong> If the scenario involves a regulated industry needing to retain field change history beyond 18 months, the answer is <strong>Field Audit Trail</strong>. If it involves tracking what data users accessed or exported (compliance/data exfiltration concern), the answer is <strong>Event Monitoring</strong>. If it involves encrypting sensitive data at rest (HIPAA, GDPR), the answer is <strong>Platform Encryption</strong>. Match the Shield product to the compliance requirement — not the other way around.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Custom Metadata vs Custom Settings:</strong> If the scenario requires configuration values to be deployed to production via changeset (not manually re-entered), the answer is Custom Metadata Types. If the configuration just needs to be stored and retrieved at runtime but does not need to be deployed (or values differ per environment), Custom Settings may be acceptable. The exam strongly favours Custom Metadata Types for configuration that needs to move between environments.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Report type questions:</strong> Need to show records from one object alongside related (or absence of related) records from another object? Use a <strong>cross-filter</strong>. Need to compare data from multiple report types side-by-side in one view? Use a <strong>joined report</strong>. Need to show how pipeline amounts changed week-over-week? Use <strong>Historical Trending</strong>. Each report feature has a specific use case — match it to the scenario requirement.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most common failure mode is over-reliance on ADM-201 knowledge. Advanced Administrator
          tests topics that are genuinely not covered in ADM-201 — candidates who refresh their ADM-201
          content instead of studying the Advanced Admin-specific topics (Shield, ETM, External Objects,
          Opportunity Splits, Omni-Channel) consistently fall short. Focus your preparation on
          what is new and different from the base Administrator exam.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Salesforce Shield: Field Audit Trail (18 months → 10 years), Event Monitoring, Platform Encryption</li>
          <li>Session-based Permission Sets: activate only during specific authenticated sessions</li>
          <li>Custom Metadata Types vs Custom Settings: CMT is deployable; Settings are data</li>
          <li>External Objects vs Big Objects: External (outside Salesforce, read-only); Big (inside, massive volume)</li>
          <li>Platform Events: publish/subscribe event-driven messaging within and across systems</li>
          <li>ETM object model: Territory Model → Territory Type → Territory → Assignment Rules</li>
          <li>Opportunity Splits: divide opportunity credit between multiple reps (different types: Revenue, Overlay)</li>
          <li>Omni-Channel routing: queue-based (first-come-first-served) vs skills-based (match skills to work)</li>
          <li>Entitlement milestones: SLA checkpoints that fire escalation actions when breached</li>
          <li>Joined reports vs cross-filters: joined (multiple report blocks); cross-filter (with/without related records)</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Advanced Administrator practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/advanced-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Advanced Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/advanced-administrator-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Advanced Admin Exam Tips
          </Link>
          <Link href="/adm-201-study-guide" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            ADM-201 Study Guide
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          <Link href="/administrator-vs-advanced-administrator" className="text-salesforce-blue underline">
            ADM-201 vs Advanced Administrator — what&apos;s different? →
          </Link>
        </p>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">Advanced Administrator</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="advanced-administrator" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Advanced Administrator free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/advanced-administrator"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Advanced Administrator Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}