import { BookOpen, Target } from 'lucide-react'

/**
 * Long-form ADM-201 study-guide content merged into /certifications/administrator.
 *
 * Source pages, consolidated November 2026 and now 301-redirected here:
 *   /adm-201-study-guide  - section deep-dives, 6-week plan, day-before review list
 *   /adm-201-exam-tips    - scenario decision rules
 *
 * Weightings follow the 15 December 2025 outline refresh and are owned by
 * EXAM_WEIGHTAGE.administrator in src/lib/exam-weightage-data.ts. If the
 * official guide changes, update that file and the percentages quoted here.
 */

const sectionDeepDives: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'Data and Analytics Management',
    weight: 17,
    body: 'The heaviest single section. Data import (Import Wizard for up to 50,000 records on standard objects; Data Loader for bulk operations or custom objects), data quality and deduplication, reports (tabular, summary, matrix, joined) and dashboards (chart types, running user, scheduled refresh). Know how sharing rules interact with org-wide defaults, because reporting questions often hinge on who can see which records rather than on the report builder itself.',
  },
  {
    name: 'Configuration and Setup',
    weight: 15,
    body: 'Setting up an org from scratch: org-wide defaults (OWD) and when to use each setting (Private / Public Read Only / Public Read-Write), profile vs permission set vs permission set group decisions, field-level security, login hours and IP restrictions, and the difference between roles (visibility) and profiles (access). Most common mistake: confusing role hierarchy, which governs record visibility, with profiles, which govern object access.',
  },
  {
    name: 'Object Manager and Lightning App Builder',
    weight: 15,
    body: 'Custom objects, field types (formula, roll-up summary, lookup, master-detail), validation rules, record types, and page layouts. Know when to use a roll-up summary field vs a formula field vs a report. Lightning App Builder questions test which components can go where (Home, Record, App pages) and how to assign page variants to profiles.',
  },
  {
    name: 'Automation',
    weight: 15,
    body: 'Flow Builder is the primary automation tool tested. Know screen flows vs auto-launched flows, flow triggers (record-triggered, schedule-triggered), the order of execution (before-save flows, then validation rules, then after-save flows), and when to escalate from a flow to Apex. Also expect questions on approval processes: entry criteria, initial submitters, approval steps, and final actions.',
  },
  {
    name: 'Sales and Marketing Applications',
    weight: 10,
    body: 'Lead lifecycle (lead status, conversion, field mapping), opportunity stages and forecasting, products and price books (standard vs custom), campaigns and campaign member statuses, and activity management. Know how lead conversion maps to Accounts, Contacts, and Opportunities, and what does not transfer automatically.',
  },
  {
    name: 'Service and Support Applications',
    weight: 10,
    body: 'Case management: case assignment rules, queues, escalation rules, auto-response rules. Salesforce Knowledge (article types, data categories, visibility). Entitlements and milestones. Service Console setup. Know the order in which assignment rules are evaluated and what happens when no rule matches.',
  },
  {
    name: 'Productivity and Collaboration',
    weight: 10,
    body: 'Chatter settings (enabling per profile, groups, files), task and event management, email templates (text, HTML, letterhead), and Salesforce mobile app configuration (mobile navigation, compact layouts). This section tripled in weight in the December 2025 refresh, from 4% to 10%, so it is no longer safe to skim.',
  },
  {
    name: 'Agentforce',
    weight: 8,
    body: 'Added as its own section in the 15 December 2025 outline refresh. Know the basics of Agent Builder, when to recommend an Agentforce agent over a Flow or an Apex trigger, how topics and actions define what an agent can do, and which permissions a user needs to build and deploy one.',
  },
]

