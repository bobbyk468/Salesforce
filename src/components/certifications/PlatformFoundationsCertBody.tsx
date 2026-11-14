import { serializeJsonLd } from '@/lib/serialize-json-ld'
import { getPracticeQuestionsForExam, hasImportedPracticeQuestions } from '@/lib/git-practice-questions'
import Link from '@/components/AppLink'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'

import PracticeQuestionsSection from '@/components/PracticeQuestionsSection'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertNamingLead from '@/components/CertNamingLead'
import CredentialSchema from '@/components/CredentialSchema'
import { getQuizJsonLd } from '@/lib/schema-data'
import { SLUG_TO_EXAM_CODE } from '@/lib/certification-exam-codes'
import CertPageIntro from '@/components/CertPageIntro'

import ExamFeesSection from '@/components/ExamFeesSection'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhatIsSalesforceDiagram from '@/components/certifications/WhatIsSalesforceDiagram'
import PlatformFoundationsMergedGuide from '@/components/certifications/PlatformFoundationsMergedGuide'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import CertInsightBlock from '@/components/CertInsightBlock'
import { WhoIsThisForSection, ExamDifficultySection, ExamFormatSection } from '@/components/CertAdminStyleSections'
import {
  getInitialPracticeQuestions,
  getVisiblePracticeQuestions,
} from '@/lib/practice-question-lite'
import {
  platformFoundationsSampleQuestions,
  platformFoundationsWhoIsThisFor,
  platformFoundationsExamDifficulty,
  platformFoundationsExamFormat,
} from '@/lib/cert-page-spike/platform-foundations-data'
import LastUpdated from '@/components/LastUpdated'
import CiteThisPage from '@/components/CiteThisPage'
import { RELEASE_YEAR } from '@/lib/release-data'

