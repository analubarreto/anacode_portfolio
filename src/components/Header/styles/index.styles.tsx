import styled from 'styled-components';

export const HeaderMain = styled.header<{ $showMenu: boolean }>`
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  width: 95vw;
  margin: 1rem auto 0 auto;
  border-radius: 2rem; 
  z-index: 3;

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
    width: 60vw;
    right: 0;
    left: 0;
  }
`;

/**
 * Styles for the Title component.
 *
 * @param {Object} theme - The theme object containing color values.
 */
export const Title = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
    display: none;

    @media (min-width: 1024px) {
      display: block;
      background-color: transparent;
      border: none;
      cursor: pointer;
      order: 2;
      align-self: flex-start;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.text};
      order: 0;
      margin-top: 2rem;
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

  .language-toggle {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }
`;