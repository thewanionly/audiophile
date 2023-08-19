'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'

import { RadioGroup, RadioInput } from '@/components'

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

  return (
    <S.CheckoutForm id="checkout-form" aria-label="Checkout form" onSubmit={handleSubmit(onSubmit)}>
      <BillingDetails register={register} errors={errors} />
      <ShippingInfo register={register} errors={errors} />
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
      <button type="submit">Submit</button>
    </S.CheckoutForm>
  )
}
