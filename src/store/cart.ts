import { create } from 'zustand'

interface CartItem {
  slug: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
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
  totalItems: 0,
  addItem: (item: string, quantity: number) => {
    const cartitems = get().items
    let updatedCardItems = [...cartitems]

    // If product is already in cart, update quantity
    if (cartitems.some((cartItem) => cartItem.slug === item)) {
      updatedCardItems = updatedCardItems.map((cartItem) =>
        cartItem.slug === item ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      )

      return set(() => ({
        items: updatedCardItems,
        totalItems: updatedCardItems.reduce((prev, curr) => prev + curr.quantity, 0),
      }))
    }

    // If product is not yet in cart, append the product to the cart
    updatedCardItems = [...updatedCardItems, { slug: item, quantity }]

    set((state) => ({
      items: [...state.items, { slug: item, quantity }],
      totalItems: updatedCardItems.reduce((prev, curr) => prev + curr.quantity, 0),
    }))
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
