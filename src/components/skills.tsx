'use client';
import { motion } from 'framer-motion';

import useAnimateOnView from '@/hooks/useAnimateOnView';

import { skillsData } from './../../lib/data';

export default function Skills() {
  const { ref: refSkillsTitle, controls: controlsSkillsTitle } =
    useAnimateOnView();

  const { ref: refSkills, controls: controlsSkills } = useAnimateOnView();

  return (
    <div
      ref={refSkills}
      className="flex w-full flex-col overflow-hidden md:w-1/2"
    >
      <motion.h2
        ref={refSkillsTitle}
        className="font-montserrat from-secondary-500 to-secondary-200 text-primary-500 mb-12 inline-block bg-linear-to-r bg-clip-text text-center text-4xl font-semibold text-transparent md:text-right md:text-5xl"
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controlsSkillsTitle}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.5 }}
      >
        Stack technique <span className="text-black">⚙️</span>
      </motion.h2>
      <div className="border-secondary-500 dark:border-almost-white dark:text-almost-white from-secondary-50 dark:from-secondary-950 w-full rounded-md border-2 border-solid bg-linear-to-b to-transparent p-4 text-center shadow-md backdrop-blur-md md:p-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col items-end justify-end text-right"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controlsSkills}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            <h3 className="font-montserrat text-2xl font-semibold">
              Languages
            </h3>
            <div className="mt-3 mb-8 flex flex-wrap justify-end gap-4">
              {skill.languages.map((language, index) => (
                <div
                  key={index}
                  className="text- bg-secondary-500 text-almost-white p-1"
                >
                  <p className="text-normal font-montserrat text-sm font-light">
                    {language}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="font-montserrat mt-4 text-2xl font-semibold">
              Technologies Frontend
            </h3>
            <div className="mt-3 mb-8 flex flex-wrap justify-end gap-4">
              {skill.technologies.frontEnd.map((tech, index) => (
                <div
                  key={index}
                  className="bg-secondary-500 text-almost-white p-1"
                >
                  <p className="text-normal font-montserrat text-sm font-light">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="font-montserrat mt-4 text-2xl font-semibold">
              Technologies Backend
            </h3>
            <div className="mt-3 mb-8 flex flex-wrap justify-end gap-4">
              {skill.technologies.backEnd.map((tech, index) => (
                <div
                  key={index}
                  className="bg-secondary-500 text-almost-white p-1"
                >
                  <p className="text-normal font-montserrat text-sm font-light">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="font-montserrat mt-4 text-2xl font-semibold">
              Tools
            </h3>
            <div className="mt-3 mb-8 flex flex-wrap justify-end gap-4">
              {skill.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-secondary-500 text-almost-white p-1"
                >
                  <p className="text-normal font-montserrat text-sm font-light">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
