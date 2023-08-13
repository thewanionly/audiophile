import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { Input } from './Input'

describe('Input', () => {
  it('displays label', () => {
    const labelValue = 'Test'
    render(<Input label={labelValue} />)

    const labelText = screen.getByTestId('input-label')
    expect(labelText).toBeInTheDocument()
  })

  it('displays no error message when error is false and errorMessage prop is not defined', () => {
    render(<Input label="Test" />)

    const errorMessage = screen.queryByTestId('input-error')
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('displays no error message when error is false and errorMessage prop is defined', () => {
    render(<Input label="Test" errorMessage="test error" />)

    const errorMessage = screen.queryByTestId('input-error')
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('displays no error message when error is true and errorMessage prop is not defined', () => {
    render(<Input label="Test" error />)

    const errorMessage = screen.queryByTestId('input-error')
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('displays no error message when error is true and errorMessage prop is defined', () => {
    const errorMessageValue = 'test error'
    render(<Input label="Test" error errorMessage="test error" />)

    const errorMessage = screen.queryByTestId('input-error')
    expect(errorMessage).toBeInTheDocument()

    const errorMessageTextEl = screen.getByText(errorMessageValue)
    expect(errorMessageTextEl).toBeInTheDocument()
  })

  it('displays input box', () => {
    render(<Input label="Test" />)

    const inputBox = screen.getByRole('textbox')
    expect(inputBox).toBeInTheDocument()
  })

  it('can input in the text box', async () => {
    const inputBoxValue = 'abc'
    render(<Input label="Test" />)

    const inputBox = screen.getByRole('textbox')

    await userEvent.type(inputBox, inputBoxValue)
    expect(inputBox).toHaveValue(inputBoxValue)
  })
})
