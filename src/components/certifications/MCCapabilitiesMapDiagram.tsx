/** Broad Marketing Cloud Engagement capability map for the Foundations exam. */
export default function MCCapabilitiesMapDiagram() {
  const caps = ['Email Studio', 'Journey Builder', 'Automation Studio', 'Contact Builder', 'Content Builder', 'Mobile/Push']
  return (
    <figure id="mc-capabilities-map-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Marketing Cloud Engagement capability map (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Foundations-level exam questions test whether you know <em>which Studio does what</em> at a high level —
        not deep configuration. All six capabilities below share one Contact Builder data foundation.
      </p>
      <svg role="img" aria-labelledby="mccm-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
        <title id="mccm-title">Six Marketing Cloud Engagement capabilities — Email Studio, Journey Builder, Automation Studio, Contact Builder, Content Builder, Mobile/Push — arranged around a shared data foundation</title>
        <rect x="210" y="80" width="200" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="310" y="112" textAnchor="middle" fill="#0f172a" fontWeight="700">Contact Builder (data)</text>
        {caps.filter((c) => c !== 'Contact Builder').map((c, i) => {
          const angle = (i / 5) * 2 * Math.PI - Math.PI / 2
          const x = 310 + Math.cos(angle) * 220
          const y = 108 + Math.sin(angle) * 88
          return (
            <g key={c}>
              <line x1="310" y1="108" x2={x} y2={y} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <rect x={x - 70} y={y - 20} width="140" height="40" rx="6" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
              <text x={x} y={y + 5} textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">{c}</text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}
