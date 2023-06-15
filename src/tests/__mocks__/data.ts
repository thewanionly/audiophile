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
  heading: 'About the brand',
  description: 'Lorem ipsum sit dolor etc etc',
}

export const mockedCategories = [
  {
    image: {
      desktop: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      tablet: '/images/tablet/xx99-mark-one-headphones-no-bg.png',
      mobile: '/images/mobile/xx99-mark-one-headphones-no-bg.png',
    },
    name: 'Headphones',
    href: '/headphones',
  },
  {
    image: {
      desktop: '/images/desktop/zx9-speaker-no-bg.png',
      tablet: '/images/tablet/zx9-speaker-no-bg.png',
      mobile: '/images/mobile/zx9-speaker-no-bg.png',
    },
    name: 'Speakers',
    href: '/speakers',
  },
  {
    image: {
      desktop: '/images/desktop/yx1-wireless-earphones-no-bg.png',
      tablet: '/images/tablet/yx1-wireless-earphones-no-bg.png',
      mobile: '/images/mobile/yx1-wireless-earphones-no-bg.png',
    },
    name: 'Earphones',
    href: '/earphones',
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
