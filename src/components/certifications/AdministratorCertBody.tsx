import { serializeJsonLd } from '@/lib/serialize-json-ld'
import { getPracticeQuestionsForExam, hasImportedPracticeQuestions } from '@/lib/git-practice-questions'
import Link from '@/components/AppLink'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'

import PracticeQuestionsSection from '@/components/PracticeQuestionsSection'
import AdministratorCtaSections from '@/components/AdministratorCtaSections'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import { getQuizJsonLd } from '@/lib/schema-data'
import { SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'
import CertPageIntro from '@/components/CertPageIntro'

import ExamFeesSection from '@/components/ExamFeesSection'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import OrderOfExecutionDiagram from '@/components/certifications/OrderOfExecutionDiagram'
import Adm201MergedGuide from '@/components/certifications/Adm201MergedGuide'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import CertInsightBlock from '@/components/CertInsightBlock'
import {
  getInitialPracticeQuestions,
  getVisiblePracticeQuestions,
} from '@/lib/practice-question-lite'
import {
  administratorSampleQuestions,
} from '@/lib/cert-page-spike/administrator-data'
import { ADMINISTRATOR_EXTRA_QUESTIONS } from '@/lib/question-banks/administrator-extra-questions'
import LastUpdated from '@/components/LastUpdated'
import CiteThisPage from '@/components/CiteThisPage'
import { RELEASE_YEAR } from '@/lib/release-data'

export default function AdministratorCertBody({ slug }: { slug: string }) {
  const examSections = getExamWeightage(slug)
  const authoredQuestions = getPracticeQuestionsForExam(slug, administratorSampleQuestions)
  const initialQuestions = getInitialPracticeQuestions(
    hasImportedPracticeQuestions(slug) ? authoredQuestions : [...authoredQuestions, ...ADMINISTRATOR_EXTRA_QUESTIONS],
  )

  return (
    <div className="min-h-screen bg-pattern">
      <div data-critical-content className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 content-wrapper">
        <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              getQuizJsonLd(`${slugToDisplayName(slug)} Practice Questions`, getVisiblePracticeQuestions(initialQuestions), SLUG_TO_EXAM_CODE[slug]),
            ),
          }}
        />
        {/* Multi-alias EducationalOccupationalCredential: current name, legacy ADM-201,
            current Plat-Admn-201 exam code, and the CRT-101 prep course code all resolve
            search intent to this one URL. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              '@context': 'https://schema.org',
              '@type': 'EducationalOccupationalCredential',
              '@id': 'https://www.trailblazeprep.com/certifications/administrator#credential',
              name: 'Salesforce Certified Platform Administrator',
              alternateName: [
                'Platform Administrator',
                'Salesforce Platform Administrator',
                'Salesforce Certified Administrator',
                'Salesforce Administrator Certification',
                'Salesforce Admin Certification',
                'ADM-201',
                'ADM 201',
                'Plat-Admn-201',
                'CRT-101',
              ],
              identifier: [
                { '@type': 'PropertyValue', propertyID: 'Exam Code', value: 'Plat-Admn-201' },
                { '@type': 'PropertyValue', propertyID: 'Legacy Exam Code', value: 'ADM-201' },
                { '@type': 'PropertyValue', propertyID: 'Official Prep Course Code', value: 'CRT-101' },
              ],
              description:
                'The Salesforce Certified Platform Administrator (Plat-Admn-201 / ADM-201) credential validates skills in configuring, governing, automating, and managing data, security, reporting, and Agentforce AI across the Salesforce Platform.',
              url: 'https://www.trailblazeprep.com/certifications/administrator',
              credentialCategory: 'Certification',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Salesforce',
                url: 'https://trailhead.salesforce.com/credentials/platformadministrator',
              },
            }),
          }}
        />
        <CertIntroParagraph slug={slug} />
        {/* Hero section: LCP candidate; data-lcp-hero enables mobile critical CSS in layout */}
        <section data-lcp-hero className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-salesforce-blue via-salesforce-light to-salesforce-blue p-6 sm:p-8 lg:p-10 text-white shadow-md sm:shadow-xl border border-salesforce-blue/20 sm:border-salesforce-blue/30" aria-label="Hero section">
          <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">
            Independent study resource &bull; Check the current Salesforce exam guide before booking
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
            Salesforce Certified Platform Administrator (Plat-Admn-201 / ADM-201) Exam Questions &amp; Study Guide
          </h1>
        <LastUpdated />
          <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
            Prepare with Salesforce Certified Platform Administrator exam questions for Plat-Admn-201 (ADM-201), plus a study plan and topic weightage. Free practice, no sign-up required.
          </p>
          <p className="text-white/80 text-xs sm:text-sm max-w-2xl mb-6">
            This credential was previously called Salesforce Certified Administrator and is often known by its exam code, ADM-201. Its current name is Salesforce Certified Platform Administrator.
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
            <span>Use this material alongside the current official exam guide.</span>
          </div>
        </section>

        {/* Condensed intro: shorter, benefit-focused (per CTR audit) */}
        <CertPageIntro slug={slug} />
        <ContentPageAuthor />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Who this is for (persona-based study paths) */}
            <section className="mb-8 rounded-xl border border-gray-100 bg-gray-50/50 p-5 sm:p-6" aria-labelledby="who-this-is-for-heading">
              <h2 id="who-this-is-for-heading" className="text-lg font-bold text-gray-900 mb-3">
                Who is the ADM-201 for?
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong className="text-gray-900">Beginners:</strong> You are new to CRM or Trailhead and want to learn the basics of Salesforce administration.</li>
                <li><strong className="text-gray-900">Career switchers:</strong> You want to move into a Salesforce role and show your administration knowledge.</li>
                <li><strong className="text-gray-900">Experienced admins:</strong> You already manage Salesforce and want to refresh your skills before studying for another credential.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                If you are choosing your first credential, explore the{' '}
                <Link href="/certifications" className="text-salesforce-blue font-medium hover:underline">
                  Salesforce certification path
                </Link>{' '}
                to compare credentials for administrator, developer, consultant, and architect roles.
              </p>
            </section>

            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            <OfficialSourceRef slug={slug} />

            <CertificationCard
              slug={slug}
              title={slugToDisplayName(slug)}
              code="ADM-201"
              description="The Salesforce Administrator exam (ADM-201) tests whether you can run an org day to day: users and security, the object model and Lightning App Builder, automation with Flow, reports and dashboards, and the Agentforce features added to the outline. The exam is 60 scored questions in 105 minutes, with a 68% pass mark. Data and Analytics Management is the heaviest section at 17%, with Configuration and Setup, Object Manager and Lightning App Builder, and Automation at 15% each."
              examDetails={{
                questions: 60,
                passingScore: "68%",
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

            <p className="mt-3 text-sm text-gray-700">
              Already have section-level scores from a practice test? Run them through the{' '}
              <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
                Salesforce Exam Score Calculator
              </Link>{' '}
              to see where you stand against the 68% pass mark.
            </p>

            {/* Is ADM-201 Hard? + Pass rate guidance (targets high-volume search query + builds trust) */}
            <details id="is-adm-201-hard" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" open>
              <summary className="cursor-pointer list-none">
                <h2 className="text-lg font-bold text-gray-900">Is the Salesforce Platform Administrator (Plat-Admn-201) Exam Hard?</h2>
              </summary>
              <div className="hidden group-open:block lg:block">
                <p className="text-sm text-gray-700 mb-3">
                  The Platform Administrator exam covers several areas, including setup, security, automation, data, and reports. You need to choose the right feature for a task; you do not need to write code.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li><strong>60 multiple-choice questions</strong> in 105 minutes, or about one minute and 45 seconds per scored question.</li>
                  <li><strong>68% passing score</strong>: this is about 41 correct answers out of 60 scored questions.</li>
                  <li><strong>No coding required</strong>: focus on Salesforce configuration tools.</li>
                  <li><strong>Eight exam sections</strong>: use the official outline to see how much each topic counts.</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">Practice Readiness</p>
                  <p className="text-sm text-emerald-700">
                    Use timed practice tests to find the topics you need to revisit. An <strong>80%+</strong> practice target can give you room above the listed passing score, but it does not guarantee an exam result.
                  </p>
                </div>
              </div>
            </details>

            {/* ADM-201 Exam Format Explained, targets "ADM-201 exam format" + "scenario-based questions" queries */}
            <details id="exam-format" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" open>
              <summary className="cursor-pointer list-none">
                <h2 className="text-lg font-bold text-gray-900">Salesforce Platform Administrator Exam Format Explained</h2>
              </summary>
              <div className="hidden group-open:block lg:block">
                <p className="text-sm text-gray-700 mb-3">
                  You can take the supervised Platform Administrator exam online or at a test centre. Review the current Salesforce guide for booking details. Here is the listed format:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Total Questions</p>
                    <p className="text-sm text-gray-700">60 scored questions, plus up to 5 unscored questions</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Time Limit</p>
                    <p className="text-sm text-gray-700">105 minutes</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Passing Score</p>
                    <p className="text-sm text-gray-700">68% (41 of 60 scored questions)</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Question Type</p>
                    <p className="text-sm text-gray-700">Multiple-choice &amp; multiple-select</p>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">How Many Questions Are Scenario-Based?</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Some questions describe a business need and ask you to select a Salesforce feature or action. Others check your knowledge of setup and platform features. Salesforce does not publish an exact scenario-question percentage.
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  Practise in a free Salesforce Developer Edition org. Setting up features yourself helps you explain when to use them and why they fit a requirement.
                </p>

                <h3 className="text-base font-semibold text-gray-900 mb-2">Is ADM-201 Harder Than Platform App Builder?</h3>
                <p className="text-sm text-gray-700">
                  Administrator covers a broad range of setup and administration topics. Platform App Builder focuses more on designing custom apps, data models, and business logic. Your experience will affect which exam feels harder. You can compare these topics before choosing{' '}
                  <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">
                    the Platform App Builder exam
                  </Link>.
                </p>
                <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                  Want a focused strategy? Jump to the{' '}
                  <Link href="#scenario-rules" className="text-salesforce-blue font-medium hover:underline">
                    scenario decision rules
                  </Link>{' '}
                  and the{' '}
                  <Link href="#study-plan" className="text-salesforce-blue font-medium hover:underline">
                    6-week study plan
                  </Link>{' '}
                  below, or read the detailed{' '}
                  <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 vs App Builder comparison
                  </Link>{' '}
                  before booking your exam.
                </p>
              </div>
            </details>

            <section id="adm201-traps" className="mt-8 rounded-xl border border-amber-100 bg-amber-50/40 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">Exam reviewer notes</p>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Platform Administrator Exam Traps and Readiness Checklist</h2>
              <p className="text-sm text-gray-700 mb-5">
                On a scenario question, several features may look useful. Read the requirement carefully and choose the one that meets its specific conditions.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="rounded-lg border border-white bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Common traps to avoid</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-medium text-gray-900">Profiles vs permission sets vs roles</p>
                      <p className="text-gray-600">Profiles and permission sets control object/field/app permissions. Roles affect record visibility through hierarchy, not what a user can do.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">OWD, sharing rules, and manual sharing</p>
                      <p className="text-gray-600">Start with the private/public baseline, then add access through role hierarchy, sharing rules, teams, queues, or manual sharing.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Choosing old automation tools</p>
                      <p className="text-gray-600">For new automation, consider Flow. Review older Workflow Rules and Process Builder so you can recognize them in existing orgs.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Dashboard running user mistakes</p>
                      <p className="text-gray-600">Check the dashboard’s running user. A dynamic dashboard can show data based on the person viewing it.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-white bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Signs you may be ready to book</h3>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                    <li>You can score at least 80% on three timed practice tests without using notes.</li>
                    <li>You can explain why each answer fits or does not fit, especially for security and automation.</li>
                    <li>You have practised setting up users, permissions, sharing, reports, dashboards, and flows in a development org.</li>
                    <li>You can finish a 60-question practice test within 105 minutes and leave time to review.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-amber-100 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900 mb-2">3 concepts that fail most ADM-201 candidates</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>OWD vs. profiles vs. roles (three layers, one wrong answer):</strong> Organization-wide defaults (OWD) set the baseline record-access floor. Profiles and permission sets control object and field permissions, what a user can see or edit at the object/field level. Role hierarchy opens record-level access upward above the OWD floor, roles can never restrict access below OWD, and profiles cannot override OWD unless View All / Modify All is granted.</li>
                      <li><strong>Flow vs. legacy automation (end of support for Workflow Rules &amp; Process Builder):</strong> Workflow Rules and Process Builder reached end of support on December 31, 2025. For new declarative automation, choose a before-save record-triggered Flow for same-record field updates, an after-save record-triggered Flow for related records or email alerts, a screen Flow for guided input, an approval process for multi-step human sign-off with record locking, and the Migrate to Flow tool to convert legacy automation.</li>
                      <li><strong>Reports vs. dashboards (cross filters, joined reports &amp; filter limits):</strong> Custom report types support up to 4 related objects. A cross filter filters a primary object by the presence or absence of related records (e.g. Accounts without Opportunities) without a custom report type. Bucket fields categorize values on the fly without a formula field. Reporting snapshots schedule report results into a custom object to track trends over time. Dashboard filters only support exact field equality, not contains or starts with.</li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-100 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900 mb-2">Compare before your next cert:</p>
                    <p>
                      After ADM-201, most candidates choose{' '}
                      <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">
                        App Builder
                      </Link>
                      ,{' '}
                      <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">
                        Advanced Administrator
                      </Link>
                      , or a consultant path such as{' '}
                      <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">
                        Sales Cloud Consultant
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div id="exam-prep">
              <ExamPrepContent slug={slug} />
            </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Platform Administrator: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Objects, Fields & Data Model</h3>
                <p>Standard objects such as Account, Contact, Lead, Opportunity, and Case store common business records. Custom objects store data specific to your organization. Review field types and relationships, including lookup and master-detail. A roll-up summary can count or summarize detail records, and a junction object connects two objects in a many-to-many relationship.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Security Model: Profiles, Permission Sets, Roles & Sharing</h3>
                <p>Org-wide defaults set the baseline for record access. Roles, sharing rules, and manual sharing can grant additional access where applicable. Profiles and permission sets control object and field permissions separately. Practise diagnosing whether a user needs permission to the object, field, or particular record.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Automation: Flows, Approval Processes & Email Alerts</h3>
                <p>Record-triggered flows respond to record changes. A before-save flow can update the triggering record; an after-save flow can also work with related records. Scheduled flows run at specified times. Approval processes route work to people for a decision, and email alerts send messages from templates. Practise selecting a tool for each requirement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Reports, Dashboards & List Views</h3>
                <p>A report type determines the records and fields available for a report. Tabular reports list rows; summary reports group them; matrix reports group rows and columns; and joined reports combine blocks. Dashboards display report data as charts or other components. Check the running user to understand which data a dashboard displays. List views provide filtered record lists, while report subscriptions can deliver results by email.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Sales & Service Cloud Fundamentals</h3>
                <p>Lead conversion creates or links an account and contact, and can also create an opportunity. Opportunity stages and probability support forecasting. Service teams track requests as cases, which can arrive through channels such as email or web forms. Review queues, assignment rules, escalation rules, entitlements, and milestones for routing and managing service work.</p>
              </div>
            </div>
          </div>

          {/* Official blueprint subtopics not otherwise covered: Dec 2025 outline refresh */}
          <div id="blueprint-deep-dive" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Exam Objectives: Additional Coverage by Domain</h2>
            <div className="space-y-5 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Configuration and Setup (15%)</h3>
                <div className="space-y-2">
                  <p><strong>Freezing vs. deactivating users:</strong> Users can never be deleted in Salesforce. Use Freeze to immediately block a departing employee from logging in while you reassign their records, queues, and dashboard running-user dependencies; use Deactivate once cleanup is complete to free up their user license.</p>
                  <p><strong>Permission set groups &amp; muting permission sets:</strong> Salesforce recommends minimum-access profiles paired with reusable permission sets bundled into persona-based permission set groups. A muting permission set inside a group removes specific permissions for that group without modifying the underlying permission sets.</p>
                  <p><strong>Troubleshooting record &amp; field access:</strong> Check in order: (1) login history / freeze / login hours / IP ranges, (2) object CRUD via User Access Summary on the user record, (3) record visibility via the Sharing Hierarchy button on the record, and (4) field visibility via field-level security, page layout, and Lightning App Builder Dynamic Forms visibility rules.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Productivity and Collaboration (10%)</h3>
                <div className="space-y-2">
                  <p><strong>Shared Activities:</strong> Enabling Shared Activities allows users to relate up to 50 contacts (alongside 1 primary contact and 1 Related To / WhatId record) to a single task or event.</p>
                  <p><strong>Sandbox email deliverability:</strong> Newly refreshed sandboxes default to System email only, which blocks outbound Flow and workflow test emails. Set Setup &rarr; Deliverability &rarr; Access Level to All email when testing email notifications in a sandbox.</p>
                  <p><strong>AppExchange &amp; AgentExchange:</strong> Managed packages are upgradable, IP-protected, namespace-prefixed, and count toward fewer org limits; unmanaged packages are editable templates that are not upgradable. AgentExchange offers pre-built prompts, flows, and agent actions you can install.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Agentforce (8%)</h3>
                <div className="space-y-2">
                  <p><strong>Agentforce Builder architecture:</strong> An agent consists of a role/description, topics (also called subagents, defining the category of job to be done and classification instructions), and actions (Flows, Apex, Prompt Builder templates, or standard actions).</p>
                  <p><strong>Testing &amp; maintenance:</strong> Admins refine topic instructions and action descriptions when an agent selects the wrong action, adjust tone or grounding in Prompt Builder, and validate changes using Conversation Preview in Agentforce Builder for interactive testing and the Testing Center for batch evaluation before activating.</p>
                  <p><strong>Agent security &amp; the Einstein Trust Layer:</strong> Employee agents run in the context of the logged-in user&apos;s permissions, while service agents run under a dedicated Agent User whose permission sets govern object, field, and action access. The Einstein Trust Layer enforces data masking, toxicity detection, audit logging, and zero data retention with external LLMs.</p>
                </div>
              </div>
            </div>
          </div>

          <OrderOfExecutionDiagram />

          <Adm201MergedGuide />

          <DifficultyHeatmap slug={slug} />

          <CertInsightBlock certSlug="adm-201" />

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Certified Platform Administrator Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              Practise matching a business need to a Salesforce feature. Read each scenario carefully and identify any limits on the solution.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Know Your Automation Toolkit</h3>
                <p>Compare record-triggered flows, approval processes, and scheduled flows. Practise choosing a tool for a record change, human approval, or scheduled task.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Data &amp; Analytics (17%) and Security/Automation (15% Each) Drive 62% of Your Score</h3>
                <p>Review org-wide defaults, roles, sharing rules, profiles, and permission sets. For each scenario, decide whether the user needs access to an object, a field, or a specific record.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Reports vs. Dashboards</h3>
                <p>Compare tabular, summary, matrix, and joined reports. Review how source reports and the dashboard running user affect the data viewers see.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Data Management Fundamentals</h3>
                <p>Practise choosing between Data Import Wizard and Data Loader. Review field permissions, validation rules, and duplicate management as separate controls.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Read Every Question for the Key Constraint</h3>
                <p>Look for conditions such as “without code” or “minimum configuration.” Use those limits to rule out choices that do not meet the requirement.</p>
              </div>
            </div>
          </div>

          

          <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText={getPracticeQuestionsIntro(initialQuestions.length, ". Select the requested number of answers, then check your selection.")}
              questions={initialQuestions}
            />

            <AdministratorCtaSections />

          <div id="related-certs">
              <RelatedCertifications currentSlug={slug} />
            </div>

            {/* ADM-201 related guides, always-visible internal links */}
            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="adm201-guides-heading">
              <h2 id="adm201-guides-heading" className="text-base font-semibold text-gray-900 mb-3">ADM-201 Study Resources</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#section-deep-dives" className="text-salesforce-blue font-medium hover:underline">
                    All 8 Exam Sections in Detail ({RELEASE_CURRENT}) →
                  </Link>
                  <span className="text-gray-600 ml-2">Review the topics and weighting for each section of the official outline.</span>
                </li>
                <li>
                  <Link href="#study-plan" className="text-salesforce-blue font-medium hover:underline">
                    6-Week ADM-201 Study Plan →
                  </Link>
                  <span className="text-gray-600 ml-2">Plan your reading and hands-on practice over six weeks.</span>
                </li>
                <li>
                  <Link href="#day-before" className="text-salesforce-blue font-medium hover:underline">
                    Day-Before Review Checklist →
                  </Link>
                  <span className="text-gray-600 ml-2">Review ten topics before exam day.</span>
                </li>
                <li>
                  <Link href="/certifications/administrator-practice-test" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 Timed Practice Test →
                  </Link>
                  <span className="text-gray-600 ml-2">Try a timed practice set after working through this guide.</span>
                </li>
                <li>
                  <Link href="/admin-certification-path" className="text-salesforce-blue font-medium hover:underline">
                    Salesforce Admin Certification Path →
                  </Link>
                  <span className="text-gray-600 ml-2">Compare possible next steps, including App Builder, Advanced Administrator, and consultant credentials.</span>
                </li>
                <li>
                  <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 vs App Builder: Which to Take First? →
                  </Link>
                  <span className="text-gray-600 ml-2">Compare the two exams and decide which one fits your goals first.</span>
                </li>
              </ul>
            </section>

            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1">
            <CertTableOfContents
              sections={[
                { id: 'is-adm-201-hard', title: 'Is ADM-201 Hard?' },
                { id: 'exam-format', title: 'Exam Format Explained' },
                { id: 'adm201-traps', title: 'Common Traps' },
                { id: 'exam-prep', title: 'Exam Prep Content' },
                { id: 'key-concepts', title: 'Key Concepts' },
                { id: 'blueprint-deep-dive', title: 'Additional Blueprint Coverage' },
                { id: 'section-deep-dives', title: 'Exam Sections in Detail' },
                { id: 'study-plan', title: '6-Week Study Plan' },
                { id: 'scenario-rules', title: 'Scenario Decision Rules' },
                { id: 'day-before', title: 'Day-Before Review' },
                { id: 'scenario-tips', title: 'How to Pass' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'more-questions', title: 'Get More Questions' },
                { id: 'related-certs', title: 'Related Certifications' },
              ]}
            />
          </aside>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <CiteThisPage certName={slugToDisplayName(slug)} slug={slug} year={RELEASE_YEAR} />
      </div>
    </div>
  )
}
