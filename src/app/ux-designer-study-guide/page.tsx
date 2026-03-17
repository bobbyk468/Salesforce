import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'ux-designer'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Complete UX Designer certification study guide: exam sections, key topics, study plan, and tips to pass the Salesforce Certified UX Designer exam in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/ux-designer-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/ux-designer-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce ux designer study guide, salesforce ux designer exam, salesforce ux designer certification 2026, ux designer exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'UX Designer Study Guide', url: '/ux-designer-study-guide' },
]

const examSections = [
  { name: 'Discovery & User Research', weight: 23, note: 'Conducting user research, discovery workshops, stakeholder interviews, and applying research findings to design.' },
  { name: 'Design Best Practices & SLDS', weight: 22, note: 'Salesforce Lightning Design System principles, component usage, accessibility standards, and responsive design.' },
  { name: 'Scenario, Hypothesis & Prototyping', weight: 21, note: 'Creating scenarios, user stories, wireframes, low-fidelity and high-fidelity prototypes using Salesforce tools.' },
  { name: 'Testing & Feedback', weight: 20, note: 'Usability testing methods, gathering and prioritising feedback, iterating on designs based on test results.' },
  { name: 'Lightning App Concepts', weight: 14, note: 'Understanding Lightning app architecture, navigation patterns, App Builder fundamentals, and component constraints.' },
]

const faqItems = [
  {
    question: 'Who should take the Salesforce UX Designer certification?',
    answer: 'The UX Designer certification is designed for Salesforce professionals who design user experiences on the Salesforce platform — including UX designers, UI designers, business analysts, admins who design user flows, and developers who want a formal UX credential. It is a strong complement to the Salesforce Administrator certification for professionals who focus on adoption and usability. No coding experience is required.',
  },
  {
    question: 'What is the UX Designer exam format?',
    answer: 'The Salesforce Certified UX Designer exam consists of 60 multiple-choice and multiple-select questions with a 105-minute time limit. The passing score is approximately 65%. The exam can be taken online (proctored) or at a Kryterion testing centre. It costs $200 for the first attempt, with a ~50% discount retake voucher available after a failed attempt.',
  },
  {
    question: 'What is the Salesforce Lightning Design System (SLDS) and why does it matter for this exam?',
    answer: 'The Salesforce Lightning Design System (SLDS) is the design framework and component library used to build Salesforce Lightning interfaces. It includes design tokens, visual guidelines, and pre-built UI components. The UX Designer exam expects you to know SLDS principles: how to apply components correctly, accessibility standards within SLDS, and when to use standard components vs custom designs. About 22% of the exam directly addresses design best practices and SLDS.',
  },
  {
    question: 'What prior experience is useful for the UX Designer exam?',
    answer: 'Candidates with experience in user research methods, wireframing tools (Figma, Sketch, Balsamiq), and Lightning App Builder will have an advantage. Familiarity with UX methodology — discovery, prototyping, usability testing — is more important than Salesforce-specific technical knowledge. Most questions test the application of UX principles in a Salesforce context, not platform configuration knowledge.',
  },
  {
    question: 'How does UX Designer compare to Strategy Designer?',
    answer: 'UX Designer focuses on the tactical implementation of user experience design: research methods, wireframing, prototyping, usability testing, and Lightning Design System usage. Strategy Designer focuses on the upstream, strategic layer: business context, human-centred design thinking, product direction, and outcome measurement. UX Designer is more execution-focused; Strategy Designer is more strategic-planning-focused. Both sit in the Designer track and are often pursued together.',
  },
]

export default function UxDesignerStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/ux-designer-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Designer Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce UX Designer Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified UX Designer exam — exam sections, what each topic tests, a focused study plan, and scenario tips to pass with confidence.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4.3}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Discovery & User Research', items: ['User interview techniques', 'Affinity mapping & synthesis', 'Journey mapping', 'Persona creation', 'Research planning'] },
            { title: 'Design Best Practices & SLDS', items: ['SLDS component library', 'Accessibility (WCAG standards)', 'Mobile-first design', 'Color and typography tokens', 'Layout and spacing principles'] },
            { title: 'Scenario, Hypothesis & Prototyping', items: ['User stories & scenarios', 'Wireframing methods', 'Low vs high fidelity prototypes', 'Prototype tools & techniques', 'Hypothesis validation'] },
            { title: 'Testing & Feedback', items: ['Usability test planning', 'Moderated vs unmoderated testing', 'Feedback synthesis', 'Iteration cycles', 'Measuring UX success'] },
            { title: 'Lightning App Concepts', items: ['Lightning App Builder basics', 'Standard vs custom components', 'Navigation patterns', 'Record pages & home pages', 'App design constraints'] },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</p>
              <ul className="space-y-1">
                {card.items.map((item) => (
                  <li key={item} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-salesforce-blue font-bold flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">6-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1–2', focus: 'Discovery & SLDS foundations', tasks: 'Study user research methods and the SLDS documentation. Complete the UX Designer Trailhead trail. Explore the SLDS component showcase.' },
            { week: 'Week 3', focus: 'Prototyping & scenario design', tasks: 'Practice wireframing key Salesforce workflows. Study user story formats. Review hypothesis-driven design approaches.' },
            { week: 'Week 4', focus: 'Testing methods & Lightning concepts', tasks: 'Study usability testing techniques. Build a simple Lightning App in a sandbox. Review App Builder best practices.' },
            { week: 'Week 5', focus: 'Scenario practice', tasks: 'Complete scenario-based practice questions focusing on applying UX principles to Salesforce-specific situations.' },
            { week: 'Week 6', focus: 'Full mock exams', tasks: 'Take timed full mock exams. Target 75%+ before booking. Review any weak sections identified in mock results.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-xs font-bold text-salesforce-blue pt-0.5">{item.week}</div>
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
          <li><Link href="/ux-designer-vs-strategy-designer" className="text-sm text-salesforce-dark hover:underline font-medium">→ UX Designer vs Strategy Designer — which cert should you take first?</Link></li>
        </ul>
      </div>


      <DifficultyHeatmap slug="ux-designer" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice UX Designer Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce UX Designer exam — test your knowledge before the real thing.</p>
        <Link href="/certifications/ux-designer" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}