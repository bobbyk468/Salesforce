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
    body: 'Review Data Import Wizard and Data Loader, duplicate management, report formats, and dashboards. Practise importing supported objects, building reports, and checking which records a dashboard viewer can see.',
  },
  {
    name: 'Configuration and Setup',
    weight: 15,
    body: 'Set up users and review login restrictions, profiles, permission sets, and permission set groups. Separate object and field permissions from record access, then practise choosing org-wide defaults, roles, and sharing rules.',
  },
  {
    name: 'Object Manager and Lightning App Builder',
    weight: 15,
    body: 'Build a custom object and compare formula, roll-up summary, lookup, and master-detail fields. Review validation rules, record types, page layouts, and Lightning pages for apps, records, and the home screen.',
  },
  {
    name: 'Automation',
    weight: 15,
    body: 'Compare screen flows with record-triggered and scheduled flows. Review when a flow runs, when code may be needed, and how approval processes use entry criteria, steps, and final actions.',
  },
  {
    name: 'Sales and Marketing Applications',
    weight: 10,
    body: 'Follow a lead from qualification through conversion, and review how its fields map to accounts, contacts, and opportunities. Study opportunity stages, forecasts, products, price books, campaigns, and activities.',
  },
  {
    name: 'Service and Support Applications',
    weight: 10,
    body: 'Practise routing and responding to cases using queues, assignment rules, escalation rules, and auto-response rules. Review Knowledge visibility, entitlements, milestones, and the Service Console.',
  },
  {
    name: 'Productivity and Collaboration',
    weight: 10,
    body: 'Review Chatter groups and files, tasks, events, email templates, and mobile navigation. Try using compact layouts to show useful record details on mobile.',
  },
  {
    name: 'Agentforce',
    weight: 8,
    body: 'Learn the basics of Agent Builder, topics, and actions. Compare an agent with a Flow or Apex solution, and review the permissions needed to build and deploy an agent.',
  },
]

export default function Adm201MergedGuide() {
  return (
    <>
      {/* What each section actually tests */}
      <section id="section-deep-dives" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Platform Administrator (Plat-Admn-201 / ADM-201) Exam Sections: Topics and Weightings
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          The four sections weighted at 15% or more make up 62% of the outline. Use the weightings to prioritize your study, and cover all eight sections.
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">6-Week Salesforce Platform Administrator Study Plan (Plat-Admn-201)</h2>
        <p className="text-sm text-gray-600 mb-5">
          Use this six-week plan as a starting point and adjust it to your experience and available time. Pair reading with practice in a free Developer Edition org.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Week 1 &mdash; Configuration and Setup (15%):</strong> Org setup, user management, profiles,
            permission sets, OWD, role hierarchy, sharing rules, and field-level security. Practice: create a user, review object permissions, and use field-level security to restrict a field.
          </p>
          <p>
            <strong>Week 2 &mdash; Object Manager and Lightning App Builder (15%):</strong> Build a custom object and review its fields, record types, layouts, and validation rules. Practise creating a master-detail relationship and roll-up summary, then assign layouts to record types.
          </p>
          <p>
            <strong>Week 3 &mdash; Data and Analytics Management (17%, the heaviest section):</strong> Compare Data Import Wizard and Data Loader, then review duplicate management, reports, and dashboards. Build a matrix report for opportunity stage and owner and use it in a dashboard.
          </p>
          <p>
            <strong>Week 4 &mdash; Automation (15%):</strong> Review record-triggered and screen flows, approval processes, and execution order. Build a flow that creates a follow-up task when an opportunity closes, then configure an approval process.
          </p>
          <p>
            <strong>Week 5 &mdash; Sales, Service, Productivity, and Agentforce (38% combined):</strong> Follow lead conversion and review products and price books. Practise case routing, review Knowledge and entitlements, and explore Chatter, mobile settings, and Agent Builder basics.
          </p>
          <p>
            <strong>Week 6 &mdash; Mocks and weak areas:</strong> Take a timed 60-question practice test with a 105-minute limit and no notes. Use the results to revisit weak topics; an 80% practice target can provide a margin above the listed passing score.
          </p>
        </div>
      </section>

      {/* Scenario decision rules */}
      <section id="scenario-rules" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Decision Rules for Platform Administrator Scenario Questions</h2>
        <p className="text-sm text-gray-600 mb-5">
          When a question describes a business need, identify the required result and any limits before choosing a feature.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Security questions:</strong> first decide whether the requirement is about object access
              (profiles and permission sets) or record visibility (OWD, sharing rules, role hierarchy). Review field permissions separately as well.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Automation questions:</strong> compare a record-triggered Flow for record changes, a Screen Flow for guided input, and an Approval Process for sign-off. Review each requirement before choosing.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Data management questions:</strong> compare the supported objects and operation size for Data Import Wizard and Data Loader. Data Loader can also support scheduled operations.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Relationship field questions:</strong> compare parent requirements, access behavior, and deletion settings. A standard roll-up summary field requires a master-detail relationship.
            </span>
          </li>
        </ul>
      </section>

      {/* Day-before review list */}
      <section id="day-before" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Org-wide defaults: compare Private, Public Read Only, Public Read/Write, and Controlled by Parent</li>
          <li>Role hierarchy: review how roles can open record access</li>
          <li>Profiles, permission sets, and permission set groups: compare how they grant permissions</li>
          <li>Order of execution: review validation and record-triggered flow timing</li>
          <li>Record-triggered flows: compare before-save and after-save uses</li>
          <li>Data Import Wizard and Data Loader: compare supported operations and limits</li>
          <li>Master-detail and lookup: compare parent requirements, roll-ups, and deletion behavior</li>
          <li>Approval processes: review entry criteria, submission actions, steps, and final actions</li>
          <li>Lead conversion: review field mapping and the records created or linked</li>
          <li>Report formats: compare tabular, summary, matrix, and joined reports</li>
        </ol>
      </section>
    </>
  )
}
