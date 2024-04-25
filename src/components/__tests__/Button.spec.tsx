//@ts-ignore
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button', () => {
  it('renders the button with the provided children', () => {
    const { getByText } = render(<Button onBtnClick={jest.fn()}>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls the provided onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onBtnClick={handleClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});