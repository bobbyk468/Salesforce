/* Ported from /crm-analytics-study-guide, merged into /certifications/crm-analytics-einstein-discovery-consultant in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'crm-analytics-einstein-discovery-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = 'Review CRM Analytics study topics including dataflows, recipes, SAQL, dashboards, and exam format details.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CRM Analytics Consultant', url: '/certifications/crm-analytics-einstein-discovery-consultant' },
  { name: 'CRM Analytics Study Guide', url: '/crm-analytics-study-guide' },
]

const examSections = [
  { name: 'Data Layer', weight: 23, note: 'Data Manager to extract and load data into datasets. Scheduling refreshes for data syncs and dataflows/recipes within platform limits. Data transformations in dataflows/recipes. Dataset extended metadata (XMD): labels, values, colors. Delivery management: versioning and conversion.' },
  { name: 'Analytics Dashboard Implementation', weight: 19, note: 'Configuring dashboards with query types and widget-level parameters. Selection/result interactions. Advanced functionality like windowing and time series analysis in compare tables. Making dashboards actionable in Lightning pages. Monitoring and optimizing query performance with Dashboard Inspector. Versioning and Dashboard Publisher.' },
  { name: 'Admin/Configuration', weight: 17, note: 'Enabling CRM Analytics and its features, including permission sets and licenses. Designing solutions within data sync/dataflow/recipe limits. What the CRM Analytics API can and can\'t do. Migrating between environments for deployment.' },
  { name: 'Security', weight: 16, note: 'Security settings for users, groups, and profiles. Row-based security using sharing inheritance and security predicates. App sharing based on user and group requirements.' },
  { name: 'Analytics Dashboard Design', weight: 13, note: 'Scoping, validating, and prioritizing dashboard design requirements. Building dashboards that follow CRM Analytics best practices and UX design principles. Choosing and configuring the right standard templated app.' },
  { name: 'Einstein Discovery', weight: 12, note: 'Building a model: choosing numeric, binary, or multi-classification predictions. Analyzing model results and proposing data improvements. Adjusting parameters and columns to improve a model. Enabling prediction features on Lightning record pages. Reading a Model Card to monitor and maintain model performance.' },
]

export const faqItems = [
  {
    question: 'What is Salesforce CRM Analytics?',
    answer: 'CRM Analytics (formerly Tableau CRM, formerly Einstein Analytics) is Salesforce\'s native business intelligence and analytics platform. It allows users to connect Salesforce and external data, build interactive dashboards, and surface AI-powered insights within the Salesforce UI. The CRM Analytics and Einstein Discovery Consultant certification validates skills in designing, building, and securing analytics solutions. The exam has 60 scored questions (plus up to 5 unscored), a 90-minute time limit, 65% passing score, and a $200 fee.',
  },
  {
    question: 'What is the difference between a dataflow and a recipe in CRM Analytics?',
    answer: 'Dataflows are the original ETL mechanism in CRM Analytics, they use JSON-based transformation nodes (augment, filter, computeExpression, flatten, sfdcDigest, sfdcRegister) and run on a scheduled job. Recipes are the newer visual ETL builder, a drag-and-drop Data Prep UI with node types for joining, filtering, aggregating, and transforming data. Recipes are easier to build and maintain for most use cases. Dataflows offer more control for complex transformations and are still used in many legacy implementations.',
  },
  {
    question: 'What is SAQL in CRM Analytics?',
    answer: 'SAQL (Salesforce Analytics Query Language) is the query language used by CRM Analytics to query datasets. It resembles SQL but is designed for CRM Analytics datasets rather than relational databases. Key functions: q() wraps the dataset reference, groupby groups results, foreach iterates over groups, cogroup joins two datasets. SAQL is used in lens and dashboard queries when the visual designer is insufficient for complex calculations.',
  },
  {
    question: 'What is row-level security in CRM Analytics?',
    answer: 'Row-level security (RLS) in CRM Analytics controls which rows of a dataset a user can see when they view a dashboard or lens. It is implemented via security predicates, filter expressions evaluated per user based on their attributes (role, profile, user fields). For example, a predicate like \'Region\' == "$User.Region__c" would limit each user to rows matching their assigned region. Without RLS, all users with dataset access see all rows regardless of their Salesforce record-level access.',
  },
  {
    question: 'How long should I study for the CRM Analytics exam?',
    answer: 'Plan for 8–10 weeks with 10–12 hours per week. CRM Analytics requires hands-on experience, many exam questions test specific configuration steps in Analytics Studio that you cannot learn from reading alone. Use a free CRM Analytics developer org (available via Trailhead Playground) to build real dataflows, recipes, dashboards, and at least one Einstein Discovery model. The Data Layer section (23%) is the most heavily weighted and requires practical dataflow/recipe knowledge.',
  },
]

export default function CrmAnalyticsStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="crm-analytics" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Weightings by Section</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-700 mt-4">
          Already have section-level scores from a practice test? Run them through the{' '}
          <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Exam Score Calculator
          </Link>{' '}
          to see where you stand against the 65% pass mark.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Domain Covers</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'CRM Analytics overview, enable CRM Analytics in a Trailhead Playground. Navigate Analytics Studio. Create your first dataset from Salesforce data using a dataflow.' },
            { week: 'Week 2', focus: 'Dataflows. Build a dataflow with sfdcDigest, augment (join), filter, and computeExpression nodes. Register the output dataset. Schedule the dataflow and review the Monitor tab.' },
            { week: 'Week 3', focus: 'Recipes. Build a recipe in Data Prep. Join two datasets. Add formula and bucket nodes. Schedule the recipe. Compare the recipe approach to the equivalent dataflow.' },
            { week: 'Week 4', focus: 'Dashboard design. Build a dashboard with chart, table, number, and filter widgets. Configure faceting between widgets. Add a date filter and a global filter bar.' },
            { week: 'Week 5', focus: 'Lenses and SAQL, explore a dataset using the lens builder. Write basic SAQL queries: groupby, foreach, order, limit. Use cogroup to join two datasets in a SAQL query.' },
            { week: 'Week 6', focus: 'Row-level security, configure a security predicate on a dataset. Test that different users see different rows. Implement sharing inheritance from Salesforce using role hierarchy.' },
            { week: 'Week 7', focus: 'Einstein Discovery (12%), build a model and choose between numeric, binary, and multi-classification predictions. Review a Model Card to interpret performance. Enable a prediction field on a Lightning record page.' },
            { week: 'Week 8', focus: 'Full mock exams. Data Layer (23%) and Analytics Dashboard Implementation (19%) are the largest sections. Focus on dataflow transformation node types, security predicate logic, and Einstein Discovery model evaluation. Aim for 75%+.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Working Through Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Dataflows vs recipes:</strong> For complex transformations requiring custom JSON logic. Use a dataflow. For visual, maintainable ETL without coding. Use a recipe. When both could work, the exam typically favours recipes as the modern recommended approach.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>RLS predicates must be applied to every dataset:</strong> Row-level security does not cascade. If a user joins two datasets in a dashboard query, the predicate must be applied to both datasets separately. Forgetting this is a common exam mistake.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Faceting vs filtering:</strong> Faceting allows widgets to filter other widgets on the same dashboard when a user makes a selection. It is enabled per-widget in the dashboard designer. Global filters apply to all widgets simultaneously. Know which to use for a given requirement.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Connected datasets for live data:</strong> If the exam describes a need for real-time or very fresh data without a dataflow/recipe delay, connected datasets (live query to Salesforce) is the answer, at the cost of slower query performance than indexed datasets.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Practice-Test Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. CRM Analytics is very tool-specific, knowing the exact transformation nodes in a dataflow (sfdcDigest, augment, computeExpression, flatten) and SAQL syntax is tested directly. There is no shortcut other than hands-on practice in the tool.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10 Concepts Worth Reviewing</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Dataflow transformation nodes: sfdcDigest, augment, computeExpression, flatten, filter, sfdcRegister</li>
          <li>Recipes vs dataflows: when to use each, how they differ in architecture</li>
          <li>SAQL: q(), groupby, foreach, cogroup, order, limit</li>
          <li>Dashboard widgets: chart, table, number, filter, date, and configuration options</li>
          <li>Binding types: static, column, measure, how they link widgets to queries</li>
          <li>Faceting: enabling between widgets, how user selection propagates</li>
          <li>Row-level security predicates: syntax, user attributes, testing RLS</li>
          <li>Sharing inheritance: replicating Salesforce record access in analytics datasets</li>
          <li>Connected datasets: live query to Salesforce, performance trade-offs</li>
          <li>Analytics templates: structure, customisation, app creation from templates</li>
          <li>Einstein Discovery prediction types: numeric, binary, and multi-classification, and which fits a given business question</li>
          <li>Model Cards: reading model performance to decide whether to maintain, retrain, or adjust a model</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>


      <DifficultyHeatmap slug="crm-analytics-einstein-discovery-consultant" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Try It Yourself</h2>
        <p className="text-white mb-6">Free CRM Analytics practice questions covering dataflows, recipes, SAQL, and dashboard design.</p>
        <Link
          href="#practice-questions"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Related: <Link href="/certifications/tableau-data-analyst" className="inline-block py-1 underline hover:text-white font-medium">Tableau Data Analyst study guide</Link>
        </p>
      </div>
    </div>
  )
}