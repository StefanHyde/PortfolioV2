import Link from 'next/link';
import ThemeSwitch from './themeSwitch';
import { links } from '../../lib/data';

//import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Header() {
  return (
    <header className=" fixed z-50 h-auto w-full flex items-center justify-between p-4 md:p-6 bg-gradient-to-t from-transparent  from-10% to-almost-white dark:to-slate-950 to-60% ">
      <nav className="flex">
        <ul className="hidden md:flex gap-4">
          {links.map((link) => (
            <li key={link.hash} className="mr-4">
              <Link
                href={link.url}
                className="text-lg font-nunito text-primary-500 hover:text-primary-800 "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <ThemeSwitch />
        <Link href="/">
          <button className="flex bg-primary-500 hover:bg-primary-800 to-secondary-500 border-solid border-2 border-primary-500 hover:border-primary-800 text-white font-montserrat font-light text-sm text-left p-2  rounded-md ease-in-out duration-300">
            On se contacte ?
          </button>
        </Link>
      </div>
    </header>
  );
}
