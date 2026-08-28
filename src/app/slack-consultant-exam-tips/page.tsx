import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'slack-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Slack Consultant exam tips for ${RELEASE_CURRENT}: Slack implementation strategy, workflow automation, Salesforce integration.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/slack-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/slack-consultant-exam-tips`,
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
  { name: 'Slack Consultant Exam Tips', url: '/slack-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Slack Consultant exam format?',
    answer: 'The Slack Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests the ability to implement Slack for clients: solution design, workflow automation, Salesforce integration, governance, and change management.',
  },
  {
    question: 'What are the highest-weight Slack Consultant exam sections?',
    answer: 'Solution Design (28%) and Workflow Automation (22%) together account for 50% of the exam. Understanding how to map client business requirements to Slack features, design channel structures, automate workflows with Workflow Builder, and integrate Slack with Salesforce are the most heavily tested skills.',
  },
  {
    question: 'How does the Slack Consultant exam differ from the Slack Administrator exam?',
    answer: 'The Slack Administrator exam focuses on workspace management and administration tasks. The Slack Consultant exam focuses on implementation strategy: requirements gathering, solution design, adoption planning, and Salesforce integration. Consultants advise clients on how to deploy and use Slack effectively — administrators manage the ongoing platform.',
  },
  {
    question: 'What Salesforce integration knowledge is needed for Slack Consultant?',
    answer: 'The exam tests Slack for Salesforce integration: Salesforce record notifications in Slack channels, creating and updating Salesforce records from Slack, using Salesforce flow to trigger Slack messages, and Einstein Conversation Mining. Understanding how Slack connects to Salesforce CRM data for sales and service workflows is a key exam area.',
  },
  {
    question: 'What concepts do most Slack Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Slack Consultant exam are: (1) Workflow Builder vs Slack API — No-Code vs Pro-Code; (2) Canvas vs Posts vs Bookmarks — Persistent Content Types; (3) Salesforce for Slack Integration — Connected App vs Custom Integration. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('slack-consultant-exam-tips'),
]

export default function SlackConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/slack-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Slack Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Slack Consultant exam tests your ability to implement Slack for enterprise clients — from solution
          design through adoption. These tips focus on the implementation strategy, Workflow Builder automation,
          and Salesforce integration that define this exam.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR: What Slack Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Solution design</strong> — Mapping client requirements to Slack features: channel strategy (public vs. private, naming conventions), Enterprise Grid design for multi-division organisations, Slack Connect for external collaboration, and workspace vs. channel governance decisions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Workflow automation</strong> — Building automations with Workflow Builder (no-code), using Workflow Builder with Salesforce triggers, understanding when to use Workflow Builder vs. custom Slack apps (API-based automation), and common workflow patterns for sales and service teams.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce integration and adoption</strong> — Slack for Salesforce app configuration, surfacing Salesforce data in Slack, sending Salesforce alerts to Slack channels, change management strategy for Slack adoption, and success metrics for deployment.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Sections Carry the Most Weight</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Solution Design</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Workflow Automation</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Salesforce Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Change Management and Adoption</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Solution Design + Workflow + Salesforce Integration = 70%. Implementation strategy is as important as product knowledge.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Slack Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a client implementation scenario and ask which Slack design decision, automation
          approach, or adoption strategy is most appropriate. Think like an implementation consultant:
          what is the simplest, most native Slack solution that meets the stated requirement?
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For channel design questions: use public channels for team-wide communication and knowledge sharing; private channels for sensitive topics. Shared channels (Slack Connect) for external collaboration. Too many channels creates noise — the correct design consolidates to the minimum needed for effective communication.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For automation questions: Workflow Builder is the no-code answer for most scenarios. Custom Slack apps (using the Slack API) are for complex requirements beyond Workflow Builder capabilities. When a scenario says ’without coding’ or ’non-technical admin’, the answer is Workflow Builder.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For adoption questions: successful Slack deployments start with executive sponsorship and a champion network. Phased rollout — starting with a pilot team — is preferred over big-bang deployment. Success metrics include messages sent, channels active, and response time improvements — not just adoption rate.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Booking Readiness Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The Slack Consultant exam rewards practical implementation experience. Candidates who have led
          or participated in a Slack deployment project perform significantly better than those who only
          know Slack from an end-user perspective. Complete the Trailhead Slack Consultant trail
          and review the official Slack Admin and Consultant guides before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Slack Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Workflow Builder vs Slack API — No-Code vs Pro-Code</p>
            <p className="text-sm text-gray-700">Workflow Builder is a no-code tool for automating Slack-native actions: sending messages, collecting form responses, posting to channels on a trigger. The Slack API is for complex integrations requiring custom logic, external data, or dynamic responses. Candidates recommend Workflow Builder for all automation — the exam expects Workflow Builder for simple, Slack-native automations and API/Bolt for complex custom integrations.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Canvas vs Posts vs Bookmarks — Persistent Content Types</p>
            <p className="text-sm text-gray-700">Canvas is the collaborative document surface in a channel for shared notes, meeting agendas, and project details. Posts are formatted messages — they appear in the channel timeline. Bookmarks are pinned links/resources in a channel header. Candidates use Posts for all persistent reference content — the exam expects Canvas for collaborative, editable documents and Bookmarks for quick-access links.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Salesforce for Slack Integration — Connected App vs Custom Integration</p>
            <p className="text-sm text-gray-700">The Salesforce for Slack app is a pre-built integration (Salesforce Records app) that lets users view, create, and update Salesforce records from Slack using the official AppExchange app. Custom Slack-Salesforce integrations use the Slack API + Salesforce REST API. Candidates design custom integrations for standard CRM lookups — the exam expects the AppExchange-native Salesforce for Slack app for standard record operations.</p>
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
          <Link href="/slack-administrator-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Slack Administrator Exam Tips</span>
          </Link>
          <Link href="/slack-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Slack Developer Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Slack Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/slack-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Slack Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/slack-developer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Slack Developer Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}