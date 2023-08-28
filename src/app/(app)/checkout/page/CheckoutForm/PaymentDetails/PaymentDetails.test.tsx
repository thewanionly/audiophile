import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { COD_MESSAGE, PAYMENT_DETAILS } from '../../../utils/constants'
import { PAYMENT_METHODS_OPTIONS, PAYMENT_METHODS } from '../../Checkout.schema'
import { CheckoutForm } from '../CheckoutForm'

const setup = () => {
  render(<CheckoutForm openConfirmationModal={jest.fn()} />)
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

    it.each`
      field
      ${'e-Money Number'}
      ${'e-Money PIN'}
    `(`displays $field field when selected payment method is e-Money`, async ({ field }) => {
      setup()

      const fieldElement = screen.getByRole('textbox', { name: field })
      expect(fieldElement).toBeInTheDocument()
    })

    it('displays COD section when selected payment method is Cash on Delivery', async () => {
      setup()

      const codOption = screen.getByLabelText(PAYMENT_METHODS.cod.label)
      await userEvent.click(codOption)

      const codMessage = screen.getByText(COD_MESSAGE)
      expect(codMessage).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('can select only one of the payment method', async () => {
      setup()

      const eMoneyOption = screen.getByRole('radio', { name: PAYMENT_METHODS.eMoney.label })
      const codOption = screen.getByRole('radio', { name: PAYMENT_METHODS.cod.label })

      // Check eMoney option
      await userEvent.click(eMoneyOption)
      expect(eMoneyOption).toBeChecked()
      expect(codOption).not.toBeChecked()

      // Check cod option
      await userEvent.click(codOption)
      expect(eMoneyOption).not.toBeChecked()
      expect(codOption).toBeChecked()
    })

    it.each`
      field
      ${'e-Money Number'}
      ${'e-Money PIN'}
    `('displays inputted value in $field field', async ({ field }) => {
      const value = '12'
      setup()

      // Check eMoney option
      const eMoneyOption = screen.getByRole('radio', { name: PAYMENT_METHODS.eMoney.label })
      await userEvent.click(eMoneyOption)
      expect(eMoneyOption).toBeChecked()

      const fieldElement = screen.getByRole('textbox', { name: field })
      await userEvent.type(fieldElement, value)

      expect(fieldElement).toHaveValue(value)
    })

    it.each`
      field
      ${'e-Money Number'}
      ${'e-Money PIN'}
    `('can only input numeric values in $field field', async ({ field }) => {
      setup()

      // Check eMoney option
      const eMoneyOption = screen.getByRole('radio', { name: PAYMENT_METHODS.eMoney.label })
      await userEvent.click(eMoneyOption)
      expect(eMoneyOption).toBeChecked()

      const fieldElement = screen.getByRole('textbox', { name: field })

      // Simulate user entering non-numeric values
      userEvent.clear(fieldElement)
      await userEvent.type(fieldElement, 'abc')
      expect(fieldElement).toHaveValue('')

      // Simulate user entering a numeric value
      userEvent.clear(fieldElement)
      await userEvent.type(fieldElement, '12')
      expect(fieldElement).toHaveValue('12')
    })

    it.each`
      field
      ${'e-Money Number'}
      ${'e-Money PIN'}
    `(
      `displays a required error message in $field field when it was touched and then blurred leaving it with an empty value`,
      async ({ field }) => {
        setup()

        const fieldElement = screen.getByRole('textbox', { name: field })
        await userEvent.click(fieldElement)
        await userEvent.click(document.body)

        expect(screen.getByText('Required')).toBeInTheDocument()
      }
    )

    it.each`
      field
      ${'e-Money Number'}
      ${'e-Money PIN'}
    `(
      `hides the required error message in $field field after non-empty value is inputted`,
      async ({ field }) => {
        setup()

        const fieldElement = screen.getByRole('textbox', { name: field })

        // Show required error message
        await userEvent.click(fieldElement)
        await userEvent.click(document.body)
        expect(screen.getByText('Required')).toBeInTheDocument()

        // Input numberic value to remove required error message
        await userEvent.type(fieldElement, '12')
        expect(screen.queryByText('Required')).not.toBeInTheDocument()
      }
    )
  })
})
