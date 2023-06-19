import { toPlainText } from '@portabletext/react'
import { render, screen } from '@/tests'
import { Category } from './Category'
import { mockedBrandDetails, mockedCategories } from '@/tests/__mocks__/data'

const mockedCategory = mockedCategories[0]

const setup = () => {
  render(
    <Category
      name={mockedCategory.name}
      aboutTheBrand={mockedBrandDetails}
      categories={mockedCategories}
    />
  )
}

describe('Category', () => {
  it('displays category name as heading', () => {
    setup()

    const categoryHeading = screen.getByRole('heading', { name: mockedCategory.name })
    expect(categoryHeading).toBeInTheDocument()
  })

  it('displays category card list section', () => {
    setup()

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBeGreaterThan(0)
  })

  it('displays about the brand section', () => {
    setup()

    const brandSectionHeading = screen.getByRole('heading', {
      name: toPlainText(mockedBrandDetails.heading),
    })
    expect(brandSectionHeading).toBeInTheDocument()
  })
})
