import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header/index';
import HamburgerMenu from '@/components/Header/HamburgerMenu';
import { ActiveLinkProvider } from '@/contexts/ActiveLinkContext';
import { HomeSectionsProvider } from '@/contexts/HomeSectionsContext';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HamburgerMenu isOpen={isOpen} onClickMenu={() => setIsOpen(!isOpen)} />
      <ActiveLinkProvider>
        <HomeSectionsProvider>
          <Header themeToggle={themeToggle} showMenu={isOpen} themeName={theme.name} closeMenu={() => setIsOpen(false)} />
          {children}
        </HomeSectionsProvider>
      </ActiveLinkProvider>
    </ThemeProvider>
  );
}

export default ProvidersWrapper;