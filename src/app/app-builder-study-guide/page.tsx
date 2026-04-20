import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'app-builder'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `App Builder study guide (${RELEASE_CURRENT}): all 5 exam sections, Flow Builder, Lightning App Builder, and scenario strategy. Free practice questions included.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/app-builder-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/app-builder-study-guide`,
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
  { name: 'App Builder Study Guide', url: '/app-builder-study-guide' },
]

const faqItems = [
  {
    question: 'How many sections does the App Builder exam have?',
    answer: 'The Salesforce Platform App Builder exam covers 5 sections: Business Logic and Process Automation (28%), Salesforce Fundamentals (23%), Data Modeling and Management (20%), User Interface (17%), and App Deployment (12%). Business Logic and Process Automation is the single largest section — Flow Builder mastery is essential.',
  },
  {
    question: 'What is the passing score for the App Builder exam?',
    answer: 'The App Builder passing score is 63%. The exam has 60 multiple-choice questions, a 105-minute time limit, and a $200 fee. The retake fee is $100. You do not need ADM-201 first, but most candidates find ADM-201 knowledge very helpful for the Salesforce Fundamentals section.',
  },
  {
    question: 'Is App Builder harder than ADM-201?',
    answer: 'App Builder and ADM-201 are similar in difficulty but test different skills. ADM-201 is broader (7 sections covering the whole platform); App Builder is narrower and deeper on declarative customisation — particularly Flow Builder, custom objects, and Lightning App Builder. Candidates who passed ADM-201 typically find App Builder 20–30% more focused but achievable in 3–4 weeks of targeted study.',
  },
  {
    question: 'What Flow Builder topics does App Builder test?',
    answer: 'Flow Builder is tested extensively in the Business Logic section (28%). Key topics: record-triggered flows (before-save vs after-save), screen flows (input components, navigation), scheduled-triggered flows, subflows, fault paths, and the order of execution. Specific scenario: when to use a before-save record trigger (efficient field updates) vs an after-save trigger (need to query related records after insert).',
  },
]

const examSections = [
  { name: 'Business Logic and Process Automation', weight: 28, note: 'Flow Builder (record-triggered, screen, scheduled), approval processes, validation rules, formula fields, order of execution' },
  { name: 'Salesforce Fundamentals', weight: 23, note: 'Platform basics, MVC pattern, declarative vs programmatic, user management, org setup, sharing model overview' },
  { name: 'Data Modeling and Management', weight: 20, note: 'Custom objects, field types (formula, roll-up summary, lookup, master-detail), schema relationships, data quality, import/export tools' },
  { name: 'User Interface', weight: 17, note: 'Lightning App Builder, page types (Home, Record, App), dynamic pages, component visibility rules, Lightning Experience navigation' },
  { name: 'App Deployment', weight: 12, note: 'Change sets (outbound/inbound), sandbox types (Developer, Partial Copy, Full), deployment best practices, managed vs unmanaged packages' },
]

