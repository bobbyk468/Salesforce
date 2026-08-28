/** CTA presentation/board structure for the Technical Architect (CTA) exam. */
export default function CTABoardStructureDiagram() {
  const steps = ['Scenario Given', 'Prepare Solution', 'Present (~30 min)', 'Board Q&A', 'Scored on Rubric']
  return (
    <figure id="cta-board-structure-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">CTA presentation structure (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        The CTA board is a structured design-and-defend exercise: you receive a complex scenario, prepare an
        architecture, present it, then defend your decisions under direct questioning from a panel of architects.
      </p>
      <svg role="img" aria-labelledby="cta-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 780 130" xmlns="http://www.w3.org/2000/svg">
        <title id="cta-title">Scenario given, solution prepared, presented for about 30 minutes, followed by board Q&amp;A, then scored against a rubric of design quality, trade-offs, and communication</title>
        <defs><marker id="ctaArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        {steps.map((s, i) => (
          <g key={s}>
            <rect x={16 + i * 152} y="20" width="136" height="64" rx="8" fill={i % 2 === 0 ? '#dbeafe' : '#ecfdf5'} stroke={i % 2 === 0 ? '#0b5cab' : '#059669'} strokeWidth="1.5" />
            <text x={84 + i * 152} y="56" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="10">{s}</text>
            {i < steps.length - 1 && <path d={`M ${152 + i * 152} 52 L ${168 + i * 152} 52`} stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ctaArrow)" />}
          </g>
        ))}
      </svg>
    </figure>
  )
}
