import { Service } from '@/types/Service';

export const services: Service[] = [
  {
    id: 1,
    title: 'Landing Pages',
    icon: 'contact_page',
    isIconSymbol: true,
    description: 'Landing Pages Text'
  },
  {
    id: 2,
    title: 'Web Design',
    icon: 'design_services',
    isIconSymbol: true,
    description: 'Web Design Text'
  },
  {
    id: 3,
    title: 'Corporate Web Sites',
    icon: 'language',
    isIconSymbol: false,
    description: 'Corporate Web Sites Text'
  },
  {
    id: 4,
    title: 'Blogs',
    icon: 'rss_feed',
    isIconSymbol: false,
    description: 'Blogs Text'
  },
  {
    id: 5,
    title: 'Maintenance',
    icon: 'engineering',
    isIconSymbol: true,
    description: 'Maintenance Text'
  },
];

export const servicesAddons: string[] = [
  'Design',
  'One Year Domain',
  'One Year Hosting',
  'Github Account',
  'SEO',
  'Responsive',
  'Pamphlet',
  'Seven Days',
  'Thirty Percent',
];