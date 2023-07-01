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
export const getCategoryProducts = async (category: string): Promise<CategoryProduct[]> => {
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

    const results: CategoryProduct[] = await productClient.fetch(query)

    return results
      .map((result) => ({
        ...result,
        ...(result?.categoryImage
          ? { categoryImage: postProcessImage(result.categoryImage, urlForImage) }
          : {}),
      }))
      .sort((product1, product2) => {
        // Sort by "new" property first (new = true comes first before new = false)
        if (product1.new && !product2.new) {
          return -1
        } else if (!product1.new && product2.new) {
          return 1
        } else {
          // Sort alphabetically if "new" properties are equal
          return product1.name.localeCompare(product2.name)
        }
      })
  } catch (error) {
    throw error
  }
}
