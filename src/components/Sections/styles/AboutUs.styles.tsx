import styled from 'styled-components';

export const AboutUsSection = styled.section<{ theme: any }>`
  &.main-about-us {
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 4rem 2rem 0 2rem;

    @media (min-width: 1024px) {
      padding: 20rem 10rem 0 10rem;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 1.5rem;

      @media (min-width: 1024px) {
        font-size: 4rem;
        margin-bottom: 2rem;
      }
    }

    p {
      font-size: 1.6rem;
      width: 37rem;

      @media (min-width: 1024px) {
        font-size: 2rem;
        width: 80rem;
      }
    }

    .our-team {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 5rem;

      @media (min-width: 1024px) {
        
      }

      &__title {
        font-size: 2.4rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        margin-bottom: 7rem;
      }

      &__members {
        display: flex;
        width: 100%;

        h4 {
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        p {
          font-size: 2rem;
          width: 44rem;

          span {
            color: ${({ theme }) => theme.primary};
            cursor: pointer;
            margin-left: 50%;
          }
        }
        
        &--member {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 20px;
          background-color: ${({ theme }) => theme.body};

          .text-wrapper {
            display: flex;
            flex-direction: column;

            .linkedin {
              margin-top: 2rem;
              color: ${({ theme }) => theme.linkedIn};
            }

            p > span {
              font-weight: bold;
            }
          }

          .image-wrapper {
            position: relative;
            width: 35rem;
            height: 32rem;
            overflow: visible;
            border-radius: 20rem;
            background-color: ${({ theme }) => theme.imageBackground};
            margin-right: 2rem;

            img {
              width: 40rem;
              height: 40rem;
              border-radius: 20rem;
              object-fit: cover;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -60%);
            }
          }
        }
      }
    }
  }
`;