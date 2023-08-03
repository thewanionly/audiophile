import { render, screen } from '@/tests'

import { InputStepper, MINIMUM_VALUE } from './InputStepper'

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

    it('displays input box', () => {
      render(<InputStepper />)

      const inputBox = screen.getByRole('spinbutton', { name: 'input value' })
      expect(inputBox).toBeInTheDocument()
    })

    it(`displays ${MINIMUM_VALUE} as default value of the input box`, () => {
      render(<InputStepper />)

      const inputBox = screen.getByRole('spinbutton', { name: 'input value' })
      expect(inputBox).toHaveValue(MINIMUM_VALUE)
    })
  })
})
