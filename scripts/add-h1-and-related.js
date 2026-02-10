const fs = require('fs')
const path = require('path')

const certsDir = path.join(__dirname, '../src/app/certifications')
const dirs = fs.readdirSync(certsDir).filter((d) => {
  const full = path.join(certsDir, d)
  return fs.statSync(full).isDirectory() && d !== 'role'
})

let h1Added = 0
let relatedAdded = 0

for (const dir of dirs) {
  const pagePath = path.join(certsDir, dir, 'page.tsx')
  if (!fs.existsSync(pagePath)) continue
  let content = fs.readFileSync(pagePath, 'utf8')

  if (!content.includes('CertificationCard') || !content.includes('examSections=')) continue

  if (!content.includes('getCertH1Text')) {
    content = content.replace(
      /(import \{ getCertMetadata), (slugToDisplayName) (\} from '@\/lib\/cert-seo-data')/,
      '$1, getCertH1Text, $2 $3'
    )
    h1Added++
  }

  if (!content.includes('h1Text={getCertH1Text(slug)}')) {
    content = content.replace(
      /(examSections=\{examSections\})\s*(\/)/,
      '$1\n        h1Text={getCertH1Text(slug)}\n      $2'
    )
    h1Added++
  }

  if (!content.includes('RelatedCertifications')) {
    content = content.replace(
      /(import CertPageIntro from '@\/components\/CertPageIntro')\n/,
      "$1\nimport RelatedCertifications from '@/components/RelatedCertifications'\n"
    )
    relatedAdded++
  }

  if (!content.includes('<RelatedCertifications currentSlug={slug} />')) {
    const replacement = '      </div>\n\n      <RelatedCertifications currentSlug={slug} />\n    </div>\n  )\n}'
    if (content.includes('Contact Us for Full Access') && content.endsWith('  )\n}')) {
      content = content.replace(/      <\/div>\n    <\/div>\n  \)\n}$/, replacement)
      relatedAdded++
    }
  }

  fs.writeFileSync(pagePath, content)
}

console.log('Done. h1Text/import updates:', h1Added, 'RelatedCertifications updates:', relatedAdded)
