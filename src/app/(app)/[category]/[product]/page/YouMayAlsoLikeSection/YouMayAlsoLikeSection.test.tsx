import { render, screen } from '@/tests'
import { mockedYouMayAlsoLikeProducts } from '@/tests/__mocks__/data/product'

import { YOU_MAY_ALSO_LIKE } from '../../utils/constants'
import { YouMayAlsoLikeSection } from './YouMayAlsoLikeSection'

const setup = async () => {
  render(<YouMayAlsoLikeSection data={mockedYouMayAlsoLikeProducts} />)
}

describe('YouMayAlsoLikeSection', () => {
  it('displays section heading', () => {
    setup()

    const sectionHeading = screen.getByRole('heading', {
      name: YOU_MAY_ALSO_LIKE,
    })
    expect(sectionHeading).toBeInTheDocument()
  })

  it(`displays ${mockedYouMayAlsoLikeProducts.length} product cards`, async () => {
    await setup()

    const productCards = screen.getAllByTestId('suggsted-product-card')

    expect(productCards).toHaveLength(mockedYouMayAlsoLikeProducts.length)
  })
})
