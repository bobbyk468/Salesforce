#!/usr/bin/env node
/**
 * Script to batch update certification pages with improved UI
 * This script updates pages that still have max-w-5xl to use the new layout
 */

const fs = require('fs');
const path = require('path');

const CERTIFICATIONS_DIR = path.join(__dirname, '../src/app/certifications');

// Files to exclude (role pages, index page, practice test pages)
const EXCLUDE_PATTERNS = [
  'role',
  '/page.tsx', // index page
  'practice-test',
];

function shouldUpdate(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already updated
  if (content.includes('CertTableOfContents')) {
    return false;
  }
  
  // Skip if doesn't have the old pattern
  if (!content.includes('max-w-5xl mx-auto px-4 py-12')) {
    return false;
  }
  
  // Skip excluded patterns
  return !EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add CertTableOfContents import
  if (!content.includes("import CertTableOfContents")) {
    content = content.replace(
      /import RelatedCertifications from '@/components\/RelatedCertifications'/,
      "import RelatedCertifications from '@/components/RelatedCertifications'\nimport CertTableOfContents from '@/components/CertTableOfContents'"
    );
  }
  
  // Replace max-w-5xl with max-w-7xl
  content = content.replace(
    /max-w-5xl mx-auto px-4 py-12/g,
    'max-w-7xl mx-auto px-4 py-12'
  );
  
  // This is a simplified version - the full transformation requires more complex regex
  // For now, we'll do manual updates for the remaining files
  return content;
}

// Find all page.tsx files
function findCertPages(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

const allPages = findCertPages(CERTIFICATIONS_DIR);
const pagesToUpdate = allPages.filter(shouldUpdate);

console.log(`Found ${pagesToUpdate.length} pages to update`);
console.log('Pages:', pagesToUpdate.map(p => path.relative(CERTIFICATIONS_DIR, p)).join('\n'));
