import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  h1 {
    width: 35rem;
    text-align: center;
    margin-top: 2.4rem;
    font-size: 2.4rem;

    @media screen and (min-width: 1024px) {
      width: 98.8rem;
      text-align: center;
      margin-top: 1.4rem;
      font-size: 4rem;
    }
  }

  p {
    width: 35rem;
    text-align: center;
    font-size: 1.6rem;
    margin-top: 1rem;

    @media screen and (min-width: 1024px) {
      width: 66rem;
      text-align: center;
      font-size: 2.4rem;
      margin-top: 1.6rem;
    }
  }

  img {
    width: 30rem;
    height: 30.7rem;
    margin: 0 auto;

    @media screen and (min-width: 1024px) {
      width: 49rem;
      height: 51.1rem;
    }
  }
`;