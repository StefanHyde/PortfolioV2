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
      className="overflow-hidden flex flex-col w-full md:w-1/2"
    >
      <motion.h2
        ref={refSkillsTitle}
        className="text-center md:text-right mb-12 text-4xl md:text-5xl font-montserrat font-semibold  bg-gradient-to-r from-secondary-500 to-secondary-200  inline-block text-transparent bg-clip-text text-primary-500"
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
      <div className="w-full backdrop-blur-md p-4  md:p-8  border-solid border-2 border-secondary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-secondary-50 dark:from-secondary-950 to-transparent shadow-md text-center">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-end justify-end text-right mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controlsSkills}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.25 }}
          >
            <h3 className="text-2xl font-montserrat font-semibold">
              Languages
            </h3>
            <div className="flex flex-wrap gap-4 mt-3 mb-8">
              {skill.languages.map((language, index) => (
                <div
                  key={index}
                  className="p-1 bg-secondary-500  text-almost-white"
                >
                  <p className="text-normal text-sm md:text-base font-montserrat font-light">
                    {language}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mt-4">
              Technologies Frontend
            </h3>
            <div className="flex flex-wrap gap-4 mt-3 mb-8">
              {skill.technologies.frontEnd.map((tech, index) => (
                <div
                  key={index}
                  className="p-1 bg-secondary-500  text-almost-white"
                >
                  <p className="text-normal text-sm md:text-base font-montserrat font-light">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mt-4">
              Technologies Backend
            </h3>
            <div className="flex flex-wrap gap-4 mt-3 mb-8">
              {skill.technologies.backEnd.map((tech, index) => (
                <div
                  key={index}
                  className="p-1 bg-secondary-500  text-almost-white "
                >
                  <p className="text-normal text-sm md:text-base font-montserrat font-light">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mt-4">
              Tools
            </h3>
            <div className="flex flex-wrap gap-4 mt-3 mb-8">
              {skill.tools.map((tool, index) => (
                <div
                  key={index}
                  className="p-1 bg-secondary-500  text-almost-white"
                >
                  <p className="text-normal text-sm md:text-base font-montserrat font-light">
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
