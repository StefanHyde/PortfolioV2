import Hero from '../components/hero';
import Intro from '@/components/intro';
import About from '@/components/about';
import ContactForm from '@/components/contactForm';

export default function Home() {
  return (
    <main>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="realtive h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl flex items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          surtitle="developpé par:"
          title="Stefan Heyd"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          CTA={{ text: 'En savoir plus', url: '#introduction ' }}
          CTA2={{ text: 'Un projet ? Venez en parler', url: '/' }}
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
