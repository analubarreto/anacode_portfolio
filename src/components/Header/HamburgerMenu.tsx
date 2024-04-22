import { MenuIcon } from '@/components/Header/styles/HamburguerMenu.styles';

type HamburguerMenuType = {
  isOpen: boolean;
  onClickMenu: () => void;
};

/**
 * Renders a hamburger menu icon.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Indicates whether the menu is open or closed.
 * @param {Function} props.onClickMenu - The function to be called when the menu is clicked.
 * @returns {JSX.Element} The rendered hamburger menu icon.
 */
const HamburguerMenu = ({ isOpen, onClickMenu }: HamburguerMenuType) => {
  return (
    <MenuIcon $open={isOpen} onClick={onClickMenu} data-testid='menu-icon'>
      <div className="menu-lines" />
      <div className="menu-lines" />
      <div className="menu-lines" />
    </MenuIcon>
  );
};

export default HamburguerMenu;