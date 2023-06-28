import { render, screen } from '@/tests'

import { mockedSecondaryFPSectionData } from '@/tests/__mocks__/data/home'
import { SEE_PRODUCT } from '@/utils/constants'
import { SecondaryFeaturedProductSection } from './SecondaryFeaturedProductSection'

const setup = () => {
  render(
    <SecondaryFeaturedProductSection
      product={mockedSecondaryFPSectionData.product}
      sectionImage={mockedSecondaryFPSectionData.sectionImage}
    />
  )
}

describe('Home - Secondary Featured Product Section', () => {
  it('displays secondary featured product name', () => {
    setup()

    const secondaryFPName = screen.getByRole('heading', {
      name: mockedSecondaryFPSectionData.product.name,
    })
    expect(secondaryFPName).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedSecondaryFPSectionData.product.category}/${mockedSecondaryFPSectionData.product.slug}`
    )
  })

  it('displays secondary featured product section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedSecondaryFPSectionData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute(
      'src',
      mockedSecondaryFPSectionData.sectionImage.src.desktop
    )
  })
})
