import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import { getQuizJsonLd } from '@/lib/schema-data'
import CertPageCta from '@/components/CertPageCta'
import CertTrustBar from '@/components/CertTrustBar'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import CertificationPageShell from '@/components/certifications/CertificationPageShell'
import {
  getCertH1Text,
  getCertExamWeightageHeading,
  getCertPracticeQuestionsHeading,
  getPracticeQuestionsIntro,
  slugToDisplayName,
} from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'
import type {
  AppBuilderSpikeBody,
  AssociateSpikeBody,
  CertSpikeBodyData,
  IntroSegment,
  LegacySpikeBody,
  MoreQuestionsParagraph,
  RichTextContent,
} from '@/lib/cert-page-spike/types'
import { parseMarkdown, renderMarkdownSegments } from '@/lib/cert-page-spike/markdown-parser'
import AdministratorCertBody from '@/components/certifications/AdministratorCertBody'
import Developer1CertBody from '@/components/certifications/Developer1CertBody'
import AgentforceArchitectureDiagram from '@/components/certifications/AgentforceArchitectureDiagram'
import EinsteinTrustLayerDiagram from '@/components/certifications/EinsteinTrustLayerDiagram'
import MCPIntegrationDiagram from '@/components/certifications/MCPIntegrationDiagram'
import AgenticOrchestrationDiagram from '@/components/certifications/AgenticOrchestrationDiagram'
import PromptStructureDiagram from '@/components/certifications/PromptStructureDiagram'
import ToolCallingDiagram from '@/components/certifications/ToolCallingDiagram'
import FlowVsApexDiagram from '@/components/certifications/FlowVsApexDiagram'
import SalesProcessFlowDiagram from '@/components/certifications/SalesProcessFlowDiagram'
import OmniChannelRoutingDiagram from '@/components/certifications/OmniChannelRoutingDiagram'
import SharingModelDiagram from '@/components/certifications/SharingModelDiagram'
import BALifecycleDiagram from '@/components/certifications/BALifecycleDiagram'
import QuoteToCashDiagram from '@/components/certifications/QuoteToCashDiagram'
import ExperienceLicenseDiagram from '@/components/certifications/ExperienceLicenseDiagram'
import FieldServiceDataModelDiagram from '@/components/certifications/FieldServiceDataModelDiagram'
import SlackWorkspaceOrgDiagram from '@/components/certifications/SlackWorkspaceOrgDiagram'
import AsyncApexDiagram from '@/components/certifications/AsyncApexDiagram'
import SFRAArchitectureDiagram from '@/components/certifications/SFRAArchitectureDiagram'
import CPQVsOmniStudioDiagram from '@/components/certifications/CPQVsOmniStudioDiagram'
import LWCExecutionDiagram from '@/components/certifications/LWCExecutionDiagram'
import APILedConnectivityDiagram from '@/components/certifications/APILedConnectivityDiagram'
import DataWeaveTransformDiagram from '@/components/certifications/DataWeaveTransformDiagram'
import RPAvsComposerDiagram from '@/components/certifications/RPAvsComposerDiagram'
import FlexCardOmniScriptDiagram from '@/components/certifications/FlexCardOmniScriptDiagram'
import BoltSDKDiagram from '@/components/certifications/BoltSDKDiagram'
import EinsteinDiscoveryLifecycleDiagram from '@/components/certifications/EinsteinDiscoveryLifecycleDiagram'
import IdentityResolutionDiagram from '@/components/certifications/IdentityResolutionDiagram'
import EducationDataModelDiagram from '@/components/certifications/EducationDataModelDiagram'
import MCStudioDecisionDiagram from '@/components/certifications/MCStudioDecisionDiagram'
import C4EFrameworkDiagram from '@/components/certifications/C4EFrameworkDiagram'
import NPSPMigrationDiagram from '@/components/certifications/NPSPMigrationDiagram'
import OmniScriptUXPatternDiagram from '@/components/certifications/OmniScriptUXPatternDiagram'
import LeadScoringGradingDiagram from '@/components/certifications/LeadScoringGradingDiagram'
import LeadToCashArchitectureDiagram from '@/components/certifications/LeadToCashArchitectureDiagram'
import EnterpriseGridRolloutDiagram from '@/components/certifications/EnterpriseGridRolloutDiagram'
import TableauDeploymentDiagram from '@/components/certifications/TableauDeploymentDiagram'
import ApplicationArchitectPyramidDiagram from '@/components/certifications/ApplicationArchitectPyramidDiagram'
import SystemArchitectPyramidDiagram from '@/components/certifications/SystemArchitectPyramidDiagram'
import B2BMultiCloudDiagram from '@/components/certifications/B2BMultiCloudDiagram'
import B2CScalabilityDiagram from '@/components/certifications/B2CScalabilityDiagram'
import B2CSolutionIntegrationDiagram from '@/components/certifications/B2CSolutionIntegrationDiagram'
import LDVMitigationDiagram from '@/components/certifications/LDVMitigationDiagram'
import CICDBranchingDiagram from '@/components/certifications/CICDBranchingDiagram'
import HerokuConnectSyncDiagram from '@/components/certifications/HerokuConnectSyncDiagram'
import OAuthSAMLSequenceDiagram from '@/components/certifications/OAuthSAMLSequenceDiagram'
import IntegrationPatternsMatrixDiagram from '@/components/certifications/IntegrationPatternsMatrixDiagram'
import AnypointNetworkDiagram from '@/components/certifications/AnypointNetworkDiagram'
import RecordAccessCalculationDiagram from '@/components/certifications/RecordAccessCalculationDiagram'
import TableauHADRDiagram from '@/components/certifications/TableauHADRDiagram'
import CTABoardStructureDiagram from '@/components/certifications/CTABoardStructureDiagram'
import CTAEvaluationStructureDiagram from '@/components/certifications/CTAEvaluationStructureDiagram'
import EmailDeliverabilityDiagram from '@/components/certifications/EmailDeliverabilityDiagram'
import ReplyMailManagementDiagram from '@/components/certifications/ReplyMailManagementDiagram'
import AMPscriptExecutionDiagram from '@/components/certifications/AMPscriptExecutionDiagram'
import MCCapabilitiesMapDiagram from '@/components/certifications/MCCapabilitiesMapDiagram'
import PardotFormLifecycleDiagram from '@/components/certifications/PardotFormLifecycleDiagram'
import DataToDashboardDiagram from '@/components/certifications/DataToDashboardDiagram'
import ChartTypesReferenceDiagram from '@/components/certifications/ChartTypesReferenceDiagram'
import TSMArchitectureDiagram from '@/components/certifications/TSMArchitectureDiagram'
import WhatIsSalesforceDiagram from '@/components/certifications/WhatIsSalesforceDiagram'
import SalesMethodologyDiagram from '@/components/certifications/SalesMethodologyDiagram'
import JTBDFrameworkDiagram from '@/components/certifications/JTBDFrameworkDiagram'
import SLDSHooksDiagram from '@/components/certifications/SLDSHooksDiagram'
import dynamic from 'next/dynamic'
import CertReadinessSummary from '@/components/CertReadinessSummary'
import ReleaseNoteBadge from '@/components/certifications/ReleaseNoteBadge'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExpertInsightCallout from '@/components/ExpertInsightCallout'
import OfficialSourceRef from '@/components/OfficialSourceRef'
import { WhoIsThisForSection, ExamDifficultySection, ExamFormatSection } from '@/components/CertAdminStyleSections'
import CertDifferentiationSection from '@/components/CertDifferentiationSection'
import { getInitialPracticeQuestions } from '@/lib/practice-question-lite'
import type { ReactNode } from 'react'

