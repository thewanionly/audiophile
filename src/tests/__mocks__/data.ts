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

export const mockedCategories: Category[] = [
  {
    image: {
      src: {
        mobile: '/headphones-image.jpg',
        tablet: '/headphones-image.jpg',
        desktop: '/headphones-image.jpg',
      },
      alt: 'headphones alt',
    },
    name: 'Headphones',
    slug: 'headphones',
    displayOrder: 1,
  },
  {
    image: {
      src: {
        mobile: '/speakers-image.jpg',
        tablet: '/speakers-image.jpg',
        desktop: '/speakers-image.jpg',
      },
      alt: 'speakers alt',
    },
    name: 'Speakers',
    slug: 'speakers',
    displayOrder: 2,
  },
  {
    image: {
      src: {
        mobile: '/earphones-image.jpg',
        tablet: '/earphones-image.jpg',
        desktop: '/earphones-image.jpg',
      },
      alt: 'earphones alt',
    },
    name: 'Earphones',
    slug: 'earphones',
    displayOrder: 3,
  },
]

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
