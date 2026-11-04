import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'pardot-specialist'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Account Engagement Specialist exam tips (${RELEASE_YEAR}): lead scoring, engagement programs, and forms. Objective-focused practice advice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-specialist-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-specialist-exam-tips`,
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
  { name: 'Pardot Specialist', url: '/certifications/pardot-specialist' },
  { name: 'Pardot Specialist Exam Tips', url: '/pardot-specialist-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Pardot Specialist exam format?',
    answer: 'The Salesforce Certified Marketing Cloud Account Engagement Specialist exam has 60 multiple-choice/multiple-select questions and up to five unscored questions, a 90-minute time limit, a 72% passing score, and a $200 registration fee.',
  },
  {
    question: 'What are the highest-weight Pardot Specialist exam sections?',
    answer: 'Lead Management is weighted 24%; Account Engagement Forms, Form Handlers and Landing Pages 20%; Email Marketing 20%; Engagement Studio 17%; Administration 11%; and Visitors and Prospects 8%.',
  },
  {
    question: 'Is the Pardot Specialist certification hard?',
    answer: 'Difficulty depends on your familiarity with the objectives. Salesforce lists no prerequisite and recommends course attendance. Review the guide’s objectives and practice applying the concepts to configuration examples.',
  },
  {
    question: 'What is the difference between Pardot Specialist and Pardot Consultant?',
    answer: 'The Pardot Specialist certification tests execution-level knowledge, configuring forms, automations, email templates, and Engagement Studio programs. The Pardot Consultant exam tests architectural and strategy-level decisions, how to design a full Pardot implementation for a client. Specialist should be completed before Consultant.',
  },
  {
    question: 'Which Account Engagement concepts are useful to review?',
    answer: 'Useful distinctions to review include Engagement Studio versus automation rules, preference management versus unsubscribe behavior, and visitor versus prospect records. Compare your understanding with the official exam objectives and Salesforce Help.',
  },
  ...getConceptFaqs('pardot-specialist-exam-tips'),
]

export default function PardotSpecialistExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-specialist-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/pardot-specialist-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_YEAR}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Account Engagement Specialist Exam Tips ({RELEASE_YEAR})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          The Pardot Specialist exam tests your ability to configure and execute marketing automation in Salesforce
          Marketing Cloud Account Engagement (Pardot). These tips focus on lead management, Engagement Studio,
          and reviewing the objectives in the official exam outline.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="pardot-specialist-study-guide" certName="Pardot Specialist" />
      <ExamPricingCard
        certSlug="pardot-specialist"
        certName="Pardot Specialist"
        certPageSlug="pardot-specialist"
      />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR: What Pardot Specialist Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Exam format</strong>: 60 multiple-choice/multiple-select questions and up to five unscored questions; 90 minutes; 72% passing score.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Lead management</strong>: Lead scoring, grading, prospect lifecycle stages, and how Account Engagement syncs with Salesforce CRM records.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Engagement Studio</strong>: Building nurture programs, setting wait steps, branching rules, and completion actions based on prospect behavior.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Forms and landing pages</strong>: Form handlers, progressive profiling, thank-you page redirects, and conversion tracking configuration.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Sections Carry the Most Weight</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Lead Management</span>
            <span className="font-bold text-salesforce-blue ml-4">24%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Email Marketing</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Engagement Studio</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Pardot Forms, Form Handlers &amp; Landing Pages</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Administration</span><span className="font-bold text-salesforce-blue ml-4">11%</span></div>
          <div className="flex justify-between items-start"><span className="font-medium text-gray-900">Visitors and Prospects</span><span className="font-bold text-salesforce-blue ml-4">8%</span></div>
          <p className="text-xs text-gray-600 pt-1">Use the published weights to prioritize review while covering every objective.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Pardot Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          For practice scenarios, identify the requirement and match it to the relevant Account Engagement feature or configuration.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For lead scoring questions: understand the difference between score (implicit behaviour) and grade (explicit fit), and when to use each to trigger sales alerts.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Engagement Studio: know when to use a Wait step vs a Rule step vs an Action step, and the order in which Pardot evaluates them.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Salesforce sync questions: understand that Pardot syncs with the assigned user’s CRM permissions, connector user setup is a common exam topic.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice Review</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Review the official 90-minute limit when timing practice
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The official passing score is 72%. Review distinctions among automation rules, segmentation lists, and completion actions, and use hands-on practice where available. No practice result guarantees an exam outcome.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Three Concepts to Review</h2>
        <p className="text-sm text-gray-600 mb-5">Use these distinctions as a focused review list alongside the official exam objectives.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Engagement Studio vs Automation Rules: Nurture vs Batch Processing</p>
            <p className="text-sm text-gray-700">Engagement Studio (Engagement Programs) orchestrates time-based, multi-step nurture sequences triggered by prospect actions or timing. Automation Rules evaluate prospect criteria and apply actions. Compare the capabilities of each when choosing a tool for a workflow.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Email Preference Centre vs Unsubscribe: Opt-Down vs Opt-Out</p>
            <p className="text-sm text-gray-700">Unsubscribe behavior and preference management serve different purposes. Review how Account Engagement configuration affects opt-out status and communication preferences for a prospect.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Visitor vs Prospect: Anonymous vs Known</p>
            <p className="text-sm text-gray-700">A Visitor is an anonymous person who has visited an Account Engagement-tracked page. A Prospect is an identified person with an email address. Review how identification affects the records and available engagement activities.</p>
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
          <Link href="/marketing-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Pardot Specialist Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/pardot-specialist" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Pardot Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/role/marketing" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Marketing Certifications
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Marketing Cloud Consultant Tips
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue underline">Marketing Cloud Engagement Consultant</Link> or <Link href="/certifications/pardot-consultant" className="text-salesforce-blue underline">Marketing Cloud Account Engagement Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}
