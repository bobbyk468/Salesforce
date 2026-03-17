import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'sales-cloud'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Sales Cloud Consultant study guide: exam sections, territory, forecasting, solution design. Pass first attempt Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sales-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sales-cloud-consultant-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Sales Cloud Consultant study guide ${RELEASE_CURRENT}, how to pass Sales Cloud Consultant exam, Salesforce Sales Cloud certification prep, Sales Cloud Consultant exam sections, territory management forecasting exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Sales Cloud Consultant Study Guide', url: '/sales-cloud-consultant-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Sales Cloud Consultant exam format?',
    answer: 'The Sales Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It requires Salesforce Administrator certification (ADM-201) as a prerequisite and tests your ability to design and implement Sales Cloud solutions for business requirements.',
  },
  {
    question: 'What are the highest-weight Sales Cloud Consultant exam sections?',
    answer: 'Sales Practices (25%) is the largest section, covering how to translate business requirements into Sales Cloud configuration recommendations. Implementation Strategies and Best Practices (22%) is second, covering solution design decisions, data migration, and change management. Together these account for nearly half the exam.',
  },
  {
    question: 'How hard is the Sales Cloud Consultant exam?',
    answer: 'Sales Cloud Consultant is moderate difficulty. Candidates with ADM-201 knowledge and active Sales Cloud implementation experience (configuring opportunity stages, territories, forecasting) typically pass within 4–6 weeks of preparation. The hardest sections are Enterprise Territory Management (many configuration nuances) and forecasting (multiple forecast types with different behaviours).',
  },
  {
    question: 'What is Enterprise Territory Management and why is it hard?',
    answer: 'Enterprise Territory Management (ETM) is the advanced territory system that allows hierarchical territory structures, multiple territory types, and assignment rules. It is different from Classic Territories (the legacy system). The exam tests ETM configuration: territory models, territory types, assignment rules, territory hierarchies, and how opportunities are associated to territories. Most candidates find ETM the hardest single topic because it is configuration-heavy with many interdependent settings.',
  },
]

const examSections = [
  { name: 'Sales Practices', weight: 25, note: 'Industry knowledge, sales methodologies, mapping business requirements to Sales Cloud features, ROI justification' },
  { name: 'Implementation Strategies', weight: 22, note: 'Solution design decisions, when to customise vs configure, data migration planning, testing strategies, change management' },
  { name: 'Sales Cloud Solution Design', weight: 15, note: 'Territory management, forecasting setup, opportunity management design, CPQ integration considerations' },
  { name: 'Marketing and Leads', weight: 13, note: 'Lead lifecycle, lead assignment rules, conversion configuration, campaign management, duplicate management' },
  { name: 'Opportunity Management', weight: 12, note: 'Opportunity stages, probability, sales paths, big deal alerts, similar opportunities, product and price book configuration' },
  { name: 'Account and Contact Management', weight: 8, note: 'Account hierarchies, contact roles, activity management, account teams, partner relationships' },
  { name: 'Consulting Practices', weight: 5, note: 'Gathering requirements, facilitating workshops, managing stakeholder expectations, project documentation' },
]

