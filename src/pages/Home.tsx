import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Main = styled.section``;

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Main>
      <h1>Ana Code</h1>
      <h3>{ t('Unblocking your digital potential') }</h3>
    </Main>
  )
}

export default Home