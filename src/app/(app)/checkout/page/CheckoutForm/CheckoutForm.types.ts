import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'

import { CheckoutSchema } from '@/utils/schema/checkout'

export type FormSectionProps = {
  register: UseFormRegister<CheckoutSchema>
  errors: FieldErrors<CheckoutSchema>
  watch?: UseFormWatch<CheckoutSchema>
  setValue?: UseFormSetValue<CheckoutSchema>
}
