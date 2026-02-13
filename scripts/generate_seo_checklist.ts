import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { CERTIFICATION_CATEGORIES } from '../src/lib/certifications-data'
import { getCertMetadata } from '../src/lib/cert-seo-data'
import { RELEASE_CURRENT } from '../src/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

type Row = {
  slug: string
  url: string
  title: string
  titleLength: number
  description: string
  descriptionLength: number
}

function toSlug(href: string): string {
  return href.replace('/certifications/', '').replace(/\/$/, '')
}

function csvEscape(value: string): string {
  return `"${value.replace(/"/g, '""')}"`
}

function titleFromMetadata(metadata: ReturnType<typeof getCertMetadata>): string {
  const rawTitle = metadata.title
  if (typeof rawTitle === 'string') return rawTitle
  if (rawTitle && typeof rawTitle === 'object' && 'absolute' in rawTitle && rawTitle.absolute) {
    return String(rawTitle.absolute)
  }
  return ''
}

const uniqueSlugs = Array.from(
  new Set(
    CERTIFICATION_CATEGORIES.flatMap((category) =>
      category.items.map((item) => toSlug(item.href))
    )
  )
).sort((a, b) => a.localeCompare(b))

const rows: Row[] = uniqueSlugs.map((slug) => {
  const metadata = getCertMetadata(slug)
  const title = titleFromMetadata(metadata)
  const description = String(metadata.description || '')
  return {
    slug,
    url: `${siteUrl}/certifications/${slug}`,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
  }
})

const header = [
  'slug',
  'url',
  'title',
  'title_length',
  'description',
  'description_length',
]

const csvLines = [
  header.join(','),
  ...rows.map((row) =>
    [
      row.slug,
      row.url,
      csvEscape(row.title),
      row.titleLength.toString(),
      csvEscape(row.description),
      row.descriptionLength.toString(),
    ].join(',')
  ),
]

const outputDir = join(process.cwd(), 'reports')
mkdirSync(outputDir, { recursive: true })
const outputFile = join(outputDir, 'winter26-seo-checklist.csv')
writeFileSync(outputFile, csvLines.join('\n') + '\n', 'utf8')

const over60 = rows.filter((row) => row.titleLength > 60).length
const over160 = rows.filter((row) => row.descriptionLength > 160).length

console.log(`Release: ${RELEASE_CURRENT}`)
console.log(`Generated: ${outputFile}`)
console.log(`Rows: ${rows.length}`)
console.log(`Titles >60 chars: ${over60}`)
console.log(`Descriptions >160 chars: ${over160}`)
