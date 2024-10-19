/**
 * ThemeContextProvider component provides a context for managing and toggling
 * between light and dark themes. It uses local storage to persist the theme
 * preference and applies the appropriate class to the document's root element.
 *
 * @component
 * @param {ThemeContextProviderProps} props - The props for the ThemeContextProvider component.
 * @param {React.ReactNode} props.children - The child components that will be wrapped by the ThemeContextProvider.
 *
 * @returns {JSX.Element} The ThemeContextProvider component wrapping its children.
 *
 * @example
 * <ThemeContextProvider>
 *   <App />
 * </ThemeContextProvider>
 *
 * @remarks
 * The component initializes the theme based on the value stored in local storage,
 * or the user's system preference if no value is found in local storage. It provides
 * a `toggleTheme` function to switch between light and dark themes.
 */

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}
