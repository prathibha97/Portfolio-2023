import Header from '@/components/nav/header';
import CustomCursor from '@/components/primitives/custom-cursor';
import SmoothScrollProvider from '@/components/providers/smooth-scroll-provider';
import Footer from '@/components/sections/footer';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { profile } from '@/lib/data';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prathibha-portfolio.vercel.app'),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description:
    'Senior software engineer based in Sri Lanka. Leading engineering on key projects — building enterprise-grade, scalable Go services and full-stack web products with TypeScript, Next.js and Postgres.',
  keywords: [
    'Senior software engineer',
    'Lead engineer',
    'Go developer',
    'Golang',
    'Distributed systems',
    'Next.js developer',
    'TypeScript',
    'Sri Lanka developer',
    'Prathibha Ratnayake',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: 'Senior engineer · Go, TypeScript, Next.js, Postgres · scalable systems.',
    url: 'https://prathibha-portfolio.vercel.app',
    siteName: `${profile.name} · Portfolio`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: 'Senior engineer · Go, TypeScript, Next.js, Postgres · scalable systems.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#08090b',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={
        {
          ['--font-sans']: 'var(--font-geist-sans), system-ui, sans-serif',
          ['--font-mono']: 'var(--font-geist-mono), ui-monospace, monospace',
          ['--font-display']: 'var(--font-geist-sans), system-ui, sans-serif',
        } as React.CSSProperties
      }
      suppressHydrationWarning
    >
      <body className="relative antialiased">
        <SmoothScrollProvider>
          <ActiveSectionContextProvider>
            <CustomCursor />
            <Header />
            {children}
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#131418',
                  color: '#ededee',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  fontSize: '14px',
                },
              }}
            />
          </ActiveSectionContextProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
