import axios, { AxiosResponse } from 'axios'

import { CheckoutSchema } from '@/app/(app)/checkout/page/Checkout.schema'

const FORMSPREE_API = 'https://formspree.io/f/xyyqwnoz'

export type OrderSummary = {
  items: CartItem[]
  total: number
  shipping: number
  vat: number
  grandTotal: number
}

export const placeOrder = async (
  formData: CheckoutSchema,
  order: OrderSummary
): Promise<AxiosResponse> => {
  try {
    return axios.post(FORMSPREE_API, { ...formData, ...order })
  } catch (error) {
    console.error(`Error occurred when placing order:`, error)
    throw error
  }
}
