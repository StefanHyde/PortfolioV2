'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HiOutlineArrowRightCircle,
  HiOutlineDocumentText,
  HiOutlineEnvelope,
} from 'react-icons/hi2';

type heroProps = {
  surtitle?: string | null;
  title: string;
  subtitle?: string | null;
  CTA?: { text: string; url: string } | null;
  CTA2?: { text: string; url: string } | null;
  ctaMailto?: { text: string; url: string } | null;
  ctaResume?: { text: string; url: string } | null;
};

export default function Hero({
  surtitle,
  title,
  subtitle,
  CTA,
  CTA2,
  ctaMailto,
  ctaResume,
}: heroProps) {
  const titleAnimationText = title
    .split('')
    .map((char) => (char === ' ' ? '\u00A0' : char)); // Replace space with non-breaking space

  return (
    <div className="relative mx-auto mt-8 flex max-w-2xl flex-col items-center">
      <div className="from-primary-500 to-secondary-500 inline-block bg-linear-to-r bg-clip-text text-transparent">
        <div className="font-nunito flex flex-col text-6xl font-bold uppercase md:text-8xl">
          <span className="text-dark-800 dark:text-almost-white text-sm font-thin md:text-lg">
            {surtitle}
          </span>
          <div className="flex flex-row">
            {titleAnimationText.map((element, index) => (
              <motion.h1
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

        <h2 className="font-nunito text-dark-800 dark:text-almost-white pt-6 text-xl font-light md:text-2xl">
          {subtitle}
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {CTA && (
            <Link href={CTA.url}>
              <button className="bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
                {CTA.text}
                <HiOutlineArrowRightCircle className="ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
          )}
          {CTA2 && (
            <Link href={CTA2.url}>
              <button className="bg-almost-white hover:bg-primary-600 dark:hover:bg-primary-600 border-primary-600 text-primary-600 hover:border-primary-600 dark:hover:border-primary-600 hover:text-almost-white font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light duration-300 ease-in-out dark:bg-transparent">
                {CTA2.text}
                <HiOutlineEnvelope className="i ml-2 inline-block h-5 w-5" />
              </button>
            </Link>
          )}
          {ctaMailto && (
            <a href={`mailto:${ctaMailto.url}`}>
              <button className="bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
                {ctaMailto.text}
                <HiOutlineEnvelope className="ml-2 inline-block h-5 w-5" />
              </button>
            </a>
          )}
          {ctaResume && (
            <a href={ctaResume.url}>
              <button className="bg-primary-600 hover:bg-primary-800 to-secondary-500 border-primary-600 hover:border-primary-800 font-montserrat mt-6 flex rounded-md border-2 border-solid px-4 py-2 text-left text-sm font-light text-white duration-300 ease-in-out">
                {ctaResume.text}
                <HiOutlineDocumentText className="ml-2 inline-block h-5 w-5" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
