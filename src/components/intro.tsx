'use client';
import React from 'react';
import { introBento } from '../../lib/data';
// import useEmblaCarousel from 'embla-carousel-react';

export default function Intro() {
  /* const [emblaRef] = useEmblaCarousel({
    active: true,
    breakpoints: {
      '(min-width: 768px)': { active: false },
    },
  }); */

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="justify-start mb-12  text-dark-800 dark:text-almost-white md:w-2/3">
        <h2 className="mb-6 text-4xl md:text-5xl font-montserrat font-semibold">
          Quelque soit vos{' '}
          <span className="text-5xl md:text-7xl bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text drop-shadow-lg">
            ambtions
          </span>{' '}
          je vous trouve la{' '}
          <span className="text-5xl md:text-7xl bg-gradient-to-r from-secondary-500 to-secondary-200 inline-block text-transparent bg-clip-text drop-shadow-lg">
            solution
          </span>
        </h2>
        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="md:grid grid-rows-1 grid-cols-1 md:grid-cols-3 md:grid-rows-3 grid-flow-col gap-4  md:w-full xl:w-3/4 font-montserrat  text-dark-800 dark:text-almost-white">
        {introBento.map((bento, index) => (
          <div
            key={index}
            className={`${bento.gridTemplate} ${bento.flexTemplate} ${bento.gradientTemplate} ${bento.textTemplate} p-4 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md shadow-md`}
          >
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              {bento.title} <span className="text-4xl ml-3">{bento.icon}</span>
            </h3>
            <p className="text-sm font-montserrat font-extralight">
              {bento.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
