import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'crm-analytics-einstein-discovery-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `CRM Analytics study guide: dataflows, recipes, SAQL, dashboards. $200, 60 questions, ~67% pass. Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/crm-analytics-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/crm-analytics-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `CRM analytics study guide, salesforce tableau CRM certification 2026, Einstein analytics exam prep, SAQL salesforce analytics`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CRM Analytics Study Guide', url: '/crm-analytics-study-guide' },
]

const examSections = [
  { name: 'Data Integration', weight: 23, note: 'Dataflows: transformations (augment, computeExpression, flatten, filter, sfdcDigest, sfdcRegister), scheduling, output datasets. Recipes: Data Prep UI, node types (input, output, formula, bucket, join, filter, aggregate), recipe scheduling. External data upload: CSV connector, SFTP. Connected datasets: live Salesforce data without dataflow. When to use dataflows vs recipes.' },
  { name: 'Dashboards & Lenses', weight: 19, note: 'Dashboard designer: widget types (chart, table, number, filter, date), binding types (static, column, measure). SAQL in dashboards: inline queries. Lenses: exploratory analysis on a single dataset. Dashboard JSON editor for advanced customisation. Faceting: how widgets filter each other. Global filters and local filters. Mobile dashboard considerations.' },
  { name: 'Analytics Projects & Solutions', weight: 18, note: 'Analytics templates: pre-built app templates for specific use cases (Sales Analytics, Service Analytics, CRM Analytics for Financial Services). Customising templates. Creating apps from scratch vs from templates. Analytics Studio navigation: apps, datasets, dashboards, lenses, recipes. Embedded analytics in Salesforce pages using Wave dashboard component or Analytics tab.' },
  { name: 'Analytics Ecosystem & Admin', weight: 17, note: 'Platform overview: Analytics Studio, Data Manager, Data Integration Studio. Dataset limits and row counts. Scheduled dataflow and recipe jobs: run order, failure handling, dependency. Analytics notifications: alert users when metric thresholds are crossed. Analytics home page, navigation, and user experience configuration.' },
  { name: 'Security & Row-Level Security', weight: 12, note: 'Dataset-level security: private vs shared datasets. Row-level security (RLS): predicate logic, security predicates on datasets to filter records per user. Sharing inheritance from Salesforce: replicating record-level security in analytics datasets using role hierarchy sharing. User attributes: dynamic predicates based on user profile fields. Dataset sharing with groups and roles.' },
  { name: 'SAQL & Recipes', weight: 11, note: 'SAQL (Salesforce Analytics Query Language): q() function, groupby, foreach, order, limit, offset, cogroup for joins. SAQL in lenses vs in dashboard queries. Recipes formula nodes: date functions, string manipulation, conditional logic, bucket expressions. Common recipe transformations for data cleansing and enrichment.' },
]

const faqItems = [
  {
    question: 'What is Salesforce CRM Analytics?',
    answer: 'CRM Analytics (formerly Tableau CRM, formerly Einstein Analytics) is Salesforce\'s native business intelligence and analytics platform. It allows users to connect Salesforce and external data, build interactive dashboards, and surface AI-powered insights within the Salesforce UI. The CRM Analytics and Einstein Discovery Consultant certification validates skills in designing, building, and securing analytics solutions. The exam has 60 questions, 105-minute time limit, ~67% passing score, and a $200 fee.',
  },
  {
    question: 'What is the difference between a dataflow and a recipe in CRM Analytics?',
    answer: 'Dataflows are the original ETL mechanism in CRM Analytics — they use JSON-based transformation nodes (augment, filter, computeExpression, flatten, sfdcDigest, sfdcRegister) and run on a scheduled job. Recipes are the newer visual ETL builder — a drag-and-drop Data Prep UI with node types for joining, filtering, aggregating, and transforming data. Recipes are easier to build and maintain for most use cases. Dataflows offer more control for complex transformations and are still used in many legacy implementations.',
  },
  {
    question: 'What is SAQL in CRM Analytics?',
    answer: 'SAQL (Salesforce Analytics Query Language) is the query language used by CRM Analytics to query datasets. It resembles SQL but is designed for CRM Analytics datasets rather than relational databases. Key functions: q() wraps the dataset reference, groupby groups results, foreach iterates over groups, cogroup joins two datasets. SAQL is used in lens and dashboard queries when the visual designer is insufficient for complex calculations.',
  },
  {
    question: 'What is row-level security in CRM Analytics?',
    answer: 'Row-level security (RLS) in CRM Analytics controls which rows of a dataset a user can see when they view a dashboard or lens. It is implemented via security predicates — filter expressions evaluated per user based on their attributes (role, profile, user fields). For example, a predicate like \'Region\' == "$User.Region__c" would limit each user to rows matching their assigned region. Without RLS, all users with dataset access see all rows regardless of their Salesforce record-level access.',
  },
  {
    question: 'How long should I study for the CRM Analytics exam?',
    answer: 'Plan for 8–10 weeks with 10–12 hours per week. CRM Analytics requires hands-on experience — many exam questions test specific configuration steps in Analytics Studio that you cannot learn from reading alone. Use a free CRM Analytics developer org (available via Trailhead Playground) to build real dataflows, recipes, and dashboards. The Data Integration section (23%) is the most heavily weighted and requires practical dataflow/recipe knowledge.',
  },
]

