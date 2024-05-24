import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main<{ theme: any }>`
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

export const Title = styled.div`
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
        font-size: 10rem;
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
  h2 {
    font-size: 1.4rem;
    letter-spacing: 0rem;
    color: ${({ theme }) => theme.text};
    font-family: "Montserrat", sans-serif;

    @media (min-width: 1024px) {
      font-size: 2.7rem;
      letter-spacing: 0.2rem;
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const Section = styled(motion.section)`
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