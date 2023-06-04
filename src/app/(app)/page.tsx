import { CategoryCardList } from '@/components/CategoryCardList'

const mockedCategories = [
  {
    image: {
      desktop: '/images/desktop/image-xx99-mark-one-headphones.jpg',
      tablet: '/images/desktop/image-xx99-mark-one-headphones.jpg',
      mobile: '/images/desktop/image-xx99-mark-one-headphones.jpg',
    },
    name: 'Headphones',
    href: '/headphones',
  },
  {
    image: {
      desktop: '/images/desktop/image-xx99-mark-one-headphones.jpg',
      tablet: '/images/desktop/image-xx99-mark-one-headphones.jpg',
      mobile: '/images/desktop/image-xx99-mark-one-headphones.jpg',
    },
    name: 'Speakers',
    href: '/speakers',
  },
  {
    image: {
      desktop: '/images/desktop/image-xx99-mark-one-headphones.jpg',
      tablet: '/images/desktop/image-xx99-mark-one-headphones.jpg',
      mobile: '/images/desktop/image-xx99-mark-one-headphones.jpg',
    },
    name: 'Earphones',
    href: '/earphones',
  },
]

export default function Home() {
  return (
    <>
      <section>Home</section>
      <CategoryCardList categories={mockedCategories} />
    </>
  )
}
