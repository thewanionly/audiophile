import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { CartModal } from './CartModal'

const setup = () => {
  render(<CartModal open={true} />)
}

describe('CartModal', () => {
  describe('Layout', () => {
    xit('displays cart title', () => {
      setup()

      const cartTitle = screen.getByRole('heading', { name: 'Cart' })
      expect(cartTitle).toBeInTheDocument()
    })
  })
})
