import styled from 'styled-components';
import Welcome from '@/components/Sections/Welcome';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';
import { useEffect, useRef } from 'react';
import { useActiveLink } from '@/contexts/activeLink';
import { links } from '@/data/links';

const Main = styled.main<{ theme: any }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
`;

const Home = (): JSX.Element => {
  const [, setActiveLink] = useActiveLink();
  const mainRef = useRef(null);

  useEffect(() => {
    console.log('useEffect')

    const handleScroll = () => {
      if (!mainRef.current) return;
      if (mainRef.current) {
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
      }
    };

    if (mainRef.current) {
      // @ts-ignore
      mainRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainRef.current) {
        // @ts-ignore
        mainRef.current.removeEventListener('scroll', handleScroll);
      }
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