import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { CheckoutSchema } from '../Checkout.schema'

export type FormSectionProps = {
  register: UseFormRegister<CheckoutSchema>
  errors: FieldErrors<CheckoutSchema>
}
