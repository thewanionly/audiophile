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

export const mockedCategoryProducts: CategoryProduct[] = [
  {
    id: 5,
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    category: 'speakers',
    categoryImage: {
      src: {
        mobile: '/zx7-speaker-image.jpg',
        tablet: '/zx7-speaker-image.jpg',
        desktop: '/zx7-speaker-image.jpg',
      },
      alt: 'ZX7 Speaker alt',
    },
    new: false,
    description: 'ZX7 Speaker is so nice.',
  },
  {
    id: 6,
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker M',
    category: 'speakers',
    categoryImage: {
      src: {
        mobile: '/zx9-speaker-image.jpg',
        tablet: '/zx9-speaker-image.jpg',
        desktop: '/zx9-speaker-image.jpg',
      },
      alt: 'ZX9 Speaker alt',
    },
    new: true,
    description: 'ZX9 Speaker is amazing.',
  },
]
