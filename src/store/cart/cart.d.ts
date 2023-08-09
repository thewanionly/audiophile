interface CartItem {
  product: CartItemProduct
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartActions = {
  addItem: (slug: string, quantity: number) => void
  updateItemQuantity: (slug: string, quantity: number) => void
  // removeItem: (slug: string) => void
  removeAllItems: () => void
}

type CartSlice = Pick<CartState, 'items'>
