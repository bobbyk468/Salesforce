import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Field Service Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Field Service Consultant exam tips for ${RELEASE_CURRENT}: work orders, scheduling, mobile workforce Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/field-service-exam-tips` },
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
  keywords:
    `Field Service Consultant exam tips ${RELEASE_CURRENT}, how to pass Field Service Consultant, Salesforce Field Service certification study guide, FSL exam tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Field Service Consultant Exam Tips', url: '/field-service-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Field Service Consultant exam format?',
    answer: 'The Salesforce Field Service Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee. It tests configuration and implementation of Salesforce Field Service (formerly Field Service Lightning), including work orders, scheduling, mobile, and inventory management.',
  },
  {
    question: 'What are the highest-weight Field Service Consultant exam sections?',
    answer: 'Managing Service Resources and Territories (25%) and Configuring Service Appointments and Work Orders (22%) together account for 47% of the exam. Scheduling and optimisation policies, resource capacity planning, and the FSL data model are the most heavily tested topics.',
  },
  {
    question: 'What prerequisites do I need for the Field Service Consultant exam?',
    answer: 'Salesforce recommends Salesforce Administrator (ADM-201) and Service Cloud Consultant before Field Service Consultant. The exam builds heavily on Service Cloud concepts (cases, entitlements, service contracts) and extends them into field operations. Real FSL implementation experience is strongly recommended.',
  },
  {
    question: 'What is the hardest part of the Field Service Consultant exam?',
    answer: 'Scheduling and optimisation is the most nuanced section — candidates must understand the difference between auto-scheduling, optimisation policies, scheduling rules, and work type rules, and when each is appropriate. The FSL data model (service territories, resources, service appointments) is unique and unlike other Salesforce modules.',
  },
  {
    question: 'What concepts do most Field Service candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Field Service exam are: (1) Dispatcher Console vs Gantt vs Service Appointment List — Three Different Views; (2) Auto-Scheduling vs Optimization — Immediate vs Batch Processing; (3) Work Types vs Skill Requirements — Templates vs Qualifications. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('field-service-exam-tips'),
]

export default function FieldServiceExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/field-service-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Field Service Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Field Service Consultant exam tests your ability to configure and implement Salesforce Field Service
          for mobile workforces. These tips focus on the data model, scheduling architecture, and territory
          management questions that define the exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">67%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Field Service Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>FSL data model</strong> — Service territories, service resources, service appointments, work orders, work types, and how these objects relate to Cases and Assets in Service Cloud.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Scheduling and optimisation</strong> — Scheduling policies, work rules, service objectives, and the difference between manual scheduling, drip-feed scheduling, and global optimisation.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Mobile workforce management</strong> — Field Service mobile app configuration, inventory and parts management, and how technicians interact with work orders in the field.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Managing Service Resources and Territories</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Configuring Service Appointments and Work Orders</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Scheduling and Optimisation</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Inventory and Parts Management</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Resources/Territories + Work Orders + Scheduling = 65%. The FSL data model and scheduling policies are your core study focus.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Field Service Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Field Service questions describe a mobile workforce scenario and ask which configuration or feature satisfies it.
          The correct answer always uses the most native FSL feature — not custom development or Service Cloud workarounds.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For territory questions: service territories define where resources work. A resource must be assigned to a territory to receive appointments there. Operating hours on territories and resources control availability — know which takes precedence.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For scheduling questions: work rules define constraints (skills required, travel time, availability). Service objectives define preferences (minimise travel, prioritise urgent work). Policy = combination of rules and objectives. Know this hierarchy.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For mobile questions: the Field Service mobile app uses connected content to show related objects offline. Configurations made in the FSL managed package settings control what technicians see on mobile.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The FSL data model is unique and unlike any other Salesforce module — candidates who have not
          implemented FSL in a real environment consistently struggle with scheduling and territory questions.
          Build a FSL trial org and configure a full scenario before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Field Service Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Dispatcher Console vs Gantt vs Service Appointment List — Three Different Views</p>
            <p className="text-sm text-gray-700">The Dispatcher Console is the full scheduling interface with Gantt, map, and list views. The Gantt shows time-based schedule visualisation per resource. The Service Appointment List View is a standard list for bulk management. Candidates describe the Gantt when they mean the Dispatcher Console — the exam distinguishes these views and expects accurate terminology when describing which interface a dispatcher uses for a given task.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Auto-Scheduling vs Optimization — Immediate vs Batch Processing</p>
            <p className="text-sm text-gray-700">Auto-Scheduling assigns the next available qualified resource immediately when a Service Appointment is created or activated (one-at-a-time, real-time). Optimization runs a batch process to re-optimise the entire schedule for a set of appointments using travel minimisation and priority (scheduled in off-peak hours). Candidates recommend Optimization for real-time scheduling — the exam expects Auto-Scheduling for immediate single-appointment assignment.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Work Types vs Skill Requirements — Templates vs Qualifications</p>
            <p className="text-sm text-gray-700">Work Types are templates that define estimated duration, required skills, and default service territory for a category of work (e.g., "Annual HVAC Maintenance"). Skill Requirements are defined on the Work Type and matched against Resource Skills when scheduling. Candidates configure skills directly on Service Appointments — the exam expects skills to be defined on Work Types so they propagate to all Service Appointments of that type.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
          <Link href="/certifications/field-service" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Field Service Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Consultant Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
