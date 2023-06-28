import { productClient } from '@/lib/cms/products'
import { urlForImage } from '@/lib/cms/products/image'
import { postProcessImage } from '@/utils/cms/image'

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

    const results: Product = await productClient.fetch(query)

    return {
      ...results,
      ...(results?.image ? { image: postProcessImage(results.image, urlForImage) } : {}),
    }
  } catch (error) {
    throw error
  }
}

// Get all products of a category
export const getCategoryProducts = async (category: string): Promise<Product[]> => {
  try {
    const query = `*\[_type == "product" && category == "${category}"\] {
        id,
        slug,
        name,
        category,
        categoryImage,
        new,
        description,
      }`

    const results: Product[] = await productClient.fetch(query)

    return results.map((result) => ({
      ...result,
      ...(result?.categoryImage
        ? { categoryImage: postProcessImage(result.categoryImage, urlForImage) }
        : {}),
    }))
  } catch (error) {
    throw error
  }
}
