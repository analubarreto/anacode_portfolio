//@ts-nocheck
import { renderHook, act } from '@testing-library/react';
import { usePagination } from '../usePagination';

describe('usePagination', () => {
  const itemsArray = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  it('should initialize with the correct values', () => {
    const { result } = renderHook(() => usePagination(itemsArray));

    expect(result.current.pages).toEqual([itemsArray[0]]);
    expect(result.current.totalItems).toBe(itemsArray.length);
    expect(result.current.totalPages).toBe(itemsArray.length);
  });

  it('should update currentItem when handlePrev and handleNext are called', () => {
    const { result } = renderHook(() => usePagination(itemsArray));

    act(() => {
      result.current.handlePrev();
    });
    expect(result.current.pages).toEqual([itemsArray[0]]);

    act(() => {
      result.current.handleNext();
    });
    expect(result.current.pages).toEqual([itemsArray[1]]);
  });

  it('should not update currentItem when handlePrev is called on the first page', () => {
    const { result } = renderHook(() => usePagination(itemsArray));

    act(() => {
      result.current.handlePrev();
    });
    expect(result.current.pages).toEqual([itemsArray[0]]);
  });

  it('should not update currentItem when handleNext is called on the last page', () => {
    const { result } = renderHook(() => usePagination(itemsArray));

    act(() => {
      result.current.handleNext();
    });
    expect(result.current.pages).toEqual([itemsArray[itemsArray.length - 1]]);
  });
});