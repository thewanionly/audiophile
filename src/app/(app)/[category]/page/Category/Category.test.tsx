import { toPlainText } from '@portabletext/react'
import { render, screen } from '@/tests'
import { Category } from './Category'
import { mockedBrandDetails } from '@/tests/__mocks__/data'
import { mockedCategories, mockedCategoryProducts } from '@/tests/__mocks__/data/category'

const mockedCategory = mockedCategories[0]

const setup = () => {
  render(
    <Category
      name={mockedCategory.name}
      aboutTheBrand={mockedBrandDetails}
      categories={mockedCategories}
      products={mockedCategoryProducts}
    />
  )
}

describe('Category', () => {
  it('displays category name as heading', () => {
    setup()

    const categoryHeading = screen.getByRole('heading', { name: mockedCategory.name })
    expect(categoryHeading).toBeInTheDocument()
  })

  it('displays category products section', () => {
    setup()

    const categoryProducts = screen.getAllByTestId('category-product-card')

    expect(categoryProducts.length).toBe(mockedCategoryProducts.length)
  })

  it('displays category card list section', () => {
    setup()

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBe(mockedCategories.length)
  })

  it('displays about the brand section', () => {
    setup()

    const brandSectionHeading = screen.getByRole('heading', {
      name: toPlainText(mockedBrandDetails.heading),
    })
    expect(brandSectionHeading).toBeInTheDocument()
  })
})
