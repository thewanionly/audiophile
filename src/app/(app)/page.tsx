import { getAboutTheBrand } from '@/services/cms/content'
import { getHomeData } from '@/services/cms/content/home'
import { getCategories } from '@/services/cms/products'

import { Home } from './page/Home'

export default async function HomePage() {
  const home = await getHomeData()
  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()

  return (
    <Home
      aboutTheBrand={aboutTheBrand}
      categories={categories}
      heroSection={home.hero}
      primaryFPSection={home.primaryFeaturedProduct}
    />
  )
}
