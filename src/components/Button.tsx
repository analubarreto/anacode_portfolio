import { Btn, LinkBtn } from '@/components/styles/Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  onBtnClick?: () => void;
  href?: string;
};

const Button = ({ children, onBtnClick, href }: ButtonProps): JSX.Element => {
  const buttonChildren = children?.toString().toLowerCase();

  const showLink = buttonChildren?.includes('contact') || buttonChildren?.includes('fale');

  return (
    showLink
      ? <LinkBtn href={href}>{children}</LinkBtn>
      : <Btn onClick={onBtnClick}>{children}</Btn>
  );
};

export default Button;