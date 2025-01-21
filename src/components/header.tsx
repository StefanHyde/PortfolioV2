'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiBars3, HiMiniXMark } from 'react-icons/hi2';

import { links } from '../../lib/data';
import ThemeSwitch from './themeSwitch';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    //Check if the user has scrolled to change the header background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpened((previousState) => !previousState);
  };

  return (
    <header
      className={`fixed z-50 h-auto w-full flex items-center justify-between py-2 px-4 ${scrolled ? 'bg-almost-white dark:bg-slate-950' : 'bg-transparent'}`}
    >
      <Link href="/" className="flex">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <nav aria-label="Menu de navigation" className="flex">
        <ul className="hidden md:flex gap-16" role="menu">
          {links.map((link) =>
            link.url === pathname ? null : (
              <li key={link.hash}>
                <Link
                  href={link.url}
                  className="text-lg font-nunito text-primary-600 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <ThemeSwitch />
        <Link href="/#contact" className="hidden md:flex">
          <button
            className="flex bg-primary-600 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-solid border-2 border-primary-600 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 text-white font-montserrat font-light text-sm text-left p-2  rounded-md ease-in-out duration-300"
            onClick={() =>
              sendGAEvent('event', 'buttonClicked', { value: 'xyz' })
            }
          >
            Me contacter
          </button>
        </Link>
        <div className="mobile-menu flex items-center md:hidden">
          <Menu>
            <MenuButton
              aria-label="menu de navigation"
              aria-expanded={menuOpened}
              aria-controls="nav-menu"
              className="inline-flex items-center ml-6"
              onClick={toggleMenu}
            >
              {menuOpened ? (
                <HiMiniXMark className=" h-10 w-10 text-dark-800 dark:text-almost-white" />
              ) : (
                <HiBars3 className=" h-10 w-10 text-dark-800 dark:text-almost-white" />
              )}
            </MenuButton>
            <MenuItems
              transition
              anchor="top start"
              className=" z-50 w-full h-screen p-8 [--anchor-gap:8px] backdrop-blur-xl border-solid border-2 border-primary-500 dark:border-almost-white rounded-md  flex flex-col justify-center gap-10  transition duration-300 ease-in-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {links.map((link) => (
                <MenuItem key={link.hash}>
                  <Link
                    href={link.url}
                    onClick={() => setMenuOpened(false)}
                    className="text-lg font-nunito text-primary-500 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 ease-in-out duration-300"
                  >
                    {link.name}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <button
                  className="flex justify-center bg-primary-500 dark:bg-primary-800 text-lg font-nunito text-almost-white border-solid border-2 border-primary-500 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 p-2 mt-12 rounded-md "
                  onClick={() => setMenuOpened(false)}
                >
                  Me contacter
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
}
