import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/lib/cert-seo-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const titleUpdates = {
  'app-builder': 'Free Salesforce App Builder Practice (DEV-402) | 60 Questions',
  'sales-cloud': 'Sales Cloud Consultant Exam: Free Practice & 2026 Study',
  'marketing-cloud-consultant': 'Pass Marketing Cloud Consultant: Free Exam Practice',
  'business-analyst': 'Salesforce Business Analyst Exam: Free Practice 2026',
  'pardot-consultant': 'Free Pardot Consultant Practice (2026) | 68% Pass Score',
  'cpq-administrator': 'Free Salesforce CPQ Admin Practice Exam (2026)',
  'experience-cloud': 'Free Experience Cloud Consultant Practice (2026)',
  'integration-architect': 'Integration Architect Exam: Study Guide & Practice',
  'data-architect': 'Data Architect Exam: Study Guide & Practice Questions',
  'system-architect': 'System Architect Exam: Study Guide & Domain Weights'
};

const descUpdates = {
  'app-builder': 'Free Salesforce App Builder (DEV-402) practice: 60 questions, 105 min exam, ~65% passing score. 2026 study guide with detailed explanations. Pass today!',
  'sales-cloud': 'Free Sales Cloud Consultant practice exam (60 questions, 68% passing score). $200 fee, 105-min exam. Get 2026 study guide, tips, and pass on first try.',
  'marketing-cloud-consultant': 'Free Marketing Cloud Consultant practice: 60 questions, 67% passing score. $200 exam fee, 105 min. Get 2026 study guide with exam tips. Start free now!',
  'business-analyst': 'Free Business Analyst exam practice (60 questions, ~65% passing score, 105 min). $200 fee. 2026 study guide with practice questions & exam tips included.',
  'pardot-consultant': 'Free Pardot Consultant practice exam: 60 questions, 68% passing score, 105 min. $200 fee. 2026 study guide with exam topics & strategic tips included.',
  'cpq-administrator': 'Free CPQ Administrator practice (60 questions, ~65% passing score, 105 min). $200 exam fee. Get 2026 study guide with practice questions & exam tips now.',
  'experience-cloud': 'Free Experience Cloud Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 exam fee. 2026 study guide with practice questions included.',
  'integration-architect': 'Free Integration Architect practice: 60 questions, ~68% passing score, 120 min. $400 exam fee, 2026 study guide. Prerequisites: App & System Architect.',
  'data-architect': 'Free Data Architect practice: 60 questions, ~68% passing score, 120 min. $400 fee. 2026 study guide. Prerequisites: Application & System Architect certs.',
  'system-architect': 'Free System Architect practice: 60 questions, ~68% passing score, 120 min. $400 exam fee. 2026 study guide with domain weights breakdown & prep tips.'
};

// Replace titles in ctrTitleOverrides
for (const [slug, newTitle] of Object.entries(titleUpdates)) {
  const regex = new RegExp(`('${slug}'|${slug.includes('-') ? `'${slug}'` : slug})\\s*:\\s*\`[^\`]*\``, 'g');
  if (content.match(regex)) {
    content = content.replace(regex, `'${slug}': \`${newTitle}\``);
  } else {
    // try matching double quotes or single quotes
    const regex2 = new RegExp(`('${slug}'|${slug.includes('-') ? `'${slug}'` : slug})\\s*:\\s*['"][^'\"]*['"]`, 'g');
    if (content.match(regex2)) {
      content = content.replace(regex2, `'${slug}': \`${newTitle}\``);
    } else {
      console.log(`Could not find title for ${slug}`);
    }
  }
}

// For descriptions, they might be in ctrDescriptionOverrides or further down in the fallback switch/map
for (const [slug, newDesc] of Object.entries(descUpdates)) {
  const regex = new RegExp(`('${slug}'|${slug.includes('-') ? `'${slug}'` : slug})\\s*:\\s*\`[^\`]*\``, 'g');
  let matched = false;
  if (content.match(regex)) {
    content = content.replace(regex, `'${slug}':\n      '${newDesc.replace(/'/g, "\\'")}'`);
    matched = true;
  }
  
  const regex2 = new RegExp(`('${slug}'|${slug.includes('-') ? `'${slug}'` : slug})\\s*:\\s*['"][^'\"]*['"]`, 'g');
  if (content.match(regex2)) {
    content = content.replace(regex2, `'${slug}':\n      '${newDesc.replace(/'/g, "\\'")}'`);
    matched = true;
  }
  
  if (!matched) {
    console.log(`Could not find desc for ${slug}`);
  }
}

fs.writeFileSync(filePath, content);
console.log('Successfully updated cert-seo-data.ts');
