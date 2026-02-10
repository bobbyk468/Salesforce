const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all certification page.tsx files
const certPages = glob.sync('src/app/certifications/**/page.tsx', {
  ignore: ['**/role/**', '**/page.tsx'] // Exclude role pages and the main certifications index
});

console.log(`Found ${certPages.length} certification pages to update`);

certPages.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Update import to include CertPageFaq
  if (content.includes("import CertPageSeo from '@/components/CertPageSeo'") && 
      !content.includes("import CertPageSeo, { CertPageFaq }")) {
    content = content.replace(
      "import CertPageSeo from '@/components/CertPageSeo'",
      "import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'"
    );
    modified = true;
  }

  // 2. Add FAQ section after RelatedCertifications
  if (content.includes('<RelatedCertifications') && !content.includes('<CertPageFaq')) {
    // Find the closing div after RelatedCertifications
    const relatedCertsPattern = /(\s*<div id="related-certs">\s*<RelatedCertifications[^>]*\/>\s*<\/div>)/;
    if (relatedCertsPattern.test(content)) {
      content = content.replace(
        relatedCertsPattern,
        `$1\n\n            {/* FAQ section - rendered after H1 for proper SEO structure */}\n            <div id="faq">\n              <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />\n            </div>`
      );
      modified = true;
    }
  }

  // 3. Add FAQ to TOC sections if TOC exists
  if (content.includes('CertTableOfContents') && !content.includes("id: 'faq'")) {
    // Find the sections array and add FAQ entry
    const tocPattern = /(sections=\{[^}]*)(\{ id: 'related-certs', title: 'Related Certifications' \})/;
    if (tocPattern.test(content)) {
      content = content.replace(
        tocPattern,
        "$1$2,\n                { id: 'faq', title: 'Frequently Asked Questions' },"
      );
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${filePath}`);
  } else {
    console.log(`- Skipped ${filePath} (already updated or pattern not found)`);
  }
});

console.log('\nDone!');
