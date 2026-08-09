import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'data-architect'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Salesforce Data Architect study guide (${RELEASE_CURRENT}): 5 exam sections, 10-week plan, LDV strategies, MDM patterns. $400 fee, 60 questions, ~68% passing score.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/data-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/data-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data Architect', url: '/certifications/data-architect' },
  { name: 'Data Architect Study Guide', url: '/data-architect-study-guide' },
]

const examSections = [
  { name: 'Data Modelling & Management', weight: 30, note: 'Designing scalable data models: object relationships (lookup, master-detail, many-to-many), field types, record types, and custom metadata. Evaluating when to use custom objects vs platform features. External objects and Salesforce Connect for federated data. Schema design for reporting performance.' },
  { name: 'Master Data Management', weight: 25, note: 'MDM patterns: consolidation, coexistence, and centralisation. Matching and merging duplicate records — Duplicate Management, matching rules, merge fields. Salesforce as system of record vs system of engagement. Golden record strategy and data stewardship workflows.' },
  { name: 'Large Data Volume Strategy', weight: 20, note: 'LDV best practices: skinny tables, custom indexes, division-based partitioning. Data skew: ownership skew, lookup skew, and their impact on record locking. Archiving strategies: big objects, external archiving via Heroku or third-party. Bulk API 2.0 for high-volume loads. SOQL optimisation for large datasets.' },
  { name: 'Data Governance & Compliance', weight: 15, note: 'Data governance frameworks, data stewardship roles, metadata management. Salesforce Shield: Platform Encryption (deterministic vs probabilistic), Event Monitoring, Field Audit Trail. GDPR and data residency considerations: field-level encryption, data masking, data retention policies.' },
  { name: 'Data Migration & ETL', weight: 10, note: 'ETL tool selection: Salesforce Data Loader, Informatica, Jitterbit, MuleSoft. Migration strategy: data profiling, cleansing, transformation, and validation. Bulk API vs REST API for migration volume. Rollback strategy and data validation post-migration. External IDs for upsert and relationship mapping.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Data Architect certification?',
    answer: 'The Salesforce Data Architect certification validates expertise in designing scalable data models, managing large data volumes, implementing MDM strategies, and enforcing data governance on the Salesforce platform. The exam has 60 questions, a 110-minute time limit, ~68% passing score, and a $400 fee. It is part of the Application Architect credential path.',
  },
  {
    question: 'What is large data volume (LDV) and why is it important?',
    answer: 'Large data volume refers to Salesforce orgs with millions of records that can cause query performance issues, record locking contention, and report timeouts. LDV best practices include creating custom indexes on frequently queried fields, using skinny tables (custom Salesforce indexes that pre-join columns), avoiding cross-object formula fields on large objects, and using ownership/lookup skew-aware design. The Data Architect exam heavily tests LDV trade-offs.',
  },
  {
    question: 'What is data skew in Salesforce?',
    answer: 'Data skew occurs when a disproportionate number of records share a common field value, causing performance problems. Ownership skew: many records owned by one user (e.g., integration user) — causes slow sharing rule calculations. Lookup skew: many child records on one parent record (e.g., 50,000 Contacts on one Account) — causes record locking during DML. The exam tests both types and the mitigation strategies.',
  },
  {
    question: 'What is Salesforce Shield and when is it required?',
    answer: 'Salesforce Shield is a set of security tools for regulated industries: Platform Encryption (encrypt data at rest, field-level), Event Monitoring (audit user actions via log files), and Field Audit Trail (retain field history for up to 10 years). Shield is required when compliance mandates (HIPAA, GDPR, PCI-DSS) require encryption of specific sensitive fields or long-term audit logs beyond standard field history retention (18 months).',
  },
  {
    question: 'How long should I study for the Data Architect exam?',
    answer: 'Plan for 10–12 weeks with 10–15 hours per week. Hands-on experience with SOQL query optimisation, Bulk API loading, and data model design is essential. Candidates without LDV experience should spend extra time on that section (20% of exam) as it tests trade-offs that are hard to understand without project experience.',
  },
]

export default function DataArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/data-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="data-architect"
        certName="Data Architect"
        description={pageDescription}
        pageUrl="/data-architect-study-guide"
      />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Data Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Salesforce Data Architect exam — data modelling, MDM patterns, large data volume strategy, Shield, and ETL design.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="data-architect-exam-tips" certName="Data Architect" />
      <CertInsightBlock certSlug="data-architect" />
      <ExamPricingCard
        certSlug="data-architect"
        certName="Data Architect"
        certPageSlug="data-architect"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '110 min' },
          { label: 'Passing Score', value: '~68%' },
          { label: 'Exam Fee', value: '$400' },
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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
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
            { week: 'Week 1', focus: 'Data model foundations — revisit object relationships (lookup, master-detail, junction), field types, record types, and custom metadata types vs custom settings.' },
            { week: 'Week 2', focus: 'Schema design — design a data model for a complex scenario (e.g., multi-product company with accounts, contacts, opportunities, assets). Review Salesforce sharing implications of your model.' },
            { week: 'Week 3', focus: 'Master Data Management — study MDM patterns (consolidation, coexistence, centralisation). Configure Duplicate Management: matching rules, duplicate rules, and merge.' },
            { week: 'Week 4', focus: 'Large Data Volume fundamentals — skinny tables, custom indexes, selective SOQL queries. Run EXPLAIN PLAN on slow queries in your dev org.' },
            { week: 'Week 5', focus: 'Data skew — ownership skew and lookup skew. Practice identifying skew in data model diagrams and selecting the correct mitigation.' },
            { week: 'Week 6', focus: 'Archiving strategies — big objects (create one in your dev org), external archiving patterns, Salesforce Connect and external objects for federated data.' },
            { week: 'Week 7', focus: 'Salesforce Shield — Platform Encryption (deterministic vs probabilistic), Event Monitoring log types, Field Audit Trail. Understand GDPR and compliance use cases.' },
            { week: 'Week 8', focus: 'Data migration — ETL tool comparison, External IDs for upsert, Bulk API 2.0 job lifecycle, data validation and rollback strategy.' },
            { week: 'Week 9', focus: 'Governance — data stewardship, metadata management, data quality KPIs, master data ownership. Salesforce Health Check and Security Scoring.' },
            { week: 'Week 10', focus: 'Full mock exams. Heavily focus on LDV and MDM scenarios — these are the most commonly missed. Aim for 75%+ before booking.' },
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
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>MDM pattern selection:</strong> Consolidation = merge all data into Salesforce as master. Coexistence = Salesforce is one of several authoritative systems. Centralisation = Salesforce is the single hub but doesn&apos;t own all data. Match the pattern to the business scenario described.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Encryption trade-offs:</strong> Deterministic encryption allows filtering/searching. Probabilistic encryption is more secure but you cannot filter/search on the field. GDPR questions often require deterministic encryption so data can be found and deleted.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>External IDs for migration:</strong> Always create External ID fields on objects before a data migration. They enable upsert (insert + update in one operation) and allow relationship mapping across systems without knowing Salesforce record IDs.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Practice-Test Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Data Architect questions are scenario-heavy — most describe a business situation with performance, compliance, or data quality challenges and ask for the optimal design. If you can justify your answer (not just identify it), you are ready.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10 Concepts Worth Reviewing</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Object relationship types and when to use lookup vs master-detail</li>
          <li>Three MDM patterns: consolidation, coexistence, centralisation — and when to use each</li>
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
        <p className="text-white mb-6">Test yourself with free Data Architect practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/data-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}