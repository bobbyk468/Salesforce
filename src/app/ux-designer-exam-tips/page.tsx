import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'ux-designer'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce UX Designer exam tips for ${RELEASE_CURRENT}: human-centred design, discovery, prototyping. Scenario tips to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/ux-designer-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/ux-designer-exam-tips`,
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
  { name: 'UX Designer', url: '/certifications/ux-designer' },
  { name: 'UX Designer Exam Tips', url: '/ux-designer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce UX Designer exam format?',
    answer: 'The Salesforce Certified UX Designer exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee. It tests knowledge of human-centred design principles, UX research methods, prototyping, and Salesforce Lightning Design System (SLDS).',
  },
  {
    question: 'What are the highest-weight UX Designer exam sections?',
    answer: 'Human-Centred Design (27%) and Discovery (17%) together account for 44% of the exam. Prototyping (14%) and Testing (13%) are the next highest. Understanding the full design thinking process end-to-end is essential.',
  },
  {
    question: 'Do I need to know how to code for the UX Designer exam?',
    answer: 'No — the UX Designer exam does not test coding skills. It tests design thinking, user research methods, wireframing, prototyping, and how to apply the Salesforce Lightning Design System (SLDS). Knowledge of SLDS components and their accessibility requirements is tested at a conceptual level, not a coding level.',
  },
  {
    question: 'What is the best way to prepare for the Salesforce UX Designer exam?',
    answer: 'Focus on the double-diamond design process: discover, define, develop, deliver. Study user research methods (interviews, surveys, usability testing, card sorting), how to create user personas and journey maps, and the principles of the Salesforce Lightning Design System. Practice scenario questions about when to use each research method.',
  },
  {
    question: 'What concepts do most UX Designer candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the UX Designer exam are: (1) User Research vs Usability Testing — Discovery vs Validation; (2) Wireframes vs Prototypes vs Mockups — Fidelity Levels; (3) Accessibility — WCAG AA Is the Standard Minimum. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('ux-designer-exam-tips'),
]

export default function UxDesignerExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/ux-designer-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/ux-designer-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce UX Designer Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce UX Designer exam tests human-centred design principles, user research methods, and
          how to apply the Salesforce Lightning Design System. These tips focus on the design thinking process
          and the scenario-based questions that differentiate passing candidates.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="ux-designer-study-guide" certName="UX Designer" />
      <ExamPricingCard
        certSlug="ux-designer"
        certName="UX Designer"
        certPageSlug="ux-designer"
      />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR: What UX Designer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Human-centred design</strong> — The double-diamond process (discover, define, develop, deliver), design thinking methodology, and when to use each phase of the design process.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>User research methods</strong> — When to use interviews, surveys, card sorting, contextual inquiry, and usability testing, and how to synthesise findings into actionable insights.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce Lightning Design System (SLDS)</strong> — Design tokens, component library usage, accessibility standards (WCAG), and how SLDS applies to Salesforce Experience Cloud and custom Lightning components.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Sections Carry the Most Weight</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Human-Centred Design</span>
            <span className="font-bold text-salesforce-blue ml-4">27%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Discovery</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Prototyping</span>
            <span className="font-bold text-salesforce-blue ml-4">14%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Testing</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Human-Centred Design + Discovery = 44%. Know the design thinking phases and when to apply each research method.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach UX Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          UX Designer questions describe a design challenge and ask which method, deliverable, or approach best fits.
          The correct answer always follows the design thinking process — research before ideation, ideation before testing.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For research method questions: identify whether the goal is to understand problems (qualitative: interviews, contextual inquiry) or validate solutions (quantitative: surveys, A/B testing, analytics).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For prototyping questions: low-fidelity prototypes (sketches, wireframes) belong in early ideation; high-fidelity prototypes are for usability testing — know which stage calls for each.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For SLDS questions: always choose the standard SLDS component over custom CSS — the exam rewards use of the design system over reinventing existing patterns.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Booking Readiness Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The UX Designer exam rewards candidates who can apply design thinking in context, not just recall definitions.
          Practice scenario questions from Trailhead Focus on Force or similar — memorising the phases alone is not enough.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most UX Designer Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. User Research vs Usability Testing — Discovery vs Validation</p>
            <p className="text-sm text-gray-700">User Research is done early to understand user needs, mental models, and pain points before designing (interviews, contextual inquiry, surveys). Usability Testing validates a specific design prototype or working product by observing users attempting tasks. Candidates use Usability Testing to discover user needs — the exam expects User Research for discovery and Usability Testing for design validation.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Wireframes vs Prototypes vs Mockups — Fidelity Levels</p>
            <p className="text-sm text-gray-700">Wireframes are low-fidelity structural layouts (boxes and lines) showing information architecture and layout without visual design. Mockups are high-fidelity static visuals showing exactly what the final product looks like. Prototypes are interactive (low or high fidelity) simulating user interactions. Candidates use "wireframe" and "prototype" interchangeably — the exam distinguishes these by fidelity and interactivity.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Accessibility — WCAG AA Is the Standard Minimum</p>
            <p className="text-sm text-gray-700">WCAG (Web Content Accessibility Guidelines) Level AA is the standard minimum for enterprise web accessibility: 4.5:1 contrast ratio for normal text, keyboard navigability, screen reader support. Level AAA is aspirational but not required. Candidates design for visual aesthetics first and treat accessibility as optional — the exam expects WCAG AA compliance as a baseline design requirement, not a post-development add-on.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Study Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/strategy-designer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Strategy Designer Exam Tips</span>
          </Link>
          <Link href="/business-analyst-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start UX Designer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/ux-designer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            UX Designer Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/strategy-designer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Strategy Designer Certification
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Plan Your Cert Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/strategy-designer" className="text-salesforce-blue underline">Platform Strategy Designer</Link> or <Link href="/certifications/ux-designer" className="text-salesforce-blue underline">User Experience Designer</Link> next.
        </p>
      </section>
    </div>
  )
}