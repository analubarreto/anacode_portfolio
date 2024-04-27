import styled, { keyframes } from 'styled-components';

const growAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100vh;
  }
`;

const shrinkAnimation = keyframes`
  from {
    height: 100vh;
  }
  to {
    height: 0;
  }
`;

export const Modal = styled.article<{ theme: any, $isOpen: boolean }>`
  position: absolute;
  width: ${({ $isOpen }) => ($isOpen ? '100vw' : '0')};
  height: ${({ $isOpen }) => ($isOpen ? '100vh' : '0')};
  background-color: ${({ theme }) => theme.menuBackground};
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ $isOpen }) => ($isOpen ? growAnimation : shrinkAnimation)} 0.3s ease-in-out forwards;

  .member {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    @media screen and (min-width: 1024px) {
      padding: 2rem;
    }

    h4 {
      font-size: 1.6rem;
      margin-bottom: 2.4rem;
      color: ${({ theme }) => theme.imageBackground};
      width: 27rem;

      @media screen and (min-width: 1024px) {
        font-size: 3.2rem;
        margin-bottom: 2.4rem;
        width: 54rem;
      }
    }

    &__image-wrapper {
      position: relative;
      width: 23rem;
      height: 30rem;
      background-color: ${({ theme }) => theme.imageBackground};
      border-radius: 20rem;

      @media screen and (min-width: 1024px) {
        width: 30rem;
        height: 40rem;
      }

      img {
        position: absolute;
        width: 36rem;
        height: 36rem;
        object-fit: cover;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50.0%);

        @media screen and (min-width: 1024px) {
          width: 48rem;
          height: 48rem;
        }

      }
    }

    &__text-wrap {
      position: relative;
      background-color: ${({ theme }) => theme.body};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 31.7rem;
      height: 40rem;
      padding: 3.2rem 2.6rem 8.4rem 2.6rem;
      border-radius: 2.4rem;

      @media screen and (min-width: 1024px) {
        width: 59rem;
        height: 30rem;
        padding: 3.2rem 2.6rem 8.4rem 2.6rem;
        border-radius: 2.4rem;
      }

      p {
          font-size: 1.4rem;

          @media screen and (min-width: 1024px) {
            font-size: 1.6rem;
          }
        }

      a {
        position: absolute;
        bottom: 1.4rem;
        right: 1.4rem;
        color: #0072B1;

        @media screen and (min-width: 1024px) {
          bottom: 2.4rem;
          right: 2.4rem;
        }
      }
    }
  }
`;