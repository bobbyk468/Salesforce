const fs = require('fs')
const path = require('path')

const certsDir = path.join(__dirname, '../src/app/certifications')
const dirs = fs.readdirSync(certsDir).filter((d) => {
  const full = path.join(certsDir, d)
  return fs.statSync(full).isDirectory() && d !== 'role'
})

let updated = 0
for (const dir of dirs) {
  const pagePath = path.join(certsDir, dir, 'page.tsx')
  if (!fs.existsSync(pagePath)) continue
  let content = fs.readFileSync(pagePath, 'utf8')
  if (content.includes('CertPageIntro')) continue
  if (!content.includes('CertPageSeo')) continue

  // Add import after CertPageSeo import
  if (!content.includes("from '@/components/CertPageIntro'")) {
    content = content.replace(
      /(import CertPageSeo from '@\/components\/CertPageSeo')\n/,
      "$1\nimport CertPageIntro from '@/components/CertPageIntro'\n"
    )
  }

  // Add <CertPageIntro slug={slug} /> after <CertPageSeo ... />
  content = content.replace(
    /(<CertPageSeo slug=\{slug\} certTitle=\{slugToDisplayName\(slug\)\} \/>)\n(\s+)(<CertificationCard|<script|<\/script>|<ExamPrepContent)/,
    '$1\n$2<CertPageIntro slug={slug} />\n$2$3'
  )

  fs.writeFileSync(pagePath, content)
  updated++
  console.log('Updated:', dir)
}

console.log('Total updated:', updated)
