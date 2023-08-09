import { getCartItemProduct } from '@/services/cms/products'

import { useAppStore } from '../store'

// Adds an item to cart
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

// Updates quantity of an item
const updateItemQuantity = (slug: string, quantity: number) =>
  useAppStore.setState((state) => ({
    items: state.items.map((cartItem) =>
      cartItem.product.slug === slug ? { ...cartItem, quantity } : cartItem
    ),
  }))

// TODO:
// removeItem: (slug: string) =>
//   set((state) => ({ items: state.items.filter((cartItem) => cartItem.product.slug !== slug) })),

// Removes all items from the cart
const removeAllItems = () => useAppStore.setState({ items: [] })

export const useCartActions = (): CartActions => ({
  addItem,
  updateItemQuantity,
  removeAllItems,
})
