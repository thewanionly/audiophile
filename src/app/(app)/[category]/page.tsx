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

  const aboutTheBrand = await getAboutTheBrand()
  const categoryProducts = await getCategoryProducts(category)

  return <Category name={category} aboutTheBrand={aboutTheBrand} categories={categories} />
}
