import styled from '@emotion/styled'

import { Input } from '@/components'

import { BILLING_DETAILS } from '../../../utils/constants'
import { formSectionHeading, formFieldsContainer, formInput } from '../CheckoutForm.styles'
import { FormSectionProps } from '../CheckoutForm.types'

const S = {
  FormSection: styled.fieldset``,
  FormSectionHeading: styled.legend`
    ${({ theme }) => formSectionHeading(theme)}
  `,
  FormFieldsContainer: styled.div`
    ${({ theme }) => formFieldsContainer(theme)}
  `,
  FormInput: styled(Input)`
    ${({ theme }) => formInput(theme)}
  `,
}

type BillingDetailsProps = FormSectionProps

export const BillingDetails = ({ register, errors }: BillingDetailsProps) => {
  return (
    <S.FormSection>
      <S.FormSectionHeading>{BILLING_DETAILS}</S.FormSectionHeading>
      <S.FormFieldsContainer>
        <S.FormInput
          label="Name"
          id="name"
          {...register('name')}
          error={Boolean(errors.name)}
          errorMessage={errors.name?.message}
        />
        <S.FormInput
          label="Email Address"
          id="email"
          type="email"
          {...register('email')}
          error={Boolean(errors.email)}
          errorMessage={errors.email?.message}
        />
        <S.FormInput
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          {...register('phoneNumber')}
          error={Boolean(errors.phoneNumber)}
          errorMessage={errors.phoneNumber?.message}
        />
      </S.FormFieldsContainer>
    </S.FormSection>
  )
}
