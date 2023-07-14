import { render, screen } from '@/tests'
import { mockedYouMayAlsoLikeProducts } from '@/tests/__mocks__/data/product'
import { SEE_PRODUCT } from '@/utils/constants'

import { YouMayAlsoLikeProductCard } from './YouMayAlsoLikeProductCard'

const { name, category, slug, thumbnailImage } = mockedYouMayAlsoLikeProducts[0]

const setup = () => {
  render(
    <YouMayAlsoLikeProductCard name={name} category={category} slug={slug} image={thumbnailImage} />
  )
}

describe('YouMayAlsoLikeProductCard', () => {
  it('displays product image', () => {
    setup()

    const productImage = screen.getByAltText(thumbnailImage.alt)

    expect(productImage).toBeInTheDocument()
    expect(productImage).toHaveAttribute('src', thumbnailImage.src.desktop)
  })

  it('displays category product name', () => {
    setup()

    const productName = screen.getByText(name)
    expect(productName).toBeInTheDocument()
  })

  it(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute('href', `${category}/${slug}`)
  })
})
