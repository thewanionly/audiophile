import { render, screen } from '@/tests'

import { PAYMENT_DETAILS } from '../../../utils/constants'
import { PAYMENT_METHODS } from '../../Checkout.schema'
import { CheckoutForm } from '../CheckoutForm'

const setup = () => {
  render(<CheckoutForm />)
}

describe('PaymentDetails', () => {
  describe('Layout', () => {
    it('displays payment details text', () => {
      setup()

      const paymentDetailsText = screen.getByRole('group', { name: PAYMENT_DETAILS })
      expect(paymentDetailsText).toBeInTheDocument()
    })

    it('displays Payment Method radio inputs', () => {
      setup()

      PAYMENT_METHODS.forEach(({ label }) => {
        const fieldElement = screen.getByRole('radio', { name: label })

        expect(fieldElement).toBeInTheDocument()
      })
    })
  })
})
