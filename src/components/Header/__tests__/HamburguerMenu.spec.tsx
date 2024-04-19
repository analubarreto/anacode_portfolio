//@ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import HamburgerMenu from '../HamburgerMenu';

describe('HamburgerMenu', () => {
  test('should show Hamburguer menu', () => {
    const { getByTestId } = render(<HamburgerMenu isOpen={true} onClickMenu={() => {}} />);
    const menuIcon = getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
  });

  test('menu should transform when isOpen is true', () => {
    const { getByTestId } = render(<HamburgerMenu isOpen={true} onClickMenu={() => {}} />);
    const menuIcon = getByTestId('menu-icon');
    const menuLines = menuIcon.querySelectorAll('.menu-lines');
    expect(menuLines[0]).toHaveStyle('transform: rotate(45deg)');
    expect(menuLines[1]).toHaveStyle('transform: scaleY(0)');
    expect(menuLines[2]).toHaveStyle('transform: rotate(-45deg)');
  });

  test('menu should transform when isOpen is false', () => {
    const { getByTestId } = render(<HamburgerMenu isOpen={false} onClickMenu={() => {}} />);
    const menuIcon = getByTestId('menu-icon');
    const menuLines = menuIcon.querySelectorAll('.menu-lines');
    expect(menuLines[0]).toHaveStyle('transform: rotate(0)');
    expect(menuLines[1]).toHaveStyle('transform: scaleY(1)');
    expect(menuLines[2]).toHaveStyle('transform: rotate(0)');
  });
});