import Link from 'next/link';
import PageTitle from '@/components/pageTitle';
import ServicesGrid from '@/components/servicesGrid';
import { HiOutlineEnvelope } from 'react-icons/hi2';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développé par Stefan H - Mes services',
  description:
    'Développeur web spécialisé dans la création de sites et d’applications web. Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives.',
  keywords:
    'développeur web, développeur freelance, création site web, création applications web, web app, saas, react, wordpress, blog',
  authors: [{ name: 'Stefan Heyd' }],
};

export default function Services() {
  return (
    <main>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="realtive h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-start ">
        <PageTitle
          title="Mes services & solutions"
          subtitle="Création de sites vitrines, applications web, … Des solutions personnalisées pour donner vie à vos projets numériques."
        />
      </div>

      <ServicesGrid />

      <div className="mx-auto flex flex-col justify-center items-center mt-12 p-6 mb-12 md:p-12">
        <p className="text-normal text-center text-sm md:text-base font-montserrat font-light  text-dark-900 dark:text-almost-white">
          Vous souhaitez en savoir davantage sur les prestations que je propose
          ? Ou vous souhaitez me confier un projet ? Je suis à votre écoute.
        </p>
        <Link href="/#contact">
          <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
            Me contacter
            <HiOutlineEnvelope className="h-5 w-5 ml-2 inline-block" />
          </button>
        </Link>
      </div>
    </main>
  );
}
