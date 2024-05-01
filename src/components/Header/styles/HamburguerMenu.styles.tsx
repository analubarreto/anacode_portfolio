import styled from 'styled-components';

/**
 * Represents the styled button component for the hamburger menu icon.
 *
 * @param $open - A boolean indicating whether the menu is open or closed.
 */
export const MenuIcon = styled.button<{ $open: boolean }>`
  display: block;
  height: 3.4rem;
  width: 5rem;
  /* position: absolute;
  top: 1.6rem;
  left: 1.6rem; */
  z-index: 2;
  display: flex;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;

  /**
   * Represents the lines of the hamburger menu icon.
   */
  .menu-lines {
    display: ${({ $open }) => ($open ? 'none' : 'block')};
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: ${({ theme, $open }) => ($open ? theme.menuText : theme.text)};

    &:first-child {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
      transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transition: transform 0.4s ease-in-out;
      transform: ${({ $open }) => ($open ? 'scaleY(0)' : 'scaleY(1)')};
    }

    &:nth-child(3) {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${({ $open }) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;