'use client';

import React from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { Tooltip } from 'react-tooltip';

import { useTheme } from '@/context/themeContext';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        data-tip={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        className="themeswitchbtn focus:outline-hidden"
      >
        {theme === 'light' ? (
          <HiOutlineSun className="hover:text-primary-600 h-8 w-8 duration-300 ease-in-out" />
        ) : (
          <HiOutlineMoon className="dark:text-almost-white dark:hover:text-primary-600 h-8 w-8 duration-300 ease-in-out" />
        )}
      </button>
      <Tooltip
        anchorSelect=".themeswitchbtn"
        place="left"
        className="hidden md:block"
        style={{ padding: '4px', backgroundColor: '#aa5cf0', fontSize: '12px' }}
      >
        {`Passer en mode ${theme === 'light' ? 'dark' : 'light'}`}
      </Tooltip>
    </>
  );
}
