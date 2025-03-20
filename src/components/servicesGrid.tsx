'use client';
import { motion } from 'framer-motion';

import { useTranslations } from 'next-intl';

import useAnimateOnInView from '@/hooks/useAnimateOnView';

export default function ServicesGrid() {
  const { ref: refService1, controls: controlsService1 } = useAnimateOnInView();
  const { ref: refService2, controls: controlsService2 } = useAnimateOnInView();
  const { ref: refService3, controls: controlsService3 } = useAnimateOnInView();
  const { ref: refService4, controls: controlsService4 } = useAnimateOnInView();
  const t = useTranslations('Services.servicesGrid');
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
          {t('site-web')} <span className="ml-3 text-4xl">🧑‍💻</span>
        </h2>
        <p
          className="text-normal font-montserrat text-sm font-light md:text-base"
          dangerouslySetInnerHTML={{
            __html: t.raw('site-web-description'),
          }}
        ></p>
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
          {t('application-web')} <span className="ml-3 text-4xl">⚙️</span>
        </h2>
        <p
          className="text-normal font-montserrat text-sm font-light md:text-base"
          dangerouslySetInnerHTML={{
            __html: t.raw('application-web-description'),
          }}
        ></p>
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
          {t('ux-ui')} <span className="ml-3 text-4xl">🌈</span>
        </h2>
        <p
          className="text-normal font-montserrat text-sm font-light md:text-base"
          dangerouslySetInnerHTML={{
            __html: t.raw('ux-ui-description'),
          }}
        ></p>
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
          {t('optimisation-maintenance')}
          <span className="ml-3 text-4xl">🚀</span>
        </h2>
        <p
          className="text-normal font-montserrat text-sm font-light md:text-base"
          dangerouslySetInnerHTML={{
            __html: t.raw('optimisation-maintenance-description'),
          }}
        ></p>
      </motion.div>
    </div>
  );
}
