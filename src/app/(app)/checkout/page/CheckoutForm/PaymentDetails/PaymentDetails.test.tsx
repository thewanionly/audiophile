import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { COD_MESSAGE, PAYMENT_DETAILS } from '../../../utils/constants'
import { PAYMENT_METHODS_OPTIONS, PAYMENT_METHODS } from '../../Checkout.schema'
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

      PAYMENT_METHODS_OPTIONS.forEach(({ label }) => {
        const fieldElement = screen.getByRole('radio', { name: label })

        expect(fieldElement).toBeInTheDocument()
      })
    })

    it('displays COD section when selected payment method is Cash on Delivery', async () => {
      setup()

      const codOption = screen.getByLabelText(PAYMENT_METHODS.cod.label)
      await userEvent.click(codOption)

      const codMessage = screen.getByText(COD_MESSAGE)
      expect(codMessage).toBeInTheDocument()
    })
  })
})
