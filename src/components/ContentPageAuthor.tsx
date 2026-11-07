import Link from '@/components/AppLink'

/**
 * Editorial byline — currently rendered nowhere.
 *
 * The owner asked for the "Editorial contact: Krishna Mohan" card to come off
 * every page. Rather than strip the call from the 196 page files that use it,
 * the component returns null: one line to revert, and no risk of a mass regex
 * edit damaging JSX, which has gone wrong in this repo before.
 *
 * Worth knowing before this stays permanent: the SEO audit credited the site's
 * "Authority & Trust Signals" and "Contact Transparency" partly to this block,
 * and visible authorship is an E-E-A-T signal on study content. The footer and
 * /about still carry contact details, so the site is not anonymous — but the
 * per-page byline is gone.
 *
 * The original markup is preserved below the early return so restoring it is
 * a matter of deleting one line.
 */
export default function ContentPageAuthor() {
  return null

  // eslint-disable-next-line no-unreachable

  return (
    <div className="rounded-xl border border-gray-100 bg-white px-5 py-4 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-salesforce-blue/10 font-semibold text-salesforce-dark ring-2 ring-salesforce-blue/20">
            KM
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">
            Editorial contact: {' '}
            <a
              href="https://trailblazer.me/id/krishnamohan"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block py-1 text-salesforce-blue underline hover:no-underline"
            >
              Krishna Mohan
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-0.5">Salesforce certification learning content and practice questions.</p>
          <p className="text-xs text-gray-500 mt-2">
            <a
              href="https://trailblazer.me/id/krishnamohan"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block py-1 text-salesforce-blue underline hover:no-underline"
            >
              Author profile
            </a>
            {' '}&middot;{' '}
            <Link href="/editorial-policy" className="inline-block py-1 text-salesforce-blue underline hover:no-underline">
              Editorial policy
            </Link>
            {' '}&middot;{' '}
            <Link href="/contact" className="inline-block py-1 text-salesforce-blue underline hover:no-underline">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
