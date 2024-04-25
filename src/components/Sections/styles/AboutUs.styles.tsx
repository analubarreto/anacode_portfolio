import styled from 'styled-components';

export const AboutUsSection = styled.section<{ theme: any }>`
  &.main-about-us {
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 4rem 2rem 0 2rem;

    @media (min-width: 1024px) {
      padding: 12rem 10rem 0 10rem;
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
      width: 34rem;

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
        font-size: 1.6rem;
        margin-bottom: 4rem;
        text-transform: uppercase;

        @media screen and (min-width: 1024px) {
          font-size: 2.4rem;
          margin-bottom: 7rem;
        }
      }

      &__members {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;

        @media screen and (min-width: 1024px) {
          flex-direction: row;
          flex-wrap: nowrap;
        }

        h4 {
          font-size: 1.6rem;
          margin-bottom: 1rem;

          @media screen and (min-width: 1024px) {
            font-size: 2rem;
            margin-bottom: 3rem;
          }
        }

        p {
          font-size: 1.6rem;
          width: 32rem;

          @media screen and (min-width: 1024px) {
            font-size: 2rem;
            width: 44rem;
          }

          span {
            color: ${({ theme }) => theme.primary};
            cursor: pointer;
            margin-left: 1rem;

            @media screen and (min-width: 1024px) {
              margin-left: 50%;
            }
          }
        }
        
        &--member {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          border-radius: 20px;
          margin-top: 3rem;

          @media screen and (min-width: 1024px) {
            align-items: flex-start;
            flex-direction: row;
            margin-top: 0%;
          }

          .text-wrapper {
            display: flex;
            flex-direction: column;

            .linkedin {
              margin-top: 2rem;
              color: ${({ theme }) => theme.linkedIn};

              @media screen and (min-width: 1024px) {
                margin-top: 2rem;
                color: ${({ theme }) => theme.linkedIn};
              }
            }

            p > button {
              color: ${({ theme }) => theme.text};
              font-weight: bold;
              background-color: transparent;
              border: none;
            }
          }

          .image-wrapper {
            position: relative;
            width: 20.5rem;
            height: 25.6rem;
            overflow: visible;
            border-radius: 20rem;
            background-color: ${({ theme }) => theme.imageBackground};
            margin-right: 2rem;

            @media screen and (min-width: 1024px) {
              width: 35rem;
              height: 32rem;
            }

            img {
              width: 30rem;
              height: 30rem;
              border-radius: 20rem;
              object-fit: cover;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -57.5%);

              @media screen and (min-width: 1024px) {
                width: 40rem;
                height: 40rem;
                transform: translate(-50%, -60%);
              }
            }
          }
        }
      }
    }
  }
`;