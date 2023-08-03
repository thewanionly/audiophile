import { render, screen } from '@/tests'

import { InputStepper } from './InputStepper'

describe('InputStepper', () => {
  describe('Layout', () => {
    it('displays increment button', () => {
      render(<InputStepper />)

      const incrementButton = screen.getByRole('button', { name: 'increment' })
      expect(incrementButton).toBeInTheDocument()
    })

    it('displays decrement button', () => {
      render(<InputStepper />)

      const decrementButton = screen.getByRole('button', { name: 'decrement' })
      expect(decrementButton).toBeInTheDocument()
    })
  })
})
