import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import ProvidersWrapper from '@/ProvidersWrapper';
import UnderConstruction from '@/pages/UnderConstruction';
import { SpeedInsights } from "@vercel/speed-insights/next"

/**
 * The root component of the application.
 * It sets up the routing and wraps the routes with providers.
 */
function App() {
  return (
    <Router>
      <SpeedInsights />
      <ProvidersWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/under-construction' element={<UnderConstruction />} />
        </Routes>
      </ProvidersWrapper>
    </Router>
  );
}

export default App;
