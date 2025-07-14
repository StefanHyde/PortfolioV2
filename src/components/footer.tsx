import Link from 'next/link';

import { links, socials } from '../../lib/data';

export default function Footer() {
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
                href={link.url}
                className="font-nunito text-almost-white hover:text-primary-200 text-xs font-light duration-300 ease-in-out"
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
              className="font-nunito text-almost-white hover:text-primary-200 text-xs font-light duration-300 ease-in-out"
            >
              Mentions légales
            </Link>
          </li>
          <li>
            <Link
              href="/rgpd"
              className="font-nunito text-almost-white hover:text-primary-200 text-xs font-light duration-300 ease-in-out"
            >
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>

      <div className="container mx-auto flex items-center justify-center gap-8 md:justify-end md:gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <social.icon.type className="hover:text-primary-200 h-6 w-6 duration-300 ease-in-out" />
          </a>
        ))}
      </div>
    </footer>
  );
}
