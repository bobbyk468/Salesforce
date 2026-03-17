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

const slug = 'marketing-cloud-personalization-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Marketing Cloud Personalization AP validate?", options: ["Only basics", "Skills and knowledge in designing, configuring, building, and implementing Marketing Cloud Personalization", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Marketing Cloud Personalization Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Marketing Cloud Personalization." },
  { question: "What is Marketing Cloud Personalization used for?", options: ["Only email", "Delivering personalized experiences across web, mobile, and other touchpoints", "Only SMS", "Only social"], correctAnswer: 1, explanation: "It delivers personalized experiences across touchpoints." },
  { question: "What is a key activity for a Marketing Cloud Personalization Professional?", options: ["Only coding", "Designing, configuring, building, and implementing personalization solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They design, configure, build, and implement personalization solutions." },
  { question: "Which role typically pursues Marketing Cloud Personalization AP?", options: ["Sales only", "Partners and implementers working with Marketing Cloud Personalization", "Designers only", "Developers only"], correctAnswer: 1, explanation: "Partners and implementers working with personalization pursue this credential." },
  { question: "What does personalization often rely on?", options: ["Only static content", "Data, segments, and real-time decisioning", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Personalization relies on data, segments, and real-time decisioning." },
  { question: "What is real-time decisioning in personalization?", options: ["Batch only", "Instant content and offer selection based on user context", "Manual only", "Static only"], correctAnswer: 1, explanation: "Real-time decisioning selects content/offers instantly." },
  { question: "Which data source feeds Marketing Cloud Personalization?", options: ["Slack only", "CDP, Data Extensions, and event data", "Salesforce only", "No data"], correctAnswer: 1, explanation: "CDP and event data feed personalization." },
  { question: "What does web personalization target?", options: ["Email only", "Web pages, banners, and recommendations", "SMS only", "Social only"], correctAnswer: 1, explanation: "Web personalization targets pages and recommendations." },
  { question: "Which touchpoint does Marketing Cloud Personalization support?", options: ["Email only", "Web, mobile, email, and in-app", "SMS only", "Social only"], correctAnswer: 1, explanation: "Personalization supports web, mobile, email, and in-app." },
  { question: "What is the purpose of segments in personalization?", options: ["To replace data", "To target and tailor experiences by audience", "To send only", "To report only"], correctAnswer: 1, explanation: "Segments target and tailor experiences by audience." },
  { question: "Which integration connects personalization to Marketing Cloud?", options: ["Manual only", "CDP, Journey Builder, and Email Studio", "Slack only", "Service Cloud only"], correctAnswer: 1, explanation: "CDP and Journey Builder connect to personalization." },
  { question: "What does building personalization solutions involve?", options: ["Only design", "Configuring decision rules, segments, and experiences", "Only coding", "Only reports"], correctAnswer: 1, explanation: "Building involves rules, segments, and experiences." },
  { question: "Which best practice applies to personalization?", options: ["Ignore data", "Privacy-first, test experiences, and measure lift", "No testing", "Static only"], correctAnswer: 1, explanation: "Privacy-first, testing, and measurement support success." },
  { question: "What is the benefit of Marketing Cloud Personalization?", options: ["No benefit", "Relevant experiences that drive engagement and conversion", "Generic only", "Manual only"], correctAnswer: 1, explanation: "Personalization drives relevant engagement and conversion." },
  { question: "What is an offer in Marketing Cloud Personalization?", options: ["A report", "A content asset (banner, message) presented based on rules or segments", "An email only", "A workflow only"], correctAnswer: 1, explanation: "Offers are content assets presented conditionally based on rules and audience." },
]

export default function MarketingCloudPersonalizationAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Marketing Cloud Personalization Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Marketing Cloud Personalization." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Marketing Cloud Personalization', 'Personalization', 'Web', 'Mobile', 'Decisioning', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Cloud Personalization: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Catalog and Unified Profile</p>
                <p>Marketing Cloud Personalization (formerly Interaction Studio) builds Unified Profiles by tracking individual behaviour across channels. The Catalog stores product, article, or content items with attributes — forming the basis for recommendation algorithms. Item types (Products, Articles, Blog Posts) can be configured with custom attributes. Catalog data can be ingested via sitemap, feeds, or API. The Unified Profile aggregates engagement history across web, email, mobile, and in-store touchpoints.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Recipes and Recommendation Strategies</p>
                <p>Einstein Recipes define how the ML algorithm selects recommended items. Recipe types: Collaborative Filtering (users who viewed/bought X also liked Y), Content Affinity (attributes the individual user prefers), User Trending (popular among similar users). Strategies combine multiple Recipes with explicit rules (exclude viewed items, include only in-stock items, boost by margin). The exam tests how to configure a Strategy for a given personalisation scenario — e.g., homepage recommendations vs cart page cross-sell vs post-purchase email.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Web Campaigns and Server-Side Personalisation</p>
                <p>Web Campaigns are the delivery mechanism for personalised experiences. Server-Side Campaigns run before the page renders — for personalising page content without DOM flicker. Client-Side Campaigns inject content after page load — for overlays, pop-ups, and callouts. A/B testing is built into campaigns — control group receives the default experience, treatment group receives the personalised version. The exam tests when to use server-side vs client-side delivery and how to configure campaign targeting rules.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Segmentation and Triggered Campaigns</p>
                <p>Segment Builder creates real-time audience segments based on Unified Profile attributes — engagement score, category affinity, lifecycle stage. Segments update in real time as users engage. Triggered Campaigns fire when a user enters or exits a segment, or performs a specific action (abandons cart, views a product). Triggered messages can fire via email (via Marketing Cloud Journey Builder), mobile push, or real-time web experiences. The exam tests segment design and trigger condition configuration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Channel Integration: Email and Salesforce</p>
                <p>Email Integration connects Personalization with Marketing Cloud — Einstein Recipe recommendations appear in email templates via AMPscript or Open Time Email. Journey Builder integration enables triggered journeys based on Personalization segment entry. Salesforce CRM integration surfaces personalised recommendations in Sales and Service Cloud records. The exam tests how recommendation blocks are implemented in emails, how to pass user context between channels, and how to measure personalisation lift (revenue per recommendation shown).</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Marketing Cloud Personalization Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Marketing Cloud Personalization (Interaction Studio) AP exam tests real-time personalization capabilities. Focus on web SDK implementation, campaign configuration, and how to use behavioral data for personalized experiences.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Web SDK Implementation</p>
                <p>Know how to implement the Personalization web SDK (Evergage beacon), configure sitemap mappings for page types and item catalog, and how event data is sent to the Personalization platform.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Catalog &amp; User Profile</p>
                <p>Understand the Personalization catalog (Products, Articles, Blog Posts) and how item attributes drive recommendations. Know how User Profile attributes are built from behavioral events and how they power segmentation.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Campaign Types</p>
                <p>Know the four campaign types: Web (in-page personalization), Triggered Email, Open-Time Email, and Server-Side (API-based). Understand when to use each and how they integrate with Marketing Cloud.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Recipes &amp; Recommendations</p>
                <p>Know how to configure Einstein Recipe types (Trending, Recently Viewed, Similar Items, Collab Filtering) and how Boosters and Exclusions customize recommendation logic for specific use cases.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting &amp; A/B Testing</p>
                <p>Know how to interpret campaign performance reports (impressions, CTR, revenue per impression) and configure A/B tests against a control group to measure the lift from personalization.</p>
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
