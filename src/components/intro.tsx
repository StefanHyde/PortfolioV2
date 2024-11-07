'use client';
import React from 'react';
//import useEmblaCarousel from 'embla-carousel-react';

export default function Intro() {
  //const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="justify-start mb-12  text-dark-800 dark:text-almost-white md:w-2/3">
        <h2 className="mb-6 text-2xl md:text-5xl font-montserrat font-semibold">
          Quelque soit vos{' '}
          <span className="text-4xl md:text-7xl bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500">
            ambtions
          </span>{' '}
          je vous trouve la{' '}
          <span className="text-4xl md:text-7xl bg-gradient-to-l from-secondary-500 to-secondary-200 inline-block text-transparent bg-clip-text">
            solution
          </span>
        </h2>
        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="md:grid grid-rows-1 grid-cols-1 md:grid-cols-3 md:grid-rows-3 grid-flow-col gap-4  md:w-3/4 font-montserrat  text-dark-800 dark:text-almost-white">
        <div className="row-span-3 flex flex-col backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-l-2xl  bg-gradient-to-br from-primary-50 dark:from-primary-950 to-transparent shadow-xl  ease-in-out duration-300">
          <h3 className="text-2xl font-semibold mb-4">
            Site web ou blog <span className="text-4xl ml-3">🧑‍💻</span>
          </h3>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row-span-2 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-xl  text-center">
          <h3 className="text-2xl font-semibold  mb-4">
            Application<span className="text-4xl ml-3">⚙️</span>
          </h3>
          <p className="text-sm font-light ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row-span-1 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-t from-primary-50 dark:from-primary-950 to-transparent shadow-xl text-center">
          <h3 className="text-2xl font-semibold  mb-4">
            Döner kebab<span className="text-4xl ml-3">🥙</span>
          </h3>
        </div>
        <div className="row-span-1 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-tr-2xl dark:text-almost-white bg-gradient-to-bl from-primary-50 dark:from-primary-950 to-transparent shadow-xl text-end">
          <h3 className="text-2xl font-semibold  mb-4">
            Maraboutage<span className="text-4xl ml-3">🧙</span>
          </h3>
        </div>
        <div className="row-span-2 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md md:rounded-br-2xl dark:text-almost-white bg-gradient-to-tl from-primary-50 dark:from-primary-950 to-transparent shadow-xl text-end">
          <h3 className="text-2xl font-semibold  mb-4">
            UX / UI<span className="text-4xl ml-3">🌈</span>
          </h3>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
