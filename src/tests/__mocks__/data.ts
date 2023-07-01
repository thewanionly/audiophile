import { IconName, NavItem } from '@/components'

// Mock data
export const logo = {
  src: '/icons/logo.svg',
  alt: 'logo of audiophile',
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: 'home',
    order: 1,
  },
  {
    label: 'Test',
    href: 'test',
    order: 2,
  },
]

export const mockedBrandDetails: AboutTheBrand = {
  heading: {
    children: [
      {
        marks: [],
        text: 'Sample header',
        _type: 'span',
      },
    ],
    style: 'normal',
    _type: 'block',
  },
  description: 'Lorem ipsum sit dolor etc etc',
  image: {
    src: {
      mobile: '/test-image.jpg',
      tablet: '/test-image.jpg',
      desktop: '/test-image.jpg',
    },
    alt: 'test alt',
  },
}

export const mockedFooterData: Footer = {
  website_desc: 'Audiophile is an amazing company',
  copyright: {
    line_1: 'Copyright',
    line_2: 'All rights reserved',
  },
  socials: [
    {
      name: 'facebook',
      icon: IconName.Facebook,
      link: 'https://www.facebook.com/',
    },
    {
      name: 'twitter',
      icon: IconName.Twitter,
      link: 'https://twitter.com/',
    },
  ],
}
