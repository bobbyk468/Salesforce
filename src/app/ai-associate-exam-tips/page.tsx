import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'ai-associate'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce AI Associate exam tips for ${RELEASE_CURRENT}: AI fundamentals, Einstein AI, responsible AI, data ethics Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/ai-associate-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/ai-associate-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `AI Associate exam tips ${RELEASE_CURRENT}, how to pass Salesforce AI Associate, Salesforce AI certification, Einstein AI exam study guide 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'AI Associate Exam Tips', url: '/ai-associate-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce AI Associate exam format?',
    answer: 'The Salesforce AI Associate exam has 40 multiple-choice questions, a 70-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It is an entry-level certification testing foundational knowledge of AI concepts, Salesforce Einstein AI features, responsible AI principles, and data ethics — no coding or deep technical knowledge required.',
  },
  {
    question: 'What are the highest-weight AI Associate exam sections?',
    answer: 'AI Fundamentals (30%) and Salesforce Einstein AI Features (28%) together account for 58% of the exam. Understanding machine learning concepts (supervised vs. unsupervised learning, model training, bias), Salesforce AI features (Einstein Prediction Builder, Einstein Discovery, Einstein GPT/Copilot), and responsible AI principles are the most tested areas.',
  },
  {
    question: 'Do I need programming knowledge to pass the AI Associate exam?',
    answer: 'No — the AI Associate is a foundational, non-technical certification. It tests conceptual understanding of AI rather than coding or implementation. You need to know what different AI features do and when to use them, but not how to build them technically. This makes it accessible to administrators, business analysts, and non-technical Salesforce professionals.',
  },
  {
    question: 'What responsible AI concepts does the AI Associate exam test?',
    answer: 'The exam tests Salesforce&apos;s Trusted AI principles: accuracy, safety, honesty, empowerment, sustainability, and inclusivity. It also tests common AI risks: bias in training data, hallucination in generative AI, privacy concerns with personal data, and the importance of human oversight. Understanding these principles at a conceptual level is required.',
  },
  {
    question: 'What concepts do most AI Associate candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the AI Associate exam are: (1) Types of Bias in AI — Not All Bias Is the Same; (2) Salesforce Einstein Features — Which Product Does What; (3) Salesforce\'s Five Ethical AI Principles. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('ai-associate-exam-tips'),
]

export default function AIAssociateExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/ai-associate-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce AI Associate Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The AI Associate exam is Salesforce&apos;s entry-level AI certification. It tests foundational knowledge
          of AI concepts, Salesforce Einstein features, and responsible AI — no coding required. These tips
          focus on the AI fundamentals and Salesforce-specific AI features that dominate the exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">70 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$75</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What AI Associate Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>AI fundamentals</strong> — Machine learning types (supervised, unsupervised, reinforcement), key concepts (training data, model, prediction, classification, regression), generative AI basics (LLMs, prompts, tokens, hallucination), and how AI models are trained and evaluated.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce Einstein AI features</strong> — Einstein Prediction Builder, Einstein Discovery, Einstein Copilot, Einstein GPT, Einstein Next Best Action, and which use cases each feature addresses. Understanding the difference between predictive AI (Einstein Discovery) and generative AI (Einstein GPT/Copilot) is key.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Responsible AI and data ethics</strong> — Salesforce Trusted AI principles, bias and fairness in AI models, privacy considerations for personal data in AI, the importance of transparency and explainability, and human oversight in automated AI decisions.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">AI Fundamentals</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Salesforce Einstein AI Features</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Responsible AI and Data Ethics</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">AI Use Cases and Business Value</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AI Fundamentals + Einstein Features + Responsible AI = 80%. This is primarily a knowledge-based exam — study all three areas equally.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach AI Associate Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a business AI scenario and ask which Salesforce Einstein feature is most appropriate,
          or present an AI concept and ask for the correct definition or use case. Read each answer carefully —
          distractors often describe real AI concepts but applied to the wrong scenario.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Einstein feature questions: Einstein Prediction Builder = create custom predictions for any Salesforce object without code. Einstein Discovery = find patterns in large datasets and explain key influencers. Einstein Copilot = conversational AI assistant in Salesforce. Einstein GPT = generative AI for content (email, case summaries). Match the feature to the use case.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ML concept questions: supervised learning uses labelled training data (input + correct output). Unsupervised learning finds patterns in unlabelled data (clustering). Classification predicts a category (will customer churn: yes/no). Regression predicts a numeric value (predicted deal size). Reinforcement learning uses reward signals — not commonly used in Salesforce Einstein.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For responsible AI questions: bias occurs when training data is not representative of the population. Hallucination is when generative AI produces confident but incorrect content. Transparency means users should know when AI is involved in a decision. When a scenario describes an AI problem, identify which principle (fairness, transparency, accountability) it violates.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The AI Associate is one of Salesforce&apos;s most accessible certifications — most candidates with
          2–3 weeks of focused study can pass. Complete the Trailhead AI Associate trail and the official
          Salesforce AI Fundamentals module. The exam is particularly suitable as a first certification
          for those new to Salesforce or AI.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most AI Associate Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Types of Bias in AI — Not All Bias Is the Same</p>
            <p className="text-sm text-gray-700">The exam tests three bias types candidates routinely confuse: Historical bias (training data reflects past inequalities); Representation bias (certain groups under-represented in training data); Measurement bias (how data is collected or labelled introduces skew). A dataset can be large and still contain bias. The correct answer to &ldquo;how do you reduce AI bias&rdquo; is not simply &ldquo;use more data&rdquo; — it depends on which type of bias exists.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Salesforce Einstein Features — Which Product Does What</p>
            <p className="text-sm text-gray-700">Candidates confuse Einstein Prediction Builder (custom prediction models on Salesforce data), Einstein Discovery (statistical insights and recommendations), Einstein Copilot (conversational AI assistant), and Agentforce (autonomous AI agents). Each sits in a different product context. Exam scenarios describe a use case and expect you to identify the correct Einstein feature — memorise which feature belongs to which cloud.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Salesforce&apos;s Five Ethical AI Principles</p>
            <p className="text-sm text-gray-700">The five Salesforce Trusted AI principles are: Responsible (prevent harm), Accountable (humans stay in control), Transparent (explainability), Empowering (augments humans, not replaces), and Inclusive (fair, unbiased outcomes). Exam scenarios describe an AI behaviour and ask which principle is violated. Map the behaviour to the correct principle — &ldquo;black box decision&rdquo; = Transparent; &ldquo;automated without override&rdquo; = Accountable.</p>
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
          <Link href="/agentforce-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Agentforce Specialist Exam Tips</span>
          </Link>
          <Link href="/data-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start AI Associate Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/ai-associate" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            AI Associate Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/agentforce-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Agentforce Specialist Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          After this exam, consider <Link href="/certifications/administrator" className="text-salesforce-blue underline">Platform Administrator (ADM-201)</Link> or <Link href="/certifications/developer-1" className="text-salesforce-blue underline">Platform Developer I</Link> next.
        </p>
      </section>
    </div>
  )
}