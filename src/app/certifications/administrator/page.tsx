import { Fragment } from 'react'
import Link from 'next/link'
import CertificationCard from '@/components/CertificationCard'
import QuestionCard from '@/components/QuestionCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import PrintChecklistButton from '@/components/PrintChecklistButton'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import type { Metadata } from 'next'

const slug = 'administrator'

/** ADM-201 section subtopics for expanded syllabus depth (reference-grade content). */
const ADM_201_SECTION_SUBTOPICS: Record<string, string[]> = {
  'Configuration and Setup': ['Company settings', 'Fiscal year and currencies', 'UI and accessibility settings', 'Organization limits', 'Login policies'],
  'Object Manager and Lightning App Builder': ['Custom objects and fields', 'Page layouts', 'Lightning pages and components', 'Record types', 'Compact layouts'],
  'Workflow and Process Automation': ['Record-triggered Flow', 'Order of execution', 'Process Builder', 'Workflow rules', 'Approval processes', 'Automation limits'],
  'Data and Analytics Management': ['Data import/export', 'Reports and report types', 'Dashboards', 'Report folders and sharing', 'Analytics permissions'],
  'Sales and Marketing Applications': ['Lead and opportunity management', 'Campaigns', 'Products and price books', 'Forecasting (if in scope)'],
  'Service and Support Applications': ['Cases', 'Case assignment rules', 'Knowledge', 'Service Console', 'Entitlements'],
  'Productivity and Collaboration': ['Chatter', 'Files and content', 'Queues', 'Collaboration tools'],
}

