import { Fragment } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
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
import { getCertMetadata, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import type { Metadata } from 'next'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

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
  {
    question: "Which record-triggered flow trigger is used when you need to perform actions before the record is saved?",
    options: [
      "After Save",
      "Before Save",
      "After Delete",
      "Platform Event"
    ],
    correctAnswer: 1,
    explanation: "Before Save flows run before the record is committed to the database, allowing you to modify field values or perform validation."
  },
  {
    question: "What is the purpose of a Permission Set in Salesforce?",
    options: [
      "To replace profiles entirely",
      "To grant additional access to users without changing their profile",
      "To define page layouts",
      "To create validation rules"
    ],
    correctAnswer: 1,
    explanation: "Permission Sets extend user access by granting additional permissions, object access, and app access without modifying the user's profile."
  },
  {
    question: "Which feature allows users to customize their Home page layout with different components?",
    options: [
      "Record types",
      "Lightning App Builder for Home",
      "Profiles only",
      "Validation rules"
    ],
    correctAnswer: 1,
    explanation: "Lightning App Builder can be used to customize the Home page, allowing users to add and arrange components."
  },
  {
    question: "What does a Campaign Influence report help sales managers track?",
    options: [
      "Only campaign spend",
      "Which marketing campaigns influenced opportunities and closed revenue",
      "Email open rates only",
      "Lead source counts only"
    ],
    correctAnswer: 1,
    explanation: "Campaign Influence reporting shows how marketing campaigns contributed to opportunity creation and closed revenue."
  },
  {
    question: "Which Case assignment rule criteria type allows assigning cases based on multiple conditions?",
    options: [
      "Rule criteria only",
      "Rule criteria and formula",
      "Formula only",
      "Manual assignment only"
    ],
    correctAnswer: 1,
    explanation: "Case assignment rules support both rule criteria (field-based conditions) and formula criteria for complex logic."
  },
  {
    question: "What is the primary purpose of Queue-based case routing?",
    options: [
      "To delete cases automatically",
      "To group cases for teams to work from a shared list based on skills or workload",
      "To send email notifications only",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Queues allow cases to be routed to teams rather than individuals, enabling workload balancing and skill-based routing."
  },
  {
    question: "Which object is required to enable Products, Price Books, and Opportunities in Salesforce?",
    options: [
      "Campaign",
      "Opportunity",
      "Product and Price Book",
      "Lead"
    ],
    correctAnswer: 2,
    explanation: "Products and Price Books must be configured to enable the full opportunity-to-quote-to-order sales process."
  },
  {
    question: "What does the 'View All' permission on an object allow?",
    options: [
      "Edit all records",
      "View all records in the org regardless of sharing rules",
      "Delete all records",
      "Transfer all records"
    ],
    correctAnswer: 1,
    explanation: "View All bypasses sharing rules and allows the user to see all records of that object in the organization."
  },
  {
    question: "Which report format displays data in rows and columns with subtotals at the intersection?",
    options: [
      "Tabular",
      "Summary",
      "Matrix",
      "Joined"
    ],
    correctAnswer: 2,
    explanation: "Matrix reports use both row and column grouping, with subtotals at the intersection of rows and columns."
  },
  {
    question: "What is the purpose of Chatter Groups in Salesforce?",
    options: [
      "To replace email",
      "To enable collaboration and discussions around projects, topics, or teams",
      "To create reports",
      "To assign cases"
    ],
    correctAnswer: 1,
    explanation: "Chatter Groups allow teams to collaborate, share files, and discuss work in a centralized feed."
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
        <CertIntroParagraph slug={slug} />
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
                          <th scope="col" className="py-2 pr-4 font-semibold text-gray-900">Section</th>
                          <th scope="col" className="py-2 w-20 font-semibold text-gray-900 text-right">Weight</th>
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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Administrator: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Objects, Fields & Data Model</p>
                <p>Standard Objects (Account, Contact, Lead, Opportunity, Case) are the backbone of Salesforce. Custom Objects extend the platform for business-specific data. Field types include Text, Number, Currency, Date, Picklist, Formula, Lookup, and Master-Detail. Roll-Up Summary fields aggregate child records (count, sum, min, max) — only available on Master-Detail. Junction Objects implement many-to-many relationships using two Master-Detail fields. The ADM-201 exam frequently presents a scenario and asks which field type or relationship to use — know cascade delete rules, sharing implications, and when a Lookup is preferable to Master-Detail.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Model: Profiles, Permission Sets, Roles & Sharing</p>
                <p>Org-wide defaults (OWDs) set the baseline visibility for every record. Role hierarchy opens up access upward — managers see what their subordinates own. Profiles control what users CAN do (CRUD, page layouts, app access). Permission Sets grant additional permissions without changing the profile. Sharing Rules extend access horizontally to peers. Manual Sharing lets record owners share individual records. The exam tests layered security scenarios: know that OWD + Role Hierarchy + Sharing Rules all combine additively — the most permissive rule wins for access.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation: Flows, Approval Processes & Email Alerts</p>
                <p>Record-Triggered Flows are the primary automation tool for administrators — they replace Workflow Rules (retiring) and Process Builder (retiring). Before/After Save triggers fire at different points in the transaction; only After Save can create related records. Scheduled Flows process batches on a time basis. Approval Processes route records through one or more human approvers with entry criteria, approver selection, and final approval/rejection actions. Email Alerts are reusable actions that send templated emails. The exam tests which tool handles a given scenario — Flows for complex logic, Approval Processes for structured human sign-off.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reports, Dashboards & List Views</p>
                <p>Report Types determine which objects and fields are available. Tabular: flat row lists. Summary: grouped with subtotals. Matrix: two-dimensional grouping. Joined: up to 5 report blocks side by side. Dashboards display visual components (charts, gauges, metrics, tables) driven by reports; each component points to a single source report. The Running User determines whose data is shown. Dynamic Dashboards let each viewer see their own data (up to 5 per org in Enterprise). List Views are quick filtered record sets — shareable with groups or all users. Schedule Reports to deliver via email automatically.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sales & Service Cloud Fundamentals</p>
                <p>The Lead Conversion process creates an Account, Contact, and optionally an Opportunity in one action. Opportunity Stages and Probability drive forecasting. Cases are the unit of customer support — they can be created via Web-to-Case, Email-to-Case, or manually. Queues hold Cases or Leads for team assignment. Escalation Rules auto-escalate cases based on age or criteria. Auto-Assignment Rules route incoming Cases or Leads to the right owner. Service Level Agreements (SLAs) are enforced via Entitlements and Milestones. The exam frequently asks about the correct feature for a given support or sales scenario.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Administrator Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The ADM-201 exam is entirely scenario-based: each question describes a business problem and asks you to pick the correct native Salesforce feature. Mastering the mental map of which tool solves which problem is the single most important skill.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Know Your Automation Toolkit</p>
                <p>Understand when to use Record-Triggered Flows (replacing Workflow Rules and Process Builder), Approval Processes for multi-step human approvals, and Scheduled Flows for time-based logic. The exam always tests the right tool for a given requirement.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sharing &amp; Security Is the Highest-Weighted Topic</p>
                <p>Org-Wide Defaults, Role Hierarchies, Sharing Rules, Profiles, and Permission Sets — know how each layer grants or restricts access and the order in which they are evaluated. Most security questions hinge on knowing the minimum-access principle.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reports vs. Dashboards</p>
                <p>Know the four report types (Tabular, Summary, Matrix, Joined) and when each applies. Dashboards refresh from source reports and require a running user whose access determines which data appears.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Management Fundamentals</p>
                <p>Understand import/export tools (Data Import Wizard vs. Data Loader), field-level security, validation rules, and duplicate management. The exam regularly tests which import tool is appropriate for a given scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Read Every Question for the Key Constraint</p>
                <p>Watch for qualifiers like &apos;declarative only,&apos; &apos;minimum configuration,&apos; or &apos;without code.&apos; These constraints eliminate most distractors and point to the correct answer.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

          <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText={getPracticeQuestionsIntro(sampleQuestions.length, ". Click on an answer to select it, then check your answer to see if you're correct.")}
              questions={sampleQuestions}
              extraQuestionsKey="administrator"
            />

            <AdministratorCtaSections />

          <div id="related-certs">
              <RelatedCertifications currentSlug={slug} />
            </div>

            {/* ADM-201 related guides — always-visible internal links */}
            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="adm201-guides-heading">
              <h2 id="adm201-guides-heading" className="text-base font-semibold text-gray-900 mb-3">ADM-201 Study Resources</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/adm-201-study-guide" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 Complete Study Guide ({RELEASE_CURRENT}) →
                  </Link>
                  <span className="text-gray-600 ml-2">All 7 exam sections explained with scenario strategies, key topics, and a 6-week study plan.</span>
                </li>
                <li>
                  <Link href="/adm-201-exam-tips-2026" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 Exam Tips ({RELEASE_CURRENT}) →
                  </Link>
                  <span className="text-gray-600 ml-2">Proven strategies, common mistakes, and a day-of checklist for the Platform Administrator exam.</span>
                </li>
                <li>
                  <Link href="/admin-certification-path" className="text-salesforce-blue font-medium hover:underline">
                    Salesforce Admin Certification Path →
                  </Link>
                  <span className="text-gray-600 ml-2">What to take after ADM-201: App Builder, Advanced Admin, or Consultant track — with career context.</span>
                </li>
                <li>
                  <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 vs App Builder: Which to Take First? →
                  </Link>
                  <span className="text-gray-600 ml-2">Side-by-side comparison of difficulty, overlap, and career value to help you choose the right order.</span>
                </li>
                <li>
                  <p className="text-gray-700">
                    After you pass ADM-201, the most common next steps are{' '}
                    <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">
                      Sales Cloud Consultant
                    </Link>
                    ,{' '}
                    <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">
                      Service Cloud Consultant
                    </Link>
                    , and{' '}
                    <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">
                      Experience Cloud Consultant
                    </Link>
                    {' '}depending on whether your org is sales-, service-, or portal-focused. If you work in marketing operations, consider the{' '}
                    <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue font-medium hover:underline">
                      Marketing Cloud Consultant
                    </Link>
                    {' '}path next.
                  </p>
                </li>
              </ul>
            </section>

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
                { id: 'key-concepts', title: 'Key Concepts' },
                { id: 'scenario-tips', title: 'How to Pass' },
                { id: 'difficulty-heatmap', title: 'Difficulty Heatmap' },
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
