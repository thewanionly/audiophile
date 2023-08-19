import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { RadioGroup, RadioGroupProps, RadioInput } from './RadioGroup'

const radioGroupLabel = 'Test'
const radioGroupOptions = [
  {
    label: 'Option 1',
    value: 'option_1',
  },
  {
    label: 'Option 2',
    value: 'option_2',
  },
]

const setup = (params?: Partial<RadioGroupProps>) => {
  const { label = radioGroupLabel, error = false, errorMessage = '' } = params || {}

  render(
    <RadioGroup label={label} error={error} errorMessage={errorMessage}>
      {radioGroupOptions.map(({ label, value }) => (
        <RadioInput key={value} label={label} value={value} name={value} onChange={jest.fn()} />
      ))}
    </RadioGroup>
  )
}

describe('RadioGroup', () => {
  it('displays label', () => {
    setup()

    const labelText = screen.getByTestId('radio-group-label')
    expect(labelText).toBeInTheDocument()
    expect(labelText).toHaveTextContent(radioGroupLabel)
  })

  it('displays no error message when error is false and errorMessage prop is not defined', () => {
    setup()

    const errorMessage = screen.queryByTestId('radio-group-error')
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('displays no error message when error is false and errorMessage prop is defined', () => {
    setup({ errorMessage: 'test error' })

    const errorMessage = screen.queryByTestId('radio-group-error')
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('displays no error message when error is true and errorMessage prop is not defined', () => {
    setup({ error: true })

    const errorMessage = screen.queryByTestId('radio-group-error')
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('displays error message when error is true and errorMessage prop is defined', () => {
    const errorMessageValue = 'test error'
    setup({ error: true, errorMessage: errorMessageValue })

    const errorMessageEl = screen.getByTestId('radio-group-error')
    expect(errorMessageEl).toBeInTheDocument()
    expect(errorMessageEl).toHaveTextContent(errorMessageValue)
  })

  it('displays radio inputs', () => {
    setup()

    const radioInputs = screen.getAllByRole('radio')
    expect(radioInputs).toHaveLength(radioGroupOptions.length)
  })

  it('should select a radio option', async () => {
    setup()

    const radioInput = screen.getByLabelText(radioGroupOptions[0].label)
    await userEvent.click(radioInput)

    expect(radioInput).toBeChecked()
  })
})
