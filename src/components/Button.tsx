import { Btn } from '@/components/styles/Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  onBtnClick: () => void;
};

const Button = ({ children, onBtnClick }: ButtonProps): JSX.Element => {
  return (
    <Btn onClick={onBtnClick}>
      {children}
    </Btn>
  );
};

export default Button;