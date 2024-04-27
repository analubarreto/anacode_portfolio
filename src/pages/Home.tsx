import Welcome from '@/components/Sections/Welcome';
import AboutUs from '@/components/Sections/AboutUs';
import Services from '@/components/Sections/Services';
import Projects from '@/components/Sections/Projects';
import { useActiveLink } from '@/contexts/ActiveLinkContext';
import { useMainRef } from '@/contexts/HomeSectionsContext';
import { Main } from '@/pages/styles/Home.styles';
import { useScrollActiveLink } from '@/hooks/useScrollActiveLink';

/**
 * The Home component represents the home page of the portfolio.
 * It handles scrolling and updates the active link based on the current section.
 * @returns The JSX element representing the Home page.
 */
const Home = (): JSX.Element => {
  const [, setActiveLink] = useActiveLink();
  const mainRef = useMainRef();

  // @ts-ignore
  useScrollActiveLink(mainRef, setActiveLink);

  return (
    <Main ref={mainRef}>
      <Welcome id="welcome" />
      <AboutUs id="about-us" />
      <Services id="services" />
      <Projects id="projects" />
    </Main>
  )
}

export default Home