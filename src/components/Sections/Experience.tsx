//@ts-ignore
import React from 'react';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';
// import { useTheme } from '@/hooks/useTheme';

type ExperienceProps = {
  id: string;
};

const Section = styled.section<{ theme: any }>`
  &.main-experience {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

const Experience = ({ id }: ExperienceProps): JSX.Element => {
  // const { t } = useTranslation();
  // const { theme } = useTheme();

  return (
    <Section id={id} className='main-experience section'>
      <img src="/images/ana_code_logo.svg" alt="loading" />
      <p>Experience</p>
    </Section>
  )
}

export default Experience