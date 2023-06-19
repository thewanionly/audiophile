import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories } from '@/services/cms/products'

import { Home } from './page/Home'

export default async function HomePage() {
  const categories = await getCategories()
  const aboutTheBrand = await getAboutTheBrand()

  return <Home aboutTheBrand={aboutTheBrand} categories={categories} />
}
