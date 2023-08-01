import { getCartItemProduct } from '@/services/cms/products'

import { useAppStore } from '../store'

// TODO:
// updateItemQuantity: (slug: string, quantity: number) =>
//   set((state) => ({
//     items: state.items.map((cartItem) =>
//       cartItem.product.slug === slug ? { ...cartItem, quantity } : cartItem
//     ),
//   })),
// incrementItemQuantity: (slug: string) =>
//   set((state) => ({
//     items: state.items.map((cartItem) =>
//       cartItem.product.slug === slug ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//     ),
//   })),
// decrementItemQuantity: (slug: string) =>
//   set((state) => ({
//     items: state.items.map((cartItem) =>
//       cartItem.product.slug === slug ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//     ),
//   })),
// removeItem: (slug: string) =>
//   set((state) => ({ items: state.items.filter((cartItem) => cartItem.product.slug !== slug) })),
// removeAllItems: () => set({ items: [] }),

const addItem = async (slug: string, quantity: number) => {
  try {
    const cartitems = useAppStore.getState().items
    let updatedCardItems = [...cartitems]

    // If product is already in cart, update quantity
    if (cartitems.some((cartItem) => cartItem.product.slug === slug)) {
      updatedCardItems = updatedCardItems.map((cartItem) =>
        cartItem.product.slug === slug
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      )

      return useAppStore.setState(() => ({ items: updatedCardItems }))
    }

    // If product is not yet in cart, append the product to the cart
    const productDetail = await getCartItemProduct(slug)

    if (!productDetail) throw new Error()

    updatedCardItems = [...updatedCardItems, { product: productDetail, quantity }]

    useAppStore.setState(() => ({ items: updatedCardItems }))
  } catch (error) {
    console.log(
      `There's a problem adding your item to cart. Please refresh the page and try again.`
    )
  }
}

export const useCartActions = (): CartActions => ({
  addItem,
})
