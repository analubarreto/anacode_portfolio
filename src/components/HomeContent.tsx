import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/useTheme';

const Main = styled.main<{ theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  background-image: ${({ theme }) => theme.backgroundImage};
  background-size: cover;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-title {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    h1 {
      font-size: 4.8rem;

      @media (min-width: 768px) {
        font-size: 12.8rem;
      }
    }
    span {
      font-size: 2.4rem;

      @media (min-width: 768px) {
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

    @media (min-width: 768px) {
      font-size: 3.2rem;
      letter-spacing: 0.2rem;
    }
  }
`

const Image = styled.div<{ theme: any }>`
  background-color: ${({ theme }) => theme.element};
  border-radius: 50%;
  width: 21.6rem;
  height: 21.6rem;
  margin-bottom: 3.8rem;

  @media (min-width: 768px) {
    width: 29rem;
    height: 29rem;
    margin-bottom: 6rem;
  }
   
  img {
    border-radius: 50%;
    margin-bottom: 4rem;
  }
`;

const HomeContent = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <Main theme={theme}>
      <Image theme={theme}>
        <img src='/images/ana_cartoon.webp' alt='Ana Code' />
      </Image>
      <Title>
        <div className='main-title'>
          <span>{'<h3>'}</span>
          <h1>Ana Code</h1>
          <span>{'</h3>'}</span>
        </div>
        <h3>{ t('Unblocking your digital potential') }</h3>
      </Title>
    </Main>
  )
}

export default HomeContent