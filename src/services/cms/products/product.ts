import { productClient } from '@/lib/cms/products'

// Get all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const query = `*\[_type == "product"\] {
        id,
        slug,
        name,
        category,
      }`

    return await productClient.fetch(query)
  } catch (error) {
    throw error
  }
}

// Get a single product
export const getProduct = async (slug: string): Promise<Product> => {
  try {
    const query = `*\[_type == "product" && slug == "${slug}"\][0] {
        id,
        slug,
        name,
        category,
        image,
        new,
        description
      }`

    return await productClient.fetch(query)
  } catch (error) {
    throw error
  }
}
