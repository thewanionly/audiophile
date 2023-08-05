import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'
import { MIN_QUANTITY } from '@/utils/constants'

import { InputStepper } from './InputStepper'

const setup = () => {
  render(<InputStepper value={MIN_QUANTITY} onChange={() => undefined} />)
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

    it(`displays ${MIN_QUANTITY} as default value of the input box`, () => {
      setup()

      const inputBox = screen.getByRole('textbox', { name: 'input value' })
      expect(inputBox).toHaveValue(`${MIN_QUANTITY}`)
    })
  })

  describe('Interactions', () => {
    it(`can only input numeric values`, async () => {
      setup()

      const inputBox = screen.getByRole('textbox', { name: 'input value' })

      // Simulate user entering non-numeric values
      userEvent.clear(inputBox)
      await userEvent.type(inputBox, 'abc')

      // Assert that the input value should remain empty or unchanged
      expect(inputBox).toHaveValue('')

      // Simulate user entering a numeric value
      userEvent.clear(inputBox)
      await userEvent.type(inputBox, '123')

      // Assert that the input value should be the entered numeric value
      expect(inputBox).toHaveValue('123')
    })
  })
})
