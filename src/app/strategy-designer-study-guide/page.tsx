import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Strategy Designer Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Strategy Designer study guide: exam sections, human-centred design, study plan. Pass the Salesforce exam in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/strategy-designer-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/strategy-designer-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce strategy designer study guide, strategy designer certification exam, salesforce strategy designer 2026, human-centred design salesforce`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Strategy Designer Study Guide', url: '/strategy-designer-study-guide' },
]

const examSections = [
  { name: 'Define the Business Context', weight: 28, note: 'Identifying business goals, constraints, stakeholders, and success metrics to frame the design challenge.' },
  { name: 'Establish Product Direction', weight: 23, note: 'Defining vision, value propositions, prioritising opportunities, and setting product strategy from research insights.' },
  { name: 'Understand the Human Context', weight: 22, note: 'Empathy research methods, customer journey mapping, identifying user needs, and synthesising qualitative findings.' },
  { name: 'Evaluate the Designed Solution', weight: 15, note: 'Assessing designs against business goals and user needs, measuring outcomes, and validating strategic direction.' },
  { name: 'Validate Business Impact', weight: 12, note: 'Measuring the impact of design decisions on business metrics and iterating strategy based on outcomes.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Strategy Designer certification?',
    answer: 'The Salesforce Certified Strategy Designer validates expertise in human-centred design strategy — understanding business context, empathising with customers, defining product vision, and measuring design impact. It sits in the Designer track alongside UX Designer and focuses on the upstream, strategic phase of design work rather than the tactical execution layer. It is suited for design strategists, consultants, business analysts, and product managers working in the Salesforce ecosystem.',
  },
  {
    question: 'What is the Strategy Designer exam format?',
    answer: 'The Strategy Designer exam consists of 60 multiple-choice and multiple-select questions with a 105-minute time limit. The passing score is approximately 62%. The exam costs $200 (first attempt) with a ~50% discount retake voucher after a failed attempt. It can be taken online or at a Kryterion testing centre.',
  },
  {
    question: 'What frameworks should I know for the Strategy Designer exam?',
    answer: 'The exam tests knowledge of human-centred design frameworks including: the Double Diamond design process (Discover, Define, Develop, Deliver), design thinking methodology (Empathise, Define, Ideate, Prototype, Test), Jobs-to-be-Done theory, stakeholder mapping, value proposition design, and outcome-based measurement approaches. Questions typically present business scenarios and ask you to apply the most appropriate framework or approach.',
  },
  {
    question: 'How is Strategy Designer different from UX Designer?',
    answer: 'Strategy Designer focuses on the strategic and business layer of design: defining business context, setting product direction, and measuring business impact. UX Designer focuses on the execution layer: conducting research, wireframing, prototyping, and usability testing. Strategy Designers typically work earlier in the product lifecycle; UX Designers translate strategy into concrete design artefacts. Both certifications are complementary and many professionals hold both.',
  },
  {
    question: 'Do I need a design background to pass Strategy Designer?',
    answer: 'Not necessarily — the exam tests strategic thinking and methodology rather than visual design skills. Professionals with business analysis, product management, consulting, or UX strategy backgrounds often perform well. The exam does assume familiarity with human-centred design thinking principles and design research methods. Candidates from purely technical backgrounds (developers, admins) without design exposure typically need more preparation time to learn the design methodology vocabulary.',
  },
]

export default function StrategyDesignerStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/strategy-designer-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Designer Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Strategy Designer Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified Strategy Designer exam — human-centred design frameworks, exam sections, a focused study plan, and tips for passing the scenario-heavy questions.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~62%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.5}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Frameworks to Master</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            { title: 'Double Diamond', body: 'Discover → Define → Develop → Deliver. A framework for structured design problem-solving. Understand which phase each activity belongs to.' },
            { title: 'Design Thinking', body: 'Empathise → Define → Ideate → Prototype → Test. Know how to apply each phase in a Salesforce implementation context.' },
            { title: 'Jobs-to-be-Done', body: 'Understand that users hire products to do jobs. Frame design decisions around functional, emotional, and social jobs users want to accomplish.' },
            { title: 'Stakeholder Mapping', body: 'Identify, prioritise, and engage stakeholders. Know the difference between primary users, decision-makers, and influencers in a project context.' },
            { title: 'Value Proposition Design', body: 'Map customer gains, pains, and jobs to product features and benefits. Use the Value Proposition Canvas as a design alignment tool.' },
            { title: 'Outcome Measurement', body: 'Define KPIs and success metrics early. Distinguish leading indicators (activity) from lagging indicators (business results).' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-gray-600 text-xs">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">6-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1', focus: 'Human-centred design foundations', tasks: 'Study design thinking methodology and Double Diamond. Complete the Strategy Designer Trailhead trail. Read IDEO design thinking resources.' },
            { week: 'Week 2', focus: 'Business context & stakeholder analysis', tasks: 'Study stakeholder mapping, business model canvas, and value proposition design. Practice framing design briefs from business scenarios.' },
            { week: 'Week 3', focus: 'Human context & research methods', tasks: 'Study empathy research methods: interviews, observation, journey mapping. Practice synthesising qualitative research findings.' },
            { week: 'Week 4', focus: 'Product direction & prioritisation', tasks: 'Study opportunity mapping, vision definition, and design sprint frameworks. Practice prioritisation methods (impact vs effort matrices).' },
            { week: 'Week 5', focus: 'Evaluation & outcome measurement', tasks: 'Study KPI frameworks, outcome-based measurement, and design critique methods. Practice scenario-based questions.' },
            { week: 'Week 6', focus: 'Full mock exams', tasks: 'Take timed full mock exams. Target 75%+ before booking. The exam is scenario-heavy — focus on applying frameworks, not memorising definitions.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-xs font-bold text-salesforce-blue pt-0.5">{item.week}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.focus}</p>
                <p className="text-xs text-gray-600">{item.tasks}</p>
              </div>
            </div>
          ))}
        </div>
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
          <li><Link href="/ux-designer-vs-strategy-designer" className="text-sm text-salesforce-dark hover:underline font-medium">→ UX Designer vs Strategy Designer — full certification comparison</Link></li>
        </ul>
      </div>


      <DifficultyHeatmap slug="strategy-designer" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Strategy Designer Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce Strategy Designer exam — apply design frameworks to exam scenarios.</p>
        <Link href="/certifications/strategy-designer" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
        <p className="mt-4 text-sm text-white">
          Related: <Link href="/business-analyst-study-guide" className="underline hover:text-white font-medium">Business Analyst study guide</Link>
          {' · '}
          <Link href="/ux-designer-vs-strategy-designer" className="underline hover:text-white font-medium">UX vs Strategy Designer</Link>
        </p>
      </div>
    </div>
  )
}
