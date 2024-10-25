'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './themeSwitch';
import { links } from '../../lib/data';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

//import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className=" fixed z-50 h-auto w-full flex items-center justify-between p-4 md:p-6 ">
      <Link href="/" className="hidden md:flex">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <nav className="flex">
        <Bars3Icon className="md:hidden h-10 w-10 text-dark-800 dark:text-almost-white" />
        <XMarkIcon className="md:hidden h-10 w-10 text-dark-800 dark:text-almost-white" />
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.hash} className="mr-4">
              {link.hash === '#home' && isHomePage ? (
                <span className="hidden">{link.name}</span>
              ) : (
                <Link
                  href={link.url}
                  className="text-lg font-nunito text-primary-500 hover:text-primary-800"
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
          <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left p-2  rounded-md ease-in-out duration-300">
            Me contacter
          </button>
        </Link>
      </div>
    </header>
  );
}
