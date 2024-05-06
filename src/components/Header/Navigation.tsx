import { useTranslation } from 'react-i18next';
import { links } from '@/data/links';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as LinkType } from '@/customTypes/Link';
import { Nav, Link, LinkScroll } from '@/components/Header/styles/Navigation.styles';
import { useActiveLink } from '@/contexts/ActiveLinkContext';

type NavigationProps = {
  closeMenu: () => void;
}

const Navigation = ({ closeMenu }: NavigationProps): JSX.Element => {
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
    <Nav>
      <ul>
        {
          links.map(link => (
            <section key={link.id}>
              {
                useLinkScroll(link) ? (
                  <LinkScroll
                    aria-label={`${t('Navigation Aria Label')} ${t(link.name)}`}
                    href={linkScrollHref(link)}
                    onClick={handleLinkClick(link.id)}
                    $isActive={activeLink === link.id}
                  >
                    {t(link.name)}
                  </LinkScroll>
                ) : (
                  <Link
                    aria-label={`${t('Navigation Aria Label')} ${t(link.name)}`}
                    to={link.href}
                    $isActive={activeLink === link.id}
                    onClick={handleLinkClick(link.id)}
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