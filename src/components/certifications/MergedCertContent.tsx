import { MERGED_CERT_CONTENT } from './merged-content'

/**
 * Renders the study guide and exam tips content that used to live on separate
 * URLs for this certification. Both of those routes now 301 to the hub, so this
 * is where that copy is served from.
 *
 * Returns null for certifications that never had either page, and for
 * `administrator`, whose merge is hand-written in Adm201MergedGuide.
 */
export default async function MergedCertContent({ slug }: { slug: string }) {
  const thunks = MERGED_CERT_CONTENT[slug]
  if (!thunks?.length) return null

  const sections = await Promise.all(thunks.map((load) => load()))

  return (
    <>
      {sections.map(({ default: Section }, i) => (
        <Section key={i} />
      ))}
    </>
  )
}
