import type { Metadata } from 'next';
import Link from 'next/link';
import { HiOutlineEnvelope } from 'react-icons/hi2';

import PageTitle from '@/components/pageTitle';
import ServicesGrid from '@/components/servicesGrid';

export const metadata: Metadata = {
  title: 'Développé par Stefan H - Mes services',
  description:
    'Développeur web spécialisé dans la création de sites et d’applications web. Transformons ensemble vos idées en solutions modernes, accessibles, et inclusives.',
  keywords:
    'développeur web, développeur freelance, développeur strasbourg, développeur react, développeur wordpress, création site web, création applications web, web app, saas, react, wordpress, UX/UI, graphisme',
  authors: [{ name: 'Stefan Heyd' }],
};

export default function Services() {
  return (
    <main>
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="realtive h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-start">
        <PageTitle
          title="Mes services & solutions"
          subtitle="Création de sites vitrines, applications web, … Des solutions personnalisées pour donner vie à vos projets numériques."
        />
      </div>

      <ServicesGrid />

      <div className="mx-auto mt-12 mb-12 flex flex-col items-center justify-center p-6 md:p-12">
        <p className="text-normal font-montserrat text-dark-900 dark:text-almost-white text-center text-sm font-light md:text-base">
          Vous souhaitez en savoir davantage sur les prestations que je propose
          ? Ou vous souhaitez me confier un projet ? Je suis à votre écoute.
        </p>
        <Link href="/#contact">
          <button className="bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
            Me contacter
            <HiOutlineEnvelope className="ml-2 inline-block h-5 w-5" />
          </button>
        </Link>
      </div>
    </main>
  );
}
