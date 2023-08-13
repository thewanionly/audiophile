import { z } from 'zod'

export const checkoutSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }).email({
    message: 'Wrong format',
  }),
  phoneNumber: z.string().min(1, { message: 'Required' }),
})

// extracting the type
export type CheckoutSchema = z.infer<typeof checkoutSchema>
