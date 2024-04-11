import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from '@/pages/Home';
import { useTheme } from '@/hooks/useTheme';

const LigthTheme = {
  body: '#ECECF4',
  text: '#192140',
  shadow: '#511D7E',
  element: '#737ABC',
  selectedElement: '#511D7E',
  tag: '#B44BA7',
  timelineElement: '#9C9EAE ',
}

const DarkTheme = {
  body: '#192140',
  text: '#ECECF4',
  shadow: '#ECECF4',
  element: '#737ABC',
  selectedElement: '#B44BA7',
  tag: '#ECECF4',
  timelineElement: '#9C9EAE ',
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  
  body {
    background-color: ${(props: any) => props.theme.body};
    color: ${(props: any) => props.theme.text};
    transition: all 0.25s linear;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? LigthTheme : DarkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