export default function AppBuilderStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/app-builder-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          App Builder Study Guide ({RELEASE_CURRENT}): Complete Platform App Builder Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Platform App Builder certification validates your ability to design, build, and deploy custom
          applications using Salesforce&apos;s declarative tools. This study guide covers every exam section with the
          Flow Builder patterns, data model decisions, and deployment procedures you need to pass.
        </p>
      </header>

      <ContentPageAuthor />

      {/* Exam snapshot */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">App Builder Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '63%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          Retake fee: $100. No prerequisites required. App Builder is often taken after ADM-201 as the second admin-track certification.
        </p>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">App Builder Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Business Logic + Fundamentals + Data Modeling = 71% of the exam. Master these three first.
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

      {/* Section deep-dives */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Business Logic and Process Automation (28%)
            </p>
            <p>Flow Builder is the dominant topic here. <strong>Record-triggered flows:</strong> before-save triggers update fields on the triggering record without DML (faster, more efficient); after-save triggers are needed when you must query or update related records after insert. <strong>Screen flows:</strong> collect user input through screens, use input components (text, picklist, lookup), and can launch from a button on a record page. <strong>Approval processes:</strong> entry criteria, initial submission actions, one or multiple approval steps, final approval/rejection actions. <strong>Validation rules:</strong> evaluate before triggers fire — return an error message when a specific formula is TRUE. <strong>Order of execution</strong> (simplified): system validation → before triggers → custom validation rules → after triggers → assignment rules → workflow rules → flows → process builder → escalation rules.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Salesforce Fundamentals (23%)
            </p>
            <p>Platform basics, MVC architecture, and sharing model. <strong>Declarative vs programmatic:</strong> always prefer declarative (Flow, validation rules, formula fields) unless the requirement cannot be met declaratively — the exam rewards the least-code answer. <strong>Sharing model:</strong> org-wide defaults (OWD) control the baseline access; roles grant upward visibility; sharing rules open access horizontally; manual sharing allows one-off exceptions. <strong>User management:</strong> profiles control object access (CRUD) and app access; permission sets grant additional permissions without changing the profile; permission set groups bundle multiple permission sets.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data Modeling and Management (20%)
            </p>
            <p><strong>Object relationships:</strong> master-detail (required parent, cascade delete, roll-up summary fields available), lookup (optional parent, no cascade delete, no roll-up), many-to-many via junction object (two master-detail relationships). <strong>Field types:</strong> formula fields are read-only calculated fields; roll-up summary fields summarise (COUNT, SUM, MIN, MAX) child records — only available on master-detail parent. <strong>Schema considerations:</strong> a lookup field can be converted to master-detail if no existing records violate the required parent rule. <strong>Import tools:</strong> Import Wizard (up to 50,000 records, standard + select custom objects, no CLI), Data Loader (bulk operations, all objects, command-line capable, schedule-able).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              User Interface (17%)
            </p>
            <p><strong>Lightning App Builder:</strong> three page types — Home pages (org, app, or user default), Record pages (per object, per record type, per app), App pages (custom tabs). <strong>Dynamic pages:</strong> Component visibility rules hide/show components based on field values or user attributes — no custom code needed. <strong>App Manager:</strong> create Lightning apps with custom branding, utility bar, and navigation items. <strong>Compact layouts</strong> control the fields shown in the highlights panel on record pages and in mobile cards. Record types control page layout, picklist values, and business process assignment.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              App Deployment (12%)
            </p>
            <p><strong>Change sets:</strong> outbound change sets (source org — add components), inbound change sets (target org — validate and deploy). Change sets cannot delete components; use metadata API or CLI for destructive changes. <strong>Sandbox types:</strong> Developer (5 MB data, 1/day refresh), Developer Pro (1 GB data), Partial Copy (5 GB data, sampled), Full (full copy of prod, 29-day refresh). <strong>Packages:</strong> unmanaged packages = full source, upgradeable only by customer; managed packages = locked code, upgradeable by publisher (AppExchange). <strong>Order of deployment:</strong> validate (dry run) → check for errors → deploy → activate flows, rules, permission sets.</p>
          </div>
        </div>
      </section>

      {/* Key decision frameworks */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Decision Frameworks for Exam Questions</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Automation tool selection:</p>
            <ul className="space-y-1">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Update a field when a record is saved, no user input → Before-save record-triggered Flow</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Create a related record or send email after insert → After-save record-triggered Flow</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Collect user input through a guided wizard → Screen Flow</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Multi-step approval with manager hierarchy → Approval Process</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Cannot be done declaratively → Apex (correct to acknowledge, but exam prefers declarative)</span></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Relationship type selection:</p>
            <ul className="space-y-1">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Child cannot exist without parent + need roll-up → Master-Detail</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Child can exist independently → Lookup</span></li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" /><span>Many-to-many relationship → Junction object with two master-detail relationships</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week App Builder Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Business Logic and Process Automation (28%):</strong> Flow Builder deep dive — record-triggered (before/after), screen flows, scheduled flows, approval processes, validation rules, and order of execution. Practice: build a record-triggered flow that creates a follow-up task on Opportunity close, and a screen flow for new case intake.</p>
          <p><strong>Week 2 — Fundamentals + Data Modeling (43%):</strong> Sharing model (OWD, roles, sharing rules), profiles vs permission sets, MVC, custom objects, field types (formula, roll-up summary, lookup, master-detail), schema design patterns, Import Wizard vs Data Loader. Practice: design a data model for a custom app (e.g., event management) with proper relationship types.</p>
          <p><strong>Week 3 — UI + Deployment (29%):</strong> Lightning App Builder (page types, dynamic components, component visibility), compact layouts, record types, App Manager. Change sets, sandbox types, package types, deployment order. Practice: create a custom Lightning app with a custom record page using dynamic components.</p>
          <p><strong>Week 4:</strong> Full timed mock exams (60 Q / 105 min). Score 73%+ consistently before booking (App Builder passing is 63% — aim 10 points above).</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach App Builder Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Automation questions:</strong> Always pick the least-code option that satisfies all stated requirements. If the scenario says &ldquo;no code,&rdquo; eliminate Apex answers. If the requirement can be done with a before-save flow, that is preferred over after-save (no DML, more efficient).</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Data model questions:</strong> Identify whether the child record can exist without the parent. If yes → lookup. If no → master-detail. If the question mentions &ldquo;roll-up summary field,&rdquo; the relationship must be master-detail on the parent object side.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Deployment questions:</strong> Change sets are used to move metadata between related orgs (sandbox → production with the same organization). Unmanaged packages are for distributing customisations. Managed packages are for AppExchange listings. If the question asks about deleting components, change sets cannot do it — metadata API is required.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>UI questions:</strong> Component visibility rules in Lightning App Builder are the declarative answer for &ldquo;show this component only when the account type is Customer.&rdquo; Dynamic forms allow field-level visibility rules on record pages. If a component needs to appear on the home page only for users with a specific profile, that is a Home page variant assigned by profile.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          73%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          App Builder has the lowest passing score (63%) of the three admin-track exams, but do not be
          overconfident — the Flow Builder questions involve detailed scenario analysis. The most common failure
          mode is weak performance on deployment questions (change sets, sandbox types) — do not neglect the 12%
          App Deployment section even though it is the smallest.
        </p>
      </section>

      {/* Top topics */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Before-save vs after-save record-triggered flow — when to use each and why</li>
          <li>Order of execution: validation rules fire before triggers; flows fire after DML</li>
          <li>Formula fields vs roll-up summary fields — read-only, when each is appropriate</li>
          <li>Master-detail vs lookup — required parent, cascade delete, roll-up eligibility</li>
          <li>OWD settings and their effect on record visibility (not field access)</li>
          <li>Lightning App Builder page types: Home, Record, App — scope of each</li>
          <li>Component visibility rules — what attributes you can filter on (field values, user attributes)</li>
          <li>Sandbox types: Developer (5 MB), Developer Pro (1 GB), Partial Copy (5 GB), Full (full copy)</li>
          <li>Change set limitations: cannot delete metadata, cannot move between unrelated orgs</li>
          <li>Import Wizard vs Data Loader — 50k record limit, object support, scheduling capability</li>
        </ol>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What to Take After App Builder</h2>
        <p className="text-sm text-gray-700 mb-3">
          Once you&apos;ve passed App Builder, you can either deepen your admin track or specialise by cloud:
        </p>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>
            Stay on the core admin path with{' '}
            <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">
              Advanced Administrator
            </Link>
            {' '}if you enjoy complex security, governance, and auditing scenarios.
          </li>
          <li>
            Move into implementations with{' '}
            <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">
              Sales Cloud Consultant
            </Link>
            ,{' '}
            <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">
              Service Cloud Consultant
            </Link>
            , or{' '}
            <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">
              Experience Cloud Consultant
            </Link>
            {' '}depending on whether your org is sales, service, or portal focused.
          </li>
        </ul>
      </section>

      {/* Related links */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/app-builder-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Exam Tips {RELEASE_CURRENT}</span>
          </Link>
          <Link href="/adm-201-vs-app-builder" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 vs App Builder</span>
          </Link>
          <Link href="/adm-201-study-guide" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Study Guide</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/app-builder-vs-developer-i" className="text-sm text-salesforce-dark hover:underline font-medium">→ App Builder vs Platform Developer I — full comparison</Link></li>
        </ul>
      </div>


      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free App Builder practice questions, exam weightage breakdown, and prep tips:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/app-builder"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            App Builder Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/app-builder-exam-tips"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            App Builder Exam Tips
          </Link>
          <Link
            href="/adm-201-study-guide"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            ADM-201 Study Guide
          </Link>
        </div>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="app-builder" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Platform App Builder free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/app-builder"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Platform App Builder Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}