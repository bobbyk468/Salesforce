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
const slug = 'sharing-visibility-architect'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Sharing & Visibility Architect study guide: OWD, role hierarchy, sharing rules, Apex sharing. $400, ~68% pass Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sharing-visibility-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sharing-visibility-architect-study-guide`,
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
  { name: 'Sharing & Visibility Architect', url: '/certifications/sharing-visibility-architect' },
  { name: 'Sharing & Visibility Architect Study Guide', url: '/sharing-visibility-architect-study-guide' },
]

const examSections = [
  { name: 'Sharing Model Design', weight: 35, note: 'Designing the organisation-wide default (OWD) sharing model: Public Read/Write, Public Read Only, Private, Controlled by Parent. Role hierarchy and its implicit sharing. Sharing rules (criteria-based and ownership-based). Manual sharing. Account Teams, Opportunity Teams, and Case Teams for collaborative access.' },
  { name: 'Programmatic Sharing', weight: 20, note: 'Apex Managed Sharing: creating Share objects, assigning access levels (Read, Edit, All), Apex sharing reasons. When declarative sharing is insufficient and programmatic sharing is required. Sharing object naming convention (ObjectName + __Share). Maintaining Apex shares across ownership changes.' },
  { name: 'Performance & Scalability', weight: 20, note: 'Sharing recalculation: when it triggers, impact on system performance, deferral strategy. Ownership skew and its impact on sharing rule calculations. Large sharing groups and their performance implications. Monitoring sharing jobs in Setup. High-volume portal users (HVPU) and their sharing model restrictions.' },
  { name: 'Territory Management', weight: 15, note: 'Enterprise Territory Management: territory hierarchy, territory types, assignment rules. Differences from role hierarchy: territory assignment is non-hierarchical, supports multiple assignments. Account and opportunity access via territories. Territory model states (planning, active, archived). When to use territories vs roles.' },
  { name: 'Compliance & Field Access', weight: 10, note: 'Field-level security (FLS) vs record-level security — understanding that FLS controls field visibility independently of record access. Object permissions: CRUD controls. Profile vs permission set hierarchy for access control. Restriction rules and scoping rules (newer feature to restrict/grant record visibility without sharing recalculation).' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Sharing & Visibility Architect certification?',
    answer: 'The Sharing & Visibility Architect certification validates expertise in designing record-level security models for complex Salesforce orgs. It covers OWD settings, role hierarchy, sharing rules, manual sharing, Apex Managed Sharing, territory management, and performance implications of each design choice. The exam has 60 questions, ~110-minute time limit, ~68% passing score, and a $400 fee.',
  },
  {
    question: 'What is the difference between OWD, role hierarchy, and sharing rules?',
    answer: 'OWD (Organisation-Wide Default) sets the baseline record access for all users. Private OWD = users can only see their own records by default. Role hierarchy grants access upward — managers see records of their subordinates. Sharing rules extend access to specific groups of users beyond what OWD and role hierarchy provide. All three work together: OWD is the floor, role hierarchy and sharing rules open access above it.',
  },
  {
    question: 'What is Apex Managed Sharing and when is it needed?',
    answer: 'Apex Managed Sharing allows Apex code to programmatically insert records into the Share object (e.g., AccountShare, OpportunityShare) to grant specific users or groups access to records. It is needed when declarative sharing rules cannot express the required logic — for example, when access depends on complex business rules, related record data, or dynamic conditions that change frequently. Apex shares are maintained separately from declarative shares and survive sharing recalculation if you use a custom Apex sharing reason.',
  },
  {
    question: 'What is the difference between territory management and role hierarchy?',
    answer: 'Role hierarchy is a strict hierarchical structure — each user has one role, and managers automatically see subordinates\' records. Territory management is a flexible matrix structure — a user can be assigned to multiple territories, and territories can overlap. Territory management is better for complex sales territory models where geographic or industry segmentation doesn\'t fit neatly into a hierarchy. Both can coexist in the same org.',
  },
  {
    question: 'What are restriction rules and scoping rules?',
    answer: 'Restriction rules (Winter 2021+) allow you to restrict which records a user can see, even if they would otherwise have access via OWD or sharing. Use case: limit a user to only see their own region\'s records despite a Public Read/Write OWD. Scoping rules control which records appear in list views, related lists, and lookups for a user. Both avoid performance-costly sharing recalculations by filtering at query time rather than maintaining share records.',
  },
]

export default function SharingVisibilityArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sharing-visibility-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="sharing-visibility-architect"
        certName="Sharing & Visibility Architect"
        description={pageDescription}
        pageUrl="/sharing-visibility-architect-study-guide"
      />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Sharing &amp; Visibility Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Sharing &amp; Visibility Architect exam — OWD design, role hierarchy, sharing rules, Apex sharing, territory management, and performance.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="sharing-visibility-architect-exam-tips" certName="Sharing & Visibility Architect" />
      <CertInsightBlock certSlug="sharing-visibility-architect" />
      <ExamPricingCard
        certSlug="sharing-visibility-architect"
        certName="Sharing & Visibility Architect"
        certPageSlug="sharing-visibility-architect"
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">10-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'OWD fundamentals — set up a dev org with Private OWD on Account and Contact. Verify that users can only see their own records. Understand every OWD setting and its implications.' },
            { week: 'Week 2', focus: 'Role hierarchy — build a 3-level role hierarchy in your dev org. Assign users at different levels. Verify record visibility propagates upward correctly.' },
            { week: 'Week 3', focus: 'Sharing rules — create criteria-based and ownership-based sharing rules. Test edge cases: what happens when a rule conflicts with OWD? What about manual sharing overrides?' },
            { week: 'Week 4', focus: 'Teams (Account, Opportunity, Case) — configure Account Teams and Opportunity Teams. Understand default team settings and how teams interact with role hierarchy.' },
            { week: 'Week 5', focus: 'Apex Managed Sharing — create a Share record via Apex in your dev org. Use a custom sharing reason. Verify the share survives a sharing recalculation (it should, unlike manual shares).' },
            { week: 'Week 6', focus: 'Performance and scalability — study sharing recalculation triggers, ownership skew, and large sharing group performance. Learn about High-Volume Portal Users (HVPU) and their sharing restrictions.' },
            { week: 'Week 7', focus: 'Territory Management — enable Enterprise Territory Management in a dev org. Create territory types, territories, assignment rules. Assign an account and opportunity to territories. Compare with role hierarchy.' },
            { week: 'Week 8', focus: 'Restriction rules and scoping rules — configure a restriction rule for a specific profile in your dev org. Understand when to use restriction rules vs Private OWD.' },
            { week: 'Week 9', focus: 'Field-level security vs record security — practice designing a complete access model: OWD + role hierarchy + sharing rules + FLS + profiles + permission sets for a complex scenario.' },
            { week: 'Week 10', focus: 'Full mock exams. Sharing Model Design (35%) is the biggest section — prioritise it. Aim for 75%+ before booking.' },
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
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>OWD is the floor:</strong> Sharing can only open access above OWD — it can never restrict below it. If a scenario requires restricting access below what OWD would grant, use restriction rules or change the OWD setting itself.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Apex sharing for complex rules:</strong> If a sharing rule scenario cannot be expressed with criteria-based or ownership-based rules (e.g., &quot;share with user who owns the related object two levels up&quot;), the answer is Apex Managed Sharing.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>HVPU vs standard users:</strong> High-Volume Portal users do not have a role and cannot be in sharing groups. They use account-based or contact-based access instead. If a question involves high-volume external users, standard sharing rules do not apply.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Ownership skew degrades performance:</strong> When one user owns millions of records and their OWD is Private, sharing recalculation when that user&apos;s role changes is extremely slow. The fix is to use a separate integration user profile designed for bulk ownership, or re-architect using Public Read OWD with restriction rules.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. The sharing model section (35%) is scenario-heavy — you will be given complex multi-user access requirements and must select the most appropriate sharing architecture. Drawing out the access model before selecting an answer helps significantly.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>All OWD settings and their implications for each standard object</li>
          <li>Role hierarchy: implicit access, hierarchical vs non-hierarchical objects</li>
          <li>Sharing rules: criteria-based vs ownership-based, limitations (no OR conditions)</li>
          <li>Manual sharing: who can create, when it is removed, relationship to OWD</li>
          <li>Apex Managed Sharing: Share objects, access levels, custom sharing reasons</li>
          <li>Sharing recalculation: what triggers it, deferral, performance impact</li>
          <li>Ownership skew: definition, symptoms, and mitigation strategies</li>
          <li>Territory Management vs role hierarchy: when to use each</li>
          <li>Restriction rules: use cases, limitations, comparison to Private OWD</li>
          <li>High-Volume Portal Users: sharing model restrictions, account-based access</li>
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
          After this certification, consider: <Link href="/certifications/application-architect" className="text-salesforce-blue font-medium hover:underline">Application Architect</Link>, <Link href="/certifications/system-architect" className="text-salesforce-blue font-medium hover:underline">System Architect</Link>, or <Link href="/certifications/technical-architect" className="text-salesforce-blue font-medium hover:underline">Technical Architect (CTA)</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="sharing-visibility-architect" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free Sharing &amp; Visibility Architect practice questions.</p>
        <Link
          href="/certifications/sharing-visibility-architect"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}