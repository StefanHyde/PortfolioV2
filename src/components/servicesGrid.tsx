'use client';
import { motion } from 'framer-motion';
import useAnimateOnInView from '@/hooks/useAnimateOnView';

export default function ServicesGrid() {
  const { ref: refService1, controls: controlsService1 } = useAnimateOnInView();
  const { ref: refService2, controls: controlsService2 } = useAnimateOnInView();
  const { ref: refService3, controls: controlsService3 } = useAnimateOnInView();
  const { ref: refService4, controls: controlsService4 } = useAnimateOnInView();
  return (
    <div className="overflow-hidden mx-auto flex flex-col md:grid grid-cols-2 grid-rows-2 w-full max-w-7xl gap-10 p-6 md:p-12 mt-24  text-dark-800 dark:text-almost-white">
      <motion.div
        ref={refService1}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsService1}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="relative flex flex-col items-start justify-start gap-6 h-fit w-full p-6 md:p-12 backdrop-blur-md border-solid  dark:border-almost-white rounded-md text-dark-800 dark:text-almost-white skew-container"
      >
        <h2 className="text-2xl font-montserrat font-bold text-dark-800 dark:text-almost-white">
          Site web <span className="text-4xl ml-3">🧑‍💻</span>
        </h2>
        <p className="text-normal text-sm md:text-base font-montserrat font-light ">
          Vous avez besoin d&apos;un site vitrine pour présenter votre activité
          ou votre entreprise ? Je vous propose de créer un{' '}
          <strong>
            site web sur mesure, adapté à vos besoins et à votre image
          </strong>
          .
        </p>
        <div className="absolute -z-10 top-12 md:-right-3/4 w-40 md:w-96 h-40 md:h-96 bg-primary-500 dark:bg-primary-900 rounded-full opacity-10 dark:opacity-30 mix-blend-multiply filter blur-2xl animate-blob"></div>
      </motion.div>
      <motion.div
        ref={refService2}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsService2}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="relative flex flex-col items-start justify-start gap-6 h-fit w-full p-6 md:p-12 md:mt-64 backdrop-blur-md border-solid  dark:border-almost-white rounded-md text-dark-800 dark:text-almost-white skew-container__reverse"
      >
        <div className="absolute -z-10 top-0 md:-left-3/4 w-40 md:w-72 h-40 md:h-72 bg-secondary-500 dark:bg-secondary-800 rounded-full opacity-20 dark:opacity-30 mix-blend-multiply filter blur-2xl animate-blob"></div>

        <h2 className="text-2xl font-montserrat font-bold text-dark-800 dark:text-almost-white">
          Application Web<span className="text-4xl ml-3">⚙️</span>
        </h2>
        <p className="text-normal text-sm md:text-base font-montserrat font-light ">
          Une application web sur mesure pour répondre à vos besoins ? Je vous
          accompagne dans la création de votre application web, de la conception
          à la mise en ligne. Que ce soit pour un outil de gestion, un CRM, un
          ERP, ou encore un outil de reporting, je vous propose une solution
          adaptée à vos besoins.
        </p>
      </motion.div>
      <motion.div
        ref={refService3}
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsService3}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="relative flex flex-col items-start justify-start gap-6 h-fit w-full p-6 md:p-12 backdrop-blur-md border-solid  dark:border-almost-white rounded-md text-dark-800 dark:text-almost-white skew-container"
      >
        <h2 className="text-2xl font-montserrat font-bold text-dark-800 dark:text-almost-white">
          UX / UI <span className="text-4xl ml-3">🌈</span>
        </h2>
        <p className="text-normal text-sm md:text-base font-montserrat font-light ">
          Une esthétique soignée et une expérience utilisateur optimale sont des
          éléments clés pour la réussite de votre projet. Je vous propose de
          créer un design sur mesure pour votre site web ou votre application,
          en accord avec votre identité visuelle.
        </p>
        <div className="absolute top-0 -z-10 md:-right-3/4 w-40 md:w-96 h-40 md:h-96 bg-primary-500 dark:bg-primary-900 rounded-full opacity-10 dark:opacity-30 mix-blend-multiply filter blur-2xl animate-blob"></div>
      </motion.div>
      <motion.div
        ref={refService4}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsService4}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className="relative flex flex-col items-start justify-start gap-6 h-fit w-full p-6 md:p-12 md:mt-64 backdrop-blur-md border-solid  dark:border-almost-white rounded-md text-dark-800 dark:text-almost-white skew-container__reverse"
      >
        <div className="absolute -z-10 top-0 md:-left-3/4 w-40 md:w-72 h-40 md:h-72 bg-secondary-500 dark:bg-secondary-800 rounded-full opacity-20 dark:opacity-30 mix-blend-multiply filter blur-2xl animate-blob"></div>

        <h2 className="text-2xl font-montserrat font-bold text-dark-800 dark:text-almost-white">
          Optimisation et maintenance<span className="text-4xl ml-3">🚀</span>
        </h2>
        <p className="text-normal text-sm md:text-base font-montserrat font-light ">
          Un site ou une application nécessitent un suivi régulier pour rester à
          jour et performant. Je vous propose un service de maintenance et
          d&apos;optimisation pour garantir la pérennité de votre projet.
        </p>
      </motion.div>
    </div>
  );
}
