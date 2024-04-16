import styled from 'styled-components';
import HomeContent from '@/components/HomeContent';
import Header from '@/components/Header/index';

const Main = styled.main<{ theme: string }>``;

const Home = (): JSX.Element => {
  return (
    <Main>
      <Header />
      <HomeContent />
    </Main>
  )
}

export default Home