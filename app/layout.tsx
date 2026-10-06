import Header from '@/components/nav/header';
import Footer from '@/components/sections/footer';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { profile } from '@/lib/data';
import type { Metadata, Viewport } from 'next';
import { Archivo, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

// One family carries the whole site. The width axis gives display type its
// own voice without a second typeface. Self-hosted by next/font — the old
// Fontshare @import was render-blocking on the primary face.
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  axes: ['wdth'],
});

// Mono is only ever used for code inside posts.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const DESCRIPTION =
  'Software engineer. I build Go services and the products that sit on top of them — currently the Go architecture behind a 17-service financial compliance platform.';

export const metadata: Metadata = {
  metadataBase: new URL('https://prathibha-portfolio.vercel.app'),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Software engineer',
    'Go developer',
    'Golang',
    'Next.js developer',
    'TypeScript',
    'Remote engineer',
    'Microservices',
    'Kubernetes',
    'Prathibha Ratnayake',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: DESCRIPTION,
    url: 'https://prathibha-portfolio.vercel.app',
    siteName: profile.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#fafaf8',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-paper)]"
        >
          Skip to content
        </a>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#14161a',
                color: '#fafaf8',
                borderRadius: '3px',
                fontSize: '14px',
                padding: '12px 16px',
              },
            }}
          />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
