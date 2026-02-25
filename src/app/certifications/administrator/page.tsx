import { Fragment } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'

const PracticeQuestionsSection = dynamic(() => import('@/components/PracticeQuestionsSection'), {
  ssr: false,
  loading: () => (
    <div
      id="practice-questions"
      className="mt-12 min-h-[440px] w-full"
      aria-hidden="true"
    />
  ),
})
const AdministratorCtaSections = dynamic(() => import('@/components/AdministratorCtaSections'), {
  ssr: false,
  loading: () => (
    <div className="mt-12 min-h-[340px] w-full" aria-hidden="true" />
  ),
})
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'

import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import PrintChecklistButton from '@/components/PrintChecklistButton'
import { getCertMetadata, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import type { Metadata } from 'next'

const slug = 'administrator'

/** ADM-201 section subtopics (compact for smaller HTML). */
const ADM_201_SECTION_SUBTOPICS: Record<string, string[]> = {
  'Configuration and Setup': ['Company settings', 'UI and accessibility', 'Login policies'],
  'Object Manager and Lightning App Builder': ['Custom objects and fields', 'Page layouts', 'Record types'],
  'Workflow and Process Automation': ['Record-triggered Flow', 'Process Builder', 'Workflow rules'],
  'Data and Analytics Management': ['Reports and report types', 'Dashboards', 'Analytics permissions'],
  'Sales and Marketing Applications': ['Lead and opportunity management', 'Campaigns', 'Products'],
  'Service and Support Applications': ['Cases', 'Case assignment rules', 'Knowledge'],
  'Productivity and Collaboration': ['Chatter', 'Files and content', 'Queues'],
}

// Use generateMetadata to ensure values are fresh and resolved at page generation time
// This prevents metadata merge conflicts with root layout
const descriptionText =
  `Pass Salesforce ADM-201 faster with ${RELEASE_CURRENT} exam weightage, a 4-6 week study plan, and free practice questions with explanations. No sign-up required.`

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getCertMetadata(slug)

  return {
    ...baseMetadata,
    // Explicitly redefine the top-level description
    // to ensure it overrides the layout's default
    description: descriptionText,
    openGraph: {
      ...baseMetadata.openGraph,
      description: descriptionText,
    },
    twitter: {
      ...baseMetadata.twitter,
      description: descriptionText,
    },
  }
}

/**
 * ORIGINAL PRACTICE QUESTIONS - Written specifically for this certification page.
 * These questions are NOT copied from other sources. Each question is original content
 * designed to test concepts covered in the Salesforce Certified Platform Administrator exam.
 * Original content helps with SEO as Google can properly index unique, non-duplicate content.
 */
const sampleQuestions = [
  {
    question: "A sales manager wants to see which of their sales reps have logged the most calls this month. Which report type should they use?",
    options: [
      "Activities with Accounts",
      "Tasks and Events",
      "Accounts with Activities",
      "Activity History"
    ],
    correctAnswer: 1,
    explanation: "The Tasks and Events report type allows you to report on activities including calls, meetings, and tasks across all users.",
    whyWrong: [
      "Activities with Accounts and Accounts with Activities focus on account-related activities, not standalone tasks/calls across reps.",
      "Activity History is a related list on records, not a report type for building reports."
    ]
  },
  {
    question: "What is the maximum number of fields that can be tracked for field history on a custom object?",
    options: [
      "10 fields",
      "15 fields",
      "20 fields",
      "25 fields"
    ],
    correctAnswer: 2,
    explanation: "You can track up to 20 fields per object for field history tracking on both standard and custom objects.",
    whyWrong: [
      "10, 15, and 25 are not the platform limit; the documented maximum per object is 20."
    ]
  },
  {
    question: "A user needs to create a report that shows Opportunities grouped by Account and then by Stage. Which report format should be used?",
    options: [
      "Tabular",
      "Summary",
      "Matrix",
      "Joined"
    ],
    correctAnswer: 1,
    explanation: "Summary reports allow you to group rows of data, view subtotals, and create charts. They're ideal for grouping by Account and then by Stage.",
    whyWrong: [
      "Tabular reports show flat rows only; they do not support grouping or subtotals.",
      "Matrix reports are for row and column grouping (e.g. cross-tab), not hierarchical grouping by two dimensions.",
      "Joined reports combine multiple report types and are not the primary format for simple grouping by Account and Stage."
    ]
  },
  {
    question: "Which permission allows a user to transfer records they don't own?",
    options: [
      "Modify All",
      "Transfer Records",
      "Edit",
      "View All"
    ],
    correctAnswer: 1,
    explanation: "The 'Transfer Records' permission allows users to transfer records they don't own to other users."
  },
  {
    question: "What happens when a Workflow Rule with a Time-Dependent Action is triggered, but the record no longer meets the rule criteria before the action executes?",
    options: [
      "The action executes anyway",
      "The action is removed from the queue",
      "An error is logged",
      "The admin is notified"
    ],
    correctAnswer: 1,
    explanation: "Time-dependent actions are removed from the queue if the record no longer meets the workflow rule criteria when the action is scheduled to execute."
  },
]

