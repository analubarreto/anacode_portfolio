//@ts-ignore
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import IconComponent from '../Icon';

describe('IconComponent', () => {
  it('renders the icon with the correct name', () => {
    const name = 'add';

    const { getByText } = render(<IconComponent size={4} name={name} />);

    const iconElement = getByText(name);

    expect(iconElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<IconComponent size={4} name="add" onClick={onClick} />);

    const iconElement = getByText('add');

    fireEvent.click(iconElement);

    expect(onClick).toHaveBeenCalled();
  });

  it('renders the icon with the correct size', () => {
    const size = 4;
    const { container } = render(<IconComponent name="add" size={size} />);

    const iconElement = container.querySelector('.material-icons-round');

    expect(iconElement).toHaveStyle(`font-size: ${size}rem`);
  });
});