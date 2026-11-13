import Link from '@/components/AppLink'
import { BookOpen, Target } from 'lucide-react'

/**
 * Long-form Platform App Builder (DEV-402) study-guide content, consolidated
 * November 2026 from the two previously separate /app-builder-study-guide and
 * /app-builder-exam-tips pages (both 301-redirected here). Folded into one
 * flow (single weightings table, single study plan, single FAQ) to remove
 * the duplicate sections those two pages produced when concatenated, and to
 * drop the self-referencing "next cert" links both pages had (each one
 * recommended "Platform App Builder" as a next step after itself).
 *
 * Weightings follow EXAM_WEIGHTAGE['app-builder'] in
 * src/lib/exam-weightage-data.ts. If the official guide changes, update that
 * file and the percentages quoted here.
 */

const sectionDeepDives: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'Business Logic and Process Automation',
    weight: 32,
    body: 'Flow Builder is the dominant topic here. A before-save record-triggered flow updates fields on the triggering record without DML, faster and more efficient. An after-save flow is needed when you must query or update related records after insert. Screen flows collect user input through screens and can launch from a button on a record page. Approval processes define entry criteria, submission actions, one or more approval steps, and final actions. Validation rules evaluate before triggers fire.',
  },
  {
    name: 'Data Modeling and Management',
    weight: 20,
    body: 'Master-detail requires a parent, cascades delete, and is the only relationship type eligible for roll-up summary fields. Lookup has an optional parent and no cascade delete. A many-to-many relationship needs a junction object with two master-detail relationships. Formula fields are read-only calculated fields. Compare the Import Wizard (up to 50,000 records, no CLI) with Data Loader (bulk operations on any object, command-line capable, schedulable).',
  },
  {
    name: 'Salesforce Fundamentals',
    weight: 18,
    body: 'Prefer declarative tools (Flow, validation rules, formula fields) unless a requirement cannot be met declaratively; the exam rewards the least-code answer. Org-wide defaults set the baseline record access, roles grant upward visibility, sharing rules open access horizontally, and manual sharing allows one-off exceptions. Profiles control object access and app access; permission sets grant additional permissions without changing the profile; permission set groups bundle several permission sets.',
  },
  {
    name: 'User Interface',
    weight: 17,
    body: 'Lightning App Builder has three page types: Home pages, Record pages, and App pages. Component visibility rules hide or show components based on field values or user attributes, with no code needed. Compact layouts control the fields shown in the highlights panel and on mobile cards. Record types control page layout, picklist values, and business process assignment, not field visibility.',
  },
  {
    name: 'App Deployment',
    weight: 13,
    body: 'Change sets move metadata, such as objects, fields, and flows, between related orgs, like sandbox to production, but cannot delete components; that needs the Metadata API or a destructive-changes manifest. Sandbox types differ in storage and refresh interval: Developer, Developer Pro, Partial Copy, and Full. Unmanaged packages are fully editable by the installer; managed packages are locked and upgradable by the publisher, as on AppExchange.',
  },
]

