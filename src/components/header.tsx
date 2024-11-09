'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeSwitch from './themeSwitch';
import { links } from '../../lib/data';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HiBars3 } from 'react-icons/hi2';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed z-50 h-auto w-full flex items-center justify-between py-2 px-4 ${scrolled ? 'bg-almost-white dark:bg-slate-950' : 'bg-transparent'}`}
    >
      <Link href="/" className="hidden md:flex">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <nav className="flex">
        <div className="mobile-menu    md:hidden">
          <Menu>
            <MenuButton className="inline-flex items-center">
              <HiBars3 className=" h-10 w-10 text-dark-800 dark:text-almost-white" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className=" z-50 w-72  h-auto   [--anchor-gap:16px] backdrop-blur-md p-8 ml-6 border-solid border-2 border-primary-500 dark:border-almost-white rounded-md  flex flex-col justify-center gap-10  transition duration-300 ease-in-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {links.map((link) => (
                <MenuItem key={link.hash}>
                  <Link
                    href={link.url}
                    className="text-lg font-nunito text-primary-500 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 ease-in-out duration-300"
                  >
                    {link.name}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        <ul className="hidden md:flex gap-16">
          {links.map((link) => (
            <li key={link.hash}>
              {link.hash === '#home' && isHomePage ? (
                <span className="hidden">{link.name}</span>
              ) : (
                <Link
                  href={link.url}
                  className="text-lg font-nunito text-primary-500 dark:text-almost-white hover:text-primary-800 dark:hover:text-primary-800 ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <ThemeSwitch />
        <Link href="/">
          <button className="flex bg-primary-500 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 to-secondary-500 border-solid border-2 border-primary-500 dark:border-primary-800 hover:border-primary-800 dark:hover:border-primary-900 text-white font-montserrat font-light text-sm text-left p-2  rounded-md ease-in-out duration-300">
            Me contacter
          </button>
        </Link>
      </div>
    </header>
  );
}
