import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `ADM-201 Study Guide (${RELEASE_CURRENT}): Pass Salesforce Admin`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `ADM-201 study guide (${RELEASE_CURRENT}): all 7 exam sections, key topics, and exam scenario strategies. Start free practice today.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/adm-201-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/adm-201-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
  keywords:
    `ADM-201 study guide ${RELEASE_CURRENT}, how to pass Salesforce Administrator exam, ADM-201 exam prep, Salesforce admin certification study guide, ADM-201 topics, Salesforce Administrator exam sections`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'ADM-201 Study Guide', url: '/adm-201-study-guide' },
]

const examSections = [
  { name: 'Configuration and Setup', weight: 20, note: 'Company settings, user management, profiles, permission sets, org security, field-level security' },
  { name: 'Object Manager and Lightning App Builder', weight: 20, note: 'Standard and custom objects, fields, page layouts, compact layouts, Lightning apps, record types' },
  { name: 'Workflow and Process Automation', weight: 16, note: 'Flow Builder, validation rules, workflow rules, approval processes, process automation best practices' },
  { name: 'Data and Analytics Management', weight: 14, note: 'Import Wizard, Data Loader, reports, dashboards, list views, sharing rules, OWD settings' },
  { name: 'Sales and Marketing Applications', weight: 12, note: 'Leads, accounts, contacts, opportunities, products, price books, campaigns, forecasting' },
  { name: 'Service and Support Applications', weight: 11, note: 'Cases, queues, assignment rules, escalation rules, knowledge, entitlements, service console' },
  { name: 'Productivity and Collaboration', weight: 7, note: 'Chatter, tasks, events, email templates, activity management, Salesforce mobile app' },
]

export default function Adm201StudyGuidePage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/adm-201-study-guide',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/adm-201-study-guide',
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ADM-201 Study Guide ({RELEASE_CURRENT}): Complete Salesforce Administrator Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Administrator (ADM-201) certification is the most widely held Salesforce credential and the
          recommended starting point for most Salesforce careers. This study guide covers every exam section with
          the depth you need to pass — not just the topic list.
        </p>
      </header>

      {/* Exam snapshot */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">ADM-201 Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Retake fee: $100. No prerequisites required. Delivered through Webassessor (online proctored or test centre).
        </p>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">ADM-201 Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          The top two sections together account for 40% of the exam. Do not neglect the lower-weight sections — 7% is still 4 questions.
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
              <p className="text-xs text-gray-500">{note}</p>
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
              Configuration and Setup (20%)
            </p>
            <p>This section tests your ability to set up a Salesforce org from scratch. Key areas: org-wide defaults (OWD) and when to use each setting (Private / Public Read Only / Public Read-Write), profile vs permission set vs permission set group decisions, field-level security (FLS), login hours and IP restrictions, and the difference between roles (visibility) and profiles (access). <strong>Most common mistake:</strong> confusing role hierarchy (record visibility) with profiles (object access).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Object Manager and Lightning App Builder (20%)
            </p>
            <p>Custom objects, field types (formula, roll-up summary, lookup, master-detail), validation rules, record types, and page layouts. Know when to use a roll-up summary field vs a formula field vs a report. Lightning App Builder questions test which components can go where (Home, Record, App pages) and how to assign page variants to profiles.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Workflow and Process Automation (16%)
            </p>
            <p>Flow Builder is the primary automation tool tested. Know: screen flows vs auto-launched flows, flow triggers (record-triggered, schedule-triggered), the order of execution (before save → validation rules → after save flows), and when to escalate from a flow to Apex. Also expect questions on approval processes: entry criteria, initial submitters, approval steps, and final actions.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data and Analytics Management (14%)
            </p>
            <p>Data import (Import Wizard vs Data Loader — use Import Wizard for up to 50k records and standard objects; Data Loader for bulk operations or custom objects), data quality management, deduplication, reports (tabular, summary, matrix, joined) and dashboards (chart types, running user, scheduled refresh). Know sharing rules: criteria-based vs ownership-based, and how they interact with OWD.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Sales and Marketing Applications (12%)
            </p>
            <p>Lead lifecycle (lead status, conversion, mapping fields), opportunity stages and forecasting, products and price books (standard vs custom), campaigns and campaign member statuses, and activity management. Know how lead conversion maps to Accounts, Contacts, and Opportunities — and what does not transfer automatically.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Service and Support Applications (11%)
            </p>
            <p>Case management: case assignment rules, queues, escalation rules, auto-response rules. Salesforce Knowledge (article types, data categories, visibility). Entitlements and milestones. Service Console setup. Know the order in which assignment rules are evaluated and what happens when no rule matches.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Productivity and Collaboration (7%)
            </p>
            <p>Chatter settings (enable/disable per profile, groups, files), task and event management, email templates (text, HTML, letterhead), and Salesforce mobile app configuration (mobile navigation, compact layouts). Fewer questions but straightforward — do not skip this section.</p>
          </div>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week ADM-201 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Configuration and Security (20%):</strong> Org setup, user management, profiles, permission sets, OWD, role hierarchy, sharing rules, and field-level security. Use Trailhead&apos;s &ldquo;Salesforce Platform Basics&rdquo; and &ldquo;Data Security&rdquo; modules. Practice: configure a new user with a custom profile, then restrict access to a specific object using FLS.</p>
          <p><strong>Week 2 — Object Manager and App Builder (20%):</strong> Custom objects, field types (formula, roll-up summary), record types, page layouts, validation rules, and Lightning App Builder components. Practice: build a custom object with a roll-up summary field and a master-detail relationship. Assign different page layouts per record type.</p>
          <p><strong>Week 3 — Automation and Process (16%):</strong> Flow Builder (record-triggered, screen flows), approval processes, and the order of execution. Practice: build a record-triggered flow that creates a follow-up task when an Opportunity reaches Closed Won. Configure a two-step approval process.</p>
          <p><strong>Week 4 — Data Management and Analytics (14%):</strong> Import Wizard vs Data Loader, deduplication, report types (summary, matrix, joined), dashboard components, and scheduled reports. Practice: build a matrix report for pipeline by stage and owner. Create a dashboard with a funnel chart.</p>
          <p><strong>Week 5 — Sales, Service, and Productivity (30%):</strong> Lead conversion, products and price books, case management (queues, assignment rules, escalation), Salesforce Knowledge, entitlements, and Chatter. Review scenario-based use cases for each.</p>
          <p><strong>Week 6:</strong> Full timed mock exams (60 Q / 105 min), weak-area targeted revision. Score 75%+ consistently before booking.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach ADM-201 Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Security questions:</strong> Always start by identifying whether the requirement is about object access (profiles/permission sets) or record visibility (OWD + sharing rules + role hierarchy). These are the most frequently tested — and most frequently confused — concepts.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Automation questions:</strong> If the requirement says &ldquo;without code&rdquo; and happens on record save, the answer is almost always Flow (record-triggered). If it requires user input, Screen Flow. If it needs multi-level approval, Approval Process. Workflow Rules and Process Builder are legacy — the exam still tests them but favours Flow.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Data management questions:</strong> If the question mentions &ldquo;up to 50,000 records&rdquo; and standard objects, Import Wizard. If it mentions &ldquo;hundreds of thousands of records,&rdquo; custom objects, or automated scripts, Data Loader.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Relationship field questions:</strong> If the child record must not exist without the parent, master-detail. If the child can exist independently, lookup. Roll-up summary fields only work on master-detail relationships — this is a common distractor answer when the question uses lookup relationships.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          ADM-201 passing score is 65% (39/60 questions). Use this benchmark before scheduling:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min), one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          ADM-201 has the broadest content coverage of any Salesforce exam. The most common failure mode is
          spending too much time on automation and neglecting security model questions. If you are consistently
          missing security or data management questions, spend another week specifically on sharing model scenarios.
        </p>
      </section>

      {/* Top topics to review last */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>OWD settings (Private / Public Read Only / Public Read-Write / Controlled by Parent) and what each allows</li>
          <li>Role hierarchy: visibility vs access — roles affect who can see records, not what they can do</li>
          <li>Profile vs Permission Set vs Permission Set Group — when to use each</li>
          <li>Validation rule order of execution and when they fire (before triggers, after page save)</li>
          <li>Record-triggered flow: before-save vs after-save and why before-save is more efficient</li>
          <li>Import Wizard vs Data Loader — limits, supported objects, and use cases</li>
          <li>Master-detail vs lookup — required parent, roll-up eligibility, cascade delete</li>
          <li>Approval process components: entry criteria, initial submission actions, approval steps, final actions</li>
          <li>Lead conversion — what fields map, what does not auto-populate on the converted account</li>
          <li>Report types: tabular (no grouping), summary (row grouping), matrix (row + column), joined (multiple report types)</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free ADM-201 practice questions, exam weightage breakdown, and prep tips:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            ADM-201 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/adm-201-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            ADM-201 Exam Tips {RELEASE_CURRENT}
          </Link>
          <Link
            href="/certifications/role/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Admin Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Planning to take App Builder after ADM-201?{' '}
          <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue hover:underline">
            Compare ADM-201 vs App Builder →
          </Link>
        </p>
      </section>
    </div>
  )
}
