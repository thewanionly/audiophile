import { render, screen } from '@/tests'

import { InputStepper, MINIMUM_VALUE } from './InputStepper'

const setup = () => {
  render(<InputStepper />)
}

describe('InputStepper', () => {
  describe('Layout', () => {
    it('displays increment button', () => {
      setup()

      const incrementButton = screen.getByRole('button', { name: 'increment' })
      expect(incrementButton).toBeInTheDocument()
    })

    it('displays decrement button', () => {
      setup()

      const decrementButton = screen.getByRole('button', { name: 'decrement' })
      expect(decrementButton).toBeInTheDocument()
    })

    it('displays input box', () => {
      setup()

      const inputBox = screen.getByRole('textbox', { name: 'input value' })
      expect(inputBox).toBeInTheDocument()
    })

    it(`displays ${MINIMUM_VALUE} as default value of the input box`, () => {
      setup()

      const inputBox = screen.getByRole('textbox', { name: 'input value' })
      expect(inputBox).toHaveValue(`${MINIMUM_VALUE}`)
    })
  })
})
