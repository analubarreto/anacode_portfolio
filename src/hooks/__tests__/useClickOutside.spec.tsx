import { renderHook } from '@testing-library/react';
import { useClickOutside } from '../useClickOutside';

describe('useClickOutside', () => {
  test('should call the callback function when clicking outside the ref element', () => {
    const callback = jest.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useClickOutside(ref, callback));

    const event = new MouseEvent('mousedown');
    document.dispatchEvent(event);

    expect(callback).toHaveBeenCalled();
  });
});