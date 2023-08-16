import { z } from 'zod'

export const PAYMENT_METHODS = [
  {
    label: 'e-Money',
    value: 'e-money',
  },
  {
    label: 'Cash on Delivery',
    value: 'cod',
  },
]

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
    .string({ invalid_type_error: 'Please select a payment method.' })
    .refine((val) => PAYMENT_METHODS.map(({ value }) => value).includes(val)),
})

// extracting the type
export type CheckoutSchema = z.infer<typeof checkoutSchema>
