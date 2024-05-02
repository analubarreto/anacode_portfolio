import styled from 'styled-components';

export const AboutUsSection = styled.section<{ theme: any }>`
  &.main-about-us {
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 4rem 2rem 0 2rem;

    @media (min-width: 1024px) {
      padding: 8rem 10rem 0 10rem;
      height: 110vh;
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

    .who-are-we {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      margin-top: 5rem;

      @media (min-width: 1024px) {
        flex-direction: row;
        gap: 10rem;
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (min-width: 1024px) {
          flex-direction: row;
          gap: 2rem;
        }

        h3 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          text-transform: uppercase;

          @media (min-width: 1024px) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }
        }

        p {
          font-size: 1.4rem;
          width: 34rem;

          @media (min-width: 1024px) {
            font-size: 1.6rem;
            width: 40rem;
          }
        }
        
        &--icon {
          color: ${({ theme }) => theme.icon};
          font-size: 3.6rem;

          @media (min-width: 1024px) {
            font-size: 4.8rem;
          }
        }
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
        flex-direction: column;

        @media screen and (min-width: 1024px) {
          flex-direction: row;
          justify-content: space-around;
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
            margin-top: 0%;
          }

          .text-wrapper {
            display: flex;

            h4 {
              font-size: 1.6rem;
              margin-bottom: 1rem;
              text-align: center;
              width: 33.2rem;

              @media screen and (min-width: 1024px) {
                font-size: 2rem;
                margin-bottom: 3rem;
              }
            }

            .linkedin {
              color: ${({ theme }) => theme.linkedIn};

              @media screen and (min-width: 1024px) {
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
            width: 25rem;
            height: 25rem;
            overflow: visible;
            border-radius: 100%;
            background-color: ${({ theme }) => theme.imageBackground};
            margin-right: 2rem;
            transition: transform 0.3s ease-in-out;
            cursor: pointer;

            @media screen and (min-width: 1024px) {
              width: 35rem;
              height: 35rem;
            }

            img {
              width: 30rem;
              height: 30rem;
              border-radius: 20rem;
              object-fit: cover;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -58.2%);

              @media screen and (min-width: 1024px) {
                width: 40rem;
                height: 40rem;
                transform: translate(-50%, -56%);
              }
            }

            &:hover {
              transform: scale(0.8);
            }
          }
        }
      }
    }
  }
`;