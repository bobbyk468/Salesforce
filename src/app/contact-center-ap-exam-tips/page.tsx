import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Contact Center AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Contact Center Accredited Professional exam tips for ${RELEASE_CURRENT}: omni-channel routing, Service Cloud Voice, Einstein bots.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/contact-center-ap`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/contact-center-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Contact Center AP exam tips ${RELEASE_CURRENT}, how to pass Contact Center Accredited Professional, Salesforce contact center certification, omni-channel routing exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Contact Center AP Exam Tips', url: '/contact-center-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Contact Center Accredited Professional exam format?',
    answer: 'The Contact Center AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce contact center solutions: Omni-Channel routing, Service Cloud Voice (telephony integration), Einstein Bots for automated deflection, and digital channel management (chat, messaging, email).',
  },
  {
    question: 'What are the highest-weight Contact Center AP exam sections?',
    answer: 'Omni-Channel Routing Configuration (30%) and Service Cloud Voice (25%) together account for 55% of the exam. Configuring routing models (queue-based, skills-based, external routing), setting up telephony integration, and designing an omni-channel customer service experience are the most heavily tested areas.',
  },
  {
    question: 'How does Omni-Channel routing work in Salesforce and why is it tested?',
    answer: 'Omni-Channel routes work items (cases, chats, calls) to agents based on availability and capacity. Queue-based routing sends work to the next available agent in a queue. Skills-based routing matches work to agents with the required skills. External routing uses third-party systems via the Omni-Channel External Routing API. The exam tests how to configure routing models, set agent capacity, and manage work item priority.',
  },
  {
    question: 'What is Service Cloud Voice and what does the exam test about it?',
    answer: 'Service Cloud Voice integrates telephony directly into the Salesforce agent console, creating a unified desktop for voice, digital, and CRM data. The exam tests how to set up Voice with Amazon Connect (the primary partner), configure IVR flows, enable real-time transcription and Einstein call summaries, and manage the agent experience during live calls within Salesforce.',
  },
]

export default function ContactCenterApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/contact-center-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Contact Center AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Contact Center AP exam validates your ability to implement Salesforce omni-channel contact
          center solutions. These tips focus on Omni-Channel routing, Service Cloud Voice, and Einstein
          Bots that define modern Salesforce contact center implementations.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Contact Center AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Omni-Channel routing</strong> — Configuring Omni-Channel presence statuses, routing configurations (queue-based, skills-based, external), service channels (cases, chats, calls), agent capacity management, routing priority and overflow, and the Supervisor panel for real-time queue monitoring and agent coaching.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Service Cloud Voice</strong> — Integrating Amazon Connect telephony with Salesforce, configuring the agent desktop for voice calls, IVR (Interactive Voice Response) flow design, real-time transcription, Einstein AI features during calls (Next Best Action, call summaries), and post-call automation (case creation, survey triggers).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Digital channels and Einstein Bots</strong> — Configuring chat, messaging (SMS, WhatsApp, Facebook Messenger), and email channels in Omni-Channel. Building Einstein Bots for self-service deflection — intent recognition, dialogue flows, bot-to-agent transfer when the bot cannot resolve the issue, and measuring bot containment rate.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Omni-Channel Routing Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Service Cloud Voice</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Digital Channels and Einstein Bots</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Analytics and Reporting</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Omni-Channel + Voice + Digital Channels = 80% — know the routing model differences thoroughly.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Contact Center AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a contact center requirement and ask which Salesforce configuration,
          channel, or routing model addresses it. Think from the contact center manager&apos;s perspective
          — what does the agent and supervisor experience need to look like?
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For routing questions: queue-based routing = next available agent in the queue regardless of skills. Skills-based routing = match work to agents with specific required skills (e.g., language, product expertise). When a scenario says &apos;route Spanish-language chats to Spanish-speaking agents&apos;, skills-based routing is the answer — not queue-based routing.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For bot questions: Einstein Bots handle routine inquiries automatically (order status, password reset) before escalating to an agent. The bot-to-agent transfer passes the conversation context so the agent sees the full conversation history. When a question says &apos;reduce simple inbound inquiries without hiring more agents&apos;, Einstein Bot deflection is the answer — not adding more queues or agents.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Voice questions: Service Cloud Voice creates a call record and case automatically when a call is received (if configured). Real-time transcription shows what the customer is saying in the agent desktop. Einstein Next Best Action suggests responses during the call. After the call, Einstein auto-generates a call summary that populates the case. When a question asks &apos;how to reduce after-call work time&apos;, Einstein call summaries is the answer.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Contact Center AP is for consultants and in-house teams delivering omni-channel service
          implementations. Hands-on experience configuring Omni-Channel, Einstein Bots, and Service
          Cloud Voice is strongly recommended. The Salesforce Contact Center Trailmix on Trailhead
          is the primary structured study resource.
        </p>
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
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/slack-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Slack Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Contact Center AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/contact-center-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Contact Center AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Consultant Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
