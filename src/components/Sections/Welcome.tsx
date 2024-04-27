import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/useTheme';
import Button from '@/components/Button';
import { Main, Section, Title } from '@/components/Sections/styles/Welcome.styles';

type WelcomeProps = {
  id: string;
};

const Welcome = ({ id }: WelcomeProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <Main className='main-welcome section' theme={theme} id={id}>
      <Section>
        <img src='/images/logo.svg' alt='Ana Code' />
        <Title>
          <div className='main-title' data-testid='main-title'>
            <h1 data-testid='title'>Ana Code</h1>
          </div>
          <h3 data-testid='subtitle'>{ t('Unblocking your digital potential').toUpperCase() }</h3>
        </Title>
      </Section>
      <Section>
        <p>{ t('Presentation') }</p>
        <Button href='#contact'>{ t('Contact us') }</Button>
      </Section>
    </Main>
  )
}

export default Welcome