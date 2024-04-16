import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('should render Home page', () => {
    render(
      <HomeContent />
    );

    const title = screen.getByText('Ana Code');
    const h3 = screen.getByText('Unblocking your digital potential');

    expect(title).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});