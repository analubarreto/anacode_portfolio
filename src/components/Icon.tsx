import { Icon } from '@/components/styles/Icon.styles';

type IconProps = {
  name: string;
  onClick?: () => void;
  size: number;
  isSymbol: boolean;
};

/**
 * Renders an icon component.
 *
 * @param {string} name - The name of the icon.
 * @param {Function} onClick - The click event handler for the icon.
 * @param {number} size - The size of the icon (default is 24).
 * @param {boolean} isSymbol - Indicates whether the icon is a symbol or not.
 * @returns {JSX.Element} The rendered icon component.
 */
const IconComponent = ({ name, onClick, size=24, isSymbol }: IconProps) => {
  const iconClassName = isSymbol ? 'material-symbols-rounded' : 'material-icons-round'

  return (
    <Icon size={size} onClick={onClick} className={iconClassName}>
      { name }
    </Icon>
  )
};

export default IconComponent;