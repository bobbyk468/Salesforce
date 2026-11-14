import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Become a Salesforce Consultant (${RELEASE_CURRENT} Guide)`
const pageDescription = 'Learn the consultant path, Administrator preparation, specializations, timelines, and study resources for a Salesforce career.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/how-to-become-salesforce-consultant`,
    languages: { 'en-US': `${siteUrl}/how-to-become-salesforce-consultant`, 'x-default': `${siteUrl}/how-to-become-salesforce-consultant` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/how-to-become-salesforce-consultant`,
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
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'How to Become a Salesforce Consultant', url: '/how-to-become-salesforce-consultant' },
]

const faqItems = [
  {
    question: 'How long does it take to become a Salesforce Consultant?',
    answer: 'Plan for 6–12 months to move from no Salesforce experience to your first consultant role. The path includes ADM-201 (8–12 weeks) and a first consultant specialization (8–12 weeks). Finding a role may take another 1–3 months after certification. Prior experience in CRM, sales operations, or service operations can help you prepare faster.',
  },
  {
    question: 'What is the difference between a Salesforce Administrator and a Salesforce Consultant?',
    answer: 'An Administrator manages and configures Salesforce within their own organization. A Consultant works with clients to gather requirements, design and configure solutions, train users, and manage launch. Consultants often work for implementation partners or consulting firms, and their roles are usually client-facing and project-based.',
  },
  {
    question: 'Which consultant certification should I take first: Sales Cloud or Service Cloud?',
    answer: 'Choose based on your experience. Sales operations, CRM, or revenue operations experience may fit Sales Cloud Consultant. Customer support, contact centre, or service operations experience may fit Service Cloud Consultant. Both exams have 60 questions, take 105 minutes, and cost $200. The passing scores are 73% for Sales Cloud and 78% for Service Cloud. Both assume ADM-201 knowledge, and many consultants eventually earn both credentials.',
  },
  {
    question: 'Do I need project experience before the consultant exam?',
    answer: 'Only a few consultant certifications have formal prerequisites, but hands-on project experience can help you on the exam. Consultant exams use scenarios that describe a business need and ask how to configure Salesforce to meet it. Candidates who have worked on a Sales Cloud or Service Cloud implementation may find these questions easier to understand than those who have only studied the theory.',
  },
  {
    question: 'What is the Salesforce consultant salary in 2026?',
    answer: 'Junior consultants with ADM-201, one consultant certification, and 0–2 years of experience typically earn $75,000–$100,000. Mid-level consultants with 2+ certifications and 2–5 years of experience earn $100,000–$140,000. Senior consultants and solution architects earn $130,000–$180,000. Independent consultants and contractors typically earn $100–$175 per hour. Salaries are highest on Salesforce projects in financial services, healthcare, and technology.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Earn Your ADM-201 First',
    time: '8–12 weeks',
    description: 'Start with Salesforce Administrator (ADM-201), the foundation for consultant certifications. It covers objects, fields, the data model, security (profiles, roles, and sharing rules), automation (Flow and Process Builder), reports, dashboards, and data management. Consultant exams build on this knowledge.',
    resources: ['Trailhead: Salesforce Administrator trail', 'Free Salesforce Developer Edition org for hands-on practice', 'Trailblaze Prep ADM-201 free practice questions'],
  },
  {
    step: '2',
    title: 'Choose Your First Specialisation',
    time: 'Decision point',
    description: 'Salesforce offers 15+ consultant certifications. Choose your first based on your experience and target market. Sales Cloud Consultant is the most in-demand, followed by Service Cloud Consultant. Experience Cloud, Data Cloud, and Field Service can support higher-value projects. Marketing Cloud, which requires Email Specialist as a prerequisite, can lead to marketing technology work.',
    resources: ['Sales Cloud Consultant, highest demand, broadest job market', 'Service Cloud Consultant, contact centre and support operations focus', 'Experience Cloud Consultant, digital portals and communities focus'],
  },
  {
    step: '3',
    title: 'Study Your Consultant Certification',
    time: '8–12 weeks',
    description: 'Consultant exams test how you apply Salesforce features to business needs, not just what you know about configuration. Review the exam sections, use Trailhead and Salesforce product documentation, and practice scenario questions. Hands-on sandbox work is essential.',
    resources: ['Trailblaze Prep free consultant practice questions', 'Official Salesforce Study Guide (trailhead.salesforce.com/credentials)', 'Trailhead: Sales Cloud consultant Trailmix'],
  },
  {
    step: '4',
    title: 'Get Real Project Experience',
    time: '3–6 months',
    description: 'Certifications can help you find opportunities, but project experience affects your compensation. Look for implementation roles at a Salesforce partner (ISV or SI), a consulting firm, or Salesforce. Your first role may be as a junior consultant or analyst. If you are changing careers, pro bono work through Salesforce.org can help you build experience.',
    resources: ['Salesforce Partner Community (find implementation partners hiring)', 'Salesforce.org pro bono opportunities', 'LinkedIn: search "Salesforce Consultant" + your city'],
  },
  {
    step: '5',
    title: 'Stack Additional Certifications',
    time: 'Ongoing',
    description: 'Many Salesforce consultants hold 3–5 certifications. After your first consultant credential, add one that complements your work. Sales Cloud and Service Cloud cover many CRM implementations. Experience Cloud, Data Cloud, or Field Service can support specialist projects. Business Analyst can help demonstrate requirements-gathering skills on larger projects.',
    resources: ['Service Cloud Consultant (complements Sales Cloud perfectly)', 'Experience Cloud Consultant (for portal and community projects)', 'Salesforce Business Analyst (for requirements and discovery work)'],
  },
]

export default function HowToBecomeSalesforceConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-become-salesforce-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Become a Salesforce Consultant ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Follow a step-by-step path from ADM-201 to your first Salesforce Consultant role. Compare certification options, salary ranges, and study resources.
        </p>
      </div>

      {/* At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Time to First Role', value: '6–12 months' },
          { label: 'Exam Fee', value: '$200' },
          { label: 'Entry Salary', value: '$75k–$100k' },
          { label: 'First Cert', value: 'ADM-201' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Consultant Path</h2>
        <div className="space-y-6">
          {steps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <ul className="space-y-1">
                    {item.resources.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification options */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top Consultant Certification Combinations</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {[
            { combo: 'ADM-201 + Sales Cloud Consultant + Service Cloud Consultant', desc: 'Covers 80%+ of CRM implementations, the most in-demand combination globally.' },
            { combo: 'ADM-201 + Sales Cloud Consultant + Experience Cloud Consultant', desc: 'Strong for projects combining CRM with customer/partner portals.' },
            { combo: 'ADM-201 + Service Cloud Consultant + Field Service Consultant', desc: 'Ideal for field operations, utilities, and service-intensive industries.' },
            { combo: 'ADM-201 + Sales Cloud + Data Cloud Consultant', desc: 'High-value combination as Data Cloud adoption grows in 2026.' },
          ].map((item) => (
            <div key={item.combo} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              <div className="font-semibold text-gray-900 mb-1">{item.combo}</div>
              <div className="text-gray-600 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Consultant Salary ({RELEASE_CURRENT})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { level: 'Junior Consultant', range: '$75k–$100k', desc: 'ADM-201 + 1 consultant cert, 0–2 years' },
            { level: 'Mid-Level Consultant', range: '$100k–$140k', desc: '2–3 certs, 2–5 years experience' },
            { level: 'Senior / Architect', range: '$130k–$180k', desc: '4+ certs, solution architect scope' },
          ].map((tier) => (
            <div key={tier.level} className="rounded-lg bg-gray-50 border border-gray-100 p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">{tier.level}</div>
              <div className="text-xl font-bold text-salesforce-blue mb-1">{tier.range}</div>
              <div className="text-xs text-gray-600">{tier.desc}</div>
            </div>
          ))}
        </div>
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
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Your Consultant Journey</h2>
        <p className="text-white mb-6">Practice free Sales Cloud and Service Cloud Consultant questions today.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/sales-cloud" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Sales Cloud Practice <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center px-6 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            <BookOpen className="mr-2 h-4 w-4" /> Consultant Path Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
