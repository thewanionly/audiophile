import { render, screen } from '@/tests'

import { ORDER_SUMMARY, SUBMIT_BUTTON } from '../../utils/constants'
import { OrderSummary } from './OrderSummary'

const setup = () => {
  render(<OrderSummary />)
}

describe('OrderSummary', () => {
  it('displays order summary heading', () => {
    setup()

    const orderSummaryHeading = screen.getByRole('heading', { name: ORDER_SUMMARY })
    expect(orderSummaryHeading).toBeInTheDocument()
  })

  it('displays submit button', () => {
    setup()

    const submitButton = screen.getByRole('button', { name: SUBMIT_BUTTON })
    expect(submitButton).toBeInTheDocument()
  })
})
