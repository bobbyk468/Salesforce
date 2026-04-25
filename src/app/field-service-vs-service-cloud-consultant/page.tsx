import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Field Service vs Service Cloud Consultant (${RELEASE_CURRENT})`
const pageDescription = `Field Service Consultant vs Service Cloud Consultant: compare exam difficulty, skills tested, prerequisites, career value, and which to take first in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/field-service-vs-service-cloud-consultant` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/field-service-vs-service-cloud-consultant`,
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
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Field Service vs Service Cloud Consultant', url: '/field-service-vs-service-cloud-consultant' },
]

const faqItems = [
  {
    question: 'Should I take Service Cloud Consultant before Field Service Consultant?',
    answer: 'Yes — Service Cloud Consultant is strongly recommended before Field Service Consultant. Field Service is built on top of Service Cloud. Work Orders, Entitlements, the Service Console, Omni-Channel, and Case management are all Service Cloud concepts that Field Service Consultant assumes you already understand. Most successful Field Service candidates hold Service Cloud Consultant (and ADM-201) before attempting the Field Service exam.',
  },
  {
    question: 'Is Field Service Consultant harder than Service Cloud Consultant?',
    answer: 'Most candidates find Field Service Consultant harder than Service Cloud Consultant. Field Service requires knowledge of the FSL managed package, scheduling policies and rules, the Gantt dispatcher console, optimization types, and mobile app configuration — all on top of Service Cloud knowledge. Service Cloud Consultant is more broadly applicable and has more study resources available.',
  },
  {
    question: 'Which certification is more in demand — Field Service or Service Cloud Consultant?',
    answer: 'Service Cloud Consultant has significantly more job market demand. It covers contact centres, case management, knowledge management, and omni-channel routing — relevant to almost every service-focused Salesforce implementation. Field Service Consultant is a specialist credential for industries with field technician operations (utilities, telecom, manufacturing, medical devices). Both are valuable; Service Cloud should come first.',
  },
  {
    question: 'Can I hold both Field Service Consultant and Service Cloud Consultant?',
    answer: 'Yes, and this is a common and valuable combination. Holding both certifications makes you highly competitive for service-focused Salesforce projects, especially in industries that run both a contact centre and field operations. Many implementation consultants at Salesforce partners hold ADM-201 + Service Cloud Consultant + Field Service Consultant as their core service stack.',
  },
  {
    question: 'What is the difference in what each exam covers?',
    answer: 'Service Cloud Consultant covers: Case management, Omni-Channel routing (queue-based, skills-based), Lightning Knowledge, entitlement processes and milestones, service console configuration, CTI integration, and contact centre metrics. Field Service Consultant covers: Work Orders (not Cases), service territories, resource skills and scheduling, the FSL managed package, Gantt/dispatcher console, inventory management, and FSL mobile app. The two exams have limited overlap.',
  },
]

