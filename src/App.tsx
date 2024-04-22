import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import ProvidersWrapper from '@/ProvidersWrapper';

function App() {
  return (
    <Router>
      <ProvidersWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </ProvidersWrapper>
    </Router>
  );
}

export default App;
