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
import CertPageSeo from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'

import ExamFeesSection from '@/components/ExamFeesSection'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import CertReadinessSummary from '@/components/CertReadinessSummary'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getInitialPracticeQuestions } from '@/lib/practice-question-lite'
import {
  ADMINISTRATOR_SLUG,
  administratorSampleQuestions,
} from '@/lib/cert-page-spike/administrator-data'

export default function AdministratorCertBody({ slug }: { slug: string }) {
  const examSections = getExamWeightage(slug)
  const initialQuestions = getInitialPracticeQuestions(administratorSampleQuestions)

  return (
    <div className="min-h-screen bg-pattern">
      <div data-critical-content className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 content-wrapper">
        <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Hero section: LCP candidate; data-lcp-hero enables mobile critical CSS in layout */}
        <section data-lcp-hero className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-salesforce-blue via-salesforce-light to-salesforce-blue p-6 sm:p-8 lg:p-10 text-white shadow-md sm:shadow-xl border border-salesforce-blue/20 sm:border-salesforce-blue/30" aria-label="Hero section">
          <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">
            Updated for {RELEASE_CURRENT} &bull; Aligned with official Salesforce exam guide
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
            Salesforce Certified Platform Administrator (ADM-201) Study Guide &amp; Free Practice Questions ({RELEASE_CURRENT})
          </h1>
          <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
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
                to compare all credentials by role — Administrator, Developer, Consultant, Architect, and more.
              </p>
            </section>

            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            <OfficialSourceRef slug={slug} />

            <CertificationCard
              slug={slug}
              title={slugToDisplayName(slug)}
              code="ADM-201"
              description="The Salesforce Administrator Certification (ADM-201) validates your knowledge of Salesforce CRM administration, including data management, security, automation, and analytics. Prepare for the Salesforce Certified Administrator exam with this study guide."
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
                  <li><strong>68% passing score</strong> — you can miss up to 19 questions and still pass.</li>
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
                    <p className="text-sm text-gray-700">68% (41 of 60 scored questions)</p>
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
                  <Link href="/adm-201-exam-tips" className="text-salesforce-blue font-medium hover:underline">
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

            <section id="adm201-traps" className="mt-8 rounded-xl border border-amber-100 bg-amber-50/40 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">Exam reviewer notes</p>
              <h2 className="text-lg font-bold text-gray-900 mb-3">ADM-201 Common Traps &amp; Readiness Checklist</h2>
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
                    <li>You score 75%+ on three timed mock exams without pausing to check notes.</li>
                    <li>You can explain why each wrong answer is wrong, especially in security and automation questions.</li>
                    <li>You have configured users, profiles, permission sets, sharing rules, reports, dashboards, and flows in a dev org.</li>
                    <li>You can finish 65 practice questions inside 105 minutes with at least 10 minutes left to review flagged items.</li>
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

          

          <CertReadinessSummary slug={slug} />
          <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText={getPracticeQuestionsIntro(administratorSampleQuestions.length, ". Click on an answer to select it, then check your answer to see if you're correct.")}
              questions={initialQuestions}
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
                  <Link href="/adm-201-exam-tips" className="text-salesforce-blue font-medium hover:underline">
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
              </ul>
            </section>

            {/* FAQ section - rendered after H1 for proper SEO structure */}
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
                { id: 'scenario-tips', title: 'How to Pass' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'more-questions', title: 'Get More Questions' },
                { id: 'related-certs', title: 'Related Certifications' },
              ]}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
