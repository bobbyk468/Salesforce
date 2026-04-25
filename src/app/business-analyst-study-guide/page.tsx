import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'business-analyst'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Business Analyst study guide: 7 exam sections, 8-week plan, scenario tips, free practice. $200, 60 questions. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/business-analyst-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/business-analyst-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Business Analyst', url: '/certifications/business-analyst' },
  { name: 'Business Analyst Study Guide', url: '/business-analyst-study-guide' },
]

const examSections = [
  { name: 'Collaboration with Stakeholders', weight: 21, note: 'Facilitation techniques — workshops, interviews, observation, surveys. Managing conflicting requirements, building consensus, and communicating with executives vs end users.' },
  { name: 'Business Analysis Planning', weight: 18, note: 'Defining the BA approach, planning deliverables, estimating effort, and setting success metrics. Understanding project governance, roles, and agile vs waterfall BA activities.' },
  { name: 'Needs Assessment', weight: 18, note: 'Identifying business problems and opportunities, defining as-is vs to-be state, root cause analysis, solution scoping, and building a business case for Salesforce investment.' },
  { name: 'Customer Discovery', weight: 17, note: 'Uncovering stakeholder needs through empathy mapping, discovery sessions, and user story mapping. Documenting personas and journeys in a Salesforce context.' },
  { name: 'Analysis', weight: 14, note: 'Decomposing requirements into user stories, acceptance criteria, and process flows. Prioritisation techniques (MoSCoW, story points) and Salesforce backlog management.' },
  { name: 'Traceability & Monitoring', weight: 7, note: 'Maintaining requirements traceability matrices, tracking requirements through delivery sprints, and measuring solution performance post-deployment.' },
  { name: 'Solution Evaluation', weight: 5, note: 'Assessing solution value after go-live, measuring adoption metrics, identifying gaps, and recommending iterative improvements.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Business Analyst certification?',
    answer: 'The Salesforce Business Analyst (SBA) certification validates skills in gathering requirements, facilitating stakeholder workshops, writing user stories, and translating business needs into Salesforce solutions. It targets professionals who bridge the gap between business stakeholders and Salesforce implementation teams. The exam has 60 questions, a 105-minute time limit, ~65% passing score, and a $200 fee.',
  },
  {
    question: 'Is ADM-201 required before the Business Analyst exam?',
    answer: 'ADM-201 is not a formal prerequisite, but Salesforce strongly recommends it. The Business Analyst exam tests scenario-based Salesforce knowledge — understanding objects, automation, reporting, and the data model. Candidates without ADM-201 knowledge struggle with the Analysis and Solution Evaluation sections where Salesforce features are referenced directly.',
  },
  {
    question: 'How long should I study for the Business Analyst certification?',
    answer: 'Most candidates spend 6–10 weeks preparing, averaging 8–12 hours per week. The exam heavily favours scenario-based thinking over feature memorisation — practising stakeholder scenarios, writing user stories, and tracing requirements through delivery is more effective than rote study. Candidates with prior BA experience often prepare in 4–6 weeks.',
  },
  {
    question: 'What is the hardest section of the Business Analyst exam?',
    answer: 'Collaboration with Stakeholders (21%) and Business Analysis Planning (18%) are typically the hardest sections. They test nuanced facilitation skills — choosing the right elicitation technique for a given scenario (interview vs workshop vs survey) and planning BA activities across project types (agile, waterfall, hybrid).',
  },
  {
    question: 'What resources are best for the Business Analyst exam?',
    answer: 'Salesforce provides the official Study Guide, the Business Analyst Trailmix, and the Business Analyst Superbadge on Trailhead. The study guide lists all seven exam sections with recommended Trailhead modules. Trailblaze Prep free practice questions cover all seven sections with scenario-based questions that mirror the actual exam format.',
  },
]

export default function BusinessAnalystStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/business-analyst-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="business-analyst"
        certName="Business Analyst"
        description={pageDescription}
        pageUrl="/business-analyst-study-guide"
      />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Business Analyst Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to pass the Salesforce Certified Business Analyst exam — exam sections, study plan, scenario tips, and free practice questions.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="business-analyst-exam-tips" certName="Business Analyst" />
      <CertInsightBlock certSlug="business-analyst" />

      {/* Exam At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Sections */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Each Section Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8-Week Study Plan */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Customer Discovery & Needs Assessment — empathy mapping, discovery sessions, as-is/to-be analysis, business case fundamentals.' },
            { week: 'Week 2', focus: 'Business Analysis Planning — BA approach selection, agile vs waterfall activities, planning workshops, effort estimation.' },
            { week: 'Week 3', focus: 'Collaboration with Stakeholders — facilitation techniques, elicitation methods (interviews, workshops, surveys, observation), conflict resolution.' },
            { week: 'Week 4', focus: 'Analysis — user stories, acceptance criteria, MoSCoW prioritisation, process flow diagrams, backlog grooming.' },
            { week: 'Week 5', focus: 'Traceability & Monitoring + Solution Evaluation — requirements traceability matrices, adoption metrics, gap analysis, iteration planning.' },
            { week: 'Week 6', focus: 'Salesforce Feature Knowledge — data model, automation (Flow), security model, reports/dashboards, AppExchange (for Analysis and Solution Evaluation sections).' },
            { week: 'Week 7', focus: 'Scenario practice — work through 50–60 scenario-based questions covering all 7 sections. Focus on identifying the right BA technique for each scenario.' },
            { week: 'Week 8', focus: 'Full mock exams, review weak areas, and timed practice. Aim for consistent 75%+ on practice sets before scheduling the real exam.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Tips */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Choose the right elicitation technique:</strong> Use interviews for deep-dive stakeholder insights, workshops for consensus-building across groups, surveys for large audiences, and observation for understanding current workflows. The exam will present a scenario and ask which technique to use first.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Always start with as-is before to-be:</strong> When requirements are unclear, good BAs document the current state before designing future solutions. Exam scenarios testing Needs Assessment often hinge on this sequencing.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>User stories follow the standard format:</strong> As a [role], I want [feature] so that [benefit]. Acceptance criteria must be measurable. Watch for exam options with missing &ldquo;so that&rdquo; components.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Traceability is bidirectional:</strong> Requirements trace forward to test cases and backward to business goals. If a change request arrives, always trace its impact on existing requirements and test plans.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling your real exam. The Business Analyst exam is scenario-heavy — if you can correctly identify the right BA technique in a given situation, you are ready. Focus extra time on Collaboration with Stakeholders (21%) and Business Analysis Planning (18%) as these carry the most weight.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Elicitation techniques: interviews, workshops, surveys, observation — when to use each</li>
          <li>User story format and acceptance criteria writing</li>
          <li>MoSCoW prioritisation and story point estimation</li>
          <li>As-is vs to-be process mapping and gap analysis</li>
          <li>Requirements traceability matrix (RTM) structure and maintenance</li>
          <li>Agile BA vs waterfall BA activities and deliverables</li>
          <li>Root cause analysis techniques (5 Whys, fishbone diagram)</li>
          <li>Stakeholder identification, analysis, and communication planning</li>
          <li>Business case components: problem statement, solution options, cost-benefit</li>
          <li>Adoption metrics and post-implementation solution evaluation</li>
        </ol>
      </div>

      {/* FAQ */}
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

      <RelatedGuides links={getRelatedGuides('business-analyst-study-guide')} />

      {/* CTA */}
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="business-analyst" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free Business Analyst practice questions covering all 7 exam sections.</p>
        <Link
          href="/certifications/business-analyst"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}