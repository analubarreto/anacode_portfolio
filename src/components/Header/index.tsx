import styled from 'styled-components';
import { Moon, Sun } from '@phosphor-icons/react';
import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';
import { t } from 'i18next';

type HeaderProps = {
  closeMenu: () => void;
  themeToggle: () => void;
  showMenu: boolean;
  themeName: string;
}

const HeaderMain = styled.header<{ $showMenu: boolean }>`
  position: absolute;
  top: 0;

  @media screen and (max-width: 1023px) {
    visibility: ${({ $showMenu }) => ($showMenu ? 'visible' : 'hidden')};
    transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: translateX(${({ $showMenu }) => ($showMenu ? '0' : '-100%')});
    background-color: ${({ theme }) => theme.menuBackground};
    height: 100vh;
    width: 25rem;
  }

  @media screen and (min-width: 1024px) {
    min-width: 14rem;
    right: 0;
    left: 0;
  }
`;

const Title = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.menuText};

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.menuText};
    
    @media (min-width: 1024px) {
      color: ${({ theme }) => theme.text};
    }
  }

  .color-mode-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.menuText};
    order: 2;
    align-self: flex-start;

    @media (min-width: 1024px) {
      color: ${({ theme }) => theme.text};
      order: 0;
      margin-top: 2.5rem;
    }

    span {
      font-size: 1.6rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.menuText};

      @media (min-width: 1024px) {
        visibility: hidden;
      }
    }
  }
`;

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