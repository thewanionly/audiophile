import { render, screen } from '@/tests'

import { mockedTertiaryFPSectionData } from '@/tests/__mocks__/data/home'
import { SEE_PRODUCT } from '@/utils/constants'
import { TertiaryFeaturedProductSection } from './TertiaryFeaturedProductSection'

const setup = () => {
  render(
    <TertiaryFeaturedProductSection
      product={mockedTertiaryFPSectionData.product}
      sectionImage={mockedTertiaryFPSectionData.sectionImage}
    />
  )
}

describe('Home - Tertiary Featured Product Section', () => {
  it('displays tertiary featured product name', () => {
    setup()

    const tertiaryFPName = screen.getByRole('heading', {
      name: mockedTertiaryFPSectionData.product.name,
    })
    expect(tertiaryFPName).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedTertiaryFPSectionData.product.category}/${mockedTertiaryFPSectionData.product.slug}`
    )
  })

  it('displays tertiary featured product section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedTertiaryFPSectionData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute(
      'src',
      mockedTertiaryFPSectionData.sectionImage.src.desktop
    )
  })
})
