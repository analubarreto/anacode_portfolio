import Welcome from '@/components/Sections/Welcome';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';
import { useEffect } from 'react';
import { useActiveLink } from '@/contexts/ActiveLinkContext';
import { useMainRef } from '@/contexts/HomeSectionsContext';
import { links } from '@/data/links';
import { Main } from '@/pages/styles/Home.styles';

/**
 * The Home component represents the home page of the portfolio.
 * It handles scrolling and updates the active link based on the current section.
 * @returns The JSX element representing the Home page.
 */
const Home = (): JSX.Element => {
  const [, setActiveLink] = useActiveLink();
  const mainRef = useMainRef();

  useEffect(() => {
    if (mainRef === null || mainRef.current === null) return;
    
    const handleScroll = () => {
      const sections = document.getElementsByClassName('section');

      const currentSection = Array.from(sections).find(section => {
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
      mainRef?.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Main ref={mainRef}>
      <Welcome id="welcome" />
      <Experience id="experience" />
      <Projects id="projects" />
    </Main>
  )
}

export default Home