const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  },
)

function renderIntroSegments(segments: IntroSegment[]): ReactNode {
  return segments.map((s, i) => {
    if (s.type === 'text') return <span key={i}>{s.text}</span>
    if (s.type === 'strong') return <strong key={i}>{s.text}</strong>
    if (s.type === 'link') {
      if (s.href.startsWith('mailto:')) {
        return (
          <a key={i} href={s.href} className="text-salesforce-blue font-medium hover:underline">
            {s.label}
          </a>
        )
      }
      return (
        <Link key={i} href={s.href} className="text-salesforce-blue font-medium hover:underline">
          {s.label}
        </Link>
      )
    }
    return null
  })
}

/**
 * Flexible renderer for RichTextContent (markdown strings or segment arrays).
 * Handles both legacy IntroSegment arrays and new markdown strings.
 * Makes it easy to gradually migrate content to markdown.
 */
function renderRichText(content: RichTextContent): ReactNode {
  if (typeof content === 'string') {
    // Markdown string
    const segments = parseMarkdown(content)
    return renderMarkdownSegments(segments)
  } else {
    // Legacy segment array
    return renderIntroSegments(content)
  }
}

function renderMoreQuestionParagraph(p: MoreQuestionsParagraph, key: string, isLast: boolean): ReactNode {
  const pClass = isLast
    ? 'text-gray-600 text-xs max-w-md mx-auto mb-6'
    : 'text-gray-600 text-sm max-w-md mx-auto mb-1'
  if (p.kind === 'text') {
    return (
      <p key={key} className={pClass}>
        {p.text}
      </p>
    )
  }
  return (
    <p key={key} className={pClass}>
      {renderIntroSegments(p.segments)}
    </p>
  )
}

