/**
 * Einstein Trust Layer request flow for AI Associate: prompt → grounding → masking →
 * external LLM → demasking → toxicity check → audit trail. Matches the exam's core mental model.
 */
export default function EinsteinTrustLayerDiagram() {
  return (
    <figure
      id="einstein-trust-layer-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Einstein Trust Layer: how a prompt is protected (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A user prompt is <strong>grounded</strong> with real CRM data, then sensitive fields are{' '}
        <strong>masked</strong> before the request ever leaves Salesforce. The external LLM sees only masked data,
        has <strong>zero data retention</strong>, and the response is <strong>demasked</strong> and checked for
        toxicity before the user sees it. Every step is logged to an <strong>audit trail</strong>.
      </p>
      <svg
        role="img"
        aria-labelledby="etl-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 760 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="etl-diagram-title">
          Diagram: prompt grounding, PII masking, external LLM call with zero data retention, demasking, toxicity
          check, and audit logging
        </title>
        <defs>
          <linearGradient id="etlBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker id="etlArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="16" y="24" width="120" height="64" rx="8" fill="url(#etlBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="76" y="50" textAnchor="middle" fill="#1e293b" fontWeight="600">User Prompt</text>
        <text x="76" y="68" textAnchor="middle" fill="#475569">e.g. "Summarize</text>
        <text x="76" y="80" textAnchor="middle" fill="#475569">this case"</text>

        <path d="M 140 56 L 172 56" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#etlArrow)" />
        <rect x="180" y="20" width="130" height="72" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="245" y="44" textAnchor="middle" fill="#0f172a" fontWeight="600">Grounding</text>
        <text x="245" y="62" textAnchor="middle" fill="#334155">Injects real CRM</text>
        <text x="245" y="78" textAnchor="middle" fill="#334155">data (Data Cloud)</text>

        <path d="M 310 56 L 342 56" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#etlArrow)" />
        <rect x="350" y="20" width="130" height="72" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="415" y="44" textAnchor="middle" fill="#0f172a" fontWeight="600">PII Masking</text>
        <text x="415" y="62" textAnchor="middle" fill="#334155">Replaces sensitive</text>
        <text x="415" y="78" textAnchor="middle" fill="#334155">fields before send</text>

        <path d="M 480 56 L 512 56" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#etlArrow)" />
        <rect x="520" y="20" width="150" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="595" y="44" textAnchor="middle" fill="#0f172a" fontWeight="600">External LLM</text>
        <text x="595" y="62" textAnchor="middle" fill="#334155">Sees masked data</text>
        <text x="595" y="78" textAnchor="middle" fill="#334155">only, zero retention</text>

        <path d="M 595 92 L 595 128" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#etlArrow)" />
        <rect x="520" y="136" width="150" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="595" y="160" textAnchor="middle" fill="#0f172a" fontWeight="600">Demasking</text>
        <text x="595" y="178" textAnchor="middle" fill="#334155">Restores original</text>
        <text x="595" y="192" textAnchor="middle" fill="#334155">field values</text>

        <path d="M 520 168 L 480 168" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#etlArrow)" />
        <rect x="350" y="136" width="130" height="64" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
        <text x="415" y="160" textAnchor="middle" fill="#0f172a" fontWeight="600">Toxicity Check</text>
        <text x="415" y="178" textAnchor="middle" fill="#334155">Screens output</text>
        <text x="415" y="192" textAnchor="middle" fill="#334155">before delivery</text>

        <path d="M 350 168 L 318 168" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#etlArrow)" />
        <rect x="180" y="136" width="130" height="64" rx="8" fill="url(#etlBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="245" y="160" textAnchor="middle" fill="#1e293b" fontWeight="600">Response to User</text>
        <text x="245" y="178" textAnchor="middle" fill="#475569">Safe, grounded,</text>
        <text x="245" y="192" textAnchor="middle" fill="#475569">demasked answer</text>

        <path
          d="M 245 20 Q 245 -10 415 -10 Q 700 -10 700 56 L 700 240"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <path
          d="M 700 240 L 200 240"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
          markerEnd="url(#etlArrow)"
        />
        <rect x="200" y="216" width="220" height="48" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="310" y="236" textAnchor="middle" fill="#0f172a" fontWeight="600">Audit Trail</text>
        <text x="310" y="252" textAnchor="middle" fill="#475569">Every step logged for compliance</text>
      </svg>
    </figure>
  )
}
