import { render, screen } from '@/tests'

import { mockedPrimaryFPData } from '@/tests/__mocks__/data/home'
import { SEE_PRODUCT } from '@/utils/constants'
import { PrimaryFeaturedProduct } from './PrimaryFeaturedProduct'

const setup = () => {
  render(
    <PrimaryFeaturedProduct
      product={mockedPrimaryFPData.product}
      message={mockedPrimaryFPData.message}
      sectionImage={mockedPrimaryFPData.sectionImage}
    />
  )
}

describe('Home - Primary Featured Product Section', () => {
  it('displays primary featured product name', () => {
    setup()

    const primaryFPName = screen.getByRole('heading', {
      name: mockedPrimaryFPData.product.name,
    })
    expect(primaryFPName).toBeInTheDocument()
  })

  it('displays primary featured product message', () => {
    setup()

    const primaryFPSectionMessage = screen.getByText(mockedPrimaryFPData.message)
    expect(primaryFPSectionMessage).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedPrimaryFPData.product.category}/${mockedPrimaryFPData.product.slug}`
    )
  })

  it('displays primary featured product section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedPrimaryFPData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute('src', mockedPrimaryFPData.sectionImage.src.desktop)
  })
})
