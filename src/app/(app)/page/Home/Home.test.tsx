import { toPlainText } from '@portabletext/react'

import { render, screen } from '@/tests'
import { mockedBrandDetails } from '@/tests/__mocks__/data'
import { mockedCategories } from '@/tests/__mocks__/data/category'
import {
  mockedHeroSectionData,
  mockedPrimaryFPData,
  mockedSecondaryFPData,
  mockedTertiaryFPData,
} from '@/tests/__mocks__/data/home'

import { Home } from './Home'

const setup = () => {
  render(
    <Home
      aboutTheBrand={mockedBrandDetails}
      categories={mockedCategories}
      heroSection={mockedHeroSectionData}
      primaryFeaturedProduct={mockedPrimaryFPData}
      secondaryFeaturedProduct={mockedSecondaryFPData}
      tertiaryFeaturedProduct={mockedTertiaryFPData}
    />
  )
}

describe('Home', () => {
  it('displays hero section', () => {
    setup()

    const heroSection = screen.getByRole('heading', { name: mockedHeroSectionData.product.name })
    expect(heroSection).toBeInTheDocument()
  })

  it('displays category card list section', () => {
    setup()

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBeGreaterThan(0)
  })

  it('displays primary featured product section', () => {
    setup()

    const primaryFeaturedProductSection = screen.getByRole('heading', {
      name: mockedPrimaryFPData.product.name,
    })
    expect(primaryFeaturedProductSection).toBeInTheDocument()
  })

  it('displays secondary featured product section', () => {
    setup()

    const secondaryFeaturedProductSection = screen.getByRole('heading', {
      name: mockedSecondaryFPData.product.name,
    })
    expect(secondaryFeaturedProductSection).toBeInTheDocument()
  })

  it('displays tertiary featured product section', () => {
    setup()

    const tertiaryFeaturedProductSection = screen.getByRole('heading', {
      name: mockedTertiaryFPData.product.name,
    })
    expect(tertiaryFeaturedProductSection).toBeInTheDocument()
  })

  it('displays about the brand section', () => {
    setup()

    const brandSectionHeading = screen.getByRole('heading', {
      name: toPlainText(mockedBrandDetails.heading),
    })
    expect(brandSectionHeading).toBeInTheDocument()
  })
})
