import styled, { css } from 'styled-components';
import Icon from '@/components/Icon';

export const Section = styled.section<{ theme: any }>`
  &.main-projects {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 8rem 2rem 0 2rem;

    @media (min-width: 1024px) {
      padding: 16rem 10rem 0 10rem;
    }

    .carousel-wrap {
      margin-top: 4rem;

      @media screen and (min-width: 1024px) {
        margin-top: 12rem;
      }
    }
  }
`;

export const CarouselItem = styled.div`
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
    color: ${({ theme }) => theme.text};

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

      h3 {
        font-size: 2.4rem;
        margin-bottom: 1rem;

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
      }
    }
  }
`;

export const CarouselImage = styled.img<{ $animate: boolean }>`
  border-radius: 2rem;
  transform: rotate(-20deg) translateY(0);
  transition: transform 0.5s ease, opacity 0.5s ease;
  width: 30rem;
  margin-bottom: 2rem;
  order: -1;

  ${({ $animate }) => $animate && css`
    transform: rotate(-20deg) translateY(-100);
    opacity: 1;
  `}

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    width: 40rem;
    order: 1;
  }
`;

export const ArrowIcon = styled(Icon)<{ $isDisabled: boolean }>`
  cursor: ${({ $isDisabled }) => $isDisabled ? 'not-allowed' : 'pointer' };
  color: ${({ theme, $isDisabled }) => $isDisabled ? theme.disabled : theme.icon };
`;