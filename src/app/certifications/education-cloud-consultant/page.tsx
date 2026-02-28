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

const slug = 'education-cloud-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is Education Cloud used for?",
    options: ["Retail only", "Managing student lifecycle, admissions, and advancement for educational institutions", "Manufacturing only", "CPQ only"],
    correctAnswer: 1,
    explanation: "Education Cloud supports student lifecycle, admissions, advancement, and engagement for schools and universities.",
  },
  {
    question: "Which role does an Education Cloud Consultant typically fulfill?",
    options: ["Email marketing only", "Implementing Salesforce Education Cloud solutions in a customer-facing role", "Slack configuration only", "UI design only"],
    correctAnswer: 1,
    explanation: "They implement Education Cloud solutions in a customer-facing consultant role.",
  },
  {
    question: "What type of organizations typically use Education Cloud?",
    options: ["Retail only", "K-12 schools, higher education, and educational nonprofits", "Manufacturing only", "Financial services only"],
    correctAnswer: 1,
    explanation: "Education Cloud is designed for K-12, higher education, and educational institutions.",
  },
  {
    question: "Which Salesforce product is often used with Education Cloud for learning management?",
    options: ["CPQ only", "Experience Cloud and industry-specific data models", "Commerce Cloud only", "Marketing Cloud only"],
    correctAnswer: 1,
    explanation: "Education Cloud uses Experience Cloud and industry data models for student and program management.",
  },
  {
    question: "What is a common use case for Education Cloud?",
    options: ["Quote generation", "Student recruitment, enrollment, and alumni engagement", "Order management", "Email campaigns only"],
    correctAnswer: 1,
    explanation: "Student recruitment, enrollment, and alumni engagement are core Education Cloud use cases.",
  },
  {
    question: "What does the Admissions lifecycle typically include?",
    options: [
      "Only billing",
      "Inquiry, application, acceptance, and enrollment",
      "Only marketing",
      "Only reporting"
    ],
    correctAnswer: 1,
    explanation: "Admissions covers inquiry through application to enrollment."
  },
  {
    question: "Which Education Cloud object supports program management?",
    options: [
      "Standard Account only",
      "Program, Term, and Course objects",
      "Opportunity only",
      "Lead only"
    ],
    correctAnswer: 1,
    explanation: "Program, Term, and Course support academic program management."
  },
  {
    question: "What is Advancement in the education context?",
    options: [
      "Only admissions",
      "Alumni relations, fundraising, and donor engagement",
      "Only enrollment",
      "Only courses"
    ],
    correctAnswer: 1,
    explanation: "Advancement covers alumni relations and fundraising."
  },
  {
    question: "Which Experience Cloud use case applies to Education Cloud?",
    options: [
      "B2B storefront only",
      "Student and alumni portals for self-service",
      "Partner portal only",
      "Support portal only"
    ],
    correctAnswer: 1,
    explanation: "Student and alumni portals are common Experience Cloud use cases."
  },
  {
    question: "What does the student lifecycle encompass?",
    options: [
      "Only graduation",
      "Prospect, applicant, enrolled student, alumni",
      "Only enrollment",
      "Only courses"
    ],
    correctAnswer: 1,
    explanation: "Student lifecycle spans prospect through alumni."
  },
  {
    question: "Which reporting need is common for Education Cloud?",
    options: [
      "Only sales pipeline",
      "Enrollment, retention, and advancement metrics",
      "Only support cases",
      "Only product sales"
    ],
    correctAnswer: 1,
    explanation: "Enrollment, retention, and advancement reporting are key."
  },
  {
    question: "What is the purpose of Term in Education Cloud?",
    options: [
      "To replace Program",
      "To represent academic periods (e.g., semesters, quarters)",
      "To track donations only",
      "To manage campaigns"
    ],
    correctAnswer: 1,
    explanation: "Term represents academic periods for enrollment and scheduling."
  },
  {
    question: "Which integration is common for Education Cloud?",
    options: [
      "CPQ only",
      "Student information systems (SIS), learning management, and payment",
      "Marketing Cloud only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "Education Cloud integrates with SIS and LMS systems."
  },
  {
    question: "What does an Education Cloud Consultant need to understand?",
    options: [
      "Only UI",
      "Student lifecycle, institutional processes, and industry data model",
      "Only CRM",
      "Only Marketing Cloud"
    ],
    correctAnswer: 1,
    explanation: "Consultants need student lifecycle and institutional process knowledge."
  },
  {
    question: "Which best practice applies to Education Cloud implementation?",
    options: [
      "Ignore stakeholders",
      "Engage admissions, advancement, and IT; align with institutional workflows",
      "No training",
      "Single department only"
    ],
    correctAnswer: 1,
    explanation: "Engage stakeholders and align with institutional workflows."
  },
]

