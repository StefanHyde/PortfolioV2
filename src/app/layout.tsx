import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Montserrat, Nunito_Sans } from 'next/font/google';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import ScrollToTop from '@/components/scrollToTop';
import ThemeContextProvider from '@/context/themeContext';

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
      lang="fr"
      className={`${nunito.variable} ${montserrat.variable} scroll-smooth`}
    >
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />

      <body className="selection:bg-primary-500 selection:text-almost-white caret-primary-500">
        <ThemeContextProvider>
          <Header />
          <div className="fixed top-0 left-0 -z-10 h-full w-full">
            <div className="realtive h-full w-full bg-white dark:bg-slate-950">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:14px_24px]"></div>
            </div>
          </div>
          <ScrollToTop />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