export default function AppBuilderMergedGuide() {
  return (
    <>
      {/* What each section actually tests */}
      <section id="section-deep-dives" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Platform App Builder (DEV-402) Exam Sections: Topics and Weightings
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Business Logic and Process Automation, Data Modeling and Management, and Salesforce Fundamentals together make up 70% of the outline. Master those three first.
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
        <p className="text-sm text-gray-700 mt-5 pt-5 border-t border-gray-100">
          Already have section-level scores from a practice test? Run them through the{' '}
          <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Exam Score Calculator
          </Link>{' '}
          to see where you stand against the 73% pass mark.
        </p>
      </section>

      {/* 4-week study plan */}
      <section id="study-plan" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4-Week Platform App Builder Study Plan (DEV-402)</h2>
        <p className="text-sm text-gray-600 mb-5">
          Use this four-week plan as a starting point and adjust it to your experience. Pair reading with hands-on practice in a free Developer Edition org.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Week 1 &mdash; Business Logic and Process Automation (32%, the heaviest section):</strong> Flow Builder in depth: record-triggered flows (before and after save), screen flows, scheduled flows, approval processes, validation rules, and order of execution. Practice: build a record-triggered flow that creates a follow-up task on Opportunity close, and a screen flow for new case intake.
          </p>
          <p>
            <strong>Week 2 &mdash; Data Modeling and Management (20%):</strong> Custom objects, field types (formula, roll-up summary, lookup, master-detail), schema design, and Import Wizard versus Data Loader. Practice: design a data model for a custom app with the right relationship types.
          </p>
          <p>
            <strong>Week 3 &mdash; Salesforce Fundamentals (18%) and User Interface (17%):</strong> Org-wide defaults, role hierarchy, sharing rules, profiles versus permission sets, Lightning App Builder page types, component visibility rules, compact layouts, and record types.
          </p>
          <p>
            <strong>Week 4 &mdash; App Deployment (13%) and mocks:</strong> Change sets, sandbox types, package types, and deployment order. Take full timed mock exams (60 questions, 105 minutes) and target 85%+ before booking, 10 points above the 73% pass mark.
          </p>
        </div>
      </section>

      {/* Scenario decision rules */}
      <section id="scenario-rules" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Decision Rules for Platform App Builder Scenario Questions</h2>
        <p className="text-sm text-gray-600 mb-5">
          Most questions present a business requirement and ask which declarative feature best meets it. Identify the constraint in each scenario before choosing an answer.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Automation questions:</strong> the default answer is Flow. If the scenario can be solved by either a record-triggered flow or an Apex trigger, the exam&apos;s correct answer is Flow, the &ldquo;declarative-first&rdquo; principle. Choose an approval process only when a multi-step human approval with rejection paths is described.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Relationship questions:</strong> use master-detail when the child record cannot exist without the parent, when access should cascade from the parent&apos;s org-wide default, or when the scenario mentions roll-up summary fields. Use lookup when the child can exist independently. A junction object (two master-detail relationships) solves a many-to-many relationship.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Deployment questions:</strong> change sets move metadata between related orgs, such as sandbox to production in the same organization. If the question asks about deleting a component, change sets cannot do it; that needs the Metadata API.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Watch for key phrases:</strong> &ldquo;without code&rdquo; points to a declarative answer, &ldquo;most efficient&rdquo; favors a native feature over a custom build, and &ldquo;only show this component to managers&rdquo; points to a component visibility rule, not a separate page layout.
            </span>
          </li>
        </ul>
      </section>

      {/* 3 concepts that fail most candidates */}
      <section id="common-mistakes" className="mt-12 rounded-xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Platform App Builder Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">
          These are not the hardest topics; they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.
        </p>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Declarative-First: The Exam Prefers Flow Over Apex</h3>
            <p>When a scenario could be solved by either a record-triggered flow or an Apex trigger, the exam&apos;s answer is Flow. Candidates with real-world Apex experience often choose the code solution; the exam penalizes this. Only choose Apex when the scenario explicitly states something Flow cannot do.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Master-Detail vs. Lookup: The Sharing and Roll-Up Difference</h3>
            <p>Master-detail relationships support roll-up summary fields from child to parent; lookup relationships do not. Master-detail access also follows the parent&apos;s org-wide default: if the master record is Private, child records follow that access level regardless of the child object&apos;s own setting. A lookup child record does not inherit access this way.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Component Visibility Rules vs. Profile-Based Page Layout Assignment</h3>
            <p>Component visibility rules in Lightning App Builder control whether a component renders on a page, based on field values, user permissions, or device type; they do not control which page layout a profile sees. Page layout assignment is a separate, profile-based setting. If a scenario says &ldquo;only show this component to managers,&rdquo; the answer is a visibility rule, not a separate layout.</p>
          </div>
        </div>
      </section>

      {/* Day-before review list */}
      <section id="day-before" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Before-save vs. after-save record-triggered flow: when to use each and why</li>
          <li>Order of execution: validation rules fire before triggers, and flows fire after DML</li>
          <li>Formula fields vs. roll-up summary fields: read-only, and when each is appropriate</li>
          <li>Master-detail vs. lookup: required parent, cascade delete, and roll-up eligibility</li>
          <li>Org-wide defaults and their effect on record visibility, not field access</li>
          <li>Lightning App Builder page types: Home, Record, and App, and the scope of each</li>
          <li>Component visibility rules: which attributes you can filter on</li>
          <li>Sandbox types: Developer, Developer Pro, Partial Copy, and Full</li>
          <li>Change set limitations: cannot delete metadata, cannot move between unrelated orgs</li>
          <li>Import Wizard vs. Data Loader: record limit, object support, and scheduling capability</li>
        </ol>
      </section>
    </>
  )
}
