import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const issuerGuideUrl = 'https://help.salesforce.com/s/articleView?id=005298947&language=en_US&type=1'
const slug = 'field-service'
const pageTitle = 'Agentforce Field Service & Operations Consultant Study Guide'
const pageDescription = 'Review the Agentforce Field Service and Operations Consultant exam domains, prerequisites, and scenario practice guidance.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/field-service-consultant-study-guide`,
    languages: { 'en-US': `${siteUrl}/field-service-consultant-study-guide`, 'x-default': `${siteUrl}/field-service-consultant-study-guide` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/field-service-consultant-study-guide`,
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
  { name: 'Field Service Consultant', url: '/certifications/field-service' },
  { name: 'Field Service Consultant Study Guide', url: '/field-service-consultant-study-guide' },
]

const examSections = [
  { name: 'Managing Resources', weight: 16, note: 'Crews and resource types; service territories and members; time sheets; skills and skill levels; operating hours; and license types.' },
  { name: 'Managing Work Orders', weight: 23, note: 'Work Order processes, parameters and Work Types; resource preferences; Products Required; Work Order Line Items; milestones; and relationships to Service Appointments.' },
  { name: 'Managing Scheduling and Optimization', weight: 28, note: 'Service Appointment actions and lifecycle; Schedule Policies; complex work; routing; Dispatcher Console filters; and scheduling and optimization services.' },
  { name: 'Configuring Mobility', weight: 10, note: 'Customer sign-off; Field Service app configuration; Field Service Mobile versus Salesforce Mobile; and mobile settings.' },
  { name: 'Managing Inventory', weight: 8, note: 'Price book models for Products Consumed, inventory models, and Return Orders.' },
  { name: 'Managing Assets', weight: 5, note: 'Procedures for maintaining and updating assets and asset relationships.' },
  { name: 'Configuring Maintenance Plans', weight: 5, note: 'Selecting an appropriate maintenance plan for a scenario.' },
  { name: 'Permissions and Sharing', weight: 5, note: 'Permission set use cases; sharing scheduled Service Appointments with resources; and user territories versus service territories.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Field Service Consultant certification?',
    answer: 'The current credential is Salesforce Certified Agentforce Field Service and Operations Consultant. The exam has 60 multiple-choice/multiple-select questions plus up to five unscored questions, 105 minutes, and a 63% passing score. The US registration fee is $200 plus applicable taxes. The official guide lists Salesforce Certified Platform Administrator and Salesforce Certified Agentforce Service Consultant as prerequisites.',
  },
  {
    question: 'What are the prerequisites for this exam?',
    answer: 'The official guide lists Salesforce Certified Platform Administrator and Salesforce Certified Agentforce Service Consultant certifications as prerequisites. The exam audience description recommends relevant implementation experience but does not replace these prerequisites.',
  },
  {
    question: 'How long should I study for the Field Service Consultant exam?',
    answer: 'Salesforce does not prescribe a fixed study duration. Use the official exam outline to identify gaps, then combine hands-on practice, Trailhead learning, and Salesforce Help documentation.',
  },
  {
    question: 'What is the Gantt in Salesforce Field Service?',
    answer: 'The Dispatcher Console provides tools to manage appointments, schedules, resources, and maps. The Gantt is a schedule visualization within the console; consult current Salesforce Help for specific controls and behavior.',
  },
  {
    question: 'What is the difference between scheduling policies and scheduling rules in FSL?',
    answer: 'A Schedule Policy is selected to meet scheduling requirements. Salesforce’s exam outline separately names scheduling services and optimization services; use Salesforce Help for current policy configuration and rule behavior rather than assuming every rule acts as a hard constraint or preference.',
  },
]

export default function FieldServiceConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/field-service-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="field-service-consultant"
        certName="Field Service Consultant"
        description={pageDescription}
        pageUrl="/field-service-consultant-study-guide"
      />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certified Agentforce Field Service and Operations Consultant Study Guide
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Review the published exam objectives and practice applying Field Service configuration choices to realistic operations scenarios.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="field-service-exam-tips" certName="Field Service Consultant" />
      <CertInsightBlock certSlug="field-service-consultant" />
      <ExamPricingCard
        certSlug="field-service"
        certName="Field Service Consultant"
        certPageSlug="field-service"
      />
      <p className="text-sm text-gray-600 mb-6">Official source: <a className="text-salesforce-blue underline" href={issuerGuideUrl}>Salesforce Agentforce Field Service and Operations Consultant Exam Guide</a>. Salesforce lists Platform Administrator and Agentforce Service Consultant as prerequisites.</p>

      {/* Exam At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60 + up to 5 unscored' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '63%' },
          { label: 'US Registration', value: '$200 + tax' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Sections */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Section Breakdown</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 5.2}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Each Section Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Section-by-Section Breakdown</h2>
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

      {/* Flexible study sequence; Salesforce does not prescribe a duration. */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Suggested Study Sequence</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: '1', focus: 'Map the Work Order, Work Order Line Item, Service Appointment, and Service Resource relationships.' },
            { week: '2', focus: 'Practice selecting resource types, territory members, skills, and operating hours for a stated service area.' },
            { week: '3', focus: 'Trace a Work Order through its lifecycle; distinguish Work Types, required products, and line items.' },
            { week: '4', focus: 'For scheduling scenarios, identify lifecycle constraints first, then choose the policy/service and dispatch strategy.' },
            { week: '5', focus: 'Review mobility, sign-off, inventory, assets, maintenance plans, permissions, and sharing against the official objectives.' },
            { week: '6', focus: 'Use original practice questions to diagnose gaps; verify explanations against Salesforce Help and the published outline.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Tips */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Read Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Work Order relationship:</strong> In a scenario, distinguish the Work Order (job), its Work Order Line Items (tasks), and related Service Appointments (visits). Identify which record the requested change applies to.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Schedule requirements:</strong> Separate eligibility constraints such as skills, operating hours, and territory membership from the business objective, such as selecting a scheduling approach. Confirm the precise rule behavior in Salesforce Help.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Scheduling versus optimization:</strong> Look for whether the scenario asks to place a particular appointment or improve a broader existing schedule; then compare the relevant scheduling or optimization service to the requirement.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Required versus preferred:</strong> Distinguish a stated must-have qualification from a preference in the scenario. Check the applicable object and configuration before assuming either one blocks a candidate resource.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Readiness Benchmark</h2>
        <p className="text-sm text-gray-700">Salesforce does not publish a practice-test readiness threshold. Check your understanding against the official weighted objectives; use a sandbox to compare how different resource, appointment lifecycle, and scheduling choices affect eligibility and dispatch outcomes.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10 Must-Know Concepts</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>FSL object model: Work Order, Work Order Line Item, Service Appointment, Service Resource, Service Territory</li>
          <li>Service resource types: Agent, Technician, Crew, how they differ and when to use each</li>
          <li>Scheduling policies: combining required vs preferred rules, rule weights and priorities</li>
          <li>Optimization types: Global, Single Resource, In-Day, when to use each</li>
          <li>Required skills on Work Orders vs preferred resources on accounts</li>
          <li>Service territory structure: multi-level territories and member types</li>
          <li>Work Order Line Items and their relationship to products and inventory</li>
          <li>FSL mobile app: offline capabilities, synchronisation, work order status updates</li>
          <li>Drip feed scheduling and appointment booking in the managed package</li>
          <li>Inventory: product requests, product transfers, van stock, consumed products</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">How It Compares</h2>
        <ul className="space-y-2">
          <li><Link href="/field-service-vs-service-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Field Service vs Service Cloud Consultant, full comparison</Link></li>
        </ul>
      </div>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Go Next</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="field-service" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Put It Into Practice</h2>
        <p className="text-white mb-6">Test yourself with free Field Service Consultant practice questions covering all 8 exam sections.</p>
        <Link
          href="/certifications/field-service"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Compare certifications: <Link href="/field-service-vs-service-cloud-consultant" className="underline hover:text-white font-medium">Field Service vs Service Cloud Consultant</Link>
        </p>
      </div>
    </div>
  )
}
