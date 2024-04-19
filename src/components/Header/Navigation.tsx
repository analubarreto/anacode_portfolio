import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { links } from '@/data/links';
import { useState, useMemo, useEffect } from 'react';
//@ts-ignore
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

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

  &:hover:after {
    background-color: ${({ theme }) => theme.text};
  }

  @media (min-width: 1024px) {
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
  }
`;

const Link = styled(RouterLink)<{ theme: string, $isActive: boolean }>`
  ${linkStyles}
`;

const LinkScroll = styled(ScrollLink)<{ theme: string, $isActive: boolean }>`
  ${linkStyles}
`;

const Navigation = (): JSX.Element => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState(1);

  const linkList = useMemo(() => links, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = linkList.find(link => link.href === currentPath);
    if (currentLink) {
      setActiveLink(currentLink.id);
    }
  })

  return (
    <Nav>
      <ul>
        {
          links.map(link => (
            <section key={link.id}>
              {
                link.isScroll ? (
                  <LinkScroll
                    to={link.href}
                    smooth={true}
                    duration={500}
                    $isActive={activeLink === link.id}
                  >
                    {t(link.name)}
                  </LinkScroll>
                ) : (
                  <Link
                    to={link.href}
                    $isActive={activeLink === link.id}
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