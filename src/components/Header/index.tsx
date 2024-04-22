import { Moon, Sun } from '@phosphor-icons/react';
import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';
import { t } from 'i18next';
import { HeaderMain, Title } from '@/components/Header/styles/index.styles';
import { useRef, useEffect } from 'react';

type HeaderProps = {
  closeMenu: () => void;
  themeToggle: () => void;
  showMenu: boolean;
  themeName: string;
}

/**
 * Header component is closed when user clicks outside HeaderMain.
 *
 * @param themeToggle - Function to toggle the theme.
 * @param showMenu - Boolean indicating whether the menu is shown or not.
 * @param themeName - Current theme name.
 * @param closeMenu - Function to close the menu.
 * @returns The rendered Header component.
 */
const Header = ({ themeToggle, showMenu, themeName, closeMenu }: HeaderProps): JSX.Element => {  
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <HeaderMain $showMenu={showMenu} ref={headerRef}>
      <Title>
        <button className='color-mode-toggle' onClick={themeToggle}>
          { themeName === 'light' ? <Moon size={30} /> : <Sun size={30} /> }
          <span>{ themeName === 'light' ? t('Dark Mode') : t('Light Mode') }</span>
        </button>
        <Navigation closeMenu={closeMenu} />
        <LanguageToggle />
      </Title>
    </HeaderMain>
  );
};

export default Header;