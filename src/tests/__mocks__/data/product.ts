export const mockedProduct: ProductDetail = {
  id: 4,
  slug: 'xx99-mark-two-headphones',
  name: 'XX99 Mark II Headphones',
  image: {
    src: {
      mobile: '/headphones-image.jpg',
      tablet: '/headphones-image.jpg',
      desktop: '/headphones-image.jpg',
    },
    alt: 'headphones alt',
  },
  category: 'headphones',
  new: true,
  price: 2999,
  description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio.',
  features: 'Featuring a genuine leather head strap and premium earcups, these headphones...',
  includes: [
    {
      quantity: 1,
      item: 'Headphone unit',
    },
    {
      quantity: 2,
      item: 'Replacement earcups',
    },
    {
      quantity: 1,
      item: 'User manual',
    },
    {
      quantity: 1,
      item: '3.5mm 5m audio cable',
    },
    {
      quantity: 1,
      item: 'Travel bag',
    },
  ],
  gallery: {
    first: {
      src: {
        mobile: '/headphones-image.jpg',
        tablet: '/headphones-image.jpg',
        desktop: '/headphones-image.jpg',
      },
      alt: 'headphones alt',
    },
    second: {
      src: {
        mobile: '/headphones-image.jpg',
        tablet: '/headphones-image.jpg',
        desktop: '/headphones-image.jpg',
      },
      alt: 'headphones alt',
    },
    third: {
      src: {
        mobile: '/headphones-image.jpg',
        tablet: '/headphones-image.jpg',
        desktop: '/headphones-image.jpg',
      },
      alt: 'headphones alt',
    },
  },
  others: ['one-headphones', 'two-headphones', 'three-headphones'],
}
