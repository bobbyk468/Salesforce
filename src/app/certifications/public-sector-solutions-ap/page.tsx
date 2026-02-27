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

const slug = 'public-sector-solutions-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Public Sector Solutions AP validate?", options: ["Only basics", "Driving successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that align with a company's vision and business value goals", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Public Sector Solutions Professionals drive successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that best align with a company's vision and business value goals." },
  { question: "Which sector does Public Sector Solutions serve?", options: ["Retail only", "Government, public sector, and civic organizations", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Public Sector Solutions serves government and public sector organizations." },
  { question: "What is a key activity for a Public Sector Solutions Professional?", options: ["Only coding", "Implementing Public Sector solutions with best practices and alignment to business value", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They implement Public Sector solutions with best practices and alignment to business value." },
  { question: "Which role typically pursues Public Sector Solutions AP?", options: ["Marketers", "Partners and implementers working with public sector", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with public sector pursue this credential." },
  { question: "What does 'business value goals' mean in Public Sector context?", options: ["Only revenue", "Outcomes that align with agency mission and citizen/customer value", "Only cost", "Only speed"], correctAnswer: 1, explanation: "It means outcomes that align with agency mission and citizen/customer value." },
  { question: "Which Public Sector consideration is critical?", options: ["Only UI", "Compliance, security, and citizen experience", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Compliance, security, and citizen experience are critical." },
  { question: "What does Public Sector Solutions implementation include?", options: ["Only coding", "Industry-specific data models, workflows, and best practices", "Only reports", "Only emails"], correctAnswer: 1, explanation: "Implementation includes industry data models and workflows." },
  { question: "Which Salesforce product supports Public Sector?", options: ["Slack only", "Public Sector Solutions, Experience Cloud, and CRM", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Public Sector Solutions and Experience Cloud support government." },
  { question: "What is the purpose of Public Sector best practices?", options: ["Only deployment", "Align with government processes, compliance, and citizen value", "Only design", "Only testing"], correctAnswer: 1, explanation: "Best practices align with government processes and compliance." },
  { question: "Which use case is common for Public Sector?", options: ["Retail only", "Case management, licensing, and citizen services", "Manufacturing only", "CPQ only"], correctAnswer: 1, explanation: "Case management, licensing, and citizen services are common." },
  { question: "What does agency mission alignment mean?", options: ["Only revenue", "Solutions that support government goals and citizen outcomes", "Only cost", "Only speed"], correctAnswer: 1, explanation: "Alignment means supporting government goals and citizen outcomes." },
  { question: "Which integration is common for Public Sector?", options: ["Slack only", "Legacy systems, payment, and identity providers", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Public Sector integrates with legacy and payment systems." },
  { question: "What does Public Sector Solutions Professional need?", options: ["Only coding", "Public sector domain knowledge and implementation best practices", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Professionals need domain knowledge and best practices." },
  { question: "Which best practice applies to Public Sector implementation?", options: ["Ignore compliance", "Compliance, accessibility, and citizen-centric design", "No accessibility", "Single channel only"], correctAnswer: 1, explanation: "Compliance, accessibility, and citizen-centric design are key." },
  { question: "What is Section 508 in Public Sector context?", options: ["A Salesforce feature", "US federal accessibility law requiring digital content to be accessible", "A report type", "A workflow only"], correctAnswer: 1, explanation: "Section 508 mandates accessibility for federal digital systems—critical for Public Sector." },
]

export default function PublicSectorSolutionsAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Public Sector Solutions Professionals drive successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that best align with a company's vision and business value goals." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Public Sector', 'Government', 'Implementation', 'Best Practices', 'Business Value']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
            examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>


          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Public Sector Solutions AP: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Case Management for Government</p>
                <p>Public Sector Solutions (PSS) extends Service Cloud for government constituent service. Cases represent constituent inquiries, complaints, or service requests. Case Classification uses a topic taxonomy to route and report on cases by type. Omni-Channel routes cases to the correct department or agent based on case type and priority. Knowledge Articles provide agents and constituents with self-service answers. Service Level Agreements (SLAs) via Entitlements enforce government response time mandates. Case Escalation Rules auto-escalate aging cases. The AP exam tests how to configure a government case management workflow, how to use knowledge for constituent self-service, and how to enforce compliance with response time SLAs.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Licensing & Permitting</p>
                <p>PSS provides a pre-built Licensing and Permitting solution for government agencies. Business License Applications capture applicant information and supporting documents. Application Flows guide applicants through multi-step digital submission. Document Checklist Items define the required supporting documents. Inspection Tasks link to license applications for compliance verification. Renewal Workflows automate annual or periodic license renewals. Fee Structures define the application fees and payment integration. The exam tests how to configure a license application form, how document checklists are used in the review process, and how to set up renewal automation with payment collection.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Grants Management</p>
                <p>PSS Grants Management supports the full grant lifecycle from solicitation to closeout. Funding Opportunities represent open grant competitions. Funding Award records track awarded grants including amount, period, and compliance requirements. Application review workflows route applications through scoring and approval. Budget Tracking monitors expenditures against awarded amounts. Progress Reports capture grantee performance data. Grantee portals (Experience Cloud) allow grantees to submit applications, reports, and amendment requests. The AP exam tests how to configure a grant application workflow, how budget tracking interacts with financial data, and how the grantee portal is provisioned.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Inspections & Compliance</p>
                <p>Government inspections verify compliance with regulations — building permits, health codes, environmental standards. Inspection Visit records capture inspection dates, findings, and outcomes. Violations are documented with severity levels, corrective action requirements, and deadlines. Reinspection workflows schedule follow-up inspections when violations are found. Mobile inspection apps (Salesforce Field Service mobile or custom LWC) provide inspectors with offline access to inspection checklists and violation history. The AP exam tests how to configure an inspection workflow from scheduling through violation resolution, how mobile offline access works for inspectors, and how to generate compliance reports from inspection data.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Constituent Engagement & Digital Experience</p>
                <p>PSS uses Experience Cloud to deliver government digital services to constituents — applying for licenses, reporting issues, tracking case status, and accessing benefits. Self-Registration allows new constituents to create accounts. Identity Verification can integrate with government ID systems or Knowledge-Based Authentication. Constituent Profiles aggregate all interactions (cases, licenses, permits, benefits) on a single constituent record. Einstein Bots deflect routine constituent inquiries before routing to agents. Accessibility (WCAG 2.1 AA compliance) is mandatory for government digital services. The AP exam tests how to configure a constituent self-service portal, how to enable case self-service, and how identity verification integrates with the portal registration flow.</p>
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
