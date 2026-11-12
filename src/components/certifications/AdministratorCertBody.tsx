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
                <li><strong className="text-gray-900">Beginners:</strong> First Salesforce cert; no coding required. Ideal if you’re new to CRM or Trailhead.</li>
                <li><strong className="text-gray-900">Career switchers:</strong> Prove admin skills to move into Salesforce roles. Use section weightage to focus study time.</li>
                <li><strong className="text-gray-900">Experienced admins:</strong> Validate and refresh your knowledge before Advanced Administrator or App Builder.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
                Not sure which cert to take first? Browse the full{' '}
                <Link href="/certifications" className="text-salesforce-blue font-medium hover:underline">
                  Salesforce certification path
                </Link>{' '}
                to compare all credentials by role: Administrator, Developer, Consultant, Architect, and more.
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

            {/* Is ADM-201 Hard? + Pass rate guidance (targets high-volume search query + builds trust) */}
            <details id="is-adm-201-hard" className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6" open>
              <summary className="cursor-pointer list-none">
                <h2 className="text-lg font-bold text-gray-900">Is the Salesforce Platform Administrator (Plat-Admn-201) Exam Hard?</h2>
              </summary>
              <div className="hidden group-open:block lg:block">
                <p className="text-sm text-gray-700 mb-3">
                  The Salesforce Certified Platform Administrator (ADM-201) exam is considered <strong className="text-gray-900">moderate difficulty</strong>. It tests breadth of knowledge across configuration, automation, security, data management, and reporting, but it does <em>not</em> require coding.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li><strong>60 multiple-choice questions</strong> in 105 minutes, roughly 1.75 minutes per question.</li>
                  <li><strong>68% passing score</strong>: you need 41 of 60 correct, so you can miss up to 19 and still pass.</li>
                  <li><strong>No coding required</strong>: the exam is entirely declarative (clicks, not code).</li>
                  <li><strong>Eight exam sections</strong>: use the official outline to see how much each topic counts.</li>
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">Pass Rate Guidance</p>
                  <p className="text-sm text-emerald-700">
                    Most candidates report passing after scoring <strong>80%+</strong> on at least 3 full-length mock exams. If you’re consistently scoring above 75% in practice, you’re likely ready to book your exam.
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
                  Understanding the exam format helps you prepare smarter. The Salesforce Certified Platform Administrator (ADM-201) exam is a proctored, online or in-person exam delivered through Webassessor/Kryterion. Here is what to expect on exam day:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Total Questions</p>
                    <p className="text-sm text-gray-700">60 scored questions, plus up to 5 unscored questions</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Time Limit</p>
                    <p className="text-sm text-gray-700">105 minutes (~1.75 minutes per question)</p>
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
                  ADM-201 is generally considered <strong>slightly easier</strong> than Platform App Builder (DEV-402) because it covers foundational admin topics without deep customization. App Builder goes deeper into data modeling, Lightning components, and business logic. However, ADM-201 is <em>broader</em>; you need to know a little about many topics. If you pass ADM-201 comfortably, you’re well-positioned for{' '}
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
              <h2 className="text-lg font-bold text-gray-900 mb-3">Platform Administrator Common Traps &amp; Readiness Checklist</h2>
              <p className="text-sm text-gray-700 mb-5">
                ADM-201 is broad, so the highest-risk questions are not obscure facts. They are scenario questions where two Salesforce features sound plausible and only one matches the business constraint.
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
                      <p className="text-gray-600">Flow is the modern default. Workflow Rules and Process Builder may appear as distractors when a record-triggered Flow is the better answer.</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Dashboard running user mistakes</p>
                      <p className="text-gray-600">A dashboard shows data based on the running user unless it is dynamic. That detail changes the correct answer in reporting scenarios.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-white bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Ready to book when...</h3>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                    <li>You score 80%+ on three timed mock exams without pausing to check notes.</li>
                    <li>You can explain why each wrong answer is wrong, especially in security and automation questions.</li>
                    <li>You have configured users, profiles, permission sets, sharing rules, reports, dashboards, and flows in a dev org.</li>
                    <li>You can finish a 60-question timed mock inside 105 minutes with at least 10 minutes left to review flagged items.</li>
                  </ul>
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
                <p>Standard Objects (Account, Contact, Lead, Opportunity, Case) are the backbone of Salesforce. Custom Objects extend the platform for business-specific data. Field types include Text, Number, Currency, Date, Picklist, Formula, Lookup, and Master-Detail. Roll-Up Summary fields aggregate child records (count, sum, min, max), only available on Master-Detail. Junction Objects implement many-to-many relationships using two Master-Detail fields. The ADM-201 exam frequently presents a scenario and asks which field type or relationship to use, know cascade delete rules, sharing implications, and when a Lookup is preferable to Master-Detail.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Security Model: Profiles, Permission Sets, Roles & Sharing</h3>
                <p>Org-wide defaults (OWDs) set the baseline visibility for every record. Role hierarchy opens up access upward, managers see what their subordinates own. Profiles control what users CAN do (CRUD, page layouts, app access). Permission Sets grant additional permissions without changing the profile. Sharing Rules extend access horizontally to peers. Manual Sharing lets record owners share individual records. The exam tests layered security scenarios: know that OWD + Role Hierarchy + Sharing Rules all combine additively, the most permissive rule wins for access.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Automation: Flows, Approval Processes & Email Alerts</h3>
                <p>Record-triggered flows respond to record changes. A before-save flow can update the triggering record; an after-save flow can also work with related records. Scheduled flows run at specified times. Approval Processes route records through one or more human approvers with entry criteria, approver selection, and final approval/rejection actions. Email Alerts are reusable actions that send templated emails. The exam tests which tool handles a given scenario: Flows for complex logic, Approval Processes for structured human sign-off.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Reports, Dashboards & List Views</h3>
                <p>Report Types determine which objects and fields are available. Tabular: flat row lists. Summary: grouped with subtotals. Matrix: two-dimensional grouping. Joined: up to 5 report blocks side by side. Dashboards display visual components (charts, gauges, metrics, tables) driven by reports; each component points to a single source report. The Running User determines whose data is shown. Dynamic Dashboards let each viewer see their own data (up to 5 per org in Enterprise). List Views are quick filtered record sets, shareable with groups or all users. Schedule Reports to deliver via email automatically.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Sales & Service Cloud Fundamentals</h3>
                <p>The Lead Conversion process creates an Account, Contact, and optionally an Opportunity in one action. Opportunity Stages and Probability drive forecasting. Cases are the unit of customer support; they can be created via Web-to-Case, Email-to-Case, or manually. Queues hold Cases or Leads for team assignment. Escalation Rules auto-escalate cases based on age or criteria. Auto-Assignment Rules route incoming Cases or Leads to the right owner. Service Level Agreements (SLAs) are enforced via Entitlements and Milestones. The exam frequently asks about the correct feature for a given support or sales scenario.</p>
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
                <p>Understand when to use Record-Triggered Flows (replacing Workflow Rules and Process Builder), Approval Processes for multi-step human approvals, and Scheduled Flows for time-based logic. The exam always tests the right tool for a given requirement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Sharing &amp; Security Is the Highest-Weighted Topic</h3>
                <p>Org-Wide Defaults, Role Hierarchies, Sharing Rules, Profiles, and Permission Sets. Know how each layer grants or restricts access and the order in which they are evaluated. Most security questions hinge on knowing the minimum-access principle.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Reports vs. Dashboards</h3>
                <p>Know the four report types (Tabular, Summary, Matrix, Joined) and when each applies. Dashboards refresh from source reports and require a running user whose access determines which data appears.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Data Management Fundamentals</h3>
                <p>Understand import/export tools (Data Import Wizard vs. Data Loader), field-level security, validation rules, and duplicate management. The exam regularly tests which import tool is appropriate for a given scenario.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Read Every Question for the Key Constraint</h3>
                <p>Watch for qualifiers like ’declarative only,’ ’minimum configuration,’ or ’without code.’ These constraints eliminate most distractors and point to the correct answer.</p>
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
                  <span className="text-gray-600 ml-2">What each section of the current official outline actually tests, with its weighting.</span>
                </li>
                <li>
                  <Link href="#study-plan" className="text-salesforce-blue font-medium hover:underline">
                    6-Week ADM-201 Study Plan →
                  </Link>
                  <span className="text-gray-600 ml-2">Week-by-week reading and hands-on practice, ordered by section weighting.</span>
                </li>
                <li>
                  <Link href="#day-before" className="text-salesforce-blue font-medium hover:underline">
                    Day-Before Review Checklist →
                  </Link>
                  <span className="text-gray-600 ml-2">The ten topics worth re-reading the evening before your exam.</span>
                </li>
                <li>
                  <Link href="/certifications/administrator-practice-test" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 Timed Practice Test →
                  </Link>
                  <span className="text-gray-600 ml-2">A standalone, exam-length practice run once you've worked through the study guide above.</span>
                </li>
                <li>
                  <Link href="/admin-certification-path" className="text-salesforce-blue font-medium hover:underline">
                    Salesforce Admin Certification Path →
                  </Link>
                  <span className="text-gray-600 ml-2">What to take after ADM-201: App Builder, Advanced Admin, or Consultant track, with career context.</span>
                </li>
                <li>
                  <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">
                    ADM-201 vs App Builder: Which to Take First? →
                  </Link>
                  <span className="text-gray-600 ml-2">Side-by-side comparison of difficulty, overlap, and career value to help you choose the right order.</span>
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
