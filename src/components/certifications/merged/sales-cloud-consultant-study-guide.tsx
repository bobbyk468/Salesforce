/* Agentforce Sales Consultant (formerly Sales Cloud Consultant) study guide,
 * merged into /certifications/sales-cloud. Consolidated November 2026 from the
 * old /sales-cloud-consultant-study-guide and /sales-cloud-exam-tips pages into
 * one flow. Section names and weights follow EXAM_WEIGHTAGE['sales-cloud'] in
 * src/lib/exam-weightage-data.ts, which is verified against the official guide. */
import Link from '@/components/AppLink'
import { BookOpen, Target } from 'lucide-react'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const EXAM_GUIDE_URL = 'https://help.salesforce.com/s/articleView?id=005298976&language=en_US&type=1'

const examSections: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'Consulting and Implementation Strategies',
    weight: 25,
    body: 'The largest section is about running a project, not configuring a feature. Before an implementation: assess user experience, plan communication, training, and change management, and agree the metrics that will measure success. During: apply deployment considerations. After: respond to low adoption and changing requirements, and plan for continuous improvement. Know the project lifecycle and how to run discovery workshops, analyze requirements, and prioritize use cases.',
  },
  {
    name: 'Practical Application of Agentforce Sales Expertise',
    weight: 24,
    body: 'Build an end-to-end sales process from Lead to Opportunity to Quote to Close. Decide when declarative tools are enough and when to extend with custom development, AppExchange products, or productivity tools such as email integration, Slack, and Salesforce Mobile. Choose the right security model: sharing rules, role hierarchy, Account Teams, Opportunity Teams, permission sets, and permission set groups. Know Products, Price Books, Opportunity Products, Quotes, and the impact of multi-currency, and how Campaigns, Leads, and Opportunities support different sales scenarios.',
  },
  {
    name: 'Sales Lifecycle',
    weight: 20,
    body: 'Match business requirements, KPIs, and challenges to the right Agentforce Sales solution. Know common sales and marketing processes and their implementation considerations. Identify when to use Sales Engagement, Salesforce Inbox, Enterprise Territory Management, Opportunity Forecasting, and the Einstein and AI features. Turn sales KPIs into reports and dashboards.',
  },
  {
    name: 'Data Management',
    weight: 18,
    body: 'Explain the use cases and considerations for data migrations and integrations, including load order and the tools involved. Outline the scalability implications of a solution as data volumes grow. Know the approaches for keeping sales data clean, such as matching rules, duplicate rules, validation rules, and required fields.',
  },
  {
    name: 'Predictive and Generative AI',
    weight: 13,
    body: 'Know which generative AI tools are available in Agentforce Sales, such as drafted emails and summaries, and which predictive tools are available, such as lead and opportunity scoring. Be able to spot the ethical challenges of AI in a sales scenario and apply Salesforce’s Trusted AI Principles to it.',
  },
]

