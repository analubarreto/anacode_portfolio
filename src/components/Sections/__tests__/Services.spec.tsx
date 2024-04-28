//@ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Services from '../Services';
import { MockIntersectionObserver } from '../../../mocks/IntersectionObserver';

describe('Services', () => {
  beforeEach(() => {
    //@ts-ignore
    global.IntersectionObserver = MockIntersectionObserver;
  });


  it('renders the page title', () => {
    render(<Services id="services" />);

    const pageTitle = screen.getByText('Services Page Title');

    expect(pageTitle).toBeInTheDocument();
  });

  it('renders the services', () => {
    render(<Services id="services" />);

    const services = screen.getAllByTestId('service');

    expect(services).toHaveLength(5);
  });

  it('renders the services addons', () => {
    render(<Services id="services" />);

    const addons = screen.getAllByTestId('addon');

    expect(addons).toHaveLength(9);
  });
});