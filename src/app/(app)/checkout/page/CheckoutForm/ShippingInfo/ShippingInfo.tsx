import { FieldErrors, UseFormRegister } from 'react-hook-form'

import styled from '@emotion/styled'

import { Input } from '@/components'
import { mediaQuery } from '@/styles/utils'

import { SHIPPING_INFO } from '../../../utils/constants'
import { CheckoutSchema } from '../../Checkout.schema'

const S = {
  FormSection: styled.fieldset``,
  FormSectionHeading: styled.legend`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: 2.5rem;
    letter-spacing: 0.0929rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    margin-bottom: 1.6rem;
  `,
  FormFieldsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.6rem;
    row-gap: 2.4rem;
  `,
  FormInput: styled(Input)`
    width: 100%;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      width: calc((100% - 1.6rem) / 2);
    }
  `,
  AddressFormInput: styled(Input)`
    width: 100%;
  `,
}

type ShippingInfoProps = {
  register: UseFormRegister<CheckoutSchema>
  errors: FieldErrors<CheckoutSchema>
}

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
