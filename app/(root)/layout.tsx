import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prathibha | Personal Portfolio',
  description: 'Prathibha is a Fullstack developer with 3 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>{children}</body>
    </html>
  );
}
