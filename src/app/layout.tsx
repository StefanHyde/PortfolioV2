import { Nunito_Sans, Montserrat } from 'next/font/google';

import Header from '../components/header';
import ThemeContextProvider from '@/context/themeContext';

import type { Metadata } from 'next';
import './globals.css';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Developped by Stefan Heyd',
  description: 'My new portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${montserrat.variable}`}>
      <body>
        <ThemeContextProvider>
          <Header />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
