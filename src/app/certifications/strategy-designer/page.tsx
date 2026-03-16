import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'strategy-designer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Platform Strategy Designer?",
    options: ["Only coding", "Using design methods to create compelling experience strategies that drive business outcomes on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Strategy Designers use design methods to create experience strategies that drive business outcomes.",
  },
  {
    question: "Which design discipline do Strategy Designers typically use?",
    options: ["Only visual design", "Design thinking, research, and strategy to define experience direction", "Only development", "Only testing"],
    correctAnswer: 1,
    explanation: "They use design thinking, research, and strategy to define experience direction.",
  },
  {
    question: "What does 'experience strategy' mean in this context?",
    options: ["Only UI mockups", "A plan for how users will interact with products and achieve outcomes", "Only technical architecture", "Only data model"],
    correctAnswer: 1,
    explanation: "Experience strategy is the plan for user interactions and outcomes.",
  },
  {
    question: "Which Salesforce capability do Strategy Designers often align with?",
    options: ["Only Apex", "Experience Cloud, Sales, Service, and platform features", "Only Marketing Cloud", "Only Heroku"],
    correctAnswer: 1,
    explanation: "They align strategy with Experience Cloud and platform capabilities.",
  },
  {
    question: "What outcome should a Strategy Designer drive?",
    options: ["Only documentation", "Business outcomes through compelling, human-centered experience strategies", "Only code", "Only reports"],
    correctAnswer: 1,
    explanation: "They drive business outcomes through human-centered experience strategies.",
  },
  {
    question: "What does design thinking emphasize?",
    options: [
      "Only coding",
      "Empathize, define, ideate, prototype, and test",
      "Only documentation",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Design thinking uses empathize, define, ideate, prototype, and test."
  },
  {
    question: "Which deliverable communicates experience strategy to stakeholders?",
    options: [
      "Code only",
      "Strategy document, journey maps, and vision artifacts",
      "Only wireframes",
      "Only prototypes"
    ],
    correctAnswer: 1,
    explanation: "Strategy documents and journey maps communicate experience direction."
  },
  {
    question: "What does stakeholder alignment achieve?",
    options: [
      "No alignment",
      "Shared understanding of goals, priorities, and success criteria",
      "Only technical alignment",
      "Only design alignment"
    ],
    correctAnswer: 1,
    explanation: "Stakeholder alignment ensures shared goals and success criteria."
  },
  {
    question: "Which research method helps Strategy Designers understand user needs?",
    options: [
      "Only surveys",
      "Interviews, observation, and empathy mapping",
      "Only analytics",
      "Only code review"
    ],
    correctAnswer: 1,
    explanation: "Interviews, observation, and empathy mapping reveal user needs."
  },
  {
    question: "What is the purpose of an experience vision?",
    options: [
      "To replace strategy",
      "To articulate the target future state for users and the business",
      "To write code",
      "To deploy"
    ],
    correctAnswer: 1,
    explanation: "Experience vision articulates the target future state."
  },
  {
    question: "Which platform capability should Strategy Designers understand?",
    options: [
      "Only Apex",
      "Experience Cloud, Sales, Service, and automation capabilities",
      "Only Heroku",
      "Only MuleSoft"
    ],
    correctAnswer: 1,
    explanation: "Strategy Designers align with platform capabilities."
  },
  {
    question: "What does opportunity framing support?",
    options: [
      "Only coding",
      "Defining the problem space and opportunity for design",
      "Only testing",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Opportunity framing defines the problem and opportunity."
  },
  {
    question: "Which outcome should an experience strategy prioritize?",
    options: [
      "Only technology",
      "User value and business outcomes",
      "Only cost",
      "Only speed"
    ],
    correctAnswer: 1,
    explanation: "Strategy should balance user value and business outcomes."
  },
  {
    question: "What is the benefit of involving users early in strategy?",
    options: [
      "No benefit",
      "Validation of assumptions and alignment with real needs",
      "Slower only",
      "Higher cost only"
    ],
    correctAnswer: 1,
    explanation: "Early user involvement validates assumptions and needs."
  },
  {
    question: "Which best practice applies to Strategy Designer deliverables?",
    options: [
      "Technical only",
      "Clear, actionable, and aligned with business and user goals",
      "Vague only",
      "No alignment"
    ],
    correctAnswer: 1,
    explanation: "Deliverables should be clear, actionable, and aligned."
  },
]

export default function StrategyDesignerPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="Strategy Designer"
            description="Certified Platform Strategy Designers have expertise using design methods to create compelling experience strategies that drive business outcomes using the Salesforce Platform."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Design Methods', 'Experience Strategy', 'Research', 'Stakeholder Alignment', 'Platform Capabilities', 'Business Outcomes', 'Human-Centered Design', 'Best Practices', 'Documentation', 'Presentation']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategy Designer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Human-Centered Design Strategy</p>
                <p>The Strategy Designer cert focuses on applying design thinking at the strategic level — not just UI design but organisational and service design. Design thinking phases: Empathise (deep user research, stakeholder interviews, observation), Define (synthesise insights into a clear problem statement — How Might We framing), Ideate (divergent brainstorming, then convergent selection), Prototype (lo-fi representations to test concepts), Test (validate with users and iterate). The exam tests which phase a given activity belongs to and what artefacts are produced at each stage.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Service Design and Journey Mapping</p>
                <p>Service Blueprints map the end-to-end service experience from the customer&apos;s viewpoint (frontstage) through the supporting processes (backstage) to the enabling systems and infrastructure. They reveal moments of truth — where the service experience is won or lost. User Journey Maps visualise the emotional arc of a user experience across touchpoints and channels. Ecosystem Maps show the full web of stakeholders and their relationships. The exam tests how to choose and apply the right mapping tool for a given design challenge.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Business Value Framing</p>
                <p>Strategy Designers must connect design decisions to business outcomes. Value Proposition Design: the Job-to-be-Done framework identifies what customers are trying to accomplish, what pains they experience, and what gains they seek — the value proposition relieves pains and creates gains. ROI of UX: reduced support volume, improved conversion rates, reduced onboarding time. Stakeholder alignment: presenting design concepts to executive sponsors using business language, not design terminology. The exam tests how to frame design decisions in terms of business metrics and stakeholder concerns.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Agile UX: Design Sprints and Dual-Track</p>
                <p>Dual-track Agile separates discovery (what to build) from delivery (how to build it). Discovery track: continuous research, prototype testing, and backlog refinement. Delivery track: sprint development of validated features. Design Sprints (Google Ventures model): 5-day intensive to solve a design challenge from definition to user-tested prototype. Lean UX: minimise waste by building the smallest testable increment. The exam tests how to integrate UX research into agile delivery without creating a waterfall design handoff.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Ethics, Inclusion, and Responsible Design</p>
                <p>Strategy Designers bear responsibility for the impact of the solutions they recommend. Inclusive design: design for the full spectrum of human diversity — ability, age, culture, language. Dark patterns in UX: manipulative design that tricks users into unintended actions — the strategy designer advocates against these. AI ethics in Salesforce products: fairness, transparency, accountability, and human control (Einstein&apos;s Trusted AI principles apply here). The exam tests how to identify design decisions that could cause harm and how to advocate for more equitable alternatives.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Strategy Designer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Strategy Designer exam tests design thinking and human-centered design applied to Salesforce projects. Focus on research methods, journey mapping, problem framing, and how to facilitate design workshops.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Design Thinking Process</p>
                <p>Know the five-stage design thinking process: Empathize, Define, Ideate, Prototype, Test. Understand when to apply each stage and how to move between stages iteratively based on research findings.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Research Methods</p>
                <p>Know quantitative vs. qualitative research methods: surveys, interviews, contextual inquiry, diary studies, and usability testing. Know how to select the right method based on the research question.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Journey Mapping</p>
                <p>Know how to create current-state and future-state journey maps: identifying touchpoints, emotions, pain points, and opportunities. Understand the difference between journey maps, service blueprints, and experience maps.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Problem Framing &amp; HMW Statements</p>
                <p>Know how to write &apos;How Might We&apos; (HMW) statements that reframe problems as opportunities. Understand how to use the POV (Point of View) statement to align on the design challenge.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Facilitation Techniques</p>
                <p>Know how to facilitate design workshops: affinity mapping, dot voting, crazy 8s ideation, and how to use the Lightning Decision Jam framework to move from problem to solution efficiently.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />

          
                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

          <div id="related-certs">
            <RelatedCertifications currentSlug={slug} />
          </div>

          {/* FAQ section - rendered after H1 for proper SEO structure */}
          <div id="faq">
            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents
            sections={[
              { id: 'exam-prep', title: 'Exam Prep Content' },
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'scenario-tips', title: 'How to Pass' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
