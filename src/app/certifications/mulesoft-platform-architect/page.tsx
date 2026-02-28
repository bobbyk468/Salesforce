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

const slug = 'mulesoft-platform-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a MuleSoft Platform Architect do?", options: ["Only coding", "Define and be responsible for an organization's Anypoint Platform strategy", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified MuleSoft Platform Architect architects have proven knowledge and skills to define and be responsible for an organization's Anypoint Platform strategy." },
  { question: "What is Anypoint Platform?", options: ["A CRM", "MuleSoft's unified platform for designing, building, and managing APIs and integrations", "An email tool", "A database only"], correctAnswer: 1, explanation: "Anypoint Platform is MuleSoft's unified platform for APIs and integrations." },
  { question: "What is a key activity for a MuleSoft Platform Architect?", options: ["Only coding", "Defining and owning Anypoint Platform strategy", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They define and own Anypoint Platform strategy." },
  { question: "Which role typically pursues MuleSoft Platform Architect?", options: ["Marketers", "Architects and senior consultants defining integration strategy", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants defining integration strategy pursue this credential." },
  { question: "What does 'platform strategy' mean in MuleSoft context?", options: ["Only APIs", "API-led connectivity, governance, and integration architecture", "Only Mule runtime", "Only CloudHub"], correctAnswer: 1, explanation: "Platform strategy includes API-led connectivity, governance, and integration architecture." },
  { question: "What does Anypoint Platform governance include?", options: ["Only deployment", "API policies, design standards, and lifecycle management", "Only design", "Only runtime"], correctAnswer: 1, explanation: "Governance covers policies, standards, and lifecycle." },
  { question: "Which deployment option does Anypoint Platform support?", options: ["CloudHub only", "CloudHub, on-prem, and hybrid", "On-prem only", "No deployment"], correctAnswer: 1, explanation: "Anypoint supports cloud, on-prem, and hybrid deployment." },
  { question: "What is the purpose of API design standards?", options: ["To replace APIs", "Consistency, reusability, and maintainability", "To delete only", "To create only"], correctAnswer: 1, explanation: "Design standards ensure consistency and reusability." },
  { question: "Which capability does Runtime Manager provide?", options: ["Design only", "Deploy, monitor, and manage Mule applications", "API design only", "No management"], correctAnswer: 1, explanation: "Runtime Manager deploys and manages Mule applications." },
  { question: "What does integration architecture encompass?", options: ["Only APIs", "System, Process, and Experience API layers", "Only Mule", "Only CloudHub"], correctAnswer: 1, explanation: "Integration architecture includes API layers." },
  { question: "Which role defines platform strategy?", options: ["Developers only", "Platform Architects", "Sales only", "Marketers only"], correctAnswer: 1, explanation: "Platform Architects define platform strategy." },
  { question: "What is the benefit of API-led connectivity?", options: ["No benefit", "Reusability, agility, and reduced point-to-point complexity", "More complexity", "Slower delivery"], correctAnswer: 1, explanation: "API-led connectivity promotes reusability and agility." },
  { question: "Which Anypoint component manages API lifecycle?", options: ["Mule only", "Design Center, Exchange, and API Manager", "CloudHub only", "Runtime only"], correctAnswer: 1, explanation: "Design Center, Exchange, and API Manager manage lifecycle." },
  { question: "What does a Platform Architect own?", options: ["Only code", "Platform strategy, governance, and standards", "Only deployment", "Only testing"], correctAnswer: 1, explanation: "Platform Architects own strategy, governance, and standards." },
  { question: "Which best practice applies to platform strategy?", options: ["Ignore governance", "Align with business goals and enable self-service", "No alignment", "Ad-hoc only"], correctAnswer: 1, explanation: "Strategy should align with business and enable self-service." },
]

export default function MuleSoftPlatformArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="MuleSoft Architect" description="Certified MuleSoft Platform Architect architects have proven knowledge and skills to define and be responsible for an organization's Anypoint Platform strategy." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['Anypoint Platform', 'API-led', 'Strategy', 'Governance', 'Integration', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MuleSoft Platform Architect: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Anypoint Platform Architecture: Control Plane and Runtime Plane</p>
                <p>Control Plane manages all platform operations: Runtime Manager, API Manager, Exchange, Access Management. Runtime Plane executes Mule applications: CloudHub (MuleSoft-managed cloud), Customer-Hosted Mule Runtime (on-premise or customer&apos;s cloud), Runtime Fabric (containerised deployment on Kubernetes). CloudHub 1.0 uses proprietary workers; CloudHub 2.0 uses Kubernetes pods. The Platform Architect selects the deployment model based on: data residency requirements, security policies, operational capability, and cost model.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Runtime Fabric: Container-Based Deployment</p>
                <p>Anypoint Runtime Fabric (RTF) runs Mule apps in containers on customer-managed Kubernetes clusters. RTF components: Agent (connects cluster to Control Plane), Ingress controller (routes traffic), Monitoring (Titanium). RTF enables: bring-your-own-cloud deployment, air-gapped deployments, co-location with existing Kubernetes workloads. Namespace isolation provides security between applications. Resource allocation defines CPU and memory limits per Mule app. The exam tests RTF vs CloudHub trade-offs and RTF architecture components.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">API-Led Governance at Scale</p>
                <p>At enterprise scale, governance is critical. API Rating in Exchange evaluates quality (documentation completeness, test coverage, security). Certified assets signal reuse approval. API Catalog provides dependency lineage — shows which APIs depend on which. Conformance checks validate that API specs follow organisational standards (naming conventions, required security schemes, documentation). The Platform Architect designs the governance framework — tooling, process, and incentives to drive reuse and prevent shadow IT integration.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security Architecture: VPC, VPN, and Encryption</p>
                <p>CloudHub VPC (Virtual Private Cloud) isolates the CloudHub network from the public internet. VPC Peering connects the CloudHub VPC to the customer&apos;s cloud VPC. VPN (site-to-site) connects CloudHub to on-premise data centres. Dedicated Load Balancer provides static IPs for inbound CloudHub traffic. TLS termination at the load balancer. At-rest encryption is handled by CloudHub&apos;s underlying infrastructure (AWS KMS). Anypoint Security Tokenization replaces sensitive data with tokens — PCI DSS compliant.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Operational Excellence: Monitoring and SLAs</p>
                <p>Anypoint Monitoring provides: metrics (CPU, heap, response time, throughput), dashboards (pre-built and custom), alerts (threshold-based, anomaly detection). Log Management aggregates application logs with search and filtering. Visualizer shows the API dependency graph — which apps call which APIs, in real-time. SLA enforcement: rate limiting policies in API Manager enforce per-client SLAs. The Platform Architect defines the monitoring strategy — KPIs, alert thresholds, escalation runbooks, and capacity planning processes.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the MuleSoft Platform Architect Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The MuleSoft Platform Architect exam tests expertise in designing the Anypoint Platform deployment infrastructure. Focus on Runtime Fabric, CloudHub, on-premise deployment, HA/DR architecture, and platform security.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Deployment Model Selection</p>
                <p>Know when to use CloudHub 1.0 (managed, simple), CloudHub 2.0 (container-based, more control), Runtime Fabric (self-managed, on-prem or private cloud), and standalone Mule runtimes. Match deployment model to requirements.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">High Availability Design</p>
                <p>Understand how to design HA: multiple workers in CloudHub, Runtime Fabric cluster configuration, persistent queues for message durability, and load balancer configuration for zero-downtime deployments.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Disaster Recovery Strategy</p>
                <p>Know how to plan DR for Anypoint Platform: multi-region CloudHub deployments, VPC peering, database backup strategies, and RTO/RPO targets for different integration tiers.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Platform Security Architecture</p>
                <p>Know how to configure VPCs, VPNs, and Dedicated Load Balancers in CloudHub. Understand how Runtime Fabric handles network isolation, TLS termination, and credential management via Anypoint Secrets Manager.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Capacity Planning</p>
                <p>Understand worker sizing (0.1 vCore to 8 vCore), how to calculate required capacity based on throughput, concurrency, and payload size, and how auto-scaling works in CloudHub 2.0 and Runtime Fabric.</p>
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
