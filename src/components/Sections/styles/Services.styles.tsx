import styled from 'styled-components';

export const Section = styled.section<{ theme: any }>`
  &.main-services {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    @media (min-width: 1024px) {
      height: 110vh;
    }

    .main-services__title {
      background-color: ${({ theme }) => theme.icon};
      width: 100vw;
      padding: 4rem 2rem 0 2rem;
      color: ${({ theme }) => theme.body};

      @media (min-width: 1024px) {
        padding: 8rem 10rem 0 10rem;
      }
    }

    .services-wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem;
      padding: 2rem 2rem 0 2rem;

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-top: 3rem;
        padding: 2rem 10rem 0 10rem;
      }

      .service {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        border-radius: 1rem;
        transition: all 0.3s ease-in-out;

        @media (min-width: 1024px) {
          padding: 2rem 1rem;
        }

        &__title {
          display: flex;
          align-items: center;
          margin-bottom: 1.6rem;

          h3 {
            margin-left: 1.6rem;
            font-size: 2.4rem;
          }
        }
        &__text {
          font-size: 1.6rem;
        }
      }
    }

    .services-addons {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      padding: 4rem 2rem 0 2rem;

      @media (min-width: 1024px) {
        justify-content: space-between;
        margin-top: 5rem;
        padding: 4rem 10rem 15rem 10rem;
      }

      h3 {
        font-size:1.6rem;
        margin-bottom: 1.6rem;
        text-transform: uppercase;

        @media (min-width: 1024px) {
          font-size: 2rem;
        }
      }

      .addon-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 1.6rem;

        @media (min-width: 1024px) {
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(1, 1fr);
        }
      }

      .addon {
        display: flex;
        align-items: center;
        margin-bottom: 1.6rem;

        @media (min-width: 1024px) {
          margin-bottom: 0;
        }

        &__text {
          margin-left: 1.6rem;
          font-size: 1.6rem;
        }

        &__icon {
          color: ${({ theme }) => theme.icon};
        }
      }
    }
  }
`;