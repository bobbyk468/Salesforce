import { CERTIFICATION_CATEGORIES, NOINDEX_ALIAS_HREFS } from '@/lib/certifications-data'
import HeaderClient from '@/components/HeaderClient'

/**
 * Server half of the site header.
 *
 * HeaderClient needs interactivity (the dropdown and the drawer), so it is a
 * client component — and while it imported CERTIFICATION_CATEGORIES directly,
 * the whole 34KB catalogue was bundled into client JS and shipped on every
 * page of the site.
 *
 * Narrowing it here and passing the result as props moves that data into the
 * RSC payload, which is already in the HTML, instead of a JS chunk the
 * browser downloads and parses separately. Only the fields the nav actually
 * renders cross the boundary.
 */
export type HeaderCategory = {
  slug: string
  name: string
  items: { name: string; href: string }[]
}

export default function Header() {
  const categories: HeaderCategory[] = CERTIFICATION_CATEGORIES.map((category) => ({
    slug: category.slug,
    name: category.name,
    // Drop the noindexed practice-test aliases: the nav shipped them on every
    // page of the site, both as rendered links and in the RSC payload.
    items: category.items
      .filter((item) => !NOINDEX_ALIAS_HREFS.has(item.href))
      .map((item) => ({ name: item.name, href: item.href })),
  }))

  return <HeaderClient categories={categories} />
}
