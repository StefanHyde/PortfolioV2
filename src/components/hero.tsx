'use client';

import Link from 'next/link';
import {
  HiOutlineArrowRightCircle,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
} from 'react-icons/hi2';

type Props = {
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
}: Props) {
  return (
    <div className="relative mx-auto flex max-w-2xl flex-col items-center mt-8">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 inline-block text-transparent bg-clip-text">
        <h1 className="flex flex-col font-nunito font-bold text-6xl md:text-8xl uppercase">
          <span className="text-dark-800 dark:text-almost-white text-sm md:text-lg font-thin">
            {surtitle}
          </span>
          {title}
        </h1>

        <h2 className="font-nunito text-dark-800 dark:text-almost-white font-light text-xl md:text-2xl pt-6">
          {subtitle}
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 ">
          {CTA && (
            <Link href={CTA.url}>
              <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
                {CTA.text}
                <HiOutlineArrowRightCircle className="h-5 w-5 ml-2 inline-block" />
              </button>
            </Link>
          )}
          {CTA2 && (
            <Link href={CTA2.url}>
              <button className=" flex bg-almost-white dark:bg-transparent hover:bg-primary-500 dark:hover:bg-primary-500 border-solid border-2 border-primary-500 text-primary-500  hover:border-primary-500 dark:hover:border-primary-500 hover:text-almost-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
                {CTA2.text}
                <HiOutlineEnvelope className="h-5 w-5 ml-2 inline-block i" />
              </button>
            </Link>
          )}
          {ctaMailto && (
            <a href={`mailto:${ctaMailto.url}`}>
              <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
                {ctaMailto.text}
                <HiOutlineEnvelope className="h-5 w-5 ml-2 inline-block" />
              </button>
            </a>
          )}
          {ctaResume && (
            <a href={ctaResume.url}>
              <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left px-4 py-2 mt-6 rounded-md ease-in-out duration-300">
                {ctaResume.text}
                <HiOutlineDocumentText className="h-5 w-5 ml-2 inline-block" />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
