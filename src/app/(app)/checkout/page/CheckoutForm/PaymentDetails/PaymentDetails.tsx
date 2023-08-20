import Image from 'next/image'

import styled from '@emotion/styled'

import { Input, RadioGroup, RadioInput } from '@/components'
import { mediaQuery } from '@/styles/utils'

import { COD_MESSAGE, PAYMENT_DETAILS } from '../../../utils/constants'
import { PAYMENT_METHODS, PAYMENT_METHODS_OPTIONS } from '../../Checkout.schema'
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
  CODSection: styled.div`
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      flex-direction: row;
    }
  `,
  CODImageContainer: styled.div`
    flex-shrink: 0;
    position: relative;

    width: 5.8rem;
    aspect-ratio: 1;

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      width: 4.8rem;
    }
  `,
  CODImage: styled(Image)``,
  CODMessage: styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    line-height: 2.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.bodyTextDark};

    ${({ theme }) => mediaQuery(theme.breakPoints.tabletLandscape)} {
      text-align: start;
    }
  `,
}

type PaymentDetailsProps = FormSectionProps

export const PaymentDetails = ({ register, errors, watch }: PaymentDetailsProps) => {
  const currPaymentMethod = watch?.('paymentMethod')

  return (
    <S.FormSection>
      <S.FormSectionHeading>{PAYMENT_DETAILS}</S.FormSectionHeading>
      <S.FormFieldsContainer>
        <RadioGroup
          label="Payment Method"
          error={Boolean(errors.paymentMethod)}
          errorMessage={errors.paymentMethod?.message}
        >
          {PAYMENT_METHODS_OPTIONS.map(({ label, value }) => (
            <RadioInput
              key={value}
              label={label}
              value={value}
              error={Boolean(errors.paymentMethod)}
              {...register('paymentMethod')}
            />
          ))}
        </RadioGroup>
        {currPaymentMethod === PAYMENT_METHODS.cod.value && (
          <S.CODSection>
            <S.CODImageContainer>
              <S.CODImage src="/icons/cod.svg" alt="cash on delivery" fill />
            </S.CODImageContainer>
            <S.CODMessage>{COD_MESSAGE}</S.CODMessage>
          </S.CODSection>
        )}
      </S.FormFieldsContainer>
    </S.FormSection>
  )
}
