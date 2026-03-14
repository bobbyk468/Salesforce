import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce AI Associate Study Guide (${RELEASE_CURRENT}): Pass the Exam`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `AI Associate study guide: 4 sections, AI fundamentals, Einstein AI, ethical AI. Pass first attempt Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/ai-associate-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/ai-associate-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `AI Associate study guide ${RELEASE_CURRENT}, how to pass Salesforce AI Associate exam, Salesforce Einstein AI certification prep, AI Associate exam sections, ethical AI Salesforce exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'AI Associate Study Guide', url: '/ai-associate-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Salesforce AI Associate exam format?',
    answer: 'The Salesforce AI Associate exam has 40 multiple-choice questions, a 70-minute time limit, a 65% passing score, and a $75 fee ($75 retake). It is an entry-level certification designed for any Salesforce professional who works with or alongside AI features — no coding or hands-on AI configuration is required.',
  },
  {
    question: 'What are the highest-weight AI Associate exam sections?',
    answer: 'Salesforce Einstein AI Features (35%) is the largest section — it tests knowledge of specific Salesforce AI products (Einstein GPT, Einstein Prediction Builder, Agentforce, Prompt Builder, etc.). AI Fundamentals (17%), Ethical AI and Bias (23%), and AI Challenges and Data (25%) round out the exam. The exam is broadly conceptual — understanding what tools exist and when to use them is more important than configuration steps.',
  },
  {
    question: 'Do I need a technical background for the AI Associate exam?',
    answer: 'No. The AI Associate exam is explicitly designed for non-technical Salesforce professionals. You do not need to write code, configure machine learning models, or understand mathematical algorithms. You do need to understand AI concepts at a conceptual level (what is supervised vs unsupervised learning, what is an LLM, what is a hallucination) and know which Salesforce AI products exist and what they do.',
  },
  {
    question: 'Is the AI Associate exam a prerequisite for Agentforce Specialist?',
    answer: 'AI Associate is not a hard prerequisite for Agentforce Specialist, but it is strongly recommended. AI Associate covers foundational AI concepts (LLMs, bias, hallucinations, ethical AI) that the Agentforce Specialist exam assumes as background knowledge. Most candidates find the Agentforce Specialist exam significantly easier when they have already studied AI concepts through the AI Associate path.',
  },
]

const examSections = [
  { name: 'Salesforce Einstein AI Features', weight: 35, note: 'Einstein GPT, Agentforce, Prompt Builder, Einstein Prediction Builder, Einstein Next Best Action, AI Cloud products' },
  { name: 'AI Challenges and Data for AI', weight: 25, note: 'Hallucinations, model limitations, data quality requirements, bias in training data, AI system risks' },
  { name: 'Ethical Considerations of AI', weight: 23, note: 'Responsible AI principles, bias types, transparency, fairness, accountability, Salesforce Trusted AI principles' },
  { name: 'AI Fundamentals', weight: 17, note: 'Machine learning types (supervised, unsupervised, reinforcement), LLMs, neural networks, generative AI concepts' },
]

export default function AiAssociateStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/ai-associate-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce AI Associate Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce AI Associate certification is the entry-level AI credential for any Salesforce
          professional. It validates your understanding of AI fundamentals, Salesforce Einstein AI products,
          and responsible AI principles — no coding required. This guide covers every exam section and
          the scenario strategies you need to pass.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">AI Associate Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '40' },
            { label: 'Time Limit', value: '70 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$75' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Retake fee: $75. No prerequisites. Shorter and cheaper than most Salesforce exams — an accessible first AI credential for any Salesforce professional.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AI Associate Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Salesforce Einstein Features (35%) + AI Challenges (25%) = 60% of the exam. Know what each Salesforce AI product does and what can go wrong with AI systems.
        </p>
        <div className="space-y-3">
          {examSections.map(({ name, weight, note }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{name}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Salesforce Einstein AI Features (35%)
            </p>
            <p>The largest section tests your knowledge of the Salesforce AI product landscape. Know these products and what they do: <strong>Einstein Prediction Builder</strong> — build custom AI prediction models on CRM data (no code, configurable). <strong>Einstein Next Best Action</strong> — surface AI-recommended actions to users based on rules and predictions. <strong>Einstein Sentiment / Classification</strong> — analyse text (cases, emails) for sentiment and category. <strong>Prompt Builder</strong> — create, manage, and deploy AI prompts across the Salesforce platform. <strong>Agentforce</strong> — autonomous AI agents that take actions on behalf of users or customers. <strong>Einstein Trust Layer</strong> — the governance layer that ensures AI interactions are safe, private, and audited. Understand when each product is appropriate for a given business scenario.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              AI Challenges and Data for AI (25%)
            </p>
            <p>This section tests your understanding of what can go wrong with AI systems and why data quality matters. Key topics: <strong>Hallucinations</strong> — when a generative AI model produces confident but factually incorrect output. <strong>Bias</strong> — when a model produces systematically unfair results because of biased training data or model design. <strong>Data quality</strong> — AI models are only as good as the data they are trained on; incomplete, inaccurate, or unrepresentative data produces unreliable models. <strong>Model drift</strong> — over time, a model&apos;s performance degrades as the real world changes and diverges from the training data. Know the distinction between data bias (training data doesn&apos;t represent all groups) and algorithmic bias (the model&apos;s design amplifies certain patterns).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Ethical Considerations of AI (23%)
            </p>
            <p>Salesforce&apos;s five Trusted AI Principles: <strong>Responsible</strong> (AI should empower people), <strong>Accountable</strong> (clear human accountability for AI decisions), <strong>Transparent</strong> (AI decisions are explainable), <strong>Empowering</strong> (AI augments human capability), and <strong>Inclusive</strong> (AI benefits all people, not just some). Know these by name — the exam asks which principle applies to a given scenario. Also understand: the difference between AI replacing humans vs augmenting them, the importance of human oversight for high-stakes AI decisions (medical, legal, financial), and how transparency in AI decisions builds user trust.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              AI Fundamentals (17%)
            </p>
            <p>Conceptual AI vocabulary you need to know: <strong>Machine Learning types:</strong> Supervised learning (labelled training data, predicts outcomes — e.g., will this lead convert?), Unsupervised learning (no labels, finds patterns — e.g., customer segmentation), Reinforcement learning (learns from reward/penalty feedback). <strong>Large Language Models (LLMs):</strong> neural networks trained on vast text corpora that generate text by predicting the next token. <strong>Generative AI:</strong> AI that creates new content (text, images, code) rather than just classifying input. <strong>Prompt engineering:</strong> the practice of crafting effective input prompts to get reliable, useful outputs from AI models.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">3-Week AI Associate Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Salesforce AI Products (35%) + AI Fundamentals (17%):</strong> Complete Trailhead&apos;s &ldquo;Artificial Intelligence Fundamentals&rdquo; and &ldquo;Einstein AI Overview&rdquo; trails. Study each Salesforce AI product: what it does, who uses it, and when to use it. Memorise the product list: Prediction Builder, Next Best Action, Einstein Copilot, Agentforce, Prompt Builder, Trust Layer.</p>
          <p><strong>Week 2 — Ethical AI (23%) + AI Challenges (25%):</strong> Study Salesforce&apos;s five Trusted AI Principles. Memorise them by name. Study bias types, hallucinations, model drift, and data quality requirements. Complete Trailhead&apos;s &ldquo;Responsible Creation of AI&rdquo; module.</p>
          <p><strong>Week 3:</strong> Practice questions and timed mock exams (40 Q / 70 min). The AI Associate exam is shorter than most — aim for 80%+ on mocks before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach AI Associate Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Product selection questions:</strong> If a scenario needs a prediction based on CRM data (will this opportunity close?), the answer is Einstein Prediction Builder. If it needs recommended actions shown to a user (suggest a discount to retain a customer), the answer is Next Best Action. If it needs an autonomous agent to handle customer queries end-to-end, the answer is Agentforce. Match the product to the use case by identifying: does it predict, recommend, generate, or act autonomously?</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Ethical principle questions:</strong> Scenarios describe an AI situation and ask which Salesforce Trusted AI principle is most relevant. If the scenario is about explainability (users want to know why AI made a decision), the answer is Transparent. If about fairness (AI should work equally well for all demographic groups), the answer is Inclusive. If about keeping humans in control of high-stakes AI decisions, the answer is Accountable. Know all five principles: Responsible, Accountable, Transparent, Empowering, Inclusive.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>AI limitation questions:</strong> When an AI generates confident but incorrect factual information, that is a <em>hallucination</em>. When a model performs well on training data but poorly in production (because the world changed), that is <em>model drift</em>. When a model systematically disadvantages a particular group, that is <em>bias</em>. Each failure mode has a distinct cause and mitigation strategy — know the correct label for each scenario.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 2 timed full mocks (40 Q / 70 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The AI Associate exam is shorter and cheaper than most Salesforce certifications. The most common
          failure mode is underestimating the Salesforce-specific product knowledge required — candidates
          who study only general AI concepts and skip the Salesforce product catalogue (Einstein features,
          Trust Layer) consistently miss questions in the 35% Salesforce AI Features section.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Salesforce Trusted AI Principles: Responsible, Accountable, Transparent, Empowering, Inclusive</li>
          <li>Einstein Prediction Builder: custom predictions on CRM data, no code required</li>
          <li>Einstein Next Best Action: surfaces AI-recommended actions to Salesforce users</li>
          <li>Agentforce: autonomous AI agents — different from Copilot (Copilot is assisted)</li>
          <li>Prompt Builder: create, manage, and deploy prompts across the Salesforce platform</li>
          <li>Einstein Trust Layer: Zero Retention, PII masking, audit logging for AI safety</li>
          <li>Hallucination: AI produces confident but incorrect output — always review AI-generated content</li>
          <li>Bias: training data or model design causes systematically unfair outcomes</li>
          <li>Model drift: model performance degrades over time as the world changes</li>
          <li>Supervised vs Unsupervised learning: labelled data (predict) vs unlabelled (find patterns)</li>
        </ol>
      </section>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/platform-foundations-vs-ai-associate" className="text-sm text-salesforce-blue hover:underline font-medium">→ Platform Foundations vs AI Associate — which cert is right for you?</Link></li>
        </ul>
      </div>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free AI Associate practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/ai-associate" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            AI Associate Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/ai-associate-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            AI Associate Exam Tips
          </Link>
          <Link href="/agentforce-specialist-study-guide" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Agentforce Specialist Study Guide
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          <Link href="/agentforce-specialist-vs-ai-associate" className="text-salesforce-blue hover:underline">
            Agentforce Specialist vs AI Associate — which to take first? →
          </Link>
        </p>
      </section>
    </div>
  )
}
