import { render, screen } from '@/tests'

import { mockedCategories } from '@/tests/__mocks__/data/category'

import { ProductDetail } from './ProductDetail'

const setup = () => {
  render(<ProductDetail categories={mockedCategories} />)
}

describe('Product Detail Page', () => {
  it('displays category card list section', () => {
    setup()

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBe(mockedCategories.length)
  })
})
