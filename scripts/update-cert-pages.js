const fs = require('fs')
const path = require('path')

const certsDir = path.join(__dirname, '../src/app/certifications')
const exclude = new Set(['page.tsx', 'role'])
const dirs = fs.readdirSync(certsDir).filter((d) => {
  const full = path.join(certsDir, d)
  return fs.statSync(full).isDirectory() && !exclude.has(d)
})

for (const slug of dirs) {
  const pagePath = path.join(certsDir, slug, 'page.tsx')
  if (!fs.existsSync(pagePath)) continue
  let content = fs.readFileSync(pagePath, 'utf8')

  if (content.includes('ExamPrepContent')) continue

  // 1. Add ExamPrepContent import after CertificationCard import
  if (!content.includes("import ExamPrepContent from '@/components/ExamPrepContent'")) {
    content = content.replace(
      /(import CertificationCard from '@\/components\/CertificationCard')/,
      "$1\nimport ExamPrepContent from '@/components/ExamPrepContent'"
    )
  }

  // 2. Add getExamWeightage import if not present
  if (!content.includes("from '@/lib/exam-weightage-data'")) {
    content = content.replace(
      /(import { Metadata } from 'next')/,
      "$1\nimport { getExamWeightage } from '@/lib/exam-weightage-data'"
    )
  }

  // 3. Add slug and examSections at start of component (after "export default function X() {")
  if (!content.includes('const slug =')) {
    content = content.replace(
      /(export default function \w+\(\) \{\s*)(\s*return)/,
      (_, open, ret) => {
        const hasExamSections = content.includes('examSections')
        const slugLine = `\n  const slug = '${slug}'`
        const examLine = hasExamSections ? '' : `\n  const examSections = getExamWeightage(slug)`
        return open + slugLine + examLine + ret
      }
    )
  }

  // 4. Add examSections to CertificationCard if not present
  if (!content.includes('examSections={')) {
    content = content.replace(
      /(<CertificationCard[^>]*topics=\{[^}]+\})\s*\/>/s,
      (match) => {
        return match.replace(/\s*\/>/, '\n        examSections={examSections}\n      />')
      }
    )
  }

  // 5. Add ExamPrepContent after CertificationCard
  if (!content.includes('<ExamPrepContent')) {
    content = content.replace(
      /(\s*\/>\s*)\n(\s*)(<div className="mt-12">)/,
      (_, close, indent, next) => {
        return `${close}\n\n      <ExamPrepContent slug={slug} />\n\n${indent}${next}`
      }
    )
  }

  fs.writeFileSync(pagePath, content)
  console.log('Updated:', slug)
}

console.log('Done.')
