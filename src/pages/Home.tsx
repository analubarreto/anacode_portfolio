import styled from 'styled-components';
import HomeContent from '@/components/HomeContent';

const Main = styled.main<{ theme: string }>``;

const Home = (): JSX.Element => {
  return (
    <Main>
      <HomeContent />
    </Main>
  )
}

export default Home