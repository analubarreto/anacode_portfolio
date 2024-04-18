import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header/index';

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
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    background-image: ${({ theme }) => theme.backgroundImage};
    background-size: cover;
  }
`;

function App() {
  const { theme, themeToggle } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header themeToggle={themeToggle} />
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
