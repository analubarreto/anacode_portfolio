import styled, { css } from 'styled-components';


const basicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Alice', serif;
  background-color: ${({ theme }) => theme.element};
  width: max-content;
  height: 4rem;
  font-size: 1.6rem;
  margin-top: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.selectedElement};
    border: none;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Btn = styled.button`
  ${basicStyles};
`;

export const LinkBtn = styled.a`
  ${basicStyles};
  padding: 0.6em 1.2em;
  border-radius: 1rem;
  cursor: pointer;
  color: #ECECF4;
`;