export default function EducationCloudConsultantPage() {
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
            code="Education Cloud"
            description="Certified Education Cloud Consultants have experience implementing Salesforce Education Cloud solutions in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Education Cloud', 'Student Lifecycle', 'Admissions', 'Advancement', 'Experience Cloud', 'Data Model', 'Reporting', 'Integration', 'Best Practices', 'Industry']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education Cloud Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">EDA: Education Data Architecture Core Objects</p>
                <p>Education Cloud is built on EDA (Education Data Architecture), an open-source data model from Salesforce.org. Core objects: Contact (represents students, faculty, and staff), Account (educational institution, department, household), Term (academic period — semester, quarter), Course (a subject offering), Course Connection (a student&apos;s enrollment in a course for a term), Program Plan (degree plan with requirements). Affiliations connect contacts to multiple accounts (a student affiliated with their major department, a dormitory, and the institution). The consultant configures EDA to match the institution&apos;s academic structure.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Student Success Hub: Alerts, Cases, and Appointments</p>
                <p>Student Success Hub (SSH) is the advising and student success platform in Education Cloud. Key features: Alerts flag students at risk (attendance drops, grade thresholds, hold flags). Cases manage student issues requiring follow-up. Appointments enable students to book advising sessions (integrates with calendar systems). Success Plans create personalised student action plans with milestones. Advising notes capture interaction history. The consultant configures SSH to match the institution&apos;s student success model — defining which alert triggers are enabled, how cases are routed to advisors, and what appointment types are available.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Recruiting and Admissions</p>
                <p>Education Cloud supports the full student recruitment lifecycle. Inquiry captures prospective student interest. Application tracks the admissions application and review process. Prospect/Lead management assigns recruiter territories and tracks outreach activities. Program Interest records which academic programmes a prospect is interested in. The consultant configures the recruiting pipeline stages, application workflow (application submitted &rarr; under review &rarr; decision made &rarr; enrolled), and integration with external application management systems (Common App, Slate).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Experience Cloud for Students and Faculty</p>
                <p>Education Cloud leverages Experience Cloud to build self-service portals for students and faculty. Student portals: course registration, financial aid status, advising appointment booking, campus services requests. Faculty portals: course rosters, grade submission, office hours management. Community engagement: peer discussion groups, club pages, alumni networks. The consultant configures the Experience Cloud site using appropriate templates, sharing settings (Sharing Sets for student record access), and Knowledge articles for self-service resolution of common questions.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Integration with SIS and LMS Systems</p>
                <p>Educational institutions typically have existing systems of record: SIS (Student Information System — PeopleSoft, Banner, Colleague) for official academic records and LMS (Learning Management System — Canvas, Blackboard, Moodle) for course delivery. Education Cloud Salesforce serves as the engagement CRM layer — not the system of record for academic transcripts. Integration patterns: SIS sync pushes enrollment status, grades, and course connections into Salesforce. LMS integration surfaces course activity data for success coaching. The consultant designs the integration architecture — what data flows in each direction, at what frequency, and which system is the golden record for each data element.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Education Cloud Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Education Cloud Consultant exam tests implementation of Salesforce for higher education institutions. Focus on the Education Data Architecture (EDA), student lifecycle management, and how Education Cloud extends standard Salesforce.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Education Data Architecture (EDA)</p>
                <p>EDA replaces the standard Account/Contact model with an education-specific model: Accounts as educational institutions, Contacts as students/faculty, and Affiliations linking them. Know how EDA&apos;s Household and Administrative account types differ.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Student Lifecycle Management</p>
                <p>Understand how Admissions Connect, Student Success Hub, and Recruitment and Admissions features map to the student journey from prospect through alumni. Know which features are in Education Cloud vs. standard Salesforce.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Program Enrollment &amp; Course Management</p>
                <p>Know the EDA objects: Programs, Courses, Course Offerings, and Course Enrollments. Understand how students enroll in course offerings and how academic records are maintained.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advisor &amp; Success Hub Configuration</p>
                <p>Know how to configure the Success Hub for advisors with student alerts, appointments, and care plans. Understand how Advisor Link enables student-initiated advising appointments.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reporting for Education</p>
                <p>Understand common education reporting needs: enrollment funnels, retention rates, advising caseloads, and alumni engagement. Know how to build reports using EDA-specific report types.</p>
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
