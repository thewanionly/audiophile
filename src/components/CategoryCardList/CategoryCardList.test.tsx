import { render, screen } from '@/tests'
import { mockedCategories } from '@/tests/__mocks__/data/category'

import { CategoryCardList } from './CategoryCardList'

describe('CategoryCardList', () => {
  it(`displays ${mockedCategories.length} category cards`, () => {
    render(<CategoryCardList categories={mockedCategories} />)

    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCards).toHaveLength(mockedCategories.length)
  })
})
