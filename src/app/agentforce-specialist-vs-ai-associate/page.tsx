import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Agentforce vs AI Associate (${RELEASE_CURRENT}) | Which First?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Agentforce vs AI Associate: exam difficulty, AI scope, career impact. Which Salesforce AI cert to take first Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/agentforce-specialist-vs-ai-associate` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/agentforce-specialist-vs-ai-associate`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Agentforce Specialist vs AI Associate, Salesforce AI certification comparison, which Salesforce AI cert first, Agentforce or AI Associate 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Agentforce Specialist vs AI Associate', url: '/agentforce-specialist-vs-ai-associate' },
]

const faqItems = [
  {
    question: 'Should I take AI Associate before Agentforce Specialist?',
    answer: 'Yes — AI Associate is the recommended starting point. It covers foundational AI concepts (machine learning, large language models, ethical AI, bias) that are assumed knowledge in the Agentforce Specialist exam. AI Associate has a lower passing score (65% vs 73%) and is entry-level difficulty. Most candidates complete AI Associate first, then move to Agentforce Specialist within 3-6 months.',
  },
  {
    question: 'What is the main difference between Agentforce Specialist and AI Associate?',
    answer: 'AI Associate is a foundational cert covering AI concepts, Salesforce Einstein AI features, and ethical AI at a broad level — suitable for any Salesforce professional who works with or around AI features. Agentforce Specialist is a hands-on specialist cert focused specifically on building, configuring, and deploying autonomous AI agents using the Agentforce platform — including agent actions, topics, guardrails, and Agent Builder.',
  },
  {
    question: 'Is Agentforce Specialist harder than AI Associate?',
    answer: 'Yes, significantly. Agentforce Specialist has a 73% passing score (vs 65% for AI Associate) and tests practical agent-building skills — designing agent topics, configuring actions, setting guardrails, and testing agent behaviour in sandbox environments. AI Associate is conceptual: it tests understanding of AI terms and principles rather than hands-on configuration. Candidates without Agentforce sandbox experience consistently struggle with the Specialist exam.',
  },
  {
    question: 'Which Salesforce AI cert is more valuable in 2026?',
    answer: 'Both are valuable but serve different audiences. AI Associate demonstrates AI literacy and is broadly applicable — good for admins, consultants, and anyone using Einstein features. Agentforce Specialist is the most in-demand Salesforce certification of 2026 because Agentforce adoption is accelerating rapidly across enterprises. For hands-on Salesforce professionals building AI-powered solutions, Agentforce Specialist commands a higher market premium.',
  },
]

export default function AgentforceSpecialistVsAiAssociatePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/agentforce-specialist-vs-ai-associate" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Agentforce Specialist vs AI Associate: Which Salesforce AI Cert to Take First?
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce&apos;s two AI certifications serve different audiences and skill levels. AI Associate is the
          entry-level AI literacy cert for the whole Salesforce ecosystem. Agentforce Specialist is the
          hands-on specialist cert for professionals building autonomous AI agents. Here is how they compare
          and how to choose the right path for your career in 2026.
        </p>
      </header>

      <ContentPageAuthor />

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">AI Associate</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Agentforce Specialist</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">40 questions · 70 min</td>
                <td className="py-2.5">60 questions · 105 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">65%</td>
                <td className="py-2.5">73%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$75 (retake $75)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Level</td>
                <td className="py-2.5 pr-4">Entry-level / Foundational</td>
                <td className="py-2.5">Specialist / Intermediate</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">AI concepts, Einstein features, ethical AI, bias awareness</td>
                <td className="py-2.5">Building Agentforce agents — topics, actions, guardrails, Agent Builder</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Highest-Weight Sections</td>
                <td className="py-2.5 pr-4">AI Fundamentals (17%), Salesforce AI Capabilities (33%)</td>
                <td className="py-2.5">Agent Builder &amp; Configuration (35%), Agent Topics &amp; Actions (25%)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Hands-On Required</td>
                <td className="py-2.5 pr-4">No — conceptual knowledge sufficient</td>
                <td className="py-2.5">Yes — Agent Builder sandbox experience essential</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Any Salesforce professional — admins, consultants, developers, marketers</td>
                <td className="py-2.5">Admins and developers actively building Agentforce solutions</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Market Demand 2026</td>
                <td className="py-2.5 pr-4">High — baseline AI literacy credential</td>
                <td className="py-2.5">Very High — most in-demand new Salesforce cert of 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's different */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Content Differences</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-salesforce-blue mb-2">AI Associate — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Machine learning concepts (supervised, unsupervised, reinforcement)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Large language model (LLM) fundamentals and limitations</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />AI bias, hallucinations, and responsible AI principles</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Einstein Copilot (overview), Einstein GPT, and Prompt Builder</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Salesforce AI Trust Layer and data privacy in AI</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 mb-2">Agentforce Specialist — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Agent Builder: creating and configuring Agentforce agents</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Agent Topics: defining scope and instructions for agent behaviour</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Agent Actions: configuring Flows, Apex, and Prompt Templates as agent actions</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Guardrails and safety: controlling what agents can and cannot do</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Testing and deploying agents; evaluating agent conversation quality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which to take first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which to Take First?</h2>
        <p className="text-sm text-gray-700 mb-3">
          For most Salesforce professionals, the right sequence is AI Associate first, then Agentforce Specialist.
          The AI Associate exam is shorter, cheaper, and covers foundational AI knowledge that the
          Agentforce Specialist exam assumes you already have.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">Take AI Associate First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You are new to AI concepts and want a structured introduction</li>
              <li>You work as an admin, consultant, or marketer (not hands-on builder)</li>
              <li>You want a quick, affordable credential to add to your profile</li>
              <li>You plan to take Agentforce Specialist afterward</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Take Agentforce Specialist First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You already have a strong AI conceptual background</li>
              <li>You are actively building Agentforce agents on a project</li>
              <li>You need the higher-value credential urgently for client work</li>
              <li>You have already passed AI Associate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: AI Associate or Agentforce Specialist?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4">New to Salesforce AI — want foundational knowledge first</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">AI Associate — entry-level, no hands-on AI required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Working with Agentforce, Copilot, or Einstein features daily</td>
                <td className="py-2.5 font-semibold text-purple-700">Agentforce Specialist — tests applied AI configuration</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Preparing for a client-facing AI consulting role</td>
                <td className="py-2.5 font-semibold text-purple-700">Agentforce Specialist — more credible for AI projects</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Admin wanting to show AI awareness without deep implementation</td>
                <td className="py-2.5 font-semibold text-salesforce-blue">AI Associate — fast win, 40 questions, no Apex needed</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Building custom AI actions or prompt templates in Agentforce</td>
                <td className="py-2.5 font-semibold text-purple-700">Agentforce Specialist</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Want both — what order?</td>
                <td className="py-2.5 font-semibold text-gray-700">AI Associate first (1–2 weeks), then Agentforce Specialist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Both AI Certs</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/agentforce-specialist" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Agentforce Specialist Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/ai-associate" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            AI Associate Practice Questions
          </Link>
          <Link href="/agentforce-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Agentforce Exam Tips
          </Link>
          <Link href="/ai-associate-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            AI Associate Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