export default function Adm201MergedGuide() {
  return (
    <>
      {/* What each section actually tests */}
      <section id="section-deep-dives" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What Each Salesforce Certified Platform Administrator Section Actually Tests
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          The eight sections below follow the current official outline. The four heaviest are 62% of the exam, but
          nothing is safe to skip: even the 8% Agentforce section is roughly five questions, and 68% is the pass mark.
        </p>
        <div className="space-y-5 text-sm text-gray-700">
          {sectionDeepDives.map(({ name, weight, body }) => (
            <div key={name}>
              <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
                {name} ({weight}%)
              </p>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6-week study plan */}
      <section id="study-plan" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">6-Week ADM-201 Study Plan</h2>
        <p className="text-sm text-gray-600 mb-5">
          Most candidates with some Salesforce exposure need four to six weeks. With no prior exposure, allow eight to
          ten. Every week pairs reading with hands-on work in a free Developer Edition org, because the exam rewards
          applied judgement over recall.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Week 1 &mdash; Configuration and Setup (15%):</strong> Org setup, user management, profiles,
            permission sets, OWD, role hierarchy, sharing rules, and field-level security. Practice: configure a new
            user with a custom profile, then restrict access to a specific object using field-level security.
          </p>
          <p>
            <strong>Week 2 &mdash; Object Manager and Lightning App Builder (15%):</strong> Custom objects, field types,
            record types, page layouts, validation rules, and App Builder components. Practice: build a custom object
            with a roll-up summary field and a master-detail relationship, then assign a different page layout per
            record type.
          </p>
          <p>
            <strong>Week 3 &mdash; Data and Analytics Management (17%, the heaviest section):</strong> Import Wizard vs
            Data Loader, deduplication, report types, dashboard components, and scheduled reports. Practice: build a
            matrix report for pipeline by stage and owner, then a dashboard with a funnel chart.
          </p>
          <p>
            <strong>Week 4 &mdash; Automation (15%):</strong> Flow Builder (record-triggered and screen flows),
            approval processes, and the order of execution. Practice: build a record-triggered flow that creates a
            follow-up task when an Opportunity reaches Closed Won, and configure a two-step approval process.
          </p>
          <p>
            <strong>Week 5 &mdash; Sales, Service, Productivity, and Agentforce (38% combined):</strong> Lead
            conversion, products and price books, case management (queues, assignment rules, escalation), Knowledge,
            entitlements, Chatter and mobile configuration, and Agent Builder basics. Review scenario-based use cases
            for each rather than memorising feature lists.
          </p>
          <p>
            <strong>Week 6 &mdash; Mocks and weak areas:</strong> Full timed mock exams (60 scored questions, 105
            minutes, no notes) and targeted revision. Score 80%+ consistently before booking, which gives you headroom
            above the 68% pass mark.
          </p>
        </div>
      </section>

      {/* Scenario decision rules */}
      <section id="scenario-rules" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Decision Rules for ADM-201 Scenario Questions</h2>
        <p className="text-sm text-gray-600 mb-5">
          Roughly 40&ndash;50% of questions describe a business situation where two features both sound plausible.
          These four rules resolve most of them.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Security questions:</strong> first decide whether the requirement is about object access
              (profiles and permission sets) or record visibility (OWD, sharing rules, role hierarchy). These are the
              most frequently tested and the most frequently confused concepts on the exam.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Automation questions:</strong> if the requirement says &ldquo;without code&rdquo; and happens on
              record save, the answer is almost always a record-triggered Flow. If it needs user input, a Screen Flow.
              If it needs multi-level sign-off, an Approval Process. Workflow Rules and Process Builder appear as
              distractors.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Data management questions:</strong> up to 50,000 records on standard objects points to the Import
              Wizard. Hundreds of thousands of records, custom objects, or scheduled automation points to Data Loader.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Relationship field questions:</strong> if the child cannot exist without the parent,
              master-detail. If it can, lookup. Roll-up summary fields only work on master-detail, which is the most
              common distractor when the question describes a lookup.
            </span>
          </li>
        </ul>
      </section>

      {/* Day-before review list */}
      <section id="day-before" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>OWD settings (Private / Public Read Only / Public Read-Write / Controlled by Parent) and what each allows</li>
          <li>Role hierarchy: visibility vs access &mdash; roles affect who can see records, not what they can do</li>
          <li>Profile vs Permission Set vs Permission Set Group, and when to use each</li>
          <li>Order of execution, and where validation rules fire relative to before-save and after-save flows</li>
          <li>Record-triggered flows: before-save vs after-save, and why before-save is more efficient</li>
          <li>Import Wizard vs Data Loader: limits, supported objects, and use cases</li>
          <li>Master-detail vs lookup: required parent, roll-up eligibility, cascade delete</li>
          <li>Approval process components: entry criteria, initial submission actions, approval steps, final actions</li>
          <li>Lead conversion: which fields map, and what does not auto-populate on the converted account</li>
          <li>Report types: tabular (no grouping), summary (row grouping), matrix (row and column), joined (multiple blocks)</li>
        </ol>
      </section>
    </>
  )
}
