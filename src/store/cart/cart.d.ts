interface CartItem {
  product: CartItemProduct
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
}

type CartActions = {
  addItem: (slug: string, quantity: number) => void
  // updateItemQuantity: (slug: string, quantity: number) => void
  // incrementItemQuantity: (slug: string) => void
  // decrementItemQuantity: (slug: string) => void
  // removeItem: (slug: string) => void
  // removeAllItems: () => void
}

type CartSlice = Pick<CartState, 'items'>
