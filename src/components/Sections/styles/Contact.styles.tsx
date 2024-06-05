import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)<{ theme: any }>`
  &.main-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 8rem 2rem 7rem 2rem;

    @media screen and (min-width: 1024px) {
      padding: 12rem 10rem 15rem 10rem;
      height: 100vh;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      align-self: flex-start;

      @media screen and (min-width: 1024px) {
        font-size: 4rem;
      }
    }

    section {
      display: flex;
      justify-content: space-around;
      flex-direction: column;

      @media screen and (min-width: 1024px) {
        flex-direction: row;
      }
      
      h3 {
        font-size: 1.6rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 1024px) {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
      }

      p, a {
        display: block;
        font-size: 1.4rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 1024px) {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const CompanyInfo = styled.article`
  display: flex;
  justify-content: space-between;
  background-color: #DCA1B0;
  padding: 2rem;
  border-radius: 2rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 1024px) {
    width: 50rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    margin-top: 5rem;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-family: "Alice", serif;

    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
`;

export const Banner = styled.article `
    background-color: ${({ theme }) => theme.banner};
    border-radius: 3rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3rem;
    margin-top: 3rem;
    height: 45rem;
  
  @media screen and (min-width: 1440px) {
    padding: 2rem 3rem;
    flex-direction: row;
    margin-bottom: 0;
    height: auto;
    justify-content: space-between;
  }

  img {
    width: 24rem;
    height: 15rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
    }
  }

  .text-btn-wrap {
    margin-left: 2rem;
    h1 {
      color: ${({ theme }) => theme.subtext};
      font-size: 1.6rem;

      @media screen and (min-width: 1440px) {
        font-size: 3.2rem;
      }
    }

    p {
      color: ${({ theme }) => theme.text};
      font-size: 1.6rem;
      margin-top: 1rem;

      @media screen and (min-width: 1440px) {
        font-size: 2rem;
        margin-top: 1.5rem;
        max-width: 96rem;
      }
    }
  }
`;