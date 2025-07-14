import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi2';

import { useTranslations } from 'next-intl';

import Experiences from '@/components/experiences';
import PageTitle from '@/components/pageTitle';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export const metadata: Metadata = {
  title: 'Développé par Stefan H - A propos',
  description:
    'Développeur web spécialisé dans la création de sites et d’applications web. Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives.',
  keywords:
    'développeur web, développeur freelance, développeur strasbourg, développeur react, développeur wordpress, création site web, nextjs, react, wordpress, UX UI',
  authors: [{ name: 'Stefan Heyd' }],
};

export default function About() {
  const t = useTranslations('About');
  return (
    <main>
      <div className="relative mx-auto flex max-w-2xl flex-col items-start">
        <PageTitle title={t('Hero.title')} subtitle={t('Hero.subtitle')} />
      </div>

      <div className="mx-auto mt-24 mb-12 flex w-full flex-col items-start justify-center gap-20 p-6 md:w-full md:flex-row md:p-12 xl:mt-32 xl:w-1/2">
        <div className="flex w-full justify-center md:block md:w-1/4">
          <div className="from-primary-50 to-primary-100 dark:from-primary-950 border-primary-300 dark:border-primary-950 relative flex h-44 w-44 items-center justify-center rounded-full bg-linear-to-bl shadow-xl duration-300 hover:scale-105 hover:rotate-2 md:h-52 md:w-52 dark:to-slate-950">
            <div className="border-primary-300 dark:border-primary-950 absolute inset-0 z-10 rounded-full border-8"></div>
            <Image
              src="/images/avatar2.png"
              width={200}
              height={200}
              alt="Développeur web"
              className="absolute bottom-1 -rotate-2"
            />
          </div>
        </div>

        <div className="dark:border-almost-white text-dark-800 dark:text-almost-white skew-container flex flex-col rounded-md border-solid p-8 backdrop-blur-md md:w-3/4">
          <div className="text-normal font-montserrat text-sm font-light md:text-base">
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw('presentation-paragraph'),
              }}
            />
          </div>
        </div>
      </div>

      <div className="text-dark-800 dark:text-almost-white mx-auto flex w-full max-w-7xl flex-col justify-center gap-10 p-6 md:flex-row md:p-12">
        <Experiences />
        <Skills />
      </div>

      <div className="mx-auto mt-12 mb-12 flex flex-col items-center justify-center p-6 md:p-12">
        <p className="text-normal font-montserrat text-dark-900 dark:text-almost-white text-center text-sm font-light md:text-base">
          {t('vous-souhaitez-en-savoir-plus-CV')}
        </p>
        <Link
          href="/assets/CvHeydStephane.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
            {t('telecharger-mon-CV')}
            <HiOutlineDocumentText className="ml-2 inline-block h-5 w-5" />
          </button>
        </Link>
      </div>
      <div className="text-dark-800 dark:text-almost-white mx-auto flex w-full max-w-7xl flex-col justify-center gap-10 p-6 md:flex-row md:p-12">
        <Projects />
      </div>
    </main>
  );
}
