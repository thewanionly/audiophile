import { CategoryCardList } from '@/components/CategoryCardList'

const mockedCategories = [
  {
    image: {
      desktop: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      tablet: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      mobile: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
    },
    name: 'Headphones',
    href: '/headphones',
  },
  {
    image: {
      desktop: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      tablet: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      mobile: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
    },
    name: 'Speakers',
    href: '/speakers',
  },
  {
    image: {
      desktop: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      tablet: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      mobile: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
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
