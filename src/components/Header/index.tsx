import styled from 'styled-components';
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from '@/hooks/useTheme';
import Navigation from '@/components/Header/Navigation';
import LanguageToggle from '@/components/Header/LanguageToggle';

type HeaderProps = {
  themeToggle: () => void;
}

const HeaderMain = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin-top: 1.6rem;
  width: 100vw;
`;

const Title = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.6rem;

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.text};
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 1.6rem;
    margin-left: 1.6rem;
  }
`;

const Header = ({ themeToggle }: HeaderProps): JSX.Element => {
  const { theme } = useTheme();

  return (
    <HeaderMain>
      <Title>
        <button onClick={themeToggle}>
          {theme.name === 'light' ? <Moon size={30} /> : <Sun size={30} />}
        </button>
        <Navigation />
        <LanguageToggle />
      </Title>
    </HeaderMain>
  );
};

export default Header;