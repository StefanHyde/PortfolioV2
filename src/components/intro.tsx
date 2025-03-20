'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import useAnimateOnView from '../hooks/useAnimateOnView';

export default function Intro() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('HomePage.IntroSection');

  const { ref: refFirst, controls: controlsFirst } = useAnimateOnView();
  const { ref: refSecond, controls: controlsSecond } = useAnimateOnView();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="text-dark-800 dark:text-almost-white mb-12 justify-start md:w-2/3">
        <h2 className="font-montserrat mb-6 text-4xl font-semibold md:text-5xl">
          {t('quelque-soit-vos')}{' '}
          <motion.div
            ref={refFirst}
            style={{ overflow: 'hidden' }}
            className="from-primary-800 to-primary-400 text-primary-500 inline-block bg-linear-to-r bg-clip-text text-6xl md:text-7xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsFirst}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            {t('ambitions')}
          </motion.div>{' '}
          {t('je-vous-trouve-la')}{' '}
          <motion.span
            ref={refSecond}
            className="from-secondary-500 to-secondary-200 inline-block bg-linear-to-r bg-clip-text text-6xl text-transparent md:text-7xl"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controlsSecond}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.5 }}
          >
            {t('solution')}
          </motion.span>
        </h2>
        <p className="text-normal font-montserrat mt-10 font-light md:text-lg">
          {t('intro-paragraph')}
        </p>
      </div>

      <div className="font-montserrat text-dark-800 dark:text-almost-white hidden grid-flow-col gap-4 md:grid md:w-full md:grid-rows-3 xl:w-3/4">
        <div className="border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 row-span-3 flex flex-col rounded-md border-2 border-solid bg-linear-to-br to-transparent p-4 shadow-md backdrop-blur-md md:rounded-l-2xl">
          <h3 className="mb-4 text-2xl font-semibold">
            {t('site-web')}
            <span className="ml-3 text-4xl">🧑‍💻</span>
          </h3>
          <p className="text-sm font-extralight">
            {t.rich('site-web-description', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>
        <div className="border-primary-500 dark:border-almost-white dark:text-almost-white from-primary-50 dark:from-primary-950 row-span-2 rounded-md border-2 border-solid bg-linear-to-b to-transparent p-4 text-center shadow-md backdrop-blur-md">
          <h3 className="mb-4 text-2xl font-semibold">
            {t('application-web')}
            <span className="ml-3 text-4xl">⚙️</span>
          </h3>
          <p className="text-sm font-extralight">
            {t('application-web-description')}
          </p>
        </div>
        <div className="border-primary-500 dark:border-almost-white dark:text-almost-white from-primary-50 dark:from-primary-950 row-span-1 rounded-md border-2 border-solid bg-linear-to-t to-transparent p-4 text-center shadow-md backdrop-blur-md">
          <h3 className="mb-4 text-2xl font-semibold">
            {t('conseil')}
            <span className="ml-3 text-4xl">👨‍🏫</span>
          </h3>
          <p className="text-sm font-extralight">{t('conseil-description')}</p>
        </div>
        <div className="border-primary-500 dark:border-almost-white dark:text-almost-white from-primary-50 dark:from-primary-950 row-span-1 rounded-md border-2 border-solid bg-linear-to-bl to-transparent p-4 text-end shadow-md backdrop-blur-md md:rounded-tr-2xl">
          <h3 className="mb-4 text-2xl font-semibold">
            {t('optimisation')}
            <span className="ml-3 text-4xl">🚀</span>
          </h3>
          <p className="text-sm font-extralight">
            {t('optimisation-description')}
          </p>
        </div>
        <div className="border-primary-500 dark:border-almost-white dark:text-almost-white from-primary-50 dark:from-primary-950 row-span-2 rounded-md border-2 border-solid bg-linear-to-tl to-transparent p-4 text-end shadow-md backdrop-blur-md md:rounded-br-2xl">
          <h3 className="mb-4 text-2xl font-semibold">
            {t('ux-ui')}
            <span className="ml-3 text-4xl">🌈</span>
          </h3>
          <p className="text-sm font-extralight">{t('ux-ui-description')}</p>
        </div>
      </div>

      {
        //Alternative mobile grid
      }
      <div className="font-montserrat text-dark-800 dark:text-almost-white grid grid-cols-2 grid-rows-3 gap-4 md:hidden">
        <div className="border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 row-span-1 flex w-full flex-col rounded-md border-2 border-solid bg-linear-to-b to-transparent p-4 shadow-md backdrop-blur-md md:rounded-l-2xl">
          <h3 className="mb-4 flex flex-col items-center text-center text-xl font-semibold">
            {t('site-web')}
            <span className="mt-4 text-3xl">🧑‍💻</span>
          </h3>
        </div>
        <div className="border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 row-span-1 flex w-full flex-col rounded-md border-2 border-solid bg-linear-to-b to-transparent p-4 shadow-md backdrop-blur-md md:rounded-l-2xl">
          <h3 className="mb-4 flex flex-col items-center text-center text-xl font-semibold">
            {t('application-web')}
            <span className="mt-4 text-3xl">⚙️</span>
          </h3>
        </div>
        <div className="border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 row-span-1 flex w-full flex-col rounded-md border-2 border-solid bg-linear-to-r to-transparent p-4 shadow-md backdrop-blur-md md:rounded-l-2xl">
          <h3 className="mb-4 flex flex-col items-center text-center text-xl font-semibold">
            {t('conseil')}
            <span className="mt-4 text-3xl">👨‍🏫</span>
          </h3>
        </div>
        <div className="border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 row-span-1 flex w-full flex-col rounded-md border-2 border-solid bg-linear-to-l to-transparent p-4 shadow-md backdrop-blur-md md:rounded-l-2xl">
          <h3 className="mb-4 flex flex-col items-center text-center text-xl font-semibold">
            {t('optimisation')}
            <span className="mt-4 text-3xl">🚀</span>
          </h3>
        </div>
        <div className="border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 col-span-2 row-span-1 flex w-1/2 flex-col place-self-center rounded-md border-2 border-solid bg-linear-to-t to-transparent p-4 shadow-md backdrop-blur-md md:rounded-l-2xl">
          <h3 className="mb-4 flex flex-col items-center text-center text-xl font-semibold">
            {t('ux-ui')}
            <span className="mt-4 text-3xl">🌈</span>
          </h3>
        </div>
      </div>

      <Link href={`${locale}/services`}>
        <button className="bg-primary-600 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-primary-600 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 font-montserrat mt-10 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
          {t('decouvrez-mes-services')}
          <HiOutlineArrowRightCircle className="ml-2 inline-block h-5 w-5" />
        </button>
      </Link>
    </div>
  );
}
