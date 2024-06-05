import Welcome from '@/components/Sections/Welcome';
import AboutUs from '@/components/Sections/AboutUs';
import Services from '@/components/Sections/Services';
import Contact from '@/components/Sections/Contact';
import { useMainRef } from '@/contexts/HomeSectionsContext';
import { Main } from '@/pages/styles/Home.styles';
import { PopupWidget } from "react-calendly";
import { useTranslation } from'react-i18next';
import { useState, useEffect } from 'react';

/**
 * The Home component represents the home page of the portfolio.
 * It handles scrolling and updates the active link based on the current section.
 * @returns The JSX element representing the Home page.
 */
const Home = (): JSX.Element => {
  const mainRef = useMainRef();
  const { t } = useTranslation();
  const [mainSection, setMainSection] = useState(null);

  useEffect(() => {
    const main = document.getElementById('main');
    // @ts-ignore
    setMainSection(main)
  }, []);

  return (
    <Main id='main' ref={mainRef}>
      <Welcome id="welcome" />
      <AboutUs id="about-us" />
      <Services id="services" />
      <Contact id="contact" />
      {
        mainSection && 
        <PopupWidget
          url="https://calendly.com/dromcoders"
          rootElement={mainSection}
          text={t('For Your Future')}
          textColor="#F2F2F2"
          color="#F18B9C"
        />
      }
    </Main>
  )
}

export default Home