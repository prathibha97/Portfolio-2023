import { profile } from '@/lib/data';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #08090b 0%, #131418 100%)',
          color: '#ededee',
          fontFamily: 'system-ui',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 999,
                background: '#f5b13d',
                color: '#08090b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              P
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', fontSize: 22, fontWeight: 500 }}>{profile.name}</div>
              <div style={{ display: 'flex', fontSize: 16, color: '#a1a1a6' }}>
                {profile.role} · {profile.location}
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 14,
              color: '#a1a1a6',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 999,
              padding: '8px 16px',
            }}
          >
            <div style={{ width: 8, height: 8, background: '#6ee7b7', borderRadius: 999 }} />
            <div style={{ display: 'flex' }}>Open to work · 2026</div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 124,
              lineHeight: 0.92,
              letterSpacing: '-0.045em',
              fontWeight: 500,
              color: '#ededee',
            }}
          >
            I build software
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 124,
              lineHeight: 0.92,
              letterSpacing: '-0.045em',
              fontWeight: 500,
              color: '#6e6e76',
              gap: 24,
              alignItems: 'baseline',
            }}
          >
            <div style={{ display: 'flex' }}>that</div>
            <div style={{ display: 'flex', color: '#f5b13d' }}>ships.</div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 16,
            color: '#6e6e76',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex' }}>Go · TypeScript · Next.js · Postgres</div>
          <div style={{ display: 'flex' }}>prathibha.dev</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
