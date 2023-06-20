import { render, screen } from '@/tests'

import { HeroSection } from './HeroSection'
import { mockedHeroSectionData } from '@/tests/__mocks__/data/home'

const setup = () => {
  render(
    <HeroSection product={mockedHeroSectionData.product} message={mockedHeroSectionData.message} />
  )
}

describe('Home - Hero Section', () => {
  it('displays hero product name', () => {
    setup()

    const heroProductName = screen.getByRole('heading', {
      name: mockedHeroSectionData.product.name,
    })
    expect(heroProductName).toBeInTheDocument()
  })
})
