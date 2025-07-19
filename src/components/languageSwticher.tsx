'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { Tooltip } from 'react-tooltip';
import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Utils.languageSwitcher');
  const handleLanguageChange = (language: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${language}${currentPath}`);
  };

  return (
    <div className="relative hidden md:block">
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            <MenuButton
              as="button"
              aria-label={`Changer la langue. Langue actuelle : ${locale === 'en' ? 'Anglais' : 'Français'}`}
              className="languageswitchbtn inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-lg transition-all duration-300 ease-in-out hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center">
                {locale === 'en' ? (
                  <Image
                    src="/images/flags/gb.svg"
                    alt="English"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                ) : (
                  <Image
                    src="/images/flags/fr.svg"
                    alt="Français"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                )}
              </span>
              <span aria-hidden="true" className="flex items-center">
                {open ? (
                  <HiChevronUp className="h-4 w-4" />
                ) : (
                  <HiChevronDown className="h-4 w-4" />
                )}
              </span>
            </MenuButton>
            <Tooltip
              anchorSelect=".languageswitchbtn"
              place="left"
              className="hidden md:block"
              style={{
                padding: '4px',
                backgroundColor: '#aa5cf0',
                fontSize: '12px',
              }}
            >
              {t('changer-langue')}
            </Tooltip>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="border-primary-500 dark:border-almost-white bg-almost-white absolute right-0 z-50 mt-2 origin-top-right rounded-md border-2 border-solid p-2 dark:bg-slate-950">
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`font-nunito text-primary-500 dark:text-almost-white w-full cursor-pointer rounded-md px-2 py-1 text-lg transition-all duration-300 ease-in-out ${
                        active ? 'bg-primary-500 text-white' : ''
                      }`}
                      onClick={() => handleLanguageChange('fr')}
                    >
                      <Image
                        src="/images/flags/fr.svg"
                        alt="Français"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={`font-nunito text-primary-500 dark:text-almost-white w-full cursor-pointer rounded-md px-2 py-1 text-lg transition-all duration-300 ease-in-out ${
                        active ? 'bg-primary-500 text-white' : ''
                      }`}
                      onClick={() => handleLanguageChange('en')}
                    >
                      <Image
                        src="/images/flags/gb.svg"
                        alt="English"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
