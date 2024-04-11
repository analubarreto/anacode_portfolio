import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Home from '../Home';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home', () => {
  it('should render Home page', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const title = screen.getByText('Ana Code');
    const h3 = screen.getByText('Unblocking your digital potential');

    expect(title).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});