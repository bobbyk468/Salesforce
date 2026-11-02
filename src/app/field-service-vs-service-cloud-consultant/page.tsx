import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Field Service vs Service Cloud Consultant (${RELEASE_YEAR})`
const pageDescription = `Compare Service Cloud and Field Service workflows, product components, and current certification guide scope.`

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
    question: 'Should I study Service Cloud before Field Service?',
    answer: 'There is no universal order established here. Compare the current official guides and begin with the workflows relevant to your project. Field Service includes core features and optional managed-package and mobile components that can be added as needed.',
  },
  {
    question: 'Does Field Service require the managed package?',
    answer: 'Salesforce describes Field Service as core features, a managed package, and a mobile app. Organizations can start with core Field Service and add the managed package and mobile app as needed; requirements depend on the workflow and components in use.',
  },
  {
    question: 'Which workflows distinguish Field Service from Service Cloud?',
    answer: 'Service Cloud commonly centers on customer service work such as cases. Field Service coordinates in-person work through work orders, appointments, scheduling, dispatch, and mobile workers. Salesforce documents both cases and work orders as supported in Field Service.',
  },
  {
    question: 'Can I hold both Field Service Consultant and Service Cloud Consultant?',
    answer: 'A person can pursue both credentials. Whether both are relevant depends on the work they plan to do; compare each current guide and the project requirements.',
  },
  {
    question: 'What is the difference in what each exam covers?',
    answer: 'Use the current official certification guides for exam objectives. At the product level, Service Cloud workflows can include case handling, while Field Service coordinates in-person work using work orders, appointments, dispatch, and mobile workers. Field Service supports cases as well as work orders.',
  },
]

export default function FieldServiceVsServiceCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/field-service-vs-service-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/field-service', '/certifications/service-cloud']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Field Service Consultant vs Service Cloud Consultant ({RELEASE_YEAR})
        </h1>
        <p className="text-lg text-gray-600">
          Compare the customer-support and in-person service workflows in each current official guide; there is no universal certification order.
        </p>
      </div>

      <ContentPageAuthor />
      <section className="my-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Choose study material by workflow</h2>
        <p className="text-sm text-gray-700">Compare current official guide objectives with the work you need to do. Case handling points toward Service Cloud topics; dispatching technicians to appointments points toward Field Service topics. No credential order or prerequisite is asserted.</p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Service Cloud Consultant',
            href: '/certifications/service-cloud',
            badge: 'Customer support',
            badgeColor: 'bg-green-100 text-green-800',
            focus: 'Case handling and customer support; confirm exact objectives in current guide',
            skills: ['Cases and service workflows', 'Review the current official guide for exam objectives'],
          },
          {
            name: 'Field Service Consultant',
            href: '/certifications/field-service',
            badge: 'In-person service',
            badgeColor: 'bg-blue-100 text-blue-800',
            focus: 'Work orders, appointments, scheduling, dispatch, and mobile workers',
            skills: ['Core Field Service features', 'Managed-package dispatcher tools when needed', 'Mobile app workflows when needed'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{cert.name}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.badgeColor}`}>{cert.badge}</span>
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Focus:</strong> {cert.focus}</p>
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
                { aspect: 'Workflow focus', scc: 'Customer service and cases', fsc: 'In-person appointments and work orders; cases are also supported' },
                { aspect: 'Field Service components', scc: 'Not applicable', fsc: 'Core features; managed package and mobile app can be added as needed' },
                { aspect: 'Study sequence', scc: 'Choose based on current guide and project needs', fsc: 'Choose based on current guide and project needs' },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Field Service or Service Cloud workflows?</h2>
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
              <tr><td className="py-2.5 pr-4">Unsure where to begin</td><td className="py-2.5 font-semibold text-salesforce-blue">Compare current official guide objectives with the project workflows</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Learning example: choose by workflow</h2>
        <p className="text-sm text-gray-700">A customer reports a product issue. If the team must classify and resolve the support case, study the Service Cloud workflow. If a technician must visit the site, schedule an appointment, and record completed work, study the Field Service workflow. This example distinguishes product tasks; it is not a claim about exam frequency. See Salesforce’s <a className="text-salesforce-blue hover:underline" href="https://trailhead.salesforce.com/content/learn/modules/field_service_basics/field_service_basics_intro" target="_blank" rel="noreferrer">Field Service overview</a>.</p>
      </section>

      <RelatedGuides links={getRelatedGuides('field-service-vs-service-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Compare service workflows</h2>
        <p className="text-white mb-6">Explore practice questions for either workflow.</p>
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
