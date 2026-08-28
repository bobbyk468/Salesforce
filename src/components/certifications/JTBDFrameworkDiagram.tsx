/** Jobs to be Done (JTBD) framework for Strategy Designer. */
export default function JTBDFrameworkDiagram() {
  return (
    <figure id="jtbd-framework-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Jobs to be Done (JTBD) framework (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        JTBD reframes design around what a user is trying to <strong>accomplish</strong>, not the product feature
        itself: "When [situation], I want to [motivation], so I can [expected outcome]."
      </p>
      <svg role="img" aria-labelledby="jtbd-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg">
        <title id="jtbd-title">JTBD statement structure: situation, motivation, expected outcome, feeding into a design solution</title>
        <defs><marker id="jtbdArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="16" width="170" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="101" y="42" textAnchor="middle" fill="#0f172a" fontWeight="700">When...</text>
        <text x="101" y="60" textAnchor="middle" fill="#334155">Situation/context</text>
        <path d="M 186 52 L 218 52" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#jtbdArrow)" />
        <rect x="226" y="16" width="170" height="72" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="311" y="42" textAnchor="middle" fill="#0f172a" fontWeight="700">I want to...</text>
        <text x="311" y="60" textAnchor="middle" fill="#334155">Motivation</text>
        <path d="M 396 52 L 428 52" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#jtbdArrow)" />
        <rect x="436" y="16" width="150" height="72" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="511" y="42" textAnchor="middle" fill="#0f172a" fontWeight="700">So I can...</text>
        <text x="511" y="60" textAnchor="middle" fill="#334155">Expected outcome</text>
      </svg>
    </figure>
  )
}
