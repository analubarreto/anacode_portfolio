import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import ProvidersWrapper from '@/ProvidersWrapper';

/**
 * The root component of the application.
 * It sets up the routing and wraps the routes with providers.
 */
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
