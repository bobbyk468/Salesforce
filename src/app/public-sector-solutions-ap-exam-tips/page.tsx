import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Public Sector Solutions AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Public Sector Solutions Accredited Professional exam tips for ${RELEASE_CURRENT}: licences and permits, grants management, OmniStudio, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/public-sector-solutions-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/public-sector-solutions-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Public Sector Solutions AP exam tips ${RELEASE_CURRENT}, how to pass Public Sector Solutions Accredited Professional, Salesforce government certification, PSS exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Public Sector Solutions AP Exam Tips', url: '/public-sector-solutions-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Public Sector Solutions Accredited Professional exam format?',
    answer: 'The Public Sector Solutions AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Public Sector Solutions (PSS): the PSS data model, licences and permits management, grants management, inspections, and how OmniStudio powers citizen-facing digital services.',
  },
  {
    question: 'What is Salesforce Public Sector Solutions?',
    answer: 'Salesforce Public Sector Solutions is an industry cloud for government agencies. It includes pre-built data models and process flows for common government use cases: business licences and permits, grants management, benefits administration, code enforcement inspections, and emergency response. PSS is built on OmniStudio, FlexCards, and the core Salesforce platform.',
  },
  {
    question: 'What are the highest-weight PSS AP exam sections?',
    answer: 'Licences and Permits Management (30%) and Grants Management (25%) together account for 55% of the exam. Configuring the PSS Licence and Permit data model, application intake workflows using OmniStudio, inspection scheduling, and grants lifecycle management are the most heavily tested areas.',
  },
  {
    question: 'How does OmniStudio relate to Public Sector Solutions?',
    answer: 'OmniStudio is the technology foundation for PSS digital services. OmniScripts power citizen-facing application and intake forms. FlexCards display case information and status to government workers. DataRaptors read and write data during application processes. The PSS AP exam tests how OmniStudio components are configured and customised for government use cases — knowing OmniStudio fundamentals is a prerequisite.',
  },
]

export default function PublicSectorSolutionsApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/public-sector-solutions-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/public-sector-solutions-ap-exam-tips' })
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
          Salesforce Public Sector Solutions AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Public Sector Solutions AP exam validates your ability to implement Salesforce PSS for
          government agencies. These tips focus on licences and permits, grants management, and
          OmniStudio-powered digital services that define this accreditation.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Public Sector Solutions AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Licences and permits management</strong> — The PSS Licence and Permit data model (Application, Business Licence, Inspection objects), configuring application intake using OmniScripts, routing applications for review, scheduling inspections, issuing licences with conditions, and managing renewal workflows for recurring licences.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Grants management</strong> — The PSS Grants Management data model (Funding Programme, Grant Application, Award objects), configuring grant application intake and review workflows, managing grant disbursements and milestones, compliance monitoring, and reporting requirements for federal and state grant programmes.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OmniStudio and citizen experience</strong> — Configuring OmniScripts for citizen-facing application forms, FlexCards for case worker desktop views, DataRaptors for reading/writing PSS data, Integration Procedures for orchestrating complex data operations, and Experience Cloud for the public-facing citizen portal.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Licences and Permits Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Grants Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">OmniStudio and Digital Services</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Inspections and Enforcement</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. OmniStudio knowledge is a prerequisite — PSS is built on OmniStudio components.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach PSS AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a government agency scenario and ask which PSS feature, object, or
          configuration addresses it. Use native PSS objects — not generic Salesforce objects
          like custom cases or custom applications.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For licence workflow questions: the PSS licence lifecycle is Application Intake (citizen submits) → Application Review (staff reviews) → Inspection Scheduled (if required) → Inspection Completed → Licence Issued (or Denied). Each stage uses OmniStudio components for the citizen and worker experience. When a scenario describes a business applying for a food service permit, map each step to the PSS Application and Business Licence objects.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For grants questions: Funding Programmes define the grant opportunity (eligibility criteria, funding amount, deadline). Grant Applications are submitted by applicants. Awards record the approved funding. Milestones track progress against grant deliverables. When a question says &apos;track whether a grantee has met their programme deliverables&apos;, the answer is Milestones on the Award record.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For OmniStudio questions in PSS context: OmniScripts = multi-step guided flows for application submission. FlexCards = embedded data displays on case worker console. DataRaptors = data read/write operations. Integration Procedures = server-side orchestration of multiple data operations. When a PSS scenario asks how a citizen &apos;walks through an application step by step&apos;, the answer is an OmniScript — not a Flow or custom LWC.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Public Sector Solutions AP is for implementation consultants delivering government projects.
          Complete the OmniStudio Consultant or Developer credential before pursuing PSS AP — OmniStudio
          is the core technology. The Salesforce Public Sector Solutions Trailmix and PSS implementation
          guide are the primary study resources.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Public Sector Solutions AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/public-sector-solutions-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            PSS AP Practice Questions <ArrowRight className="h-4 w-4" />
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
