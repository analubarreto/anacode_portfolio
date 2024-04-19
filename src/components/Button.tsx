import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onBtnClick: () => void;
};

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Alice', serif;
  background-color: ${({ theme }) => theme.element};
  width: max-content;
  height: 4rem;
  font-size: 2rem;
  margin-top: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add shadow here */
  transition: transform 0.2s ease-in-out; /* Add transition here */

  &:hover {
    background-color: ${({ theme }) => theme.selectedElement};
    border: none;
  }

  &:active {
    transform: scale(0.95); /* Add scale transform here */
  }

  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

const Button = ({ children, onBtnClick }: ButtonProps): JSX.Element => {
  return (
    <Btn onClick={onBtnClick}>
      {children}
    </Btn>
  );
};

export default Button;