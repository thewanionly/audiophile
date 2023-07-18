import { create } from 'zustand'

import { getCartItemProduct } from '@/services/cms/products'

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
  updateItemQuantity: (slug: string, quantity: number) => void
  incrementItemQuantity: (slug: string) => void
  decrementItemQuantity: (slug: string) => void
  removeItem: (slug: string) => void
  removeAllItems: () => void
}

type CartStore = CartState & CartActions

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  totalItems: 0,
  addItem: async (slug: string, quantity: number) => {
    try {
      const cartitems = get().items
      let updatedCardItems = [...cartitems]

      // If product is already in cart, update quantity
      if (cartitems.some((cartItem) => cartItem.product.slug === slug)) {
        updatedCardItems = updatedCardItems.map((cartItem) =>
          cartItem.product.slug === slug
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )

        return set(() => ({
          items: updatedCardItems,
          totalItems: updatedCardItems.reduce((prev, curr) => prev + curr.quantity, 0),
        }))
      }

      // If product is not yet in cart, append the product to the cart
      const productDetail = await getCartItemProduct(slug)

      if (!productDetail) throw new Error()

      updatedCardItems = [...updatedCardItems, { product: productDetail, quantity }]

      set(() => ({
        items: updatedCardItems,
        totalItems: updatedCardItems.reduce((prev, curr) => prev + curr.quantity, 0),
      }))
    } catch (error) {
      console.log(
        `There's a problem adding your item to cart. Please refresh the page and try again.`
      )
    }
  },
  updateItemQuantity: (slug: string, quantity: number) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.product.slug === slug ? { ...cartItem, quantity } : cartItem
      ),
    })),
  incrementItemQuantity: (slug: string) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.product.slug === slug ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ),
    })),
  decrementItemQuantity: (slug: string) =>
    set((state) => ({
      items: state.items.map((cartItem) =>
        cartItem.product.slug === slug ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ),
    })),
  removeItem: (slug: string) =>
    set((state) => ({ items: state.items.filter((cartItem) => cartItem.product.slug !== slug) })),
  removeAllItems: () => set({ items: [] }),
}))
