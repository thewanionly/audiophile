import styled from '@emotion/styled'

import { Input, RadioGroup, RadioInput } from '@/components'

import { PAYMENT_DETAILS } from '../../../utils/constants'
import { PAYMENT_METHODS } from '../../Checkout.schema'
import { formSectionHeading, formInput } from '../CheckoutForm.styles'
import { FormSectionProps } from '../CheckoutForm.types'

const S = {
  FormSection: styled.fieldset``,
  FormSectionHeading: styled.legend`
    ${({ theme }) => formSectionHeading(theme)}
  `,
  FormFieldsContainer: styled.div``,
  FormInput: styled(Input)`
    ${({ theme }) => formInput(theme)}
  `,
  AddressFormInput: styled(Input)`
    width: 100%;
  `,
}

type PaymentDetailsProps = FormSectionProps

export const PaymentDetails = ({ register, errors }: PaymentDetailsProps) => {
  return (
    <S.FormSection>
      <S.FormSectionHeading>{PAYMENT_DETAILS}</S.FormSectionHeading>
      <S.FormFieldsContainer>
        <RadioGroup
          label="Payment Method"
          error={Boolean(errors.paymentMethod)}
          errorMessage={errors.paymentMethod?.message}
        >
          {PAYMENT_METHODS.map(({ label, value }) => (
            <RadioInput
              key={value}
              label={label}
              value={value}
              error={Boolean(errors.paymentMethod)}
              {...register('paymentMethod')}
            />
          ))}
        </RadioGroup>
        {/* <S.FormInput
          label="City"
          id="city"
          {...register('city')}
          error={Boolean(errors.city)}
          errorMessage={errors.city?.message}
        />
        <S.FormInput
          label="Country"
          id="country"
          {...register('country')}
          error={Boolean(errors.country)}
          errorMessage={errors.country?.message}
        /> */}
      </S.FormFieldsContainer>
    </S.FormSection>
  )
}
