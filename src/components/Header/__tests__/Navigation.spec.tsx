import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Navigation from '../Navigation';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(<Navigation />);
    
    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(4); // Update the number based on the number of links in your code
    
    // Add more assertions to test the content and attributes of the rendered links
    // For example:
    expect(linkElements[0]).toHaveTextContent('HOME');
    expect(linkElements[0]).toHaveAttribute('href', '/');
  });

  // Add more tests for other functionality of the Navigation component
});