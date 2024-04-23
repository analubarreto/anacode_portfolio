import { useTranslation } from 'react-i18next';
import { links } from '@/data/links';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as LinkType } from '@/customTypes/Link';
import { Nav, Link, LinkScroll } from '@/components/Header/styles/Navigation.styles';
import { useActiveLink } from '@/contexts/ActiveLinkContext';

type NavigationProps = {
  closeMenu: () => void;
  isOnTop: boolean;
}

const Navigation = ({ closeMenu, isOnTop }: NavigationProps): JSX.Element => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useActiveLink();

  const currentLocation = useLocation().pathname;
  const useLinkScroll = (link: LinkType) => link.elementId && currentLocation === '/';

  const linkScrollHref = useMemo(() => {
    return (link: LinkType) => useLinkScroll(link) ? `#${link.elementId}` : link.href;
  }, [currentLocation]);

  const handleLinkClick = (id: number) => () => {
    setActiveLink(id);
    closeMenu();
  };

  return (
    <Nav $isOnTop={isOnTop}>
      <ul>
        {
          links.map(link => (
            <section key={link.id}>
              {
                useLinkScroll(link) ? (
                  <LinkScroll
                    href={linkScrollHref(link)}
                    onClick={handleLinkClick(link.id)}
                    $isActive={activeLink === link.id}
                    $isOnTop={isOnTop}
                  >
                    {t(link.name)}
                  </LinkScroll>
                ) : (
                  <Link
                    to={link.href}
                    $isActive={activeLink === link.id}
                    onClick={handleLinkClick(link.id)}
                    $isOnTop={isOnTop}
                  >
                    {t(link.name)}
                  </Link>
                )
              }

              {
                link.isUnderConstruction && <span>{t('Under construction')}</span>
              }
            </section>
          )
        )}
      </ul>
    </Nav>
  );
};

export default Navigation;