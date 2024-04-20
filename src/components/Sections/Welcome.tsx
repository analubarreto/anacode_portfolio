import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/useTheme';
import Button from '@/components/Button';

const Main = styled.main<{ theme: any }>`
  &.main-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    padding: 1.6rem;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-title {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
    }

    h1 {
      font-size: 4.8rem;

      @media (min-width: 1024px) {
        font-size: 12.8rem;
      }
    }
    span {
      font-size: 2.4rem;

      @media (min-width: 1024px) {
        font-size: 3.2rem;
      }
      
      &:first-child {
        margin-right: 1.6rem;
        align-self: flex-start;
      }
      &:last-child {
        margin-left: 1.6rem;
        align-self: flex-end;
      }
    }
  }
  h3 {
    font-size: 1.4rem;
    letter-spacing: 0rem;
    color: ${({ theme }) => theme.subtext};

    @media (min-width: 1024px) {
      font-size: 2.1rem;
      letter-spacing: 0.2rem;
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 14rem;
    height: 12.5rem;
    margin-bottom: 3rem;

    @media (min-width: 1024px) {
      width: 27.2rem;
      height: 24.4rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.text};
    padding: 0 1.6rem;

    @media (min-width: 1024px) {
      font-size: 2.1rem;
      padding: 0 6.4rem;
      width: 60rem;
    }
  }

  &:last-child {
    margin-left: 0;
    margin-top: 3rem;

    @media (min-width: 1024px) {
      margin-left: 3rem;
      margin-top: 0;
    }
  }
`;

const Welcome = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const handleSendEmail = () => {
    window.location.href = 'mailto:anacodesoft@gmail.com'
  }

  return (
    <Main className='main-welcome' theme={theme}>
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
        <Button onBtnClick={handleSendEmail}>{ t('Contact us') }</Button>
      </Section>
    </Main>
  )
}

export default Welcome