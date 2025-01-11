'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useAnimateOnView from '@/hooks/useAnimateOnView';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

export default function About() {
  const { ref: refFirstTitle, controls: controlsFirstTitle } =
    useAnimateOnView();
  const { ref: refSecondTitle, controls: controlsSecondTitle } =
    useAnimateOnView();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="justify-start mb-12  text-dark-800 dark:text-almost-white md:w-2/3">
        <h2 className="mb-6 text-4xl md:text-5xl font-montserrat font-semibold">
          <motion.div
            ref={refFirstTitle}
            className="text-6xl md:text-7xl bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsFirstTitle}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            Développer
          </motion.div>{' '}
          et vous
          <motion.div
            ref={refSecondTitle}
            className="text-6xl md:text-7xl bg-gradient-to-r from-secondary-500 to-secondary-200 inline-block text-transparent bg-clip-text"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsSecondTitle}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            écouter
          </motion.div>{' '}
        </h2>
      </div>

      <div className="relative flex flex-col items-center xl:flex-row xl:w-1/2 mt-24 xl:mt-12">
        <div className="flex flex-col p-8 pt-28 md:pt-32 xl:pt-12 xl:pr-28 backdrop-blur-md border-solid  dark:border-almost-white rounded-md text-dark-800 dark:text-almost-white skew-container">
          <p className="text-normal text-sm md:text-base font-montserrat font-light mb-6">
            Je suis Stefan, <strong>développeur passionné et engagé</strong>,
            spécialisé dans la création de sites et d’applications web sur
            mesure. Mon objectif : transformer vos idées en solutions numériques{' '}
            <strong>modernes, accessibles, et performantes</strong>. À l’écoute
            de vos besoins et de vos ambitions, je conçois des interfaces
            ergonomiques, inclusives et adaptées à tous vos utilisateurs, tout
            en respectant les standards UX/UI actuels. Ensemble, nous bâtirons
            une <strong>expérience numérique qui reflète votre identité</strong>{' '}
            tout en captivant et fidélisant votre audience.
          </p>
          <p className="text-normal text-sm md:text-base font-montserrat font-light mb-6">
            Ensemble, nous donnerons vie à vos projets avec des solutions qui
            allient esthétique, fonctionnalité et longévité. Je suis ici pour
            <strong>
              {' '}
              écouter et créer des solutions qui soutiennent votre vision
            </strong>
            .
          </p>
          <p className="text-normal font-normal text-sm md:text-base font-montserrat">
            <strong>
              Faites le choix d’un développement pensé pour vous et vos
              utilisateurs.{' '}
            </strong>
          </p>
        </div>

        <div className="absolute xl:-right-24 -top-24 xl:-top-12 z-10 flex items-center justify-center bg-gradient-to-bl from-primary-50 to-primary-100 dark:from-primary-950 dark:to-slate-950 h-44 w-44 md:h-52 md:w-52 rounded-full border-8 border-primary-300 dark:border-primary-950 shadow-xl hover:rotate-2 hover:scale-105 duration-300">
          <Image
            src="/images/avatar.png"
            width={300}
            height={300}
            alt="Développeur web"
            className="-rotate-12"
          />
        </div>
      </div>

      <Link href="/about">
        <button className="flex bg-primary-600 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-solid border-2 border-primary-600 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-10 rounded-md ease-in-out duration-300">
          En savoir plus
          <HiOutlineArrowRightCircle className="h-5 w-5 ml-2 inline-block" />
        </button>
      </Link>
    </div>
  );
}