export default function SalesCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sales-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sales Cloud Consultant Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Sales Cloud Consultant certification validates your ability to implement end-to-end
          Sales Cloud solutions — from translating business requirements into configuration decisions to
          designing territory hierarchies, forecasting models, and opportunity management workflows.
          This guide covers every exam section at the depth needed to pass.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Sales Cloud Consultant Exam at a Glance</h2>
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
          ADM-201 certification recommended before attempting. Retake fee: $100. 2+ years of Sales Cloud implementation experience recommended.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Sales Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Sales Practices (25%) + Implementation Strategies (22%) = 47% of the exam. Master these two before the deep technical sections.
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
              Sales Practices (25%)
            </p>
            <p>This is not a purely technical section — it tests your understanding of sales business processes and how to translate them into Salesforce. Know common sales methodologies (MEDDIC, Challenger, solution selling) and how they map to Sales Cloud features. Questions ask: given this business requirement (e.g., &ldquo;sales managers need to see only their team&apos;s pipeline&rdquo;), which Sales Cloud feature or configuration achieves it? <strong>Common mistake:</strong> jumping to a technical solution without understanding the business need first.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Implementation Strategies (22%)
            </p>
            <p>Tests your ability to design a Sales Cloud implementation plan. Key areas: when to configure vs customise vs buy from AppExchange, data migration strategy (Extract-Transform-Load sequence, data validation before migration), testing phases (unit, UAT, regression), and change management (training, adoption measurement, rollout strategy). Know the difference between a data migration and a data integration — migration is a one-time move; integration is ongoing sync.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Sales Cloud Solution Design (15%)
            </p>
            <p>The most technically demanding section. <strong>Territory Management:</strong> Enterprise Territory Management (ETM) vs Classic Territories — ETM supports multiple territory models, territory types, and rule-based assignment. Know the ETM object model: Territory Model → Territory Type → Territory → Territory Assignment Rule. <strong>Forecasting:</strong> Collaborative Forecasting (the current standard) supports multiple forecast types per org. Know the difference between Forecast Category (from opportunity stage) and Forecast Override (manager adjustments). <strong>CPQ:</strong> know at a conceptual level when a CPQ tool is needed vs standard Products and Price Books.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Marketing and Leads (13%)
            </p>
            <p>Lead lifecycle from creation to conversion: lead sources, lead assignment rules (routing to queues or users based on criteria), web-to-lead forms, lead conversion (what maps to Account, Contact, Opportunity and what does not). Duplicate management: matching rules vs duplicate rules — matching rules identify duplicates; duplicate rules define what to do when duplicates are found (alert, block, merge). Campaign management: campaign member statuses, campaign influence, and ROI reporting.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Opportunity Management (12%)
            </p>
            <p>Opportunity stages and the sales path: know that stages drive forecast categories, and that the stage sequence design is a critical implementation decision. Products and Price Books: standard price book (default), custom price books (for different customer segments or regions). Know how price books are assigned to opportunities and how product schedules work for recurring revenue. Big deal alerts: notify users when an opportunity exceeds a threshold value.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Sales Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Sales Practices (25%):</strong> Study sales methodologies and how they map to Salesforce. Review real-world Sales Cloud implementations you have done. Practice explaining requirements-to-solution decisions out loud — the exam tests consultant thinking, not just configuration knowledge.</p>
          <p><strong>Week 2 — Implementation Strategies (22%):</strong> Study implementation lifecycle: requirements gathering → solution design → build → test → deploy. Review data migration methodology, ETL sequence, and change management. Practice: design a data migration plan for moving opportunities from a legacy CRM to Salesforce.</p>
          <p><strong>Week 3 — Territory Management &amp; Forecasting (key parts of 15%):</strong> This week alone on ETM and Collaborative Forecasting — these are the most complex topics. Enable ETM in a sandbox org, create a territory model with hierarchy, and configure assignment rules. Set up Collaborative Forecasting with at least two forecast types.</p>
          <p><strong>Week 4 — Leads, Opportunities, Accounts (13% + 12% + 8%):</strong> Lead lifecycle, assignment rules, duplicate management, opportunity stage design, products and price books, account hierarchies. Practice: configure a complete lead-to-opportunity-to-close workflow in a Developer Edition org.</p>
          <p><strong>Week 5 — Consulting Practices &amp; Targeted Revision:</strong> Review consulting skills (requirements workshops, stakeholder management), then revisit weakest sections from practice exams.</p>
          <p><strong>Week 6:</strong> Timed full mocks (60 Q / 105 min). Score 75%+ consistently before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Sales Cloud Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Territory questions:</strong> ETM is the answer when the org needs multiple territory types (geographic + product-based), rule-based assignment, or territory hierarchies. Classic Territories is legacy. If the question mentions &ldquo;territory models&rdquo; or &ldquo;multiple active territory hierarchies&rdquo;, the answer is ETM. If it just says &ldquo;territories&rdquo; without qualification, assume ETM for any new implementation.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Forecasting questions:</strong> Identify what the manager needs: to see team roll-up forecasts (Collaborative Forecasting with manager override), to track quotas vs pipeline (quota management + Collaborative Forecasting), or to see historical accuracy (Einstein Forecasting). Forecast categories (Commit, Best Case, Pipeline, Omitted) are set by opportunity stage — the mapping is configurable per stage.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Build vs buy questions:</strong> If the requirement is standard Sales Cloud functionality (opportunities, forecasting, territories), configure. If it requires deep customisation that would be expensive to build and maintain, recommend AppExchange. If it needs complex CPQ logic (multi-level configuration, guided selling), recommend a CPQ tool. The exam rewards the most practical, least custom-code solution.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most common failure mode for Sales Cloud Consultant is underestimating ETM and forecasting complexity.
          If you are consistently missing territory management questions on mocks, spend another week specifically
          in a sandbox configuring ETM from scratch. Theory alone is insufficient for this section.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>ETM object model: Territory Model → Territory Type → Territory → Assignment Rules</li>
          <li>Collaborative Forecasting: forecast categories (Commit, Best Case, Pipeline) and how they map to stages</li>
          <li>Lead conversion: what fields map automatically vs what requires manual entry</li>
          <li>Duplicate management: matching rules (find duplicates) vs duplicate rules (what to do)</li>
          <li>Products and Price Books: standard price book, custom price books, product schedules</li>
          <li>Opportunity stages → Forecast Category mapping and why it matters</li>
          <li>Account hierarchy: how sharing rolls up through the hierarchy</li>
          <li>Campaign influence: how to attribute revenue to campaigns</li>
          <li>When to use Configure vs Customise vs Buy (AppExchange)</li>
          <li>Data migration sequence: extract, transform, validate, load — always validate before loading</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Sales Cloud Consultant practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sales Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/sales-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Exam Tips
          </Link>
          <Link href="/sales-cloud-vs-service-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud vs Service Cloud
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Go After Sales Cloud Consultant</h2>
        <p className="text-sm text-gray-700 mb-3">
          Once you&apos;ve passed Sales Cloud Consultant, you&apos;re well-positioned for other high-value consultant credentials:
        </p>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>
            Add{' '}
            <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">
              Service Cloud Consultant
            </Link>
            {' '}if you work with support teams or combined sales + service centres.
          </li>
          <li>
            If you design partner or customer portals,{' '}
            <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">
              Experience Cloud Consultant
            </Link>
            {' '}is a natural follow-on once you understand core CRM objects.
          </li>
          <li>
            For mid-term career growth, combine Sales Cloud with{' '}
            <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">
              Advanced Administrator
            </Link>
            {' '}to demonstrate both solution design and deep platform governance.
          </li>
        </ul>
      </section>

      
      <DifficultyHeatmap slug="sales-cloud" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Sales Cloud Consultant free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/sales-cloud"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Sales Cloud Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}