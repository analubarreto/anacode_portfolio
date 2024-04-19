//@ts-ignore
import React from 'react';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// import { useTheme } from '@/hooks/useTheme';

type ProjectsProps = {
  id: string;
};

const Main = styled.main<{ theme: any }>`
  &.main-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

const Projects = ({ id }: ProjectsProps): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Main id={id} className='main-projects'>
      <p>Projects</p>
    </Main>
  )
}

export default Projects