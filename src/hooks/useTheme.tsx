import { useEffect, useState } from 'react';

export const useTheme = () => {
  const LightTheme = {
    name: 'light',
    body: '#ECECF4',
    text: '#192140',
    subtext: '#F05672',
    shadow: '#F05672',
    element: '#F05672',
    selectedElement: '#F28498',
    icon: '#F28498',
    tag: '#F8D5B4',
    tagText: '#192140',
    disabled: '#939393 ',
    menuBackground: '#192140ef',
    menuText: '#ECECF4',
    imageBackground: '#F8B4C0',
    linkedIn: '#0072B1',
  }
  
  const DarkTheme = {
    name: 'dark',
    body: '#192140',
    text: '#ECECF4',
    subtext: '#F28498',
    shadow: '#ECECF4',
    element: '#F05672',
    selectedElement: '#F28498',
    icon: '#DCA1B0',
    tag: '#F8D5B4',
    tagText: '#192140',
    disabled: '#BEBEBE ',
    menuBackground: '#ececf4ef',
    menuText: '#192140',
    imageBackground: '#F8B4C0',
    linkedIn: '#ECECF4'
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