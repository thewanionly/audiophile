import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'
import { MIN_QUANTITY } from '@/utils/constants'

import { InputStepper, InputStepperProps } from './InputStepper'

const setup = (params?: Partial<InputStepperProps>) => {
  const { value = MIN_QUANTITY, min, onChange = () => undefined } = params || {}

  render(<InputStepper value={value} min={min} onChange={onChange} />)
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

    it(`disables the decrement button if input box's value is less than or equal to ${MIN_QUANTITY}`, () => {
      setup({ min: MIN_QUANTITY })

      const inputBox = screen.getByRole('textbox', { name: 'input value' })
      expect(inputBox).toHaveValue(`${MIN_QUANTITY}`)

      const decrementButton = screen.getByRole('button', { name: 'decrement' })
      expect(decrementButton).toBeDisabled()
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

    it(`saves the inputted value only when input loses focus`, async () => {
      const inputtedValue = '12'
      const onChangeHandler = jest.fn()
      setup({ onChange: onChangeHandler })

      const inputBox = screen.getByRole('textbox', { name: 'input value' })

      userEvent.clear(inputBox)
      await userEvent.type(inputBox, inputtedValue)
      expect(onChangeHandler).not.toHaveBeenCalled()

      await userEvent.click(document.body)
      expect(onChangeHandler).toHaveBeenCalledWith(Number(inputtedValue))
    })

    it(`user inputs an empty value, when the input loses focus, its value will update back to the previous saved value`, async () => {
      const savedValue = 4
      setup({ value: savedValue })

      const inputBox = screen.getByRole('textbox', { name: 'input value' })

      userEvent.clear(inputBox)
      await userEvent.click(document.body)

      expect(inputBox).toHaveValue(savedValue.toString())
    })

    it(`user inputs less than the minimum value, when the input loses focus, its value will update to the minimum value`, async () => {
      setup({ min: MIN_QUANTITY })

      const inputBox = screen.getByRole('textbox', { name: 'input value' })

      userEvent.clear(inputBox)
      await userEvent.type(inputBox, '0')
      await userEvent.click(document.body)

      expect(inputBox).toHaveValue(MIN_QUANTITY.toString())
    })
  })
})
