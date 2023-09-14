import { formatPrice } from '@/utils/helpers'

import { SHIPPING_FEE, VAT_PERCENTAGE } from '../constants'

enum OrderComputationField {
  TOTAL = 'total',
  SHIPPING = 'shipping',
  VAT = 'vat',
  GRAND_TOTAL = 'grandTotal',
}

export interface OrderComputationItem {
  id: string
  label: string
  value: string
}

type OrderComputation = Record<OrderComputationField, OrderComputationItem>

export const getOrderComputations = (price: number): OrderComputation => ({
  total: {
    id: 'total',
    label: 'Total',
    value: formatPrice(price),
  },
  shipping: {
    id: 'shipping',
    label: 'Shipping',
    value: formatPrice(SHIPPING_FEE),
  },
  vat: {
    id: 'vat',
    label: 'VAT (Included)',
    value: formatPrice(price * VAT_PERCENTAGE),
  },
  grandTotal: {
    id: 'grandTotal',
    label: 'Grand Total',
    value: formatPrice(price + SHIPPING_FEE),
  },
})
