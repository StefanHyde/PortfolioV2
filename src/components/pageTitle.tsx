'use client';

import { motion } from 'framer-motion';

type pageTitleProps = {
  title: string;
  subtitle?: string | null;
  titleSize?: 'normal' | 'small';
};

export default function PageTitle({
  title,
  subtitle,
  titleSize,
}: pageTitleProps) {
  const titleAnimationText = title
    .split('')
    .map((char) => (char === ' ' ? '\u00A0' : char));

  const titleSizeClass =
    titleSize === 'small'
      ? 'text-3xl md:text-5xl uppercase'
      : 'text-6xl md:text-7xl uppercase';

  return (
    <div className="relative mx-auto mt-32 flex h-auto w-full flex-col items-start px-6">
      <div className="from-primary-500 to-secondary-500 inline-block bg-linear-to-r bg-clip-text text-transparent">
        <div
          className={`font-nunito flex flex-col font-bold ${titleSizeClass} `}
        >
          <div className="flex flex-row flex-wrap">
            {titleAnimationText.map((element, index) => (
              <motion.h1
                className="text-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index / 10,
                }}
                key={index}
              >
                {element}{' '}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>

      {subtitle && (
        <h2 className="font-nunito text-dark-800 dark:text-almost-white pt-6 text-xl font-light md:text-2xl">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
