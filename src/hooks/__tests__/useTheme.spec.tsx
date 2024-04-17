import { useTheme } from '../useTheme';
import { renderHook, act } from '@testing-library/react';

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('should initialize with light theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme.name).toBe('light');
  });

  test('should toggle theme between light and dark', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.themeToggle();
    });

    expect(result.current.theme.name).toBe('dark');

    act(() => {
      result.current.themeToggle();
    });

    expect(result.current.theme.name).toBe('light');
  });

  test('should persist theme in local storage', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.themeToggle();
    });

    const storedTheme = window.localStorage.getItem('theme');

    console.log(storedTheme);
    expect(result.current.theme.name).toBe('dark');
    expect(storedTheme && storedTheme).toBe('dark');
  });
});