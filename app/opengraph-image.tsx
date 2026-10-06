import { profile } from '@/lib/data';
import { ImageResponse } from 'next/og';

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
          padding: '64px',
          background: '#fafaf8',
          color: '#14161a',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: 20,
            color: '#565b63',
            paddingBottom: 24,
            borderBottom: '1px solid #c2c1b7',
          }}
        >
          <div style={{ display: 'flex' }}>{profile.name}</div>
          <div style={{ display: 'flex' }}>Software engineer</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 104,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            fontWeight: 500,
          }}
        >
          <div style={{ display: 'flex' }}>Go services,</div>
          <div style={{ display: 'flex' }}>and the products</div>
          <div style={{ display: 'flex' }}>on top of them.</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: 20,
            color: '#565b63',
            paddingTop: 24,
            borderTop: '1px solid #c2c1b7',
          }}
        >
          <div style={{ display: 'flex' }}>Go · Kafka · Kubernetes · TypeScript · Next.js</div>
          <div style={{ display: 'flex' }}>Open to new roles</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
