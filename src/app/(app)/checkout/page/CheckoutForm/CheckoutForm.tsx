'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'

import { CheckoutSchema, checkoutSchema } from '../Checkout.schema'
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
  } = useForm<CheckoutSchema>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit: SubmitHandler<CheckoutSchema> = (data) => console.log(data)

  return (
    <S.CheckoutForm id="checkout-form" aria-label="Checkout form" onSubmit={handleSubmit(onSubmit)}>
      <BillingDetails register={register} errors={errors} />
    </S.CheckoutForm>
  )
}
