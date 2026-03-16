import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Application Architect Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Application Architect study guide: 4 required domain exams, key topics, study order, preparation strategy Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/application-architect-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/application-architect-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce application architect study guide, salesforce application architect credential, application architect domain exams, salesforce architect certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Application Architect Study Guide', url: '/application-architect-study-guide' },
]

const domainExams = [
  { step: '1', name: 'Advanced Administrator', fee: '$200', time: '90 min', summary: 'Advanced platform configuration, automation, reporting, data management, and Salesforce administration at scale.', href: '/advanced-administrator-study-guide' },
  { step: '2', name: 'Platform Developer I', fee: '$200', time: '110 min', summary: 'Apex programming, SOQL, Visualforce, Lightning Web Components, and Salesforce platform development fundamentals.', href: '/pd1-study-guide' },
  { step: '3', name: 'Data Architect', fee: '$400', time: '110 min', summary: 'Data modelling, master data management, large data volume strategy, governance, and migration planning.', href: '/data-architect-study-guide' },
  { step: '4', name: 'Sharing & Visibility Architect', fee: '$400', time: '110 min', summary: 'Designing and implementing Salesforce sharing models, OWD, roles, profiles, permission sets, and territory management.', href: '/sharing-visibility-architect-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Application Architect credential?',
    answer: 'The Salesforce Certified Application Architect is a credential awarded when you pass all four required exams: Advanced Administrator, Platform Developer I, Data Architect, and Sharing & Visibility Architect. The credential is automatically awarded on your Trailhead profile when all four are active and current. It is one of the two architect credentials (along with System Architect) required before applying for the CTA Board Review.',
  },
  {
    question: 'What order should I take the Application Architect domain exams?',
    answer: 'Most candidates start with Advanced Administrator and Platform Developer I — both are well-established exams with abundant study materials and lower fees ($200 each). Data Architect and Sharing & Visibility Architect (both $400) are typically taken after, as they build heavily on the administration and development knowledge from the first two exams. Starting with the cheaper exams also makes strategic sense to build momentum before the higher-cost architect exams.',
  },
  {
    question: 'What is the total cost to earn the Application Architect credential?',
    answer: 'The minimum cost to earn the credential (passing all four exams on the first attempt) is approximately $1,200: Advanced Administrator ($200) + Platform Developer I ($200) + Data Architect ($400) + Sharing & Visibility Architect ($400). If you already hold Advanced Administrator or Platform Developer I from previous certification work, those exam costs are already sunk and the remaining cost is lower.',
  },
  {
    question: 'Do any Application Architect exams overlap with System Architect?',
    answer: 'Yes — Data Architect and Sharing & Visibility Architect appear in both the Application Architect and System Architect credential requirements. Passing these two exams counts toward both credentials simultaneously. For candidates pursuing the full CTA path (which requires both credentials), this overlap reduces the total unique exams needed from nine to seven.',
  },
  {
    question: 'What experience level is the Application Architect credential for?',
    answer: 'The Application Architect credential is designed for experienced Salesforce professionals — typically those with 4–7+ years of hands-on platform experience covering both administration and development. The Advanced Administrator exam assumes deep declarative customisation experience; the Platform Developer I exam requires genuine Apex and LWC development ability. The Data Architect and Sharing & Visibility Architect exams require senior-level thinking about platform design at scale.',
  },
]

export default function ApplicationArchitectStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/application-architect-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Architect Credential Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Application Architect Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          The Application Architect credential is earned by passing four domain exams — not a single test. Here is what each exam covers, the recommended study order, and how to efficiently prepare for all four.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-blue-900 mb-1">Multi-exam credential</h2>
        <p className="text-sm text-blue-800">Application Architect requires passing four domain exams — two at $200 (Advanced Administrator, Platform Developer I) and two at $400 (Data Architect, Sharing &amp; Visibility Architect). The credential is automatically awarded when all four are active. Both Application Architect and System Architect are required to apply for the CTA Board Review.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Credential Type', value: 'Multi-Exam' },
          { label: 'Domain Exams', value: '4' },
          { label: 'Total Min Cost', value: '~$1,200' },
          { label: 'Est. Timeline', value: '6–12 mo' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Four Required Domain Exams</h2>
        <div className="space-y-4">
          {domainExams.map((exam) => (
            <div key={exam.name} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{exam.step}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                  <div className="flex gap-3 text-xs text-gray-500 flex-shrink-0">
                    <span>{exam.fee}</span>
                    <span>{exam.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{exam.summary}</p>
                <Link href={exam.href} className="text-xs font-semibold text-salesforce-blue hover:underline">
                  View {exam.name} Study Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Study Order</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {[
            { phase: 'Phase 1', text: 'Advanced Administrator — Start here if you have a strong admin background. If you already hold this cert, it counts — no need to retake it.' },
            { phase: 'Phase 2', text: 'Platform Developer I — Complete this before the architect exams. Having both ADM and PD1 gives you the full application layer perspective the architect exams assume.' },
            { phase: 'Phase 3', text: 'Data Architect — Now tackle the $400 architect exams. Data architecture is a natural progression from admin/dev knowledge and provides context for sharing design.' },
            { phase: 'Phase 4', text: 'Sharing & Visibility Architect — Finish here. Sharing model design becomes much clearer once you deeply understand the data model from Data Architect study.' },
          ].map((item) => (
            <div key={item.phase} className="flex gap-3">
              <span className="font-bold text-salesforce-blue min-w-[72px] flex-shrink-0">{item.phase}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Application vs System Architect: Overlap Map</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-4 text-gray-500 font-medium">Exam</th>
                <th className="text-center py-2 pr-4 text-gray-500 font-medium">App Architect</th>
                <th className="text-center py-2 text-gray-500 font-medium">System Architect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { exam: 'Advanced Administrator', app: '✓', sys: '' },
                { exam: 'Platform Developer I', app: '✓', sys: '' },
                { exam: 'Data Architect', app: '✓', sys: '✓' },
                { exam: 'Sharing & Visibility Architect', app: '✓', sys: '✓' },
                { exam: 'Integration Architect', app: '', sys: '✓' },
                { exam: 'IAM Architect', app: '', sys: '✓' },
                { exam: 'Dev Lifecycle & Deployment Architect', app: '', sys: '✓' },
              ].map((row) => (
                <tr key={row.exam}>
                  <td className="py-2 pr-4 text-gray-900">{row.exam}</td>
                  <td className="py-2 pr-4 text-center text-green-600 font-semibold">{row.app}</td>
                  <td className="py-2 text-center text-green-600 font-semibold">{row.sys}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">Data Architect and Sharing &amp; Visibility Architect count toward both credentials — passing them once fulfils requirements for both.</p>
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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/system-architect-vs-application-architect" className="text-sm text-salesforce-dark hover:underline font-medium">→ System Architect vs Application Architect — which to take first?</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice for Each Domain Exam</h2>
        <p className="text-blue-100 mb-6">Free practice questions for every exam in the Application Architect credential path.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/advanced-administrator" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Advanced Admin Practice
          </Link>
          <Link href="/certifications/developer-1" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Platform Developer I Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
