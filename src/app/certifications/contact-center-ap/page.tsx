import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
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

const slug = 'contact-center-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Contact Center AP validate?", options: ["Only basics", "Fundamental knowledge, skills, and experience to discover, design, plan, and deliver product value with Contact Center", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Contact Center Professionals have fundamental knowledge, skills, and experience to discover, design, plan, and deliver product value with Contact Center." },
  { question: "Which Salesforce product does Contact Center refer to?", options: ["Marketing Cloud", "Contact Center for omnichannel customer engagement (voice, digital)", "Commerce Cloud", "Slack"], correctAnswer: 1, explanation: "Contact Center is Salesforce's omnichannel customer engagement product." },
  { question: "What is a key capability of Contact Center?", options: ["Only email", "Voice, digital channels, and unified agent experience", "Only CPQ", "Only reporting"], correctAnswer: 1, explanation: "Voice, digital channels, and unified agent experience are key capabilities." },
  { question: "Which role typically pursues Contact Center AP?", options: ["Marketers", "Partners and implementers working with Contact Center", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with Contact Center pursue this credential." },
  { question: "What does 'deliver product value' mean in Contact Center context?", options: ["Only shipping", "Delivering business value through contact center solutions", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means delivering business value through contact center solutions." },
  { question: "Which channel types does Contact Center support?", options: ["Voice only", "Voice, digital (chat, messaging), and unified agent experience", "Email only", "SMS only"], correctAnswer: 1, explanation: "Contact Center supports voice and digital channels with a unified agent workspace." },
  { question: "What is Omni-Channel routing in Contact Center?", options: ["Email routing only", "Intelligent routing of work items (calls, chats) to the right agent based on skills and capacity", "Voice only", "Manual assignment only"], correctAnswer: 1, explanation: "Omni-Channel routes work items to agents based on skills, capacity, and availability." },
  { question: "Which integration is key for Contact Center with Service Cloud?", options: ["Marketing Cloud only", "Service Cloud Console, Cases, and Knowledge for unified agent experience", "Commerce Cloud only", "Slack only"], correctAnswer: 1, explanation: "Contact Center integrates with Service Cloud for cases, knowledge, and agent tools." },
  { question: "What role does CTI (Computer Telephony Integration) play in Contact Center?", options: ["None", "Connecting voice calls to Salesforce for screen pops and call logging", "Email only", "Chat only"], correctAnswer: 1, explanation: "CTI connects the phone system to Salesforce for caller context and logging." },
  { question: "Why is workforce management relevant to Contact Center AP?", options: ["Not relevant", "Ensuring right agent capacity for forecasted contact volume", "Only for sales", "Only for marketing"], correctAnswer: 1, explanation: "Workforce management aligns staffing with expected contact demand." },
  { question: "What is a digital channel in Contact Center?", options: ["Voice only", "Chat, messaging, or social for customer interactions", "Fax only", "In-person only"], correctAnswer: 1, explanation: "Digital channels include chat, messaging (SMS, WhatsApp), and social." },
  { question: "Which capability helps agents handle multiple conversations?", options: ["Single-channel only", "Unified agent workspace supporting multiple concurrent work items", "Voice only", "Email only"], correctAnswer: 1, explanation: "Agents can handle multiple chats and work items in one workspace." },
  { question: "What does 'discover and design' mean for Contact Center implementation?", options: ["Only coding", "Understanding requirements and designing the contact center solution", "Only reporting", "Only deployment"], correctAnswer: 1, explanation: "Discover = gather requirements; design = plan the solution architecture." },
  { question: "What is skill-based routing in Omni-Channel?", options: ["Random assignment", "Matching work items to agents with the right skills or capacity", "Manual only", "Time-based only"], correctAnswer: 1, explanation: "Skill-based routing assigns work to agents whose skills match the request." },
  { question: "What is a key best practice for Contact Center deployment?", options: ["Ignore capacity", "Design routing rules, agent skills, and capacity based on contact volume", "Voice only", "No integration needed"], correctAnswer: 1, explanation: "Routing, skills, and capacity planning are foundational best practices." },
]

export default function ContactCenterAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Contact Center Professionals have fundamental knowledge, skills, and experience to discover, design, plan, and deliver product value to customers with Contact Center." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Contact Center', 'Omnichannel', 'Voice', 'Digital', 'Agent Experience', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Center AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Omni-Channel Routing & Queues</p>
                <p>Omni-Channel routes work items (Cases, Chats, Calls) to the most appropriate available agent. Routing Configurations define how work is prioritized and assigned — by queue capacity, agent skill, or least-active. Presence Configurations control which channels an agent can handle simultaneously and their capacity. Service Channels map Salesforce objects (Case, Chat Session, Voice Call) to the routing engine. Queues hold work items pending assignment. The AP exam tests how to configure Omni-Channel for a scenario with multiple channels (voice, chat, email) and mixed-skill agents — know how capacity units work and how to prevent agent overload.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Service Cloud Voice & CTI Integration</p>
                <p>Service Cloud Voice (SCV) embeds telephony directly into the agent console. Amazon Connect is the native telephony partner, but any BYOT (Bring Your Own Telephony) partner can integrate via the SCV API. Real-Time Transcription captures call text live, enabling Einstein recommendations to surface knowledge articles mid-call. Call Controls (mute, hold, transfer, conference) appear in the Omni-Channel widget. After-call work status prevents new work from routing during wrap-up. CTI (Computer Telephony Integration) via Open CTI embeds third-party phone systems using a JavaScript framework. The exam tests SCV configuration, how transcription data is stored, and how to configure after-call work.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Bots & Digital Engagement</p>
                <p>Einstein Bots handle routine customer inquiries via chat before escalating to a human agent. Bot Dialogs define conversation flows — intents, entities, and slot-filling collect required information. Bot versions support staged rollout. Einstein Bot Builder uses a visual conversation designer. Escalation from bot to agent preserves conversation context and transcript. Digital Engagement channels: Chat (embedded web), Messaging (SMS, WhatsApp, Facebook Messenger), and Email. Each channel has its own routing configuration. Enhanced Bot (built on Einstein AI) supports more complex NLU. The exam tests how to configure a bot, define intents, and set up escalation routing.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Knowledge Management & Deflection</p>
                <p>Salesforce Knowledge articles provide agents and customers with searchable help content. Article Types define the structure (field layout) of different content categories. Data Categories control visibility — agents may see all, customers only see published public articles. Einstein Search Suggestions surfaces relevant articles based on case subject and description. Lightning Knowledge uses a unified Article object. Channels: Internal (agent console), Customer (self-service portal), Partner (partner community). Article Usage Metrics track deflection rate. Knowledge Base feeds Einstein Bots and Einstein Article Recommendations. The exam tests Knowledge configuration, how data categories restrict visibility, and how to measure deflection effectiveness.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting & Contact Center Analytics</p>
                <p>Contact center KPIs: Average Handle Time (AHT), First Contact Resolution (FCR), Customer Satisfaction (CSAT), Queue Wait Time, Abandonment Rate. Omni-Channel Supervisor provides a real-time view of agent availability, queue depth, and work item status. Historical reporting uses standard Salesforce reports on Case, Voice Call, and Chat Transcript objects. CRM Analytics Contact Center apps provide pre-built dashboards. Escalation analysis identifies bot-to-human handoff patterns. The AP exam tests how to configure Omni-Channel Supervisor views, which standard report objects contain which metrics, and how to set up a CSAT survey triggered after case closure.</p>
              </div>
            </div>
          </div>

          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Contact Center Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Contact Center AP exam tests implementation of contact center solutions using Salesforce. Focus on voice channel configuration, routing strategies, IVR design, and agent experience optimization.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Service Cloud Voice Architecture</p>
                <p>Know how Service Cloud Voice integrates telephony: Amazon Connect or partner CTI, how voice calls create cases automatically, and how real-time transcription and Einstein Conversation Insights work.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Omni-Channel Routing for Contact Center</p>
                <p>Know how to configure Omni-Channel for contact center: Queue-Based vs. Skills-Based routing, capacity rules, and how voice, chat, and case channels share agent capacity through a single routing engine.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">IVR Design &amp; Self-Service</p>
                <p>Know how to design IVR flows for contact center deflection: menu options, DTMF input, speech recognition, and how Einstein Bots handle chat/voice self-service before transferring to an agent.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Agent Experience Configuration</p>
                <p>Know how to configure the agent console for contact center: Service Console with voice controls, CTI Softphone in the utility bar, screen pop configuration based on ANI/DNIS, and wrap-up codes.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting &amp; Analytics</p>
                <p>Know the key contact center KPIs: Average Handle Time (AHT), First Contact Resolution (FCR), CSAT, and how to build reports using Omni-Channel Supervisor and CRM Analytics for supervisor dashboards.</p>
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

                    <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Certifications After This AP</h2>
            <p className="text-sm text-gray-700 mb-2">AP credentials pair well with core platform certifications. Consider:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link></li>
              <li><Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link></li>
              <li><Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Platform Administrator</Link></li>
              <li><Link href="/certifications/role/administrator" className="text-salesforce-blue font-medium hover:underline">Admin certification path</Link></li>
            </ul>
          </section>

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
