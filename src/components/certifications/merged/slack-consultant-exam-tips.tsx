/* Slack Certified Consultant study guide, merged into
 * /certifications/slack-consultant (the old /slack-consultant-exam-tips page
 * 301-redirects here). Section names and weights follow
 * EXAM_WEIGHTAGE['slack-consultant'] in src/lib/exam-weightage-data.ts, which
 * is verified against the official guide. */
import Link from '@/components/AppLink'
import { BookOpen, Target } from 'lucide-react'

const EXAM_GUIDE_URL = 'https://help.salesforce.com/s/articleView?id=005298991&language=en_US&type=1'

const examSections: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'Policies and Settings',
    weight: 22,
    body: 'Help org and workspace stakeholders agree on settings. Know the administrative roles and what each can change, how Org and Workspace Owners use the analytics dashboard, identity management settings, key org-level security settings, and Slack’s compliance capabilities. Recommend launch settings for channel management, Slack Connect, and app approval.',
  },
  {
    name: 'Learning and Enablement',
    weight: 18,
    body: 'Understand Slack’s experiential learning approach. Design a curriculum and learning plan for the client’s admins and another for its users, create the learning materials, and run the sessions. Troubleshoot common user issues, and recommend a rollout communication plan the client can carry out.',
  },
  {
    name: 'Delivery and Migration',
    weight: 17,
    body: 'Know Slack delivery best practices and who is responsible for what between Slack, the partner, and the client. Understand the end-to-end migration process: pre-migration work such as scheduling, user cleanup, and communications, then running the migration, tracking its status, and handling issues.',
  },
  {
    name: 'Grid Design',
    weight: 15,
    body: 'Use what you learned in discovery to recommend an Enterprise Grid design. Know grid design best practices, present feasible options to the client, and support the final sign-off.',
  },
  {
    name: 'Discovery',
    weight: 10,
    body: 'Articulate the value of Slack, research how the client works today, and ask about their existing Slack experience, security, policies, and goals. Finish with a vision statement and success metrics.',
  },
  {
    name: 'Channel Strategy',
    weight: 10,
    body: 'Explain channel basics and best practices, the purpose of a channel naming convention, common channel use cases, and simple workflows such as onboarding and standup workflows.',
  },
  {
    name: 'Governance Structure (Owner and Admin Roles)',
    weight: 8,
    body: 'Identify the governance team and help assign roles. Lead discussions on the admin support model, such as request, help, and approval flows, and advise on which admin processes can move into Slack.',
  },
]

export default function SlackConsultantExamTipsContent() {
  return (
    <div className="mt-12">
      <section id="section-deep-dives" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Slack Consultant Exam Sections: What Each One Tests</h2>
        <p className="text-sm text-gray-600 mb-5">
          Policies and Settings, Learning and Enablement, and Delivery and Migration together make up 57% of the exam. The section names below are the ones in the{' '}
          <a className="text-salesforce-blue underline" href={EXAM_GUIDE_URL} target="_blank" rel="noreferrer nofollow noopener">
            official exam guide
          </a>
          .
        </p>
        <div className="space-y-5 text-sm text-gray-700">
          {examSections.map(({ name, weight, body }) => (
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
          to see where you stand against the 67% pass mark.
        </p>
      </section>

      <section id="study-plan" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week Slack Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 &mdash; Policies and Settings (22%) and Governance Structure (8%):</strong> Review the Enterprise Grid roles and what each can change, identity management with SSO and SCIM, org-level security and compliance settings, and launch settings for channel management, Slack Connect, and app approval.</p>
          <p><strong>Week 2 &mdash; Discovery (10%) and Grid Design (15%):</strong> Practise turning discovery notes into a vision statement, success metrics, and two or three grid design options with the trade-offs of each.</p>
          <p><strong>Week 3 &mdash; Delivery and Migration (17%) and Channel Strategy (10%):</strong> Walk through a migration from pre-migration cleanup and communications to cutover and issue handling. Draft a channel naming convention and an onboarding workflow.</p>
          <p><strong>Week 4 &mdash; Learning and Enablement (18%) and timed practice:</strong> Outline a learning plan for admins and one for users, plus a rollout communication plan. Then take timed practice sets (60 questions, 90 minutes) and review what you missed.</p>
        </div>
      </section>

      <section id="scenario-rules" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Slack Consultant Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a client engagement and ask what the consultant should recommend. Look for the simplest native Slack answer that meets the stated need.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Channel design questions:</strong> public channels for team-wide work, private channels for sensitive topics, and Slack Connect for work with outside organizations.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Automation questions:</strong> when a scenario says &ldquo;without code&rdquo; or names a non-technical admin, the answer is Workflow Builder. Custom apps are for needs beyond it.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Adoption questions:</strong> look for executive sponsorship, a champion network, and a phased rollout that starts with a pilot team.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Settings questions:</strong> check which role is allowed to make the change, and whether it is an org-level or a workspace-level setting.</span></li>
        </ul>
      </section>

      <section id="common-mistakes" className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts Slack Consultant Candidates Often Mix Up</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Slack Connect vs. Channels Shared Across Workspaces</h3>
            <p>Slack Connect links your organization with a different organization. Sharing a channel across workspaces happens inside one Enterprise Grid organization. A scenario about the company’s own business units is a grid design question, not a Slack Connect one.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Org-Level vs. Workspace-Level Roles</h3>
            <p>On Enterprise Grid, Org Owners and Org Admins manage settings for the whole organization, while Workspace Owners and Workspace Admins manage a single workspace. Many settings questions turn on which level a policy is set at.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Workflow Builder vs. Custom Apps</h3>
            <p>Workflow Builder is the no-code tool for Slack-native automation such as forms, scheduled messages, and onboarding steps. A custom app built on the Slack API is for logic or integrations that Workflow Builder cannot handle.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Go After Slack Consultant</h2>
        <p className="text-sm text-gray-700">
          Related credentials are{' '}
          <Link href="/certifications/slack-administrator" className="text-salesforce-blue font-medium hover:underline">Slack Administrator</Link> and{' '}
          <Link href="/certifications/slack-developer" className="text-salesforce-blue font-medium hover:underline">Slack Developer</Link>. For other consultant exams, see the{' '}
          <Link href="/consultant-certification-path" className="text-salesforce-blue font-medium hover:underline">consultant certification path</Link>.
        </p>
      </section>
    </div>
  )
}
