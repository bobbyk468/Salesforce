import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'technical-architect-review-board'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `CTA Review Board tips: scenario presentation, whiteboarding, panel Q&A. How to pass the live architecture defence Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/technical-architect-review-board-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/technical-architect-review-board-exam-tips`,
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
  { name: 'CTA Review Board Exam Tips', url: '/technical-architect-review-board-exam-tips' },
]

const faqItems = [
  {
    question: 'Is the Technical Architect Review Board worth pursuing?',
    answer: 'The Technical Architect Review Board is the most prestigious credential in the Salesforce ecosystem — held by fewer than 1% of certified professionals. It validates the ability to design enterprise-scale Salesforce architectures across all domains simultaneously. CTAs command the highest salaries in the Salesforce job market and are sought by top SIs and consulting firms. The investment is significant (time, study, and fees), but for architects targeting the top of the Salesforce career ladder, it is widely considered the most valuable credential available.',
  },
  {
    question: 'What scenario topics does the CTA Review Board typically cover?',
    answer: 'CTA Review Board scenarios are deliberately broad and ambiguous. They typically involve a large enterprise with multiple Salesforce clouds, integration requirements, identity and access management challenges, large data volumes, complex security and sharing requirements, and a release management question. You are expected to address all architectural domains — not just your strongest area. Scenarios often include deliberate constraints that force trade-off decisions.',
  },
  {
    question: 'How should I structure my CTA Review Board presentation?',
    answer: 'A strong Review Board presentation typically follows: (1) Restate the scenario requirements and constraints in your own words to confirm understanding; (2) Present your solution architecture with a whiteboard diagram covering all domains; (3) Justify each key decision with explicit trade-offs (why this approach vs the alternative); (4) Call out risks and mitigation strategies proactively; (5) Summarise governance and deployment approach. The panel rewards candidates who demonstrate architectural thinking — the &quot;why&quot; behind decisions — not just correct answers.',
  },
  {
    question: 'What are the most common reasons candidates fail the CTA Review Board?',
    answer: 'Common failure reasons: (1) Insufficient breadth — solving only the primary requirement and missing data architecture, identity, or deployment concerns; (2) Inability to defend decisions under panel questioning — changing the answer when challenged rather than holding a justified position; (3) Overlooking scalability — designing for current state without considering large data volumes or future growth; (4) Not addressing trade-offs — presenting one solution as if there are no alternatives or downsides; (5) Weak security architecture — not addressing field-level security, sharing rules, or external identity at scale.',
  },
  {
    question: 'What concepts do most Technical Architect Review Board candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Technical Architect Review Board exam are: (1) The Scenario Is Deliberately Ambiguous — You Must Ask Clarifying Questions; (2) Defence Matters as Much as the Solution; (3) End-to-End Solution — Security, Deployment, and Governance Are Scored. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('technical-architect-review-board-exam-tips'),
]

export default function TechnicalArchitectReviewBoardExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/technical-architect-review-board-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          CTA Review Board Exam Tips ({RELEASE_CURRENT}): How to Pass the Live Architecture Presentation
        </h1>
        <p className="text-lg text-gray-600">
          The CTA Review Board is the live presentation component of the Salesforce Certified Technical
          Architect credential — a half-day session where you present your solution to a panel of sitting
          CTAs. These tips focus on presentation structure, whiteboarding technique, and Q&amp;A defence
          strategy for this expert-level assessment.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Presentation</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Half-day</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$3,000</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What the CTA Review Board Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Architectural breadth under pressure</strong> — The Review Board tests whether you can design a complete enterprise Salesforce architecture covering all domains simultaneously: data architecture (LDV, Big Objects), integration (API-led, CDC, MuleSoft), identity (SAML SSO, OAuth, Experience Cloud), security (OWD, sharing rules, FLS at scale), and deployment (release management, scratch orgs, CI/CD) — all in response to a single complex scenario.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Decision justification and trade-off reasoning</strong> — The panel of CTAs deliberately challenges your decisions. They want to see you justify choices with explicit trade-offs (single-org vs multi-org: simpler governance but harder to achieve separate release cycles), hold your position under pressure when your reasoning is sound, and pivot gracefully when challenged with a valid constraint you had not considered.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Risk identification and mitigation</strong> — Strong candidates proactively identify architectural risks in their own solution (large data volumes triggering sharing recalculation, Apex governor limits in complex automation, integration failure cascades) and describe mitigation strategies. Candidates who only present the &apos;happy path&apos; without acknowledging risks are seen as less architecturally mature.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Presentation Structure: The Architecture Domains to Cover</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Architecture and Management</span>
            <span className="font-bold text-salesforce-blue ml-4">Always address</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integration Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">Always address</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Identity Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">Always address</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Development Lifecycle and Deployment</span>
            <span className="font-bold text-salesforce-blue ml-4">Always address</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Solution Architecture (Org Strategy, Clouds)</span>
            <span className="font-bold text-salesforce-blue ml-4">Always address</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">All domains must be addressed in your presentation — not just the primary scenario focus. Missing a domain entirely (e.g., not discussing deployment strategy) is a common failure pattern.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach the Review Board</h2>
        <p className="text-sm text-gray-700 mb-3">
          The Review Board scenario is deliberately ambiguous — it will have constraints that conflict and
          requirements that could be solved multiple ways. The panel does not want the &apos;right answer&apos;;
          they want to see architectural thinking, trade-off analysis, and the ability to defend a justified
          position under interrogation.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For whiteboarding: draw a high-level architecture diagram first (org structure, system landscape, integration flows, identity boundaries). Use swim lanes or zones to separate concerns (internal users vs external users vs systems). Label every arrow with the integration pattern (REST, CDC, MuleSoft, Platform Events). The panel evaluates your diagram independently — it must stand alone as a clear architectural artefact, not just a prop for your verbal explanation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For panel Q&amp;A: when the panel challenges a decision (&apos;why not multi-org?&apos;, &apos;what if the integration fails?&apos;), respond with &apos;That&apos;s a valid consideration — in this scenario I chose [approach] because [specific constraint from the scenario] makes [alternative] less suitable, though if [different constraint] were present, I would reconsider.&apos; This structure shows you understand alternatives without abandoning your justified position. Do not simply agree with every challenge.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For LDV scenarios (very common in Review Board): if the scenario mentions millions of records or high-volume data, explicitly address skinny tables for reporting performance, custom indexes for selective queries, data archiving strategy with Big Objects, and the impact of sharing recalculation on large data volumes. If you wait for the panel to ask about LDV rather than addressing it proactively, it signals insufficient architectural foresight.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Preparation Approach for the CTA Review Board</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Mock Review Board sessions with a CTA mentor are essential — written study alone is insufficient
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most effective preparation is live mock Review Board sessions with a sitting CTA acting as
          a panel member. Trailblazer Community CTA groups run peer mock sessions. Key preparation
          activities: practice whiteboarding all five architectural domains from a single scenario in
          under 30 minutes; practise holding positions under challenge without becoming defensive or
          capitulating; study the Salesforce Architecture Patterns Trailmix and all architect-level
          credential study materials; review published CTA Review Board scenario reports and community
          post-mortems from candidates who have attempted the board.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Technical Architect Review Board Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. The Scenario Is Deliberately Ambiguous — You Must Ask Clarifying Questions</p>
            <p className="text-sm text-gray-700">The Review Board scenario intentionally omits details to see if candidates proactively identify and resolve ambiguity. Candidates who proceed on assumptions without questioning constraints will design solutions that do not fit the actual requirements. The first 10 minutes of the board should include explicit clarifying questions: "What is the data volume?" "Is multi-org on the table?" "What are the timeline constraints?"</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Defence Matters as Much as the Solution</p>
            <p className="text-sm text-gray-700">Board members will challenge your design choices. A technically correct architecture that you cannot defend is scored lower than a pragmatic architecture you can explain under pressure. Candidates over-engineer their architecture to impress — the board expects a defensible, constraint-aware design with clear rationale for every major decision.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. End-to-End Solution — Security, Deployment, and Governance Are Scored</p>
            <p className="text-sm text-gray-700">The Review Board scores the full solution, not just the technical architecture. Missing sections include: data security and sharing model, deployment and release strategy, integration governance, and post-launch support model. Candidates present only the data model and integration diagrams — the board expects a complete solution narrative covering all scored dimensions.</p>
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
          <Link href="/technical-architect-evaluation-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Technical Architect Evaluation Exam Tips</span>
          </Link>
          <Link href="/technical-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Technical Architect Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CTA Review Board Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/technical-architect-review-board" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CTA Review Board Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/technical-architect-evaluation-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CTA Evaluation Exam Tips
          </Link>
          <Link href="/become-cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            How to Become a CTA
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/application-architect" className="text-salesforce-blue underline">Application Architect</Link> or <Link href="/certifications/system-architect" className="text-salesforce-blue underline">System Architect</Link> next.
        </p>
      </section>
    </div>
  )
}