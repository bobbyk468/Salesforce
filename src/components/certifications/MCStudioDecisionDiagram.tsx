/** "Which Marketing Cloud Studio to use when" decision matrix for Marketing Cloud Consultant. */
export default function MCStudioDecisionDiagram() {
  const rows = [
    { need: 'Multi-channel customer journey', tool: 'Journey Builder' },
    { need: 'One-off or scheduled batch email', tool: 'Automation Studio / Email Studio' },
    { need: 'Manage subscriber/contact data', tool: 'Contact Builder' },
    { need: 'Build/personalize content at scale', tool: 'Content Builder + AMPscript' },
  ]
  return (
    <figure id="mc-studio-decision-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Which Marketing Cloud Studio to use when (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Consultant exam scenarios almost always reduce to matching a business need to the correct Studio — this is
        the single highest-frequency question pattern.
      </p>
      <svg role="img" aria-labelledby="mcs-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 190" xmlns="http://www.w3.org/2000/svg">
        <title id="mcs-title">Table mapping business needs (journeys, batch email, contact data, content personalization) to the correct Marketing Cloud Studio</title>
        <rect x="10" y="8" width="330" height="28" fill="#0b5cab" /><text x="175" y="27" textAnchor="middle" fill="white" fontWeight="700">Business Need</text>
        <rect x="340" y="8" width="270" height="28" fill="#0b5cab" /><text x="475" y="27" textAnchor="middle" fill="white" fontWeight="700">Studio</text>
        {rows.map((r, i) => (
          <g key={r.need}>
            <rect x="10" y={36 + i * 38} width="600" height="38" fill={i % 2 === 0 ? '#f8fafc' : '#f1f5f9'} stroke="#e2e8f0" />
            <text x="20" y={36 + i * 38 + 24} fill="#0f172a">{r.need}</text>
            <text x="350" y={36 + i * 38 + 24} fill="#0f172a" fontWeight="600">{r.tool}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