export default function CrmAnalyticsStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/crm-analytics-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce CRM Analytics Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the CRM Analytics exam — dataflows, recipes, SAQL, dashboard design, row-level security, and analytics apps.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~67%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
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
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
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
            { week: 'Week 1', focus: 'CRM Analytics overview — enable CRM Analytics in a Trailhead Playground. Navigate Analytics Studio. Create your first dataset from Salesforce data using a dataflow.' },
            { week: 'Week 2', focus: 'Dataflows — build a dataflow with sfdcDigest, augment (join), filter, and computeExpression nodes. Register the output dataset. Schedule the dataflow and review the Monitor tab.' },
            { week: 'Week 3', focus: 'Recipes — build a recipe in Data Prep. Join two datasets. Add formula and bucket nodes. Schedule the recipe. Compare the recipe approach to the equivalent dataflow.' },
            { week: 'Week 4', focus: 'Dashboard design — build a dashboard with chart, table, number, and filter widgets. Configure faceting between widgets. Add a date filter and a global filter bar.' },
            { week: 'Week 5', focus: 'Lenses and SAQL — explore a dataset using the lens builder. Write basic SAQL queries: groupby, foreach, order, limit. Use cogroup to join two datasets in a SAQL query.' },
            { week: 'Week 6', focus: 'Row-level security — configure a security predicate on a dataset. Test that different users see different rows. Implement sharing inheritance from Salesforce using role hierarchy.' },
            { week: 'Week 7', focus: 'Analytics templates and apps — explore the Sales Analytics app template. Customise an existing template. Understand the template structure (JSON files, assets, dataflows).' },
            { week: 'Week 8', focus: 'Full mock exams. Data Integration (23%) and Dashboards (19%) are the largest sections. Focus on dataflow transformation node types and security predicate logic. Aim for 75%+.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Dataflows vs recipes:</strong> For complex transformations requiring custom JSON logic, use a dataflow. For visual, maintainable ETL without coding, use a recipe. When both could work, the exam typically favours recipes as the modern recommended approach.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>RLS predicates must be applied to every dataset:</strong> Row-level security does not cascade. If a user joins two datasets in a dashboard query, the predicate must be applied to both datasets separately. Forgetting this is a common exam mistake.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Faceting vs filtering:</strong> Faceting allows widgets to filter other widgets on the same dashboard when a user makes a selection. It is enabled per-widget in the dashboard designer. Global filters apply to all widgets simultaneously. Know which to use for a given requirement.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Connected datasets for live data:</strong> If the exam describes a need for real-time or very fresh data without a dataflow/recipe delay, connected datasets (live query to Salesforce) is the answer — at the cost of slower query performance than indexed datasets.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. CRM Analytics is very tool-specific — knowing the exact transformation nodes in a dataflow (sfdcDigest, augment, computeExpression, flatten) and SAQL syntax is tested directly. There is no shortcut other than hands-on practice in the tool.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Dataflow transformation nodes: sfdcDigest, augment, computeExpression, flatten, filter, sfdcRegister</li>
          <li>Recipes vs dataflows: when to use each, how they differ in architecture</li>
          <li>SAQL: q(), groupby, foreach, cogroup, order, limit</li>
          <li>Dashboard widgets: chart, table, number, filter, date — and configuration options</li>
          <li>Binding types: static, column, measure — how they link widgets to queries</li>
          <li>Faceting: enabling between widgets, how user selection propagates</li>
          <li>Row-level security predicates: syntax, user attributes, testing RLS</li>
          <li>Sharing inheritance: replicating Salesforce record access in analytics datasets</li>
          <li>Connected datasets: live query to Salesforce, performance trade-offs</li>
          <li>Analytics templates: structure, customisation, app creation from templates</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="crm-analytics-einstein-discovery-consultant" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Free CRM Analytics practice questions covering dataflows, recipes, SAQL, and dashboard design.</p>
        <Link
          href="/certifications/crm-analytics-einstein-discovery-consultant"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Related: <Link href="/tableau-data-analyst-study-guide" className="underline hover:text-white font-medium">Tableau Data Analyst study guide</Link>
        </p>
      </div>
    </div>
  )
}