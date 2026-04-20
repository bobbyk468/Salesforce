const fs = require('fs');

const filePath = 'src/lib/cert-seo-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

const skipSlugs = [
  'app-builder',
  'sales-cloud',
  'marketing-cloud-consultant',
  'business-analyst',
  'pardot-consultant',
  'cpq-administrator',
  'experience-cloud',
  'integration-architect',
  'data-architect',
  'system-architect'
];

function getLogistics(slug) {
  const match = content.match(new RegExp(`'?${slug}'?\\s*:\\s*\\{\\s*questions:\\s*(.*?)\\s*,\\s*passingScore:\\s*'(.*?)'\\s*,\\s*duration:\\s*'(.*?)'\\s*\\}`));
  if (match) {
    return { questions: match[1].replace(/'/g, ''), passingScore: match[2].replace(/~/g, ''), duration: match[3] };
  }
  return { questions: '60', passingScore: '65%', duration: '105 min' };
}

function getCost(slug) {
  const match = content.match(new RegExp(`'?${slug}'?\\s*:\\s*'(\\$[0-9]+)'`));
  if (match) return match[1];
  return '$200';
}

const slugToName = {
  'administrator': 'ADM-201',
  'advanced-administrator': 'ADM-211 Advanced Admin',
  'email-specialist': 'Email Specialist',
  'mulesoft-hyperautomation-developer': 'MuleSoft Hyperautomation',
  'sharing-visibility-architect': 'Sharing & Visibility Arch',
  'identity-access-management-architect': 'Identity & Access Arch',
  'developer-2': 'Platform Developer II (PD2)',
  'pardot-specialist': 'Pardot Specialist',
  'mulesoft-integration-foundations': 'MuleSoft Foundations',
  'developer-1': 'Platform Developer I (PD1)',
  'slack-developer': 'Slack Developer',
  'tableau-data-analyst': 'Tableau Data Analyst',
  'technical-architect-review-board': 'CTA Review Board',
  'technical-architect': 'Technical Architect (CTA)',
  'application-architect': 'Application Architect',
  'administrator-practice-test': 'ADM-201 Practice Test',
  'advanced-field-service-ap': 'Advanced Field Service AP',
  'agentforce-specialist': 'Agentforce Specialist',
  'ai-associate': 'AI Associate',
  'b2b-commerce-admin-ap': 'B2B Commerce Admin AP',
  'b2b-commerce-developer-ap': 'B2B Commerce Dev AP',
  'b2b-solution-architect': 'B2B Solution Architect',
  'b2c-commerce-architect': 'B2C Commerce Architect',
  'b2c-commerce-developer': 'B2C Commerce Developer',
  'b2c-solution-architect': 'B2C Solution Architect',
  'communications-cloud-ap': 'Communications Cloud AP',
  'consumer-goods-cloud-ap': 'Consumer Goods Cloud AP',
  'consumer-goods-tpm-ap': 'Consumer Goods TPM AP',
  'contact-center-ap': 'Contact Center AP',
  'cpq-billing-ap': 'CPQ & Billing AP',
  'crm-analytics-einstein-discovery-consultant': 'CRM Analytics',
  'data-cloud-consultant': 'Data Cloud Consultant',
  'dev-lifecycle-deployment-architect': 'Dev Lifecycle Arch',
  'education-cloud-consultant': 'Education Cloud Consult',
  'email-specialist-practice-test': 'Email Spec Practice',
  'energy-utilities-ap': 'Energy & Utilities AP',
  'field-service': 'Field Service Consultant',
  'financial-services-cloud-ap': 'Financial Services AP',
  'health-cloud-ap': 'Health Cloud AP',
  'heroku-architect': 'Heroku Architect',
  'heroku-developer-ap': 'Heroku Developer AP',
  'industries-cpq-developer': 'Industries CPQ Developer',
  'javascript-developer-i': 'JavaScript Developer I',
  'lightning-web-components-specialist': 'LWC Specialist',
  'loyalty-management-ap': 'Loyalty Management AP',
  'manufacturing-cloud-ap': 'Manufacturing Cloud AP',
  'marketing-cloud-advanced-cross-channel-ap': 'MC Cross Channel AP',
  'marketing-cloud-engagement-admin': 'MC Engagement Admin',
  'marketing-cloud-engagement-developer': 'MC Engagement Dev',
  'marketing-cloud-engagement-foundations': 'MC Foundations',
  'marketing-cloud-intelligence-ap': 'MC Intelligence AP',
  'marketing-cloud-personalization-ap': 'MC Personalization AP',
  'media-cloud-ap': 'Media Cloud AP',
  'mulesoft-catalyst-consultant': 'MuleSoft Catalyst Consult',
  'mulesoft-developer-i': 'MuleSoft Developer I',
  'mulesoft-developer-ii': 'MuleSoft Developer II',
  'mulesoft-integration-architect': 'MuleSoft Integration Arch',
  'mulesoft-platform-architect': 'MuleSoft Platform Arch',
  'net-zero-cloud-ap': 'Net Zero Cloud AP',
  'nonprofit-cloud': 'Nonprofit Cloud Consult',
  'nonprofit-success-pack-consultant': 'NPSP Consultant',
  'omnistudio-consultant': 'OmniStudio Consultant',
  'omnistudio-developer': 'OmniStudio Developer',
  'order-management-admin-ap': 'Order Mgmt Admin AP',
  'order-management-developer-ap': 'Order Mgmt Dev AP',
  'platform-foundations': 'Platform Foundations',
  'process-automation-ap': 'Process Automation AP',
  'public-sector-solutions-ap': 'Public Sector AP',
  'revenue-cloud-consultant': 'Revenue Cloud Consult',
  'sales-foundations': 'Sales Foundations',
  'service-cloud': 'Service Cloud Consultant',
  'slack-administrator': 'Slack Administrator',
  'slack-consultant': 'Slack Consultant',
  'strategy-designer': 'Strategy Designer',
  'tableau-architect': 'Tableau Architect',
  'tableau-consultant': 'Tableau Consultant',
  'tableau-desktop-foundations': 'Tableau Desktop Found.',
  'tableau-server-administrator': 'Tableau Server Admin',
  'technical-architect-evaluation': 'CTA Evaluation',
  'ux-designer': 'UX Designer'
};

function formatName(slug) {
  let name = slugToName[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  if (name.length > 35) name = name.substring(0, 35).trim();
  return name;
}

const allSlugsToUpdate = Object.keys(slugToName).filter(s => !skipSlugs.includes(s));

// Update ctrTitleOverrides
let titleOverridesMatch = content.match(/const ctrTitleOverrides: Record<string, string> = \{([\s\S]*?)\n  \}/);
if (titleOverridesMatch) {
  let rawStr = titleOverridesMatch[1];
  for (let slug of allSlugsToUpdate) {
    let name = formatName(slug);
    let newTitle = `Free ${name} Practice Exam 2026`;
    if (newTitle.length > 60) newTitle = newTitle.substring(0, 60);

    let regex = new RegExp(`^(\\s*'?${slug}'?\\s*:\\s*)(?:\`[\\s\\S]*?\`|'[\\s\\S]*?'|"[\\s\\S]*?")(,?)$`, 'm');
    rawStr = rawStr.replace(regex, (match, p1, p2) => `${p1}\`${newTitle}\`${p2}`);
  }
  content = content.replace(titleOverridesMatch[1], rawStr);
}

// Update ctrDescriptionOverrides
let descOverridesMatch = content.match(/const ctrDescriptionOverrides: Record<string, string> = \{([\s\S]*?)\n  \}/);
if (descOverridesMatch) {
  let rawStr = descOverridesMatch[1];
  for (let slug of allSlugsToUpdate) {
    let name = formatName(slug);
    let log = getLogistics(slug);
    let cost = getCost(slug);
    let passScoreStr = log.passingScore.includes('%') ? log.passingScore : log.passingScore + '%';
    if (!passScoreStr.includes('~')) passScoreStr = '~' + passScoreStr;
    let durationStr = log.duration.includes('min') ? log.duration : log.duration + ' min';

    let newDesc = `Free ${name} practice exam: ${log.questions} questions, ${passScoreStr} passing score, ${durationStr}. ${cost} fee. 2026 study guide with exam tips & detailed explanations included.`;

    let regex = new RegExp(`^(\\s*'?${slug}'?\\s*:\\s*)(?:\`[\\s\\S]*?\`|'[\\s\\S]*?'|"[\\s\\S]*?")(,?)$`, 'm');
    rawStr = rawStr.replace(regex, (match, p1, p2) => `${p1}\`${newDesc}\`${p2}`);
  }
  content = content.replace(descOverridesMatch[1], rawStr);
}

// Update templates
let templatesMatch = content.match(/const templates: Record<string, string> = \{([\s\S]*?)\n  \}/);
if (templatesMatch) {
  let rawStr = templatesMatch[1];
  for (let slug of allSlugsToUpdate) {
    let name = formatName(slug);
    let log = getLogistics(slug);
    let cost = getCost(slug);
    let passScoreStr = log.passingScore.includes('%') ? log.passingScore : log.passingScore + '%';
    if (!passScoreStr.includes('~')) passScoreStr = '~' + passScoreStr;
    let durationStr = log.duration.includes('min') ? log.duration : log.duration + ' min';

    let newDesc = `Free ${name} practice exam: ${log.questions} questions, ${passScoreStr} passing score, ${durationStr}. ${cost} fee. 2026 study guide with exam tips & detailed explanations included.`;

    let regex = new RegExp(`^(\\s*'?${slug}'?\\s*:\\s*)(?:\`[\\s\\S]*?\`|'[\\s\\S]*?'|"[\\s\\S]*?")(,?)$`, 'm');
    rawStr = rawStr.replace(regex, (match, p1, p2) => `${p1}\`${newDesc}\`${p2}`);
  }
  content = content.replace(templatesMatch[1], rawStr);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete safely!');
