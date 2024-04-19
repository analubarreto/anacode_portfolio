//@ts-ignore
import React from 'react';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// import { useTheme } from '@/hooks/useTheme';
import Welcome from '@/components/Sections/Welcome';
import Experience from '@/components/Sections/Experience';
import Projects from '@/components/Sections/Projects';

const Main = styled.main<{ theme: any }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

const Home = (): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Main>
      <Welcome />
      <Experience id="experience" />
      <Projects id="projects" />
    </Main>
  )
}

export default Home