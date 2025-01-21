'use client';
import { motion } from 'framer-motion';

import useAnimateOnView from '@/hooks/useAnimateOnView';

import { experiencesData } from './../../lib/data';

export default function Experiences() {
  const { ref: refExeprienceTitle, controls: controlsExperienceTitle } =
    useAnimateOnView();
  const { ref: refExperience, controls: controlsExperience } =
    useAnimateOnView();

  return (
    <div ref={refExperience} className=" flex flex-col w-full md:w-1/2">
      <div className="flex flex-col w-full">
        <motion.h2
          ref={refExeprienceTitle}
          className="text-center md:text-left mb-12 text-4xl md:text-5xl font-montserrat font-semibold  bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500"
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controlsExperienceTitle}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.5 }}
        >
          Expériences <span className="text-black">🧑‍💻</span>
        </motion.h2>

        <div className="w-full overflow-hidden  backdrop-blur-md p-4 md:p-8  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md text-center">
          {experiencesData.map((experience, index) => (
            <motion.div
              className="flex flex-col items-start justify-start text-left mb-8   from-primary-50 dark:from-primary-950 "
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controlsExperience}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.5 }}
            >
              <h3 className="text-2xl font-montserrat font-semibold">
                {experience.title}
              </h3>
              <p className="text-normal text-sm md:text-base font-montserrat font-semibold">
                {experience.company}
              </p>
              <p className="text-sm md:text-base font-montserrat font-thin">
                {experience.date}
              </p>
              <p className="text-normal text-sm md:text-base font-montserrat font-light">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                {experience.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="p-1  bg-primary-500  text-almost-white"
                  >
                    <p className="text-normal text-sm font-montserrat font-light">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
