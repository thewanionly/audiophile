import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'
import { mockedCartItems } from '@/tests/__mocks__/data/cart'

import { CartModal } from './CartModal'

// Mock "useCartState"
const mockedTotalItems = mockedCartItems.reduce((total, { quantity }) => total + quantity, 0)

jest.mock('@/store/cart', () => ({
  __esModule: true,
  useCartState: jest.fn(() => ({
    items: mockedCartItems,
    totalItems: mockedTotalItems,
    totalPrice: mockedCartItems.reduce(
      (total, { quantity, product }) => total + quantity * product.price,
      0
    ),
    isEmpty: mockedTotalItems <= 0,
  })),
  useCartActions: jest.fn(() => ({
    removeAllItems: jest.fn(),
  })),
}))

const setup = () => {
  render(<CartModal open={true} closeModal={() => jest.fn()} />)
}

describe('CartModal', () => {
  describe('Layout', () => {
    it('displays cart title', () => {
      setup()

      const cartTitle = screen.getByRole('heading', { name: /cart/i })
      expect(cartTitle).toBeInTheDocument()
    })

    it('displays number of items in the cart', () => {
      setup()

      const cartItemsCount = screen.getByTestId('cart-items-count')
      expect(cartItemsCount).toBeInTheDocument()
    })

    it('displays remove all button', () => {
      setup()

      const removeAllBtn = screen.getByRole('button', { name: /remove all/i })
      expect(removeAllBtn).toBeInTheDocument()
    })

    it('displays total amount of all items in the cart', () => {
      setup()

      const cartItemsTotalAmount = screen.getByTestId('cart-items-total-amount')
      expect(cartItemsTotalAmount).toBeInTheDocument()
    })
  })
})
