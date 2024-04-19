import { Link } from '../customTypes/Link';

export const links: Link[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    isUnderConstruction: false,
    isScroll: false,
  },
  {
    id: 2,
    name: 'Experience',
    href: 'experience',
    isUnderConstruction: false,
    isScroll: true,
  },
  {
    id: 3,
    name: 'Projects',
    href: 'projects',
    isUnderConstruction: false,
    isScroll: true,
  },
  {
    id: 4,
    name: 'Blog',
    href: '/blog',
    isUnderConstruction: true,
    isScroll: false,
  },
]