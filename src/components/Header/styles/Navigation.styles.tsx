import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = styled.nav<{ theme: string, $isOnTop: boolean }>`
  background-color: transparent;

  @media (min-width: 1024px) {
    background-color: transparent;
    transition: background-color 0.3s ease;
    padding: 0 2rem;
    border-radius: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    margin-top: 6rem;

    @media (min-width: 1024px) {
      gap: 0;
      flex-direction: row;
      margin-top: 2rem;
    }

    li {
      margin-right: 1rem;
      width: max-content;

      @media (min-width: 1024px) {
        margin-right: 1.6rem;
      }
    }

    section {
      display: flex;
      flex-direction: row;
      margin-right: 3rem;

      @media (min-width: 1024px) {
        flex-direction: column;
      }

      span {
        font-size: 1rem;
        text-transform: uppercase;
        background: ${({ theme }) => theme.tag};
        color: ${({ theme }) => theme.tagText};
        padding: 0.5rem 1rem;
        border-radius: 1.4rem;
        width: max-content;
        height: max-content;

        @media (min-width: 1024px) {
          margin-left: 0.5rem;
          bottom: 0;
        }
      }
    }
  }
`;

const linkStyles = css<{ theme: string, $isActive: boolean, $isOnTop: boolean }>`
  text-decoration: none;
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.menuText};

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({ $isActive }) => $isActive ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme, $isActive }) => $isActive ? theme.menuText : 'transparent'};
    transition: width 0.4s ease-in-out;

    @media (min-width: 1024px) {
      background-color: ${
        ({ theme, $isActive, $isOnTop }) => {
          if ($isActive) {
            return $isOnTop ? theme.text : theme.menuText;
          }
          return 'transparent'
        }
      };
    }
  }

  @media (min-width: 1024px) {
    color: ${({ theme, $isOnTop }) => $isOnTop ? theme.text : theme.menuText};
    font-size: 1.6rem;
  }
`;

export const Link = styled(RouterLink)<{ theme: string, $isActive: boolean, $isOnTop: boolean }>`
  ${linkStyles}
`;

export const LinkScroll = styled.a<{ theme: string, $isActive: boolean, $isOnTop: boolean }>`
  ${linkStyles}
`;
