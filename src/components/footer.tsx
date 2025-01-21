import Link from 'next/link';

import { links, socials } from '../../lib/data';

export default function Footer() {
  return (
    <footer className="bg-primary-600 dark:bg-primary-800 text-white dark:text-almost-white md:flex md:flex-row md:justify-between items-center mt-12 p-8 md:py-4 md:px-16">
      <div className="container mx-auto text-center md:text-start mb-7 md:mb-0">
        <p className="text-xs">&copy; {new Date().getFullYear()} Stefan Heyd</p>
      </div>
      <div className="flex w-full justify-between mx-auto text-center md:text-start mb-7 md:mb-0">
        <ul className="flex flex-col text-left">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.url}
                className="text-xs font-light font-nunito text-almost-white hover:text-primary-200 ease-in-out duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col text-right">
          <li>
            <Link
              href="/legal"
              className="text-xs font-light  font-nunito text-almost-white hover:text-primary-200 ease-in-out duration-300"
            >
              Mentions légales
            </Link>
          </li>
          <li>
            <Link
              href="/rgpd"
              className="text-xs font-light  font-nunito text-almost-white hover:text-primary-200 ease-in-out duration-300"
            >
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>

      <div className="container flex justify-center items-center md:justify-end gap-8 md:gap-4 mx-auto">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon.type className="h-6 md:h-4 w-6 md:w-4 hover:text-primary-200 ease-in-out duration-300" />
          </a>
        ))}
      </div>
    </footer>
  );
}
