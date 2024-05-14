import { useTranslation } from 'react-i18next';
import { links } from '@/data/links';
import { useLocation } from 'react-router-dom';
import { Link as LinkType } from '@/customTypes/Link';
import { Nav, Link, LinkScroll } from '@/components/Header/styles/Navigation.styles';

type NavigationProps = {
  closeMenu: () => void;
}

const Navigation = ({ closeMenu }: NavigationProps): JSX.Element => {
  const { t } = useTranslation();

  const currentLocation = useLocation().pathname;
  const useLinkScroll = (link: LinkType) => link.elementId && currentLocation === '/';

  const linkScrollHref = (link: LinkType) => useLinkScroll(link) ? `#${link.elementId}` : link.href;

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
                    onClick={closeMenu}
                  >
                    {t(link.name)}
                  </LinkScroll>
                ) : (
                  <Link
                    aria-label={`${t('Navigation Aria Label')} ${t(link.name)}`}
                    to={link.href}
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