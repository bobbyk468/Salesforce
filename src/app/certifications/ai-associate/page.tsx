import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
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

const slug = 'ai-associate'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the AI Associate credential designed for?",
    options: ["Developers only", "Individuals with knowledge of AI, from beginners to experienced", "Architects only", "Marketers only"],
    correctAnswer: 1,
    explanation: "The AI Associate is designed for individuals who may have knowledge of AI, whether beginners or more experienced.",
  },
  {
    question: "What does the AI Associate certification validate?",
    options: ["Only coding skills", "Foundational skills in ethical and responsible handling of data as they apply to AI in CRM", "Only reporting skills", "Only integration skills"],
    correctAnswer: 1,
    explanation: "It validates foundational skills in ethical and responsible data handling as they apply to AI in CRM.",
  },
  {
    question: "What is the Einstein Trust Layer in Salesforce?",
    options: [
      "A reporting dashboard for AI model performance metrics",
      "A built-in framework that protects customer data privacy, prevents prompt injection, and ensures AI outputs are grounded and auditable",
      "A payment processing security layer for Salesforce transactions",
      "An authentication protocol for external AI model providers"
    ],
    correctAnswer: 1,
    explanation: "The Einstein Trust Layer provides data masking, secure data retrieval, toxicity detection, and audit trails to ensure AI outputs are safe, private, and traceable within the Salesforce platform.",
  },
  {
    question: "What is the difference between predictive AI and generative AI?",
    options: [
      "Predictive AI only works with numerical data; generative AI only works with text",
      "Predictive AI forecasts outcomes from historical patterns; generative AI creates new content such as text, images, or code from prompts",
      "There is no meaningful difference between the two in a CRM context",
      "Generative AI requires more historical data than predictive AI to function"
    ],
    correctAnswer: 1,
    explanation: "Predictive AI (e.g., Einstein Opportunity Scoring) uses historical data to forecast future outcomes. Generative AI (e.g., Einstein Copilot) generates new content from prompts and context.",
  },
  {
    question: "Which of Salesforce's trusted AI principles states that AI models should explain their outputs?",
    options: ["Accountability", "Transparency", "Fairness", "Safety"],
    correctAnswer: 1,
    explanation: "Transparency means AI systems should be understandable — users and administrators should be able to see why the AI made a recommendation or generated a response.",
  },
  {
    question: "What is AI bias in the context of CRM and machine learning?",
    options: [
      "A deliberate design choice to make AI prefer certain customers",
      "Systematic and unfair differences in AI outputs caused by skewed or unrepresentative training data",
      "The speed difference between AI-generated and human-generated responses",
      "An optional feature flag that adjusts AI model sensitivity"
    ],
    correctAnswer: 1,
    explanation: "AI bias occurs when training data does not represent the full population, leading to outputs that systematically disadvantage certain groups. Responsible AI requires monitoring and mitigating bias.",
  },
  {
    question: "Why is data quality critical for AI outcomes in Salesforce?",
    options: [
      "Data quality only matters for reporting dashboards, not AI models",
      "AI models learn from historical data — poor quality data leads to inaccurate predictions, biased outputs, and unreliable AI recommendations",
      "High data volume automatically compensates for low data quality in AI training",
      "Data quality affects only the speed of AI processing, not the accuracy"
    ],
    correctAnswer: 1,
    explanation: "AI models are only as good as the data they train on. Duplicate records, missing values, and inaccurate data produce unreliable AI outputs. Data governance and hygiene are prerequisites for trustworthy AI.",
  },
  {
    question: "What is grounding in the context of generative AI on the Salesforce platform?",
    options: [
      "Limiting AI outputs to a fixed word count to reduce hallucinations",
      "Providing relevant, contextual CRM data to the AI model so responses are accurate and based on actual customer records rather than general knowledge alone",
      "Connecting the AI model to external internet sources for real-time data",
      "A security protocol that prevents AI models from accessing Salesforce metadata"
    ],
    correctAnswer: 1,
    explanation: "Grounding connects generative AI prompts to specific CRM data (accounts, cases, opportunities) so responses reflect real customer context rather than generic or hallucinated information.",
  },
  {
    question: "Which Salesforce AI principle requires that humans remain responsible for AI decisions?",
    options: ["Transparency", "Fairness", "Accountability", "Inclusivity"],
    correctAnswer: 2,
    explanation: "Accountability means identifying who is responsible for AI outcomes and maintaining human oversight — especially for high-stakes decisions.",
  },
  {
    question: "What is a hallucination in generative AI?",
    options: [
      "An intentional creative response generated for marketing copy",
      "When a generative AI model produces confident but factually incorrect or fabricated information",
      "A visual glitch in the Salesforce AI dashboard",
      "An AI model that intentionally withholds information from users"
    ],
    correctAnswer: 1,
    explanation: "Hallucinations occur when generative AI produces plausible-sounding but inaccurate content. Grounding, prompt engineering, and human review help reduce hallucinations in CRM use cases.",
  },
  {
    question: "Which Einstein feature uses predictive AI to score the likelihood of an opportunity closing?",
    options: [
      "Einstein Discovery",
      "Einstein Opportunity Scoring",
      "Einstein Copilot",
      "Einstein Vision"
    ],
    correctAnswer: 1,
    explanation: "Einstein Opportunity Scoring uses predictive AI to assign a score to each opportunity based on historical win/loss patterns, helping sales reps prioritise their pipeline.",
  },
  {
    question: "What is the role of a prompt template in Salesforce generative AI?",
    options: [
      "A pre-built Flow that automatically updates records when triggered",
      "A reusable, structured instruction set that combines static guidance with dynamic CRM data to generate consistent AI outputs",
      "An email template that uses merge fields from the Contact object",
      "A permission set that controls which users can access Einstein features"
    ],
    correctAnswer: 1,
    explanation: "Prompt templates merge business instructions with real CRM data (such as account name, case history) to produce grounded, contextual AI responses — reducing the need for users to craft prompts manually.",
  },
  {
    question: "What is the primary exam focus of the Salesforce AI Associate certification?",
    options: [
      "Writing Python scripts to build custom AI models integrated with Salesforce",
      "Understanding ethical AI principles, AI concepts, and how AI capabilities apply to the Salesforce CRM platform",
      "Administering Einstein Analytics dashboards and CRM Analytics datasets",
      "Configuring MuleSoft connectors to connect external AI services to Salesforce"
    ],
    correctAnswer: 1,
    explanation: "The AI Associate focuses on foundational AI concepts — predictive vs generative AI, the Einstein Trust Layer, responsible AI principles, data quality, and how AI is applied across the Salesforce platform. No coding required.",
  },
  {
    question: "A company wants to use Salesforce AI to reduce the risk of sending customer data to an external large language model. Which feature addresses this concern?",
    options: [
      "Einstein Activity Capture, which stores all AI interactions locally",
      "The Einstein Trust Layer, which masks personally identifiable information before sending prompts to the LLM and does not retain data with the model provider",
      "A custom Apex trigger that filters records before any AI request is processed",
      "Field-Level Security settings, which prevent AI from reading sensitive fields"
    ],
    correctAnswer: 1,
    explanation: "The Einstein Trust Layer automatically masks PII in prompts sent to external LLMs and enforces a zero data retention agreement with model providers, ensuring customer data is not stored or used for training.",
  },
  {
    question: "Which Salesforce AI capability uses historical data to predict outcomes such as opportunity win likelihood?",
    options: ["Einstein Copilot", "Einstein Opportunity Scoring (predictive AI)", "Prompt Builder", "Data Cloud only"],
    correctAnswer: 1,
    explanation: "Einstein Opportunity Scoring is predictive AI — it uses historical data to forecast outcomes like win probability."
  },
]

