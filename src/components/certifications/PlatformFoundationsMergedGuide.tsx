import Link from '@/components/AppLink'
import { BookOpen, Target } from 'lucide-react'

/**
 * Long-form Platform Foundations study-guide content, consolidated November 2026
 * from the two previously separate /platform-foundations-study-guide and
 * /platform-foundations-exam-tips pages (both 301-redirected here). Folded into
 * one flow (single weightings table, single study plan, single FAQ) to remove
 * the duplicate sections those two pages used to produce when concatenated.
 *
 * Weightings follow EXAM_WEIGHTAGE['platform-foundations'] in
 * src/lib/exam-weightage-data.ts. If the official guide changes, update that
 * file and the percentages quoted here.
 */

const sectionDeepDives: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'Salesforce Ecosystem',
    weight: 32,
    body: 'Salesforce is multi-tenant and ships three automatic releases a year (Spring, Summer, Winter). Know the learning and community resources: Trailhead modules, projects, trails, trailmixes, and superbadges; Trailhead Playgrounds for hands-on practice; the Trailblazer Community; IdeaExchange for suggesting and voting on product ideas; and trust.salesforce.com for real-time system status and planned maintenance. AppExchange is the marketplace for installable apps. Match each Customer 360 product to its use case (Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, Commerce Cloud, Data 360, Agentforce, Slack, MuleSoft, Tableau), and tell the career paths apart: admin, developer, business analyst, consultant, and architect.',
  },
  {
    name: 'Navigation',
    weight: 28,
    body: 'The App Launcher opens apps and items, and the navigation bar holds the tabs for the current app, which users can personalize. Global search finds records across objects. List views can be pinned, edited inline, shown as a Kanban board, and charted. On a record page, know the highlights panel, related lists, the activity timeline, and Path. Favorites (the star icon) are shortcuts to pages a user visits often. Users change their own time zone, locale, and language in personal settings, while org customization happens in Setup, where Quick Find locates a setting.',
  },
  {
    name: 'Data Model',
    weight: 25,
    body: 'Know how Lead, Account, Contact, Opportunity, and Case relate, and that converting a Lead creates an Account and a Contact and can create an Opportunity. Custom objects and fields carry a __c suffix in their API names. A lookup is a loose link; with master-detail, deleting the parent deletes its children and the parent can hold roll-up summary fields. Schema Builder shows objects and relationships on one canvas. For data integrity, compare required fields, picklists, validation rules, and duplicate and matching rules. For data visibility, review org-wide defaults, roles, and sharing. The Data Import Wizard handles up to 50,000 records; Data Loader handles larger jobs.',
  },
  {
    name: 'Reports & Dashboards',
    weight: 15,
    body: 'A report type decides which objects and fields a report can use. The four formats are tabular (a plain list), summary (grouped rows with subtotals), matrix (grouped by rows and columns), and joined (several blocks). Reports live in folders, which control who can see them, and users can subscribe to a report to receive results on a schedule. Each dashboard component is driven by one source report. A dashboard shows data as its running user sees it, unless it is a dynamic dashboard, which shows each viewer their own data.',
  },
]

export default function PlatformFoundationsMergedGuide() {
  return (
    <>
      {/* What each section actually tests */}
      <section id="section-deep-dives" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Salesforce Platform Foundations Exam Sections: Topics and Weightings
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Salesforce Ecosystem and Navigation together make up 60% of the outline. Start there, then cover the Data Model and Reports &amp; Dashboards.
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
          to see where you stand against the 62% pass mark.
        </p>
      </section>

      {/* 4-week study plan */}
      <section id="study-plan" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">4-Week Salesforce Platform Foundations Study Plan</h2>
        <p className="text-sm text-gray-600 mb-5">
          Use this four-week plan as a starting point and adjust it to your experience. A free Trailhead Playground is enough to follow along.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Week 1 &mdash; Salesforce Ecosystem (32%):</strong> Complete the Trailhead &ldquo;Salesforce Platform Basics&rdquo; and &ldquo;CRM for Lightning Experience&rdquo; modules. Learn Customer 360, the main product clouds, AppExchange, and Trailhead itself.
          </p>
          <p>
            <strong>Week 2 &mdash; Navigation (28%) and Data Model (25%):</strong> Practise the App Launcher, global search, list views, and the Salesforce mobile app. Study standard versus custom objects, field types, and lookup versus master-detail relationships, and build an object in a Trailhead Playground.
          </p>
          <p>
            <strong>Week 3 &mdash; Reports &amp; Dashboards (15%) plus review:</strong> Learn what reports and dashboards do and how a list view differs from both. Revisit anything shaky from Weeks 1 and 2.
          </p>
          <p>
            <strong>Week 4 &mdash; Mock exams and review:</strong> Take full timed practice exams and target 75%+ before booking. Review any weak areas the practice results turned up.
          </p>
        </div>
      </section>

      {/* Scenario decision rules */}
      <section id="scenario-rules" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Decision Rules for Platform Foundations Scenario Questions</h2>
        <p className="text-sm text-gray-600 mb-5">
          About a third of the questions use short scenarios. Focus on standard Salesforce features, not custom development that would be out of scope for a foundations exam.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Field type questions:</strong> text fields store alphanumeric data, number fields store numeric values, lookup fields create a relationship to another object, and master-detail fields create a tighter parent-child relationship where the child cannot exist without the parent. Formula fields calculate values from other fields and are read-only.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Security questions:</strong> profiles control which objects and fields a user can access, and permission sets add access on top of a profile; they cannot restrict what a profile already grants. Org-wide defaults set the baseline sharing level, and sharing rules open up access beyond that baseline.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Automation questions:</strong> validation rules prevent saving invalid data, formula fields calculate read-only values, and Flow automates processes, a screen flow for guided users and an auto-launched flow for background logic. &ldquo;When a record is saved, automatically update a field&rdquo; points to an auto-launched flow on record save, not a manual process.
            </span>
          </li>
        </ul>
      </section>

      {/* 3 concepts that fail most candidates */}
      <section id="common-mistakes" className="mt-12 rounded-xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Platform Foundations Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">
          These are not the hardest topics; they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.
        </p>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Standard Objects vs. Custom Objects: What You Can and Cannot Modify</h3>
            <p>Standard objects (Account, Contact, Opportunity, Case) are provided by Salesforce and cannot be deleted; you can add fields, page layouts, and validation rules, but you cannot remove their core fields. Custom objects are fully user-defined and can be deleted if no records exist.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Profiles vs. Permission Sets: Baseline vs. Extension</h3>
            <p>Profiles define the baseline permissions for a group of users: what objects they can access, what apps they see, and their login hours. Permission sets add permissions on top of a profile, never used to restrict what a profile already grants.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. App Launcher vs. Navigation Bar vs. Home Page: Three Separate Areas</h3>
            <p>The App Launcher shows all apps available to a user, customised through profiles and permission sets. The navigation bar, inside a Lightning app, defines which tabs are visible in that app. The Home page displays components relevant to the user&apos;s role. These are three separate customisation surfaces, not one.</p>
          </div>
        </div>
      </section>
    </>
  )
}
