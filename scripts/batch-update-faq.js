const fs = require('fs');
const path = require('path');

// List of files that need updating (excluding already updated ones)
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
let errors = 0;

filesToUpdate.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Update import statement
    if (content.includes("import CertPageSeo from '@/components/CertPageSeo'") && 
        !content.includes("import CertPageSeo, { CertPageFaq }")) {
      content = content.replace(
        /import CertPageSeo from '@\/components\/CertPageSeo'/g,
        "import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'"
      );
      modified = true;
    }

    // 2. Add FAQ section after RelatedCertifications
    // Pattern: find </div> after RelatedCertifications and add FAQ before closing the main content div
    if (content.includes('<RelatedCertifications') && !content.includes('<CertPageFaq')) {
      // Look for the pattern: <div id="related-certs">...</div> followed by </div> (closing main content)
      const relatedCertsPattern = /(\s*<div id="related-certs">\s*<RelatedCertifications[^>]*\/>\s*<\/div>)(\s*<\/div>)/;
      if (relatedCertsPattern.test(content)) {
        content = content.replace(
          relatedCertsPattern,
          `$1\n\n          {/* FAQ section - rendered after H1 for proper SEO structure */}\n          <div id="faq">\n            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />\n          </div>$2`
        );
        modified = true;
      } else {
        // Try alternative pattern without id="related-certs"
        const altPattern = /(\s*<RelatedCertifications[^>]*\/>\s*<\/div>)(\s*<\/div>\s*<\/div>\s*\{\/\* Sidebar)/;
        if (altPattern.test(content)) {
          content = content.replace(
            altPattern,
            `$1\n\n          {/* FAQ section - rendered after H1 for proper SEO structure */}\n          <div id="faq">\n            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />\n          </div>$2`
          );
          modified = true;
        }
      }
    }

    // 3. Add FAQ to TOC sections
    if (content.includes('CertTableOfContents') && !content.includes("id: 'faq'")) {
      // Find the sections array and add FAQ entry before the closing bracket
      // Handle both patterns: closing bracket on same line or different line
      const tocPattern1 = /(\{ id: 'related-certs', title: 'Related Certifications' \})(\s*\])/;
      const tocPattern2 = /(\{ id: 'related-certs', title: 'Related Certifications' \})(\s*\n\s*\])/;
      if (tocPattern1.test(content)) {
        content = content.replace(
          tocPattern1,
          "$1,\n              { id: 'faq', title: 'Frequently Asked Questions' }$2"
        );
        modified = true;
      } else if (tocPattern2.test(content)) {
        content = content.replace(
          tocPattern2,
          "$1,\n              { id: 'faq', title: 'Frequently Asked Questions' }$2"
        );
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
      console.log(`✓ Updated ${filePath}`);
    } else {
      skipped++;
      console.log(`- Skipped ${filePath} (already updated or pattern not found)`);
    }
  } catch (error) {
    errors++;
    console.error(`✗ Error updating ${filePath}:`, error.message);
  }
});

console.log(`\n=== Summary ===`);
console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors}`);
