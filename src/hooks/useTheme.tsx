import { useEffect, useState } from 'react';

export const useTheme = () => {
  const LightTheme = {
    name: 'light',
    body: '#ECECF4',
    text: '#192140',
    shadow: '#511D7E',
    element: '#737ABC',
    selectedElement: '#511D7E',
    tag: '#B44BA7',
    timelineElement: '#9C9EAE ',
    backgroundImage: "url('/images/bg-light-mode.webp')",
  }
  
  const DarkTheme = {
    name: 'dark',
    body: '#192140',
    text: '#ECECF4',
    shadow: '#ECECF4',
    element: '#737ABC',
    selectedElement: '#B44BA7',
    tag: '#ECECF4',
    timelineElement: '#9C9EAE ',
    backgroundImage: "url('/images/bg-dark-mode.webp')",
  }

  const [theme, setTheme] = useState(LightTheme);

  const themeToggle = () => {
    const newTheme = theme.name === 'light' ? DarkTheme : LightTheme;
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme.name);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme === 'light' ? LightTheme : DarkTheme);
  }, []);

  return { theme, themeToggle, LightTheme, DarkTheme };
}