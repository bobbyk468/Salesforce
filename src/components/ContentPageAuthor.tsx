import Link from '@/components/AppLink'
export default function ContentPageAuthor() {
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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
