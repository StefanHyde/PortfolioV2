'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

import useAnimateOnView from '@/hooks/useAnimateOnView';

import { projectsData } from './../../lib/data';

export default function Projects() {
  const { ref: refProjectTitle, controls: controlsProjectTitle } =
    useAnimateOnView();
  const { ref: refProject, controls: controlsProject } = useAnimateOnView();

  return (
    <div ref={refProject} className="flex w-full flex-col xl:w-3/4">
      <div className="flex w-full flex-col">
        <motion.h2
          ref={refProjectTitle}
          className="font-montserrat from-primary-800 to-primary-400 text-primary-500 mb-12 inline-block bg-linear-to-r bg-clip-text text-center text-4xl font-semibold text-transparent md:text-5xl"
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsProjectTitle}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.5 }}
        >
          Projets <span className="text-black">💼</span>
        </motion.h2>

        <div className="font-montserrat text-dark-800 dark:text-almost-white grid grid-cols-1 gap-4 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-primary-500 dark:border-almost-white dark:text-almost-white from-primary-50 dark:from-primary-950 overflow-hidden rounded-md border-2 border-solid bg-linear-to-b to-transparent px-0 pt-0 pb-8 text-center shadow-md backdrop-blur-md duration-300 ease-in-out hover:shadow-lg"
              key={index}
            >
              <motion.figure
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={controlsProject}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  className="mb-6 h-32 w-full object-cover object-left md:h-48"
                />
                <figcaption>
                  <h3 className="font-montserrat group-hover:text-primary-500 text-2xl font-semibold duration-300 ease-in-out">
                    {project.title}
                  </h3>
                </figcaption>

                <p className="text-normal font-montserrat group-hover:text-primary-500 my-8 px-4 text-sm font-extralight duration-300 ease-in-out">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-4">
                  {project.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-primary-500 text-almost-white p-1 text-sm"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </motion.figure>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 mb-12 flex flex-col items-center justify-center p-6 md:p-12">
        <p className="text-normal font-montserrat text-dark-900 dark:text-almost-white text-center text-sm font-light md:text-base">
          Davantage de projets sont disponibles sur mon repo GitHub !
          N&apos;hésitez pas à y jeter un oeil.{' '}
          <span className="text-black">🙌</span>
        </p>
        <Link
          href="https://github.com/DrHyde01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
            Vers mon repo
            <SiGithub className="ml-2 inline-block h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
