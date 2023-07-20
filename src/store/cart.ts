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

type CartStore = Pick<CartState, 'items'> & CartActions

// Cart store (state + actions)
export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
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

        return set(() => ({ items: updatedCardItems }))
      }

      // If product is not yet in cart, append the product to the cart
      const productDetail = await getCartItemProduct(slug)

      if (!productDetail) throw new Error()

      updatedCardItems = [...updatedCardItems, { product: productDetail, quantity }]

      set(() => ({ items: updatedCardItems }))
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

// Cart state
const INITIAL_TOTAL_ITEMS = 0

export const useCartState = (): CartState => {
  const items = useCartStore((state) => state.items)

  return {
    items,
    totalItems: items.reduce((total, { quantity }) => total + quantity, INITIAL_TOTAL_ITEMS),
  }
}

// Cart actions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useCartActions = (): CartActions => useCartStore(({ items: _, ...actions }) => actions)
