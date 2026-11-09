/* Ported from /data-architect-study-guide, merged into /certifications/data-architect in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'data-architect'
const pageTitle = `ARC-801 Platform Data Architect Study Guide [${RELEASE_YEAR}]`
const pageDescription = 'Study the six Platform Data Architect exam domains, including large data volumes, master data patterns, and migration strategies.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data Architect', url: '/certifications/data-architect' },
  { name: 'Data Architect Study Guide', url: '/data-architect-study-guide' },
]

const examSections = [
  { name: 'Data Modeling/Database Design', weight: 25, note: 'Compare data model designs, platform object features, business and technical metadata, big objects, security and sharing constraints, and data-skew trade-offs.' },
  { name: 'Master Data Management', weight: 5, note: 'Review MDM styles, consolidation and harmonization, survivorship criteria, external reference data, canonical models, hierarchy management, and golden-record decisions.' },
  { name: 'Salesforce Data Management', weight: 25, note: 'Study license and object choices, consistent persistence, a single customer view, and consolidating or working across multiple Salesforce instances.' },
  { name: 'Data Governance', weight: 10, note: 'Review privacy-aware data models, identification and protection of sensitive information, and enterprise data-governance approaches.' },
  { name: 'Large Data Volume Considerations', weight: 20, note: 'Study scalable models and performance, archiving and purging plans, and when to use virtualized data.' },
  { name: 'Data Migration', weight: 15, note: 'Review data quality at load time, migration performance for large volumes, and Salesforce data export approaches.' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Data Architect certification?',
    answer: 'The Salesforce Certified Platform Data Architect exam has 60 scored multiple-choice questions plus up to five unscored questions, 105 minutes, a 58% passing score, a US$400 registration fee and a US$200 retake fee, plus applicable taxes. Salesforce lists no prerequisite.',
  },
  {
    question: 'What is large data volume (LDV) and why is it important?',
    answer: 'Large data volume (LDV) design considers data-model scalability, query performance, archiving and purging, and virtualized data options. Custom indexes and skinny tables serve different purposes and should be considered against query patterns and platform guidance.',
  },
  {
    question: 'What is data skew in Salesforce?',
    answer: 'Data skew can contribute to record-locking or sharing-calculation issues. Salesforce exam objectives call out record locking, sharing calculation issues, and excessive child-to-parent relationships as considerations when avoiding skew.',
  },
  {
    question: 'What is Salesforce Shield and when is it required?',
    answer: 'Salesforce Shield includes capabilities such as Platform Encryption, Event Monitoring, and Field Audit Trail. Whether a Shield feature is appropriate depends on the organization\'s security, audit, and compliance requirements; check current Salesforce documentation for feature availability, supported data, and retention configuration.',
  },
  {
    question: 'How long should I study for the Data Architect exam?',
    answer: 'Plan for 10–12 weeks with 10–15 hours per week. Hands-on experience with SOQL query optimisation, Bulk API loading, and data model design is essential. Candidates without LDV experience should spend extra time on that section (20% of exam) as it tests trade-offs that are hard to understand without project experience.',
  },
]

export default function DataArchitectStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="data-architect" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '58%' },
          { label: 'Exam Fee', value: '$400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">10-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Data model foundations, revisit object relationships (lookup, master-detail, junction), field types, record types, and custom metadata types vs custom settings.' },
            { week: 'Week 2', focus: 'Schema design, design a data model for a complex scenario (e.g., multi-product company with accounts, contacts, opportunities, assets). Review Salesforce sharing implications of your model.' },
            { week: 'Week 3', focus: 'Master Data Management, study MDM patterns (consolidation, coexistence, centralisation). Configure Duplicate Management: matching rules, duplicate rules, and merge.' },
            { week: 'Week 4', focus: 'Large Data Volume fundamentals, skinny tables, custom indexes, selective SOQL queries. Run EXPLAIN PLAN on slow queries in your dev org.' },
            { week: 'Week 5', focus: 'Data skew, ownership skew and lookup skew. Practice identifying skew in data model diagrams and selecting the correct mitigation.' },
            { week: 'Week 6', focus: 'Archiving strategies, big objects (create one in your dev org), external archiving patterns, Salesforce Connect and external objects for federated data.' },
            { week: 'Week 7', focus: 'Review governance objectives: data stewardship, metadata, privacy, classification, and protection of personal and sensitive data.' },
            { week: 'Week 8', focus: 'Data migration: ETL tool comparison, External IDs for upsert, Bulk API 2.0 job lifecycle, data validation and rollback strategy.' },
            { week: 'Week 9', focus: 'Governance, data stewardship, metadata management, data quality KPIs, master data ownership. Salesforce Health Check and Security Scoring.' },
            { week: 'Week 10', focus: 'Review all six official domains, revisit any weak areas, and use practice questions to explain your design choices.' },
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
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>LDV mitigation hierarchy:</strong> When performance is the problem, first check if a custom index can help. If not, consider skinny tables. If the model itself causes skew, redesign the relationship or use big objects for archiving.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>MDM pattern selection:</strong> Consolidation = merge all data into Salesforce as master. Coexistence = Salesforce is one of several authoritative systems. Centralisation = Salesforce is the single hub but doesn’t own all data. Match the pattern to the business scenario described.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Data protection:</strong> Select classification, access, retention, and encryption controls according to the sensitivity of the data and applicable requirements; no single control is appropriate for every use case.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>External IDs for migration:</strong> Where source-system identifiers are available and suitable, External ID fields can support upsert and relationship mapping without relying on Salesforce record IDs.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Practice-Test Benchmark</h2>
        <p className="text-sm text-gray-700">Use practice questions to check your understanding of the published objectives. Being able to explain the assumptions and trade-offs behind a design choice is a useful self-assessment.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10 Concepts Worth Reviewing</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Object relationship types and when to use lookup vs master-detail</li>
          <li>Three MDM patterns: consolidation, coexistence, centralisation, and when to use each</li>
          <li>Duplicate Management: matching rules, duplicate rules, merge workflow</li>
          <li>LDV: custom indexes, skinny tables, selective SOQL, EXPLAIN PLAN</li>
          <li>Ownership skew and lookup skew: causes, symptoms, and mitigation</li>
          <li>Big objects: use cases, limitations, Async SOQL for queries</li>
          <li>Salesforce Shield: Platform Encryption, Event Monitoring, Field Audit Trail</li>
          <li>Deterministic vs probabilistic encryption and searchability implications</li>
          <li>Bulk API 2.0: job types, serial vs parallel, ingest lifecycle</li>
          <li>External IDs: creating them, using upsert, relationship mapping in migration</li>
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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Plan Your Next Certification</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link>, <Link href="/certifications/system-architect" className="text-salesforce-blue font-medium hover:underline">System Architect</Link>, or <Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="data-architect" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Try It Yourself</h2>
        <p className="text-white mb-6">Test yourself with free Data Architect practice questions covering the six official exam domains.</p>
        <Link
          href="#practice-questions"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
