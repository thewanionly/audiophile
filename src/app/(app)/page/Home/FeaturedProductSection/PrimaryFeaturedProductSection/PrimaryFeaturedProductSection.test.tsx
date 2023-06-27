import { render, screen } from '@/tests'

import { mockedPrimaryFPSectionData } from '@/tests/__mocks__/data/home'
import { NEW_PRODUCT, SEE_PRODUCT } from '@/utils/constants'
import { PrimaryFeaturedProductSection } from './PrimaryFeaturedProductSection'

const setup = () => {
  render(
    <PrimaryFeaturedProductSection
      product={mockedPrimaryFPSectionData.product}
      message={mockedPrimaryFPSectionData.message}
      sectionImage={mockedPrimaryFPSectionData.sectionImage}
    />
  )
}

describe('Home - Primary Featured Product Section', () => {
  it('displays primary featured product name', () => {
    setup()

    const primaryFPName = screen.getByRole('heading', {
      name: mockedPrimaryFPSectionData.product.name,
    })
    expect(primaryFPName).toBeInTheDocument()
  })

  it('displays primary featured product message', () => {
    setup()

    const primaryFPSectionMessage = screen.getByText(mockedPrimaryFPSectionData.message)
    expect(primaryFPSectionMessage).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedPrimaryFPSectionData.product.category}/${mockedPrimaryFPSectionData.product.slug}`
    )
  })

  xit('displays primary featured product section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedPrimaryFPSectionData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute('src', mockedPrimaryFPSectionData.sectionImage.src.desktop)
  })
})
