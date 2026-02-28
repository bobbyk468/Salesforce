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
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

const slug = 'mulesoft-catalyst-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a MuleSoft Catalyst Consultant do?", options: ["Only coding", "Use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified Catalyst Consultants use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes." },
  { question: "What is MuleSoft Catalyst?", options: ["Only a product", "A methodology and set of principles for API-led delivery and business outcomes", "Only Anypoint", "Only Mule runtime"], correctAnswer: 1, explanation: "MuleSoft Catalyst is a methodology for API-led delivery and business outcomes." },
  { question: "What is a key activity for a Catalyst Consultant?", options: ["Only coding", "Applying Catalyst principles in delivery engagements", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They apply Catalyst principles in delivery engagements." },
  { question: "Which role typically pursues MuleSoft Catalyst Consultant?", options: ["Marketers", "Consultants and delivery leads working with MuleSoft", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Consultants and delivery leads working with MuleSoft pursue this credential." },
  { question: "What does 'business outcomes' mean in Catalyst context?", options: ["Only revenue", "Measurable results achieved through API-led delivery (e.g., speed, reuse)", "Only cost", "Only speed"], correctAnswer: 1, explanation: "Business outcomes are measurable results achieved through API-led delivery." },
  { question: "What does API-led connectivity emphasize?", options: ["Point-to-point only", "Reusable APIs in System, Process, and Experience layers", "No reuse", "Single API only"], correctAnswer: 1, explanation: "API-led connectivity uses reusable API layers." },
  { question: "Which Catalyst principle supports faster delivery?", options: ["Manual only", "Reuse, design-first, and incremental delivery", "No design", "Big bang only"], correctAnswer: 1, explanation: "Reuse and design-first support faster delivery." },
  { question: "What does a Catalyst Consultant help achieve?", options: ["Only code", "Business outcomes through API-led methodology", "Only reports", "Only deployment"], correctAnswer: 1, explanation: "Consultants drive outcomes through Catalyst methodology." },
  { question: "Which stakeholder does Catalyst engage?", options: ["Developers only", "Business and IT for alignment", "Only IT", "Only business"], correctAnswer: 1, explanation: "Catalyst engages both business and IT stakeholders." },
  { question: "What is the purpose of Catalyst delivery practices?", options: ["To replace MuleSoft", "To achieve predictable, outcome-focused delivery", "To code only", "To deploy only"], correctAnswer: 1, explanation: "Catalyst practices aim for predictable, outcome-focused delivery." },
  { question: "Which MuleSoft product supports Catalyst methodology?", options: ["Email only", "Anypoint Platform and design tools", "Slack only", "CPQ only"], correctAnswer: 1, explanation: "Anypoint Platform supports Catalyst practices." },
  { question: "What does 'reuse' mean in Catalyst context?", options: ["Single use only", "APIs and assets designed for reuse across projects", "No reuse", "Copy-paste only"], correctAnswer: 1, explanation: "Reuse means APIs and assets used across projects." },
  { question: "Which role applies Catalyst principles?", options: ["Sales only", "Consultants, architects, and delivery leads", "Marketers only", "End users only"], correctAnswer: 1, explanation: "Consultants and architects apply Catalyst principles." },
  { question: "What is the benefit of Catalyst for organizations?", options: ["No benefit", "Faster time-to-value and reduced integration debt", "Slower only", "Higher cost only"], correctAnswer: 1, explanation: "Catalyst supports faster time-to-value and reduced debt." },
  { question: "Which best practice does Catalyst promote?", options: ["Ignore governance", "Design-first, reuse, and governance", "No design", "Ad-hoc only"], correctAnswer: 1, explanation: "Catalyst promotes design-first, reuse, and governance." },
]

export default function MuleSoftCatalystConsultantPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="Catalyst" description="Certified Catalyst Consultants use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['MuleSoft Catalyst', 'API-led', 'Delivery', 'Business Outcomes', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Catalyst Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Catalyst Methodology: Land, Expand, Engage</p>
                <p>Catalyst is MuleSoft&apos;s customer success methodology for driving API-led adoption. Land phase: establish the platform, deliver a pilot integration, demonstrate value. Expand phase: increase the number of teams using the platform, publish reusable assets to Exchange, grow the API portfolio. Engage phase: measure adoption metrics, demonstrate ROI, build a self-sustaining API economy. The Catalyst Consultant guides customers through this maturity model — assessing where they are and what the next expansion step looks like.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Enterprise Architecture Assessment</p>
                <p>The Catalyst Consultant conducts a current-state assessment of the customer&apos;s integration landscape — existing tools (ESB, custom code, point-to-point), API maturity, team structure. The target architecture defines the future state — which integration patterns, which deployment model, which governance model. Gap analysis identifies the roadmap: what to retire, migrate, or build. The consultant aligns the technical architecture with the customer&apos;s business strategy — not just solving integration problems but enabling new digital products and business models.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API Programme Strategy</p>
                <p>API product management treats APIs as products — with versioning strategy, lifecycle management, deprecation policies, and consumer engagement. The consultant helps the customer define: who the API consumers are (internal teams, partners, developers), how APIs are discovered (developer portal), and how they are monetised or governed. Versioning strategy: URI versioning (/v1/, /v2/) vs header versioning. Breaking vs non-breaking changes — the consultant defines the breaking change policy and communication plan.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Centre for Enablement Operating Model</p>
                <p>The Centre for Enablement (C4E) is the internal team that drives platform adoption. C4E responsibilities: create and publish reusable API templates and connector patterns, provide training and office hours, measure adoption, and enforce governance. The Catalyst Consultant helps establish the C4E — defining the team structure, funding model (platform team budget vs project team allocation), success metrics (asset reuse rate, time-to-first-API, developer NPS). The exam tests C4E design principles and adoption success metrics.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Delivery Playbook and Success Metrics</p>
                <p>The Catalyst Delivery Playbook defines: sprint cadence for API development (2-week sprints), definition of done (API spec, implementation, tests, documentation, Exchange publication), and team roles (API product owner, integration developer, platform administrator). Success metrics: Number of APIs published, reuse rate (what % of new APIs reuse existing assets), time-to-market for new integrations, integration incidents (reliability). The Catalyst Consultant uses these metrics to demonstrate programme value and justify platform investment.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the MuleSoft Catalyst Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The MuleSoft Catalyst Consultant exam tests expertise in using the MuleSoft Catalyst methodology to drive integration program success. Focus on the four pillars: Organization, Technology, Delivery, and Engagement.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Catalyst Methodology Framework</p>
                <p>Know the four Catalyst pillars: Organization (C4E setup, governance), Technology (platform architecture, reuse), Delivery (project delivery, agile), and Engagement (stakeholder alignment, value communication).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">C4E Establishment</p>
                <p>Know how to establish a Center for Enablement: define the operating model, set up Anypoint Exchange for asset sharing, measure reuse metrics (reuse rate, time-to-market improvement), and grow C4E maturity over time.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Value Realization</p>
                <p>Understand how to measure integration ROI: time saved through reuse, reduced integration costs, faster time-to-market, and how to present these metrics to executive stakeholders.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Delivery Best Practices</p>
                <p>Know how Catalyst recommends delivering integration projects: discovery workshops, platform health assessment, phased rollout, and how to prioritize use cases using a value/complexity matrix.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Stakeholder Engagement</p>
                <p>Catalyst programs succeed through executive sponsorship and business unit engagement. Know how to identify champions, run enablement sessions, and build the internal community of API practitioners.</p>
              </div>
            </div>
          </div>

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