export default function FieldServiceVsServiceCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/field-service-vs-service-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/field-service-consultant', '/certifications/service-cloud']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Field Service Consultant vs Service Cloud Consultant ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both are service-focused Salesforce certifications, but they cover very different ground. Here&apos;s how to decide which to take and in what order.
        </p>
      </div>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Field Service Consultant",
          certSlug: "field-service",
          examTipsSlug: "field-service-exam-tips",
          conditions: [
          "Your clients dispatch technicians, manage work orders, or run field operations",
          "You work in utilities, telco, manufacturing, or facilities management",
          "You want a niche credential with low supply and strong demand",
          "You have hands-on FSL scheduling and configuration experience",
          ],
        }}
        certB={{
          name: "Service Cloud Consultant",
          certSlug: "service-cloud",
          examTipsSlug: "service-cloud-consultant-exam-tips",
          conditions: [
          "Your clients run contact centres, case management, or customer support",
          "You work with Omni-Channel, entitlements, or Knowledge",
          "You want a broader service credential that applies to more clients",
          "You are earlier in your Salesforce consulting career",
          ],
        }}
        recommendation={{
          certName: "Service Cloud Consultant",
          certSlug: "service-cloud",
          examTipsSlug: "service-cloud-consultant-exam-tips",
          reason: "Service Cloud Consultant applies to a much wider range of clients. Take it first to build a strong service foundation, then add Field Service as a specialist credential if your clients operate in field-heavy industries.",
          
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Service Cloud Consultant',
            href: '/certifications/service-cloud',
            badge: 'Take First',
            badgeColor: 'bg-green-100 text-green-800',
            fee: '$200', questions: '60', passing: '~65%',
            focus: 'Contact centre, case management, knowledge, Omni-Channel',
            demand: 'Very High',
            skills: ['Case management & escalation', 'Omni-Channel routing', 'Lightning Knowledge', 'Entitlement processes & SLAs', 'Service console & CTI'],
          },
          {
            name: 'Field Service Consultant',
            href: '/certifications/field-service',
            badge: 'Take Second',
            badgeColor: 'bg-blue-100 text-blue-800',
            fee: '$200', questions: '60', passing: '~65%',
            focus: 'Work orders, scheduling, FSL managed package, mobile',
            demand: 'High (specialist)',
            skills: ['Work Orders & Service Appointments', 'Scheduling policies & rules', 'FSL managed package & Gantt', 'Resource & territory management', 'Inventory & mobile app'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{cert.name}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.badgeColor}`}>{cert.badge}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[{ l: 'Fee', v: cert.fee }, { l: 'Questions', v: cert.questions }, { l: 'Passing', v: cert.passing }].map((s) => (
                <div key={s.l} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-salesforce-dark text-sm">{s.v}</div>
                  <div className="text-xs text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Focus:</strong> {cert.focus}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Job demand:</strong> {cert.demand}</p>
            <ul className="space-y-1 mb-4">
              {cert.skills.map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-salesforce-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href={cert.href} className="inline-flex items-center text-salesforce-blue font-medium text-sm hover:underline">
              Free Practice Questions →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Aspect</th>
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">Service Cloud Consultant</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">Field Service Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Recommended order', scc: 'Take first', fsc: 'Take after Service Cloud' },
                { aspect: 'Core object', scc: 'Case', fsc: 'Work Order' },
                { aspect: 'Routing', scc: 'Omni-Channel (cases)', fsc: 'Scheduling policies (appointments)' },
                { aspect: 'Managed package', scc: 'No', fsc: 'Yes — FSL managed package required' },
                { aspect: 'Typical industries', scc: 'All industries', fsc: 'Utilities, telecom, manufacturing, medical' },
                { aspect: 'Prerequisite for', scc: 'Field Service Consultant (recommended)', fsc: 'Nothing formally' },
                { aspect: 'Difficulty (relative)', scc: 'Moderate', fsc: 'Harder (requires Service Cloud knowledge)' },
                { aspect: 'Avg Salary', scc: '$85–120k (US)', fsc: '$85–120k (US)' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-600">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-900">{row.scc}</td>
                  <td className="py-2 text-gray-900">{row.fsc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Field Service or Service Cloud Consultant?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Implementing Cases, Knowledge, Entitlements, or Omni-Channel routing</td><td className="py-2.5 font-semibold text-salesforce-blue">Service Cloud Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Configuring work orders, scheduling, dispatching, or mobile field workers</td><td className="py-2.5 font-semibold text-purple-700">Field Service Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Client runs a contact centre or customer support operation</td><td className="py-2.5 font-semibold text-salesforce-blue">Service Cloud Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Client has technicians dispatched to job sites (utilities, telecoms, facilities)</td><td className="py-2.5 font-semibold text-purple-700">Field Service Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">New to service implementations — which to take first?</td><td className="py-2.5 font-semibold text-salesforce-blue">Service Cloud first — Field Service builds on top of it</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('field-service-vs-service-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with Service Cloud</h2>
        <p className="text-white mb-6">Free practice questions for both certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/service-cloud" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Service Cloud Practice
          </Link>
          <Link href="/certifications/field-service" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Field Service Practice
          </Link>
        </div>
      </div>
      <RelatedComparisons
        links={[
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
          { slug: "data-cloud-vs-crm-analytics", label: "Data Cloud vs CRM Analytics" },
          { slug: "business-analyst-vs-strategy-designer", label: "Business Analyst vs Strategy Designer" },
        ]}
      />
    </div>
  )
}
