//@ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Welcome from '../Welcome';

describe('Home', () => {
  it('should render Home page', () => {
    render(
      <Welcome />
    );

    const title = screen.getByText('Ana Code');
    const h3 = screen.getByText('Unblocking your digital potential');

    expect(title).toBeInTheDocument();
    expect(h3).toBeInTheDocument();

  });
});