import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Field Service Consultant Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Salesforce Field Service Consultant study guide (${RELEASE_CURRENT}): 8 exam sections, study plan, scheduling tips, and free practice questions. $200 fee, 60 questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/field-service-consultant-study-guide` },
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
  keywords: `salesforce field service consultant study guide, field service certification 2026, FSL exam prep, field service lightning certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Field Service Consultant Study Guide', url: '/field-service-consultant-study-guide' },
]

const examSections = [
  { name: 'Managing a Field Service Business', weight: 19, note: 'Designing a Field Service solution to meet business requirements: service territories, operating hours, service resources (agents, technicians, crew), and defining service capacity.' },
  { name: 'Defining Field Service', weight: 16, note: 'Core FSL objects: Work Orders, Work Order Line Items, Service Appointments, Service Resources, Service Territories, Service Crews, and the relationships between them.' },
  { name: 'Service Resources', weight: 15, note: 'Configuring technician profiles, resource skills, skill levels, resource absence, resource capacity, and preferred resources on accounts and work orders.' },
  { name: 'Work Orders', weight: 13, note: 'Creating and managing Work Orders and Work Order Line Items. Products consumed, required skills, required parts, location tracking, and priority settings.' },
  { name: 'Scheduling & Optimization', weight: 13, note: 'Scheduling policies, scheduling rules (pinned, travel time, skill matching), Optimization request types (global, single resource, in-day), and the dispatcher console.' },
  { name: 'Inventory Management', weight: 8, note: 'Product inventory, product requests, product transfers between locations, consumed and returned products, and van stock management for field technicians.' },
  { name: 'Mobility', weight: 8, note: 'Salesforce Field Service mobile app configuration, offline capabilities, work order status updates, geolocation tracking, and technician-facing knowledge articles.' },
  { name: 'Managed Package', weight: 8, note: 'Installing and configuring the FSL managed package, Gantt configuration, appointment booking, drip feed scheduling, and automatic scheduling settings.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Field Service Consultant certification?',
    answer: 'The Salesforce Field Service Consultant certification validates skills in implementing Salesforce Field Service (formerly Field Service Lightning / FSL). It covers Work Order management, scheduling, resource management, inventory, and the FSL managed package. The exam has 60 questions, a 105-minute time limit, ~65% passing score, and a $200 fee.',
  },
  {
    question: 'What prerequisites are recommended for the Field Service Consultant exam?',
    answer: 'ADM-201 is strongly recommended, and Service Cloud Consultant is highly recommended. Field Service is built on top of Service Cloud — Work Orders, Entitlements, and Service Console are all Service Cloud concepts. Candidates without Service Cloud knowledge typically struggle with the Work Order and Managed Package sections. Most successful candidates have hands-on FSL project experience.',
  },
  {
    question: 'How long should I study for the Field Service Consultant exam?',
    answer: 'Plan for 8–12 weeks with 10–15 hours per week. The FSL managed package has a steep learning curve — setting up the package, configuring scheduling policies, and using the Gantt dispatcher console requires hands-on sandbox practice. Read the Salesforce Field Service documentation alongside Trailhead modules.',
  },
  {
    question: 'What is the Gantt in Salesforce Field Service?',
    answer: 'The Field Service Gantt is the dispatcher console — a visual scheduling board showing service appointments, technician availability, and travel time. Dispatchers use the Gantt to drag-and-drop appointments, run optimization, filter by territory, and see real-time technician locations. Understanding Gantt configuration (visible resources, time horizon, colour coding) is tested on the exam.',
  },
  {
    question: 'What is the difference between scheduling policies and scheduling rules in FSL?',
    answer: 'Scheduling policies are named rule sets (e.g., Customer First, High Intensity) that combine multiple scheduling rules. Scheduling rules are individual constraints or preferences applied during scheduling — examples include Skill Match (required), Travel Distance (soft preference), and Emergency (priority override). A scheduling policy can include many rules with different priority levels.',
  },
]

export default function FieldServiceConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/field-service-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Field Service Consultant Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Field Service Consultant exam — Work Orders, scheduling policies, resource management, the FSL managed package, and more.
        </p>
      </div>

      <ContentPageAuthor />

      {/* Exam At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Sections */}
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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 5.2}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Each Section Tests */}
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

      {/* 8-Week Study Plan */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Install the FSL managed package in a developer org. Explore the FSL app, understand the object model: Work Order → Work Order Line Item → Service Appointment.' },
            { week: 'Week 2', focus: 'Service Territories & Resources — configure service territories, operating hours, service resources (agent, technician, crew), resource skills and skill levels.' },
            { week: 'Week 3', focus: 'Work Orders — create Work Orders and Line Items, assign required skills and parts, understand status transitions, and configure work type templates.' },
            { week: 'Week 4', focus: 'Scheduling — configure scheduling policies and rules, manually schedule from dispatcher console, use the Gantt. Understand travel time and skill-matching rules.' },
            { week: 'Week 5', focus: 'Optimization — Global Optimization, Single Resource Optimization, and In-Day Optimization. When to use each, how to run optimization requests, and interpret results.' },
            { week: 'Week 6', focus: 'Inventory — product inventory, product requests, product transfers, consumed products on Work Order Line Items. Configure van stock for technicians.' },
            { week: 'Week 7', focus: 'Mobility & Managed Package — configure the FSL mobile app, offline sync settings, appointment booking, drip feed, and automatic scheduling configuration.' },
            { week: 'Week 8', focus: 'Full mock exams. Focus on scheduling policy/rule scenarios and FSL object relationship questions — these are the most commonly tested areas.' },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Know the FSL object model cold:</strong> Work Order → Work Order Line Items → Service Appointments → Service Resources. Understand which object stores skills (Service Resource), which stores location (Service Territory Member), and which stores the job details (Work Order).</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Scheduling policy vs scheduling rule:</strong> A policy is a named collection of rules. Each rule has a type (Required, Preferred, Excluded), a weight, and a scope. Required rules must be satisfied; preferred rules improve score. Exam scenarios describe a business need — identify which rule type applies.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Optimization types:</strong> Global Optimization runs on all unscheduled appointments in a territory. Single Resource Optimization runs on one technician&apos;s schedule. In-Day Optimization re-optimises the current day in real time. Know when a dispatcher would choose each.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Preferred resource vs required skill:</strong> A preferred resource on an account or work order influences scheduling but doesn&apos;t block it. A required skill on a Work Order blocks scheduling — only technicians with that skill level or higher are candidates.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Field Service is one of the more hands-on exams — if you&apos;ve never used the Gantt dispatcher console or run an optimization, set up a sandbox first. The top two sections (Managing a Field Service Business 19% + Defining Field Service 16%) together account for 35% of the exam.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>FSL object model: Work Order, Work Order Line Item, Service Appointment, Service Resource, Service Territory</li>
          <li>Service resource types: Agent, Technician, Crew — how they differ and when to use each</li>
          <li>Scheduling policies: combining required vs preferred rules, rule weights and priorities</li>
          <li>Optimization types: Global, Single Resource, In-Day — when to use each</li>
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

      {/* CTA */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/field-service-vs-service-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Field Service vs Service Cloud Consultant — full comparison</Link></li>
        </ul>
      </div>

      <DifficultyHeatmap slug="field-service" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
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
