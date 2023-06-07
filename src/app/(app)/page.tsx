import { CategoryCardList } from '@/components/CategoryCardList'

const mockedCategories = [
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

export default function Home() {
  return (
    <>
      <section>Home</section>
      <CategoryCardList categories={mockedCategories} />
    </>
  )
}
