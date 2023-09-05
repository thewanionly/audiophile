'use client'

import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'

import { OrderSummary, placeOrder } from '@/services/checkout'
import { useCartState } from '@/store/cart'

import { SHIPPING_FEE, VAT_PERCENTAGE } from '../../utils/constants'
import { useCheckoutContext } from '../Checkout.context'
import { CheckoutSchema, PAYMENT_METHODS_OPTIONS, checkoutSchema } from '../Checkout.schema'
import { BillingDetails } from './BillingDetails'
import { PaymentDetails } from './PaymentDetails'
import { ShippingInfo } from './ShippingInfo'

const S = {
  CheckoutForm: styled.form``,
}

type CheckoutFormProps = {
  openConfirmationModal: (order: OrderSummary) => void
}

export const CheckoutForm = ({ openConfirmationModal }: CheckoutFormProps) => {
  const { items, totalPrice } = useCartState()
  const { setIsCheckingOut } = useCheckoutContext()

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit: SubmitHandler<CheckoutSchema> = async (data) => {
    try {
      setIsCheckingOut(true)

      const orderSummary: OrderSummary = {
        items,
        total: totalPrice,
        shipping: SHIPPING_FEE,
        vat: totalPrice * VAT_PERCENTAGE,
        grandTotal: totalPrice + SHIPPING_FEE,
      }

      const { data: responseData } = await placeOrder(data, orderSummary)

      if (!responseData.ok) throw Error

      // Reset form
      reset()

      // Open confirmation modal
      openConfirmationModal(orderSummary)
    } catch (error) {
      console.error(`Sorry, there's a problem placing your order. Please try again.`)
    } finally {
      setIsCheckingOut(false)
    }
  }

  useEffect(() => {
    // Set default selected option of "paymentMethod" field
    setValue('paymentMethod', PAYMENT_METHODS_OPTIONS[0].value)
  }, [setValue])

  return (
    <S.CheckoutForm id="checkout-form" aria-label="Checkout form" onSubmit={handleSubmit(onSubmit)}>
      <BillingDetails register={register} errors={errors} />
      <ShippingInfo register={register} errors={errors} />
      <PaymentDetails register={register} errors={errors} watch={watch} setValue={setValue} />
    </S.CheckoutForm>
  )
}
