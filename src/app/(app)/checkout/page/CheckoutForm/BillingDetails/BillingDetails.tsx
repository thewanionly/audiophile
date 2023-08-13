import { UseFormRegister } from 'react-hook-form'

import styled from '@emotion/styled'

import { BILLING_DETAILS } from '../../../utils/constants'
import { CheckoutFormFields } from '../../Checkout.types'

const S = {
  FormSection: styled.fieldset``,
  FormSectionHeading: styled.legend`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm1};
    line-height: 2.5rem;
    letter-spacing: 0.0929rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
  `,
}

type BillingDetailsProps = {
  register: UseFormRegister<CheckoutFormFields>
}

export const BillingDetails = ({ register }: BillingDetailsProps) => {
  return (
    <S.FormSection>
      <S.FormSectionHeading>{BILLING_DETAILS}</S.FormSectionHeading>
    </S.FormSection>
  )
}
