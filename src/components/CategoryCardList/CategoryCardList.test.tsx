import { render, screen } from '@/tests'
import { Category, CategoryCardList } from './CategoryCardList'

const mockedCategories: Category[] = [
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

describe('CategoryCardList', () => {
  it(`displays ${mockedCategories.length} category cards`, () => {
    render(<CategoryCardList categories={mockedCategories} />)

    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCards).toHaveLength(mockedCategories.length)
  })
})
