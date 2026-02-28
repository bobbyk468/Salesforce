import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Energy &amp; Utilities Cloud AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Energy &amp; Utilities Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: customer engagement, service management, OmniStudio, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/energy-utilities-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/energy-utilities-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Energy Utilities Cloud AP exam tips ${RELEASE_CURRENT}, how to pass Energy Utilities AP, Salesforce utilities certification, EUC exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Energy & Utilities Cloud AP Exam Tips', url: '/energy-utilities-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Energy & Utilities Cloud Accredited Professional exam format?',
    answer: 'The Energy &amp; Utilities Cloud AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Energy &amp; Utilities Cloud (EUC): customer engagement, service management, outage management, billing inquiries, and OmniStudio-powered digital service experiences for utility companies.',
  },
  {
    question: 'What are the highest-weight Energy & Utilities Cloud AP exam sections?',
    answer: 'Customer Engagement and Service Management (30%) and OmniStudio Digital Services (25%) together account for 55% of the exam. Managing customer accounts, handling billing inquiries, configuring outage management workflows, and building OmniScript-powered digital service journeys are the most tested areas.',
  },
  {
    question: 'What is the EUC data model and how does it differ from standard Salesforce?',
    answer: 'Energy &amp; Utilities Cloud adds utility-specific objects to the Salesforce data model: Premises (the physical location where service is delivered), Service Points (meter locations), Service Agreements (the contract between the utility and customer), and Billing Accounts (financial relationship). The exam tests how these industry-specific objects relate to each other and to standard Salesforce objects like Accounts and Contacts.',
  },
  {
    question: 'How does OmniStudio integrate with Energy & Utilities Cloud?',
    answer: 'OmniStudio is the technology layer for EUC digital services. OmniScripts power customer self-service flows (start/stop service, report an outage, request a bill extension). FlexCards display customer account summaries and service status. DataRaptors read and write EUC-specific data objects. Integration Procedures orchestrate complex utility transactions like service transfers or payment arrangements.',
  },
]

export default function EnergyUtilitiesApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/energy-utilities-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/energy-utilities-ap-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Energy &amp; Utilities Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Energy &amp; Utilities Cloud AP exam validates your ability to implement Salesforce EUC
          for electric, gas, and water utilities. These tips focus on customer service workflows,
          the EUC data model, and OmniStudio digital services that define this accreditation.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Energy &amp; Utilities Cloud AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Customer engagement and service management</strong> — Managing utility customer accounts (Account + Premises + Service Point relationships), handling billing inquiries and payment arrangements, processing service transfers (move in/move out), and outage management workflows for field crew dispatch and customer communication during outages.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OmniStudio digital services</strong> — OmniScripts for customer self-service (start service, stop service, report outage, enrol in programmes), FlexCards for agent desktop views of customer accounts and service history, DataRaptors for reading EUC-specific data, and Integration Procedures for complex utility transactions spanning multiple systems.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>EUC data model and configuration</strong> — The EUC data model: Premises (physical address), Service Points (meters at the premises), Service Agreements (the contract for each service type), Billing Accounts, and Usage data. Understanding how these relate to each other and to standard Salesforce Account/Contact records. Configuring EUC settings for your utility type (electric, gas, water).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Customer Engagement and Service Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">OmniStudio Digital Services</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">EUC Data Model and Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Analytics and Reporting</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. OmniStudio knowledge is essential — EUC digital services are built entirely on OmniStudio components.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Energy &amp; Utilities AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a utility company scenario and ask which EUC feature, object, or OmniStudio
          component addresses it. Utility industry knowledge (billing cycles, meter reads, outage management)
          helps interpret scenarios correctly.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: a customer (Account) can have multiple Premises (properties they occupy). Each Premises can have multiple Service Points (meters — electric meter, gas meter). Each Service Point has a Service Agreement (the active service contract). A single customer moving from one house to another creates a Move Out (stop service at old Premises) and Move In (start service at new Premises) transaction.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For OmniStudio questions: a &apos;Start Service&apos; customer journey uses an OmniScript to collect the new address, verify eligibility, look up available Service Points using a DataRaptor, create the Service Agreement using an Integration Procedure, and confirm the start date. When a question asks how to &apos;build a multi-step customer web form to start electric service&apos;, OmniScript is the answer — not Flow or a custom LWC form.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For outage management questions: outages are tracked against the Premises (which addresses are affected). Service crews are dispatched using Field Service Lightning integration. Customer notification uses Marketing Cloud or outbound messaging. When a question describes &apos;automatically notify all affected customers when an outage is restored&apos;, the answer involves outage status updates triggering customer communications through Marketing Cloud or Messaging.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Energy &amp; Utilities Cloud AP is for consultants and in-house teams implementing EUC for
          electric, gas, or water utilities. Complete the OmniStudio Consultant credential before
          pursuing EUC AP — OmniStudio is the core technology layer. The EUC Trailmix and
          implementation guide on Trailhead are the primary study resources.
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

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Energy &amp; Utilities Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/energy-utilities-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            EUC AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/omnistudio-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OmniStudio Consultant Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
