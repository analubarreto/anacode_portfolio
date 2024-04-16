import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Home from '../Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

describe('Home', () => {
  it('should render Home page', () => {
    render(
      <Router>
        <ThemeProvider theme={{}}>
          <Home />
        </ThemeProvider>
      </Router>
    );

    const title = screen.getByText('Ana Code');
    const h3 = screen.getByText('Unblocking your digital potential');

    expect(title).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});