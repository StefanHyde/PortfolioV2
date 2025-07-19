import type { Metadata } from 'next';

import { useTranslations } from 'next-intl';

import About from '@/components/about';
import ContactForm from '@/components/contactForm';
import Intro from '@/components/intro';

import Hero from '../../components/hero';

export const metadata: Metadata = {
  description:
    'Développeur web spécialisé dans la création de sites et d’applications web. Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives.',
  keywords:
    'développeur web, développeur freelance, développeur strasbourg, développeur react, développeur wordpress, création site web, création application web, développement web, react, wordpress, UX UI, accessibilité',
  authors: [{ name: 'Stefan Heyd' }],
};

export default function Home() {
  const t = useTranslations('HomePage.Hero');
  return (
    <main>
      <div className="relative mx-auto flex h-screen w-full max-w-7xl items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          surtitle={t('surtitle')}
          title="Stefan H"
          subtitle={t('subtitle')}
          CTA={{ text: t('en-savoir-plus'), url: '#introduction' }}
          CTA2={{ text: t('un-projet-?-venez-en-parler'), url: '#contact' }}
        />
      </div>
      <div
        id="introduction"
        className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-center p-6 md:p-12"
      >
        <Intro />
      </div>
      <div
        id="about"
        className="mx-auto mb-12 flex w-full max-w-7xl items-center justify-center p-6 md:p-12"
      >
        <About />
      </div>
      <div
        id="contact"
        className="mx-auto flex w-full max-w-7xl items-center justify-center p-6 md:p-12"
      >
        <ContactForm />
      </div>
    </main>
  );
}
