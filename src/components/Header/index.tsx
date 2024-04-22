import { Moon, Sun } from '@phosphor-icons/react';
import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';
import { t } from 'i18next';
import { HeaderMain, Title } from '@/components/Header/styles/index.styles';

type HeaderProps = {
  closeMenu: () => void;
  themeToggle: () => void;
  showMenu: boolean;
  themeName: string;
}

/**
 * Renders the header component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.themeToggle - The function to toggle the theme.
 * @param {boolean} props.showMenu - A boolean indicating whether the menu is shown.
 * @param {string} props.themeName - The name of the current theme.
 * @param {Function} props.closeMenu - The function to close the menu.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = ({ themeToggle, showMenu, themeName, closeMenu }: HeaderProps): JSX.Element => {  
  return (
    <HeaderMain $showMenu={showMenu}>
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