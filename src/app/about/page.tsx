'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageTitle from '@/components/pageTitle';
import { experiencesData } from '../../../lib/data';

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

        <div className="flex flex-col  md:w-3/4 p-8  backdrop-blur-md border-solid  dark:border-almost-white rounded-md dark:text-almost-white skew-container">
          <p className="text-normal text-sm md:text-base font-montserrat font-light ">
            Je suis Stéphane, développeur web basé en France.
            <br />
            Après de nombreuses expériences dans le support technique et la
            communication, j'ai décidé de me reconvertir dans le domaine du
            développement web. Grâce à l'attrait qui m'anime et à ma soif de
            nouvelles connaissances je peux chaque jour, apprendre de nouvelles
            choses : langages, frameworks, techniques... Le tout afin de
            m'adapter au mieux à chaque nouveau challenge qui s'offre à moi.
            <br />
            Au-delà de ma curiosité je suis également créatif, dans divers
            domaines. J'utilise cet atout dans le cadre du développement pour
            proposer des solutions originales et adaptées à chaque projet.
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center w-full max-w-7xl p-6 md:p-12">
        <h2 className=" justify-start mb-12 text-4xl md:text-5xl font-montserrat font-semibold  bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500">
          Expériences
        </h2>

        <div className="w-full md:w-2/4 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md text-center">
          {experiencesData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 md:p-8 mb-8   dark:text-almost-white  from-primary-50 dark:from-primary-950  text-center"
            >
              <h3 className="text-2xl font-montserrat font-semibold">
                {experience.title}
              </h3>
              <p className="text-normal text-sm md:text-base font-montserrat font-light">
                {experience.company}
              </p>
              <p className="text-normal text-sm md:text-base font-montserrat font-light">
                {experience.date}
              </p>
              <p className="text-normal text-sm md:text-base font-montserrat font-light">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                {experience.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="p-1  bg-primary-500 dark:bg-secondary-500 text-almost-white"
                  >
                    <p className="text-normal text-sm md:text-base font-montserrat font-light">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
