import { FieldErrors, UseFormRegister } from 'react-hook-form'

import styled from '@emotion/styled'

import { Input } from '@/components'
import { mediaQuery } from '@/styles/utils'

import { BILLING_DETAILS } from '../../../utils/constants'
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
}

type BillingDetailsProps = {
  register: UseFormRegister<CheckoutSchema>
  errors: FieldErrors<CheckoutSchema>
}

export const BillingDetails = ({ register, errors }: BillingDetailsProps) => {
  return (
    <S.FormSection>
      <S.FormSectionHeading>{BILLING_DETAILS}</S.FormSectionHeading>
      <S.FormFieldsContainer>
        <S.FormInput
          label="Name"
          id="name"
          {...register('name', { required: true, maxLength: 10 })}
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
