'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import styled from '@emotion/styled'

import { CheckoutFormFields } from '../Checkout.types'
import { BillingDetails } from './BillingDetails'

const S = {
  CheckoutForm: styled.form`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `,
}

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormFields>()

  const onSubmit: SubmitHandler<CheckoutFormFields> = (data) => console.log('hello', data)

  return (
    <S.CheckoutForm id="checkout-form" aria-label="Checkout form" onSubmit={handleSubmit(onSubmit)}>
      <BillingDetails register={register} />
    </S.CheckoutForm>
  )
}