export default function AdministratorPage() {
  const examSections = getExamWeightage(slug)

  return (
    <div className="relative min-h-screen bg-pattern">
      {/* Background decorative elements */}
      <div className="hidden lg:block fixed inset-0 overflow-hidden pointer-events-none z-0 motion-reduce:hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-salesforce-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-salesforce-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/3 rounded-full blur-3xl"></div>
      </div>
      
      <div data-critical-content className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 content-wrapper">
        <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />

        {/* Hero section: LCP candidate; data-lcp-hero enables mobile critical CSS in layout */}
        <section data-lcp-hero className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-salesforce-blue via-salesforce-light to-salesforce-blue p-6 sm:p-8 lg:p-10 text-white shadow-md sm:shadow-xl border border-salesforce-blue/20 sm:border-salesforce-blue/30" aria-label="Hero section">
          <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">
            Updated for Winter &apos;26 &bull; Aligned with official Salesforce exam guide
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
            Salesforce Certified Platform Administrator (ADM-201) Study Guide &amp; Free Practice Questions ({RELEASE_CURRENT})
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mb-6">
            Everything you need to pass the Salesforce Certified Platform Administrator exam on your first attempt — mock questions, study plan, and section weightage. No sign-up required.
          </p>
          <p className="text-white/80 text-xs sm:text-sm max-w-2xl mb-6">
            The certification was previously known as ADM-201 (Salesforce Certified Administrator). Many candidates still search for &ldquo;ADM-201&rdquo;, while the current official name is Salesforce Certified Platform Administrator.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-5">
            <Link
              href="#practice-questions"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-salesforce-blue rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] text-base sm:text-lg w-full sm:w-auto border-2 border-white/90"
            >
              Start Free ADM-201 Practice
            </Link>
            <Link
              href="#exam-weightage"
              className="hidden sm:flex items-center justify-center gap-2 px-6 py-3 bg-white/15 text-white rounded-lg font-semibold hover:bg-white/25 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto border border-white/30"
            >
              See 2026 Exam Weightage
            </Link>
          </div>
          {/* Social proof inline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
            <span><strong className="text-white">10,000+</strong> learners use Trailblaze Prep</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>&ldquo;Passed ADM-201 on my first try using the weightage and practice questions.&rdquo;</span>
          </div>
        </section>

        {/* Condensed intro: shorter, benefit-focused (per CTR audit) */}
        <CertPageIntro slug={slug} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Who this is for (persona-based study paths) */}
            <section className="mb-8 rounded-xl border border-gray-100 bg-gray-50/50 p-5 sm:p-6" aria-labelledby="who-this-is-for-heading">
              <h2 id="who-this-is-for-heading" className="text-lg font-bold text-gray-900 mb-3">
                Who is the ADM-201 for?
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong className="text-gray-900">Beginners:</strong> First Salesforce cert; no coding required. Ideal if you’re new to CRM or Trailhead.</li>
                <li><strong className="text-gray-900">Career switchers:</strong> Prove admin skills to move into Salesforce roles. Use section weightage to focus study time.</li>
                <li><strong className="text-gray-900">Experienced admins:</strong> Validate and refresh your knowledge before Advanced Administrator or App Builder.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                Not sure which cert to take first? Browse the full{' '}
                <Link href="/certifications" className="text-salesforce-blue font-medium hover:underline">
                  Salesforce certification path
                </Link>{' '}
                to compare all credentials by role — Administrator, Developer, Consultant, Architect, and more.
              </p>
            </section>

            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
              title={slugToDisplayName(slug)}
              code="ADM-201"
              description="The Salesforce Administrator Certification (ADM-201) validates your knowledge of Salesforce CRM administration, including data management, security, automation, and analytics. Prepare for the Salesforce Certified Administrator exam with this study guide."
              examDetails={{
                questions: 60,
                passingScore: "65%",
                duration: "105 min",
                cost: "$200",
              }}
              topics={[
                "Organization Setup",
                "User Setup",
                "Security & Access",
                "Standard Objects",
                "Sales Cloud",
                "Service Cloud",
                "Workflow Automation",
                "Data Management",
                "Reports & Dashboards",
                "AppExchange"
              ]}
              examSections={examSections}
              examWeightageHeading={getCertExamWeightageHeading(slug)}
              headingLevel="h2"
            />

            <div className="print-checklist-only mt-8 [content-visibility:auto] [contain-intrinsic-size:1px_520px]">
              <details id="syllabus-checklist" className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors list-none flex items-center justify-between gap-2 no-print">
                  <span>ADM-201 exam syllabus checklist</span>
                  <span className="text-gray-500 text-sm font-normal">(expand to view or print)</span>
                </summary>
                <div className="px-5 py-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3 no-print">Use this table to track your study. Sections are from the official exam outline with approximate weight. Key areas per section: setup & configuration, Object Manager & Lightning App Builder, automation (Flow, Process Builder), data & analytics, Sales & Service Cloud, productivity & collaboration.</p>
                  <p className="hidden print:block text-sm font-semibold text-gray-900 mb-2">ADM-201 exam syllabus checklist</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-2 pr-4 font-semibold text-gray-900">Section</th>
                          <th className="py-2 w-20 font-semibold text-gray-900 text-right">Weight</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(examSections ?? []).map((section, i) => (
                          <Fragment key={i}>
                            <tr className="border-b border-gray-100">
                              <td className="py-2.5 pr-4 text-gray-800">{section.name}</td>
                              <td className="py-2.5 text-right font-medium text-gray-700">{section.percentage}%</td>
                            </tr>
                            {ADM_201_SECTION_SUBTOPICS[section.name] && (
                              <tr className="border-b border-gray-50 bg-gray-50/50">
                                <td colSpan={2} className="py-2 pr-4 pl-4 text-xs font-medium text-gray-700">
                                  Key subtopics:{' '}{ADM_201_SECTION_SUBTOPICS[section.name].join(' • ')}
                                </td>
                              </tr>
                            )}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 no-print">
                    <PrintChecklistButton />
                  </div>
                </div>
              </details>
            </div>

            <details className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_420px]">
              <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
                Suggested study timeline (4–6 weeks)
              </summary>
              <div className="hidden group-open:block lg:block">
                <h2 id="study-timeline-heading" className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                  Suggested study timeline (4–6 weeks)
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  If you have an exam date in mind, use this as a guide. Focus on high-weight sections first.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li><strong>Weeks 1–2:</strong> Configuration and Setup, Object Manager and Lightning App Builder (40% combined)</li>
                  <li><strong>Weeks 2–3:</strong> Workflow and Process Automation, Data and Analytics Management (30%)</li>
                  <li><strong>Weeks 3–4:</strong> Sales and Marketing, Service and Support Applications (23%)</li>
                  <li><strong>Weeks 4–5:</strong> Productivity and Collaboration (7%); review weak areas</li>
                  <li><strong>Week 5–6:</strong> Full practice tests and final review</li>
                </ul>
              </div>
            </details>

            {/* Is ADM-201 Hard? + Pass rate guidance (targets high-volume search query + builds trust) */}
            <details id="is-adm-201-hard" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_520px]">
              <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
                Is the ADM-201 Exam Hard?
              </summary>
              <div className="hidden group-open:block lg:block">
                <h2 id="difficulty-heading" className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                  Is the ADM-201 Exam Hard?
                </h2>
                <p className="text-sm text-gray-700 mb-3">
                  The Salesforce Certified Platform Administrator (ADM-201) exam is considered <strong className="text-gray-900">moderate difficulty</strong>. It tests breadth of knowledge across configuration, automation, security, data management, and reporting — but it does <em>not</em> require coding.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li><strong>60 multiple-choice questions</strong> in 105 minutes — roughly 1.75 minutes per question.</li>
                  <li><strong>65% passing score</strong> — you can miss up to 21 questions and still pass.</li>
                  <li><strong>No coding required</strong> — the exam is entirely declarative (clicks, not code).</li>
                  <li><strong>Broad but not deep</strong> — expect questions across all 7 exam sections, weighted by the official outline.</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">Pass Rate Guidance</p>
                  <p className="text-sm text-emerald-700">
                    Most candidates report passing after scoring <strong>75%+</strong> on at least 3 full-length mock exams. If you&apos;re consistently scoring above 75% in practice, you&apos;re likely ready to book your exam.
                  </p>
                </div>
              </div>
            </details>

            {/* ADM-201 Exam Format Explained — targets "ADM-201 exam format" + "scenario-based questions" queries */}
            <details id="exam-format" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_980px]">
              <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
                ADM-201 Exam Format Explained
              </summary>
              <div className="hidden group-open:block lg:block">
                <h2 id="exam-format-heading" className="hidden lg:block text-lg font-bold text-gray-900 mb-3">
                  ADM-201 Exam Format Explained
                </h2>
                <p className="text-sm text-gray-700 mb-3">
                  Understanding the exam format helps you prepare smarter. The Salesforce Certified Platform Administrator (ADM-201) exam is a proctored, online or in-person exam delivered through Webassessor/Kryterion. Here is what to expect on exam day:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Total Questions</p>
                    <p className="text-sm text-gray-700">60 scored + 5 unscored pilot questions = <strong>65 total</strong></p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Time Limit</p>
                    <p className="text-sm text-gray-700">105 minutes (~1.6 minutes per question)</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Passing Score</p>
                    <p className="text-sm text-gray-700">65% (39 of 60 scored questions)</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Question Type</p>
                    <p className="text-sm text-gray-700">Multiple-choice &amp; multiple-select</p>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">How Many Questions Are Scenario-Based?</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Salesforce does not publish the exact breakdown, but based on candidate feedback, roughly <strong>40–50% of ADM-201 questions are scenario-based</strong>. These present a business situation — for example, &ldquo;A sales manager wants to restrict access to a set of records&rdquo; — and ask you to choose the best admin action. The remaining questions test direct knowledge of features, limits, and configuration options.
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  Scenario questions require you to <em>apply</em> knowledge, not just recall it. This is why hands-on practice in a Salesforce Developer Edition org (free from Salesforce) is critical. Simply memorizing content is not enough — you need to understand <strong>when and why</strong> to use each feature.
                </p>

                <h3 className="text-base font-semibold text-gray-900 mb-2">Best Way to Pass ADM-201 on Your First Attempt</h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-3">
                  <li><strong>Start with high-weight sections:</strong> Configuration &amp; Setup (20%) and Object Manager &amp; Lightning App Builder (20%) together cover 40% of the exam.</li>
                  <li><strong>Use a hands-on org:</strong> Set up a free Salesforce Developer Edition org and practice every feature you study.</li>
                  <li><strong>Take timed mock exams:</strong> Simulate real conditions — 65 questions, 105 minutes, no notes. Most candidates who pass score 75%+ on mocks first.</li>
                  <li><strong>Review wrong answers deeply:</strong> Understand <em>why</em> each wrong option is wrong, not just which option is correct.</li>
                  <li><strong>Complete Trailhead trails:</strong> The official &ldquo;Prepare for Your Salesforce Administrator Certification&rdquo; trail maps directly to exam objectives.</li>
                </ul>

                <h3 className="text-base font-semibold text-gray-900 mb-2">Is ADM-201 Harder Than Platform App Builder?</h3>
                <p className="text-sm text-gray-700">
                  ADM-201 is generally considered <strong>slightly easier</strong> than Platform App Builder (DEV-402) because it covers foundational admin topics without deep customization. App Builder goes deeper into data modeling, Lightning components, and business logic. However, ADM-201 is <em>broader</em> — you need to know a little about many topics. If you pass ADM-201 comfortably, you&apos;re well-positioned for{' '}
                  <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">
                    the Platform App Builder exam
                  </Link>.
                </p>
                <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                  Want a focused strategy? Read our{' '}
                  <Link href="/adm-201-exam-tips-2026" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 exam tips ({RELEASE_CURRENT})
                  </Link>{' '}
                  and detailed{' '}
                  <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 vs App Builder comparison
                  </Link>{' '}
                  before booking your exam.
                </p>
              </div>
            </details>

            <div id="exam-prep">
              <ExamPrepContent slug={slug} />
            </div>

            <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText="Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct."
              questions={sampleQuestions}
              extraQuestionsKey="administrator"
            />

            <AdministratorCtaSections />

            <div id="related-certs">
              <RelatedCertifications currentSlug={slug} />
            </div>

            {/* FAQ section - rendered after H1 for proper SEO structure */}
            <div id="faq">
              <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
            </div>
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1">
            <CertTableOfContents
              sections={[
                { id: 'is-adm-201-hard', title: 'Is ADM-201 Hard?' },
                { id: 'exam-format', title: 'Exam Format Explained' },
                { id: 'exam-prep', title: 'Exam Prep Content' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'more-questions', title: 'Get More Questions' },
                { id: 'practice-vs-dumps', title: 'Questions vs Dumps' },
                { id: 'platform-admin-vs-other', title: 'Cert Comparisons' },
                { id: 'related-certs', title: 'Related Certifications' },
                { id: 'faq', title: 'Exam FAQs' },
              ]}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
