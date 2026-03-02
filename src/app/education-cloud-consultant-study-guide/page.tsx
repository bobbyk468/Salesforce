import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Education Cloud Consultant Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Education Cloud Consultant study guide: exam sections, EDA data model, student success, advising. Pass in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/education-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/education-cloud-consultant-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `education cloud consultant study guide, salesforce education cloud exam, EDA certification prep, salesforce education cloud consultant 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Education Cloud Consultant Study Guide', url: '/education-cloud-consultant-study-guide' },
]

const examSections = [
  { name: 'Education Cloud Implementation', weight: 27, note: 'EDA data model, Education Cloud setup, configuration, and implementing education-specific Salesforce solutions.' },
  { name: 'Student Success Management', weight: 23, note: 'Advising & Coaching framework, case load management, alerts, and tracking student success indicators.' },
  { name: 'Admissions & Recruitment', weight: 20, note: 'Application management, recruitment pipelines, programme selection, and admissions workflow design.' },
  { name: 'Analytics & Reporting', weight: 17, note: 'Reporting on student outcomes, enrolment metrics, advising caseloads, and configuring Education Cloud dashboards.' },
  { name: 'Integration & Platform Tools', weight: 13, note: 'Integrating Education Cloud with SIS (Student Information Systems), third-party apps, and standard Salesforce platform tools.' },
]

const faqItems = [
  {
    question: 'What is the Education Cloud Consultant certification?',
    answer: 'The Salesforce Certified Education Cloud Consultant validates expertise in implementing Salesforce for higher education and K-12 institutions. It covers the Education Data Architecture (EDA), student success management, advising workflows, admissions processes, and reporting for educational outcomes. It is suited for Salesforce consultants, implementation partners, and internal Salesforce admins working at universities, colleges, or school districts.',
  },
  {
    question: 'What is EDA (Education Data Architecture)?',
    answer: 'The Education Data Architecture (EDA) is Salesforce\'s open-source data model for education institutions, built on the Salesforce platform. EDA includes custom objects like Academic Program, Course, Course Enrollment, Plan Requirement, and Term — all designed around the student lifecycle. The exam expects solid knowledge of the EDA data model, object relationships, and how standard Salesforce objects (Contacts, Accounts, Affiliations) map to EDA concepts.',
  },
  {
    question: 'Do I need the Salesforce Administrator certification before Education Cloud Consultant?',
    answer: 'Salesforce recommends holding the Administrator certification before attempting Education Cloud Consultant, though it is not strictly required to sit the exam. Strong platform knowledge equivalent to Administrator level is essential — the exam assumes you understand core Salesforce configuration, security models, and automation. Candidates without admin-level knowledge typically struggle significantly on the implementation and configuration sections.',
  },
  {
    question: 'What is the Education Cloud Consultant exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 105-minute time limit. The passing score is approximately 63%. The exam costs $200 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'What hands-on practice is available for Education Cloud?',
    answer: 'Salesforce provides a free Education Cloud trial environment through the Trailhead hands-on org (playground). The Education Data Architecture (EDA) managed package can be installed in any Salesforce Developer Edition or Sandbox org. Practice configuring EDA objects, setting up advising programmes, and building student success dashboards. Trailhead also has Education Cloud-specific trails and modules that are valuable for exam preparation.',
  },
]

export default function EducationCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/education-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Industry Cloud Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Education Cloud Consultant Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified Education Cloud Consultant exam — EDA data model, student success management, admissions, and implementation best practices.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~63%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.6}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key EDA Data Model Objects</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Object</th>
                <th className="text-left py-2 text-gray-500 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { obj: 'Contact', purpose: 'Students, faculty, staff — the central person record in Education Cloud' },
                { obj: 'Account (Educational Institution)', purpose: 'The academic institution, department, or programme container' },
                { obj: 'Academic Program', purpose: 'Degree programmes, certificates, and tracks offered by the institution' },
                { obj: 'Course', purpose: 'Individual courses within an academic programme' },
                { obj: 'Course Enrollment', purpose: 'Junction object linking a student (Contact) to a Course Offering' },
                { obj: 'Term', purpose: 'Academic period (semester, quarter) within which courses are offered' },
                { obj: 'Plan Requirement', purpose: 'Defines the requirements a student must fulfil within an academic programme' },
              ].map((row) => (
                <tr key={row.obj}>
                  <td className="py-2 pr-4 text-gray-900 font-medium">{row.obj}</td>
                  <td className="py-2 text-gray-700">{row.purpose}</td>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Education Cloud Questions</h2>
        <p className="text-blue-100 mb-6">Free practice questions for the Salesforce Education Cloud Consultant exam.</p>
        <Link href="/certifications/education-cloud-consultant" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-blue-100">
          Compare: <Link href="/education-cloud-vs-nonprofit-cloud-consultant" className="underline hover:text-white font-medium">Education Cloud vs Nonprofit Cloud Consultant</Link>
        </p>
      </div>
    </div>
  )
}
