import { useEffect } from 'react';

/**
 * Custom hook that detects clicks outside of a specified element.
 * @param ref - The ref object that points to the element to detect clicks outside of.
 * @param callback - The callback function to be called when a click outside is detected.
 */
export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};