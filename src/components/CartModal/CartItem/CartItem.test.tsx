import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'
import { formatPrice } from '@/utils/helpers'

import { CartItem } from './CartItem'

const mockedCartItem = mockedCartItems[0]

const setup = () => {
  render(
    <CartItem
      image={mockedCartItem.image}
      name={mockedCartItem.name}
      slug={mockedCartItem.slug}
      category={mockedCartItem.category}
      price={mockedCartItem.price}
      quantity={1}
    />
  )
}

describe('CartItem', () => {
  describe('Layout', () => {
    it('displays product image', () => {
      setup()

      const productImg = screen.getByAltText(mockedCartItem.image.alt)

      expect(productImg).toBeInTheDocument()
      expect(productImg).toHaveAttribute('src', mockedCartItem.image.src.desktop)
    })

    it('displays product short name', () => {
      setup()

      const productShortName = screen.getByText(mockedCartItem.name)

      expect(productShortName).toBeInTheDocument()
    })

    it('displays product price', () => {
      setup()

      const productPrice = screen.getByText(formatPrice(mockedCartItem.price))

      expect(productPrice).toBeInTheDocument()
    })
  })
})
