import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import ActiveSectionContectProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prathibha | Personal Portfolio',
  description: 'Prathibha is a Fullstack developer with 3 years of experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10' />

        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-33rem] 2xl:left-[-5rem] -z-10' />
        <ActiveSectionContectProvider>
        <Header />
        {children}
        <Toaster position='top-right'/>
        </ActiveSectionContectProvider>
      </body>
    </html>
  );
}
