import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { links } from '@/data/links';
import { useState, useMemo, useEffect } from 'react';

const Nav = styled.nav<{ theme: string }>`
  ul {
    display: flex;
    list-style: none;
    font-family: 'Alef', sans-serif;
    letter-spacing: 0.23rem;
    margin-top: 2rem;
    position: relative;

    li {
      margin-right: 1.6rem;
    }

    section {
      display: flex;
      flex-direction: column;

      span {
        letter-spacing: 0;
        font-size: 1rem;
        text-transform: uppercase;
        background: ${({ theme }) => theme.tag};
        color: ${({ theme }) => theme.body};
        padding: 0.5rem 1rem;
        border-radius: 1.4rem;
        position: absolute;
        top: 3rem;
        margin-left: 0.5rem;
        width: max-content;
      }
    }
  }
`;

const Link = styled.a<{ theme: string, $isActive: boolean }>`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.6rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, $isActive }) => $isActive ? theme.text : 'transparent'};
    transition: background-color 0.3s ease;
  }

  &:hover:after {
    background-color: ${({ theme }) => theme.text};
  }
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
            <section>
              <li key={link.id}>
                <Link href={link.href} $isActive={activeLink === link.id}>
                  {t(link.name).toUpperCase()}
                </Link>
              </li>

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