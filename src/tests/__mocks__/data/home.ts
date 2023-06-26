export const mockedHeroSectionData: ProductSectionData = {
  product: {
    id: 4,
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    category: 'headphones',
    new: true,
  },
  message:
    'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
  sectionImage: {
    src: {
      mobile: '/headphones-image.jpg',
      tablet: '/headphones-image.jpg',
      desktop: '/headphones-image.jpg',
    },
    alt: 'headphones alt',
  },
}

export const mockedPrimaryFPSectionData: ProductSectionData = {
  product: {
    id: 6,
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker M',
    category: 'speakers',
    new: true,
  },
  message:
    'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound mocked.',
  sectionImage: {
    src: {
      mobile: '/speakers-image.jpg',
      tablet: '/speakers-image.jpg',
      desktop: '/speakers-image.jpg',
    },
    alt: 'speakers alt',
  },
}

export const mockedSecondaryFPSectionData: Omit<ProductSectionData, 'message'> = {
  product: {
    id: 5,
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    category: 'speakers',
    new: false,
  },
  sectionImage: {
    src: {
      mobile: '/speakers-secondary-image.jpg',
      tablet: '/speakers-secondary-image.jpg',
      desktop: '/speakers-secondary-image.jpg',
    },
    alt: 'speakers secondary alt',
  },
}

export const mockedTertiaryFPSectionData: Omit<ProductSectionData, 'message'> = {
  product: {
    id: 1,
    slug: 'yx1-earphones',
    name: 'YX1 Wireless Earphones',
    category: 'earphones',
    new: true,
  },
  sectionImage: {
    src: {
      mobile: '/earphones-image.jpg',
      tablet: '/earphones-image.jpg',
      desktop: '/earphones-image.jpg',
    },
    alt: 'earphones alt',
  },
}
