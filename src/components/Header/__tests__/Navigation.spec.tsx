//@ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation closeMenu={jest.fn()} />
      </BrowserRouter>
    );
    
    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(5); // Update the number based on the number of links in your code
    
    // Add more assertions to test the content and attributes of the rendered links
    // For example:
    expect(linkElements[0]).toHaveTextContent('Home');
    expect(linkElements[0]).toHaveAttribute('href', '#welcome');
  });
});