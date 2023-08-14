import userEvent from '@testing-library/user-event'

import { render, screen } from '@/tests'

import { BILLING_DETAILS } from '../../../utils/constants'
import { CheckoutForm } from '../CheckoutForm'

const setup = () => {
  render(<CheckoutForm />)
}

describe('BillingDetails', () => {
  describe('Layout', () => {
    it('displays billing details text', () => {
      setup()

      const billingDetailsText = screen.getByRole('group', { name: BILLING_DETAILS })
      expect(billingDetailsText).toBeInTheDocument()
    })

    it.each`
      field
      ${'Name'}
      ${'Email Address'}
      ${'Phone Number'}
    `('displays $field field', async ({ field }) => {
      setup()

      const fieldElement = screen.getByRole('textbox', { name: new RegExp(field) })
      expect(fieldElement).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    describe('Form input change', () => {
      it.each`
        field
        ${'Name'}
        ${'Email Address'}
        ${'Phone Number'}
      `('displays inputted value in $field field', async ({ field }) => {
        const value = 'test'
        setup()

        const fieldElement = screen.getByRole('textbox', { name: new RegExp(field) })
        await userEvent.type(fieldElement, value)

        expect(fieldElement).toHaveValue(value)
      })
    })

    describe('Form validation', () => {
      it.each`
        field
        ${'Name'}
        ${'Email Address'}
        ${'Phone Number'}
      `(
        `displays a required error message in $field field when it was touched and then blurred leaving it with an empty value`,
        async ({ field }) => {
          setup()

          const fieldElement = screen.getByRole('textbox', { name: new RegExp(field) })
          await userEvent.click(fieldElement)
          await userEvent.click(document.body)

          expect(screen.getByText('Required')).toBeInTheDocument()
        }
      )

      it.each`
        field
        ${'Name'}
        ${'Email Address'}
        ${'Phone Number'}
      `(
        `hides the required error message in $field field after non-empty value is inputted`,
        async ({ field }) => {
          setup()

          const fieldElement = screen.getByRole('textbox', { name: new RegExp(field) })

          // Show required error message
          await userEvent.click(fieldElement)
          await userEvent.click(document.body)
          expect(screen.getByText('Required')).toBeInTheDocument()

          // Input something to remove required error message
          await userEvent.type(fieldElement, 't')
          expect(screen.queryByText('Required')).not.toBeInTheDocument()
        }
      )

      it('displays incorrect format error message in Email Address field when incorrect format is inputted', async () => {
        setup()

        const emailField = screen.getByRole('textbox', { name: /email address/i })
        await userEvent.type(emailField, 'test')
        await userEvent.click(document.body)

        expect(screen.getByText('Wrong format')).toBeInTheDocument()
      })

      it('hides the incorrect format error message in Email Address field when correct format is inputted', async () => {
        setup()

        const emailField = screen.getByRole('textbox', { name: /email address/i })

        // Input wrong format
        await userEvent.type(emailField, 'test')
        await userEvent.click(document.body)

        expect(screen.getByText('Wrong format')).toBeInTheDocument()

        // Append text to correct the format
        await userEvent.type(emailField, '@test.com')
        expect(screen.queryByText('Wrong format')).not.toBeInTheDocument()
      })
    })
  })
})
