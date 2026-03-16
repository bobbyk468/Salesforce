import Link from 'next/link'

interface RelatedGuide {
  href: string
  anchorText: string
}

interface RelatedGuidesProps {
  links: RelatedGuide[]
}

/**
 * Related guides section for internal linking — improves crawl paths and PageRank flow.
 */
export default function RelatedGuides({ links }: RelatedGuidesProps) {
  if (links.length === 0) return null

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Related guides</h2>
      <ul className="flex flex-wrap gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-salesforce-dark hover:underline font-medium">
              {link.anchorText}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
