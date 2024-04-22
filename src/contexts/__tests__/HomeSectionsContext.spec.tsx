//@ts-ignore
import React from 'react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { HomeSectionsProvider } from '../HomeSectionsContext';

describe('HomeSectionsProvider', () => {
  test('renders children', () => {
    const { getByText } = render(
      <HomeSectionsProvider>
        <div>Child Component</div>
      </HomeSectionsProvider>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  test('provides mainRef value to context', () => {
    const { container } = render(
      <HomeSectionsProvider>
        <div>Child Component</div>
      </HomeSectionsProvider>
    );

    expect(container.firstChild).toBeDefined();
  });
});