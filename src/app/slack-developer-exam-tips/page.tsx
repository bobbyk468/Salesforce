import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'slack-developer'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Slack Developer exam tips (${RELEASE_CURRENT}): 4-week study plan, Slack API, Block Kit, and automation patterns. Start free practice now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/slack-developer-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/slack-developer-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Slack Developer exam tips ${RELEASE_CURRENT}, how to pass Slack Developer certification, Salesforce Slack Developer study guide, Slack app developer certification tips, Bolt Framework exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Slack Developer Exam Tips', url: '/slack-developer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Slack Developer exam format?',
    answer: 'The Salesforce Certified Slack Developer exam has 60 multiple-choice questions, a 105-minute time limit, a 68% passing score, and a $200 fee.',
  },
  {
    question: 'What are the most important Slack Developer exam topics?',
    answer: 'Building Slack Apps (30%) and Workflow Automation (25%) are the highest-weight sections. The Bolt framework, Block Kit UI components, and Slack API surface are consistently tested.',
  },
  {
    question: 'Do I need Slack app development experience to pass?',
    answer: 'Yes — the exam tests hands-on Bolt framework, Block Kit, and Workflow Builder knowledge. Candidates without prior Slack app development experience typically need extra time to build practical skills.',
  },
  {
    question: 'How long should I study for the Slack Developer exam?',
    answer: '4–6 weeks with hands-on app building. Build at least one complete Slack app with interactive components (buttons, modals) and event subscriptions before attempting the exam.',
  },
  {
    question: 'What concepts do most Slack Developer candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Slack Developer exam are: (1) Block Kit vs Legacy Message Attachments — Legacy Is Deprecated; (2) OAuth 2.0 Scopes — Principle of Least Privilege; (3) Events API vs Webhooks vs Slash Commands — One-Way vs Two-Way. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('slack-developer-exam-tips'),
]

