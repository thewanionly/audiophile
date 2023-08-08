import { useAppStore } from '../store'

// Cart state
const INITIAL_TOTAL_ITEMS = 0
const INITIAL_TOTAL_PRICE = 0

export const useCartState = (): CartState => {
  const items = useAppStore((state) => state.items)

  return {
    items,
    totalItems: items.reduce((total, { quantity }) => total + quantity, INITIAL_TOTAL_ITEMS),
    totalPrice: items.reduce(
      (total, { quantity, product }) => total + quantity * product.price,
      INITIAL_TOTAL_PRICE
    ),
  }
}
