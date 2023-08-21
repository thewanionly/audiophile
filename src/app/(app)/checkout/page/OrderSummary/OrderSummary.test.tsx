import { render, screen } from '@/tests'

import { ORDER_SUMMARY } from '../../utils/constants'
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
})
