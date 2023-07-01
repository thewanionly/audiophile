import { render, screen } from '@/tests'

import { mockedSecondaryFPData } from '@/tests/__mocks__/data/home'
import { SEE_PRODUCT } from '@/utils/constants'
import { SecondaryFeaturedProduct } from './SecondaryFeaturedProduct'

const setup = () => {
  render(
    <SecondaryFeaturedProduct
      product={mockedSecondaryFPData.product}
      sectionImage={mockedSecondaryFPData.sectionImage}
    />
  )
}

describe('Home - Secondary Featured Product', () => {
  it('displays secondary featured product name', () => {
    setup()

    const secondaryFPName = screen.getByRole('heading', {
      name: mockedSecondaryFPData.product.name,
    })
    expect(secondaryFPName).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedSecondaryFPData.product.category}/${mockedSecondaryFPData.product.slug}`
    )
  })

  it('displays secondary featured product section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedSecondaryFPData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute('src', mockedSecondaryFPData.sectionImage.src.desktop)
  })
})
