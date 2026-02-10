const fs = require('fs')
const path = require('path')

const certsDir = path.join(__dirname, '../src/app/certifications')

// Get all certification page directories
const certDirs = fs.readdirSync(certsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'role')
  .map(dirent => dirent.name)

console.log(`Found ${certDirs.length} certification pages to update`)

let updated = 0
let skipped = 0

for (const certSlug of certDirs) {
  const pagePath = path.join(certsDir, certSlug, 'page.tsx')
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠️  Skipping ${certSlug}: page.tsx not found`)
    skipped++
    continue
  }
  
  let content = fs.readFileSync(pagePath, 'utf8')
  let modified = false
  
  // 1. Add imports if not present
  if (!content.includes("import CertPageCta")) {
    const importPattern = /import CertPageIntro from '@\/components\/CertPageIntro'/
    if (importPattern.test(content)) {
      content = content.replace(
        importPattern,
        `import CertPageIntro from '@/components/CertPageIntro'\nimport CertPageCta from '@/components/CertPageCta'\nimport ExamFeesSection from '@/components/ExamFeesSection'`
      )
      modified = true
    }
  }
  
  // 2. Add CTA after CertPageIntro (before grid)
  if (!content.includes('<CertPageCta')) {
    // Find the pattern: CertPageIntro followed by grid or div
    const introPattern = /(<CertPageIntro[^>]*\/>)\s*\n\s*(<div className="grid|<\/div>)/s
    if (introPattern.test(content)) {
      content = content.replace(
        introPattern,
        `$1\n        \n        {/* Prominent CTA above fold */}\n        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />\n        \n        $2`
      )
      modified = true
    } else {
      // Try alternative pattern: CertPageIntro followed by any whitespace and then grid
      const altPattern = /(<CertPageIntro[^>]*\/>)\s*\n\s*<div className="grid/g
      if (altPattern.test(content)) {
        content = content.replace(
          altPattern,
          `$1\n        \n        {/* Prominent CTA above fold */}\n        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />\n        \n        <div className="grid`
        )
        modified = true
      }
    }
  }
  
  // 3. Add ExamFeesSection before CertificationCard
  if (!content.includes('<ExamFeesSection')) {
    // Find CertificationCard opening tag
    const cardPattern = /(<div className="lg:col-span-3">)\s*\n\s*(<CertificationCard)/s
    if (cardPattern.test(content)) {
      content = content.replace(
        cardPattern,
        `$1\n            {/* Exam Fees & Registration section */}\n            <ExamFeesSection slug={slug} />\n            \n            $2`
      )
      modified = true
    }
  }
  
  if (modified) {
    fs.writeFileSync(pagePath, content, 'utf8')
    console.log(`✅ Updated ${certSlug}`)
    updated++
  } else {
    console.log(`⏭️  Skipped ${certSlug} (already has components or pattern not found)`)
    skipped++
  }
}

console.log(`\n✅ Updated: ${updated}`)
console.log(`⏭️  Skipped: ${skipped}`)
console.log(`📊 Total: ${certDirs.length}`)
