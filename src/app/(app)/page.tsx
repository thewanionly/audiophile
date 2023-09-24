import { getAboutTheBrand } from '@/services/cms/content'
import { getHomeData } from '@/services/cms/content/home'
import { getCategories } from '@/services/cms/products'

import { Home } from './page/Home'

export default async function HomePage() {
  const [home, categories, aboutTheBrand] = await Promise.all([
    getHomeData(),
    getCategories(),
    getAboutTheBrand(),
  ])

  return (
    <Home
      aboutTheBrand={aboutTheBrand}
      categories={categories}
      heroSection={home.hero}
      primaryFeaturedProduct={home.primaryFeaturedProduct}
      secondaryFeaturedProduct={home.secondaryFeaturedProduct}
      tertiaryFeaturedProduct={home.tertiaryFeaturedProduct}
    />
  )
}
