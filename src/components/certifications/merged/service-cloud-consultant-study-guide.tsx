/* Agentforce Service Consultant (formerly Service Cloud Consultant) study guide,
 * merged into /certifications/service-cloud. Consolidated November 2026 from the
 * old /service-cloud-consultant-study-guide and /service-cloud-consultant-exam-tips
 * pages into one flow. Section names and weights follow
 * EXAM_WEIGHTAGE['service-cloud'] in src/lib/exam-weightage-data.ts, which is
 * verified against the official guide. */
import Link from '@/components/AppLink'
import { BookOpen, Target } from 'lucide-react'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const EXAM_GUIDE_URL = 'https://help.salesforce.com/s/articleView?id=005298989&language=en_US&type=1'

const examSections: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'Agentforce Service Solution Design',
    weight: 15,
    body: 'Analyze customer requirements and choose a design, weighing capabilities, limitations, and trade-offs for both the service agent experience and the customer experience. Given security and compliance requirements, decide how to secure customer data.',
  },
  {
    name: 'Intake and Interaction Channels',
    weight: 13,
    body: 'Recommend intake channels such as Email-to-Case, Web-to-Case, phone, chat, and messaging, and know the design considerations for each. Know the real-time channels by name: Messaging for In-App and Web for chat-style conversations, and Service Cloud Voice for telephony inside Salesforce. This section also covers when an Agentforce service agent is the right first point of contact, when it should hand off to a person, and how agentic service capabilities are configured.',
  },
  {
    name: 'Case Management',
    weight: 13,
    body: 'Design case handling from creation to closure: assignment, escalation, and auto-response rules, queues, and Omni-Channel routing. Know how case deflection is delivered through Experience Cloud sites, Agentforce, and Knowledge, and how entitlements, milestones, assets, business hours, and SLAs are configured.',
  },
  {
    name: 'Contact Center Analytics',
    weight: 13,
    body: 'Build reports and dashboards that give each stakeholder the information they need, from executives tracking volume and satisfaction to supervisors watching queues.',
  },
  {
    name: 'Industry Knowledge',
    weight: 12,
    body: 'Explain what drives contact center metrics and KPIs such as first contact resolution, average handle time, and customer satisfaction, and weigh the risks, benefits, and challenges of meeting a client’s desired outcome.',
  },
  {
    name: 'Implementation Strategies',
    weight: 12,
    body: 'Know how to take part in a consulting engagement, recommend deployment and training strategies, and explain the considerations for data migration, data quality, data governance, and large data volumes.',
  },
  {
    name: 'Knowledge Management',
    weight: 12,
    body: 'Explain the Knowledge article lifecycle, Knowledge-Centered Service (KCS), and Salesforce Knowledge configuration, including data categories and channel visibility. Configure Knowledge to support both agents and customer self-service.',
  },
  {
    name: 'Integrations',
    weight: 10,
    body: 'Explain the use cases and considerations for core service integrations, including telephony (CTI), third-party solutions, and connections to external sources of data.',
  },
]

