import { renderHook, act } from '@testing-library/react';
import useWindowSize from '../useWindowSize';

describe('useWindowSize', () => {
  test('should return the current window size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({
      width: window.innerWidth,
      height: window.innerHeight
    });
  });

  test('should update the size when the window is resized', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      // Change the window size
      window.innerWidth = 500;
      window.innerHeight = 500;
      // Trigger the resize event
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({
      width: 500,
      height: 500
    });
  });
});