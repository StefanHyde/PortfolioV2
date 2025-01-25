'use client';
import { motion } from 'framer-motion';

import useAnimateOnInView from '@/hooks/useAnimateOnView';

export default function ServicesGrid() {
  const { ref: refService1, controls: controlsService1 } = useAnimateOnInView();
  const { ref: refService2, controls: controlsService2 } = useAnimateOnInView();
  const { ref: refService3, controls: controlsService3 } = useAnimateOnInView();
  const { ref: refService4, controls: controlsService4 } = useAnimateOnInView();
  return (
    <div className="text-dark-800 dark:text-almost-white mx-auto mt-24 flex w-full max-w-7xl grid-cols-2 grid-rows-2 flex-col gap-10 overflow-hidden p-6 md:grid md:p-12">
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
        className="dark:border-almost-white text-dark-800 dark:text-almost-white skew-container relative flex h-fit w-full flex-col items-start justify-start gap-6 rounded-md border-solid p-6 backdrop-blur-md md:p-12"
      >
        <h2 className="font-montserrat text-dark-800 dark:text-almost-white text-2xl font-bold">
          Site web <span className="ml-3 text-4xl">🧑‍💻</span>
        </h2>
        <p className="text-normal font-montserrat text-sm font-light md:text-base">
          Des sites vitrines, e-commerces et blogs sur mesure avec{' '}
          <strong>WordPress ou Next.js/React</strong>. Que vous souhaitiez
          présenter votre entreprise, vendre vos produits ou partager vos idées,
          je conçois des sites web personnalisés et performants, adaptés à vos
          besoins et à votre image. Grâce à des solutions modernes comme
          WordPress pour la flexibilité ou Next.js/React pour des performances
          optimales,{' '}
          <strong>
            votre présence en ligne sera à la hauteur de vos ambitions.
          </strong>
        </p>
        <div className="bg-primary-500 dark:bg-primary-900 animate-blob absolute top-12 -z-10 h-40 w-40 rounded-full opacity-10 mix-blend-multiply blur-2xl filter md:-right-3/4 md:h-96 md:w-96 dark:opacity-30"></div>
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
        className="dark:border-almost-white text-dark-800 dark:text-almost-white skew-container__reverse relative flex h-fit w-full flex-col items-start justify-start gap-6 rounded-md border-solid p-6 backdrop-blur-md md:mt-64 md:p-12"
      >
        <div className="bg-secondary-500 dark:bg-secondary-800 animate-blob absolute top-0 -z-10 h-40 w-40 rounded-full opacity-20 mix-blend-multiply blur-2xl filter md:-left-3/4 md:h-72 md:w-72 dark:opacity-30"></div>

        <h2 className="font-montserrat text-dark-800 dark:text-almost-white text-2xl font-bold">
          Application Web<span className="ml-3 text-4xl">⚙️</span>
        </h2>
        <p className="text-normal font-montserrat text-sm font-light md:text-base">
          <strong>
            Une application web sur mesure pour répondre à vos besoins
          </strong>
          . Je vous accompagne dans la création de votre application web, de la
          conception à la mise en ligne. Que ce soit pour un dashboard
          interactif, une solution SaaS ou un outil de reporting, je conçois une{' '}
          <strong>
            application parfaitement adaptée à vos attentes et à vos objectifs
          </strong>
          .
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
        className="dark:border-almost-white text-dark-800 dark:text-almost-white skew-container relative flex h-fit w-full flex-col items-start justify-start gap-6 rounded-md border-solid p-6 backdrop-blur-md md:p-12"
      >
        <h2 className="font-montserrat text-dark-800 dark:text-almost-white text-2xl font-bold">
          UX / UI <span className="ml-3 text-4xl">🌈</span>
        </h2>
        <p className="text-normal font-montserrat text-sm font-light md:text-base">
          <strong>
            Un design adapté pour une expérience utilisateur optimale
          </strong>
          . Allier esthétique soignée, une navigation intuitive, et une
          interface accessible pour garantir le succès de votre site web ou
          application. Je conçois des designs personnalisés, en parfaite
          harmonie avec votre identité visuelle, pour offrir{' '}
          <strong>
            une expérience captivante et mémorable à vos utilisateurs
          </strong>
          .
        </p>
        <div className="bg-primary-500 dark:bg-primary-900 animate-blob absolute top-0 -z-10 h-40 w-40 rounded-full opacity-10 mix-blend-multiply blur-2xl filter md:-right-3/4 md:h-96 md:w-96 dark:opacity-30"></div>
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
        className="dark:border-almost-white text-dark-800 dark:text-almost-white skew-container__reverse relative flex h-fit w-full flex-col items-start justify-start gap-6 rounded-md border-solid p-6 backdrop-blur-md md:mt-64 md:p-12"
      >
        <div className="bg-secondary-500 dark:bg-secondary-800 animate-blob absolute top-0 -z-10 h-40 w-40 rounded-full opacity-20 mix-blend-multiply blur-2xl filter md:-left-3/4 md:h-72 md:w-72 dark:opacity-30"></div>

        <h2 className="font-montserrat text-dark-800 dark:text-almost-white text-2xl font-bold">
          Optimisation et maintenance<span className="ml-3 text-4xl">🚀</span>
        </h2>
        <p className="text-normal font-montserrat text-sm font-light md:text-base">
          Maintenance et optimisation :{' '}
          <strong>un site toujours à jour et performant</strong>. Un site web ou
          une application nécessite un suivi constant pour rester rapide,
          sécurisé et efficace. Je vous propose des services de maintenance
          régulière et d&apos;optimisation technique, assurant{' '}
          <strong>
            la pérennité, la maintenabilité et la performance de votre projet au
            fil du temps
          </strong>
          .
        </p>
      </motion.div>
    </div>
  );
}
