//@ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Contact from '../Contact';
import { MockIntersectionObserver } from '../../../mocks/IntersectionObserver';

describe('Contact', () => {
  beforeEach(() => {
    //@ts-ignore
    global.IntersectionObserver = MockIntersectionObserver;
  });

  it('renders the contact section', () => {
    const { getByText } = render(<Contact id="contact" />);
    
    expect(getByText('Contact Us')).toBeInTheDocument();
    expect(getByText('Working Hours')).toBeInTheDocument();
    expect(getByText('Support')).toBeInTheDocument();
  });

  it('renders the company info', () => {
    const { getByText, getByRole } = render(<Contact id="contact" />);
    
    expect(getByText('Monday to Friday')).toBeInTheDocument();
    expect(getByText('09:00 - 18:00')).toBeInTheDocument();
    expect(getByText('Sat, Sun, Holidays')).toBeInTheDocument();
    expect(getByText('Closed')).toBeInTheDocument();
    expect(getByRole('link', { name: 'dromcoders@gmail.com' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'WhatsApp Ana' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'WhatsApp Roger' })).toBeInTheDocument();
    expect(getByRole('link', { name: '@drom_code' })).toBeInTheDocument();
  });
});