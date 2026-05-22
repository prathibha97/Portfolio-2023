import { ImageResponse } from 'next/og';

// Browser-tab favicon. Renders the brand mark: amber circle, dark "P".
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';
export const runtime = 'edge';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5b13d',
          color: '#08090b',
          fontSize: 22,
          fontWeight: 800,
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          letterSpacing: '-0.04em',
          borderRadius: '50%',
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