export default function AIAssociatePage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
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
            code="AI Associate"
            description="The Salesforce AI Associate credential is designed for individuals who may have knowledge of AI, whether beginners or more experienced. It validates foundational skills in ethical and responsible handling of data as they apply to AI in CRM."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['AI Fundamentals', 'Ethics & Responsibility', 'Data in AI', 'Einstein', 'CRM & AI', 'Governance', 'Trust', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Salesforce AI Associate: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Predictive AI vs Generative AI</p>
                <p>Predictive AI uses historical data to forecast outcomes — Einstein Opportunity Scoring, Next Best Action, and Lead Scoring are predictive. Generative AI creates new content from prompts — Einstein Copilot, Sales Email generation, and Case Summaries are generative. The exam tests which type applies to a given use case.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Trust Layer</p>
                <p>The Einstein Trust Layer is Salesforce&apos;s data security framework for AI. It automatically masks personally identifiable information (PII) before prompts reach an external LLM, enforces zero data retention by model providers, and provides audit logs of all AI interactions. Know what it does and why it matters for customer data protection.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce&apos;s Trusted AI Principles</p>
                <p>The five principles are: <strong>Accuracy</strong> (outputs should be correct and based on data), <strong>Safety</strong> (prevent harm), <strong>Honesty</strong> (be transparent about being AI), <strong>Empowerment</strong> (humans remain in control), and <strong>Inclusivity</strong> (AI should not discriminate). Exam questions describe a scenario and ask which principle applies.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Grounding and Hallucinations</p>
                <p>Grounding connects AI prompts to real CRM data so responses reflect actual customer records. Without grounding, generative AI may hallucinate — producing confident but incorrect outputs. Prompt templates in Salesforce merge static instructions with live CRM data to reduce hallucinations. Know how grounding mitigates this risk.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Quality and AI Bias</p>
                <p>AI models are trained on historical data — poor data quality (duplicates, missing values, outdated records) leads to inaccurate predictions. Biased training data produces biased outputs. Responsible AI requires auditing training data, testing for disparate impact across demographics, and ongoing monitoring after deployment. Data governance is a prerequisite for trustworthy AI.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
            ))}
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
