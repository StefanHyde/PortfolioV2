import { Nunito_Sans, Montserrat } from 'next/font/google';

import { GoogleAnalytics } from '@next/third-parties/google';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scrollToTop';
import ThemeContextProvider from '@/context/themeContext';

import type { Metadata } from 'next';
import type { Viewport } from 'next';
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
  title: 'Développé par Stefan H',
  description:
    'Développeur web spécialisé dans la création de sites et d’applications web. Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives.',
  keywords:
    'développeur web, développeur strasbourg, développeur react, développeur wordpress, site web, application web, développement web, react, wordpress, UX UI, accessibilité',
  authors: [{ name: 'Stefan Heyd' }],
};
export const viewport: Viewport = {
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${montserrat.variable} scroll-smooth`}
    >
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />

      <body>
        <ThemeContextProvider>
          <Header />
          <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="realtive h-full w-full bg-white dark:bg-slate-950">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            </div>
          </div>
          <ScrollToTop />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
