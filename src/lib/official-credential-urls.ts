/**
 * Official Salesforce credential pages on Trailhead, one per certification.
 *
 * Every URL here was fetched and confirmed to return 200 before being added;
 * none is derived from a slug at runtime, because a guessed credential name
 * 404s and an official link that 404s is worse than no link at all.
 *
 * Certifications absent from this map have no verified Trailhead page: the
 * Accredited Professional credentials sit elsewhere in Salesforce's partner
 * site, and the Claude certifications are not Salesforce credentials. Those
 * fall back to SLUG_TO_EXAM_GUIDE_URL, and show no official link if that is
 * missing too.
 *
 * Verified 85 of 97 certifications on 2026-11-10. Still missing:
 * advanced-field-service-ap, b2b-commerce-admin-ap, b2b-commerce-developer-ap,
 * cpq-billing-ap, technical-architect-evaluation (no official Trailhead URL
 * found that returns 200 as of this date).
 *
 * Removed 2026-11-20: consumer-goods-tpm-ap. Its exam closed 2026-08-31 and
 * Salesforce now serves an empty credential page, so it falls back to its
 * exam guide. Links whose Trailhead URL 301s to Trailhead Academy now point
 * at the Academy page directly.
 */
export const OFFICIAL_CREDENTIAL_URLS: Record<string, string> = {
  'administrator': 'https://trailhead.salesforce.com/credentials/platformadministrator',
  'communications-cloud-ap': 'https://trailhead.salesforce.com/credentials/communicationscloudaccreditedprofessional',
  'consumer-goods-cloud-ap': 'https://trailhead.salesforce.com/credentials/consumergoodscloudaccreditedprofessional',
  'dev-lifecycle-deployment-architect': 'https://trailhead.salesforce.com/credentials/platformdevelopmentlifecycledeploymentarchitect',
  'field-service': 'https://trailhead.salesforce.com/credentials/agffieldserviceandoperationsconsultant',
  'financial-services-cloud-ap': 'https://trailhead.salesforce.com/credentials/financialservicescloudaccreditedprofessional',
  'health-cloud-ap': 'https://trailhead.salesforce.com/credentials/healthcloudaccreditedprofessional',
  'manufacturing-cloud-ap': 'https://trailhead.salesforce.com/credentials/manufacturingcloudaccreditedprofessional',
  'public-sector-solutions-ap': 'https://trailhead.salesforce.com/credentials/publicsectorsolutionsaccreditedprofessional',
  'sales-cloud': 'https://trailhead.salesforce.com/credentials/agfsalesconsultant',
  'service-cloud': 'https://trailhead.salesforce.com/credentials/agfserviceconsultant',
  'advanced-administrator': 'https://trailhead.salesforce.com/credentials/platformadministrator-ii',
  'agentforce-specialist': 'https://trailhead.salesforce.com/credentials/agentforcespecialist',
  'ai-associate': 'https://trailhead.salesforce.com/credentials/aiassociate',
  'app-builder': 'https://trailhead.salesforce.com/credentials/platformappbuilder',
  'application-architect': 'https://trailhead.salesforce.com/credentials/applicationarchitect',
  'b2b-solution-architect': 'https://trailheadacademy.salesforce.com/certificate/exam-b2b-solution-architect---Arch-301',
  'b2c-commerce-architect': 'https://trailheadacademy.salesforce.com/certificate/exam-b2c-comm-architect---Arch-303',
  'b2c-commerce-developer': 'https://trailhead.salesforce.com/credentials/b2ccommercedeveloper',
  'b2c-solution-architect': 'https://trailhead.salesforce.com/credentials/b2csolutionarchitect',
  'business-analyst': 'https://trailhead.salesforce.com/credentials/businessanalyst',
  'contact-center-ap': 'https://trailhead.salesforce.com/credentials/contactcenteraccreditedprofessional',
  'cpq-administrator': 'https://trailheadacademy.salesforce.com/certificate/exam-cpq-admin---Sales-Admn-202',
  'crm-analytics-einstein-discovery-consultant': 'https://trailhead.salesforce.com/credentials/crmanalyticsandeinsteindiscoveryconsultant',
  'data-360-consultant': 'https://trailhead.salesforce.com/credentials/data360consultant',
  'data-architect': 'https://trailhead.salesforce.com/credentials/platformdataarchitect',
  'developer-1': 'https://trailhead.salesforce.com/credentials/platformdeveloperi',
  'developer-2': 'https://trailhead.salesforce.com/credentials/platformdeveloperii',
  'education-cloud-consultant': 'https://trailheadacademy.salesforce.com/certificate/exam-education-cld---ED-Con-101',
  'email-specialist': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementspecialist',
  'energy-utilities-ap': 'https://trailhead.salesforce.com/credentials/energyandutilitiescloudaccreditedprofessional',
  'experience-cloud': 'https://trailhead.salesforce.com/credentials/experiencecloudconsultant',
  'heroku-architect': 'https://trailhead.salesforce.com/credentials/herokuarchitect',
  'heroku-developer-ap': 'https://trailhead.salesforce.com/credentials/herokudeveloperaccreditedprofessional',
  'identity-access-management-architect': 'https://trailhead.salesforce.com/credentials/platformidentityandaccessmanagementarchitect',
  'industries-cpq-developer': 'https://trailheadacademy.salesforce.com/certificate/exam-industries-cpq---Ind-Dev-201',
  'integration-architect': 'https://trailhead.salesforce.com/credentials/platformintegrationarchitect',
  'javascript-developer-i': 'https://trailhead.salesforce.com/credentials/javascriptdeveloper',
  'loyalty-management-ap': 'https://trailhead.salesforce.com/credentials/loyaltymanagementaccreditedprofessional',
  'marketing-cloud-advanced-cross-channel-ap': 'https://trailhead.salesforce.com/credentials/marketingcloudadvancedcrosschannelaccreditedprofessional',
  'marketing-cloud-consultant': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementconsultant',
  'marketing-cloud-engagement-admin': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementadministrator',
  'marketing-cloud-engagement-developer': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementdeveloper',
  'marketing-cloud-intelligence-ap': 'https://trailhead.salesforce.com/credentials/marketingcloudintelligenceaccreditedprofessional',
  'marketing-cloud-personalization-ap': 'https://trailhead.salesforce.com/credentials/marketingcloudpersonalizationaccreditedprofessional',
  'media-cloud-ap': 'https://trailhead.salesforce.com/credentials/mediacloudaccreditedprofessional',
  'mulesoft-catalyst-consultant': 'https://trailheadacademy.salesforce.com/certificate/exam-mulesoft-catalyst-consultant---Mule-Con-201',
  'mulesoft-developer-i': 'https://trailhead.salesforce.com/credentials/mulesoftdeveloperi',
  'mulesoft-developer-ii': 'https://trailhead.salesforce.com/credentials/mulesoftdeveloperii',
  'mulesoft-hyperautomation-developer': 'https://trailheadacademy.salesforce.com/certificate/exam-hyperautomation-developer---Mule-Dev-202',
  // 'mulesoft-integration-architect' intentionally absent: the only candidate that
  // resolved was platformintegrationarchitect, which is the Salesforce Platform
  // Integration Architect (exam Plat-Arch-204) — the same page integration-architect
  // already uses. Linking it here would send readers to a different credential.
  'mulesoft-integration-foundations': 'https://trailhead.salesforce.com/credentials/integrationfoundations',
  'net-zero-cloud-ap': 'https://trailhead.salesforce.com/credentials/netzerocloudaccreditedprofessional',
  'nonprofit-success-pack-consultant': 'https://trailheadacademy.salesforce.com/certificate/exam-npsp-consultant---NP-Con-101',
  'omnistudio-consultant': 'https://trailhead.salesforce.com/credentials/omnistudioconsultant',
  'omnistudio-developer': 'https://trailhead.salesforce.com/credentials/omnistudiodeveloper',
  'order-management-admin-ap': 'https://trailhead.salesforce.com/credentials/ordermanagementadministratoraccreditedprofessional',
  'order-management-developer-ap': 'https://trailhead.salesforce.com/credentials/ordermanagementdeveloperaccreditedprofessional',
  'pardot-consultant': 'https://trailheadacademy.salesforce.com/certificate/exam-engagement-consultant---MCAE-Con-201',
  'pardot-specialist': 'https://trailhead.salesforce.com/credentials/marketingcloudaccountengagementspecialist',
  'platform-foundations': 'https://trailhead.salesforce.com/credentials/platformfoundations',
  'process-automation-ap': 'https://trailhead.salesforce.com/credentials/processautomationaccreditedprofessional',
  'revenue-management-consultant': 'https://trailhead.salesforce.com/credentials/revenuemanagementconsultant',
  'sharing-visibility-architect': 'https://trailhead.salesforce.com/credentials/platformsharingandvisibilityarchitect',
  'slack-administrator': 'https://trailhead.salesforce.com/credentials/slackadministrator',
  'slack-consultant': 'https://trailhead.salesforce.com/credentials/slackconsultant',
  'slack-developer': 'https://trailhead.salesforce.com/credentials/slackdeveloper',
  'strategy-designer': 'https://trailhead.salesforce.com/credentials/platformstrategydesigner',
  'system-architect': 'https://trailhead.salesforce.com/credentials/systemarchitect',
  'tableau-architect': 'https://trailhead.salesforce.com/credentials/tableauarchitect',
  'tableau-consultant': 'https://trailhead.salesforce.com/credentials/tableauconsultant',
  'tableau-data-analyst': 'https://trailhead.salesforce.com/credentials/tableaudataanalyst',
  'tableau-desktop-foundations': 'https://trailhead.salesforce.com/credentials/tableaudesktopfoundations',
  'tableau-server-administrator': 'https://trailhead.salesforce.com/credentials/tableauserveradministrator',
  'technical-architect': 'https://trailhead.salesforce.com/credentials/technicalarchitect',
  'technical-architect-review-board': 'https://trailhead.salesforce.com/credentials/architectreviewboard',
  'ux-designer': 'https://trailhead.salesforce.com/credentials/userexperiencedesigner',
  'agentforce-life-sciences-consultant': 'https://trailhead.salesforce.com/credentials/agentforcelifesciences',
  'marketing-cloud-next-consultant': 'https://trailhead.salesforce.com/credentials/marketingcloudnextconsultant',
  'tableau-next-consultant': 'https://trailhead.salesforce.com/credentials/tableaunextconsultant',
  'public-sector-solutions-consultant': 'https://trailhead.salesforce.com/credentials/publicsectorsolutionsconsultant',
  'nonprofit-cloud': 'https://trailheadacademy.salesforce.com/certificate/exam-nonprofit-cld-consultant-npc---NP-Con-102',
  'mulesoft-integration-architect': 'https://trailhead.salesforce.com/credentials/mulesoftintegrationarchitecti',
  'marketing-cloud-engagement-foundations': 'https://trailhead.salesforce.com/credentials/marketingassociate',
  'sales-foundations': 'https://trailhead.salesforce.com/credentials/agfsalesfoundations',
}

/**
 * Salesforce's full certification catalog, for links that have no
 * credential-specific page. The bare trailhead.salesforce.com/credentials
 * URL 301s to the Administrator overview, so it is not a catalog link.
 */
export const SALESFORCE_CERTIFICATION_CATALOG_URL = 'https://trailheadacademy.salesforce.com/all-offerings#f-assetType=Certification'
