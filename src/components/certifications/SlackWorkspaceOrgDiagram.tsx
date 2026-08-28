/** Workspace vs. Org-level administration for Slack Administrator: single-workspace
 * settings vs. Enterprise Grid organization-wide policy control. */
export default function SlackWorkspaceOrgDiagram() {
  return (
    <figure id="slack-workspace-org-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Workspace vs. Org-level administration (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A single <strong>Workspace</strong> has its own channels, members, and app installs. <strong>Enterprise
        Grid</strong> connects multiple workspaces under one <strong>Org</strong>, where centralized policies
        (retention, SSO, app approval) cascade down unless a workspace admin overrides them locally.
      </p>
      <svg role="img" aria-labelledby="swo-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg">
        <title id="swo-title">Enterprise Grid organization contains centralized policies that cascade to multiple connected workspaces, each with local channel and member management</title>
        <defs><marker id="swoArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="160" y="12" width="300" height="60" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="310" y="36" textAnchor="middle" fill="#0f172a" fontWeight="700">Org (Enterprise Grid)</text>
        <text x="310" y="54" textAnchor="middle" fill="#334155">Centralized retention, SSO, app policy</text>
        <path d="M 260 72 L 160 108" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#swoArrow)" />
        <path d="M 310 72 L 310 108" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#swoArrow)" />
        <path d="M 360 72 L 460 108" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#swoArrow)" />
        {[{ x: 30, l: 'Workspace A' }, { x: 240, l: 'Workspace B' }, { x: 450, l: 'Workspace C' }].map((w) => (
          <g key={w.l}>
            <rect x={w.x} y="116" width="140" height="80" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
            <text x={w.x + 70} y="140" textAnchor="middle" fill="#0f172a" fontWeight="600">{w.l}</text>
            <text x={w.x + 70} y="158" textAnchor="middle" fill="#334155">Own channels,</text>
            <text x={w.x + 70} y="174" textAnchor="middle" fill="#334155">members, app installs</text>
          </g>
        ))}
        <text x="310" y="224" textAnchor="middle" fill="#475569">Local settings can only tighten — never override — an Org-level policy</text>
      </svg>
    </figure>
  )
}
