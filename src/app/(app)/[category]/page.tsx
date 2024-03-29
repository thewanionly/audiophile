import { notFound } from 'next/navigation'

import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories, getCategoryProducts } from '@/services/cms/products'

import { Category } from './page/Category'

type CategoryPageProps = { params: { category: string } }

export default async function CategoryPage({ params: { category } }: CategoryPageProps) {
  const categories = await getCategories()

  const isValidCategory = categories.some(({ slug }) => slug === category)

  if (!isValidCategory) {
    // Redirect to not-found page if category is not valid
    notFound()
  }

  const [aboutTheBrand, categoryProducts] = await Promise.all([
    getAboutTheBrand(),
    getCategoryProducts(category),
  ])

  return (
    <Category
      name={category}
      products={categoryProducts}
      aboutTheBrand={aboutTheBrand}
      categories={categories}
    />
  )
}
