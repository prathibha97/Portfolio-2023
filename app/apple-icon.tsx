import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

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
          background: '#14161a',
          color: '#fafaf8',
          fontSize: 112,
          fontWeight: 600,
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
