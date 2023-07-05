import { toPlainText } from '@portabletext/react'
import { render, screen } from '@/tests'

import { mockedBrandDetails } from '@/tests/__mocks__/data'
import { mockedCategories } from '@/tests/__mocks__/data/category'
import { mockedProduct } from '@/tests/__mocks__/data/product'
import { GO_BACK } from '@/utils/constants'

import { ProductDetail } from './ProductDetail'

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      back: jest.fn(),
    })),
    useServerInsertedHTML: jest.fn(),
  }
})

const setup = () => {
  render(
    <ProductDetail
      product={mockedProduct}
      aboutTheBrand={mockedBrandDetails}
      categories={mockedCategories}
    />
  )
}

describe('Product Detail Page', () => {
  it('displays back button', () => {
    setup()

    const backButton = screen.getByRole('button', { name: GO_BACK })
    expect(backButton).toBeInTheDocument()
  })

  it('displays main detail section', () => {
    setup()

    const mainDetailSection = screen.getByTestId('main-detail-section')
    expect(mainDetailSection).toBeInTheDocument()
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
