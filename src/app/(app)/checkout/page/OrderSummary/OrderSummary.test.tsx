import { render, screen } from '@/tests'

import { ORDER_SUMMARY, SUBMIT_BUTTON } from '../../utils/constants'
import { getOrderComputations } from '../../utils/helpers'
import { OrderSummary } from './OrderSummary'

const orderComputation = getOrderComputations(0)

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
    ${orderComputation.total.label}
    ${orderComputation.shipping.label}
    ${orderComputation.vat.label}
    ${orderComputation.grandTotal.label}
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
