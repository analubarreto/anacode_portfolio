import { Link } from '../customTypes/Link';

export const links: Link[] = [
  {
    id: 1,
    name: 'Home',
    elementId: 'welcome',
    href: '/',
    isUnderConstruction: false,
  },
  {
    id: 2,
    name: 'Experience',
    elementId: 'experience',
    href: '#experience',
    isUnderConstruction: false,
  },
  {
    id: 3,
    name: 'Projects',
    elementId: 'projects',
    href: '#projects',
    isUnderConstruction: false,
  },
  {
    id: 4,
    name: 'Blog',
    elementId: null,
    href: '/blog',
    isUnderConstruction: true,
  },
]