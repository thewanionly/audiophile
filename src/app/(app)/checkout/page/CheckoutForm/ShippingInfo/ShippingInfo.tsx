import styled from '@emotion/styled'

import { Input } from '@/components'

import { SHIPPING_INFO } from '../../../utils/constants'
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
  AddressFormInput: styled(Input)`
    width: 100%;
  `,
}

type ShippingInfoProps = FormSectionProps

export const ShippingInfo = ({ register, errors }: ShippingInfoProps) => {
  return (
    <S.FormSection>
      <S.FormSectionHeading>{SHIPPING_INFO}</S.FormSectionHeading>
      <S.FormFieldsContainer>
        <S.AddressFormInput
          label="Your Address"
          id="address"
          {...register('address', { required: true, maxLength: 10 })}
          error={Boolean(errors.address)}
          errorMessage={errors.address?.message}
        />
        <S.FormInput
          label="ZIP Code"
          id="zipCode"
          {...register('zipCode')}
          error={Boolean(errors.zipCode)}
          errorMessage={errors.zipCode?.message}
        />
        <S.FormInput
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
        />
      </S.FormFieldsContainer>
    </S.FormSection>
  )
}
