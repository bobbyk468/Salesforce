/**
 * High-level Agentforce exam mental model: channels → agent → topics/actions →
 * Trust Layer → LLM, with Data Cloud grounding. Improves dwell time and supports PAA-style understanding.
 */
export default function AgentforceArchitectureDiagram() {
  return (
    <figure
      id="agentforce-architecture-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Agentforce architecture (how the exam thinks about the stack)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        User messages enter through a channel; the agent routes to a <strong>Topic</strong>, runs{' '}
        <strong>Actions</strong> (Flow, Apex, APIs, prompts). Outbound model calls pass through the{' '}
        <strong>Einstein Trust Layer</strong>. <strong>Data Cloud</strong> optionally grounds responses in a unified
        profile. Compare to merge-field grounding from core CRM when you study.
      </p>
      <svg
        role="img"
        aria-labelledby="agentforce-arch-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 720 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="agentforce-arch-diagram-title">
          Diagram: channels connect to Agentforce agent, topics and actions, Trust Layer, external LLM, and Data Cloud
          grounding
        </title>
        <defs>
          <linearGradient id="afBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker id="afArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>
        <rect x="24" y="40" width="120" height="56" rx="8" fill="url(#afBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="84" y="62" textAnchor="middle" fill="#1e293b" fontWeight="600">
          Channels
        </text>
        <text x="84" y="78" textAnchor="middle" fill="#475569">
          Web, Experience,
        </text>
        <text x="84" y="90" textAnchor="middle" fill="#475569">
          Slack, messaging
        </text>
        <path d="M 150 68 L 188 68" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#afArrow)" />
        <rect x="196" y="32" width="132" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="262" y="58" textAnchor="middle" fill="#0f172a" fontWeight="600">
          Agentforce
        </text>
        <text x="262" y="76" textAnchor="middle" fill="#334155">
          Agent + routing
        </text>
        <text x="262" y="92" textAnchor="middle" fill="#475569">
          (LLM picks Topic)
        </text>
        <rect x="360" y="32" width="148" height="72" rx="8" fill="url(#afBox)" stroke="#64748b" strokeWidth="1.5" />
        <text x="434" y="56" textAnchor="middle" fill="#0f172a" fontWeight="600">
          Topics &amp; Actions
        </text>
        <text x="434" y="74" textAnchor="middle" fill="#475569">
          Instructions, guardrails
        </text>
        <text x="434" y="90" textAnchor="middle" fill="#475569">
          Flow / Apex / APIs / prompts
        </text>
        <path d="M 332 68 L 352 68" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#afArrow)" />
        <rect x="360" y="140" width="148" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="434" y="166" textAnchor="middle" fill="#0f172a" fontWeight="600">
          Einstein Trust Layer
        </text>
        <text x="434" y="184" textAnchor="middle" fill="#334155">
          PII mask · audit ·
        </text>
        <text x="434" y="198" textAnchor="middle" fill="#334155">
          zero retention
        </text>
        <path d="M 434 108 L 434 132" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#afArrow)" />
        <rect x="360" y="232" width="148" height="52" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="434" y="256" textAnchor="middle" fill="#0f172a" fontWeight="600">
          External LLM
        </text>
        <text x="434" y="274" textAnchor="middle" fill="#475569">
          (via Trust Layer)
        </text>
        <path d="M 434 208 L 434 228" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#afArrow)" />
        <rect x="536" y="100" width="160" height="100" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="616" y="128" textAnchor="middle" fill="#0f172a" fontWeight="600">
          Data Cloud
        </text>
        <text x="616" y="148" textAnchor="middle" fill="#334155">
          Unified profiles
        </text>
        <text x="616" y="166" textAnchor="middle" fill="#475569">
          Grounding for answers
        </text>
        <text x="616" y="184" textAnchor="middle" fill="#475569">
          (vs CRM merge fields)
        </text>
        <path
          d="M 536 150 Q 480 120 434 104"
          stroke="#059669"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <path
          d="M 536 170 Q 500 200 434 200"
          stroke="#059669"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />
        <text x="262" y="280" textAnchor="middle" fill="#475569">
          Escalation → Omni-Channel / human agent (transcript handoff)
        </text>
      </svg>
    </figure>
  )
}
