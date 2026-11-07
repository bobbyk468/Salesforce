import NextLink from 'next/link'
import type { ComponentProps } from 'react'

type AppLinkProps = ComponentProps<typeof NextLink>

/**
 * `next/link` with viewport prefetching turned off by default.
 *
 * The App Router prefetches the full RSC payload of every link that
 * scrolls into view. On a content site this is punishing: a cert page
 * carries ~80 internal links and each payload is 10-24KB, so the page
 * pulled ~327KB of prefetch — about half its total transfer — for
 * routes the visitor had shown no intent to open.
 *
 * Measured on Next 16, `prefetch={false}` disables prefetching
 * outright: hovering a link does NOT warm it, despite what the older
 * docs imply. That is accepted deliberately. Clicking through on
 * throttled mobile measured no slower than with prefetch on, because
 * the prefetch traffic was competing for the same bandwidth, and the
 * page now transfers 314KB instead of 655KB.
 *
 * Pass `prefetch` explicitly to opt an individual link back in.
 */
export default function AppLink({ prefetch = false, ...props }: AppLinkProps) {
  const external = typeof props.href === 'string' &&
    /^https?:\/\//i.test(props.href) &&
    !/^https?:\/\/(?:www\.)?trailblazeprep\.com(?:[/:?#]|$)/i.test(props.href)
  return <NextLink prefetch={prefetch} {...props} {...(external ? { target: '_blank', rel: 'nofollow noopener noreferrer' } : {})} />
}
