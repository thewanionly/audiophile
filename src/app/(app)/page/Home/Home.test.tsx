import { toPlainText } from '@portabletext/react'

import { render, screen } from '@/tests'
import { mockedBrandDetails, mockedCategories } from '@/tests/__mocks__/data'

import { Home } from './Home'
import {
  mockedHeroSectionData,
  mockedPrimaryFPSectionData,
  mockedSecondaryFPSectionData,
} from '@/tests/__mocks__/data/home'

const setup = () => {
  render(
    <Home
      aboutTheBrand={mockedBrandDetails}
      categories={mockedCategories}
      heroSection={mockedHeroSectionData}
      primaryFPSection={mockedPrimaryFPSectionData}
      secondaryFPSection={mockedSecondaryFPSectionData}
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
      name: mockedPrimaryFPSectionData.product.name,
    })
    expect(primaryFeaturedProductSection).toBeInTheDocument()
  })

  it('displays about the brand section', () => {
    setup()

    const brandSectionHeading = screen.getByRole('heading', {
      name: toPlainText(mockedBrandDetails.heading),
    })
    expect(brandSectionHeading).toBeInTheDocument()
  })
})
