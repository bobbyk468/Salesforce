import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { RELEASE_CURRENT } from '@/lib/release-data'

export const runtime = 'edge'

const W = 1200
const H = 630

/** Dynamic OG image for cert and role pages.
 *  Query params:
 *    t  – cert/role title  (e.g. "Platform App Builder")
 *    s  – subtitle override (optional)
 *    k  – category keyword shown in badge (optional, e.g. "Architect" → amber)
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title    = searchParams.get('t') ?? 'Salesforce Certification'
  const subtitle = searchParams.get('s') ?? 'Free Practice Questions & Study Guide'
  const category = searchParams.get('k') ?? ''

  // Badge colour by cert category
  const badgeColor =
    category === 'architect'  ? '#7c3aed' :
    category === 'developer'  ? '#059669' :
    category === 'marketing'  ? '#db2777' :
    category === 'consultant' ? '#d97706' :
                                '#0176D3'   // Salesforce blue default

  // Dynamic font-size so long names don't overflow
  const titleLen = title.length
  const titleSize =
    titleLen <= 22 ? 80 :
    titleLen <= 30 ? 70 :
    titleLen <= 40 ? 60 :
    titleLen <= 50 ? 52 : 44

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(145deg, #0a0f1e 0%, #0d2352 55%, #07306b 100%)',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative right-side glow */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${badgeColor}44 0%, transparent 70%)`,
          }}
        />
        {/* Decorative bottom-left glow */}
        <div
          style={{
            position: 'absolute',
            left: -80,
            bottom: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #0176D322 0%, transparent 70%)',
          }}
        />

        {/* ── Top bar: brand ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '44px 60px 0',
          }}
        >
          {/* TP monogram */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: '#0176D3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 800,
              marginRight: 14,
              flexShrink: 0,
            }}
          >
            TP
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, opacity: 0.92, letterSpacing: '-0.02em' }}>
            Trailblaze Prep
          </div>
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 60px',
          }}
        >
          {/* FREE PRACTICE badge */}
          <div style={{ display: 'flex', marginBottom: 22 }}>
            <div
              style={{
                background: badgeColor,
                borderRadius: 8,
                padding: '7px 20px',
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              FREE PRACTICE
            </div>
          </div>

          {/* Cert title */}
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 960,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              opacity: 0.75,
              maxWidth: 740,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 60px 28px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div style={{ fontSize: 21, opacity: 0.6 }}>trailblazeprep.com</div>
          <div
            style={{
              fontSize: 21,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: '6px 18px',
              opacity: 0.85,
            }}
          >
            {RELEASE_CURRENT} Study Guide
          </div>
        </div>
      </div>
    ),
    { width: W, height: H },
  )
}
