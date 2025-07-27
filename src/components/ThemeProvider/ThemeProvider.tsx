import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext<any>({});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [basePrefix, setBasePrefix] = useState('light');

  const toggleTheme = () => {
    const newPrefix = basePrefix === 'dark' ? 'light' : 'dark';

    // Remove previous and add new background class
    document.body.classList.remove(`${basePrefix}-body`);
    document.body.classList.add(`${newPrefix}-body`);

    setBasePrefix(newPrefix);
  };

  // On mount, apply default class
  useEffect(() => {
    document.body.classList.add(`${basePrefix}-body`);
    return () => {
      document.body.classList.remove(`${basePrefix}-body`);
    };
  }, [basePrefix]);
  const value: object = { basePrefix, toggleTheme };
  return <ThemeContext value={value}>{children}</ThemeContext>;
}
