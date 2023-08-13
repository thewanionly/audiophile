import { render, screen } from '@/tests'

import { BILLING_DETAILS } from '../../utils/constants'
import { CheckoutForm } from './CheckoutForm'

const setup = () => {
  render(<CheckoutForm />)
}

describe('CheckoutForm', () => {
  it('displays billing details form group', () => {
    setup()

    const billingDetails = screen.getByRole('group', { name: BILLING_DETAILS })
    expect(billingDetails).toBeInTheDocument()
  })
})
