import { create } from 'zustand'

interface CartItem {
  slug: string
  quantity: number
}

type CartState = {
  items: CartItem[]
}

type CartActions = {
  addItem: (item: string, quantity: number) => void
  updateItemQuantity: (item: string, quantity: number) => void
  incrementItemQuantity: (item: string) => void
  decrementItemQuantity: (item: string) => void
  removeItem: (item: string) => void
  removeAllItems: () => void
}

type CartStore = CartState & CartActions

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item: string, quantity: number) => {
    const cartitems = get().items

    // If product is already in cart, update quantity
    if (cartitems.some((cartItem) => cartItem.slug === item)) {
      return set((state) => ({
        items: state.items.map((cartItem) =>
          cartItem.slug === item
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        ),
      }))
    }

    set((state) => ({ items: [...state.items, { slug: item, quantity }] }))
  },
  updateItemQuantity: (item: string, quantity: number) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.slug === item ? { ...cartItem, quantity } : cartItem
      ),
    })),
  incrementItemQuantity: (item: string) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.slug === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ),
    })),
  decrementItemQuantity: (item: string) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.slug === item ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ),
    })),
  removeItem: (item: string) =>
    set((state) => ({ items: state.items.filter((cartItem) => cartItem.slug !== item) })),
  removeAllItems: () => set({ items: [] }),
}))
