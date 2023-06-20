import { productClient } from '@/lib/cms/products'
import { urlForImage } from '@/lib/cms/products/image'
import { postProcessImage } from '@/utils/cms/image'

export const getCategories = async (): Promise<Category[]> => {
  try {
    const query = `*\[_type == "category"\] {
        name,
        slug,
        image,
        displayOrder,
      }`

    const results: Category[] = await productClient.fetch(query)

    return results.map(({ image, ...data }) => ({
      ...data,
      image: postProcessImage(image, urlForImage),
    }))
  } catch (error) {
    throw error
  }
}
