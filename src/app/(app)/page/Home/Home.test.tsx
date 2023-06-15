import { render, screen } from '@/tests'

import { mockedBrandDetails } from '@/tests/__mocks__/data'

import { Home } from './Home'

const setup = () => {
  render(<Home aboutTheBrand={mockedBrandDetails} />)
}

describe('Home', () => {
  it('displays category card list section', () => {
    setup()

    const categoryCardList = screen.getByTestId('category-card-list')
    const categoryCards = screen.getAllByTestId('category-card')

    expect(categoryCardList).toBeInTheDocument()
    expect(categoryCards.length).toBeGreaterThan(0)
  })

  it('displays about the brand section', () => {
    setup()

    const brandSectionHeading = screen.getByRole('heading', { name: mockedBrandDetails.heading })
    expect(brandSectionHeading).toBeInTheDocument()
  })
})
