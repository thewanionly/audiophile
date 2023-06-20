import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories } from '@/services/cms/products'
import { mockedHeroSectionData } from '@/tests/__mocks__/data/home'

import { Home } from './page/Home'

export default async function HomePage() {
  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()

  return (
    <Home
      aboutTheBrand={aboutTheBrand}
      categories={categories}
      heroSection={mockedHeroSectionData}
    />
  )
}
