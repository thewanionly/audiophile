import { productClient } from '@/lib/cms/products'

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
