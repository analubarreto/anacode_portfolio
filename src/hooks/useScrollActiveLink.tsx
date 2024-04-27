import { useEffect, RefObject } from 'react';
import { links } from '@/data/links';

type SetActiveLink = (value: number) => void;

export const useScrollActiveLink = (mainRef: RefObject<HTMLElement>, setActiveLink: SetActiveLink): void => {
  useEffect(() => {
    if (mainRef.current === null) return;
    
    const handleScroll = (): void => {
      const sections = document.getElementsByClassName('section');

      const currentSection = Array.from(sections).find((section: Element) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

      if (currentSection) {
        const id = currentSection.getAttribute('id');
        const link = links.find(link => link.elementId === id) || links[0];
        setActiveLink(link.id);
      }
    };

    mainRef.current.addEventListener('scroll', handleScroll);

    return () => {
      mainRef.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);
}