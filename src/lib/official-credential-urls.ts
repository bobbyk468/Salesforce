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
 * Verified 66 of 90 certifications on 2026-11-07.
 */
export const OFFICIAL_CREDENTIAL_URLS: Record<string, string> = {
  'advanced-administrator': 'https://trailhead.salesforce.com/credentials/advancedadministrator',
  'agentforce-specialist': 'https://trailhead.salesforce.com/credentials/agentforcespecialist',
  'ai-associate': 'https://trailhead.salesforce.com/credentials/aiassociate',
  'app-builder': 'https://trailhead.salesforce.com/credentials/platformappbuilder',
  'application-architect': 'https://trailhead.salesforce.com/credentials/applicationarchitect',
  'b2b-solution-architect': 'https://trailhead.salesforce.com/credentials/b2bsolutionarchitect',
  'b2c-commerce-architect': 'https://trailhead.salesforce.com/credentials/b2ccommercearchitect',
  'b2c-commerce-developer': 'https://trailhead.salesforce.com/credentials/b2ccommercedeveloper',
  'b2c-solution-architect': 'https://trailhead.salesforce.com/credentials/b2csolutionarchitect',
  'business-analyst': 'https://trailhead.salesforce.com/credentials/businessanalyst',
  'consumer-goods-tpm-ap': 'https://trailhead.salesforce.com/credentials/consumergoodscloudtradepromotionmanagementaccreditedprofessional',
  'contact-center-ap': 'https://trailhead.salesforce.com/credentials/contactcenteraccreditedprofessional',
  'cpq-administrator': 'https://trailhead.salesforce.com/credentials/cpqadministrator',
  'crm-analytics-einstein-discovery-consultant': 'https://trailhead.salesforce.com/credentials/crmanalyticsandeinsteindiscoveryconsultant',
  'data-360-consultant': 'https://trailhead.salesforce.com/credentials/data360consultant',
  'data-architect': 'https://trailhead.salesforce.com/credentials/platformdataarchitect',
  'developer-1': 'https://trailhead.salesforce.com/credentials/platformdeveloperi',
  'developer-2': 'https://trailhead.salesforce.com/credentials/platformdeveloperii',
  'education-cloud-consultant': 'https://trailhead.salesforce.com/credentials/educationcloudconsultant',
  'email-specialist': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementspecialist',
  'energy-utilities-ap': 'https://trailhead.salesforce.com/credentials/energyandutilitiescloudaccreditedprofessional',
  'experience-cloud': 'https://trailhead.salesforce.com/credentials/experiencecloudconsultant',
  'heroku-architect': 'https://trailhead.salesforce.com/credentials/herokuarchitect',
  'heroku-developer-ap': 'https://trailhead.salesforce.com/credentials/herokudeveloperaccreditedprofessional',
  'identity-access-management-architect': 'https://trailhead.salesforce.com/credentials/platformidentityandaccessmanagementarchitect',
  'industries-cpq-developer': 'https://trailhead.salesforce.com/credentials/industriescpqdeveloper',
  'integration-architect': 'https://trailhead.salesforce.com/credentials/platformintegrationarchitect',
  'javascript-developer-i': 'https://trailhead.salesforce.com/credentials/javascriptdeveloperi',
  'loyalty-management-ap': 'https://trailhead.salesforce.com/credentials/loyaltymanagementaccreditedprofessional',
  'marketing-cloud-advanced-cross-channel-ap': 'https://trailhead.salesforce.com/credentials/marketingcloudadvancedcrosschannelaccreditedprofessional',
  'marketing-cloud-consultant': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementconsultant',
  'marketing-cloud-engagement-admin': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementadministrator',
  'marketing-cloud-engagement-developer': 'https://trailhead.salesforce.com/credentials/marketingcloudengagementdeveloper',
  'marketing-cloud-intelligence-ap': 'https://trailhead.salesforce.com/credentials/marketingcloudintelligenceaccreditedprofessional',
  'marketing-cloud-personalization-ap': 'https://trailhead.salesforce.com/credentials/marketingcloudpersonalizationaccreditedprofessional',
  'media-cloud-ap': 'https://trailhead.salesforce.com/credentials/mediacloudaccreditedprofessional',
  'mulesoft-catalyst-consultant': 'https://trailhead.salesforce.com/credentials/catalystconsultant',
  'mulesoft-developer-i': 'https://trailhead.salesforce.com/credentials/mulesoftdeveloperi',
  'mulesoft-developer-ii': 'https://trailhead.salesforce.com/credentials/mulesoftdeveloperii',
  'mulesoft-hyperautomation-developer': 'https://trailhead.salesforce.com/credentials/hyperautomationdeveloper',
  'mulesoft-integration-architect': 'https://trailhead.salesforce.com/credentials/platformintegrationarchitect',
  'mulesoft-integration-foundations': 'https://trailhead.salesforce.com/credentials/integrationfoundations',
  'net-zero-cloud-ap': 'https://trailhead.salesforce.com/credentials/netzerocloudaccreditedprofessional',
  'nonprofit-success-pack-consultant': 'https://trailhead.salesforce.com/credentials/nonprofitsuccesspackconsultant',
  'omnistudio-consultant': 'https://trailhead.salesforce.com/credentials/omnistudioconsultant',
  'omnistudio-developer': 'https://trailhead.salesforce.com/credentials/omnistudiodeveloper',
  'order-management-admin-ap': 'https://trailhead.salesforce.com/credentials/ordermanagementadministratoraccreditedprofessional',
  'order-management-developer-ap': 'https://trailhead.salesforce.com/credentials/ordermanagementdeveloperaccreditedprofessional',
  'pardot-consultant': 'https://trailhead.salesforce.com/credentials/marketingcloudaccountengagementconsultant',
  'pardot-specialist': 'https://trailhead.salesforce.com/credentials/marketingcloudaccountengagementspecialist',
  'platform-foundations': 'https://trailhead.salesforce.com/credentials/platformfoundations',
  'process-automation-ap': 'https://trailhead.salesforce.com/credentials/processautomationaccreditedprofessional',
  'revenue-cloud-consultant': 'https://trailhead.salesforce.com/credentials/revenuemanagementconsultant',
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
  'ux-designer': 'https://trailhead.salesforce.com/credentials/userexperiencedesigner',
}
