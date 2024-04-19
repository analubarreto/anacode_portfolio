import styled from 'styled-components';
import { Moon, Sun } from '@phosphor-icons/react';
import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';
import { t } from 'i18next';

type HeaderProps = {
  themeToggle: () => void;
  showMenu: boolean;
  themeName: string;
}

const HeaderMain = styled.header<{ $showMenu: boolean }>`
  position: absolute;
  visibility: ${({ $showMenu }) => ($showMenu ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateX(${({ $showMenu }) => ($showMenu ? '0' : '-100%')});
  background-color: ${({ theme }) => theme.menuBackground};
  height: 100vh;
  width: 25rem;

  @media (min-width: 768px) {
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    margin-top: 3rem;
    min-width: 14rem;
    background-color: transparent;
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.text};
    min-width: 100vw;
  }

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.menuText};
    
    @media (min-width: 768px) {
      color: ${({ theme }) => theme.text};
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.menuText};
    order: 2;
    align-self: flex-start;

    @media (min-width: 768px) {
      color: ${({ theme }) => theme.text};
      order: 0;
      margin-top: 1rem;
    }

    span {
      font-size: 1.6rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.menuText};

      @media (min-width: 768px) {
        visibility: hidden;
      }
    }
  }
`;

const Header = ({ themeToggle, showMenu, themeName }: HeaderProps): JSX.Element => {  
  return (
    <HeaderMain $showMenu={showMenu}>
      <Title>
        <button onClick={themeToggle}>
          { themeName === 'light' ? <Moon size={30} /> : <Sun size={30} /> }
          <span>{ themeName === 'light' ? t('Dark Mode') : t('Light Mode') }</span>
        </button>
        <Navigation />
        <LanguageToggle />
      </Title>
    </HeaderMain>
  );
};

export default Header;