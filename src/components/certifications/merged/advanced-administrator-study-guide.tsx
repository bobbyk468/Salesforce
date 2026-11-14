/* Ported from /advanced-administrator-study-guide, merged into /certifications/advanced-administrator in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
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
const slug = 'advanced-administrator'
const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Review seven Advanced Administrator exam sections, including automation, security, data management, and scenario study strategies.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Advanced Administrator', url: '/certifications/advanced-administrator' },
  { name: 'Advanced Administrator Study Guide', url: '/advanced-administrator-study-guide' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Advanced Administrator exam format?',
    answer: 'The listed format is 60 questions in 105 minutes, with a 65% passing score. The exam fee is $200 and the retake fee is $100. You must hold the Administrator credential first. Review the official guide before booking.',
  },
  {
    question: 'How is Advanced Administrator different from ADM-201?',
    answer: 'ADM-201 covers a broad set of administration fundamentals. Advanced Administrator builds on that knowledge with more complex security, automation, data, and deployment scenarios.',
  },
  {
    question: 'What are the highest-weight Advanced Administrator exam sections?',
    answer: 'Security and Access and Process Automation each account for 20% of the listed outline. Objects and Applications accounts for 19%. Together they represent 59%.',
  },
  {
    question: 'Do I need to know Apex or code for the Advanced Administrator exam?',
    answer: 'The exam focuses on administration and declarative tools. Review when a requirement may need code, and how a Flow can call an invocable action; you do not need to write Apex for this exam.',
  },
]

const examSections = [
  { name: 'Security and Access', weight: 20, note: 'Permissions, sharing, and access troubleshooting' },
  { name: 'Objects and Applications', weight: 19, note: 'Object configuration and application features' },
  { name: 'Auditing and Monitoring', weight: 10, note: 'Setup history and monitoring tools' },
  { name: 'Cloud Applications', weight: 11, note: 'Sales and service features' },
  { name: 'Data and Analytics Management', weight: 13, note: 'Data quality, reporting, and dashboards' },
  { name: 'Environment Management and Deployment', weight: 7, note: 'Sandboxes, deployment, and change management' },
  { name: 'Process Automation', weight: 20, note: 'Flows and approval processes' },
]

export default function AdvancedAdministratorStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="advanced-administrator" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Advanced Administrator Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          The Administrator credential is a prerequisite. The listed retake fee is $100. Hands-on administration experience can help you prepare.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Advanced Administrator Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Security and Access and Process Automation each account for 20% of the listed outline. Use the other section weights to plan the rest of your study.
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
              <p className="text-xs text-gray-600">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Security and Access (20%)
            </p>
            <p>Compare <strong>session-based permission sets</strong>, which can be activated for a session, with <strong>permission set groups</strong>, which bundle permissions. Review the purposes of Salesforce Shield features: Field Audit Trail for extended history, Event Monitoring for activity logs, and Platform Encryption for protecting supported data at rest.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Objects and Applications (19%)
            </p>
            <p><strong>External objects</strong> let users work with data stored outside Salesforce through Salesforce Connect. <strong>Big Objects</strong> store large volumes of data and use defined indexes for queries. <strong>Custom Metadata Types</strong> store configuration that can be deployed. <strong>Platform Events</strong> support event-driven messages between Salesforce and subscribers.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Auditing and Monitoring (10%)
            </p>
            <p><strong>Setup Audit Trail</strong> records setup changes; <strong>Field History Tracking</strong> records changes to selected fields. <strong>Event Monitoring</strong> provides activity logs, and <strong>Health Check</strong> helps review security settings. Practise choosing the tool that answers each audit question.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Cloud Applications (11%)
            </p>
            <p>For sales scenarios, review territory models, account assignment, opportunity splits, and forecasts. For service scenarios, compare Omni-Channel routing, entitlements, milestones, and the Knowledge article lifecycle.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data and Analytics Management (13%)
            </p>
            <p>Joined reports combine report blocks. Cross filters find records with or without related records, while bucket fields group values within a report. Review historical trending and how the running user affects a dashboard’s data.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Advanced Administrator Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1: Security and Access (20%):</strong> Compare session-based permission sets and permission set groups. Review when Field Audit Trail, Event Monitoring, and Platform Encryption may help, and inspect the Health Check settings available in your org.</p>
          <p><strong>Week 2: Objects and Applications (19%):</strong> Compare external objects and Big Objects. Review Custom Metadata Types, Custom Settings, and Platform Events. If you have suitable environments, practise moving a Custom Metadata Type with a change set.</p>
          <p><strong>Week 3: Auditing and Monitoring (10%):</strong> Compare Setup Audit Trail, Field History Tracking, and Event Monitoring. Review what each records and how long the information is available.</p>
          <p><strong>Week 4: Cloud Applications (11%): </strong> Review territory models, assignment rules, opportunity splits, and Collaborative Forecasting. Where your org supports it, practise setting up a territory model and assigning accounts.</p>
          <p><strong>Week 5: Data, Analytics, and Service Features:</strong> Compare queue-based and skills-based Omni-Channel routing. Review entitlements and milestones, then practise choosing duplicate management, mass transfer, or Data Loader for a data task.</p>
          <p><strong>Week 6:</strong> Review process automation, deployments, and analytics. Use timed practice tests to identify any topics that need more work.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Advanced Administrator Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Salesforce Shield questions:</strong> Compare the requirement with each Shield feature. Field Audit Trail extends supported field-history retention; Event Monitoring provides activity logs; Platform Encryption protects supported data at rest. Check the exact capability and licensing for the scenario.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Custom Metadata vs Custom Settings:</strong> Custom Metadata Type records can move as metadata between environments. Custom Settings store configuration data. Compare whether the values need to be deployed, changed in an org, or selected for different users or profiles.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Report type questions:</strong> A <strong>cross filter</strong> selects records with or without related records. A <strong>joined report</strong> combines report blocks. <strong>Historical Trending</strong> can show changes over time for supported data. Match the feature to the question and available report type.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Know You’re Ready</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Use your ADM-201 knowledge as a foundation, then practise the more advanced topics in the current outline. Review Shield, territory management, external objects, opportunity splits, and Omni-Channel where they apply to the requirements you are studying.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Salesforce Shield: compare Field Audit Trail, Event Monitoring, and Platform Encryption</li>
          <li>Session-based permission sets: review how activation is controlled</li>
          <li>Custom Metadata Types and Custom Settings: compare metadata and configuration data</li>
          <li>External Objects vs Big Objects: compare externally stored data with large-scale storage on Salesforce</li>
          <li>Platform Events: review publishing and subscribing to events</li>
          <li>Territory Management: review territory models, types, territories, and assignment rules</li>
          <li>Opportunity splits: review how revenue and overlay splits allocate credit</li>
          <li>Omni-Channel routing: compare queue-based and skills-based routing</li>
          <li>Entitlement milestones: review time targets and configured actions</li>
          <li>Joined reports and cross filters: compare report blocks with related-record filters</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Advanced Administrator practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Advanced Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Advanced Admin Exam Tips
          </span>
          <Link href="/certifications/administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            ADM-201 Study Guide (required first)
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          <Link href="/administrator-vs-advanced-administrator" className="text-salesforce-blue underline">
            ADM-201 vs Advanced Administrator, what’s different? →
          </Link>
        </p>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Your Next Certification Step</h2>
        <p className="text-sm text-gray-700">
          For a different next step, consider: <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="advanced-administrator" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Advanced Administrator free practice exam, scored with full explanations.</p>
        <Link href="#practice-questions"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Advanced Administrator Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}