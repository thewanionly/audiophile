import { render, screen } from '@/tests'
import { mockedCategoryProducts } from '@/tests/__mocks__/data/category'

import { CategoryProductsSection } from './CategoryProductsSection'

describe('CategoryProductsSection', () => {
  it(`displays ${mockedCategoryProducts.length} category products`, () => {
    render(<CategoryProductsSection products={mockedCategoryProducts} />)

    const categoryProducts = screen.getAllByTestId('category-product-card')

    expect(categoryProducts).toHaveLength(mockedCategoryProducts.length)
  })
})
