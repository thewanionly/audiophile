import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'

import { CheckoutSchema } from '../Checkout.schema'

export type FormSectionProps = {
  register: UseFormRegister<CheckoutSchema>
  errors: FieldErrors<CheckoutSchema>
  watch?: UseFormWatch<CheckoutSchema>
  setValue?: UseFormSetValue<CheckoutSchema>
}