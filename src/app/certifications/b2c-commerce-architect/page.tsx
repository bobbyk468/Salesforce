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

const slug = 'b2c-commerce-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a B2C Commerce Architect do?", options: ["Only coding", "Design global sites that support multiple brands and channels using standard design patterns", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified B2C Commerce Architects are skilled in designing global sites that support multiple brands and channels using standard design patterns." },
  { question: "What does B2C stand for?", options: ["Back to Customer", "Business to Consumer", "Build to Order", "Brand to Consumer"], correctAnswer: 1, explanation: "B2C stands for Business to Consumer." },
  { question: "Which Salesforce product does B2C Commerce Architect focus on?", options: ["Marketing Cloud", "B2C Commerce (formerly Demandware) for B2C storefronts", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "B2C Commerce Architect focuses on B2C Commerce for B2C storefronts." },
  { question: "What is a key consideration for global B2C sites?", options: ["Only language", "Multiple brands, channels, and locales", "Only currency", "Only shipping"], correctAnswer: 1, explanation: "Multiple brands, channels, and locales are key considerations." },
  { question: "Which role typically pursues B2C Commerce Architect?", options: ["Marketers", "Architects and senior consultants designing B2C commerce solutions", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants designing B2C commerce solutions pursue this credential." },
  { question: "What does multi-brand B2C architecture support?", options: ["Single brand only", "Multiple brands with shared or separate catalogs and experiences", "B2B only", "No branding"], correctAnswer: 1, explanation: "Multi-brand supports multiple brands with shared or separate catalogs." },
  { question: "Which B2C Commerce design pattern supports scalability?", options: ["Monolith only", "SFRA, cartridge architecture, and headless", "Static only", "No patterns"], correctAnswer: 1, explanation: "SFRA, cartridges, and headless support scalability." },
  { question: "What does locale support in B2C Commerce include?", options: ["Language only", "Language, currency, and regional preferences", "Currency only", "No locale"], correctAnswer: 1, explanation: "Locale includes language, currency, and regional preferences." },
  { question: "Which B2C Commerce channel can be designed?", options: ["Web only", "Web, mobile, and omnichannel", "Mobile only", "No channels"], correctAnswer: 1, explanation: "B2C Commerce supports web, mobile, and omnichannel." },
  { question: "What is the purpose of B2C Commerce architecture?", options: ["Only coding", "Global, scalable, and maintainable B2C experiences", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Architecture supports global, scalable B2C experiences." },
  { question: "Which integration does B2C Commerce Architect consider?", options: ["Slack only", "Order Management, Marketing Cloud, and payment", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "Architects consider Order Management and Marketing Cloud integration." },
  { question: "What does standard design patterns mean for B2C?", options: ["Proprietary only", "Proven patterns for catalog, cart, and checkout", "No patterns", "Ad-hoc only"], correctAnswer: 1, explanation: "Standard patterns cover catalog, cart, and checkout." },
  { question: "Which best practice applies to B2C Commerce architecture?", options: ["Ignore performance", "Performance, SEO, and mobile-first design", "Desktop only", "No SEO"], correctAnswer: 1, explanation: "Performance, SEO, and mobile-first support B2C." },
  { question: "What does global site design encompass?", options: ["Single locale only", "Multi-locale, multi-currency, and regional fulfillment", "Single currency only", "No fulfillment"], correctAnswer: 1, explanation: "Global design encompasses multi-locale and fulfillment." },
  { question: "Which B2C Commerce capability supports headless?", options: ["Full-stack only", "OCAPI/SCAPI for headless storefronts", "No headless", "Slack only"], correctAnswer: 1, explanation: "OCAPI/SCAPI enables headless B2C Commerce." },
]

export default function B2CCommerceArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="B2C Architect" description="Certified B2C Commerce Architects are skilled in designing global sites that support multiple brands and channels using standard design patterns." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['B2C Commerce', 'Global Sites', 'Multi-Brand', 'Channels', 'Design Patterns', 'Best Practices']}
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
