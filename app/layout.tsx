import Header from '@/components/nav/header';
import CustomCursor from '@/components/primitives/custom-cursor';
import SmoothScrollProvider from '@/components/providers/smooth-scroll-provider';
import Footer from '@/components/sections/footer';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { profile } from '@/lib/data';
import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

// General Sans loads from Fontshare CDN via @import in globals.css.
// JetBrains Mono comes through next/font for performance + variable axis support.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
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
      className={jetbrainsMono.variable}
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
