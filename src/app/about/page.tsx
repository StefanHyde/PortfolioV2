'use client';
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/components/pageTitle';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import { HiOutlineDocumentText } from 'react-icons/hi2';

export default function About() {
  return (
    <main>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="realtive h-full w-full bg-white dark:bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-start ">
        <PageTitle title="À propos" subtitle="Mon parcours, mes expériences" />
      </div>

      <div className="mx-auto flex flex-col md:flex-row items-start justify-center gap-20 w-full md:w-full xl:w-1/2 p-6 mb-12 md:p-12 mt-24 xl:mt-32">
        <div className="w-full md:w-1/4 flex justify-center md:block">
          <div className="relative flex items-center justify-center bg-gradient-to-bl from-primary-50 to-primary-100 dark:from-primary-950 dark:to-slate-950 h-44 w-44 md:h-52 md:w-52 rounded-full  border-primary-300 dark:border-primary-950 shadow-xl hover:rotate-2 hover:scale-105 duration-300">
            <div className="absolute inset-0 border-8 border-primary-300 dark:border-primary-950 rounded-full z-10"></div>
            <Image
              src="/images/avatar2.png"
              width={200}
              height={200}
              alt="Développeur web"
              className="absolute bottom-1 -rotate-2"
            />
          </div>
        </div>

        <div className="flex flex-col  md:w-3/4 p-8  backdrop-blur-md border-solid  dark:border-almost-white rounded-md text-dark-800 dark:text-almost-white skew-container">
          <p className="text-normal text-sm md:text-base font-montserrat font-light ">
            Je suis Stéphane, développeur web basé en France.
            <br />
            Après de nombreuses expériences dans le support technique et la
            communication, j&apos;ai décidé de me reconvertir dans le domaine du
            développement web. Grâce à l&apos;attrait qui m&apos;anime et à ma
            soif de nouvelles connaissances je peux chaque jour, apprendre de
            nouvelles choses : langages, frameworks, techniques... Le tout afin
            de m&rsquo;adapter au mieux à chaque nouveau challenge qui
            s&rsquo;offre à moi.
            <br />
            Au-delà de ma curiosité je suis également créatif, dans divers
            domaines. J&apos;utilise cet atout dans le cadre du développement
            pour proposer des solutions originales et adaptées à chaque projet.
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col md:flex-row justify-center w-full max-w-7xl gap-10 p-6 md:p-12 text-dark-800 dark:text-almost-white">
        <Experiences />
        <Skills />
      </div>

      <div className="mx-auto flex flex-col justify-center items-center mt-12 p-6 mb-12 md:p-12">
        <p className="text-normal text-center text-sm md:text-base font-montserrat font-light  text-dark-900 dark:text-almost-white">
          Vous souhaitez en savoir davantage ? Téléchargez mon CV ci-dessous.
        </p>
        <Link
          href="/assets/CvHeydStephane.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
            Télécharger mon CV
            <HiOutlineDocumentText className="h-5 w-5 ml-2 inline-block" />
          </button>
        </Link>
      </div>
    </main>
  );
}
