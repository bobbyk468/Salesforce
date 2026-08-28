/** CTA Architect Evaluation exam structure for the Technical Architect Evaluation page. */
export default function CTAEvaluationStructureDiagram() {
  return (
    <figure id="cta-evaluation-structure-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Architect Evaluation exam structure (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        The Evaluation blends <strong>multiple-choice technical knowledge</strong> questions with a{' '}
        <strong>written solution design</strong> component addressing a scenario&apos;s requirements, constraints,
        and trade-offs — passing this is the prerequisite for attempting the live Review Board.
      </p>
      <svg role="img" aria-labelledby="ces-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
        <title id="ces-title">Two components: multiple-choice technical knowledge and a written scenario-based solution design, both required to pass and advance to the Review Board</title>
        <defs><marker id="cesArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="16" width="260" height="80" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="146" y="44" textAnchor="middle" fill="#0f172a" fontWeight="700">Multiple Choice</text>
        <text x="146" y="64" textAnchor="middle" fill="#334155">Broad technical knowledge</text>
        <text x="146" y="80" textAnchor="middle" fill="#334155">across all architect domains</text>
        <rect x="324" y="16" width="260" height="80" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="454" y="44" textAnchor="middle" fill="#0f172a" fontWeight="700">Written Solution Design</text>
        <text x="454" y="64" textAnchor="middle" fill="#334155">Address scenario requirements,</text>
        <text x="454" y="80" textAnchor="middle" fill="#334155">constraints, trade-offs</text>
        <path d="M 146 96 L 300 132" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#cesArrow)" />
        <path d="M 454 96 L 300 132" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#cesArrow)" />
        <rect x="200" y="140" width="200" height="36" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="300" y="162" textAnchor="middle" fill="#0f172a" fontWeight="600">Pass → eligible for Review Board</text>
      </svg>
    </figure>
  )
}
