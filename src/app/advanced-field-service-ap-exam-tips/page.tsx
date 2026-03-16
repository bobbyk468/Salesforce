import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Advanced Field Service AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Advanced Field Service Accredited Professional exam tips for ${RELEASE_CURRENT}: advanced scheduling, resource optimisation, asset management.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/advanced-field-service-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/advanced-field-service-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Advanced Field Service AP exam tips ${RELEASE_CURRENT}, how to pass Advanced Field Service AP, Salesforce FSL advanced certification, field service optimisation exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Advanced Field Service AP Exam Tips', url: '/advanced-field-service-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'How hard is the Advanced Field Service ap exam?',
    answer: 'The Advanced Field Service ap is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) designed for practitioners with hands-on implementation experience. It is considered moderately challenging for those who have configured Advanced Field Service ap on real customer projects. Candidates without hands-on experience often find the specialised data model and feature configuration scenarios harder than expected. Most experienced practitioners pass with 3–4 weeks of focused review using the official Salesforce Trailmix for this accreditation.',
  },
  {
    question: 'What are the highest-weight Advanced Field Service AP exam sections?',
    answer: 'Advanced Scheduling and Optimisation (35%) and Asset and Inventory Management (25%) together account for 60% of the exam. Configuring the FSL Optimization Engine for automated route optimisation, complex scheduling policy constraints, and managing asset service history, warranties, and parts inventory are the most tested areas.',
  },
  {
    question: 'What is the FSL Optimization Engine and how does the exam test it?',
    answer: 'The FSL Optimization Engine uses AI to automatically schedule and dispatch service appointments, optimising for travel time, skills matching, and work order urgency. The exam tests how to configure Scheduling Policies (the rules the optimiser follows), Objectives (what to optimise for — minimise travel vs. maximise utilisation), and Work Rule constraints (time windows, required skills, territory boundaries).',
  },
  {
    question: 'How does Advanced Field Service AP differ from the Field Service Consultant exam?',
    answer: 'The Field Service Consultant exam covers foundational FSL configuration: work orders, service territories, resources, basic scheduling, and mobile app. The Advanced Field Service AP goes deeper into the Optimization Engine configuration, complex multi-resource scheduling, asset and parts management, predictive maintenance triggers, and Visual Remote Assistant (video-based remote support). It assumes you already hold or understand the Field Service Consultant material.',
  },
]

export default function AdvancedFieldServiceApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/advanced-field-service-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Advanced Field Service AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Advanced Field Service AP exam tests expert-level FSL configuration — the Optimization Engine,
          complex scheduling policies, asset management, and predictive maintenance. These tips focus
          on the advanced topics that go beyond the standard Field Service Consultant exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Advanced Field Service AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced scheduling and optimisation</strong> — Configuring the FSL Optimization Engine with Scheduling Policies, Objectives (travel minimisation, utilisation maximisation), and Work Rules (time window constraints, skill matching, preferred technician). Understanding Global Optimisation (re-optimise all unstarted appointments) vs. In-Day Optimisation (optimise today&apos;s schedule in real time).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Asset and inventory management</strong> — Asset service history tracking, warranty management (active/expired warranties affecting service charges), preventive maintenance plans (schedule recurring service based on time or usage), parts requests and transfers between stocking locations, and consumption recording after parts are used on a work order.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Einstein Vision and remote assistance</strong> — Visual Remote Assistant for video-based remote troubleshooting (technician connects via video to a remote expert), Einstein Vision for object detection in field photos (identifying equipment damage from photos without manual inspection), and how these AI features reduce truck rolls and improve first-time fix rates.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Advanced Scheduling and Optimisation</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Asset and Inventory Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Einstein Vision and Remote Assistance</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Analytics and Performance Metrics</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. The Optimisation Engine and Scheduling Policies are the core differentiators of this advanced certification.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Advanced FSL AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an advanced field service scenario and ask which optimisation configuration,
          asset management approach, or Einstein feature addresses it. This exam assumes deep FSL
          product knowledge — not just conceptual understanding.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For optimisation questions: Scheduling Policy = the set of rules and objectives the optimiser uses. Each policy has Work Rules (hard constraints: must have skill, must be within time window) and Objectives (soft goals: minimise travel, maximise utilisation). The policy is assigned to a service territory or individual schedule run. When a scenario says &apos;technicians must have the Refrigeration skill for HVAC jobs&apos;, configure a Skills Work Rule — not a custom filter or a scheduling recommendation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For preventive maintenance questions: maintenance plans define the schedule (every 6 months, every 1,000 operating hours). When the trigger is met, Salesforce automatically generates work orders for preventive maintenance. Asset counters track usage-based triggers (operating hours, cycles). When a scenario says &apos;create a service appointment every time this machine runs 500 hours&apos;, configure an asset counter with a maintenance plan trigger — not a scheduled Flow.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Einstein Vision questions: Einstein Vision requires a trained model with labelled images of the objects to detect. The model is invoked via the FSL mobile app — the technician takes a photo and the AI identifies the asset type or damage condition without manual input. When a scenario says &apos;automatically identify the type of water heater without the technician entering a model number&apos;, Einstein Vision with a trained equipment model is the answer.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Advanced Field Service AP assumes you have completed the Field Service Consultant credential
          and have hands-on experience with the FSL Optimization Engine. Configuring Scheduling Policies
          with multiple Work Rules and Objectives in a sandbox environment is essential preparation —
          these concepts are difficult to learn from documentation alone.
        </p>
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
          <Link href="/field-service-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Field Service Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Advanced Field Service AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/advanced-field-service-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Advanced FSL AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/field-service" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Field Service Consultant Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
