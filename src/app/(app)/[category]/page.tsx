import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories } from '@/services/cms/products'

import { Category } from './page/Category'

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const aboutTheBrand = await getAboutTheBrand()
  const categories = await getCategories()

  return <Category name={params.category} aboutTheBrand={aboutTheBrand} categories={categories} />
}
