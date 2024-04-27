//@ts-ignore
import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { useTheme } from '@/hooks/useTheme';
import { Section } from '@/components/Sections/styles/Projects.styles';

type ProjectsProps = {
  id: string;
};

const Services = ({ id }: ProjectsProps): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Section
      id={id}
      className='main-services section'
      initial={{ scale: 0, y: 100 }}
      whileInView={{ scale: 1, y: 0 }}
      viewport={{ once: false }}
    >
      <p>Services</p>
    </Section>
  )
}

export default Services