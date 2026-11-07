import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const issuerGuideUrl = 'https://help.salesforce.com/s/articleView?id=005298947&language=en_US&type=1'
const slug = 'field-service'

const pageTitle = 'Agentforce Field Service and Operations Consultant Exam Tips'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Prepare for the Agentforce Field Service and Operations Consultant exam by reviewing official objectives and practical scenarios.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/field-service-exam-tips`,
    languages: { 'en-US': `${siteUrl}/field-service-exam-tips`, 'x-default': `${siteUrl}/field-service-exam-tips` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/field-service-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Field Service Consultant', url: '/certifications/field-service' },
  { name: 'Field Service Consultant Exam Tips', url: '/field-service-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the current exam format?',
    answer: 'The Salesforce Certified Agentforce Field Service and Operations Consultant exam has 60 multiple-choice/multiple-select questions and up to five unscored questions, 105 minutes, and a 63% passing score. The US registration fee is $200 plus applicable taxes. See Salesforce’s current exam guide for details.',
  },
  {
    question: 'Which objectives have the greatest published weights?',
    answer: 'Managing Scheduling and Optimization is 28% and Managing Work Orders is 23% in the published exam outline. Together they represent 51% of the listed exam objectives.',
  },
  {
    question: 'What prerequisites are required?',
    answer: 'The official exam guide lists Salesforce Certified Platform Administrator and Salesforce Certified Agentforce Service Consultant as prerequisites.',
  },
  {
    question: 'What is the hardest part of the Field Service Consultant exam?',
    answer: 'The official outline gives Managing Scheduling and Optimization the largest weight (28%). Practice distinguishing appointment lifecycle choices, schedule policies, scheduling services, optimization services, and dispatch strategies in context.',
  },
  {
    question: 'What distinctions are useful to practice?',
    answer: 'Compare the purpose of a Work Type with a Work Order Line Item; a service territory with a user territory; and appointment scheduling with schedule optimization. For each scenario, identify the requirement and lifecycle state before selecting a feature.',
  },
  ...getConceptFaqs('field-service-exam-tips'),
]

const examDomains = [
  ['Managing Resources', '16%'],
  ['Managing Work Orders', '23%'],
  ['Managing Scheduling and Optimization', '28%'],
  ['Configuring Mobility', '10%'],
  ['Managing Inventory', '8%'],
  ['Managing Assets', '5%'],
  ['Configuring Maintenance Plans', '5%'],
  ['Permissions and Sharing', '5%'],
]

export default function FieldServiceExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/field-service-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/field-service-consultant-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Official-objective review
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Agentforce Field Service and Operations Consultant Exam Tips: Scenario Review
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Use Salesforce’s published objectives to guide preparation for field operations, work orders, appointment
          scheduling, mobility, inventory, assets, maintenance plans, and permissions.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="field-service-consultant-study-guide" certName="Field Service Consultant" />
      <ExamPricingCard
        certSlug="field-service"
        certName="Field Service Consultant"
        certPageSlug="field-service"
      />
      <p className="text-sm text-gray-600 mb-6">Source of exam logistics, prerequisites, and objective weights: <a className="text-salesforce-blue underline" href={issuerGuideUrl} target="_blank" rel="nofollow noopener noreferrer">Salesforce’s published exam guide</a>. Objective names and weights below follow that guide.</p>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Topic Areas</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>FSL data model</strong>: Service territories, service resources, service appointments, work orders, work types, and how these objects relate to Cases and Assets in Service Cloud.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Scheduling and optimisation</strong>: Scheduling policies, work rules, service objectives, and the difference between manual scheduling, drip-feed scheduling, and global optimisation.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Mobile workforce management</strong>: Field Service mobile app configuration, inventory and parts management, and how technicians interact with work orders in the field.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Official Objective Weights</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {examDomains.map(([name, weight]) => (
            <div key={name} className="flex justify-between items-start border-b border-gray-100 pb-2 last:border-0">
              <span className="font-medium text-gray-900">{name}</span>
              <span className="font-bold text-salesforce-blue ml-4">{weight}</span>
            </div>
          ))}
          <p className="text-xs text-gray-600 pt-1">Weights reproduce the published Salesforce exam outline.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Field Service Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Field Service questions describe a mobile workforce scenario and ask which configuration or feature satisfies it.
          Focus on the stated business requirement, record lifecycle, and applicable product behavior before comparing configuration options.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For territory questions: service territories define where resources work. A resource must be assigned to a territory to receive appointments there. Operating hours on territories and resources control availability. Know which takes precedence.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For scheduling questions: work rules define constraints (skills required, travel time, availability). Service objectives define preferences (minimise travel, prioritise urgent work). Policy = combination of rules and objectives. Know this hierarchy.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For mobile questions: the Field Service mobile app uses connected content to show related objects offline. Configurations made in the FSL managed package settings control what technicians see on mobile.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice Readiness</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          No official practice-score threshold is published
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Use hands-on exercises to validate understanding of the published objectives. Practice results are diagnostic
          and do not predict or guarantee an official exam result.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Scenario Distinctions to Review</h2>
        <p className="text-sm text-gray-600 mb-5">These original examples are study aids, not reported exam questions or claims about candidate performance.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Resource territory versus user territory</p>
            <p className="text-sm text-gray-700">Scenario: a technician is assigned to the correct Salesforce user territory but is not eligible for jobs in a service area. Check the Service Resource’s Service Territory Member records and active dates; user territories govern a different sharing/assignment context.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Appointment lifecycle versus optimization objective</p>
            <p className="text-sm text-gray-700">Scenario: an appointment cannot be scheduled because its status or required fields do not permit the requested operation. Resolve the lifecycle and eligibility issue first; changing a Schedule Policy objective will not repair an invalid appointment state.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Planned versus consumed inventory</p>
            <p className="text-sm text-gray-700">Scenario: a Work Order specifies parts expected before dispatch, while the technician records the parts actually used after service. Distinguish Products Required from Products Consumed, then consider the applicable inventory location and Return Order process.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Study Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/advanced-field-service-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Advanced Field Service AP Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Field Service Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/field-service#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Field Service Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Consultant Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}
