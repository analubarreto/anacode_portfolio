import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header/index';
import HamburgerMenu from '@/components/Header/HamburgerMenu';
import { ActiveLinkProvider } from '@/contexts/ActiveLinkContext';
import { HomeSectionsProvider } from '@/contexts/HomeSectionsContext';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LanguageToggle from '@/components/Header/LanguageToggle';
import Icon from '@/components/Icon';
import { useLocation } from 'react-router-dom';

/**
 * Global styles for the application.
 */
/**
 * Component that provides global styles for the application.
 * It sets up CSS variables for responsive breakpoints and defines the global font styles.
 */
const GlobalStyle = createGlobalStyle`
  :root {
    --mobile-sm: 375px;
    --mobile: 425px;
    --mobile-lg: 640px;
    --tablet-sm: 768px;
    --lablet: 1024px;
    --desktop-xs: 1280px;
    --desktop-sm: 1440px;
    --desktop: 1920px;
    --desktop-lg: 2560px;
  }

  html {
    font-size: 10px;
  }
  
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;

    h1, h2 {
      font-family: "Alice", serif;
    }

    h3, h4, h5, h6, p {
      font-family: "Montserrat", sans-serif;
    }
  }

  .mobile-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.body};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    width: 95vw;
    margin: 1rem auto 0 auto;

    @media screen and (min-width: 1024px) {
      display: none;
    }

    .options-wrap {
      display: flex;
      align-items: center;
    }
  }
`;

type ProvidersWrapperProps = {
  children: JSX.Element;
}

/**
 * Wrapper component that provides context and theme to its children.
 * 
 * @param {ProvidersWrapperProps} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} The wrapped component.
 */
const ProvidersWrapper = ({ children }: ProvidersWrapperProps): JSX.Element => {
  const { theme, themeToggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const themeName = theme.name;
  const pathName = location.pathname;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {
        pathName !== '/under-construction' && (
          <div className="mobile-top-bar">
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="options-wrap">
              <LanguageToggle />
              <Icon name={themeName === 'light' ? 'sun' : 'moon'} size={2.5} onClick={themeToggle} />
            </div>
          </div>
        )
      }
      <ActiveLinkProvider>
        <HomeSectionsProvider>
          {
            pathName !== '/under-construction' && (
              <Header themeToggle={themeToggle} showMenu={isOpen} themeName={theme.name} closeMenu={() => setIsOpen(false)} />
            )
          }
          {children}
        </HomeSectionsProvider>
      </ActiveLinkProvider>
    </ThemeProvider>
  );
}

export default ProvidersWrapper;