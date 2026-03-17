import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'health-cloud-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Health Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: patient management, care plans, provider network.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/health-cloud-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/health-cloud-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Health Cloud AP exam tips ${RELEASE_CURRENT}, how to pass Health Cloud Accredited Professional, Salesforce Health Cloud certification, healthcare Salesforce exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Health Cloud AP Exam Tips', url: '/health-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Health Cloud Accredited Professional exam format?',
    answer: 'The Health Cloud Accredited Professional (AP) exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Health Cloud configuration: patient and member management, care plans, provider network management, and healthcare-specific data model concepts.',
  },
  {
    question: 'What are the highest-weight Health Cloud AP exam sections?',
    answer: 'Patient and Member Management (30%) and Care Plan Configuration (25%) together account for 55% of the exam. Understanding Health Cloud&apos;s person account model, care team setup, care plan templates, and how to configure clinical data management for healthcare organisations are the most tested areas.',
  },
  {
    question: 'What is a care plan in Health Cloud and how does the exam test it?',
    answer: 'A care plan in Health Cloud is a structured set of goals and tasks assigned to a patient or member to manage their health outcomes. Care plan templates provide reusable frameworks for common conditions. The exam tests how to configure care plan templates, assign care teams, set goals with target dates, and track care plan progress — critical for care coordination use cases.',
  },
  {
    question: 'What healthcare industry knowledge helps with the Health Cloud AP exam?',
    answer: 'Understanding how healthcare organisations operate — patient intake, care coordination, provider networks, member management for payers, and clinical data — helps map business scenarios to Health Cloud features. Knowledge of HIPAA compliance concepts (PHI protection, access controls) and how Health Cloud addresses them through its security model is also tested.',
  },
  {
    question: 'What concepts do most Health Cloud candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Health Cloud exam are: (1) Patient vs Member vs Person Account — Health Cloud Data Model; (2) Care Plans vs Care Programs — Individual vs Population Health; (3) Utilisation Management vs Prior Authorisation — Two Different Processes. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('health-cloud-ap-exam-tips'),
]

export default function HealthCloudApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/health-cloud-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Health Cloud Accredited Professional Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Health Cloud AP exam validates your ability to implement Salesforce Health Cloud for
          healthcare and life sciences organisations. These tips focus on patient management, care plans,
          and provider network configuration that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Health Cloud AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Patient and member management</strong> — Health Cloud&apos;s person account model for patients and members, household accounts for family units, care team setup (primary care provider, care coordinator, specialist roles), and how to manage clinical relationships and referrals within Health Cloud.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Care plan configuration</strong> — Creating and using care plan templates for common conditions, setting goals with target values and dates, assigning tasks to care team members, tracking care plan progress and goal achievement, and using care gaps to identify patients who need outreach.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Provider network and data model</strong> — Configuring provider networks and provider specialties, managing provider-patient relationships, Health Cloud&apos;s clinical data model for social determinants of health, and HIPAA-compliant access controls for protected health information (PHI).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Patient and Member Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Care Plan Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Provider Network Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Model and Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Patient Management + Care Plans + Provider = 80% of tested content.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Health Cloud AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a healthcare or life sciences scenario and ask which Health Cloud feature,
          object, or configuration addresses it. Always use native Health Cloud features — not generic
          Salesforce objects like custom cases or custom relationship objects.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For care coordination questions: a care team is the group of clinical and non-clinical staff coordinating a patient&apos;s care. Each care team member has a role (Primary Care Physician, Care Coordinator, Specialist). When a scenario says &apos;who is responsible for coordinating this patient&apos;s care&apos;, find the Care Coordinator role on the care team — not just any team member.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For care plan questions: care gaps identify patients who have not received a recommended clinical service (e.g., annual wellness visit). Care plan tasks are assigned to care team members with due dates. Goals have target values (e.g., blood pressure below 120/80). When a scenario says &apos;automatically identify patients who haven&apos;t had their screening&apos;, the answer is care gaps.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: Health Cloud uses person accounts (individual patients) and household accounts (family groups). Clinical data (diagnoses, medications, allergies) is stored in health-specific objects linked to the person account. When a question asks about storing a patient&apos;s medication list, the answer is the Health Cloud Medication object — not a custom field on Contact.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Health Cloud AP is a practitioner-level accreditation for implementation partners and
          Salesforce employees working on Health Cloud projects. Candidates typically have hands-on
          Health Cloud configuration experience from real healthcare implementations. The official
          Salesforce Health Cloud Trailmix on Trailhead is the primary study resource.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Health Cloud Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Patient vs Member vs Person Account — Health Cloud Data Model</p>
            <p className="text-sm text-gray-700">Health Cloud uses Person Accounts for patients (an Account-Contact fusion). A Member is a Person Account enrolled in a health plan. These are not separate object types — they are the same Person Account with different record types. Candidates create separate Contact records for patients — the exam expects Person Accounts as the Patient/Member data model.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Care Plans vs Care Programs — Individual vs Population Health</p>
            <p className="text-sm text-gray-700">A Care Plan is an individualised treatment plan for one patient with goals, problems, and tasks. A Care Program is a population-level health initiative (diabetes management programme) that patients can be enrolled in. Candidates recommend Care Programs for individual patient care management — the exam expects Care Plans for individual patient interactions and Care Programs for managing patient populations.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Utilisation Management vs Prior Authorisation — Two Different Processes</p>
            <p className="text-sm text-gray-700">Utilisation Management reviews whether proposed treatments meet medical necessity criteria. Prior Authorisation is the specific approval request submitted by a provider before a service is rendered. In Health Cloud, these are separate workflows. Candidates use a generic Case for both — the exam expects the UM Request record for prior authorisation workflows with member, provider, and clinical review fields.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/financial-services-cloud-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Financial Services Cloud AP Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Health Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/health-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Health Cloud AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/financial-services-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Financial Services Cloud AP
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}