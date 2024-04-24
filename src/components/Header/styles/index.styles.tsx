import styled from 'styled-components';

export const HeaderMain = styled.header<{ $showMenu: boolean, $isOnTop: boolean }>`
  position: absolute;
  top: 0;
  background-color: ${({ theme, $isOnTop }) => $isOnTop ? 'transparent' : theme.menuBackground};
  border-radius: 1rem; 
  z-index: 1;

  @media screen and (max-width: 1023px) {
    visibility: ${({ $showMenu }) => ($showMenu ? 'visible' : 'hidden')};
    transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: translateX(${({ $showMenu }) => ($showMenu ? '0' : '-100%')});
    background-color: ${({ theme }) => theme.menuBackground};
    height: 100vh;
    width: 25rem;
  }

  @media screen and (min-width: 1024px) {
    min-width: 14rem;
    right: 0;
    left: 0;
  }
`;

/**
 * Styles for the Title component.
 *
 * @param {Object} theme - The theme object containing color values.
 */
export const Title = styled.div<{ theme: any, $isOnTop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.6rem;
  color: ${({ theme }) => theme.menuText};

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.text};
  }

  /**
   * Styles for the h1 element.
   */
  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.menuText};
    
    @media (min-width: 1024px) {
      color: ${({ theme }) => theme.text};
    }
  }

  /**
   * Styles for the color mode toggle button.
   */
  .color-mode-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.menuText};
    order: 2;
    align-self: flex-start;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      color: ${({ theme, $isOnTop }) => $isOnTop ? theme.text : theme.menuText};
      order: 0;
      margin-top: 2.5rem;
    }

    /**
     * Styles for the tag element that can be seen with "in construction" inside the color mode toggle button.
     */
    span {
      font-size: 1.6rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.menuText};

      @media (min-width: 1024px) {
        visibility: hidden;
      }
    }
  }
`;