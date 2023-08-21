import { render, screen } from '@/tests'

import { ORDER_SUMMARY, SUBMIT_BUTTON } from '../../utils/constants'
import { ORDER_COMPUTATIONS, OrderSummary } from './OrderSummary'

const setup = () => {
  render(<OrderSummary />)
}

describe('OrderSummary', () => {
  it('displays order summary heading', () => {
    setup()

    const orderSummaryHeading = screen.getByRole('heading', { name: ORDER_SUMMARY })
    expect(orderSummaryHeading).toBeInTheDocument()
  })

  it.each`
    label
    ${ORDER_COMPUTATIONS.total.label}
    ${ORDER_COMPUTATIONS.shipping.label}
    ${ORDER_COMPUTATIONS.vat.label}
    ${ORDER_COMPUTATIONS.grandTotal.label}
  `('displays $label value', async ({ label }) => {
    setup()

    const valueText = screen.getByLabelText(label)
    expect(valueText).toBeInTheDocument()
  })

  it('displays submit button', () => {
    setup()

    const submitButton = screen.getByRole('button', { name: SUBMIT_BUTTON })
    expect(submitButton).toBeInTheDocument()
  })
})
