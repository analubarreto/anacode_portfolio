//@ts-ignore
import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { useTheme } from '@/hooks/useTheme';
import { Section } from '@/components/Sections/styles/Projects.styles';

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Section id={id} className='main-projects section'>
      <p>Projects</p>
    </Section>
  )
}

export default Projects