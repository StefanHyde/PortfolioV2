'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { HiBars3, HiMiniXMark } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import { FR, GB } from 'country-flag-icons/react/3x2';

import { useTranslations } from 'next-intl';

import { links } from '../../lib/data';
import ThemeSwitch from './themeSwitch';
import LanguageSwitcher from './languageSwticher';
export default function Header() {
  const pathname = usePathname();
  const [menuOpened, setMenuOpened] = useState(false);
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('Navigation');
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpened((previousState) => !previousState);
  };

  return (
    <header className="bg-almost-white fixed z-50 flex h-auto w-full items-center justify-between px-4 py-2 dark:bg-slate-950">
      <Link href="/" className="flex">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <nav aria-label="Menu de navigation" className="flex">
        <ul className="hidden gap-16 md:flex" role="menu">
          {links.map((link) =>
            `/${locale}${link.url ? `/${link.url}` : ''}` ===
            pathname ? null : (
              <li key={link.hash}>
                <Link
                  href={`/${locale}${link.url ? `/${link.url}` : ''}`}
                  className="font-nunito text-primary-600 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 text-lg duration-300 ease-in-out"
                >
                  {t(link.name)}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <ThemeSwitch />
        <LanguageSwitcher />
        <Link href="/#contact" className="hidden md:flex">
          <button
            className="bg-primary-600 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-primary-600 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 font-montserrat flex rounded-md border-2 border-solid p-2 text-left text-sm font-light text-white duration-300 ease-in-out"
            onClick={() =>
              sendGAEvent('event', 'buttonClicked', { value: 'xyz' })
            }
          >
            {t('contact')}
          </button>
        </Link>
        <div className="mobile-menu flex items-center md:hidden">
          <Menu>
            <MenuButton
              aria-label="menu de navigation"
              aria-expanded={menuOpened}
              aria-controls="nav-menu"
              className="ml-6 inline-flex items-center"
              onClick={toggleMenu}
            >
              {menuOpened ? (
                <HiMiniXMark className="text-dark-800 dark:text-almost-white h-10 w-10" />
              ) : (
                <HiBars3 className="text-dark-800 dark:text-almost-white h-10 w-10" />
              )}
            </MenuButton>
            <MenuItems
              transition
              anchor="top start"
              className="border-primary-500 dark:border-almost-white bg-almost-white z-50 flex h-screen w-full flex-col justify-center gap-10 rounded-md border-2 border-solid p-8 transition duration-300 ease-in-out [--anchor-gap:8px] focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 dark:bg-slate-950"
            >
              {links.map((link) => (
                <MenuItem key={link.hash}>
                  <Link
                    href={`/${locale}${link.url ? `/${link.url}` : ''}`}
                    onClick={() => setMenuOpened(false)}
                    className="font-nunito text-primary-500 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 text-lg duration-300 ease-in-out"
                  >
                    {t(link.name)}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <button
                  className="bg-primary-500 dark:bg-primary-800 font-nunito text-almost-white border-primary-500 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 mt-12 flex justify-center rounded-md border-2 border-solid p-2 text-lg"
                  onClick={() => setMenuOpened(false)}
                >
                  {t('contact')}
                </button>
              </MenuItem>
              <MenuItem>
                <div className="mt-4 flex justify-center gap-10">
                  <button
                    className={`font-nunito text-primary-500 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 rounded-md p-2 transition-all duration-300 ease-in-out ${
                      locale === 'fr'
                        ? 'bg-primary-500 dark:bg-primary-800'
                        : 'bg-transparent dark:bg-transparent'
                    }`}
                    onClick={() => {
                      const currentPath = pathname.replace(`/${locale}`, '');
                      router.push(`/fr${currentPath}`);
                      setMenuOpened(false);
                    }}
                  >
                    <FR className="h-8 w-8" />
                  </button>
                  <button
                    className={`font-nunito text-primary-500 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 rounded-md p-2 transition-all duration-300 ease-in-out ${
                      locale === 'en'
                        ? 'bg-primary-500 dark:bg-primary-800'
                        : 'bg-transparent dark:bg-transparent'
                    }`}
                    onClick={() => {
                      const currentPath = pathname.replace(`/${locale}`, '');
                      router.push(`/en${currentPath}`);
                      setMenuOpened(false);
                    }}
                  >
                    <GB className="h-8 w-8" />
                  </button>
                </div>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
}
