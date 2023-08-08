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
  })
})
