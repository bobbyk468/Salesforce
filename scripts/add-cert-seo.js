const fs = require('fs')
const path = require('path')

const certsDir = path.join(__dirname, '../src/app/certifications')
const exclude = new Set(['page.tsx', 'role'])
const dirs = fs.readdirSync(certsDir).filter((d) => {
  const full = path.join(certsDir, d)
  return fs.statSync(full).isDirectory() && !exclude.has(d)
})

function removeMetadataBlock(content) {
  const start = content.indexOf('export const metadata')
  if (start === -1) return { content, removed: false }
  let depth = 0
  let i = content.indexOf('{', start)
  if (i === -1) return { content, removed: false }
  const startBlock = content.lastIndexOf('\n', content.indexOf('export const metadata')) + 1
  depth = 1
  i++
  while (i < content.length && depth > 0) {
    const c = content[i]
    if (c === '{') depth++
    else if (c === '}') depth--
    i++
  }
  const end = content[i - 1] === ';' ? i : content[i] === ';' ? i + 1 : i
  let endBlock = i
  if (content.slice(i, i + 2).trim() === ';') endBlock = i + 1
  const block = content.slice(startBlock, endBlock)
  const after = content.slice(endBlock).replace(/^\s*\n/, '')
  const before = content.slice(0, startBlock)
  return { content: before + after, removed: true, block }
}

for (const slug of dirs) {
  const pagePath = path.join(certsDir, slug, 'page.tsx')
  if (!fs.existsSync(pagePath)) continue
  let content = fs.readFileSync(pagePath, 'utf8')

  if (content.includes('CertPageSeo') && content.includes('getCertMetadata(slug)')) {
    console.log('Skip (already has SEO):', slug)
    continue
  }

  // 1. Add CertPageSeo + cert-seo-data imports
  if (!content.includes("from '@/lib/cert-seo-data'")) {
    const importLine = content.includes("import ExamPrepContent from")
      ? "import ExamPrepContent from '@/components/ExamPrepContent'"
      : "import CertificationCard from '@/components/CertificationCard'"
    content = content.replace(
      new RegExp(`(${importLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`),
      `$1\nimport CertPageSeo from '@/components/CertPageSeo'\nimport { getCertMetadata, slugToDisplayName } from '@/lib/cert-seo-data'`
    )
  }

  // 2. Remove static metadata block and add slug + getCertMetadata(slug)
  const { content: afterMeta, removed } = removeMetadataBlock(content)
  content = afterMeta
  if (removed) {
    const insertPoint = content.indexOf('const sampleQuestions = ')
    if (insertPoint > 0) {
      content =
        content.slice(0, insertPoint) +
        `const slug = '${slug}'\nexport const metadata = getCertMetadata(slug)\n\nconst sampleQuestions = ` +
        content.slice(insertPoint + 'const sampleQuestions = '.length)
    } else {
      const insertPoint2 = content.indexOf('export default function')
      if (insertPoint2 > 0) {
        content =
          content.slice(0, insertPoint2) +
          `const slug = '${slug}'\nexport const metadata = getCertMetadata(slug)\n\n` +
          content.slice(insertPoint2)
      }
    }
  }

  // 3. Remove slug from inside component (duplicate)
  content = content.replace(/\n\s*const slug = ['"][^'"]+['"]\s*\n(\s*const examSections)/g, '\n$1')
  content = content.replace(/\n\s*const slug = ['"][^'"]+['"]\s*\n(\s*return \()/g, '\n$1')

  // 4. Add CertPageSeo at top of main content
  if (!content.includes('<CertPageSeo')) {
    content = content.replace(
      /(<div className="max-w-5xl mx-auto px-4 py-12">)\s*\n(\s*)(<script|<\/script>|<CertificationCard)/,
      (_, div, indent, next) => {
        if (next === '<CertificationCard') {
          return `${div}\n${indent}<CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />\n${indent}<CertificationCard`
        }
        return `${div}\n${indent}<CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />\n${indent}${next}`
      }
    )
  }

  fs.writeFileSync(pagePath, content)
  console.log('Updated:', slug)
}

console.log('Done.')
