import type { Metadata } from 'next';

import About from '@/components/about';
import ContactForm from '@/components/contactForm';
import Intro from '@/components/intro';

import Hero from '../components/hero';

export const metadata: Metadata = {
  description:
    'Développeur web spécialisé dans la création de sites et d’applications web. Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives.',
  keywords:
    'développeur web, développeur freelance, développeur strasbourg, développeur react, développeur wordpress, création site web, création application web, développement web, react, wordpress, UX UI, accessibilité',
  authors: [{ name: 'Stefan Heyd' }],
};

export default function Home() {
  return (
    <main>
      <div className="relative mx-auto flex h-screen w-full max-w-7xl items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          surtitle="Développé par"
          title="Stefan H"
          subtitle="Site ou application web ? Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives"
          CTA={{ text: 'En savoir plus', url: '#introduction ' }}
          CTA2={{ text: 'Un projet ? Venez en parler', url: '#contact' }}
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
