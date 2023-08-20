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

export const checkoutSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }).email({
    message: 'Wrong format',
  }),
  phoneNumber: z.string().min(1, { message: 'Required' }),
  address: z.string().min(1, { message: 'Required' }),
  zipCode: z.string().min(1, { message: 'Required' }),
  city: z.string().min(1, { message: 'Required' }),
  country: z.string().min(1, { message: 'Required' }),
  paymentMethod: z
    .string({ invalid_type_error: 'Required' })
    .refine((val) => PAYMENT_METHODS_OPTIONS.map(({ value }) => value).includes(val)),
})

// extracting the type
export type CheckoutSchema = z.infer<typeof checkoutSchema>
