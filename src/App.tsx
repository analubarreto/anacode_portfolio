import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --purple-100: #E7D5F6;
    --purple-200: #B682E3;
    --purple-300: #862ED1;
    --purple-400: #511D7E;
    --purple-500: #351353;

    --navy-blue-100: #D8DDEE;
    --navy-blue-200: #A1AED0;
    --navy-blue-300: #6A7FAF;
    --navy-blue-400: #3E4E8A;
    --navy-blue-500: #192140;
    
    --light-blue: #ECECF4; 
    --gray: #9C9EAE;

    --blue-100: #D4D7F0;
    --blue-200: #A4A8D6;
    --blue-300: #737ABC;
    --blue-400: #4B4F9D;
    --blue-500: #2D2F5F;

    --pink-100: #F4D9E8;
    --pink-200: #E0A8D1;
    --pink-300: #B44BA7;
    --pink-400: #7F1D6A;
    --pink-500: #5B144D;
    
    --white: #FFFFFF;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
