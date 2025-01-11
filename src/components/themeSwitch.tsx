'use client';

import React from 'react';
import { useTheme } from '@/context/themeContext';
import { Tooltip } from 'react-tooltip';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        data-tip={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        className="themeswitchbtn focus:outline-none"
      >
        {theme === 'light' ? (
          <HiOutlineSun className="w-8 h-8 hover:text-primary-500 ease-in-out duration-300 " />
        ) : (
          <HiOutlineMoon className="w-8 h-8 dark:text-almost-white hover:dark:text-primary-500 ease-in-out duration-300" />
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
