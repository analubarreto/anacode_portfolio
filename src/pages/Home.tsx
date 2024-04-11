import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Main = styled.main<{ theme: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  background-image: ${({ theme }) => theme === 'light' ? "url('/public/images/bg-dark-mode.webp')" : "url('/public/images/bg-light-mode.webp')"};
  background-size: cover;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-title {
    display: flex;

    h1 {
      font-size: 12.8rem;
    }
    span {
      font-size: 3.2rem;
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
    font-size: 3.2rem;
    letter-spacing: 0.2rem;
  }
`

const Image = styled.div<{ theme: string }>`
  background-color: ${({ theme }) => theme.element};
  width: 29rem;
  height: 29rem;
  border-radius: 50%;
  margin-bottom: 6rem;
   
  img {
    border-radius: 50%;
    margin-bottom: 4rem;
  }
`;

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Main>
      <Image>
        <img src='/public/images/ana_cartoon.webp' alt='Ana Code' />
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

export default Home