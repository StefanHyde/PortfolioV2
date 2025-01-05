'use client';

import { motion } from 'framer-motion';

type pageTitleProps = {
  title: string;
  subtitle?: string | null;
};

export default function PageTitle({ title, subtitle }: pageTitleProps) {
  const titleAnimationText = title
    .split('')
    .map((char) => (char === ' ' ? '\u00A0' : char));
  return (
    <div className="relative mx-auto h-auto w-full max-w-7xl flex flex-col items-start px-6 mt-32">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 inline-block text-transparent bg-clip-text">
        <div className="flex flex-col font-nunito font-bold text-6xl md:text-7xl  uppercase">
          <div className="flex flex-row flex-wrap">
            {titleAnimationText.map((el, i) => (
              <motion.h1
                className="text-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{' '}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>

      {subtitle && (
        <h2 className="font-nunito text-dark-800 dark:text-almost-white font-light text-xl md:text-2xl pt-6">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
