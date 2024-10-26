'use client';

import React from 'react';
import { useTheme } from '@/context/themeContext';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <HiOutlineSun className="w-8 h-8 hover:text-primary-500 ease-in-out duration-300 " />
      ) : (
        <HiOutlineMoon className="w-8 h-8 dark:text-almost-white hover:dark:text-primary-500 ease-in-out duration-300" />
      )}
    </button>
  );
}
