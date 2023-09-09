import { productClient } from '@/lib/cms/products'
import { urlForImage } from '@/lib/cms/products/image'
import { postProcessImage } from '@/utils/cms/image'

// Get a single product
export const getProduct = async (slug: string, fields: ProductField[]): Promise<Product> => {
  try {
    const query = `*\[_type == "product" && slug == "${slug}"\][0] { ${fields.join(',')} }`

    return await productClient.fetch(query)
  } catch (error) {
    throw error
  }
}

// Get a single product to be presented in the Product Detail Page
export const getProductDetail = async (slug: string): Promise<ProductDetail | null> => {
  try {
    const results: ProductDetail = await getProduct(slug, [
      'id',
      'slug',
      'name',
      'image',
      'category',
      'new',
      'price',
      'description',
      'features',
      'includes',
      'gallery',
      'others',
    ])

    if (!results) return null

    return {
      ...results,
      ...(results?.image ? { image: postProcessImage(results.image, urlForImage) } : {}),
      ...(results?.gallery
        ? {
            gallery: {
              first: postProcessImage(results.gallery.first, urlForImage),
              second: postProcessImage(results.gallery.second, urlForImage),
              third: postProcessImage(results.gallery.third, urlForImage),
            },
          }
        : {}),
    }
  } catch (error) {
    throw error
  }
}

// Get a single product to be presented in one of the sections of the Home Page
export const getHomeProduct = async (slug: string): Promise<ProductLite> => {
  try {
    const results: ProductLite = await getProduct(slug, [
      'id',
      'slug',
      'name',
      'category',
      'image',
      'new',
      'description',
    ])

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

// Get a single product to be presented in "You may also like" section
const getYouMayAlsoLikeProduct = async (slug: string): Promise<YouMayAlsoLikeProduct | null> => {
  try {
    const results: YouMayAlsoLikeProduct = await getProduct(slug, [
      'id',
      'slug',
      'name',
      'category',
      'thumbnailImage',
    ])

    return {
      ...results,
      ...(results?.thumbnailImage
        ? { thumbnailImage: postProcessImage(results.thumbnailImage, urlForImage) }
        : {}),
    }
  } catch (error) {
    throw error
  }
}

// Get all you may also like products
export const getYouMayAlsoLikeProducts = async (
  slugs: string[]
): Promise<YouMayAlsoLikeProduct[]> => {
  try {
    const results = await Promise.allSettled(slugs.map((slug) => getYouMayAlsoLikeProduct(slug)))
    return results
      .map((res) => (res.status === 'fulfilled' ? res.value : null))
      .filter((res) => res) as YouMayAlsoLikeProduct[]
  } catch (error) {
    throw error
  }
}

// Get cart item product
export const getCartItemProduct = async (slug: string): Promise<CartItemProduct | null> => {
  try {
    const results: CartItemProduct = await getProduct(slug, [
      'id',
      'slug',
      'name',
      'shortName',
      'category',
      'price',
      'image',
    ])

    return {
      ...results,
      ...(results?.image ? { image: postProcessImage(results.image, urlForImage) } : {}),
    }
  } catch (error) {
    throw error
  }
}
