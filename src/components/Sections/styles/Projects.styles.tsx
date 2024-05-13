import styled, { css } from 'styled-components';
import Icon from '@/components/Icon';

export const Section = styled.section<{ theme: any }>`
  &.main-projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: ${({ theme }) => theme.icon};
    color: ${({ theme }) => theme.body};
    padding: 8rem 2rem 0 2rem;

    @media (min-width: 1024px) {
      padding: 12rem 10rem 15rem 10rem;
      height: 100vh;
    }

    h1 {
      align-self: flex-start;
    }

    .carousel-wrap {
      margin-top: 4rem;

      @media screen and (min-width: 1024px) {
        margin-top: 12rem;
      }
    }

    .banner {
      background-color: ${({ theme }) => theme.banner};
      border-radius: 3rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 3rem;
      height: 45rem;
      
      @media screen and (min-width: 1024px) {
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

        @media screen and (min-width: 1024px) {
          margin-bottom: 0;
        }
      }

      .text-btn-wrap {
        margin-left: 2rem;
        h1 {
          color: ${({ theme }) => theme.subtext};
          font-size: 2rem;

          @media screen and (min-width: 1024px) {
            font-size: 3.2rem;
          }
        }

        p {
          color: ${({ theme }) => theme.text};
          font-size: 1.6rem;
          margin-top: 1rem;

          @media screen and (min-width: 1024px) {
            font-size: 2rem;
            margin-top: 1.5rem;
            width: 96rem;
          }
        }
      }
    }
  }
`;

export const CarouselItem = styled.div<{ $animate: boolean, $isNext: boolean | null }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    width: 75vw;
  }

  .carousel-item__data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    color: ${({ theme }) => theme.body};

    @media (min-width: 1024px) {
      padding: 2rem 10rem;
    }

    &--info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      height: 25rem;

      @media screen and (min-width: 1024px) {
        justify-content: space-between;
      }

      h2 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
        font-family: "Montserrat", sans-serif;

        @media screen and (min-width: 1024px) {
          font-size: 3.2rem;
        }
      }

      .description {
        font-size: 2rem;

        @media screen and (min-width: 1024px) {
          font-size: 2.4rem;
          margin-bottom: 1.6rem;
          width: 43rem;
        }
      }

      .what-was-done {
        font-size: 1.4rem;

        @media screen and (min-width: 1024px) {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          width: 43rem;
        }
      }
    }

    &--arrows {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      width: 30rem;

      @media screen and (min-width: 1024px) {
        width: 40rem;
        margin-top: 6rem;
      }
    }
  }
`;

export const CarouselImage = styled.img<{ $animate: boolean, $isNext: boolean | null }>`
  border-radius: 2rem;
  width: 30rem;
  margin-bottom: 2rem;
  order: -1;
  filter: blur(0%);

  ${({ $animate, $isNext }) => $animate && css`
    opacity: 1;
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    transform: translateX(${ $isNext ? '10rem' : '-10rem' });
    transform-origin: ${ $isNext ? 'left' : 'right' };
  `}

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    width: 40rem;
    order: 1;
  }
`;

export const ArrowIcon = styled(Icon)<{ $isDisabled: boolean }>`
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer' };
  color: ${({ theme, $isDisabled }) => $isDisabled ? theme.disabled : theme.body };
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.body};
  padding: 2rem;
  border-radius: 2.4rem;
  margin: 0 1rem;

  @media screen and (min-width: 1024px) {
    width: 98rem;
    margin: 0;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px) {
      font-size: 3.2rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 1024px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }

  .explanation-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }

    h1 {
      font-size: 2rem;

      @media screen and (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }

    p {
      font-size: 1.4rem;

      @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
      }
    }

    div {
      @media screen and (min-width: 1024px) {
        margin-right: 3rem;
      }
    }
  }
`