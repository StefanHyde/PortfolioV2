'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useAnimateOnView from '@/hooks/useAnimateOnView';
import { projectsData } from './../../lib/data';
import { SiGithub } from 'react-icons/si';

export default function Projects() {
  const { ref: refProjectTitle, controls: controlsProjectTitle } =
    useAnimateOnView();
  const { ref: refProject, controls: controlsProject } = useAnimateOnView();

  return (
    <div ref={refProject} className="flex flex-col w-full xl:w-3/4">
      <div className="flex flex-col w-full">
        <motion.h2
          ref={refProjectTitle}
          className="text-center  mb-12 text-4xl md:text-5xl font-montserrat font-semibold bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-montserrat text-dark-800 dark:text-almost-white">
          {projectsData.map((project, index) => (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden backdrop-blur-md pt-0 pb-8 px-0 border-solid border-2  border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md text-center hover:shadow-lg ease-in-out duration-300"
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
                  className="w-full h-32 md:h-48 mb-6 object-cover object-left"
                />
                <figcaption>
                  <h3 className="text-2xl font-montserrat font-semibold group-hover:text-primary-500 ease-in-out duration-300">
                    {project.title}
                  </h3>
                </figcaption>

                <p className="my-8 px-4 text-normal text-sm font-extralight font-montserrat group-hover:text-primary-500 ease-in-out duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-3">
                  {project.services.map((service, index) => (
                    <div
                      key={index}
                      className="p-1 bg-primary-500 text-sm text-almost-white"
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
      <div className="mx-auto flex flex-col justify-center items-center mt-12 p-6 mb-12 md:p-12">
        <p className="text-normal text-center text-sm md:text-base font-montserrat font-light  text-dark-900 dark:text-almost-white">
          Davantage de projets sont disponibles sur mon repo GitHub !
          N&apos;hésitez pas à y jeter un oeil.{' '}
          <span className="text-black">🙌</span>
        </p>
        <Link
          href="https://github.com/DrHyde01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex bg-primary-600 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-600 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
            Vers mon repo
            <SiGithub className="h-5 w-5 ml-2 inline-block" />
          </button>
        </Link>
      </div>
    </div>
  );
}
