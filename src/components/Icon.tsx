import { Icon } from '@/components/styles/Icon.styles';

type IconProps = {
  name: string;
  onClick?: () => void;
  size: number;
};

const IconComponent = ({ name, onClick, size=24 }: IconProps) => {
  return (
    <Icon size={size} onClick={onClick} className='material-icons-round'>
      { name }
    </Icon>
  )
};

export default IconComponent;