export default function ServiceCloudConsultantStudyGuideContent() {
  return (
    <div className="mt-12">
      <section id="section-deep-dives" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Agentforce Service Consultant Exam Sections: What Each One Tests</h2>
        <p className="text-sm text-gray-600 mb-5">
          The eight sections are close in weight, from 15% down to 10%, so none can be skipped. The section names below are the ones in the{' '}
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
          to see where you stand against the 78% pass mark.
        </p>
      </section>

      <section id="study-plan" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Agentforce Service Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 &mdash; Solution Design (15%) and Industry Knowledge (12%):</strong> Review contact center KPIs and what moves them. Practise turning a set of requirements into a design, noting the trade-offs for agents and for customers.</p>
          <p><strong>Week 2 &mdash; Intake and Interaction Channels (13%):</strong> Configure Email-to-Case and Web-to-Case in a Developer Edition org. Review phone, chat, and messaging channels, and where an AI service agent fits.</p>
          <p><strong>Week 3 &mdash; Case Management (13%):</strong> Build assignment, escalation, and auto-response rules. Set up Omni-Channel with a queue, presence statuses, and capacity, then an entitlement process with two milestones and a warning action.</p>
          <p><strong>Week 4 &mdash; Knowledge Management (12%) and Contact Center Analytics (13%):</strong> Enable Lightning Knowledge, create data categories, and publish an article to a channel. Build a service dashboard for two different audiences.</p>
          <p><strong>Week 5 &mdash; Implementation Strategies (12%) and Integrations (10%):</strong> Review deployment and training strategies, data migration and large data volumes, and the options for telephony and external data.</p>
          <p><strong>Week 6 &mdash; Timed practice:</strong> Take full timed mocks (60 questions, 105 minutes) and review every missed question against the official objectives. The pass mark is 78%, about 47 of 60.</p>
        </div>
      </section>

      <section id="scenario-rules" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Agentforce Service Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Channel questions:</strong> choose the channel that matches how the customer makes contact: Web-to-Case for website forms, Email-to-Case for inbound email, messaging or chat for real-time conversations.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Routing questions:</strong> if agents specialize by product or language, use skills-based routing. If a generalist team shares the work, use queue-based routing.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>SLA questions:</strong> a time target tied to what the customer is owed points to entitlements and milestones. A simple alert based on case age points to an escalation rule. A confirmation to the customer points to an auto-response rule.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Knowledge visibility questions:</strong> channel settings control where an article appears, and data category visibility controls who can see it. If agents see an article and customers do not, check those two before the article status.</span></li>
        </ul>
      </section>

      <section id="common-mistakes" className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts Agentforce Service Consultant Candidates Often Mix Up</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Entitlement Process vs. Service Contract vs. Escalation Rule</h3>
            <p>An entitlement process is the timeline: milestones with time limits and actions. A service contract is the agreement with the customer that entitlements belong to. An escalation rule is separate from both: it acts on case age and does not track what a customer is owed.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Omni-Channel Routing Models: Least Active vs. Most Available</h3>
            <p>Least Active sends work to the agent with the least open work. Most Available sends work to the agent with the largest gap between their capacity and their open work. They differ when agents have different capacities.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Knowledge Visibility: Data Categories vs. Topics vs. Record Types</h3>
            <p>Data categories, together with channel settings, control which audiences can see an article. Topics are tags for search and navigation and do not control visibility. Record types define an article’s structure and layout.</p>
          </div>
        </div>
      </section>

      <section id="day-before" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>The eight section names and weights in the official guide</li>
          <li>Contact center KPIs: first contact resolution, handle time, satisfaction</li>
          <li>Email-to-Case, Web-to-Case, and messaging channel design</li>
          <li>Assignment, escalation, and auto-response rules</li>
          <li>Omni-Channel: queue-based vs. skills-based routing, capacity, presence</li>
          <li>Entitlements, milestones, business hours, and service contracts</li>
          <li>Knowledge lifecycle, KCS, data categories, and channel visibility</li>
          <li>Case deflection through Experience Cloud sites, Agentforce, and Knowledge</li>
          <li>Reports and dashboards for different service stakeholders</li>
          <li>Telephony and external-data integration options</li>
        </ol>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After Agentforce Service Consultant?</h2>
        <p className="text-sm text-gray-700">
          Common next steps are{' '}
          <Link href="/certifications/field-service" className="text-salesforce-blue font-medium hover:underline">Agentforce Field Service and Operations Consultant</Link>,{' '}
          <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>, or{' '}
          <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Agentforce Sales Consultant</Link>. To compare the two consultant exams, see{' '}
          <Link href="/sales-cloud-vs-service-cloud" className="text-salesforce-blue font-medium hover:underline">Sales vs Service Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="service-cloud" />
    </div>
  )
}
