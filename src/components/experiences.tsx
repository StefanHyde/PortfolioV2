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
    <div ref={refExperience} className="flex w-full flex-col md:w-1/2">
      <div className="flex w-full flex-col">
        <motion.h2
          ref={refExeprienceTitle}
          className="font-montserrat from-primary-800 to-primary-400 text-primary-500 mb-12 inline-block bg-linear-to-r bg-clip-text text-center text-4xl font-semibold text-transparent md:text-left md:text-5xl"
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

        <div className="border-primary-500 dark:border-almost-white dark:text-almost-white from-primary-50 dark:from-primary-950 w-full overflow-hidden rounded-md border-2 border-solid bg-linear-to-b to-transparent p-4 text-center shadow-md backdrop-blur-md md:p-8">
          {experiencesData.map((experience, index) => (
            <motion.div
              className="from-primary-50 dark:from-primary-950 mb-8 flex flex-col items-start justify-start text-left"
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
              <h3 className="font-montserrat text-2xl font-semibold">
                {experience.title}
              </h3>
              <p className="text-normal font-montserrat text-sm font-semibold md:text-base">
                {experience.company}
              </p>
              <p className="font-montserrat text-sm font-thin md:text-base">
                {experience.date}
              </p>
              <p className="text-normal font-montserrat text-sm font-light md:text-base">
                {experience.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                {experience.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-primary-500 text-almost-white p-1"
                  >
                    <p className="text-normal font-montserrat text-sm font-light">
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
