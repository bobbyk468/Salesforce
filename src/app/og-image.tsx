import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Trailblaze Prep - Salesforce certification practice questions and study guides'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #0176D3 100%)',
          color: '#ffffff',
          padding: '72px',
        }}
      >
        <div style={{ fontSize: 42, fontWeight: 700, marginBottom: 16 }}>
          Trailblaze Prep
        </div>
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
          Salesforce Certification Practice Questions
        </div>
        <div style={{ fontSize: 30, marginTop: 24, opacity: 0.95 }}>
          Study guides, exam weightage, and mock practice
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
