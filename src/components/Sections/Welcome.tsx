import { useTranslation } from 'react-i18next';
import { Main, Section, Title } from '@/components/Sections/styles/Welcome.styles';

type WelcomeProps = {
  id: string;
};

const Welcome = ({ id }: WelcomeProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Main className='main-welcome section' id={id}>
      <Section
        animate={{
          scale: [0, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: 'easeInOut',
        }}
      >
        <img loading='lazy' src='/images/logo.webp' alt='Drom Code' />
        <Title>
          <div className='main-title' data-testid='main-title'>
            <h1 data-testid='title'>Dröm Code</h1>
          </div>
          <h2 data-testid='subtitle'>{ t('The Bridge Between Dreams and Reality') }</h2>
        </Title>
      </Section>
    </Main>
  )
}

export default Welcome