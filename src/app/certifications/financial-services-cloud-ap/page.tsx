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

const slug = 'financial-services-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Financial Services Cloud AP validate?", options: ["Only basics", "Skills and knowledge to implement Salesforce Financial Services Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Financial Services Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Financial Services Cloud." },
  { question: "Which industry does Financial Services Cloud serve?", options: ["Retail only", "Financial services (e.g., banking, wealth management, insurance)", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Financial Services Cloud serves financial services industries." },
  { question: "What is a key use case for Financial Services Cloud?", options: ["Only email", "Wealth management, banking, and insurance workflows", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Wealth management, banking, and insurance workflows are key use cases." },
  { question: "Which role typically pursues Financial Services Cloud AP?", options: ["Marketers", "Partners and implementers in financial services", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in financial services pursue this credential." },
  { question: "What does implementation of Financial Services Cloud often involve?", options: ["Only UI", "Industry data model, workflows, and compliance considerations", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Implementation involves industry data model, workflows, and compliance." },
  { question: "What is wealth management in Financial Services Cloud?", options: ["Only banking", "Managing client relationships, assets, and financial planning", "Only insurance", "Only marketing"], correctAnswer: 1, explanation: "Wealth management covers client assets and financial planning." },
  { question: "Which data model objects are specific to Financial Services Cloud?", options: ["Standard objects only", "Financial Account, Goals, and industry-specific objects", "Only Contact", "Only Account"], correctAnswer: 1, explanation: "Financial Account, Goals, and related objects support wealth management." },
  { question: "Why is compliance critical for Financial Services Cloud?", options: ["Not critical", "Financial services are regulated (e.g., KYC, suitability); data and processes must comply", "Only for marketing", "Only for sales"], correctAnswer: 1, explanation: "Regulations like KYC and suitability require compliance." },
  { question: "What does household mean in Financial Services Cloud?", options: ["Single account only", "A group of related clients (e.g., family) sharing financial relationships", "Only contact", "Only opportunity"], correctAnswer: 1, explanation: "Households group related clients for wealth management." },
  { question: "Which use case does Financial Services Cloud support for banking?", options: ["Retail only", "Consumer banking, commercial banking, and lending workflows", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Banking use cases include consumer, commercial, and lending." },
  { question: "What is a Financial Goal in Financial Services Cloud?", options: ["A report", "A client's financial objective (e.g., retirement, education) to track progress", "A case type", "An email template"], correctAnswer: 1, explanation: "Financial Goals track client objectives and progress." },
  { question: "Which industry segment uses Financial Services Cloud for insurance?", options: ["Retail only", "Insurance carriers for policy and claims workflows", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Insurance carriers use FSC for policy and claims." },
  { question: "What does 'scope' mean for Financial Services Cloud implementation?", options: ["Only coding", "Gathering requirements and defining solution scope", "Only deployment", "Only training"], correctAnswer: 1, explanation: "Scope = requirements gathering and solution definition." },
  { question: "Which Salesforce product does Financial Services Cloud extend?", options: ["Commerce Cloud", "Sales Cloud and Service Cloud with financial services data model", "Marketing Cloud only", "Slack only"], correctAnswer: 1, explanation: "FSC extends Sales Cloud and Service Cloud." },
  { question: "What is KYC in financial services context?", options: ["A report type", "Know Your Customer—verifying client identity for compliance", "A workflow only", "An email template"], correctAnswer: 1, explanation: "KYC is the process of verifying client identity for regulatory compliance." },
]

export default function FinancialServicesCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Financial Services Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Financial Services Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Financial Services Cloud', 'Wealth Management', 'Banking', 'Insurance', 'Data Model', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Services Cloud: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">FSC Data Model: Households, Individuals, and Financial Accounts</p>
                <p>Financial Services Cloud extends Salesforce with an industry-specific data model. Key objects: Individual Account (a person account representing a client), Household Account (groups related individuals), Financial Account (a bank account, investment account, or policy), Financial Account Role (relationship between a person and a financial account — primary owner, joint owner, beneficiary). Assets &amp; Liabilities track client net worth components. The consultant must understand the Household model — how contacts relate to household accounts and how rollups aggregate financial data at the household level.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Relationship Management and Referrals</p>
                <p>Relationship Map visually displays a client&apos;s relationships — family members, business associates, advisors. Relationship Groups define formal groupings (household, trust, business entity). Referral Management tracks leads referred between advisors or from clients. The consultant configures the Relationship Map to reflect the organisation&apos;s coverage model. FSC uses RecordType-specific page layouts for each account type (Individual, Household, Business). The exam tests how to configure Relationship Groups and Referral workflows for a given financial services firm&apos;s client coverage model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Action Plans for Client Lifecycle Management</p>
                <p>Action Plans define repeatable task sequences — used for new account onboarding, annual reviews, loan processing, and compliance checks. Action Plan Templates define the task sequence, assigned roles, due date offsets, and dependencies between tasks. When an Action Plan is created from a template, tasks are generated automatically and assigned to the appropriate team members. The consultant designs Action Plan Templates for the firm&apos;s key client lifecycle processes, configuring task dependencies and SLA-based due dates.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Rollup Summaries and Financial Aggregations</p>
                <p>FSC uses custom rollup logic to aggregate financial data at the Household level. Financial Account balances roll up to the Household to show total assets under management (AUM). Customisable Rollups (part of NPSP, also used in FSC) allow administrators to configure rollup calculations without code — defining which field, which object, and which criteria trigger the rollup. The consultant configures rollups to match the firm&apos;s reporting requirements — ensuring Household-level financial summaries are accurate and up-to-date.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Compliance, KYC, and Document Management</p>
                <p>Financial services firms have strict regulatory requirements. Know Your Customer (KYC) processes verify client identity — typically capturing ID documents, verifying addresses, and screening against watchlists. FSC supports compliance workflows with custom objects for KYC documentation. Document checklist items track which required documents have been collected. Integration with e-signature tools (DocuSign, Adobe Sign) enables digital document execution. The consultant designs the compliance workflow to satisfy regulatory requirements while maintaining a positive client experience.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Financial Services Cloud Accredited Professional Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Financial Services Cloud AP exam tests FSC implementation for banking, insurance, and wealth management. Focus on the FSC data model, financial account tracking, advisor experience, and compliance requirements.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">FSC Data Model Extensions</p>
                <p>Know FSC-specific objects: Financial Account (checking, savings, investment), Financial Account Transaction, Financial Goal, Life Event, and how they extend the standard Account/Contact model for financial services.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Client 360 &amp; Relationship Manager</p>
                <p>Know how to configure the FSC client view: Relationship Map (household members, referral networks), Financial Accounts, Goals, and Life Events. Understand how advisors use this 360-degree view to serve clients.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Household &amp; Relationship Management</p>
                <p>Know how FSC models households: primary household member, financial account roles (owner, beneficiary), and how household-level rollup fields aggregate assets under management (AUM) across the household.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Insurance-Specific Features</p>
                <p>Know FSC features for insurance: Policy objects, Claim Management, Producer Management, and how Independent Agents differ from Employees in the FSC data model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Compliance &amp; Audit Trail</p>
                <p>Know how FSC addresses compliance requirements: audit logging, consent management, and how Salesforce Shield (Field Audit Trail, Event Monitoring) helps meet regulatory obligations for financial data.</p>
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
