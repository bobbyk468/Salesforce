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

const slug = 'marketing-cloud-advanced-cross-channel-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Marketing Cloud Advanced Cross Channel AP validate?", options: ["Only basics", "Knowledge, skills, and experience with key Marketing Cloud Cross Channel topics", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Marketing Cloud Advanced Cross Channel Professionals have demonstrated knowledge, skills, and experience with key Marketing Cloud Cross Channel topics." },
  { question: "What does 'Cross Channel' mean in Marketing Cloud?", options: ["Only email", "Coordinating campaigns across email, mobile, web, and other channels", "Only SMS", "Only social"], correctAnswer: 1, explanation: "Cross Channel means coordinating campaigns across multiple channels." },
  { question: "What is a key activity for an Advanced Cross Channel Professional?", options: ["Only coding", "Designing and implementing cross-channel marketing solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They design and implement cross-channel marketing solutions." },
  { question: "Which role typically pursues Marketing Cloud Advanced Cross Channel AP?", options: ["Sales only", "Partners and implementers with advanced Marketing Cloud cross-channel experience", "Designers only", "Developers only"], correctAnswer: 1, explanation: "Partners and implementers with cross-channel experience pursue this credential." },
  { question: "Which Marketing Cloud products are often part of cross-channel solutions?", options: ["Only Email Studio", "Email Studio, Journey Builder, Mobile, Advertising, and more", "Only Journey Builder", "Only Automation Studio"], correctAnswer: 1, explanation: "Cross-channel solutions use Email, Journey Builder, Mobile, Advertising, and more." },
  { question: "What does Journey Builder support for cross-channel?", options: ["Email only", "Multi-channel journeys (email, SMS, push, etc.)", "SMS only", "Push only"], correctAnswer: 1, explanation: "Journey Builder supports multi-channel journeys." },
  { question: "Which capability enables cross-channel orchestration?", options: ["Single channel only", "Unified contact data and journey orchestration", "No orchestration", "Manual only"], correctAnswer: 1, explanation: "Unified data and orchestration enable cross-channel." },
  { question: "What does Mobile Studio support?", options: ["Email only", "SMS, push notifications, and in-app messaging", "SMS only", "Push only"], correctAnswer: 1, explanation: "Mobile Studio supports SMS, push, and in-app." },
  { question: "Which integration connects cross-channel data?", options: ["Slack only", "CDP, Salesforce CRM, and advertising platforms", "Email only", "No integration"], correctAnswer: 1, explanation: "CDP and CRM connect cross-channel data." },
  { question: "What is the purpose of cross-channel marketing?", options: ["Single channel only", "Consistent, coordinated experiences across touchpoints", "Email only", "SMS only"], correctAnswer: 1, explanation: "Cross-channel delivers consistent experiences." },
  { question: "Which best practice applies to cross-channel implementation?", options: ["Ignore data", "Unified contact identity and channel preferences", "No identity", "Single channel only"], correctAnswer: 1, explanation: "Unified identity and preferences support cross-channel." },
  { question: "What does Advertising Studio support?", options: ["Email only", "Paid media activation across ad platforms", "SMS only", "Push only"], correctAnswer: 1, explanation: "Advertising Studio supports paid media activation." },
  { question: "What is contact stitching in cross-channel marketing?", options: ["A report", "Merging identity across channels (email, device, anonymous) into a unified profile", "An email metric", "A journey step"], correctAnswer: 1, explanation: "Contact stitching unifies identity across channels for a single customer view." },
  { question: "What is the benefit of cross-channel marketing?", options: ["No benefit", "Coordinated experiences that improve engagement and conversion", "Siloed only", "Manual only"], correctAnswer: 1, explanation: "Cross-channel improves engagement and conversion." },
  { question: "Which Marketing Cloud topic is key for Advanced Cross Channel?", options: ["Slack only", "Journey Builder, data model, and channel integration", "Email only", "Reports only"], correctAnswer: 1, explanation: "Journey Builder, data, and channel integration are key." },
]

export default function MarketingCloudAdvancedCrossChannelAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Marketing Cloud Advanced Cross Channel Professionals have demonstrated knowledge, skills, and experience with key Marketing Cloud Cross Channel topics." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Marketing Cloud', 'Cross Channel', 'Email', 'Mobile', 'Journey Builder', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Cloud Advanced Cross-Channel: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advanced Journey Builder Design</p>
                <p>Advanced Cross-Channel builds on the Foundations cert. Advanced Journey features: Einstein Engagement Splits (AI-based routing by engagement score), Random Splits for A/B/n testing at scale, Engagement Frequency Splits (route by how often a contact has received messages), Wait Until Event (pause until a specific event occurs). Multi-journey coordination — managing contact entry into multiple journeys simultaneously. The exam tests how to design complex multi-branch journeys and when to use each split type.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mobile Messaging: MobileConnect and MobilePush</p>
                <p>MobileConnect manages SMS/MMS marketing. Keywords and shortcodes for opt-in/opt-out. Triggered sends via API. MobilePush manages push notifications to iOS and Android apps registered with Marketing Cloud. In-app messaging within mobile apps. Both channels integrate with Journey Builder as activities. Compliance: SMS requires explicit opt-in (TCPA in US), double opt-in recommended. The exam tests channel-specific compliance requirements and how each mobile channel integrates into cross-channel journeys.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advertising Studio: Audience Sync</p>
                <p>Advertising Studio syncs Marketing Cloud subscriber data with advertising platforms. Facebook Custom Audiences — sync email lists or Data Extension contacts to Facebook for matched advertising. Google Customer Match — same concept for Google Ads. Lead Ads — capture leads from Facebook/Google into Marketing Cloud Data Extensions. Audience Builder creates unified audiences across multiple data sources. The exam tests how to create, activate, and suppress audiences in advertising platforms using Marketing Cloud data.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Contact Builder and Data Architecture</p>
                <p>Contact Builder is the unified data management layer. Attribute Groups link Data Extensions to Contact records using a key field (usually Subscriber Key). Data Designer creates the contact data schema — defining which DEs store which attributes, and how they relate to the Contact record. The Contact model supports cross-channel identity — Email, SMS, push, and advertising all reference the same contact. The exam tests Contact Builder data model design and how to link multiple data sources into a unified Contact profile.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Features: Engagement Scoring and Recommendations</p>
                <p>Einstein Engagement Scoring predicts how likely a contact is to open, click, convert, or unsubscribe. Scores are updated daily and available as Data Extension attributes for segmentation and personalisation. Send Time Optimisation (STO) sends each contact&apos;s email at the historically optimal time. Einstein Content Selection automatically personalises which content block a recipient sees based on predicted engagement. The exam tests which Einstein feature addresses a given personalisation requirement and what data is needed to enable it.</p>
              </div>
            </div>
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
              { id: 'key-concepts', title: 'Key Concepts' },
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
