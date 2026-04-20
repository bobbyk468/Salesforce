import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'business-analyst'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Business Analyst exam tips for ${RELEASE_CURRENT}: user stories, process mapping, collaboration. Scenario tips to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/business-analyst-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/business-analyst-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Business Analyst Exam Tips', url: '/business-analyst-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Business Analyst exam format?',
    answer: 'The Salesforce Certified Business Analyst exam has 60 multiple-choice questions, a 105-minute time limit, a 72% passing score, and a $200 fee. The 72% passing score is higher than most Salesforce exams — preparation needs to be more thorough.',
  },
  {
    question: 'What are the highest-weight Business Analyst exam sections?',
    answer: 'Collaboration with Stakeholders (23%) and Customer Discovery (18%) together account for 41% of the Salesforce Business Analyst exam. User Stories (16%) is the next highest. Mastering these three sections is essential.',
  },
  {
    question: 'Is the Salesforce Business Analyst certification hard?',
    answer: 'The Business Analyst exam has a 72% passing threshold — significantly higher than the 65% required for most other Salesforce certifications. It tests soft skills like stakeholder management and requirements gathering, which are harder to study from documentation alone. Real project experience as a BA is strongly recommended.',
  },
  {
    question: 'What is the best way to prepare for the Salesforce Business Analyst exam?',
    answer: 'Focus on the BA methodology: how to run discovery workshops, write user stories with acceptance criteria, facilitate UAT, and manage scope. Study the full BA lifecycle from discovery through deployment. Practice writing user stories in the As a / I want / So that format and understand how to translate stakeholder needs into Salesforce solutions.',
  },
  {
    question: 'What concepts do most Business Analyst candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Business Analyst exam are: (1) Process Mapping vs User Stories — Different Artefacts for Different Purposes; (2) Acceptance Criteria vs Definition of Done — Two Different Quality Gates; (3) Stakeholder Communication — RACI Matrix vs Communication Plan. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('business-analyst-exam-tips'),
]

export default function BusinessAnalystExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/business-analyst-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Business Analyst Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Business Analyst certification tests your ability to bridge business needs and Salesforce solutions
          through discovery, user stories, and stakeholder collaboration. These tips focus on the methodology
          and scenario-based skills the exam emphasises.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">72%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What the BA Exam Actually Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>BA methodology</strong> — Discovery workshops, requirements gathering, stakeholder management, and translating business needs into user stories with acceptance criteria.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Collaboration skills</strong> — How to run effective meetings, manage competing stakeholder priorities, and drive consensus on requirements.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce platform knowledge</strong> — Knowing which Salesforce features can meet specific business requirements, and how to document those decisions.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Collaboration with Stakeholders</span>
            <span className="font-bold text-salesforce-blue ml-4">23%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Customer Discovery</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">User Stories</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Business Process Mapping</span>
            <span className="font-bold text-salesforce-blue ml-4">12%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Stakeholder Collaboration + Customer Discovery + User Stories = 57%. Focus here first.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach BA Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          BA exam questions describe a business situation and ask what a Business Analyst should do next.
          The correct answer follows the BA methodology — discovery before solutioning, stakeholders before systems.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />When stakeholder conflict appears: facilitate, document, and escalate — never unilaterally choose a stakeholder&apos;s preference.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For user story questions: valid user stories follow &quot;As a [role], I want [feature], so that [benefit]&quot; with measurable acceptance criteria.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Note the 72% passing threshold — it is higher than most Salesforce exams. You need stronger preparation than for Administrator-track certs.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks — the 72% threshold demands higher prep
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Business Analyst Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Process Mapping vs User Stories — Different Artefacts for Different Purposes</p>
            <p className="text-sm text-gray-700">Process maps (swim lane diagrams, flow charts) document current-state workflows across people and systems. User stories document future-state requirements from the user&apos;s perspective ("As a [role], I want [capability] so that [benefit]"). Candidates write user stories when asked for a process map and vice versa. The exam tests when each is the appropriate analysis output — process map for AS-IS documentation; user stories for development backlog requirements.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Acceptance Criteria vs Definition of Done — Two Different Quality Gates</p>
            <p className="text-sm text-gray-700">Acceptance Criteria define the specific conditions a feature must meet to be accepted by the Product Owner — they are story-specific. Definition of Done is a team-wide checklist that all stories must pass (code reviewed, tested, deployed to staging). Candidates merge these concepts. The exam distinguishes them: acceptance criteria vary per story; Definition of Done is universal and does not change story-by-story.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Stakeholder Communication — RACI Matrix vs Communication Plan</p>
            <p className="text-sm text-gray-700">A RACI matrix maps stakeholders to responsibilities: Responsible, Accountable, Consulted, Informed. A Communication Plan defines who receives what information, in what format, and at what frequency. They serve different purposes. Candidates use RACI to answer "how do you manage stakeholder updates?" — the exam expects a Communication Plan for that use case. RACI is for clarifying decision ownership, not managing information flow.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/experience-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Experience Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/strategy-designer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Strategy Designer Exam Tips</span>
          </Link>
          <Link href="/business-analyst-vs-strategy-designer" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Business Analyst vs Strategy Designer</span>
          </Link>
        </div>
      </section>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/business-analyst-study-guide" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce Business Analyst full study guide</Link></li>
        </ul>
      </div>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Business Analyst Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/business-analyst" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            BA Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/role/administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Admin-Track Certifications
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}