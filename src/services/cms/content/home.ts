import { client } from '@/lib/cms/content'
import { getProduct } from '../products'

export const getHomeData = async (): Promise<HomeData> => {
  try {
    const query = `*\[_type == "home"\][0] {
      hero,
      primaryFeaturedProduct,
      secondaryFeaturedProduct,
      tertiaryFeaturedProduct,
    }`

    const home: Home = await client.fetch(query)
    const heroProduct = await getProduct(home.hero.slug)

    return {
      hero: {
        product: heroProduct,
        message: home.hero.message,
      },
      primaryFeaturedProduct: {
        product: heroProduct,
        message: home.hero.message,
      },
      secondaryFeaturedProduct: {
        product: heroProduct,
      },
      tertiaryFeaturedProduct: {
        product: heroProduct,
      },
    }
  } catch (error) {
    throw error
  }
}
