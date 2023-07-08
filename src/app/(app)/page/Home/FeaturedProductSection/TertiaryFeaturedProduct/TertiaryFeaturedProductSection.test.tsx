import { render, screen } from '@/tests'
import { mockedTertiaryFPData } from '@/tests/__mocks__/data/home'
import { SEE_PRODUCT } from '@/utils/constants'

import { TertiaryFeaturedProduct } from './TertiaryFeaturedProduct'

const setup = () => {
  render(
    <TertiaryFeaturedProduct
      product={mockedTertiaryFPData.product}
      sectionImage={mockedTertiaryFPData.sectionImage}
    />
  )
}

describe('Home - Tertiary Featured Product', () => {
  it('displays tertiary featured product name', () => {
    setup()

    const tertiaryFPName = screen.getByRole('heading', {
      name: mockedTertiaryFPData.product.name,
    })
    expect(tertiaryFPName).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute(
      'href',
      `${mockedTertiaryFPData.product.category}/${mockedTertiaryFPData.product.slug}`
    )
  })

  it('displays tertiary featured product section image', () => {
    setup()

    const sectionImage = screen.getByAltText(mockedTertiaryFPData.sectionImage.alt)

    expect(sectionImage).toBeInTheDocument()
    expect(sectionImage).toHaveAttribute('src', mockedTertiaryFPData.sectionImage.src.desktop)
  })
})
