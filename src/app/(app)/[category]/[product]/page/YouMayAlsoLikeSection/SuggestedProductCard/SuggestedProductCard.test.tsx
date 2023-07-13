import { render, screen } from '@/tests'
import { mockedSuggestedProducts } from '@/tests/__mocks__/data/product'
import { SEE_PRODUCT } from '@/utils/constants'

import { SuggestedProductCard } from './SuggestedProductCard'

const { name, category, slug, thumbnailImage } = mockedSuggestedProducts[0]

const setup = () => {
  render(
    <SuggestedProductCard name={name} category={category} slug={slug} image={thumbnailImage} />
  )
}

describe('SuggestedProductCard', () => {
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

  xit(`displays ${SEE_PRODUCT} button with link to the product detail page`, () => {
    setup()

    const seeProductButton = screen.getByRole('link', { name: SEE_PRODUCT })
    expect(seeProductButton).toHaveAttribute('href', `${category}/${slug}`)
  })
})
