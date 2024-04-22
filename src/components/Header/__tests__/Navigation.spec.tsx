//@ts-ignore
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';
import { ActiveLinkProvider, useActiveLink } from '../../../contexts/ActiveLinkContext';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <ActiveLinkProvider>
          <Navigation />
        </ActiveLinkProvider>
      </BrowserRouter>
    );
    
    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(4); // Update the number based on the number of links in your code
    
    // Add more assertions to test the content and attributes of the rendered links
    // For example:
    expect(linkElements[0]).toHaveTextContent('Home');
    expect(linkElements[0]).toHaveAttribute('href', '#welcome');
  });

  test('sets active link when clicked', () => {
    let activeLink;
    const TestComponent = () => {
      [activeLink, ] = useActiveLink();
      return <Navigation />;
    };
  
    render(
      <BrowserRouter>
        <ActiveLinkProvider>
          <TestComponent />
        </ActiveLinkProvider>
      </BrowserRouter>
    );
  
    const linkElements = screen.getAllByRole('link');
  
    // Simulate a click on the first link
    fireEvent.click(linkElements[0]);
  
    // Assert that the first link is now active
    expect(activeLink).toBe(1);
  
    // Simulate a click on the second link
    fireEvent.click(linkElements[1]);
  
    // Assert that the second link is now active
    expect(activeLink).toBe(2);
  });
});