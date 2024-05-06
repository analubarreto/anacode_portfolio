import { Btn, LinkBtn } from '@/components/styles/Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  onBtnClick?: () => void;
  href?: string;
  isLink?: boolean;
  ariaLabel: string;
};

const Button = ({ children, onBtnClick, href, isLink, ariaLabel }: ButtonProps): JSX.Element => {
  const buttonChildren = children?.toString().toLowerCase();

  const showLink = buttonChildren?.includes('contact') || buttonChildren?.includes('fale') || isLink;

  return (
    showLink
      ? <LinkBtn aria-label={ariaLabel} href={href}>{children}</LinkBtn>
      : <Btn aria-label={ariaLabel} onClick={onBtnClick}>{children}</Btn>
  );
};

export default Button;