import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">UX Designer: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Design Thinking Process: Five Phases</p>
                <p>Design Thinking is the core framework: <strong>Empathise</strong> (observe users, conduct interviews, develop empathy maps), <strong>Define</strong> (synthesise research into a problem statement — &quot;How Might We&quot; framing), <strong>Ideate</strong> (brainstorm solutions without judgment), <strong>Prototype</strong> (build low-fi or hi-fi representations), <strong>Test</strong> (validate with real users and iterate). The exam presents a UX activity (e.g., &quot;interviewing stakeholders about pain points&quot;) and asks which phase it belongs to.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">UX Research Methods: Qualitative vs Quantitative</p>
                <p>Qualitative methods explore the &quot;why&quot;: user interviews, contextual inquiry (observing users in their real environment), and moderated usability testing. Quantitative methods measure the &quot;what&quot;: surveys, click analytics, and task completion rates. <strong>Card sorting</strong> tests how users categorise information (used to design navigation). <strong>Tree testing</strong> validates whether users can find content within a proposed structure. <strong>Affinity diagramming</strong> groups qualitative findings into themes. Know which method to select for a given research question.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Wireframes, Prototypes, and the Design Handoff</p>
                <p><strong>Low-fidelity wireframes</strong> communicate structure, hierarchy, and layout without visual polish — used for early stakeholder alignment. <strong>High-fidelity prototypes</strong> include visual design, real content, and interactive states — used for usability testing and developer handoff. The design handoff documents component specifications, spacing, and interaction behaviours. In Salesforce context, <strong>Experience Builder mockups</strong> and flow screens can be designed declaratively before development. Prototyping prevents rework by catching usability issues early.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Accessibility: WCAG 2.1 and Salesforce SLDS</p>
                <p>WCAG 2.1 defines four principles (POUR): <strong>Perceivable</strong> (text alternatives for non-text content, sufficient colour contrast), <strong>Operable</strong> (keyboard navigation, no seizure-inducing animations), <strong>Understandable</strong> (clear labels, error messages, consistent navigation), <strong>Robust</strong> (compatible with assistive technologies). The <strong>Salesforce Lightning Design System (SLDS)</strong> provides accessible, pre-built UI components that meet WCAG AA. The exam tests which WCAG principle applies to a given accessibility scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Salesforce UX Tooling: Lightning App Builder and Dynamic Forms</p>
                <p><strong>Lightning App Builder</strong> enables drag-and-drop page composition — Home, Record, and App pages — using standard and custom components. <strong>Dynamic Forms</strong> move fields and sections from the page layout into the record page, enabling conditional visibility based on field values or user permissions. <strong>Dynamic Actions</strong> control button visibility with similar logic. <strong>Compact Layouts</strong> define the fields shown in record highlights, mobile previews, and related lists. Know the difference between page layouts (object-level, profile-based) and dynamic forms (page-level, condition-based).</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce UX Designer Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The UX Designer exam tests user experience principles applied to Salesforce implementations. Focus on the Lightning Design System, accessibility standards, user research methods, and how to design usable Salesforce configurations.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Lightning Design System (SLDS)</p>
                <p>Know the SLDS component library, design tokens, utility classes, and how SLDS ensures visual consistency across Salesforce. Understand when to use standard components vs. custom-styled components.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Accessibility Standards</p>
                <p>Know WCAG 2.1 AA requirements: keyboard navigation, screen reader support (ARIA labels), color contrast ratios (4.5:1 for normal text), and how to use Salesforce Accessibility Checker to audit Lightning components.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">User Research in Salesforce Projects</p>
                <p>Know how to conduct user interviews, usability tests, and card sorting exercises for Salesforce page layout and navigation design. Understand how to translate findings into actionable design recommendations.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Page Layout &amp; App Design</p>
                <p>Know how to design Lightning page layouts: component placement, progressive disclosure, and how to use visibility rules to reduce cognitive load. Understand how the Lightning App Builder enables no-code page customization.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Prototyping &amp; Testing</p>
                <p>Know how to create wireframes and clickable prototypes for Salesforce configurations using tools like Figma or SLDS prototyping kits. Understand how to run usability tests with real Salesforce users.</p>
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
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Designer Certifications</h2>
            <p className="text-sm text-gray-700 mb-2">After this designer certification, consider the other designer cert or Experience Cloud:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/strategy-designer" className="text-salesforce-blue font-medium hover:underline">Platform Strategy Designer</Link></li>
              <li><Link href="/certifications/ux-designer" className="text-salesforce-blue font-medium hover:underline">User Experience Designer</Link></li>
              <li><Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link></li>
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
