import { z } from 'zod'

export const PAYMENT_METHODS = {
  eMoney: {
    label: 'e-Money',
    value: 'e-money',
  },
  cod: {
    label: 'Cash on Delivery',
    value: 'cod',
  },
}

export const PAYMENT_METHODS_OPTIONS = Object.values(PAYMENT_METHODS)

const base = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }).email({
    message: 'Wrong format',
  }),
  phoneNumber: z.string().min(1, { message: 'Required' }),
  address: z.string().min(1, { message: 'Required' }),
  zipCode: z.string().min(1, { message: 'Required' }),
  city: z.string().min(1, { message: 'Required' }),
  country: z.string().min(1, { message: 'Required' }),
})

// Conditionally require eMoney fields depending on paymentMethod field's value
export const checkoutSchema = z.discriminatedUnion('paymentMethod', [
  z
    .object({
      paymentMethod: z.literal(PAYMENT_METHODS.eMoney.value),
      eMoneyNumber: z.string().min(1, { message: 'Required' }),
      eMoneyPIN: z.string().min(1, { message: 'Required' }),
    })
    .merge(base),
  z
    .object({
      paymentMethod: z.literal(PAYMENT_METHODS.cod.value),
      eMoneyNumber: z.string(),
      eMoneyPIN: z.string(),
    })
    .merge(base),
])

// extracting the type
export type CheckoutSchema = z.infer<typeof checkoutSchema>
