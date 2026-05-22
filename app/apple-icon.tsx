import { ImageResponse } from 'next/og';

// Apple touch icon (home-screen on iOS, also used as fallback by some clients).
// Same brand mark as the favicon, at 180×180 with a tiny breathing margin.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const runtime = 'edge';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#08090b',
          padding: 14,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5b13d',
            color: '#08090b',
            fontSize: 116,
            fontWeight: 800,
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            letterSpacing: '-0.04em',
            borderRadius: '50%',
            boxShadow: 'inset 0 0 0 4px rgba(255,255,255,0.16)',
          }}
        >
          P
        </div>
      </div>
    ),
    { ...size }
  );
}