export default function PlatformFoundationsCertBody({ slug }: { slug: string }) {
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const authoredQuestions = getPracticeQuestionsForExam(slug, platformFoundationsSampleQuestions)
  const initialQuestions = getInitialPracticeQuestions(authoredQuestions)

  return (
    <div className="min-h-screen bg-pattern">
      <div data-critical-content className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 content-wrapper">
        <CertPageSeo slug={slug} certTitle={title} />
        <CredentialSchema
          certSlug={slug}
          certName={title}
          description="This entry-level exam is for people with some Salesforce experience. It covers platform navigation, standard objects, reports and dashboards, security, and Salesforce products. The exam is 40 scored questions in 70 minutes, with a 62% pass mark, weighted towards Salesforce Ecosystem (32%) and Navigation (28%)."
          pageUrl={`/certifications/${slug}`}
          extraAlternateNames={['Platform Foundations', 'Salesforce Platform Foundations', 'Salesforce Associate Certification', 'Salesforce Associate', 'Plat-101', 'PLAT-101']}
          extraIdentifiers={[{ propertyID: 'Exam Code', value: 'Plat-101' }]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              getQuizJsonLd(`${title} Practice Questions`, getVisiblePracticeQuestions(initialQuestions), SLUG_TO_EXAM_CODE[slug]),
            ),
          }}
        />
        <CertIntroParagraph slug={slug} />
        {/* Hero section: LCP candidate; data-lcp-hero enables mobile critical CSS in layout */}
        <section data-lcp-hero className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-salesforce-blue via-salesforce-light to-salesforce-blue p-6 sm:p-8 lg:p-10 text-white shadow-md sm:shadow-xl border border-salesforce-blue/20 sm:border-salesforce-blue/30" aria-label="Hero section">
          <p className="text-white/80 text-sm font-medium mb-2 tracking-wide">
            Independent study resource &bull; Check the current Salesforce exam guide before booking
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3">
            Salesforce Certified Platform Foundations (Plat-101 / Associate) Study Guide &amp; Practice Questions
          </h1>
          <CertNamingLead slug={slug} />
          <LastUpdated />
          <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
            Prepare with free Salesforce Platform Foundations practice questions, plus a study plan and section weightage for the entry-level $75 exam. No sign-up required.
          </p>
          <p className="text-white/80 text-xs sm:text-sm max-w-2xl mb-6">
            Salesforce Certified Platform Foundations (Trailhead Academy exam code Plat-101) was previously called Salesforce Certified Associate. It is the same entry-level credential: a $75 exam with free retakes and no required maintenance, covering Salesforce Ecosystem (32%), Navigation (28%), Data Model (25%), and Reports &amp; Dashboards (15%).
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-5">
            <Link
              href="#practice-questions"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-salesforce-blue rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] text-base sm:text-lg w-full sm:w-auto border-2 border-white/90"
            >
              Start Free Practice Questions
            </Link>
            <Link
              href="#exam-weightage"
              className="hidden sm:flex items-center justify-center gap-2 px-6 py-3 bg-white/15 text-white rounded-lg font-semibold hover:bg-white/25 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto border border-white/30"
            >
              See Exam Weightage
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
            <span>Use this material alongside the current official exam guide.</span>
          </div>
        </section>

        <CertPageIntro slug={slug} />
        <ContentPageAuthor />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <WhoIsThisForSection data={platformFoundationsWhoIsThisFor} />

            <ExamFeesSection slug={slug} />
            <OfficialSourceRef slug={slug} />

            <CertificationCard
              slug={slug}
              title={title}
              code="Associate"
              description="This entry-level exam is for people with some Salesforce experience. It covers platform navigation, standard objects, reports and dashboards, security, and Salesforce products. The exam is 40 scored questions in 70 minutes, with a 62% pass mark, weighted towards Salesforce Ecosystem (32%) and Navigation (28%)."
              examDetails={{
                questions: 40,
                passingScore: '62%',
                duration: '70 min',
                cost: '$75',
              }}
              topics={[
                'Customer 360',
                'Objects & Records',
                'Navigation',
                'Reports & Dashboards',
                'Collaboration',
                'Mobile',
                'Security Basics',
                'Data Model',
              ]}
              examSections={examSections}
              examWeightageHeading={getCertExamWeightageHeading(slug)}
              headingLevel="h2"
            />

            <p className="mt-3 text-sm text-gray-700">
              Already have section-level scores from a practice test? Run them through the{' '}
              <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
                Salesforce Exam Score Calculator
              </Link>{' '}
              to see where you stand against the 62% pass mark.
            </p>

            <ExamDifficultySection data={platformFoundationsExamDifficulty} />
            <ExamFormatSection slug={slug} data={platformFoundationsExamFormat} />

            <div id="exam-prep">
              <ExamPrepContent slug={slug} />
            </div>

            {/* Key Concepts */}
            <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Salesforce Platform Foundations: Key Concepts for the Exam</h2>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">How the Salesforce Platform Works</h3>
                  <p>Salesforce is a cloud platform used by many customers. This shared model is called multi-tenant. Each customer works in a separate org, where their data is kept apart. Salesforce releases platform updates three times a year, in Spring, Summer, and Winter. Most changes are made in Setup without writing code. A sandbox is a copy of an org for building and testing changes. After testing, teams can move those changes to the live org, called production.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Objects, Records, and Fields</h3>
                  <p>Salesforce stores information in objects, much like tables in a database. A record is one item in an object, and a field stores one piece of information about that item. Common standard objects include Lead for a potential customer who is not yet qualified, Account for a company or person you work with, Contact for a person linked to an account, Opportunity for a potential sale, and Case for a customer issue. You can create custom objects for information that standard objects do not cover. Relationships connect records: a lookup is a flexible link, while with master-detail the child record depends on its parent and inherits its record access. Converting a Lead creates an Account and Contact, and can also create an Opportunity.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">How Access Is Controlled</h3>
                  <p>Salesforce access has several layers. Login settings decide whether and when someone can sign in. A profile and any permission sets control which objects and fields they can use and what actions they can take. Record access is managed separately: the org-wide default sets the starting access for each object, and the role hierarchy and sharing rules can give users access to more records. In short, profiles and permission sets control what users can do, while record sharing controls which records they can do it to.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Automation and Reports</h3>
                  <p>Flow Builder automates work such as updating records, sending emails, and guiding users through a process. Validation rules prevent records with invalid data from being saved. Approval processes send records to people for review. A report lists or summarizes records using a report type, and a dashboard displays report information as charts and metrics. List views show a filtered set of records on an object tab. For this exam, focus on which tool fits each need.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">The Salesforce Ecosystem</h3>
                  <p>AppExchange is Salesforce&apos;s marketplace for apps and components. Some are free and some are paid, and they can be installed in an org. Trailhead is Salesforce&apos;s free learning site, with lessons, trails, badges, and hands-on Superbadges. The Trailblazer Community is a place to ask questions and share solutions. Learn the main product families and their general purpose: Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, Tableau, MuleSoft, Slack, and Data 360.</p>
                </div>
              </div>
            </div>

            <WhatIsSalesforceDiagram />

            <PlatformFoundationsMergedGuide />

            <DifficultyHeatmap slug={slug} />

            <CertInsightBlock certSlug={slug} />

            {/* How to Pass */}
            <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce Platform Foundations Exam</h2>
              <p className="text-sm text-gray-600 mb-5">
                Many questions ask you to identify a Salesforce term or choose a feature for a simple business need. Learn the feature names and their purposes.
              </p>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Core Data Model</h3>
                  <p>Review Lead, Account, Contact, Opportunity, and Case. Understand lookup and master-detail relationships, and know what happens when you convert a Lead.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Automation</h3>
                  <p>Use Flow Builder to automate steps, validation rules to prevent invalid data, and approval processes to request sign-off.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Users and Access</h3>
                  <p>Profiles and permission sets control actions on objects and fields. Org-wide defaults, roles, and sharing rules control access to records.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Reports and Dashboards</h3>
                  <p>Reports list or summarize records. Dashboards display report data visually. List views show filtered records on an object tab.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Salesforce Products and Tools</h3>
                  <p>AppExchange offers apps, Trailhead offers learning, and sandboxes let teams test changes before putting them in production. Salesforce releases platform updates three times a year.</p>
                </div>
              </div>
            </div>

            <PracticeQuestionsSection
              heading={getCertPracticeQuestionsHeading(slug)}
              introText={getPracticeQuestionsIntro(initialQuestions.length, ". Select the requested number of answers, then check your selection.")}
              questions={initialQuestions}
            />

            <div id="related-certs">
              <RelatedCertifications currentSlug={slug} />
            </div>

            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
              <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Certifications After Platform Foundations</h2>
              <p className="text-sm text-gray-700 mb-2">Build on your platform foundations knowledge with these related Salesforce credentials:</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Platform Administrator</Link></li>
                <li><Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link></li>
                <li><Link href="/certifications/developer-1" className="text-salesforce-blue font-medium hover:underline">Platform Developer I</Link></li>
                <li><Link href="/certifications/sales-foundations" className="text-salesforce-blue font-medium hover:underline">Sales Foundations</Link></li>
                <li><Link href="/certifications/agentforce-specialist" className="text-salesforce-blue font-medium hover:underline">Agentforce Specialist</Link></li>
              </ul>
            </section>

            <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="pf-guides-heading">
              <h2 id="pf-guides-heading" className="text-base font-semibold text-gray-900 mb-3">Platform Foundations Study Resources</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#section-deep-dives" className="text-salesforce-blue font-medium hover:underline">
                    All 4 Exam Sections in Detail →
                  </Link>
                  <span className="text-gray-600 ml-2">Review the topics and weighting for each section of the official outline.</span>
                </li>
                <li>
                  <Link href="#study-plan" className="text-salesforce-blue font-medium hover:underline">
                    4-Week Study Plan →
                  </Link>
                  <span className="text-gray-600 ml-2">Plan your reading and hands-on practice over four weeks.</span>
                </li>
                <li>
                  <Link href="#common-mistakes" className="text-salesforce-blue font-medium hover:underline">
                    3 Concepts That Fail Most Candidates →
                  </Link>
                  <span className="text-gray-600 ml-2">The topics candidates get most confidently wrong.</span>
                </li>
                <li>
                  <Link href="/platform-foundations-vs-ai-associate" className="text-salesforce-blue font-medium hover:underline">
                    Platform Foundations vs AI Associate →
                  </Link>
                  <span className="text-gray-600 ml-2">Compare the two entry-level certifications.</span>
                </li>
              </ul>
            </section>

            <CertPageFaq slug={slug} certTitle={title} />
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1">
            <CertTableOfContents
              sections={[
                { id: 'exam-prep', title: 'Exam Prep Content' },
                { id: 'key-concepts', title: 'Key Concepts' },
                { id: 'section-deep-dives', title: 'Exam Sections in Detail' },
                { id: 'study-plan', title: '4-Week Study Plan' },
                { id: 'scenario-rules', title: 'Scenario Decision Rules' },
                { id: 'common-mistakes', title: 'Common Mistakes' },
                { id: 'scenario-tips', title: 'How to Pass' },
                { id: 'practice-questions', title: 'Practice Questions' },
                { id: 'related-certs', title: 'Related Certifications' },
              ]}
            />
          </aside>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <CiteThisPage certName={title} slug={slug} year={RELEASE_YEAR} />
      </div>
    </div>
  )
}
