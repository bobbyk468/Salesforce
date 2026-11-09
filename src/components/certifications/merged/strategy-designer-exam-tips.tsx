/* Ported from /strategy-designer-exam-tips, merged into /certifications/strategy-designer in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'strategy-designer'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription = `Salesforce Strategy Designer exam tips for ${RELEASE_CURRENT}: review design thinking, business strategy, value maps, and journey design.`

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Strategy Designer', url: '/certifications/strategy-designer' },
  { name: 'Strategy Designer Exam Tips', url: '/strategy-designer-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Strategy Designer exam format?',
    answer: 'The Salesforce Strategy Designer exam has 60 multiple-choice questions, a 105-minute time limit, a 70% passing score, and a $200 fee ($100 retake). It tests design thinking methodologies, business strategy alignment, value mapping, and how to facilitate discovery and design sessions for Salesforce implementations.',
  },
  {
    question: 'What are the highest-weight Strategy Designer exam sections?',
    answer: 'Strategy and Vision (28%) and Design Methods (25%) together account for 53% of the exam. Aligning business strategy with technology solutions, using design thinking frameworks (empathy, define, ideate, prototype, test), creating value maps, and facilitating stakeholder workshops are the most heavily tested skills.',
  },
  {
    question: 'What is the difference between Strategy Designer and UX Designer?',
    answer: 'UX Designer focuses on user experience design: information architecture, wireframing, usability testing, and designing intuitive Salesforce interfaces. Strategy Designer focuses on business strategy and design thinking: aligning solutions to business outcomes, facilitating discovery workshops, and creating strategic frameworks (value maps, ecosystem maps). Both use design thinking but at different levels.',
  },
  {
    question: 'What design thinking frameworks does the Strategy Designer exam test?',
    answer: 'The exam tests the full design thinking process: Empathise (research, user interviews, personas), Define (problem framing, How Might We statements), Ideate (brainstorming, co-creation), Prototype (low-fidelity models), and Test (validation). Additionally, value proposition design, business model canvas, and journey mapping are tested as strategic frameworks.',
  },
  {
    question: 'What concepts do most Strategy Designer candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Strategy Designer exam are: (1) Futures Thinking vs Current-State Analysis: Speculative vs Descriptive; (2) Jobs To Be Done vs User Stories: Motivation vs Task; (3) Hypothesis vs Assumption vs Insight: Research Rigour Distinctions. Candidates are most confidently wrong on these. Learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('strategy-designer-exam-tips'),
]

export default function StrategyDesignerExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Strategy Designer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Strategy and vision</strong>: Aligning Salesforce implementations to business outcomes, identifying key stakeholders and their goals, creating a shared vision for digital transformation, and translating business strategy into technology decisions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Design thinking methods</strong>: Applying the design thinking process (Empathise, Define, Ideate, Prototype, Test) to CRM and digital transformation projects. User research methods, journey mapping, value proposition design, and co-creation facilitation.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Stakeholder management and change</strong>: Facilitating discovery workshops, creating shared language between business and technology teams, managing executive alignment, and linking design decisions to measurable business outcomes.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Strategy and Vision</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Design Methods</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Stakeholder Facilitation</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Measuring Outcomes</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Strategy + Design Methods + Facilitation = 75%. This exam rewards practitioners with real discovery and facilitation experience.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Strategy Designer Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a client engagement scenario and ask which design thinking method, facilitation
          approach, or strategic framework is most appropriate. The correct answer is always the most
          structured, validated approach, not ad-hoc or purely technical solutions.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For design phase questions: Empathise = research before designing. Define = frame the problem correctly (How Might We statements). Ideate = generate many solutions without judging. Prototype = build low-fidelity mockups quickly. Test = validate with real users. When asked which phase to apply to a scenario, identify what is needed: understanding, problem definition, generation, or validation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For value mapping questions: a Value Map connects customer jobs (what customers are trying to do), pains (negative outcomes), and gains (positive outcomes) to the product’s pain relievers and gain creators. When a scenario asks how to demonstrate business value, the answer is a value proposition canvas or value map, not a business case document.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For facilitation questions: design workshops should include diverse stakeholders (business, technology, users). Affinity mapping groups insights from research. Dot voting prioritises ideas democratically. When a workshop has conflicting stakeholder views, the correct next step is co-creation, not making a unilateral recommendation.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Strategy Designer is unique among Salesforce certifications because it tests design thinking and
          business strategy rather than product configuration. Candidates with backgrounds in consulting,
          product management, or human-centred design perform better. Study the IDEO design thinking
          framework and Salesforce’s own design principles alongside the official exam guide.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Strategy Designer Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics; they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Futures Thinking vs Current-State Analysis: Speculative vs Descriptive</p>
            <p className="text-sm text-gray-700">Futures Thinking projects potential future scenarios based on emerging trends and signals; it is speculative and explores "what could be." Current-state analysis (journey mapping, user research) documents what exists today. Strategy Design work starts with current state but must include futures framing to avoid solving only today’s problems. Candidates present only current-state research as their strategy answer, the exam expects futures framing alongside research.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Jobs To Be Done vs User Stories: Motivation vs Task</p>
            <p className="text-sm text-gray-700">Jobs To Be Done (JTBD) captures the fundamental motivation behind a user’s behaviour: "When I [situation], I want to [motivation], so I can [outcome]." User Stories capture task-level requirements: "As a [role], I want [feature], so that [benefit]." JTBD is broader and more durable, features change but motivations stay constant. Candidates use User Stories for strategy framing, the exam expects JTBD for understanding root motivations before defining solutions.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Hypothesis vs Assumption vs Insight: Research Rigour Distinctions</p>
            <p className="text-sm text-gray-700">An Assumption is an unvalidated belief you are acting on. A Hypothesis is a testable prediction derived from an assumption. An Insight is a validated, evidence-backed finding from research. Candidates present assumptions as insights in design reviews, the exam tests research rigour: insights require evidence, hypotheses require testing, and assumptions must be explicitly flagged as risks.</p>
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
          <Link href="/certifications/ux-designer" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">UX Designer Exam Tips</span>
          </Link>
          <Link href="/certifications/business-analyst" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Business Analyst Exam Tips</span>
          </Link>
          <Link href="/business-analyst-vs-strategy-designer" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Business Analyst vs Strategy Designer</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Strategy Designer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Strategy Designer Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/ux-designer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            UX Designer Exam Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <span className="text-salesforce-blue underline">Platform Strategy Designer</span> or <Link href="/certifications/ux-designer" className="text-salesforce-blue underline">User Experience Designer</Link> next.
        </p>
      </section>
    </div>
  )
}