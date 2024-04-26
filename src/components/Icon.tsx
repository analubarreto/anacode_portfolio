import { Icon } from '@/components/styles/Icon.styles';

type IconProps = {
  name: string;
  onClick?: () => void;
  size: number;
  isSymbol: boolean;
};

const IconComponent = ({ name, onClick, size=24, isSymbol }: IconProps) => {
  const iconClassName = isSymbol ? 'material-symbols-rounded' : 'material-icons-round'

  return (
    <Icon size={size} onClick={onClick} className={iconClassName}>
      { name }
    </Icon>
  )
};

export default IconComponent;