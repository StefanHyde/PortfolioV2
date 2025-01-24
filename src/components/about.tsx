'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

import useAnimateOnView from '@/hooks/useAnimateOnView';

export default function About() {
  const { ref: refFirstTitle, controls: controlsFirstTitle } =
    useAnimateOnView();
  const { ref: refSecondTitle, controls: controlsSecondTitle } =
    useAnimateOnView();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="text-dark-800 dark:text-almost-white mb-12 justify-start md:w-2/3">
        <h2 className="font-montserrat mb-6 text-4xl font-semibold md:text-5xl">
          <motion.div
            ref={refFirstTitle}
            className="from-primary-800 to-primary-400 text-primary-500 inline-block bg-linear-to-r bg-clip-text text-6xl text-transparent md:text-7xl"
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
            className="from-secondary-500 to-secondary-200 inline-block bg-linear-to-r bg-clip-text text-6xl text-transparent md:text-7xl"
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

      <div className="relative mt-24 flex flex-col items-center xl:mt-12 xl:w-1/2 xl:flex-row">
        <div className="dark:border-almost-white text-dark-800 dark:text-almost-white skew-container flex flex-col rounded-md border-solid p-8 pt-28 backdrop-blur-md md:pt-32 xl:pt-12 xl:pr-28">
          <p className="text-normal font-montserrat mb-6 text-sm font-light md:text-base">
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
          <p className="text-normal font-montserrat mb-6 text-sm font-light md:text-base">
            Ensemble, nous donnerons vie à vos projets avec des solutions qui
            allient esthétique, fonctionnalité et longévité. Je suis ici pour
            <strong>
              {' '}
              écouter et créer des solutions qui soutiennent votre vision
            </strong>
            .
          </p>
          <p className="text-normal font-montserrat text-sm font-normal md:text-base">
            <strong>
              Faites le choix d’un développement pensé pour vous et vos
              utilisateurs.{' '}
            </strong>
          </p>
        </div>

        <div className="from-primary-50 to-primary-100 dark:from-primary-950 border-primary-300 dark:border-primary-950 absolute -top-24 z-10 flex h-44 w-44 items-center justify-center rounded-full border-8 bg-linear-to-bl shadow-xl duration-300 hover:scale-105 hover:rotate-2 md:h-52 md:w-52 xl:-top-12 xl:-right-24 dark:to-slate-950">
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
        <button className="bg-primary-600 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-primary-600 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 font-montserrat mt-10 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
          En savoir plus
          <HiOutlineArrowRightCircle className="ml-2 inline-block h-5 w-5" />
        </button>
      </Link>
    </div>
  );
}
