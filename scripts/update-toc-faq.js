const fs = require('fs');

const filesToUpdate = [
  'src/app/certifications/administrator-practice-test/page.tsx',
  'src/app/certifications/email-specialist-practice-test/page.tsx',
  'src/app/certifications/crm-analytics-einstein-discovery-consultant/page.tsx',
  'src/app/certifications/agentforce-specialist/page.tsx',
  'src/app/certifications/b2c-solution-architect/page.tsx',
  'src/app/certifications/b2c-commerce-developer/page.tsx',
  'src/app/certifications/b2c-commerce-architect/page.tsx',
  'src/app/certifications/b2b-solution-architect/page.tsx',
  'src/app/certifications/b2b-commerce-developer-ap/page.tsx',
  'src/app/certifications/b2b-commerce-admin-ap/page.tsx',
  'src/app/certifications/advanced-field-service-ap/page.tsx',
  'src/app/certifications/consumer-goods-tpm-ap/page.tsx',
  'src/app/certifications/communications-cloud-ap/page.tsx',
  'src/app/certifications/consumer-goods-cloud-ap/page.tsx',
  'src/app/certifications/contact-center-ap/page.tsx',
  'src/app/certifications/cpq-billing-ap/page.tsx',
  'src/app/certifications/industries-cpq-developer/page.tsx',
  'src/app/certifications/energy-utilities-ap/page.tsx',
  'src/app/certifications/financial-services-cloud-ap/page.tsx',
  'src/app/certifications/health-cloud-ap/page.tsx',
  'src/app/certifications/loyalty-management-ap/page.tsx',
  'src/app/certifications/manufacturing-cloud-ap/page.tsx',
  'src/app/certifications/media-cloud-ap/page.tsx',
  'src/app/certifications/marketing-cloud-advanced-cross-channel-ap/page.tsx',
  'src/app/certifications/marketing-cloud-intelligence-ap/page.tsx',
  'src/app/certifications/marketing-cloud-personalization-ap/page.tsx',
  'src/app/certifications/heroku-developer-ap/page.tsx',
  'src/app/certifications/heroku-architect/page.tsx',
  'src/app/certifications/marketing-cloud-engagement-foundations/page.tsx',
  'src/app/certifications/marketing-cloud-engagement-developer/page.tsx',
  'src/app/certifications/marketing-cloud-engagement-admin/page.tsx',
  'src/app/certifications/mulesoft-hyperautomation-developer/page.tsx',
  'src/app/certifications/mulesoft-catalyst-consultant/page.tsx',
  'src/app/certifications/mulesoft-developer-ii/page.tsx',
  'src/app/certifications/mulesoft-developer-i/page.tsx',
  'src/app/certifications/mulesoft-integration-architect/page.tsx',
  'src/app/certifications/mulesoft-integration-foundations/page.tsx',
  'src/app/certifications/mulesoft-platform-architect/page.tsx',
  'src/app/certifications/net-zero-cloud-ap/page.tsx',
  'src/app/certifications/nonprofit-success-pack-consultant/page.tsx',
  'src/app/certifications/omnistudio-developer/page.tsx',
  'src/app/certifications/omnistudio-consultant/page.tsx',
  'src/app/certifications/order-management-developer-ap/page.tsx',
  'src/app/certifications/order-management-admin-ap/page.tsx',
  'src/app/certifications/public-sector-solutions-ap/page.tsx',
  'src/app/certifications/process-automation-ap/page.tsx',
  'src/app/certifications/tableau-server-administrator/page.tsx',
  'src/app/certifications/tableau-desktop-foundations/page.tsx',
  'src/app/certifications/tableau-data-analyst/page.tsx',
  'src/app/certifications/tableau-consultant/page.tsx',
  'src/app/certifications/tableau-architect/page.tsx',
  'src/app/certifications/slack-developer/page.tsx',
  'src/app/certifications/slack-consultant/page.tsx',
  'src/app/certifications/slack-administrator/page.tsx',
  'src/app/certifications/strategy-designer/page.tsx',
  'src/app/certifications/business-analyst/page.tsx',
  'src/app/certifications/advanced-administrator/page.tsx',
  'src/app/certifications/cpq-administrator/page.tsx',
  'src/app/certifications/nonprofit-cloud/page.tsx',
  'src/app/certifications/education-cloud-consultant/page.tsx',
  'src/app/certifications/sales-foundations/page.tsx',
  'src/app/certifications/pardot-specialist/page.tsx',
  'src/app/certifications/revenue-cloud-consultant/page.tsx',
  'src/app/certifications/pardot-consultant/page.tsx',
  'src/app/certifications/email-specialist/page.tsx',
  'src/app/certifications/technical-architect-review-board/page.tsx',
  'src/app/certifications/technical-architect-evaluation/page.tsx',
  'src/app/certifications/technical-architect/page.tsx',
  'src/app/certifications/identity-access-management-architect/page.tsx',
  'src/app/certifications/dev-lifecycle-deployment-architect/page.tsx',
  'src/app/certifications/sharing-visibility-architect/page.tsx',
  'src/app/certifications/system-architect/page.tsx',
  'src/app/certifications/data-cloud-consultant/page.tsx',
  'src/app/certifications/developer-2/page.tsx',
  'src/app/certifications/marketing-cloud-consultant/page.tsx',
  'src/app/certifications/integration-architect/page.tsx',
  'src/app/certifications/field-service/page.tsx',
  'src/app/certifications/experience-cloud/page.tsx',
  'src/app/certifications/data-architect/page.tsx',
  'src/app/certifications/application-architect/page.tsx',
  'src/app/certifications/javascript-developer-i/page.tsx',
  'src/app/certifications/ai-associate/page.tsx',
  'src/app/certifications/platform-foundations/page.tsx',
  'src/app/certifications/ux-designer/page.tsx',
];

let updated = 0;
let skipped = 0;

filesToUpdate.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only update TOC if FAQ is present but not in TOC
    if (content.includes('CertPageFaq') && !content.includes("id: 'faq'")) {
      // Pattern: { id: 'related-certs', title: 'Related Certifications' }, followed by closing bracket
      const tocPattern = /(\{ id: 'related-certs', title: 'Related Certifications' \})(\s*,\s*\n\s*)?(\])/;
      if (tocPattern.test(content)) {
        content = content.replace(
          tocPattern,
          "$1,\n              { id: 'faq', title: 'Frequently Asked Questions' }$3"
        );
        fs.writeFileSync(filePath, content, 'utf8');
        updated++;
        console.log(`✓ Updated TOC in ${filePath}`);
      } else {
        skipped++;
        console.log(`- Could not find TOC pattern in ${filePath}`);
      }
    } else {
      skipped++;
    }
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message);
  }
});

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
