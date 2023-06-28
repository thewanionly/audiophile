import { notFound } from 'next/navigation'

import { getAboutTheBrand } from '@/services/cms/content'
import { getCategories } from '@/services/cms/products'

import { Category } from './page/Category'

type CategoryPageProps = { params: { category: string } }

export default async function CategoryPage({ params: { category } }: CategoryPageProps) {
  const aboutTheBrand = await getAboutTheBrand()
  const categories = await getCategories()

  const isValidCategory = categories.some(({ slug }) => slug === category)

  if (!isValidCategory) {
    // Redirect to not-found page if category is not valid
    notFound()
  }

  return <Category name={category} aboutTheBrand={aboutTheBrand} categories={categories} />
}
