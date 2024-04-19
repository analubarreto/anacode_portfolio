import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header/index';
import HamburgerMenu from '@/components/Header/HamburgerMenu';
import { useState } from 'react';

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

function App() {
  const { theme, themeToggle } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HamburgerMenu isOpen={isOpen} onClickMenu={() => setIsOpen(!isOpen)} />
      <Header themeToggle={themeToggle} showMenu={isOpen} themeName={theme.name} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
export default App
