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
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
          </div>
          
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
