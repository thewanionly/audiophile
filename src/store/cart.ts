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
  removeItem: (item: string) => void
  removeAllItems: () => void
}

type CartStore = CartState & CartActions

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item: string, quantity: number) =>
    set((state) => ({ items: [...state.items, { slug: item, quantity }] })),
  updateItemQuantity: (item: string, quantity: number) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.slug === item ? { ...cartItem, quantity } : cartItem
      ),
    })),
  removeItem: (item: string) =>
    set((state) => ({ items: state.items.filter((cartItem) => cartItem.slug !== item) })),
  removeAllItems: () => set({ items: [] }),
}))
