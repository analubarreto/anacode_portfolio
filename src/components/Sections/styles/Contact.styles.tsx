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
    padding: 8rem 2rem 5rem 2rem;

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
  flex-direction: column;
  height: 30rem;
  justify-content: space-between;
  background-color: #DCA1B0;
  padding: 2rem;
  border-radius: 2rem;

  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 50rem;
    height: 40rem;
    border-radius: 2rem;
    margin-top: 5rem;
  }
`;