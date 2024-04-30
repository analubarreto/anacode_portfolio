//@ts-ignore
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Projects from '../Projects';

describe('Projects', () => {
  test('renders project title', () => {
    render(<Projects id="projects" />);

    const titleElement = screen.getByText('Projects Page Title');

    expect(titleElement).toBeInTheDocument();
  });

  test('renders project carousel items one by one', () => {
    render(<Projects id="projects" />);

    const carouselItems = screen.getAllByTestId('carousel-item');

    expect(carouselItems.length).toBe(1); 
  });

  test('handles next button click', () => {
    render(<Projects id="projects" />);

    const nextButton = screen.getByTestId('next-button');

    fireEvent.click(nextButton);
  });

  test('handles previous button click', () => {
    render(<Projects id="projects" />);

    const prevButton = screen.getByTestId('prev-button');

    fireEvent.click(prevButton);
  });
});