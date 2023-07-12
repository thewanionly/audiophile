import { render, screen } from '@/tests'
import { mockedSuggestedProducts } from '@/tests/__mocks__/data/product'

import { YouMayAlsoLikeSection } from './YouMayAlsoLikeSection'

const setup = async () => {
  render(<YouMayAlsoLikeSection data={mockedSuggestedProducts} />)
}

describe('YouMayAlsoLikeSection', () => {
  it(`displays ${mockedSuggestedProducts.length} suggested product cards`, async () => {
    await setup()

    const productCards = screen.getAllByTestId('suggsted-product-card')

    expect(productCards).toHaveLength(mockedSuggestedProducts.length)
  })
})
