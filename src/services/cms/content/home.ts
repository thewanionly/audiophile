import { client } from '@/lib/cms/content'
import { urlForImage } from '@/lib/cms/content/image'
import { postProcessImage } from '@/utils/cms/image'

import { getProduct } from '../products'

export const getHomeData = async (): Promise<HomeData> => {
  try {
    const query = `*\[_type == "home"\][0] {
      hero,
      primaryFeaturedProduct,
      secondaryFeaturedProduct,
      tertiaryFeaturedProduct,
    }`

    const response: Home = await client.fetch(query)
    const home: Home = Object.fromEntries(
      Object.entries(response).map(([key, value]) => [
        key,
        {
          ...value,
          sectionImage: postProcessImage(value?.sectionImage, urlForImage),
        },
      ])
    ) as Home

    const heroProduct = await getProduct(home.hero.slug)
    const primaryFeaturedProduct = await getProduct(home.primaryFeaturedProduct.slug)
    const secondaryFeaturedProduct = await getProduct(home.secondaryFeaturedProduct.slug)
    const tertiaryFeaturedProduct = await getProduct(home.tertiaryFeaturedProduct.slug)

    return {
      hero: {
        product: heroProduct,
        message: home.hero.message,
        sectionImage: home.hero.sectionImage,
      },
      primaryFeaturedProduct: {
        product: primaryFeaturedProduct,
        message: home.primaryFeaturedProduct.message,
        sectionImage: home.primaryFeaturedProduct.sectionImage,
      },
      secondaryFeaturedProduct: {
        product: secondaryFeaturedProduct,
        sectionImage: home.secondaryFeaturedProduct.sectionImage,
      },
      tertiaryFeaturedProduct: {
        product: tertiaryFeaturedProduct,
        sectionImage: home.tertiaryFeaturedProduct.sectionImage,
      },
    }
  } catch (error) {
    throw error
  }
}
