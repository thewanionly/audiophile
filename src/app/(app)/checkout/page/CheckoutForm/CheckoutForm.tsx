'use client'

import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'

import { CheckoutSchema, PAYMENT_METHODS_OPTIONS, checkoutSchema } from '../Checkout.schema'
import { BillingDetails } from './BillingDetails'
import { PaymentDetails } from './PaymentDetails'
import { ShippingInfo } from './ShippingInfo'

const S = {
  CheckoutForm: styled.form``,
}

export const CheckoutForm = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit: SubmitHandler<CheckoutSchema> = (data) => console.log('### data', data)

  useEffect(() => {
    // Set default selected option of "paymentMethod" field
    setValue('paymentMethod', PAYMENT_METHODS_OPTIONS[0].value)
  }, [setValue])

  return (
    <S.CheckoutForm id="checkout-form" aria-label="Checkout form" onSubmit={handleSubmit(onSubmit)}>
      <BillingDetails register={register} errors={errors} />
      <ShippingInfo register={register} errors={errors} />
      <PaymentDetails register={register} errors={errors} watch={watch} />
    </S.CheckoutForm>
  )
}
