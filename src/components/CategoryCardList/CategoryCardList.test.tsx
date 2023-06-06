import { render, screen } from '@/tests'
import { Category, CategoryCardList } from './CategoryCardList'

const mockedCategories: Category[] = [
  {
    image: {
      desktop: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      tablet: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
      mobile: '/images/desktop/xx99-mark-one-headphones-no-bg.png',
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
