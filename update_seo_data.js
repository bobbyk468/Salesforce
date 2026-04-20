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

// 1. ctrTitleOverrides
const titleOverridesRegex = /const ctrTitleOverrides: Record<string, string> = \{([\s\S]*?)\n  \}/;
let titleMatch = content.match(titleOverridesRegex);
if (titleMatch) {
  let lines = titleMatch[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let m = line.match(/^\s*'?([a-z0-9-]+)'?\s*:/);
    if (m) {
      let slug = m[1];
      if (skipSlugs.includes(slug)) continue;
      
      let name = formatName(slug);
      let newTitle = `Free ${name} Practice Exam 2026`;
      if (newTitle.length > 60) newTitle = newTitle.substring(0, 60);
      
      // replace anything after the colon up to the comma or end of line
      lines[i] = line.replace(/:\s*`.*?`/, `: \`${newTitle}\``)
                     .replace(/:\s*'.*?'/, `: \`${newTitle}\``)
                     .replace(/:\s*".*?"/, `: \`${newTitle}\``);
    }
  }
  content = content.replace(titleMatch[1], lines.join('\n'));
}

// 2. ctrDescriptionOverrides
const descOverridesRegex = /const ctrDescriptionOverrides: Record<string, string> = \{([\s\S]*?)\n  \}/;
let descMatch = content.match(descOverridesRegex);
if (descMatch) {
  let lines = descMatch[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let m = line.match(/^\s*'?([a-z0-9-]+)'?\s*:/);
    if (m) {
      let slug = m[1];
      if (skipSlugs.includes(slug)) continue;
      
      let name = formatName(slug);
      let log = getLogistics(slug);
      let cost = getCost(slug);
      let passScoreStr = log.passingScore.includes('%') ? log.passingScore : log.passingScore + '%';
      if (!passScoreStr.includes('~')) passScoreStr = '~' + passScoreStr;
      let durationStr = log.duration.includes('min') ? log.duration : log.duration + ' min';
      
      let newDesc = `Free ${name} practice exam: ${log.questions} questions, ${passScoreStr} passing score, ${durationStr}. ${cost} fee. 2026 study guide with exam tips & detailed explanations included.`;
      
      // It might span multiple lines if broken by prettier, but the current file seems to have them mostly on one line or two.
      // Let's replace anything from colon to end.
      // If it spans multiple lines, we might need a better regex.
    }
  }
}

// Actually, writing it using a simple replacer string
// Replace for ctrDescriptionOverrides and templates
function replaceDescriptionsInObject(regexPattern) {
  let matchObj = content.match(regexPattern);
  if (matchObj) {
    let rawObjStr = matchObj[1];
    
    // We can use a regex to match each key-value pair.
    // e.g. /'?(slug)'?\s*:\s*(`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")/g
    for (let slug of Object.keys(slugToName)) {
      if (skipSlugs.includes(slug)) continue;
      
      let name = formatName(slug);
      let log = getLogistics(slug);
      let cost = getCost(slug);
      let passScoreStr = log.passingScore.includes('%') ? log.passingScore : log.passingScore + '%';
      if (!passScoreStr.includes('~')) passScoreStr = '~' + passScoreStr;
      let durationStr = log.duration.includes('min') ? log.duration : log.duration + ' min';
      
      let newDesc = `Free ${name} practice exam: ${log.questions} questions, ${passScoreStr} passing score, ${durationStr}. ${cost} fee. 2026 study guide with exam tips & detailed explanations included.`;
      
      let keyValRegex = new RegExp(`^(\\s*'?${slug}'?\\s*:\\s*)(?:(?:\\\`[\\s\\S]*?\\\`)|(?:'[\\s\\S]*?')|(?:"[\\s\\S]*?"))(,?)$`, 'm');
      rawObjStr = rawObjStr.replace(keyValRegex, `$1\`${newDesc}\`$2`);
    }
    content = content.replace(matchObj[1], rawObjStr);
  }
}

replaceDescriptionsInObject(/const ctrDescriptionOverrides: Record<string, string> = \{([\s\S]*?)\n  \}/);
replaceDescriptionsInObject(/const templates: Record<string, string> = \{([\s\S]*?)\n  \}/);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update robust complete!');
