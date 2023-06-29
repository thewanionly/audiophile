import { render, screen } from '@/tests'
import { mockedCategoryProducts } from '@/tests/__mocks__/data/category'

import { CategoryProductCard } from './CategoryProductCard'
import { NEW_PRODUCT } from '@/utils/constants'

const { name, description, new: isNew } = mockedCategoryProducts[0]

const setup = () => {
  render(<CategoryProductCard name={name} description={description} isNew={isNew} />)
}

describe('CategoryProductCard', () => {
  it(`displays ${NEW_PRODUCT} if category product is new`, () => {
    setup()

    if (isNew) {
      expect(screen.getByText(NEW_PRODUCT)).toBeInTheDocument()
    } else {
      expect(screen.queryByText(NEW_PRODUCT)).not.toBeInTheDocument()
    }
  })

  it('displays category product name', () => {
    setup()

    const productName = screen.getByText(name)
    expect(productName).toBeInTheDocument()
  })

  it('displays category product description', () => {
    setup()

    const productDescription = screen.getByText(description)
    expect(productDescription).toBeInTheDocument()
  })
})
