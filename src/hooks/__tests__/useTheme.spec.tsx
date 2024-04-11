import { useTheme } from '../useTheme';
import { renderHook, act } from '@testing-library/react';

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('should initialize with light theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
  });

  test('should toggle theme between light and dark', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.themeToggler();
    });

    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.themeToggler();
    });

    expect(result.current.theme).toBe('light');
  });

  // test('should persist theme in local storage', () => {
  //   const { result } = renderHook(() => useTheme());

  //   act(() => {
  //     result.current.themeToggler();
  //   });

  //   expect(result.current.theme).toBe('dark');
  //   expect(window.localStorage.gettestem('theme')).toBe('dark');
  // });
});