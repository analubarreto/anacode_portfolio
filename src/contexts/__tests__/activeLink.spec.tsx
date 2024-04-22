//@ts-ignore
import React from 'react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { ActiveLinkProvider, useActiveLink } from '../activeLink';

describe('ActiveLinkProvider', () => {
  test('renders children', () => {
    render(
      <ActiveLinkProvider>
        <div>Child Component</div>
      </ActiveLinkProvider>
    );

    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });

  test('provides activeLink state and setActiveLink function', () => {
    let activeLink: number;
    let setActiveLink: (value: number) => void;

    render(
      <ActiveLinkProvider>
        <TestComponent />
      </ActiveLinkProvider>
    );

    function TestComponent() {
      [activeLink, setActiveLink] = useActiveLink();

      return null;
    }

    waitFor(() => {
      expect(activeLink).toBe(1);
      expect(typeof setActiveLink).toBe('function');
    });
  });
});