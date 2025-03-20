'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { links, socials } from '../../lib/data';

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('Navigation');
  return (
    <footer className="bg-primary-600 dark:bg-primary-800 dark:text-almost-white mt-12 items-center p-8 text-white md:flex md:flex-row md:justify-between md:px-16 md:py-4">
      <div className="container mx-auto mb-7 text-center md:mb-0 md:text-start">
        <p className="text-xs">&copy; {new Date().getFullYear()} Stefan Heyd</p>
      </div>
      <div className="mx-auto mb-7 flex w-full justify-between text-center md:mb-0 md:text-start">
        <ul className="flex flex-col text-left">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={`/${locale}/${link.url}`}
                className="font-nunito text-almost-white hover:text-primary-200 text-xs font-light duration-300 ease-in-out"
              >
                {t(link.name)}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col text-right">
          <li>
            <Link
              href={`/${locale}/legal`}
              className="font-nunito text-almost-white hover:text-primary-200 text-xs font-light duration-300 ease-in-out"
            >
              {t('mentions-legales')}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/rgpd`}
              className="font-nunito text-almost-white hover:text-primary-200 text-xs font-light duration-300 ease-in-out"
            >
              {t('politique-confidentialite')}
            </Link>
          </li>
        </ul>
      </div>

      <div className="container mx-auto flex items-center justify-center gap-8 md:justify-end md:gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon.type className="hover:text-primary-200 h-6 w-6 duration-300 ease-in-out md:h-4 md:w-4" />
          </a>
        ))}
      </div>
    </footer>
  );
}