function KeyConceptsSection({
  id,
  h2,
  blocks,
}: {
  id: string
  h2: string
  blocks: AssociateSpikeBody['keyConcepts']['blocks']
}) {
  return (
    <div id={id} className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{h2}</h2>
      <div className="space-y-4 text-sm text-gray-700">
        {blocks.map((b) => (
          <div key={b.heading}>
            <h3 className="font-semibold text-gray-900 mb-1 text-base">{b.heading}</h3>
            {b.bodySegments?.length ? (
              <p>{renderIntroSegments(b.bodySegments)}</p>
            ) : (
              <p>{renderRichText(b.body)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ScenarioTipsSection({
  h2,
  intro,
  blocks,
}: {
  h2: string
  intro: string
  blocks: AssociateSpikeBody['scenarioTips']['blocks']
}) {
  return (
    <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{h2}</h2>
      <p className="text-sm text-gray-600 mb-5">{intro}</p>
      <div className="space-y-4 text-sm text-gray-700">
        {blocks.map((b) => (
          <div key={b.heading}>
            <h3 className="font-semibold text-gray-900 mb-1 text-base">{b.heading}</h3>
            {b.bodySegments?.length ? (
              <p>{renderIntroSegments(b.bodySegments)}</p>
            ) : (
              <p>{renderRichText(b.body)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Standalone practice-test companion pages → their full study guide, for the back-link callout below. */
const PRACTICE_TEST_PARENT: Record<string, { href: string; label: string }> = {
  'administrator-practice-test': { href: '/certifications/administrator', label: 'ADM-201 Section-by-Section Study Guide' },
  'email-specialist-practice-test': { href: '/certifications/email-specialist', label: 'Email Specialist Section-by-Section Study Guide' },
}

function AssociateTemplate({ slug, body }: { slug: string; body: AssociateSpikeBody }) {
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const card = body.certificationCard
  const initialQuestions = getInitialPracticeQuestions(body.sampleQuestions)

  return (
    <>
      <CertPageSeo slug={slug} certTitle={title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getQuizJsonLd(`${title} Practice Questions`, body.sampleQuestions)),
        }}
      />
      {body.introLead?.length ? (
        <p className="text-sm text-gray-600 mb-6 max-w-7xl mx-auto px-4">{renderIntroSegments(body.introLead)}</p>
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          <CertIntroParagraph slug={slug} />
        </div>
      )}
      {PRACTICE_TEST_PARENT[slug] ? (
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-gray-600 mb-6 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3">
            This is a standalone timed practice run.{' '}
            <Link href={PRACTICE_TEST_PARENT[slug].href} className="text-salesforce-blue font-medium hover:underline">
              ← Back to the {PRACTICE_TEST_PARENT[slug].label}
            </Link>{' '}
            for exam weightage, key concepts, and section-by-section explanations.
          </p>
        </div>
      ) : null}
      <div className="max-w-7xl mx-auto px-4">
        <CertTrustBar slug={slug} />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <CertPageCta slug={slug} certTitle={title} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ReleaseNoteBadge />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ContentPageAuthor />
      </div>

      <CertificationPageShell tocSections={body.tocSections}>
        {body.whoIsThisFor && <WhoIsThisForSection data={body.whoIsThisFor} />}

        <ExamFeesSection slug={slug} />
        <OfficialSourceRef slug={slug} />

        <CertificationCard
          slug={slug}
          title={title}
          code={card.code}
          description={card.description}
          examDetails={card.examDetails}
          topics={card.topics}
          examSections={examSections}
          h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          componentExams={card.componentExams}
        />

        <div id="exam-prep">
          <ExamPrepContent slug={slug} />
        </div>

        {body.expertInsight && <ExpertInsightCallout insight={body.expertInsight} />}

        {body.examDifficulty && <ExamDifficultySection data={body.examDifficulty} />}
        {body.examFormat && <ExamFormatSection slug={slug} data={body.examFormat} />}
        {body.differentiation && <CertDifferentiationSection data={body.differentiation} />}

        <KeyConceptsSection id="key-concepts" h2={body.keyConcepts.h2} blocks={body.keyConcepts.blocks} />

        {slug === 'agentforce-specialist' ? <AgentforceArchitectureDiagram /> : null}
        {slug === 'ai-associate' ? <EinsteinTrustLayerDiagram /> : null}
        {slug === 'claude-certified-architect-foundations' ? <MCPIntegrationDiagram /> : null}
        {slug === 'claude-certified-architect-professional' ? <AgenticOrchestrationDiagram /> : null}
        {slug === 'claude-certified-associate' ? <PromptStructureDiagram /> : null}
        {slug === 'claude-certified-developer' ? <ToolCallingDiagram /> : null}
        {slug === 'sales-cloud' ? <SalesProcessFlowDiagram /> : null}
        {slug === 'service-cloud' ? <OmniChannelRoutingDiagram /> : null}
        {slug === 'advanced-administrator' ? <SharingModelDiagram /> : null}
        {slug === 'business-analyst' ? <BALifecycleDiagram /> : null}
        {slug === 'cpq-administrator' ? <QuoteToCashDiagram /> : null}
        {slug === 'experience-cloud' ? <ExperienceLicenseDiagram /> : null}
        {slug === 'field-service' ? <FieldServiceDataModelDiagram /> : null}
        {slug === 'slack-administrator' ? <SlackWorkspaceOrgDiagram /> : null}
        {slug === 'developer-2' ? <AsyncApexDiagram /> : null}
        {slug === 'b2c-commerce-developer' ? <SFRAArchitectureDiagram /> : null}
        {slug === 'industries-cpq-developer' ? <CPQVsOmniStudioDiagram /> : null}
        {slug === 'javascript-developer-i' ? <LWCExecutionDiagram /> : null}
        {slug === 'mulesoft-developer-i' ? <APILedConnectivityDiagram /> : null}
        {slug === 'mulesoft-developer-ii' ? <DataWeaveTransformDiagram /> : null}
        {slug === 'mulesoft-hyperautomation-developer' ? <RPAvsComposerDiagram /> : null}
        {slug === 'omnistudio-developer' ? <FlexCardOmniScriptDiagram /> : null}
        {slug === 'slack-developer' ? <BoltSDKDiagram /> : null}
        {slug === 'crm-analytics-einstein-discovery-consultant' ? <EinsteinDiscoveryLifecycleDiagram /> : null}
        {slug === 'data-360-consultant' ? <IdentityResolutionDiagram /> : null}
        {slug === 'education-cloud-consultant' ? <EducationDataModelDiagram /> : null}
        {slug === 'marketing-cloud-consultant' ? <MCStudioDecisionDiagram /> : null}
        {slug === 'mulesoft-catalyst-consultant' ? <C4EFrameworkDiagram /> : null}
        {slug === 'nonprofit-success-pack-consultant' ? <NPSPMigrationDiagram /> : null}
        {slug === 'omnistudio-consultant' ? <OmniScriptUXPatternDiagram /> : null}
        {slug === 'pardot-consultant' ? <LeadScoringGradingDiagram /> : null}
        {slug === 'revenue-cloud-consultant' ? <LeadToCashArchitectureDiagram /> : null}
        {slug === 'slack-consultant' ? <EnterpriseGridRolloutDiagram /> : null}
        {slug === 'tableau-consultant' ? <TableauDeploymentDiagram /> : null}
        {slug === 'application-architect' ? <ApplicationArchitectPyramidDiagram /> : null}
        {slug === 'system-architect' ? <SystemArchitectPyramidDiagram /> : null}
        {slug === 'b2b-solution-architect' ? <B2BMultiCloudDiagram /> : null}
        {slug === 'b2c-commerce-architect' ? <B2CScalabilityDiagram /> : null}
        {slug === 'b2c-solution-architect' ? <B2CSolutionIntegrationDiagram /> : null}
        {slug === 'data-architect' ? <LDVMitigationDiagram /> : null}
        {slug === 'dev-lifecycle-deployment-architect' ? <CICDBranchingDiagram /> : null}
        {slug === 'heroku-architect' ? <HerokuConnectSyncDiagram /> : null}
        {slug === 'identity-access-management-architect' ? <OAuthSAMLSequenceDiagram /> : null}
        {slug === 'integration-architect' ? <IntegrationPatternsMatrixDiagram /> : null}
        {slug === 'mulesoft-integration-architect' ? <APILedConnectivityDiagram /> : null}
        {slug === 'mulesoft-platform-architect' ? <AnypointNetworkDiagram /> : null}
        {slug === 'sharing-visibility-architect' ? <RecordAccessCalculationDiagram /> : null}
        {slug === 'tableau-architect' ? <TableauHADRDiagram /> : null}
        {slug === 'technical-architect' ? <CTABoardStructureDiagram /> : null}
        {slug === 'technical-architect-evaluation' ? <CTAEvaluationStructureDiagram /> : null}
        {slug === 'technical-architect-review-board' ? <CTABoardStructureDiagram /> : null}
        {slug === 'email-specialist' ? <EmailDeliverabilityDiagram /> : null}
        {slug === 'marketing-cloud-engagement-admin' ? <ReplyMailManagementDiagram /> : null}
        {slug === 'marketing-cloud-engagement-developer' ? <AMPscriptExecutionDiagram /> : null}
        {slug === 'marketing-cloud-engagement-foundations' ? <MCCapabilitiesMapDiagram /> : null}
        {slug === 'pardot-specialist' ? <PardotFormLifecycleDiagram /> : null}
        {slug === 'tableau-data-analyst' ? <DataToDashboardDiagram /> : null}
        {slug === 'tableau-desktop-foundations' ? <ChartTypesReferenceDiagram /> : null}
        {slug === 'tableau-server-administrator' ? <TSMArchitectureDiagram /> : null}
        {slug === 'platform-foundations' ? <WhatIsSalesforceDiagram /> : null}
        {slug === 'sales-foundations' ? <SalesMethodologyDiagram /> : null}
        {slug === 'strategy-designer' ? <JTBDFrameworkDiagram /> : null}
        {slug === 'ux-designer' ? <SLDSHooksDiagram /> : null}

        <ScenarioTipsSection
          h2={body.scenarioTips.h2}
          intro={body.scenarioTips.intro}
          blocks={body.scenarioTips.blocks}
        />

        <CertReadinessSummary slug={slug} />
        <PracticeQuestionsSection
          heading={getCertPracticeQuestionsHeading(slug)}
          introText={getPracticeQuestionsIntro(
            body.sampleQuestions.length,
            body.practiceQuestionsIntroSuffix,
          )}
          questions={initialQuestions}
        />

        <FullQuestionBankCta slug={slug} certTitle={title} />

        <CertPageFaq slug={slug} certTitle={title} />

        {body.nextCertsAfter ? (
          <section
            className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6"
            aria-labelledby="next-certs-heading"
          >
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">
              {body.nextCertsAfter.heading}
            </h2>
            <p className="text-sm text-gray-700 mb-2">{body.nextCertsAfter.intro}</p>
            <ul className="space-y-2 text-sm">
              {body.nextCertsAfter.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-salesforce-blue font-medium hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div id="related-certs">
          <RelatedCertifications currentSlug={slug} />
        </div>
      </CertificationPageShell>
    </>
  )
}

function AppBuilderTemplate({ slug, body }: { slug: string; body: AppBuilderSpikeBody }) {
  const examSections = getExamWeightage(slug)
  const title = slugToDisplayName(slug)
  const card = body.certificationCard
  const initialQuestions = getInitialPracticeQuestions(body.sampleQuestions)

  return (
    <>
      <CertPageSeo slug={slug} certTitle={title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getQuizJsonLd(`${title} Practice Questions`, body.sampleQuestions)),
        }}
      />
      <p className="text-sm text-gray-600 mb-6 max-w-7xl mx-auto px-4">{renderIntroSegments(body.introLead)}</p>
      <div className="max-w-7xl mx-auto px-4">
        <CertTrustBar slug={slug} />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <CertPageCta slug={slug} certTitle={title} examCode={body.ctaExamCode} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ReleaseNoteBadge />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ContentPageAuthor />
      </div>

      <CertificationPageShell tocSections={body.tocSections}>
        {body.whoIsThisFor && <WhoIsThisForSection data={body.whoIsThisFor} />}

        <ExamFeesSection slug={slug} />
        <OfficialSourceRef slug={slug} />

        <CertificationCard
          slug={slug}
          title={title}
          code={card.code}
          description={card.description}
          examDetails={card.examDetails}
          topics={card.topics}
          examSections={examSections}
          h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          componentExams={card.componentExams}
        />

        <div id="exam-prep">
          <ExamPrepContent slug={slug} />
        </div>

        {body.expertInsight && <ExpertInsightCallout insight={body.expertInsight} />}

        {body.examDifficulty && <ExamDifficultySection data={body.examDifficulty} />}
        {body.examFormat && <ExamFormatSection slug={slug} data={body.examFormat} />}
        {body.differentiation && <CertDifferentiationSection data={body.differentiation} />}

        <ScenarioTipsSection
          h2={body.scenarioTips.h2}
          intro={body.scenarioTips.intro}
          blocks={body.scenarioTips.blocks}
        />

        <KeyConceptsSection id="key-concepts" h2={body.keyConcepts.h2} blocks={body.keyConcepts.blocks} />

        {slug === 'app-builder' ? <FlowVsApexDiagram /> : null}

        <CertReadinessSummary slug={slug} />
        <PracticeQuestionsSection
          heading={getCertPracticeQuestionsHeading(slug)}
          introText={getPracticeQuestionsIntro(body.sampleQuestions.length, body.practiceIntroSuffix)}
          questions={initialQuestions}
        />

        <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            {body.moreQuestionsBlock.h3}
          </h3>
          {body.moreQuestionsBlock.paragraphs.map((para, idx) =>
            renderMoreQuestionParagraph(
              para,
              `mq-${idx}`,
              idx === body.moreQuestionsBlock.paragraphs.length - 1,
            ),
          )}
          <a
            href={body.moreQuestionsBlock.ctaHref}
            className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
          >
            {body.moreQuestionsBlock.ctaLabel}
          </a>
        </div>

        <CertPageFaq slug={slug} certTitle={title} />

        <div id="related-certs">
          <RelatedCertifications currentSlug={slug} />
        </div>

        <section
          className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6"
          aria-labelledby={body.afterCertSection.id}
        >
          <h2 id={body.afterCertSection.id} className="text-base font-semibold text-gray-900 mb-3">
            {body.afterCertSection.heading}
          </h2>
          <p className="text-sm text-gray-700 mb-2">{body.afterCertSection.intro}</p>
          <ul className="space-y-2 text-sm">
            {body.afterCertSection.items.map((item) => (
              <li key={item.link.href}>
                {item.lead}
                <Link href={item.link.href} className="text-salesforce-blue font-medium hover:underline">
                  {item.link.label}
                </Link>
                {item.tail}
              </li>
            ))}
          </ul>
        </section>
      </CertificationPageShell>
    </>
  )
}

/** Legacy cert pages render from `[slug]/page.tsx` via dynamic import; never pass `template: 'legacy'` here. */
type CertBodyForTemplate = Exclude<CertSpikeBodyData, LegacySpikeBody>

type Props = {
  slug: string
  body: CertBodyForTemplate
}

/**
 * Shared certification page shell for the [slug] spike (and future migrations).
 * SEO helpers (metadata, FAQ JSON-LD, exam prep copy) stay keyed by `slug` in lib/*.
 *
 * NOTE: This switch statement is exhaustiveness-checked by TypeScript.
 * If a new template type is added to CertBodyForTemplate, TS will error here.
 */
export default function CertificationBodyTemplate({ slug, body }: Props) {
  const exhaustiveCheck = (x: never): never => {
    throw new Error(`Unknown cert body template: ${x}`)
  }

  switch (body.template) {
    case 'admin':
      return <AdministratorCertBody slug={slug} />
    case 'pd1':
      return <Developer1CertBody slug={slug} />
    case 'app-builder':
      return <AppBuilderTemplate slug={slug} body={body} />
    case 'associate':
      return <AssociateTemplate slug={slug} body={body} />
    default:
      return exhaustiveCheck(body)
  }
}
