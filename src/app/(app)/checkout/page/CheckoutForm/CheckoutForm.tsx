'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'

import { RadioGroup } from '@/components'

import { CheckoutSchema, PAYMENT_METHODS, checkoutSchema } from '../Checkout.schema'
import { BillingDetails } from './BillingDetails'
import { ShippingInfo } from './ShippingInfo'

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
    formState: { errors },
  } = useForm<CheckoutSchema>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit: SubmitHandler<CheckoutSchema> = (data) => console.log('### data', data)

  console.log('### errors', errors)
  return (
    <S.CheckoutForm id="checkout-form" aria-label="Checkout form" onSubmit={handleSubmit(onSubmit)}>
      <BillingDetails register={register} errors={errors} />
      <ShippingInfo register={register} errors={errors} />
      <RadioGroup
        label="Payment Method"
        id="paymentMethod"
        {...register('paymentMethod')}
        options={PAYMENT_METHODS}
        error={Boolean(errors.paymentMethod)}
        errorMessage={errors.paymentMethod?.message}
      />
      <button type="submit">Submit</button>
    </S.CheckoutForm>
  )
}
