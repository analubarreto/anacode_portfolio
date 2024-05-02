import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';
import { HeaderMain, Title } from '@/components/Header/styles/index.styles';
import { useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import Icon from '@/components/Icon';

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
  useClickOutside(headerRef, closeMenu);

  return (
    <HeaderMain $showMenu={showMenu} ref={headerRef}>
      <Title>
        <Icon className='color-mode-toggle' isSymbol size={3} name={themeName === 'light' ? 'dark_mode' : 'light_mode'} onClick={themeToggle} />
        <Navigation closeMenu={closeMenu} />
        <LanguageToggle className='language-toggle' />
      </Title>
    </HeaderMain>
  );
};

export default Header;