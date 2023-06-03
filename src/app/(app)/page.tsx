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
]

export default function Home() {
  return (
    <>
      <section>Home</section>
      <CategoryCardList categories={mockedCategories} />
    </>
  )
}
