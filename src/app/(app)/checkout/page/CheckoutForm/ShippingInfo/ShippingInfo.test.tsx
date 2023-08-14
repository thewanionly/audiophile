import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { SHIPPING_INFO } from '../../../utils/constants'
import { CheckoutForm } from '../CheckoutForm'

const setup = () => {
  render(<CheckoutForm />)
}

describe('ShippingInfo', () => {
  describe('Layout', () => {
    it('displays shipping info text', () => {
      setup()

      const shippingInfoText = screen.getByRole('group', { name: SHIPPING_INFO })
      expect(shippingInfoText).toBeInTheDocument()
    })

    it.each`
      field
      ${'Your Address'}
      ${'ZIP Code'}
      ${'City'}
      ${'Country'}
    `('displays $field field', async ({ field }) => {
      setup()

      const fieldElement = screen.getByRole('textbox', { name: field })
      expect(fieldElement).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    describe('Form input change', () => {
      it.each`
        field
        ${'Your Address'}
        ${'ZIP Code'}
        ${'City'}
        ${'Country'}
      `('displays inputted value in $field field', async ({ field }) => {
        const value = 'test'
        setup()

        const fieldElement = screen.getByRole('textbox', { name: field })
        await userEvent.type(fieldElement, value)

        expect(fieldElement).toHaveValue(value)
      })
    })

    describe('Form validation', () => {
      it.each`
        field
        ${'Your Address'}
        ${'ZIP Code'}
        ${'City'}
        ${'Country'}
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
        ${'Your Address'}
        ${'ZIP Code'}
        ${'City'}
        ${'Country'}
      `(
        `hides the required error message in $field field after non-empty value is inputted`,
        async ({ field }) => {
          setup()

          const fieldElement = screen.getByRole('textbox', { name: field })

          // Show required error message
          await userEvent.click(fieldElement)
          await userEvent.click(document.body)
          expect(screen.getByText('Required')).toBeInTheDocument()

          // Input something to remove required error message
          await userEvent.type(fieldElement, 't')
          expect(screen.queryByText('Required')).not.toBeInTheDocument()
        }
      )
    })
  })
})
