'use client';

import React from 'react';
import { useTheme } from '@/context/themeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
}
