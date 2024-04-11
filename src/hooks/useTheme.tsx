import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    window.localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, themeToggler };
}