export default function SlackDeveloperExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/slack-developer-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certified Slack Developer Exam Tips ({RELEASE_CURRENT}): How to Pass First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          The Slack Developer certification tests deep knowledge of the Slack platform APIs, Block Kit, Bolt Framework,
          OAuth, and event-driven app architecture. These tips show you how to tackle the API decision questions and
          interactive component scenarios that appear most frequently.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass Slack Developer</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The exam has 60 questions in 105 minutes. Passing score is approximately 68%. Aim for 78%+ on full mocks before booking.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The exam fee is $200 USD ($100 for retake). Hands-on Slack app development experience is strongly recommended — the exam tests practical API knowledge.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Know the 3-second acknowledgement rule cold — it applies to slash commands, button clicks, modal submissions, and shortcut payloads.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Block Kit, the Events API, and the Web API (especially <code className="bg-gray-100 px-1 rounded text-xs">chat.postMessage</code> and <code className="bg-gray-100 px-1 rounded text-xs">views.open</code>) are the highest-tested areas.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week Slack Developer Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Slack Platform Fundamentals — App Manifests (YAML configuration of scopes, events, shortcuts), OAuth scopes (chat:write, channels:read, users:read, etc.), the difference between Bot tokens and User tokens, and Socket Mode vs HTTP endpoints (Socket Mode = no public URL needed, ideal for dev/firewalled environments).</p>
          <p><strong>Week 2:</strong> Block Kit and Interactivity — building message surfaces with Block Kit elements (section, actions, input, context blocks), interactive components (buttons, select menus, overflow menus, date pickers), opening modals with <code className="bg-gray-100 px-1 rounded">views.open</code> (trigger_id required, 3-second window), and the App Home tab with <code className="bg-gray-100 px-1 rounded">views.publish</code>.</p>
          <p><strong>Week 3:</strong> Events API, Web API, and Slash Commands — subscribing to events (member_joined_channel, app_mention, message, reaction_added), sending messages with <code className="bg-gray-100 px-1 rounded">chat.postMessage</code>, updating messages, Incoming Webhooks for simple outbound notifications, slash command registration and payload handling, rate limits (Tier 1–4, HTTP 429, Retry-After header).</p>
          <p><strong>Week 4:</strong> Bolt Framework (built-in handlers for events, actions, shortcuts, commands in JS/Python/Java), Global vs Message Shortcuts, security (signature verification, request URL validation), testing strategies, and full mock exams targeting 78%+.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Slack Developer Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most Slack Developer questions describe an app requirement and ask which API, scope, or pattern is correct.
          Use this decision tree to navigate API selection questions quickly.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Sending messages:</strong> <code className="bg-gray-100 px-1 rounded">chat.postMessage</code> sends to a channel or DM. Incoming Webhooks post to a pre-configured channel without a full app install. Webhooks = simpler (notifications from external systems); Web API = richer (interactive, dynamic content). Required scope for chat.postMessage: <code className="bg-gray-100 px-1 rounded">chat:write</code>.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Interactivity timing:</strong> The 3-second acknowledgement rule is non-negotiable — slash commands, button clicks, shortcut payloads, and modal submissions ALL must receive HTTP 200 (or <code className="bg-gray-100 px-1 rounded">ack()</code> in Bolt) within 3 seconds. Then process async. Failing to ack shows an error to the user.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Modals:</strong> Use <code className="bg-gray-100 px-1 rounded">views.open</code> to open a modal — requires a trigger_id from an interaction payload. Use <code className="bg-gray-100 px-1 rounded">views.push</code> to add a modal on top of an existing one. Use <code className="bg-gray-100 px-1 rounded">views.update</code> to update the current modal. The trigger_id expires after 3 seconds.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Shortcuts:</strong> Global Shortcuts launch from the lightning bolt icon (⚡) anywhere in Slack — not tied to a specific message. Message Shortcuts appear in the right-click / &ldquo;More actions&rdquo; menu of a specific message. Both deliver a trigger_id for opening modals.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Rate limits:</strong> Tier 1 = lowest frequency (e.g., admin methods), Tier 4 = highest frequency (e.g., chat.postMessage). HTTP 429 response means rate limited — read the Retry-After header and back off. Build exponential backoff into your app logic.</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use this minimum benchmark before scheduling your Slack Developer exam:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          78%+ on 3 timed full mocks (60 questions / 105 minutes each)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The official passing score is approximately 68% (~41/60 questions). Targeting 78%+ on mocks provides a 10-point
          buffer and ensures you have mastered the Block Kit, Events API, and interactivity timing scenarios that appear
          most frequently on the exam.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Slack Developer Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Block Kit vs Legacy Message Attachments — Legacy Is Deprecated</p>
            <p className="text-sm text-gray-700">Slack deprecated legacy message attachments (the attachment array with color, text, fields) in favour of Block Kit layouts. Exam scenarios involving UI design expect Block Kit components: Section, Actions, Context, Input, and Divider blocks. Candidates who learned the old Slack API will answer deprecated attachment-based solutions — which are wrong. Know the key Block Kit block types and when to use modals vs messages vs Home tabs.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. OAuth 2.0 Scopes — Principle of Least Privilege</p>
            <p className="text-sm text-gray-700">Slack permissions operate on granular OAuth scopes. chat:write posts messages as your app; channels:read lists channels; users:read reads user profiles; im:write opens DMs. A common exam failure: recommending a broad scope when a narrow one is sufficient — the exam expects least-privilege scope selection. Also know when to use Socket Mode (no public URL required, for internal apps) vs Events API (requires a public endpoint, for distributed apps).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Events API vs Webhooks vs Slash Commands — One-Way vs Two-Way</p>
            <p className="text-sm text-gray-700">Incoming Webhooks are one-way: your app posts messages to Slack. Events API is two-way: Slack sends events to your app (message sent, reaction added, user joined). Slash commands trigger app actions initiated by users. The exam tests which mechanism to use for each pattern: receiving real-time Slack activity = Events API; posting automated updates = Webhooks; user-initiated actions = Slash Commands.</p>
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

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real Slack Developer practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/slack-developer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start Slack Developer Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/slack-administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Explore Slack Administrator Prep
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          After this exam, consider <Link href="/certifications/developer-2" className="text-salesforce-blue underline">Platform Developer II</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}