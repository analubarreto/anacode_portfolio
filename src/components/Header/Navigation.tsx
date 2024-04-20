import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { links } from '@/data/links';
import { useState, useMemo, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as LinkType } from '@/customTypes/Link';

const Nav = styled.nav<{ theme: string }>`
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    margin-top: 6rem;

    @media (min-width: 1024px) {
      gap: 0;
      flex-direction: row;
      margin-top: 2rem;
    }

    li {
      margin-right: 1rem;
      width: max-content;

      @media (min-width: 1024px) {
        margin-right: 1.6rem;
      }
    }

    section {
      display: flex;
      flex-direction: row;
      margin-right: 3rem;

      @media (min-width: 1024px) {
        flex-direction: column;
      }

      span {
        font-size: 1rem;
        text-transform: uppercase;
        background: ${({ theme }) => theme.tag};
        color: ${({ theme }) => theme.tagText};
        padding: 0.5rem 1rem;
        border-radius: 1.4rem;
        width: max-content;
        height: max-content;

        @media (min-width: 1024px) {
          margin-left: 0.5rem;
          bottom: 0;
        }
      }
    }
  }
`;

const linkStyles = css<{ theme: string, $isActive: boolean }>`
  color: ${({ theme }) => theme.menuText};
  text-decoration: none;
  font-size: 1.4rem;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, $isActive }) => $isActive ? theme.menuText : 'transparent'};
    transition: background-color 0.3s ease;

    @media (min-width: 1024px) {
      background-color: ${({ theme, $isActive }) => $isActive ? theme.text : 'transparent'};
    }
  }

  @media (min-width: 1024px) {
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
  }
`;

const Link = styled(RouterLink)<{ theme: string, $isActive: boolean }>`
  ${linkStyles}
`;

const LinkScroll = styled.a<{ theme: string, $isActive: boolean }>`
  ${linkStyles}
`;

const Navigation = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState(1);

  const currentLocation = useLocation().pathname;
  const useLinkScroll = (link: LinkType) => link.elementId && currentLocation === '/';

  const linkScrollHref = useMemo(() => {
    return (link: LinkType) => useLinkScroll(link) ? `#${link.elementId}` : link.href;
  }, [currentLocation]);

  const handleLinkClick = (id: number) => () => {
    setActiveLink(id);
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
                    href={linkScrollHref(link)}
                    onClick={handleLinkClick(link.id)}
                    $isActive={activeLink === link.id}
                  >
                    {t(link.name)}
                  </LinkScroll>
                ) : (
                  <Link
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