export default function SalesCloudConsultantStudyGuideContent() {
  return (
    <div className="mt-12">
      <section id="section-deep-dives" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Agentforce Sales Consultant Exam Sections: What Each One Tests</h2>
        <p className="text-sm text-gray-600 mb-5">
          Consulting and Implementation Strategies (25%) and Practical Application (24%) make up almost half the exam. The section names below are the ones in the{' '}
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
          to see where you stand against the 73% pass mark.
        </p>
      </section>

      <section id="study-plan" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Agentforce Sales Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 &mdash; Consulting and Implementation Strategies (25%):</strong> Review the project lifecycle from discovery to deployment and continuous improvement. For a project you know, write down the success metrics, the training plan, and how you would respond to low adoption.</p>
          <p><strong>Week 2 &mdash; Practical Application, sales process (24%):</strong> Configure a full Lead to Opportunity to Quote flow in a Developer Edition org: assignment rules, lead field mapping, sales processes and record types, products, price books, and quotes.</p>
          <p><strong>Week 3 &mdash; Practical Application, security and extension:</strong> Practise choosing between role hierarchy, sharing rules, Account Teams, and Opportunity Teams for a given access need. Review multi-currency, and when to extend with AppExchange or custom development.</p>
          <p><strong>Week 4 &mdash; Sales Lifecycle (20%):</strong> Set up Collaborative Forecasts and an Enterprise Territory Management model with a few users. Review Sales Engagement and Salesforce Inbox, and build a pipeline dashboard from sales KPIs.</p>
          <p><strong>Week 5 &mdash; Data Management (18%) and Predictive and Generative AI (13%):</strong> Plan a data migration with the right load order and duplicate handling. Review the predictive and generative AI tools in Agentforce Sales and the Trusted AI Principles.</p>
          <p><strong>Week 6 &mdash; Timed practice:</strong> Take full timed mocks (60 questions, 105 minutes) and review every missed question against the official objectives.</p>
        </div>
      </section>

      <section id="scenario-rules" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Agentforce Sales Consultant Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a client’s sales process and ask you to recommend a solution. Look for the simplest configuration that meets every stated requirement.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Find the requirement first:</strong> decide whether the scenario is about forecasting, pipeline visibility, territory coverage, record access, or data quality before you read the options.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Prefer standard features:</strong> choose declarative Salesforce features over custom code unless the scenario states a need they cannot meet.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Access questions:</strong> for one deal, think Opportunity Team; for a customer, Account Team; for a whole group of records, sharing rules or territories; for managers seeing their team’s records, the role hierarchy.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Project questions:</strong> when adoption is low or requirements change, the first step is to find out why, through feedback and usage data, before changing the build.</span></li>
        </ul>
      </section>

      <section id="common-mistakes" className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts Agentforce Sales Consultant Candidates Often Mix Up</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Forecast Category vs. Opportunity Stage</h3>
            <p>Forecast categories are rollup buckets such as Pipeline, Best Case, Commit, and Closed. Each Opportunity stage maps to a default forecast category, but the two are separate fields, and the forecast rolls up by category, not by stage.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Role-Based vs. Territory-Based Forecasts</h3>
            <p>A role-based forecast type rolls up through the role hierarchy. A territory-based forecast type rolls up through the territory hierarchy, which may be shaped differently. Each forecast type is set up separately; enabling one does not give you the other.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Lead Conversion Field Mapping</h3>
            <p>Standard Lead fields map to standard Account, Contact, and Opportunity fields automatically. A custom Lead field carries over only if it has been mapped to a custom field on one of those objects.</p>
          </div>
        </div>
      </section>

      <section id="day-before" className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>The five section names and weights in the official guide</li>
          <li>Project lifecycle: discovery, design, build, test, deploy, improve</li>
          <li>Change management: communication, role-based training, success metrics</li>
          <li>Lead assignment, conversion, and custom field mapping</li>
          <li>Sales processes, record types, stages, and forecast categories</li>
          <li>Products, price books, quotes, and multi-currency</li>
          <li>Opportunity Teams and splits vs. Account Teams vs. sharing rules</li>
          <li>Collaborative Forecasts and Enterprise Territory Management</li>
          <li>Data migration order and duplicate management</li>
          <li>Predictive vs. generative AI tools, and the Trusted AI Principles</li>
        </ol>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Go After Agentforce Sales Consultant</h2>
        <p className="text-sm text-gray-700">
          Common next steps are{' '}
          <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Agentforce Service Consultant</Link>,{' '}
          <Link href="/certifications/cpq-administrator" className="text-salesforce-blue font-medium hover:underline">CPQ Administrator</Link>, or{' '}
          <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>. To compare the two consultant exams, see{' '}
          <Link href="/sales-cloud-vs-service-cloud" className="text-salesforce-blue font-medium hover:underline">Sales vs Service Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="sales-cloud" />
    </div>
  )
}
