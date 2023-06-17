import { getAboutTheBrand } from '@/services/cms/content'
import { Category } from './page/Category'

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const aboutTheBrand = await getAboutTheBrand()

  return <Category name={params.category} aboutTheBrand={aboutTheBrand} />
}
