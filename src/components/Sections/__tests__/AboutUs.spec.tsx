//@ts-ignore
import React from 'react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutUs from '../AboutUs';

describe('AboutUs', () => {
  test('renders AboutUs component', () => {
    render(<AboutUs id="about-us" />);
    
    // Assert that the component renders without throwing any errors
    expect(screen.getByTestId('about-us')).toBeInTheDocument();
  });

  test('opens modal on button click', () => {
    render(<AboutUs id="about-us" />);
    
    // Get the button element
    const memberImage = screen.getByTestId('member-image');
    
    // Assert that the modal is initially closed
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    
    // Click the button to open the modal
    fireEvent.click(memberImage);
    
    // Assert that the modal is now open
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});