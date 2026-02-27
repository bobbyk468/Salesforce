import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'ux-designer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Certified UX Designer on the Salesforce Platform?",
    options: ["Only backend", "Building and designing human-centered experiences on the Salesforce Platform", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Certified UX Designers build and design human-centered experiences on the Salesforce Platform.",
  },
  {
    question: "Which principle is central to human-centered design?",
    options: ["Only aesthetics", "Understanding user needs, behaviors, and context to design solutions", "Only performance", "Only cost"],
    correctAnswer: 1,
    explanation: "Human-centered design focuses on user needs, behaviors, and context.",
  },
  {
    question: "Which Salesforce capability do UX Designers often work with?",
    options: ["Only Apex", "Lightning Experience, Experience Cloud, and declarative UI", "Only Heroku", "Only MuleSoft"],
    correctAnswer: 1,
    explanation: "They work with Lightning Experience, Experience Cloud, and declarative UI.",
  },
  {
    question: "What does accessibility mean in UX design?",
    options: ["Only speed", "Designing so that products are usable by people with diverse abilities", "Only mobile", "Only desktop"],
    correctAnswer: 1,
    explanation: "Accessibility ensures products are usable by people with diverse abilities.",
  },
  {
    question: "Who is the UX Designer certification for?",
    options: ["Only developers", "Aspiring or experienced designers wanting to build human-centered experiences on the Salesforce Platform", "Only admins", "Only marketers"],
    correctAnswer: 1,
    explanation: "It's for aspiring or experienced designers building human-centered experiences on the platform.",
  },
  {
    question: "What is the purpose of user research in UX design?",
    options: [
      "To skip design",
      "To understand user needs, pain points, and behaviors before designing",
      "Only to validate",
      "Only to test"
    ],
    correctAnswer: 1,
    explanation: "User research informs design by understanding needs and behaviors."
  },
  {
    question: "Which deliverable communicates structure and layout before visual design?",
    options: [
      "Final UI only",
      "Wireframes",
      "Code only",
      "Reports only"
    ],
    correctAnswer: 1,
    explanation: "Wireframes communicate structure and layout before visual design."
  },
  {
    question: "What does prototyping support in the design process?",
    options: [
      "Only documentation",
      "Testing and validating design concepts with users before development",
      "Only coding",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Prototypes enable early testing and validation of design concepts."
  },
  {
    question: "Which WCAG principle ensures content is perceivable?",
    options: [
      "Only operable",
      "Perceivable (e.g., text alternatives, color contrast)",
      "Only understandable",
      "Only robust"
    ],
    correctAnswer: 1,
    explanation: "Perceivable covers alternatives and contrast for accessibility."
  },
  {
    question: "What is a design system?",
    options: [
      "A single component",
      "Reusable components, patterns, and guidelines for consistent UI",
      "Only colors",
      "Only typography"
    ],
    correctAnswer: 1,
    explanation: "Design systems provide reusable components and guidelines."
  },
  {
    question: "Which Experience Cloud capability supports UX Designers?",
    options: [
      "Only Apex",
      "Templates, themes, and declarative site building",
      "Only APIs",
      "Only batch"
    ],
    correctAnswer: 1,
    explanation: "Templates, themes, and declarative building support UX design."
  },
  {
    question: "What does usability testing measure?",
    options: [
      "Only speed",
      "How effectively users can complete tasks and identify issues",
      "Only aesthetics",
      "Only cost"
    ],
    correctAnswer: 1,
    explanation: "Usability testing measures task completion and identifies issues."
  },
  {
    question: "Which principle supports inclusive design?",
    options: [
      "Design for one user only",
      "Design for diverse abilities and contexts",
      "Design for desktop only",
      "Design for developers only"
    ],
    correctAnswer: 1,
    explanation: "Inclusive design considers diverse abilities and contexts."
  },
  {
    question: "What is the purpose of a user journey map?",
    options: [
      "To replace wireframes",
      "To visualize user steps, touchpoints, and emotions across an experience",
      "To write code",
      "To deploy"
    ],
    correctAnswer: 1,
    explanation: "Journey maps visualize user steps and touchpoints."
  },
  {
    question: "Which best practice applies to Lightning Experience design?",
    options: [
      "Ignore mobile",
      "Design for responsive layouts and Lightning Design System",
      "Desktop only",
      "No accessibility"
    ],
    correctAnswer: 1,
    explanation: "Responsive design and LDS align with Lightning best practices."
  },
]

export default function UXDesignerPage() {
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
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="UX Designer"
            description="Certified Platform User Experience (UX) Designers are aspiring or experienced designers wanting to build and design human-centered experiences on the Salesforce Platform."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Human-Centered Design', 'Research', 'Wireframing', 'Prototyping', 'Lightning Experience', 'Experience Cloud', 'Accessibility', 'Usability', 'Design Systems', 'Best Practices']}
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
