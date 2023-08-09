import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { CartModal } from './CartModal'

const setup = () => {
  render(<CartModal open={true} />)
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
