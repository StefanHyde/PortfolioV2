import Hero from '../components/hero';
import Intro from '@/components/intro';
import About from '@/components/about';
import ContactForm from '@/components/contactForm';

export default function Home() {
  return (
    <main>
      <div className="relative mx-auto h-screen w-full max-w-7xl flex items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          surtitle="developpé par"
          title="Stefan H"
          subtitle="Site ou application web ? Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives"
          CTA={{ text: 'En savoir plus', url: '#introduction ' }}
          CTA2={{ text: 'Un projet ? Venez en parler', url: '#contact' }}
        />
      </div>
      <div
        id="introduction"
        className="mx-auto flex items-center justify-center  w-full max-w-7xl p-6 mb-12 md:p-12"
      >
        <Intro />
      </div>
      <div
        id="about"
        className="mx-auto flex items-center justify-center  w-full max-w-7xl p-6 mb-12 md:p-12"
      >
        <About />
      </div>
      <div
        id="contact"
        className="mx-auto flex items-center justify-center  w-full max-w-7xl p-6 md:p-12"
      >
        <ContactForm />
      </div>
    </main>
  );
}
