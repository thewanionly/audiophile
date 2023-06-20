import { render, screen } from '@/tests'

import { HeroSection } from './HeroSection'
import { mockedHeroSectionData } from '@/tests/__mocks__/data/home'
import { NEW_PRODUCT } from '@/utils/constants'

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

  it(`displays ${NEW_PRODUCT} if hero product is new`, () => {
    setup()

    const newProductText = screen.getByText(NEW_PRODUCT)
    expect(newProductText).toBeInTheDocument()
  })

  it('displays hero message', () => {
    setup()

    const heroMessage = screen.getByText(mockedHeroSectionData.message)
    expect(heroMessage).toBeInTheDocument()
  })
})
