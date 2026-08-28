interface CertTableOfContentsProps {
  sections: Array<{ id: string; title: string }>
}

export default function CertTableOfContents({ sections }: CertTableOfContentsProps) {
  if (sections.length === 0) return null

  return (
    <div className="lg:sticky lg:top-24">
      <nav className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm" aria-label="Table of contents">
        <p className="mb-3 font-semibold text-gray-900">Table of Contents</p>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-salesforce-blue"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