// Use generateMetadata to ensure values are fresh and resolved at page generation time
// This prevents metadata merge conflicts with root layout
const descriptionText =
  'Prepare for the Salesforce Certified Platform Administrator (ADM-201) exam with updated Winter \'26 study guide, section-wise weightage, free practice questions, and full-length mock exams. No sign-up required.'

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
    question: "Which Lightning App Builder component allows users to filter records on a record page?",
    options: [
      "Related List",
      "Related Record",
      "Filter",
      "List View"
    ],
    correctAnswer: 2,
    explanation: "The Filter component in Lightning App Builder allows users to filter records displayed on a record page using predefined criteria."
  },
  {
    question: "A company wants to ensure that all Leads are automatically assigned to the correct sales rep based on geographic territory. What should be configured?",
    options: [
      "Lead Assignment Rules",
      "Workflow Rules",
      "Process Builder",
      "Flow"
    ],
    correctAnswer: 0,
    explanation: "Lead Assignment Rules automatically assign leads to users or queues based on criteria such as geographic territory, industry, or lead source."
  },
  {
    question: "What is the purpose of a Validation Rule?",
    options: [
      "To automatically assign records to users",
      "To prevent invalid data from being saved",
      "To send email notifications",
      "To update field values automatically"
    ],
    correctAnswer: 1,
    explanation: "Validation Rules enforce data quality by preventing invalid data from being saved. They check data against criteria and display an error message if the criteria are not met."
  },
  {
    question: "Which sharing setting allows users to see all records in an org regardless of ownership?",
    options: [
      "Private",
      "Public Read Only",
      "Public Read/Write",
      "Controlled by Parent"
    ],
    correctAnswer: 2,
    explanation: "Public Read/Write sharing setting allows all users to see, edit, and transfer all records regardless of who owns them."
  },
  {
    question: "A user needs to create a custom field that calculates the number of days between two date fields. Which field type should be used?",
    options: [
      "Formula (Number)",
      "Formula (Date)",
      "Number",
      "Date"
    ],
    correctAnswer: 0,
    explanation: "A Formula field with Number return type can calculate the difference between two date fields, returning the number of days as a numeric value."
  },
  {
    question: "What is the maximum number of master-detail relationships allowed on a custom object?",
    options: [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "A custom object can have a maximum of 2 master-detail relationships. This limit ensures data integrity and prevents overly complex data models."
  },
  {
    question: "Which feature allows administrators to track changes to specific fields over time?",
    options: [
      "Field History Tracking",
      "Audit Trail",
      "Change Data Capture",
      "Field Updates"
    ],
    correctAnswer: 0,
    explanation: "Field History Tracking allows administrators to track changes to specific fields on standard and custom objects, storing up to 20 fields per object."
  },
  {
    question: "A company wants to automatically send an email when an Opportunity reaches the 'Closed Won' stage. Which automation tool should be used?",
    options: [
      "Workflow Rule",
      "Process Builder",
      "Flow",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "Flow (Record-Triggered Flow) is the recommended automation tool for sending emails when records meet specific criteria. Workflow Rules and Process Builder are being deprecated in favor of Flow."
  },
  {
    question: "What is the purpose of a Roll-Up Summary Field?",
    options: [
      "To summarize data from child records",
      "To link two objects together",
      "To validate data entry",
      "To send email notifications"
    ],
    correctAnswer: 0,
    explanation: "Roll-Up Summary Fields calculate values from related records in a master-detail relationship, such as summing amounts, counting records, or finding min/max values."
  },
]

export default function AdministratorPage() {
  const examSections = getExamWeightage(slug)

  return (
    <div className="relative min-h-screen bg-pattern">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-salesforce-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-salesforce-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 content-wrapper">
        <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} examCode="ADM-201" />

        <section className="my-6 rounded-xl border border-gray-100 bg-white p-4 sm:p-5" aria-label="Learner feedback">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Trusted by learners</p>
          <p className="text-gray-700 text-sm sm:text-base mb-3">
            <span className="font-bold text-salesforce-blue">10,000+</span> exam takers use Trailblaze Prep to study for Salesforce certifications.
          </p>
          <blockquote className="text-gray-600 text-sm italic border-l-2 border-salesforce-blue/30 pl-3 mb-3">
            &ldquo;The section weightage and practice questions made it clear what to focus on. Passed ADM-201 on my first try.&rdquo;
          </blockquote>
          <blockquote className="text-gray-600 text-sm italic border-l-2 border-salesforce-blue/30 pl-3">
            &ldquo;Studying for 6 weeks with the checklist and full question bank—passed with room to spare.&rdquo;
          </blockquote>
        </section>
        
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
            </section>

            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
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
              h1Text={getCertH1Text(slug)}
              examWeightageHeading={getCertExamWeightageHeading(slug)}
            />

            <div className="print-checklist-only mt-8">
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
                                <td colSpan={2} className="py-2 pr-4 pl-4 text-gray-600 text-xs">
                                  <span className="font-medium text-gray-700">Key subtopics:</span>{' '}
                                  {ADM_201_SECTION_SUBTOPICS[section.name].join(' • ')}
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

            <section className="mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" aria-labelledby="study-timeline-heading">
              <h2 id="study-timeline-heading" className="text-lg font-bold text-gray-900 mb-3">
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
            </section>

            <div id="exam-prep">
              <ExamPrepContent slug={slug} />
            </div>

            <div id="practice-questions" className="mt-12 sm:mt-16">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{getCertPracticeQuestionsHeading(slug)}</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
                  Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct.
                </p>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                {sampleQuestions.map((q, index) => (
                  <QuestionCard
                    key={index}
                    questionNumber={index + 1}
                    question={q.question}
                    options={q.options}
                    correctAnswer={q.correctAnswer}
                    explanation={q.explanation}
                    explanationSummary={q.explanation ? (q.explanation.split(/[.!?]/)[0]?.trim() ? q.explanation.split(/[.!?]/)[0].trim() + '.' : q.explanation) : undefined}
                    whyWrong={'whyWrong' in q ? (q as { whyWrong?: string[] }).whyWrong : undefined}
                  />
                ))}
              </div>
            </div>

            <div id="more-questions" className="mt-12 sm:mt-16 bg-gradient-to-br from-salesforce-blue/10 via-salesforce-light/5 to-salesforce-blue/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center border border-salesforce-blue/20 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Get the Full ADM-201 Question Bank</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base max-w-xl mx-auto">
                Go beyond the free sample: full bank aligned to the official exam outline.
              </p>
              <ul className="text-left text-sm text-gray-700 max-w-md mx-auto mb-4 space-y-2 list-disc list-inside">
                <li><strong>500+ questions</strong> — cover every section and weight band</li>
                <li><strong>Detailed explanations</strong> — understand why each answer is correct (and why others are wrong)</li>
                <li><strong>Exam-style format</strong> — similar length and difficulty to the real ADM-201</li>
                <li><strong>By section</strong> — practice weak areas or do full mock exams</li>
              </ul>
              <div className="text-left text-sm text-gray-700 max-w-md mx-auto mb-4 p-4 bg-white/60 rounded-lg border border-salesforce-blue/10">
                <p className="font-semibold text-gray-900 mb-2">What you get:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li><strong>Access:</strong> Web-based; use from any device</li>
                  <li><strong>Includes:</strong> Timed full-length mocks + section-wise practice tests</li>
                  <li><strong>Validity:</strong> 30, 60, or 90 days (contact for options)</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-1">
                Most candidates book the exam after scoring <strong>75%+</strong> on full mocks.
              </p>
              <p className="text-gray-500 text-xs max-w-md mx-auto mb-6">
                Candidates who complete full mock exams report strong first-time pass rates. Contact us for pricing and access—mention ADM-201.
              </p>
              <a
                href="/contact?exam=Salesforce%20Certified%20Platform%20Administrator%20(ADM-201)"
                className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
              >
                Get Full Question Bank
              </a>
            </div>

            <section id="platform-admin-vs-other" className="mt-12 sm:mt-16 rounded-xl border border-gray-100 bg-gray-50/50 p-6" aria-labelledby="comparison-heading">
              <h2 id="comparison-heading" className="text-xl font-bold text-gray-900 mb-4">
                Platform Administrator vs Other Salesforce Certifications
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Choosing the right certification depends on your experience and goals. Here’s how the Platform Administrator (ADM-201) compares to common next steps:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong className="text-gray-900">Platform Administrator vs Advanced Administrator (ADM-211):</strong>{' '}
                  ADM-201 is the entry-level admin cert; Advanced Administrator builds on it with deeper configuration, integration, and solution design. Take ADM-201 first, then consider{' '}
                  <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">
                    Advanced Administrator (ADM-211) study guide
                  </Link>.
                </li>
                <li>
                  <strong className="text-gray-900">Platform Administrator vs Platform App Builder (DEV-402):</strong>{' '}
                  Both are declarative and don’t require coding. App Builder focuses on building custom apps, objects, and Lightning components. If you enjoy customizing the platform after ADM-201, see our{' '}
                  <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">
                    Platform App Builder (DEV-402) study guide
                  </Link>.
                </li>
              </ul>
            </section>

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
                { id: 'who-this-is-for-heading', title: 'Who is ADM-201 for?' },
                { id: 'syllabus-checklist', title: 'Syllabus checklist' },
                { id: 'study-timeline-heading', title: 'Suggested study timeline' },
                { id: 'exam-prep', title: 'Exam Prep Content' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'more-questions', title: 'Get More Questions' },
                { id: 'platform-admin-vs-other', title: 'Platform Admin vs Other Certs' },
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
