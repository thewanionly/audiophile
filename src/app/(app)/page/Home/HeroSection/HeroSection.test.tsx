import { render, screen } from '@/tests'

import { HeroSection } from './HeroSection'
import { mockedHeroSectionData } from '@/tests/__mocks__/data/home'
import { NEW_PRODUCT, SEE_PRODUCT } from '@/utils/constants'

const setup = () => {
  render(
    <HeroSection
      product={mockedHeroSectionData.product}
      message={mockedHeroSectionData.message}
      sectionImage={mockedHeroSectionData.sectionImage}
    />
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

    if (mockedHeroSectionData.product.new) {
      expect(screen.getByText(NEW_PRODUCT)).toBeInTheDocument()
    } else {
      expect(screen.queryByText(NEW_PRODUCT)).not.toBeInTheDocument()
    }
  })

  it('displays hero message', () => {
    setup()

    const heroMessage = screen.getByText(mockedHeroSectionData.message)
    expect(heroMessage).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedHeroSectionData.product.category}/${mockedHeroSectionData.product.slug}`
    )
  })

  it('displays hero section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedHeroSectionData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute('src', mockedHeroSectionData.sectionImage.src.desktop)
  })
})
